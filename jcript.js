/* الوضع الداكن */
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');
  darkBtn.textContent =
    document.body.classList.contains('dark-theme')
      ? 'الوضع الفاتح'
      : 'الوضع الداكن';
};

/* Accordion */
document.querySelectorAll('.accordion-title').forEach(title => {
  title.onclick = () => {
    title.parentElement.classList.toggle('active');
  };
});

/* تفعيل المهارات */
document.querySelectorAll('.skills-list li').forEach(skill => {
  skill.onclick = () => {
    skill.classList.toggle('active');
  };
});

/* نسخ الإيميل */
const email = document.getElementById('email');
email.onclick = () => {
  navigator.clipboard.writeText(email.textContent);
  alert('تم نسخ الإيميل');
};
