# Küresel Tarih ve Edebiyat Atlası - Ajan / Proje Hafızası (Agent Rules & Memory)

## 📌 Proje Kimliği ve Geliştiriciler
- **Proje Adı:** Küresel Tarih ve Edebiyat Atlası (TÜBİTAK 3B Projesi)
- **Baş Geliştirici:** Bayram Akpamukçu (`Bayram Akpamukcu`)
- **Katkı Sağlayanlar:** Yusuf Maral & Yusuf Özcan
- **Canlı Yayın Domaini:** `https://bayramakpamukcu.site`
- **GitHub Deposu:** `https://github.com/broadday0909/kuresel-tarih-atlasi.git`
- **Netlify Projesi:** `peppy-cascaron-42fc19` (ID: `b9f993be-ae64-4e78-9245-c060dfe5f183`)

---

## ⚡ Otomatik CI/CD & Canlı Dağıtım İş Akışı (ÇOK ÖNEMLİ)
Kullanıcı herhangi bir değişiklik, yeni durak, düzeltme veya özellik istediğinde şu adımlar **otomatik ve eksiksiz** uygulanmalıdır:
1. Kod değişiklikleri `index.html` üzerinde yapılır.
2. Git'e commit atılır ve GitHub'a push edilir:
   ```powershell
   git add index.html
   git commit -m "<anlamlı_mesaj>"
   git push origin main
   ```
3. Netlify CLI ile doğrudan canlıya tek adımda deploy edilir:
   ```powershell
   npx.cmd netlify deploy --prod --dir .
   ```
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
  - Sol alt rozet: `Developed by Bayram Akpamukçu • with Yusuf Maral & Yusuf Özcan` her zaman korunmalıdır.
  - Sol üst başlıktan "Developed by" kaldırılmış kalmalıdır (yalnızca sol altta yer alır).
  - Üst filtre menüsü tek satır, kompakt ve yatay kaydırılabilir kalmalıdır.
  - Giriş ekranı (Intro) bekleme süresi 5 saniyedir (5000ms).
