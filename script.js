document.addEventListener('DOMContentLoaded', function() {
    // הוספת כפתור התפריט להדר
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // יצירת כפתור ההמבורגר
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger';
    hamburgerBtn.innerHTML = '☰';
    hamburgerBtn.setAttribute('aria-label', 'תפריט');
    
    // הוספת הכפתור להדר
    header.insertBefore(hamburgerBtn, nav);
    
    // פונקציונליות לפתיחת וסגירת התפריט
    hamburgerBtn.addEventListener('click', function() {
        const navUl = document.querySelector('nav ul');
        navUl.classList.toggle('show');
        
        // שינוי האייקון כשהתפריט פתוח/סגור
        if (navUl.classList.contains('show')) {
            hamburgerBtn.innerHTML = '✕';
        } else {
            hamburgerBtn.innerHTML = '☰';
        }
    });
    
    // סגירת התפריט בלחיצה על קישור
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('nav ul').classList.remove('show');
            hamburgerBtn.innerHTML = '☰';
        });
    });
});
