from flask import Flask, render_template, request, jsonify
import g4f
app = Flask(__name__)

# Создаю словарь для хранения истории разговора
conversation_history = {}

# Функция для обрезки истории разговора
def trim_history(history, max_length=4096):
    current_length = sum(len(message["content"]) for message in history)
    while history and current_length > max_length:
        removed_message = history.pop(0)
        current_length -= len(removed_message["content"])
    return history

# Очистка истории
@app.route("/clear", methods=["POST"])
def clear_history():
    user_id = request.remote_addr  # Используем IP-адрес как идентификатор пользователя
    conversation_history[user_id] = []
    return jsonify(message="История диалога очищена.")

@app.route("/gpt4free_query", methods=["POST"])
def gpt4free_query():
    user_id = request.remote_addr
    user_input = request.form.get("user_input")

    # Если история для пользователя не существует, создаем её
    if user_id not in conversation_history:
        conversation_history[user_id] = []

    # Добавляем сообщение пользователя в историю и обрезаем, если превышает max_length
    conversation_history[user_id].append({"role": "user", "content": user_input})
    conversation_history[user_id] = trim_history(conversation_history[user_id])

    # Получаем ответ от gpt4free
    try:
        response = g4f.ChatCompletion.create(
            model=g4f.models.gpt_4o,
            messages=conversation_history[user_id],
            # provider=g4f.Provider.GeekGpt,  # Замените на доступный провайдер
        )
        chat_gpt_response = response
    except Exception as e:
        # print(f"Error occurred with provider {g4f.Provider.GeekGpt.name}: {e}")
        print(f"Error occurred: {e}")
        chat_gpt_response = "Извините, произошла ошибка."

    # Добавляем ответ ассистента в историю
    conversation_history[user_id].append({"role": "assistant", "content": chat_gpt_response})
    
    # Возвращаем ответ пользователю
    return jsonify(response=chat_gpt_response)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)



