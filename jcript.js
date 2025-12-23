const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // تغيير نص الزر بناءً على الوضع
    if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.textContent = 'الوضع الفاتح';
    } else {
        darkModeBtn.textContent = 'الوضع الداكن';
    }
});