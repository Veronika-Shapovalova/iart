📋 Требования
Python 3.8 или новее

pip (устанавливается вместе с Python)

Git (опционально, если проект клонируется)

🚀 Быстрый старт
1. Клонирование репозитория (если нужно)
bash
git clone https://github.com/ваш-репозиторий/lesson2.git
cd lesson2
2. Создание виртуального окружения
bash
python -m venv venv
Активация окружения
Windows (PowerShell / CMD):

bash
.\venv\Scripts\activate
macOS / Linux:

bash
source venv/bin/activate
3. Установка зависимостей
bash
pip install -r requirements.txt
4. Запуск Flask-приложения
bash
flask run
Или (если основной файл называется app.py):

bash
python app.py
5. Открытие в браузере
Перейдите по адресу:
🔗 http://localhost:5000

⚙️ Дополнительные настройки
Режим разработки (автоперезагрузка)
bash
flask run --debug
Настройка переменных окружения
Создайте файл .env в корне проекта и добавьте:

ini
FLASK_APP=app.py  # или имя вашего основного файла
FLASK_ENV=development  # режим разработки
🔧 Возможные проблемы и решения
❌ Ошибки при установке зависимостей
Обновите pip:

bash
python -m pip install --upgrade pip
Попробуйте установить Flask отдельно:

bash
pip install flask
❌ Проблемы с виртуальным окружением
Если команда activate не работает:

Убедитесь, что виртуальное окружение создано (venv есть в папке проекта).

Попробуйте пересоздать его:

bash
rm -rf venv  # удалить старое окружение (macOS/Linux)
python -m venv venv  # создать заново
❌ Ошибки при запуске Flask
"Port 5000 is in use" → Закройте другие Flask-приложения или укажите другой порт:

bash
flask run --port 5001
"ModuleNotFoundError" → Проверьте, активировано ли виртуальное окружение (venv).

📁 Структура проекта (пример)
lesson2/
├── venv/               # Виртуальное окружение (не в Git)
├── static/             # CSS, JS, изображения
│   ├── css/
│   ├── js/
│   └── images/
├── templates/          # HTML-шаблоны
│   └── index.html
├── app.py              # Основной файл Flask
├── requirements.txt    # Зависимости
└── .env                # Переменные окружения (опционально)
📌 Примечания
Для остановки сервера нажмите Ctrl + C в терминале.

Если проект использует базу данных или API, укажите это в документации.
