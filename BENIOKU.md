# Semore Games web sitesi

Popshot (ve sonraki oyunlar) için mağazaların istediği sayfalar:

| Sayfa | Dosya | Adres (yayından sonra) |
|---|---|---|
| Ana sayfa | `index.html` | `https://semoregames.github.io/` |
| Popshot tanıtım | `popshot/index.html` | `https://semoregames.github.io/popshot/` |
| **Gizlilik Politikası** | `popshot/privacy/index.html` | `https://semoregames.github.io/popshot/privacy/` |
| **Destek** | `popshot/support/index.html` | `https://semoregames.github.io/popshot/support/` |
| app-ads.txt | `app-ads.txt` | `https://semoregames.github.io/app-ads.txt` |

Sayfalar Türkçe ve İngilizcedir; ziyaretçinin tarayıcı diline göre açılır, sağ üstten değiştirilebilir.

## Yayına alma (GitHub Pages, ücretsiz)

1. **Hesap:** github.com'da bir hesap aç (ya da var olanla giriş yap). Adresin `semoregames.github.io` olması için
   sağ üstteki **+ → New organization → Free** ile `semoregames` adında ücretsiz bir organizasyon oluştur.
   (İstersen kendi kullanıcı adınla da olur; o zaman adres `kullaniciadin.github.io` olur.)
2. **Depo:** Organizasyonun içinde **New repository** → adı tam olarak `semoregames.github.io` → **Public** → **Create repository**.
3. **Dosyaları yükle:** Depo sayfasında **uploading an existing file** bağlantısına tıkla. Bu klasörün **içindekileri**
   (klasörün kendisini değil: `index.html`, `style.css`, `lang.js`, `app-ads.txt`, `assets`, `popshot`) sürükleyip bırak →
   **Commit changes**.
4. **Pages'i aç:** Depoda **Settings → Pages** → *Source*: **Deploy from a branch** → *Branch*: **main**, klasör **/(root)** → **Save**.
   1–2 dakika sonra site yayında olur.

## Mağazalara yazılacak adresler

- **App Store Connect → Uygulama Bilgileri → Gizlilik Politikası URL'si:** `https://semoregames.github.io/popshot/privacy/`
- **App Store Connect → Sürüm → Destek URL'si:** `https://semoregames.github.io/popshot/support/`
- **Pazarlama URL'si (isteğe bağlı):** `https://semoregames.github.io/popshot/`
- **Google Play Console → Uygulama içeriği → Gizlilik politikası:** aynı gizlilik adresi.
- **Geliştirici web sitesi** (iki mağazada da): `https://semoregames.github.io` — AdMob app-ads.txt dosyasını buradan okur.

## app-ads.txt

AdMob hesabını açınca **AdMob → Uygulamalar → app-ads.txt ayarla** bölümünde verilen satırı (`google.com, pub-…, DIRECT, f08c47fec0942fa0`)
`app-ads.txt` dosyasına yaz ve başındaki `#` işaretini kaldır. GitHub'da dosyaya tıklayıp kalem simgesiyle düzenleyebilirsin.

## Yeni oyun ekleme (ör. Elim Sende)

1. `popshot` klasörünü kopyalayıp yeni adla kaydet (ör. `elim-sende`).
2. İçindeki üç sayfada oyun adını, açıklamayı ve gizlilik politikasındaki "Topladığımız veriler" tablosunu yeni oyuna göre güncelle.
3. Oyunun ikonunu `assets` klasörüne koy.
4. `index.html` içindeki "Elim Sende – Yakında" kartını, Popshot kartı gibi bir bağlantıya çevir.
