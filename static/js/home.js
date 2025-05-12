document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    let timeoutId;

    // Функция для показа меню
    function showDropdown() {
        clearTimeout(timeoutId);
        dropdownMenu.classList.add('show');
    }
    
    // Функция для скрытия меню
    function hideDropdown() {
        dropdownMenu.classList.remove('show');
    }
    
    // Слушатель для кнопки открытия выпадающего списка
    dropdownToggle.addEventListener('mouseover', showDropdown);
    
    // Слушатель для кнопки закрытия выпадающего списка
    dropdownToggle.addEventListener('mouseout', () => {
        timeoutId = setTimeout(hideDropdown, 200);
    });
    
    // Слушатель для пунктов выпадающего списка
    dropdownMenu.addEventListener('mouseover', showDropdown);
    
    // Слушатель для пунктов выпадающего списка (для скрытия при выборе)
    dropdownMenu.addEventListener('click', hideDropdown);  
});

document.addEventListener('DOMContentLoaded', function() {
const content = document.querySelector('.content');

window.addEventListener('scroll', function(e) {
let scrollPosition = window.scrollY;

if (scrollPosition > 100) {
    content.classList.add('active');
}
});
});


document.addEventListener('DOMContentLoaded', () => {
const gallery = document.querySelector('.gallery');

// Добавление эффекта при наведении курсора
gallery.addEventListener('mouseover', (event) => {
if (event.target.tagName === 'IMG') {
    event.target.style.filter = 'brightness(0.7)';
}
});

// Удаление эффекта при уходе курсора
gallery.addEventListener('mouseout', (event) => {
if (event.target.tagName === 'IMG') {
    event.target.style.filter = '';
}
});
});


// для спуска в сайте
document.addEventListener('DOMContentLoaded', function() {
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Обработчик клика по кнопке выпадающего меню
dropdownToggle.addEventListener('click', function(e) {
e.preventDefault();
dropdownMenu.classList.toggle('hidden');
});

// Обработчики кликов по ссылкам в выпадающем меню
const links = dropdownMenu.querySelectorAll('li a');
links.forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
});
});

// Обработчик клика по всему экрану для закрытия меню
window.addEventListener('click', function(event) {
if (!event.target.matches('#dropdown-toggle')) {
    dropdownMenu.classList.add('hidden');
}
});
});

document.querySelector('.trigger').addEventListener('click', function() {
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight === '100px') {
      content.style.maxHeight = '500px';
    } else {
      content.style.maxHeight = '100px';
    }
  });

  
  window.addEventListener('DOMContentLoaded', function() {
    moveSlide(0); // Инициализировать с первой картинки
  });



 