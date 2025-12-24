const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  darkModeBtn.textContent =
    document.body.classList.contains('dark-theme')
      ? 'الوضع الفاتح'
      : 'الوضع الداكن';
});
