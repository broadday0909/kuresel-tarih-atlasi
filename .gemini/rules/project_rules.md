# Küresel Tarih ve Edebiyat Atlası - Ajan / Proje Hafızası (Agent Rules & Memory)

## 📌 Proje Kimliği ve Geliştiriciler
- **Proje Adı:** Küresel Tarih ve Edebiyat Atlası (TÜBİTAK 3B Projesi)
- **Akademik Danışman:** Öğr. Gör. Dr. Ayşegül Elçi
- **Proje Yürütücüsü & Geliştirici:** Bayram Akpamukçu (`Bayram Akpamukcu`)
- **Katkı Sağlayanlar:** Sami Yusuf Maral
- **Canlı Yayın Domaini:** `https://bayramakpamukcu.site`
- **GitHub Deposu:** `https://github.com/broadday0909/kuresel-tarih-atlasi.git`
- **Netlify Projesi:** `peppy-cascaron-42fc19` (ID: `b9f993be-ae64-4e78-9245-c060dfe5f183`)

---

## ⚡ Otomatik CI/CD & Canlı Dağıtım İş Akışı (ÇOK ÖNEMLİ)
Kullanıcı herhangi bir değişiklik, yeni durak, düzeltme veya özellik istediğinde şu adımlar **otomatik ve eksiksiz** uygulanmalıdır:
1. Kod değişiklikleri `index.html` üzerinde yapılır ve JS sözdizimi doğrulanır.
2. Git'e commit atılır ve GitHub'a push edilir:
   ```powershell
   git add -A
   git commit -m "<anlamlı_mesaj>"
   git push origin main
   ```
3. GitHub Pages otomatik olarak 20-30 saniye içinde derleyip yayına alır (`https://bayramakpamukcu.site`). Netlify artık kullanılmaz (kredi sınırı nedeniyle iptal edilmiştir).
4. Kullanıcıya değişikliklerin canlıda olduğu bildirilir.

---

## 🛠️ Mimari & Kod Standartları
- **Tek Dosya Mimarisi:** Proje `index.html` içinde vanilla JS, Tailwind CSS, Three.js ve Globe.gl ile çalışır.
- **Kritik Mobil / Düşük GPU Optimizasyonları (Korumaya Devam Et):**
  - `renderer.setPixelRatio(targetDPR)`: Mobilde kesinlikle 1.5'i geçmemelidir (3x retina ekranlarda GPU çökmesini/ısınmasını önler).
  - `antialias`: Mobilde `false`, masaüstünde `true` tutulmalıdır.
  - `#globeViz` ve canvas için `touch-action: none !important;` zorunludur.
  - Pin etiketlerinde mobilde `backdrop-filter: blur(...)` açılmamalıdır (katı renkli cam kullanılır).
  - Bulut katmanı poligon sayısı mobilde 48 segmentte tutulmalıdır.
- **Tasarım Kuralları:**
  - `Geliştirici: Bayram Akpamukçu • yardımlarıyla Sami Yusuf Maral` rozeti, Zaman Tüneli'ni kapatmaması için sol üst başlık kutusunun hemen altında yer alır.
  - Üst filtre menüsü tek satır, kompakt ve yatay kaydırılabilir kalmalıdır.
  - Zaman Tüneli alt merkezde konumlanır.
  - Giriş ekranı (Intro) otomatik geçiş YAPMAZ; YALNIZCA kullanıcı "Haritayı Keşfet" butonuna tıkladığında haritaya geçilir.

