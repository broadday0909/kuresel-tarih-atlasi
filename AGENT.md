# 🤖 AJAN REHBERİ VE PROJE HAFIZASI (AGENT.MD)

Bu dosya, bu projede çalışacak olan yapay zeka ajanlarının (Antigravity vb.) projeyi, geliştiricileri, mimariyi ve otomatik dağıtım kurallarını eksiksiz hatırlaması için oluşturulmuştur.

---

## 🌍 Proje Genel Bilgileri
- **Proje Adı:** Küresel Tarih ve Edebiyat Atlası (TÜBİTAK 3B Projesi)
- **Akademik Danışman:** Öğr. Gör. Dr. Ayşegül Elçi
- **Proje Yürütücüsü & Geliştirici:** Bayram Akpamukçu
- **Destek / Katkı:** Sami Yusuf Maral
- **Özel Alan Adı:** [https://bayramakpamukcu.site](https://bayramakpamukcu.site) & [https://www.bayramakpamukcu.site](https://www.bayramakpamukcu.site)
- **GitHub Deposu:** [https://github.com/broadday0909/kuresel-tarih-atlasi.git](https://github.com/broadday0909/kuresel-tarih-atlasi.git)
- **Birincil & Sınırsız Hosting:** **GitHub Pages** ([https://broadday0909.github.io/kuresel-tarih-atlasi/](https://broadday0909.github.io/kuresel-tarih-atlasi/))
- **Özel Alan Adı Entegrasyonu:** `bayramakpamukcu.site` ve `www.bayramakpamukcu.site` doğrudan GitHub Pages IP'lerine (`185.199.108.153` vb.) ve `broadday0909.github.io` CNAME'ine bağlıdır.
- **GitHub Yetkilendirmesi (Personal Access Token):** Ajanın doğrudan yetkili çalışması için yerel git remote origin URL'sinde kullanıcı belirteci tanımlıdır.
- **İPTAL EDİLEN ESKİ PLATFORM (Netlify):** Netlify aylık 300 kredi sınırını aşıp 403 Forbidden hatası verdiği için sistem **tamamen terk edilmiş ve devre dışı bırakılmıştır**. Artık Netlify kullanılmaz, kredi/ücret derdi yoktur.

---

## 🚀 OTOMATİK İŞ AKIŞI (HER DEĞİŞİKLİKTE UYGULANACAK)
Kullanıcı herhangi bir değişiklik, yeni durak, düzeltme veya stil güncellemesi istediğinde:
1. `index.html` dosyası güncellenir ve JS sözdizimi doğrulanır.
2. Yerel Git'e eklenip GitHub `main` dalına push edilir:
   ```powershell
   git add -A
   git commit -m "Aciklayici commit mesaji"
   git push origin main
   ```
3. GitHub Pages otomatik olarak 20-30 saniye içinde derleyip yayına alır (ek bir deploy komutuna veya üçüncü parti servislere gerek yoktur; 100% ücretsiz ve kesintisizdir).
4. GitHub Pages build durumu kontrol edilir ve kullanıcıya bilgi verilir (`https://bayramakpamukcu.site`).

---

## 📱 MOBİL & PERFORMANS KURALLARI (BOZULMAMASI GEREKENLER)
1. **DPR Sınırı:** Mobilde `targetDPR` en fazla `1.5` olmalıdır. (Telefonların 3x Retina ekranlarında 23 milyon piksel çizip aşırı ısınmayı önlemek için kritik).
2. **Antialias:** Masaüstünde açık, mobilde kapalıdır (`!isMobileDevice`).
3. **Dokunmatik Akıcılığı:** `#globeViz` ve canvas için CSS'te `touch-action: none !important;` zorunludur.
4. **Pin Blur Kısıtlaması:** 23 pin etiketinde mobilde `backdrop-filter: blur(...)` yerine `rgba(8, 12, 24, 0.95)` katı arka plan kullanılmalıdır.

---

## 🎨 TASARIM VE İMZA STANDARTLARI
- **Sol Üst Kutu Altı:** `Geliştirici: Bayram Akpamukçu • yardımlarıyla Sami Yusuf Maral` rozeti, Zaman Tüneli'ni kapatmaması için sol üst başlık kutusunun hemen altında yer alır.
- **Üst Menü:** Ekranı kapatmaması için tek satır, ultra kompakt ve yatay kaydırılabilir kalmalıdır.
- **Zaman Tüneli:** Alt merkezde konumlanır.
- **İntro Ekranı:** Otomatik geçiş YOKTUR; sayfa YALNIZCA kullanıcı "Haritayı Keşfet" butonuna tıkladığında açılır.

