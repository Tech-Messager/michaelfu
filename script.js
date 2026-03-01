// script.js - Complete JavaScript functionality for theme toggle, FAQ accordion, WeChat modal, and smooth scrolling

// Theme Toggle Functionality
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// FAQ Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

// WeChat Modal Functionality
const weChatModal = document.getElementById('wechat-modal');
const openModal = () => {
    weChatModal.style.display = 'block';
};
const closeModal = () => {
    weChatModal.style.display = 'none';
};

document.getElementById('open-wechat').addEventListener('click', openModal);
document.getElementById('close-wechat').addEventListener('click', closeModal);

// Smooth Scrolling Functionality
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});