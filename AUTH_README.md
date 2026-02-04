# Glioblastom TMZ Sistem - Kimlik Doğrulama Sistemi

## 🔐 Giriş Bilgileri

**Kullanıcı Adı:** `admin`  
**Şifre:** `deneme1223`

## 📋 Nasıl Kullanılır?

### 1. İlk Giriş
1. `login.html` sayfasını tarayıcınızda açın
2. Kullanıcı adı: `admin`
3. Şifre: `deneme1223`
4. "Giriş Yap" butonuna tıklayın

### 2. Sistem Kullanımı
- Başarılı girişten sonra otomatik olarak ana sayfaya yönlendirileceksiniz
- Tüm sayfalar artık korumalıdır
- Giriş yapmadan hiçbir sayfaya erişilemez

### 3. Çıkış Yapma
- Ana sayfanın alt kısmında "🚪 Çıkış Yap" butonuna tıklayın
- Onay verdikten sonra login sayfasına yönlendirileceksiniz

## 🔒 Güvenlik Özellikleri

### Session Yönetimi
- Giriş bilgileri `sessionStorage` ile saklanır
- Tarayıcı kapatıldığında oturum otomatik kapanır
- 30 dakika işlem yapılmazsa oturum zaman aşımına uğrar

### Sayfa Koruması
- Tüm sayfalar (`index.html`, `sayfa1-6.html`) korumalıdır
- Giriş yapılmadan erişim engellenmiştir
- Her sayfa yüklendiğinde oturum kontrolü yapılır

### Otomatik Yönlendirme
- Giriş yapılmamışsa → `login.html`
- Giriş yapılmışsa → İlgili sayfa
- Çıkış yapılınca → `login.html`

## 📁 Dosya Yapısı

```
proje web sayfasi/
├── login.html          # Giriş sayfası
├── auth.js             # Kimlik doğrulama script'i
├── index.html          # Ana sayfa (korumalı)
├── sayfa1.html         # Hasta bilgileri (korumalı)
├── sayfa2.html         # MR yükleme (korumalı)
├── sayfa3.html         # Moleküler testler (korumalı)
├── sayfa4.html         # AI analiz (korumalı)
├── sayfa5.html         # Sonuçlar (korumalı)
└── sayfa6.html         # Teknik mimari (korumalı)
```

## 🎨 Login Sayfası Özellikleri

- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Animasyonlar**: Slide-in, pulse efektleri
- **Hata Gösterimi**: Shake animasyonu ile hata mesajları
- **Görsel Feedback**: Hatalı giriş durumunda kırmızı border
- **Enter Tuşu Desteği**: Enter ile form gönderilebilir

## ⚙️ Teknik Detaylar

### auth.js İçeriği
```javascript
- Oturum kontrolü (sessionStorage)
- Otomatik yönlendirme
- Çıkış fonksiyonu (logout)
- Zaman aşımı kontrolü (30 dakika)
- Her 5 dakikada bir oturum kontrolü
```

### Session Verileri
```javascript
{
  isLoggedIn: 'true',
  username: 'admin',
  loginTime: '2026-02-04T14:03:00.000Z'
}
```

## 🚀 Test Etme

1. **Giriş Testi:**
   - Doğru bilgilerle giriş yapın → Başarılı
   - Yanlış bilgilerle giriş yapın → Hata mesajı

2. **Sayfa Koruması Testi:**
   - Giriş yapmadan `index.html` açın → `login.html`'e yönlendirilir
   - Giriş yapın → Tüm sayfalara erişebilirsiniz

3. **Çıkış Testi:**
   - "Çıkış Yap" butonuna tıklayın → Login sayfasına döner
   - Tekrar sayfa açmaya çalışın → Login ister

4. **Zaman Aşımı Testi:**
   - Giriş yapın ve 30 dakika bekleyin
   - Herhangi bir sayfayı yenileyin → Otomatik çıkış

## 📝 Notlar

- **Güvenlik:** Bu basit bir demo authentication sistemidir. Production ortamında backend authentication kullanılmalıdır.
- **Şifre:** Şifre plaintext olarak saklanmaktadır. Gerçek uygulamalarda hash kullanılmalıdır.
- **Session:** SessionStorage kullanıldığı için tarayıcı kapatıldığında oturum kapanır.
- **Çoklu Kullanıcı:** Şu anda sadece `admin` kullanıcısı vardır. Gerekirse daha fazla kullanıcı eklenebilir.

## 🔧 Gelecek İyileştirmeler (Opsiyonel)

- [ ] Backend API entegrasyonu
- [ ] Veritabanı ile kullanıcı yönetimi
- [ ] Şifre hash'leme (bcrypt)
- [ ] "Beni Hatırla" özelliği (localStorage)
- [ ] Şifre sıfırlama
- [ ] Çoklu kullanıcı rolleri (admin, doktor, teknisyen)
- [ ] Aktivite log'ları
- [ ] 2FA (Two-Factor Authentication)

## ✅ Tamamlanan Özellikler

- [x] Login sayfası tasarımı
- [x] Session-based authentication
- [x] Tüm sayfalara koruma eklendi
- [x] Çıkış fonksiyonu
- [x] Otomatik yönlendirme
- [x] Zaman aşımı kontrolü
- [x] Responsive tasarım
- [x] Hata gösterimi
- [x] Animasyonlar
