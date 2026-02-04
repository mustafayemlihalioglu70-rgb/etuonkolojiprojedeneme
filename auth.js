// Authentication kontrolü - Tüm sayfalarda kullanılacak
(function() {
    'use strict';
    
    // Sayfa yüklendiğinde oturum kontrolü
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    // Login sayfası değilse ve giriş yapılmamışsa yönlendir
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'login.html' && isLoggedIn !== 'true') {
        window.location.href = 'login.html';
    }
})();

// Çıkış fonksiyonu - Global olarak kullanılabilir
function logout() {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
        sessionStorage.clear();
        localStorage.clear(); // Form verilerini de temizle
        window.location.href = 'login.html';
    }
}

// Oturum süresini kontrol et (30 dakika)
function checkSessionTimeout() {
    const loginTime = sessionStorage.getItem('loginTime');
    if (loginTime) {
        const now = new Date().getTime();
        const loginTimestamp = new Date(loginTime).getTime();
        const thirtyMinutes = 30 * 60 * 1000;
        
        if (now - loginTimestamp > thirtyMinutes) {
            alert('Oturumunuz zaman aşımına uğradı. Lütfen tekrar giriş yapınız.');
            sessionStorage.clear();
            window.location.href = 'login.html';
        }
    }
}

// Her 5 dakikada bir oturum kontrolü yap
setInterval(checkSessionTimeout, 5 * 60 * 1000);
