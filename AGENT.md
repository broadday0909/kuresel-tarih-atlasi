# 🤖 AJAN REHBERİ VE PROJE HAFIZASI (AGENT.MD)

Bu dosya, bu projede çalışacak olan yapay zeka ajanlarının (Antigravity vb.) projeyi, geliştiricileri, mimariyi ve otomatik dağıtım kurallarını eksiksiz hatırlaması için oluşturulmuştur.

---

## 🌍 Proje Genel Bilgileri
- **Proje Adı:** Küresel Tarih ve Edebiyat Atlası (TÜBİTAK 3B Projesi)
- **Baş Geliştirici:** Bayram Akpamukçu
- **Destek / Katkı:** Yusuf Maral & Yusuf Özcan
- **Canlı Web Sitesi:** [https://bayramakpamukcu.site](https://bayramakpamukcu.site)
- **GitHub Deposu:** [https://github.com/broadday0909/kuresel-tarih-atlasi.git](https://github.com/broadday0909/kuresel-tarih-atlasi.git)
- **Netlify Site Adı:** `peppy-cascaron-42fc19`
- **Netlify Site ID:** `b9f993be-ae64-4e78-9245-c060dfe5f183`

---

## 🚀 OTOMATİK İŞ AKIŞI (HER PROMPTTA UYGULANACAK)
Kullanıcı herhangi bir değişiklik, yeni şehir, edebi durak veya stil güncellemesi istediğinde:
1. `index.html` dosyası güncellenir.
2. Yerel Git'e eklenip GitHub `main` dalına push edilir:
   ```powershell
   git add -A
   git commit -m "Aciklayici commit mesaji"
   git push origin main
   ```
3. Netlify'a tek komutla otomatik üretim dağıtımı (production deploy) yapılır:
   ```powershell
   npx.cmd netlify deploy --prod --dir .
   ```
4. Kullanıcıya canlı linki (`https://bayramakpamukcu.site`) ile birlikte bilgi verilir.

---

## 📱 MOBİL & PERFORMANS KURALLARI (BOZULMAMASI GEREKENLER)
1. **DPR Sınırı:** Mobilde `targetDPR` en fazla `1.5` olmalıdır. (Telefonların 3x Retina ekranlarında 23 milyon piksel çizip aşırı ısınmayı önlemek için kritik).
2. **Antialias:** Masaüstünde açık, mobilde kapalıdır (`!isMobileDevice`).
3. **Dokunmatik Akıcılığı:** `#globeViz` ve canvas için CSS'te `touch-action: none !important;` zorunludur.
4. **Pin Blur Kısıtlaması:** 23 pin etiketinde mobilde `backdrop-filter: blur(...)` yerine `rgba(8, 12, 24, 0.95)` katı arka plan kullanılmalıdır.

---

## 🎨 TASARIM VE İMZA STANDARTLARI
- **Sol Alt Köşe:** `Developed by Bayram Akpamukçu • with Yusuf Maral & Yusuf Özcan` altın ışıklı rozeti daima bulunmalıdır.
- **Sol Üst Başlık:** "TÜBİTAK Projesi • Küresel Tarih ve Edebiyat Atlası" yer alır; burada yinelenen isim imzası bulunmaz.
- **Üst Menü:** Ekranı kapatmaması için tek satır, ultra kompakt ve yatay kaydırılabilir kalmalıdır.
- **İntro Ekranı:** Açılış animasyonu ve altın çizgi süresi 5 saniyedir (5000ms).
