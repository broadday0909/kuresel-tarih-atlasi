window.__ATLAS_EXTRA_DATA__ = window.__ATLAS_EXTRA_DATA__ || {};

    window.__ATLAS_EXTRA_DATA__.CURATED_BATTLE_SIMULATIONS = {
      canakkale: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Deniz Zaferi",
            btn_en: "1. Naval Victory",
            title_tr: "18 Mart 1915: Nusret Mayınları ve Boğaz Savunması",
            title_en: "March 18, 1915: Nusret Mine Line & Strait Defense",
            desc_tr: "İtilaf donanmasının zırhlı armadası Çanakkale Boğazı'na yüklendi. Nusret Mayın Gemisi'nin Erenköy Koyu'na döşediği mayınlar ve Seyit Onbaşı'nın top atışı Bouvet, Irresistible ve Ocean zırhlılarını sulara gömdü.",
            desc_en: "Allied battleships entered the Dardanelles. Mines secretly laid by Nusret in Erenköy Bay and Corporal Seyit's artillery fire sank Bouvet, Irresistible, and Ocean.",
            forces_tr: "Türk Boğaz Müstahkemukimliği vs. İtilaf Birleşik Donanması",
            forces_en: "Turkish Strait Fortifications vs. Allied Combined Fleet",
            outcome_tr: "Denizden Geçiş Kesin Olarak Durduruldu (Çanakkale Geçilmez)",
            outcome_en: "Naval Breakthrough Decisively Repelled",
            focusLat: 40.04,
            focusLng: 26.24,
            vectors: [
              { startLat: 39.88, startLng: 25.95, endLat: 40.06, endLng: 26.25, type: 'attack', label: "İtilaf Donanması Taarruzu" },
              { startLat: 40.14, startLng: 26.40, endLat: 40.05, endLng: 26.26, type: 'defense', label: "Nusret Mayın Hattı & Mecidiye Tabyası" }
            ],
            rings: [
              { lat: 40.05, lng: 26.26, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.55, speed: 0.55, repeat: 650 },
              { lat: 40.14, lng: 26.40, color: ['rgba(251,191,36,0.9)', 'rgba(251,191,36,0)'], maxR: 0.45, speed: 0.45, repeat: 850 }
            ],
            markers: [
              { lat: 40.03, lng: 26.29, icon: "⚓", label: "Erenköy Nusret Mayın Hattı", label_en: "Nusret Mine Line", tacColor: "#fbbf24" },
              { lat: 40.09, lng: 26.36, icon: "💥", label: "Mecidiye Tabyası (Seyit Onbaşı)", label_en: "Corporal Seyit Battery", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "2. Arıburnu & 57. Alay",
            btn_en: "2. ANZAC & 57th Reg.",
            title_tr: "25 Nisan 1915: Arıburnu Çıkarması ve 57. Alay Destanı",
            title_en: "April 25, 1915: ANZAC Landing & 57th Regiment Counter-Attack",
            desc_tr: "Seddülbahir ve Arıburnu kıyılarına yapılan kara çıkarmasına karşı Yarbay Mustafa Kemal, 57. Alay ile Kocaçimen-Conkbayırı hattında 'Size taarruzu değil, ölmeyi emrediyorum!' emriyle cepheyi kilitledi.",
            desc_en: "Against the landings at Cape Helles and Ari Burnu, Lt. Col. Mustafa Kemal led the 57th Regiment onto Chunuk Bair with the historic order: 'I order you not to attack, I order you to die!'",
            forces_tr: "19. Tümen (57. Alay - Mustafa Kemal) vs. ANZAC Kolordusu",
            forces_en: "19th Division (57th Reg. - Mustafa Kemal) vs. ANZAC Corps",
            outcome_tr: "Yarımada Sırtları Tutuldu ve İlerleyiş Durduruldu",
            outcome_en: "High Ground Secured, Allied Advance Halted",
            focusLat: 40.23,
            focusLng: 26.28,
            vectors: [
              { startLat: 40.18, startLng: 26.05, endLat: 40.24, endLng: 26.27, type: 'attack', label: "Arıburnu ANZAC Çıkarması" },
              { startLat: 40.21, startLng: 26.38, endLat: 40.25, endLng: 26.29, type: 'defense', label: "57. Alay Karşı Taarruzu (Mustafa Kemal)" }
            ],
            rings: [
              { lat: 40.24, lng: 26.28, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.6, speed: 0.6, repeat: 600 }
            ],
            markers: [
              { lat: 40.24, lng: 26.27, icon: "⚔️", label: "Arıburnu & 57. Alay Cephesi", label_en: "Ari Burnu & 57th Regiment", tacColor: "#ef4444" },
              { lat: 40.04, lng: 26.18, icon: "🛡️", label: "Seddülbahir Savunması", label_en: "Cape Helles Defense", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Conkbayırı Zaferi",
            btn_en: "3. Chunuk Bair Victory",
            title_tr: "Ağustos 1915: Anafartalar ve Conkbayırı Süngü Hücumu",
            title_en: "August 1915: Sari Bair & Anafartalar Counter-Offensive",
            desc_tr: "Anafartalar Grup Komutanı Albay Mustafa Kemal'in 10 Ağustos sabahı Conkbayırı'nda bizzat yönettiği süngü hücumuyla İtilaf kuvvetleri geri püskürtüldü ve cephe kesin Türk zaferiyle sonuçlandı.",
            desc_en: "Col. Mustafa Kemal, Commander of the Anafartalar Group, personally led the August 10 bayonet charge at Chunuk Bair, sealing ultimate Turkish victory across the peninsula.",
            forces_tr: "Anafartalar Grubu (Mustafa Kemal) vs. İngiliz IX. Kolordusu & ANZAC",
            forces_en: "Anafartalar Group (Mustafa Kemal) vs. British IX Corps & ANZAC",
            outcome_tr: "Kesin Türk Zaferi & İtilaf Tahliyesi",
            outcome_en: "Decisive Turkish Victory & Allied Evacuation",
            focusLat: 40.28,
            focusLng: 26.31,
            vectors: [
              { startLat: 40.31, startLng: 26.22, endLat: 40.27, endLng: 26.31, type: 'attack', label: "Suvla Koyu İngiliz Çıkarması" },
              { startLat: 40.29, startLng: 26.39, endLat: 40.26, endLng: 26.31, type: 'defense', label: "Conkbayırı & Anafartalar Süngü Hücumu" }
            ],
            rings: [
              { lat: 40.26, lng: 26.31, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.65, speed: 0.65, repeat: 620 }
            ],
            markers: [
              { lat: 40.26, lng: 26.31, icon: "🏆", label: "Conkbayırı Zafer Tepesi", label_en: "Chunuk Bair Victory Ridge", tacColor: "#fbbf24" },
              { lat: 40.30, lng: 26.26, icon: "⚔️", label: "Anafartalar Cephesi", label_en: "Anafartalar Front", tacColor: "#ef4444" }
            ]
          }
        ]
      },
      istanbul: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Kuşatma & Şahi",
            btn_en: "1. Siege & Great Cannon",
            title_tr: "6 Nisan 1453: Surların Kuşatılması ve Şahi Toplarının Ateşi",
            title_en: "April 6, 1453: Theodosian Walls & The Great Cannon Barrage",
            desc_tr: "Fatih Sultan Mehmed (II. Mehmed) Edirne'den dökülen devasa Şahi toplarını Topkapı-Edirnekapı surları karşısına konuşlandırdı. Rumeli ve Anadolu Hisarları ile Boğaz kontrol altına alındı.",
            desc_en: "Sultan Mehmed II deployed the massive Orban 'Şahi' bombards against the Theodosian Walls while Rumeli and Anadolu Fortresses sealed the Bosphorus.",
            forces_tr: "Osmanlı Ordusu (80.000+ Asker & Şahi Bataryaları) vs. Bizans Savunması",
            forces_en: "Ottoman Army & Bombard Batteries vs. Byzantine Garrison",
            outcome_tr: "Bin Yıllık Surlarda İlk Büyük Gedikler Açıldı",
            outcome_en: "First Major Breaches Opened in the Millennial Walls",
            focusLat: 41.02,
            focusLng: 28.93,
            vectors: [
              { startLat: 41.67, startLng: 26.55, endLat: 41.02, endLng: 28.92, type: 'attack', label: "Edirne'den Osmanlı Ordusu & Şahi Topları Yürüyüşü" },
              { startLat: 41.08, startLng: 29.05, endLat: 41.02, endLng: 28.98, type: 'defense', label: "Rumeli Hisarı Boğaz Ablukası" }
            ],
            rings: [
              { lat: 41.02, lng: 28.92, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.6, speed: 0.6, repeat: 620 }
            ],
            markers: [
              { lat: 41.02, lng: 28.92, icon: "💣", label: "Topkapı Surları & Şahi Bataryası", label_en: "Theodosian Walls & Şahi Cannon", tacColor: "#ef4444" },
              { lat: 41.08, lng: 29.05, icon: "🏰", label: "Rumeli Hisarı", label_en: "Rumeli Fortress", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Gemiler Karadan",
            btn_en: "2. Ships Over Land",
            title_tr: "21-22 Nisan 1453: 72 Geminin Karadan Haliç'e İndirilmesi",
            title_en: "April 21-22, 1453: 72 Ottoman Ships Hauled Over Land into the Golden Horn",
            desc_tr: "Bizans'ın Haliç girişine gerdiği dev zinciri aşmak için Fatih Sultan Mehmed dünya harp tarihinin en dahi manevrasıyla 72 kadırgayı Dolmabahçe-Kasımpaşa hattından kızaklarla Haliç'e indirdi.",
            desc_en: "Bypassing the Golden Horn chain, Sultan Mehmed II executed a masterstroke by hauling 72 galleys over greased logs from Dolmabahçe into Kasımpaşa overnight.",
            forces_tr: "Osmanlı Donanması (72 Kadırga) vs. Haliç Zinciri & Venedik-Bizans Filosu",
            forces_en: "Ottoman Fleet (72 Galleys) vs. Golden Horn Chain & Allied Fleet",
            outcome_tr: "Haliç Surları Denizden Kuşatıldı, Savunma İkiye Bölündü",
            outcome_en: "Golden Horn Sea Walls Flanked, Defenders Split",
            focusLat: 41.04,
            focusLng: 28.97,
            vectors: [
              { startLat: 41.04, startLng: 29.00, endLat: 41.03, endLng: 28.95, type: 'defense', label: "Gemilerin Dolmabahçe'den Haliç'e Karadan Yürütülmesi" },
              { startLat: 40.98, startLng: 28.99, endLat: 41.01, endLng: 28.98, type: 'attack', label: "Marmara Donanma Ablukası" }
            ],
            rings: [
              { lat: 41.03, lng: 28.96, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.55, speed: 0.55, repeat: 640 }
            ],
            markers: [
              { lat: 41.038, lng: 28.972, icon: "⛵", label: "Gemilerin Karadan Yürütülmesi", label_en: "Overland Ship Route (Kasımpaşa)", tacColor: "#fbbf24" },
              { lat: 41.018, lng: 28.978, icon: "⛓️", label: "Haliç Zincir Hattı", label_en: "Golden Horn Chain", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Fetih & Yeni Çağ",
            btn_en: "3. Final Assault",
            title_tr: "29 Mayıs 1453: Son Genel Taarruz, Ulubatlı Hasan ve Fetih",
            title_en: "May 29, 1453: Final General Assault & Dawn of a New Age",
            desc_tr: "29 Mayıs şafağında üç dalga halinde başlayan genel taarruzda Ulubatlı Hasan Topkapı burçlarına sancağı dikti. İstanbul'un fethiyle Orta Çağ kapandı ve Yeni Çağ başladı.",
            desc_en: "At dawn on May 29, three successive assault waves breached the Topkapı sector as Ulubatlı Hasan raised the banner, ending the Middle Ages.",
            forces_tr: "Yeniçeri Merkez Kolu (Fatih Sultan Mehmed) vs. Son Bizans Savunma Hattı",
            forces_en: "Elite Janissary Corps (Mehmed II) vs. Inner Wall Defenders",
            outcome_tr: "İstanbul'un Fethi • Orta Çağ Kapandı, Yeni Çağ Başladı",
            outcome_en: "Conquest of Constantinople • Dawn of the Early Modern Era",
            focusLat: 41.01,
            focusLng: 28.97,
            vectors: [
              { startLat: 41.03, startLng: 28.89, endLat: 41.01, endLng: 28.97, type: 'attack', label: "Topkapı-Aya Romanos Nihai Yarma Harekatı" },
              { startLat: 41.03, startLng: 28.95, endLat: 41.01, endLng: 28.97, type: 'defense', label: "Haliç Cephesi Eşzamanlı Taarruzu" }
            ],
            rings: [
              { lat: 41.008, lng: 28.98, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.7, speed: 0.7, repeat: 580 }
            ],
            markers: [
              { lat: 41.018, lng: 28.924, icon: "🚩", label: "Ulubatlı Hasan Burcu (Topkapı)", label_en: "Ulubatlı Hasan Bastion", tacColor: "#fbbf24" },
              { lat: 41.008, lng: 28.980, icon: "🕌", label: "Ayasofya & Fetih Merkezi", label_en: "Hagia Sophia", tacColor: "#ef4444" }
            ]
          }
        ]
      },
      ankara: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Sakarya Savunması",
            btn_en: "1. Battle of Sakarya",
            title_tr: "Ağustos-Eylül 1921: Sakarya Meydan Muharebesi (Hattı Müdafaa Yoktur)",
            title_en: "Aug-Sept 1921: Battle of Sakarya (Defense of the Entire Surface)",
            desc_tr: "Polatlı-Haymana önlerine kadar yaklaşan taarruza karşı Başkomutan Mustafa Kemal Paşa, dünya harp literatürünü değiştiren 'Hattı müdafaa yoktur, sathı müdafaa vardır; o satıh bütün vatandır!' doktrinini uyguladı.",
            desc_en: "At Polatlı-Haymana near Ankara, Commander-in-Chief Mustafa Kemal Pasha issued his historic total-surface defense doctrine, halting the offensive after 22 days and nights.",
            forces_tr: "TBMM Ordusu (Mustafa Kemal Paşa) vs. Yunan Küçük Asya Ordusu",
            forces_en: "Turkish Grand National Assembly Army vs. Greek Expeditionary Army",
            outcome_tr: "22 Gün 22 Gece Sonunda Taarruz Kırıldı (1683'ten Beri İlk Geri Çekilişin Sonu)",
            outcome_en: "Offensive Broken After 22 Days and Nights",
            focusLat: 39.65,
            focusLng: 32.25,
            vectors: [
              { startLat: 39.75, startLng: 30.52, endLat: 39.58, endLng: 32.14, type: 'attack', label: "Eskişehir-Polatlı İlerleyiş Hattı" },
              { startLat: 39.93, startLng: 32.85, endLat: 39.58, endLng: 32.18, type: 'defense', label: "Ankara-Sakarya Sathı Müdafaa Hattı" }
            ],
            rings: [
              { lat: 39.58, lng: 32.15, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.7, speed: 0.6, repeat: 620 }
            ],
            markers: [
              { lat: 39.58, lng: 32.14, icon: "🛡️", label: "Polatlı Duatepe & Sakarya Hattı", label_en: "Duatepe & Sakarya Defense Line", tacColor: "#fbbf24" },
              { lat: 39.43, lng: 32.49, icon: "⚔️", label: "Haymana-Mangaldağı Cephesi", label_en: "Haymana-Mangaldağı Front", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "2. Büyük Taarruz",
            btn_en: "2. Great Offensive",
            title_tr: "26-30 Ağustos 1922: Kocatepe'den Dumlupınar Başkomutanlık Meydan Muharebesi",
            title_en: "Aug 26-30, 1922: The Great Offensive & Battle of Dumlupınar",
            desc_tr: "Ankara'dan yönetilen bir yıllık gizli hazırlığın ardından 26 Ağustos şafağında Kocatepe'den başlayan Büyük Taarruz, 30 Ağustos'ta Dumlupınar'da kesin zaferle taçlandı.",
            desc_en: "Launched at dawn on August 26 from Kocatepe, the Great Offensive encircled opposing forces at Dumlupınar on August 30.",
            forces_tr: "Türk Batı Cephesi Orduları vs. Afyon-Dumlupınar Tahkimat Hattı",
            forces_en: "Turkish Western Front Armies vs. Afyon-Dumlupınar Fortified Line",
            outcome_tr: "Kesin Meydan Muharebesi Zaferi & 'Ordular! İlk Hedefiniz Akdeniz'dir!'",
            outcome_en: "Decisive Victory & Order: 'Armies, Your First Goal is the Mediterranean!'",
            focusLat: 39.10,
            focusLng: 31.20,
            vectors: [
              { startLat: 39.93, startLng: 32.85, endLat: 38.75, endLng: 30.54, type: 'defense', label: "Ankara Başkomutanlık Karargahı Sevk Hattı" },
              { startLat: 38.75, startLng: 30.54, endLat: 38.42, endLng: 27.14, type: 'attack', label: "Büyük Taarruz: Kocatepe ➔ Dumlupınar ➔ İzmir" }
            ],
            rings: [
              { lat: 38.85, lng: 30.15, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.75, speed: 0.7, repeat: 600 }
            ],
            markers: [
              { lat: 38.65, lng: 30.52, icon: "💥", label: "Afyon Kocatepe Karargahı", label_en: "Kocatepe Command Post", tacColor: "#ef4444" },
              { lat: 38.85, lng: 29.98, icon: "🏆", label: "Dumlupınar Zafer Meydanı", label_en: "Dumlupınar Battlefield", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Cumhuriyetin İlanı",
            btn_en: "3. Republic Proclaimed",
            title_tr: "29 Ekim 1923: Başkent Ankara ve Cumhuriyetin İlanı",
            title_en: "October 29, 1923: Proclamation of the Republic of Türkiye in Ankara",
            desc_tr: "Milli Mücadele'nin karargahı Ankara, 13 Ekim 1923'te başkent ilan edildi ve 29 Ekim 1923'te Gazi Mustafa Kemal Atatürk önderliğinde Türkiye Cumhuriyeti kuruldu.",
            desc_en: "Following the War of Independence, Ankara became the capital on October 13 and the Republic of Türkiye was proclaimed on October 29, 1923.",
            forces_tr: "TBMM & Gazi Mustafa Kemal Atatürk",
            forces_en: "Grand National Assembly & Mustafa Kemal Atatürk",
            outcome_tr: "Tam Bağımsız ve Çağdaş Türkiye Cumhuriyeti Kuruldu",
            outcome_en: "Sovereign Republic of Türkiye Established",
            focusLat: 39.93,
            focusLng: 32.85,
            vectors: [
              { startLat: 39.93, startLng: 32.85, endLat: 41.01, endLng: 28.98, type: 'defense', label: "Cumhuriyet Devrimleri & Ulusal Egemenlik Ağı" },
              { startLat: 39.93, startLng: 32.85, endLat: 38.42, endLng: 27.14, type: 'defense', label: "İktisat ve Kültür Atılımı Hattı" }
            ],
            rings: [
              { lat: 39.93, lng: 32.85, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.8, speed: 0.65, repeat: 620 }
            ],
            markers: [
              { lat: 39.942, lng: 32.854, icon: "🏛️", label: "I. TBMM & Ulus Karargahı", label_en: "First Parliament (Ulus)", tacColor: "#fbbf24" },
              { lat: 39.925, lng: 32.837, icon: "🇹🇷", label: "Anıtkabir (Ebedi İstirahatgah)", label_en: "Anıtkabir", tacColor: "#ef4444" }
            ]
          }
        ]
      },
      malazgirt: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Karşılaşma & Kefen",
            btn_en: "1. Muster & Oath",
            title_tr: "26 Ağustos 1071: Sultan Alparslan'ın Beyaz Kefen Konuşması",
            title_en: "August 26, 1071: Sultan Alp Arslan's Shroud Speech & Deployment",
            desc_tr: "Sultan Alparslan, cuma namazının ardından beyaz kefenini giyip 'Eğer şehit olursam bu beyaz elbise kefenim olsun' diyerek ordusuna seslendi. 40.000 kişilik Selçuklu atlı okçuları, 70.000 kişilik ağır zırhlı Doğu Roma (Bizans) ordusunun karşısına dizildi.",
            desc_en: "Sultan Alp Arslan donned his white burial shroud and led 40,000 Seljuk horse archers against Emperor Romanos IV Diogenes's 70,000-strong Byzantine imperial army on the plains of Manzikert.",
            forces_tr: "Büyük Selçuklu Ordusu (Sultan Alparslan) vs. Doğu Roma İmparatorluğu (Romen Diyojen)",
            forces_en: "Great Seljuk Army (Alp Arslan) vs. Byzantine Empire (Romanos IV)",
            outcome_tr: "Stratejik Konuşlanma ve Psikolojik Üstünlük Sağlandı",
            outcome_en: "Strategic High Ground & Moral Superiority Established",
            focusLat: 39.145,
            focusLng: 42.540,
            vectors: [
              { startLat: 39.125, startLng: 42.610, endLat: 39.145, endLng: 42.540, type: 'attack', label: "Bizans İmparatorluk Ağır Lejyonları Taarruzu" },
              { startLat: 39.165, startLng: 42.470, endLat: 39.145, endLng: 42.540, type: 'defense', label: "Selçuklu Atlı Okçu Kanat Düzeni" }
            ],
            rings: [
              { lat: 39.145, lng: 42.540, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.55, speed: 0.55, repeat: 700 }
            ],
            markers: [
              { lat: 39.155, lng: 42.505, icon: "🏹", label: "Sultan Alparslan Karargahı", label_en: "Sultan Alp Arslan HQ", tacColor: "#ef4444" },
              { lat: 39.135, lng: 42.585, icon: "🛡️", label: "İmparator Romen Diyojen Merkez Hattı", label_en: "Emperor Romanos IV Center", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Turan & Kurt Kapanı",
            btn_en: "2. Crescent Trap",
            title_tr: "Hilal & Turan Taktiği: Sahte Ricat ile Çemberin Kapanması",
            title_en: "The Crescent Feigned Retreat & Encirclement Maneuver",
            desc_tr: "Selçuklu merkez birlikleri sahte ricat (geri çekilme) yaparak Bizans öncü kuvvetlerini Malazgirt Ovası'nın derinliğine çekti. Kanatlardaki Peçenek ve Uz Türklerinin Selçuklu saflarına geçmesiyle hilalin uçları birleşti ve Bizans ordusu kuşatıldı.",
            desc_en: "Seljuk feigned retreat drew Byzantine forces into the plain. Peçenek and Uz Turkic units switched sides, completing the crescent trap and encircling the Byzantine imperial core.",
            forces_tr: "Selçuklu Çember Hattı (Peçenek & Uz İttifakı) vs. Kuşatılan Bizans Merkez Ordusu",
            forces_en: "Seljuk Encirclement (Peçenek & Uz Allies) vs. Trapped Byzantine Core",
            outcome_tr: "Bizans Ordusu Çembere Alındı ve Düzen Dağıldı",
            outcome_en: "Byzantine Flanks Broken • Core Encircled",
            focusLat: 39.145,
            focusLng: 42.540,
            vectors: [
              { startLat: 39.175, startLng: 42.520, endLat: 39.145, endLng: 42.540, type: 'attack', label: "Kuzey Kanat Selçuklu-Uz Süvari Çemberi" },
              { startLat: 39.115, startLng: 42.550, endLat: 39.145, endLng: 42.540, type: 'attack', label: "Güney Kanat Selçuklu-Peçenek Kuşatması" }
            ],
            rings: [
              { lat: 39.145, lng: 42.540, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.72, speed: 0.65, repeat: 580 },
              { lat: 39.145, lng: 42.540, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.42, speed: 0.48, repeat: 750 }
            ],
            markers: [
              { lat: 39.145, lng: 42.540, icon: "💥", label: "Turan Hilal Kapanı (Ana Çarpışma)", label_en: "Crescent Decisive Clash Point", tacColor: "#ef4444" },
              { lat: 39.170, lng: 42.555, icon: "⚔️", label: "Peçenek & Uz Süvarileri İttifakı", label_en: "Peçenek & Uz Flank Strike", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "3. Zafer & Anadolu",
            btn_en: "3. Gates of Anatolia",
            title_tr: "Zafer & Anadolu'nun Kapılarının Türklere Ebediyen Açılışı",
            title_en: "Decisive Triumph: Anatolia Opened Forever to the Turks",
            desc_tr: "Bizans İmparatoru Romen Diyojen esir alındı; Sultan Alparslan eşsiz bir devlet ahlakıyla imparatora saygıyla muamele edip barış imzaladı. Malazgirt Zaferi Anadolu'nun fethini başlattı ve Türkiye tarihinin doğuşunu müjdeledi.",
            desc_en: "Emperor Romanos IV was captured and treated with noble clemency. The victory permanently opened Anatolia to Turkish settlement, founding the roots of modern Türkiye.",
            forces_tr: "Muzaffer Selçuklu Ordusu vs. Teslim Olan Doğu Roma Ordusu",
            forces_en: "Victorious Seljuk Army vs. Surrendering Byzantine Forces",
            outcome_tr: "Anadolu'nun Kapıları Türklere Açıldı • Türkiye Tarihinin Miladı",
            outcome_en: "Gates of Anatolia Opened Forever • Dawn of Turkish Anatolia",
            focusLat: 39.145,
            focusLng: 42.540,
            vectors: [
              { startLat: 39.145, startLng: 42.540, endLat: 39.92, endLng: 32.85, type: 'defense', label: "Anadolu İçi Fetih & Yerleşim Vektörü" }
            ],
            rings: [
              { lat: 39.145, lng: 42.540, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.50, repeat: 800 }
            ],
            markers: [
              { lat: 39.145, lng: 42.540, icon: "🏆", label: "Malazgirt Zafer Otağı", label_en: "Manzikert Victory Monument", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      mohac: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Hilal & Sahra Topları",
            btn_en: "1. Crescent & Artillery",
            title_tr: "29 Ağustos 1526: Mohaç Ovası ve 300 Osmanlı Sahra Topu",
            title_en: "August 29, 1526: Mohács Plain & 300 Ottoman Field Guns",
            desc_tr: "Kanuni Sultan Süleyman komutasındaki Osmanlı ordusu Tuna boyundaki Mohaç Ovası'na ulaştı. Merkezde birbirine zincirlerle bağlı 300 seyyar sahra topu ve yeniçeriler gizlendi; kanatlara Rumeli ve Anadolu süvarileri yerleştirildi.",
            desc_en: "Sultan Suleiman the Magnificent deployed 300 chained field cannons and janissaries behind an inverted crescent center on the plains of Mohács along the Danube.",
            forces_tr: "Osmanlı Ordusu (Kanuni Sultan Süleyman & 300 Sahra Topu) vs. Macar Krallığı (Kral II. Lajos)",
            forces_en: "Ottoman Empire (Suleiman the Magnificent) vs. Kingdom of Hungary (King Louis II)",
            outcome_tr: "Hilal Savunma ve Topçu Baraj Hattı Kuruldu",
            outcome_en: "Artillery Barrier & Tactical Defense Line Formed",
            focusLat: 45.990,
            focusLng: 18.680,
            vectors: [
              { startLat: 45.960, startLng: 18.620, endLat: 45.990, endLng: 18.680, type: 'attack', label: "Macar Ağır Şövalye Taarruz Hattı" },
              { startLat: 46.015, startLng: 18.720, endLat: 45.990, endLng: 18.680, type: 'defense', label: "Osmanlı Topçu ve Yeniçeri Tahkimatı" }
            ],
            rings: [
              { lat: 45.990, lng: 18.680, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.58, speed: 0.55, repeat: 680 }
            ],
            markers: [
              { lat: 46.002, lng: 18.695, icon: "💣", label: "Kanuni Karargahı & 300 Sahra Topu", label_en: "Suleiman HQ & Artillery Battery", tacColor: "#ef4444" },
              { lat: 45.975, lng: 18.640, icon: "🛡️", label: "Kral II. Lajos & Macar Zırhlı Süvarileri", label_en: "King Louis II & Heavy Knights", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. İki Saatlik Kırılma",
            btn_en: "2. The Two-Hour Clash",
            title_tr: "Macar Taarruzu ve 300 Topun Çapraz Baraj Ateşi",
            title_en: "The Hungarian Heavy Charge & Ottoman Crossfire",
            desc_tr: "Kral Lajos'un zırhlı şövalyeleri Osmanlı merkezine doğru hızla hücum etti. Kanat süvarilerinin manevrasıyla topçu bataryalarının önü açıldı; 300 top aynı anda ateşlenerek Macar hatlarını iki saatte darmadağın etti.",
            desc_en: "Hungarian heavy knights charged the Ottoman center. Ottoman cavalry parted to unmask 300 chained cannons firing devastating point-blank crossfire that shattered the assault in two hours.",
            forces_tr: "Osmanlı Topçu & Tüfekçi Taburu vs. Macar Ağır Süvari Hücumu",
            forces_en: "Ottoman Artillery Crossfire vs. Hungarian Heavy Cavalry",
            outcome_tr: "Tarihin En Hızlı Kesin Meydan Muharebesi Zaferi (2 Saat)",
            outcome_en: "Decisive Rout in Record Time (Under Two Hours)",
            focusLat: 45.990,
            focusLng: 18.680,
            vectors: [
              { startLat: 46.020, startLng: 18.650, endLat: 45.990, endLng: 18.680, type: 'attack', label: "Rumeli Akıncıları Kanat Kuşatması" },
              { startLat: 45.965, startLng: 18.710, endLat: 45.990, endLng: 18.680, type: 'attack', label: "Anadolu Süvarileri Kanat Kapanı" }
            ],
            rings: [
              { lat: 45.990, lng: 18.680, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.75, speed: 0.70, repeat: 520 }
            ],
            markers: [
              { lat: 45.990, lng: 18.680, icon: "💥", label: "Mohaç Meydan Muharebesi Kırılma Noktası", label_en: "Mohács Main Battle Line", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Zafer & Orta Avrupa",
            btn_en: "3. Central European Hegemony",
            title_tr: "Macar Krallığı'nın Sonu ve Budin'in Fethi (1526–1541)",
            title_en: "Fall of the Kingdom of Hungary & Conquest of Buda",
            desc_tr: "Mohaç Zaferi ile Orta Avrupa'nın kapıları açıldı. Kanuni Sultan Süleyman Budin'e (Budapeşte) girdi; Macaristan Osmanlı topraklarına katılarak 150 yıl sürecek Budin Beylerbeyliği kuruldu.",
            desc_en: "Victory established Ottoman mastery over Central Europe. Suleiman entered Buda, incorporating Hungary into the empire and securing the Danube waterway.",
            forces_tr: "Muzaffer Osmanlı Ordusu vs. Dağılan Macar İttifakı",
            forces_en: "Victorious Ottoman Empire vs. Collapsed Hungarian Forces",
            outcome_tr: "Orta Avrupa'da Zirve Hakimiyet • Budin Beylerbeyliği Kuruldu",
            outcome_en: "Peak Ottoman Hegemony in Central Europe",
            focusLat: 45.990,
            focusLng: 18.680,
            vectors: [
              { startLat: 45.990, startLng: 18.680, endLat: 47.498, endLng: 19.040, type: 'defense', label: "Mohaç ➔ Budin (Budapeşte) İlerleme Hattı" }
            ],
            rings: [
              { lat: 45.990, lng: 18.680, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.88, speed: 0.45, repeat: 820 }
            ],
            markers: [
              { lat: 47.498, lng: 19.040, icon: "🏰", label: "Budin Kalesi (Osmanlı Merkezi)", label_en: "Buda Castle (Ottoman Seat)", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      waterloo: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Hougoumont & La Haye",
            btn_en: "1. Hougoumont & Outposts",
            title_tr: "18 Haziran 1815: Hougoumont Çiftliği ve Açılış Taarruzu",
            title_en: "June 18, 1815: Assault on Hougoumont & Allied Outposts",
            desc_tr: "Napoléon Bonaparte, Brüksel'in güneyindeki Waterloo sırtlarında Dük Wellington komutasındaki İngiliz ve Müttefik ordusuna karşı taarruzu başlattı. Hougoumont Çiftliği etrafında kanlı boğuşmalar yaşandı.",
            desc_en: "Napoleon launched his assault against the Duke of Wellington's Anglo-Allied ridge line south of Brussels, opening with fierce combat around the chateau of Hougoumont.",
            forces_tr: "Fransız Ordusu (Napoléon Bonaparte) vs. İngiliz-Müttefik Ordusu (Dük Wellington)",
            forces_en: "French Armée du Nord (Napoleon) vs. Anglo-Allied Army (Wellington)",
            outcome_tr: "İngiliz İleri Karakolları Direndi, Fransız Kanadı Oyalandı",
            outcome_en: "Allied Outposts Held • French Flank Tied Down",
            focusLat: 50.680,
            focusLng: 4.410,
            vectors: [
              { startLat: 50.665, startLng: 4.412, endLat: 50.680, endLng: 4.410, type: 'attack', label: "Napoléon Merkez Kolordusu Taarruzu" },
              { startLat: 50.690, startLng: 4.405, endLat: 50.680, endLng: 4.410, type: 'defense', label: "Wellington Savunma Sırtları Hattı" }
            ],
            rings: [
              { lat: 50.680, lng: 4.410, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.54, speed: 0.52, repeat: 700 }
            ],
            markers: [
              { lat: 50.665, lng: 4.412, icon: "🦅", label: "Napoléon Karargahı (La Belle Alliance)", label_en: "Napoleon HQ (Belle Alliance)", tacColor: "#ef4444" },
              { lat: 50.685, lng: 4.408, icon: "🦁", label: "Wellington Sırtı & Mont-Saint-Jean", label_en: "Wellington Ridge (Mont-St-Jean)", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Süvari & Kareler",
            btn_en: "2. Cavalry vs Squares",
            title_tr: "Mareşal Ney'in Süvari Taarruzu ve İngiliz Piyade Kareleri",
            title_en: "Marshal Ney's Grand Cavalry Charges vs Allied Squares",
            desc_tr: "Mareşal Ney komutasındaki 9.000 Fransız ağır süvarisi İngiliz sırtlarına dalga dalga hücum etti. Wellington'ın piyadeleri kare düzeni alarak süvari hücumlarını sarsılmaz bir disiplinle püskürttü.",
            desc_en: "Marshal Ney led 9,000 French cuirassiers and cavalry in massive uphill charges against Wellington's infantry, who held firm in unyielding defensive squares.",
            forces_tr: "Fransız Ağır Süvarileri (Mareşal Ney) vs. İngiliz Piyade Kareleri (Wellington)",
            forces_en: "French Heavy Cavalry (Marshal Ney) vs. British Infantry Squares",
            outcome_tr: "Fransız Süvarisi Eridi • İngiliz Hatları Kırılamadı",
            outcome_en: "French Cavalry Spent • Allied Line Held",
            focusLat: 50.680,
            focusLng: 4.410,
            vectors: [
              { startLat: 50.670, startLng: 4.415, endLat: 50.682, endLng: 4.412, type: 'attack', label: "Fransız Zırhlı Süvari Dalgası" },
              { startLat: 50.685, startLng: 4.415, endLat: 50.680, endLng: 4.410, type: 'defense', label: "İngiliz Kare Düzeni Savunma Ateşi" }
            ],
            rings: [
              { lat: 50.680, lng: 4.410, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.70, speed: 0.65, repeat: 580 }
            ],
            markers: [
              { lat: 50.680, lng: 4.410, icon: "⚔️", label: "Ana Muharebe ve Kareler Alanı", label_en: "Infantry Squares Clash Zone", tacColor: "#ef4444" },
              { lat: 50.678, lng: 4.398, icon: "🏰", label: "Hougoumont Kalesi", label_en: "Chateau d'Hougoumont", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "3. Prusya & Son Perde",
            btn_en: "3. Blücher & Final Rout",
            title_tr: "Mareşal Blücher'in Gelişi ve İmparatorluk Muhafızları",
            title_en: "Arrival of Blücher's Prussians & Rout of the Imperial Guard",
            desc_tr: "Mareşal Blücher komutasındaki Prusya ordusu sağ kanattan savaş alanına girdi. Napoléon'un efsanevi 'Eski Muhafızları' (Garde Impériale) son taarruza kalktı ancak geri püskürtüldü. Napolyon Savaşları resmen sona erdi.",
            desc_en: "Marshal Blücher's Prussian army struck the French right flank at Plancenoit. The Imperial Guard broke, marking the final downfall of Napoleon and the restoration of European peace.",
            forces_tr: "İngiliz-Prusya Birleşik Kuvvetleri (Wellington & Blücher) vs. Fransız İmparatorluk Muhafızları",
            forces_en: "Anglo-Prussian Combined Armies vs. French Imperial Guard",
            outcome_tr: "Kesin Müttefik Zaferi • Napolyon Dönemi Resmen Sona Erdi",
            outcome_en: "Decisive Allied Victory • End of the Napoleonic Era",
            focusLat: 50.680,
            focusLng: 4.410,
            vectors: [
              { startLat: 50.665, startLng: 4.480, endLat: 50.672, endLng: 4.425, type: 'attack', label: "Prusya Ordusu Sağ Kanat Taarruzu (Blücher)" }
            ],
            rings: [
              { lat: 50.680, lng: 4.410, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.50, repeat: 760 }
            ],
            markers: [
              { lat: 50.678, lng: 4.405, icon: "🦁", label: "Waterloo Aslan Tepe Anıtı", label_en: "Lion's Mound Monument", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      cannae: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Aufidus & Dışbükey Hilal",
            btn_en: "1. Aufidus Crescent",
            title_tr: "MÖ 216: Aufidus Nehri ve Hannibal'ın Dışbükey Hilal Düzeni",
            title_en: "216 BC: River Aufidus & Hannibal's Inverted Crescent",
            desc_tr: "Hannibal Barca, güney İtalya'daki Cannae ovasında 86.000 kişilik dev Roma ordusunu karşıladı. Merkezde zayıf İber ve Kelt birliklerini dışbükey hilal şeklinde öne sürerken, kanatlara seçkin Kartaca gazileri ile Numidya süvarilerini yerleştirdi.",
            desc_en: "Hannibal Barca deployed his 50,000 veterans against Rome's massive 86,000-strong legionary army along the River Aufidus, arranging his center in a convex bow facing the enemy.",
            forces_tr: "Kartaca Ordusu (Hannibal Barca) vs. Roma Cumhuriyeti Lejyonları (Konsül Paullus & Varro)",
            forces_en: "Carthaginian Army (Hannibal) vs. Roman Republic Legions (Paullus & Varro)",
            outcome_tr: "Taktik Tuzak Kuruldu: Roma Merkez Taarruzuna Başladı",
            outcome_en: "Tactical Trap Set • Roman Legions Pushed Forward",
            focusLat: 41.310,
            focusLng: 16.150,
            vectors: [
              { startLat: 41.300, startLng: 16.170, endLat: 41.310, endLng: 16.150, type: 'attack', label: "Roma Lejyonları Merkez Taarruzu" },
              { startLat: 41.320, startLng: 16.130, endLat: 41.310, endLng: 16.150, type: 'defense', label: "Kartaca Dışbükey Esnek Hilal Hattı" }
            ],
            rings: [
              { lat: 41.310, lng: 16.150, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.52, speed: 0.50, repeat: 700 }
            ],
            markers: [
              { lat: 41.315, lng: 16.140, icon: "🐘", label: "Hannibal Barca Karargahı", label_en: "Hannibal Barca HQ", tacColor: "#ef4444" },
              { lat: 41.305, lng: 16.165, icon: "🏛️", label: "Roma Lejyonları Konsül Komutası", label_en: "Roman Consuls Command", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Çift Taraflı Kuşatma",
            btn_en: "2. Double Envelopment",
            title_tr: "İçbükey Dönüşüm ve Numidya Süvarilerinin Kanat Taarruzu",
            title_en: "Convex to Concave: The Complete Double Envelopment",
            desc_tr: "Roma merkez lejyonları hücum ettikçe Kartaca merkezi yavaşça geri çekilerek dışbükey hilali içbükey cebe dönüştürdü. Hasdrubal ve Numidya süvarileri Roma süvarilerini ovadan kovup Roma lejyonlarının arkasını kilitledi.",
            desc_en: "As the Roman legions surged into the bowing center, Hannibal's veteran flanks stepped forward while his Numidian cavalry routed Roman horsemen and closed the rear.",
            forces_tr: "Kartaca Seçkin Kanatları & Numidya Süvarileri vs. Sıkışan Roma Lejyonları",
            forces_en: "Carthaginian Flanks & Numidian Cavalry vs. Compressed Roman Legions",
            outcome_tr: "Askeri Tarihin En Kusursuz Çift Taraflı Kuşatması Sağlandı",
            outcome_en: "Flawless Double Envelopment • Romans Trapped in Pocket",
            focusLat: 41.310,
            focusLng: 16.150,
            vectors: [
              { startLat: 41.325, startLng: 16.145, endLat: 41.310, endLng: 16.150, type: 'attack', label: "Kuzey Kanat Numidya Süvari Kuşatması" },
              { startLat: 41.295, startLng: 16.155, endLat: 41.310, endLng: 16.150, type: 'attack', label: "Güney Kanat Kartaca Seçkin Piyade Kapanı" }
            ],
            rings: [
              { lat: 41.310, lng: 16.150, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.72, speed: 0.65, repeat: 550 }
            ],
            markers: [
              { lat: 41.310, lng: 16.150, icon: "💥", label: "Cannae Çifte Kuşatma Çemberi", label_en: "Cannae Double Envelopment Pocket", tacColor: "#ef4444" },
              { lat: 41.325, lng: 16.160, icon: "🐎", label: "Numidya Süvarileri Arkadan Çevirme", label_en: "Numidian Cavalry Rear Strike", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "3. Taktik Başyapıt",
            btn_en: "3. Masterpiece of Annihilation",
            title_tr: "Tarihin En Büyük Kuşatma Zaferi ve Roma'nın Şoku",
            title_en: "The Ultimate Tactical Triumph & Legacy of Cannae",
            desc_tr: "Bir günde 60.000'den fazla Roma askeri ve Konsül Paullus hayatını kaybetti. Cannae Muharebesi dünya harp akademilerinde iki bin yıldır taktik dehanın en üst zirvesi kabul edilir.",
            desc_en: "Over 60,000 Romans fell in a single afternoon. Cannae remains the gold standard of encirclement warfare studied in military academies worldwide for two millennia.",
            forces_tr: "Muzaffer Kartaca Ordusu vs. Yıkıma Uğrayan Roma Cumhuriyeti",
            forces_en: "Victorious Carthaginian Army vs. Devastated Roman Republic",
            outcome_tr: "Antik Çağın En Kusursuz Meydan Zaferi • Askeri Dehanın Zirvesi",
            outcome_en: "Greatest Tactical Annihilation in Ancient History",
            focusLat: 41.310,
            focusLng: 16.150,
            vectors: [
              { startLat: 41.310, startLng: 16.150, endLat: 41.902, endLng: 12.496, type: 'defense', label: "Roma Kapılarına Ulaşan Korku Dalgası" }
            ],
            rings: [
              { lat: 41.310, lng: 16.150, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.88, speed: 0.45, repeat: 820 }
            ],
            markers: [
              { lat: 41.310, lng: 16.150, icon: "🏆", label: "Cannae Taktik Zafer Anıtı", label_en: "Cannae Tactical Landmark", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      kudus: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Hıttin Boynuzları",
            btn_en: "1. Horns of Hattin",
            title_tr: "4 Temmuz 1187: Hıttin Tepeleri ve Susuzluk Tuzağı",
            title_en: "July 4, 1187: The Horns of Hattin & The Arid Trap",
            desc_tr: "Selahaddin Eyyubi, Kudüs Haçlı Krallığı ordusunu susuz ve çorak Hıttin Tepeleri'ne çekti. Rüzgar yönünde çalıları ateşe vererek duman ve alevlerle Haçlı ordusunu Taberiye Gölü'nden kesti.",
            desc_en: "Saladin lured the Crusader army under King Guy of Lusignan across the waterless plateau of Hattin, setting brushfires downwind and cutting them off from the Sea of Galilee.",
            forces_tr: "Eyyubi Ordusu (Sultan Selahaddin Eyyubi) vs. Kudüs Haçlı Krallığı (Kral Guy de Lusignan)",
            forces_en: "Ayyubid Army (Saladin) vs. Crusader Kingdom of Jerusalem (Guy of Lusignan)",
            outcome_tr: "Haçlı Ordusu Susuz Kaldı ve Hıttin Tepeleri'nde Kuşatıldı",
            outcome_en: "Crusader Host Trapped Without Water on the Horns",
            focusLat: 32.805,
            focusLng: 35.450,
            vectors: [
              { startLat: 32.785, startLng: 35.520, endLat: 32.805, endLng: 35.450, type: 'attack', label: "Eyyubi Atlı Süvarileri Çember Harekatı" },
              { startLat: 32.795, startLng: 35.390, endLat: 32.805, endLng: 35.450, type: 'defense', label: "Haçlı Ağır Şövalyeleri Çıkış Arayışı" }
            ],
            rings: [
              { lat: 32.805, lng: 35.450, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.52, speed: 0.50, repeat: 700 }
            ],
            markers: [
              { lat: 32.810, lng: 35.440, icon: "⚔️", label: "Selahaddin Eyyubi Otağı", label_en: "Saladin Command Post", tacColor: "#ef4444" },
              { lat: 32.800, lng: 35.460, icon: "🛡️", label: "Kral Guy & Haçlı Çadırı", label_en: "King Guy & Royal Red Tent", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Hıttin Zaferi",
            btn_en: "2. Rout at Hattin",
            title_tr: "Kutsal Haç'ın Alınması ve Haçlı Ordusunun Dağılması",
            title_en: "Capture of the True Cross & Rout of the Crusader Host",
            desc_tr: "Susuzluk ve çember taarruzuyla Haçlı hatları kırıldı. Kudüs Krallığı'nın en kutsal simgesi 'Gerçek Haç' ele geçirildi; Kral Guy ve Renaud de Châtillon esir alındı. Kudüs'ün savunmasız kalması kesinleşti.",
            desc_en: "The desperate Crusader charges failed against Saladin's archers. The True Cross was captured, King Guy taken prisoner, and the military backbone of the Crusader States broken.",
            forces_tr: "Eyyubi Ordusu vs. Teslim Olan Kudüs Krallığı Birlikleri",
            forces_en: "Ayyubid Forces vs. Routed Crusader Knights",
            outcome_tr: "Haçlı Ordusu Tamamen Dağıtıldı • Kudüs Yolu Açıldı",
            outcome_en: "Decisive Ayyubid Victory • Road to Jerusalem Open",
            focusLat: 32.805,
            focusLng: 35.450,
            vectors: [
              { startLat: 32.805, startLng: 35.450, endLat: 31.780, endLng: 35.230, type: 'defense', label: "Hıttin ➔ Kudüs Fethi İlerleme Hattı" }
            ],
            rings: [
              { lat: 32.805, lng: 35.450, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.70, speed: 0.60, repeat: 600 }
            ],
            markers: [
              { lat: 32.805, lng: 35.450, icon: "💥", label: "Hıttin Meydan Zaferi Noktası", label_en: "Hattin Victory Monument", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Kudüs'ün Fethi",
            btn_en: "3. Liberation of Jerusalem",
            title_tr: "2 Ekim 1187: Selahaddin Eyyubi'nin Kudüs'e Girişi ve Barış",
            title_en: "October 2, 1187: Saladin's Peaceful Entry into Jerusalem",
            desc_tr: "Kısa bir kuşatmanın ardından Balian of Ibelin ile varılan barış anlaşmasıyla Kudüs teslim edildi. 88 yıllık Haçlı hakimiyetine son verilirken Selahaddin, halka dokunulmayacağını ve ibadet özgürlüğünü garanti ederek insanlık tarihine geçti.",
            desc_en: "Following negotiations with Balian of Ibelin, Saladin entered Jerusalem on the anniversary of the Prophet's Night Journey, ending 88 years of Crusader rule with celebrated magnanimity and tolerance.",
            forces_tr: "Muzaffer Eyyubi Kuvvetleri vs. Kudüs Savunucuları (Balian of Ibelin)",
            forces_en: "Ayyubid Forces vs. Defenders of Jerusalem (Balian of Ibelin)",
            outcome_tr: "88 Yıllık İşgal Sona Erdi • Mescid-i Aksa ve Kudüs Özgürleşti",
            outcome_en: "End of 88-Year Crusader Occupation • Peace & Freedom of Worship Restored",
            focusLat: 31.780,
            focusLng: 35.230,
            vectors: [
              { startLat: 31.790, startLng: 35.220, endLat: 31.780, endLng: 35.230, type: 'attack', label: "Kuzey Surları (Şam Kapısı) Kuşatma Hattı" },
              { startLat: 31.770, startLng: 35.240, endLat: 31.780, endLng: 35.230, type: 'defense', label: "Zeytindağı Selahaddin Eyyubi Karargahı" }
            ],
            rings: [
              { lat: 31.780, lng: 35.230, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.45, repeat: 800 }
            ],
            markers: [
              { lat: 31.778, lng: 35.235, icon: "🕌", label: "Mescid-i Aksa & Kubbetü's-Sahra", label_en: "Al-Aqsa & Dome of the Rock", tacColor: "#fbbf24" },
              { lat: 31.781, lng: 35.230, icon: "🏰", label: "Davud Kulesi (Kudüs Kalesi)", label_en: "Tower of David (Citadel)", tacColor: "#ef4444" }
            ]
          }
        ]
      },
      trafalgar: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Nelson Touch Planı",
            btn_en: "1. The Nelson Touch",
            title_tr: "21 Ekim 1805: İki Kolon Yarma Planı ve 'İngiltere Bekler...'",
            title_en: "October 21, 1805: The 'Nelson Touch' Two-Column Assault",
            desc_tr: "Amiral Lord Nelson, Trafalgar Burnu açıklarında Fransız ve İspanyol birleşik donanmasını karşıladı. Geleneksel paralel hat yerine, donanmayı iki dik kolona ayırarak düşman hattını ortadan yarma planını (The Nelson Touch) uyguladı.",
            desc_en: "Admiral Lord Nelson intercepted the Franco-Spanish fleet off Cape Trafalgar, abandoning traditional parallel line tactics to pierce the enemy line with two perpendicular columns.",
            forces_tr: "İngiliz Kraliyet Donanması (27 Hat Gemisi - Nelson) vs. Fransız-İspanyol Birleşik Armadası (33 Hat Gemisi - Villeneuve)",
            forces_en: "British Royal Navy (27 ships - Nelson) vs. Combined Franco-Spanish Fleet (33 ships - Villeneuve)",
            outcome_tr: "Düşman Hattı İki Ayrı Noktadan Yarıldı",
            outcome_en: "Allied Line Pierced in Two Decisive Columns",
            focusLat: 36.180,
            focusLng: -6.030,
            vectors: [
              { startLat: 36.195, startLng: -6.150, endLat: 36.180, endLng: -6.030, type: 'attack', label: "HMS Victory Kolonu (Lord Nelson)" },
              { startLat: 36.155, startLng: -6.120, endLat: 36.170, endLng: -6.020, type: 'attack', label: "HMS Royal Sovereign Kolonu (Collingwood)" }
            ],
            rings: [
              { lat: 36.180, lng: -6.030, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.54, speed: 0.52, repeat: 700 }
            ],
            markers: [
              { lat: 36.185, lng: -6.045, icon: "⚓", label: "HMS Victory (Nelson Amiral Gemisi)", label_en: "HMS Victory Flagship", tacColor: "#ef4444" },
              { lat: 36.175, lng: -6.015, icon: "⛵", label: "Bucentaure (Villeneuve Amiral Gemisi)", label_en: "Bucentaure (Villeneuve)", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Borda Ateşi & Çarpışma",
            btn_en: "2. Decisive Broadside Melee",
            title_tr: "Gemi Gemiye Çarpışma ve Redoutable ile Düello",
            title_en: "Close-Quarters Broadside Melee & The Death of Nelson",
            desc_tr: "HMS Victory, Fransız amiral gemisi Bucentaure ve Redoutable'ın arasından geçerek öldürücü borda ateşi açtı. Yakın menzilli tüfek atışında Lord Nelson vuruldu ancak donanmanın zaferini görmeden önce son nefesini vermedi.",
            desc_en: "HMS Victory raked Bucentaure at point-blank range and locked horns with Redoutable. Nelson was mortally wounded on the quarterdeck but lived long enough to know his fleet had triumphed.",
            forces_tr: "Kraliyet Donanması Borda Topları vs. Fransız-İspanyol Armadası",
            forces_en: "British Point-Blank Broadsides vs. Franco-Spanish Line",
            outcome_tr: "Fransız-İspanyol Hattı Tamamen Parçalandı",
            outcome_en: "Combined Fleet Shattered in Intense Melee",
            focusLat: 36.180,
            focusLng: -6.030,
            vectors: [
              { startLat: 36.180, startLng: -6.030, endLat: 36.160, endLng: -5.990, type: 'attack', label: "Dağılan Fransız-İspanyol Gemilerinin Ricatı" }
            ],
            rings: [
              { lat: 36.180, lng: -6.030, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.70, speed: 0.65, repeat: 580 }
            ],
            markers: [
              { lat: 36.180, lng: -6.030, icon: "💥", label: "Trafalgar Ana Muharebe Çarpışma Noktası", label_en: "Trafalgar Decisive Engagement", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Denizlerin Efendisi",
            btn_en: "3. Rule the Waves",
            title_tr: "Britanya'nın Deniz Hakimiyeti ve Napolyon'un İstilası İptal",
            title_en: "British Naval Supremacy & Inviolable Island Security",
            desc_tr: "22 düşman gemisi imha edildi veya ele geçirildi; İngilizler tek bir gemi bile kaybetmedi. Trafalgar, Britanya'ya 100 yıl boyunca 'Denizlerin Efendisi' (Pax Britannica) ünvanını getirdi.",
            desc_en: "With 22 enemy ships captured or destroyed without a single British loss, Trafalgar established undisputed British naval dominance worldwide for over a century.",
            forces_tr: "Muzaffer Kraliyet Donanması vs. Teslim Olan Donanma Kalıntıları",
            forces_en: "Victorious Royal Navy vs. Captured Combined Fleet",
            outcome_tr: "Britanya Denizlerin Tek Hakimi Oldu • İstilâ Tehdidi Yok Edildi",
            outcome_en: "Total Naval Hegemony Secured • Britain Inviolable at Sea",
            focusLat: 36.180,
            focusLng: -6.030,
            vectors: [
              { startLat: 36.180, startLng: -6.030, endLat: 51.507, endLng: -0.127, type: 'defense', label: "Trafalgar Zaferinin Londra'ya İlânı" }
            ],
            rings: [
              { lat: 36.180, lng: -6.030, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.45, repeat: 800 }
            ],
            markers: [
              { lat: 36.180, lng: -6.030, icon: "🏆", label: "Trafalgar Zafer Alanı", label_en: "Cape Trafalgar Victory Memorial", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      moskova: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Şevardino & Tabyalar",
            btn_en: "1. Shevardino & Redoubts",
            title_tr: "7 Eylül 1812: Borodino Tabyaları ve Karşılıklı Topçu Düellosu",
            title_en: "September 7, 1812: Shevardino Redoubts & Massive Artillery Duel",
            desc_tr: "Moskova'nın 120 km batısındaki Borodino köyünde Mareşal Mihail Kutuzov komutasındaki Rus ordusu, Napoléon'un 130.000 kişilik Grande Armée'sinin karşısına dev toprak tabyalarla çıktı. 1.000'den fazla top aynı anda ateşe başladı.",
            desc_en: "Outside Borodino, 120 km west of Moscow, General Kutuzov entrenched 120,000 Russian troops behind the Raevsky Redoubt and Bagration Flèches to bar Napoleon's advance.",
            forces_tr: "Fransız Büyük Ordusu (Grande Armée - Napoléon) vs. Rus İmparatorluk Ordusu (Mihail Kutuzov)",
            forces_en: "French Grande Armée (Napoleon) vs. Imperial Russian Army (Kutuzov)",
            outcome_tr: "Tarihin En Yoğun Topçu Baraj Ateşi Başladı",
            outcome_en: "Deadliest Single-Day Artillery Duel of the Napoleonic Wars",
            focusLat: 55.520,
            focusLng: 35.820,
            vectors: [
              { startLat: 55.510, startLng: 35.770, endLat: 55.520, endLng: 35.820, type: 'attack', label: "Napoléon Kolordularının Tabyalara Taarruzu" },
              { startLat: 55.535, startLng: 35.860, endLat: 55.520, endLng: 35.820, type: 'defense', label: "Raevsky Tabyası ve Bagration Taburu Savunması" }
            ],
            rings: [
              { lat: 55.520, lng: 35.820, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 0.55, speed: 0.55, repeat: 680 }
            ],
            markers: [
              { lat: 55.515, lng: 35.790, icon: "🦅", label: "Napoléon Karargahı (Şevardino)", label_en: "Napoleon HQ (Shevardino)", tacColor: "#ef4444" },
              { lat: 55.525, lng: 35.845, icon: "🏰", label: "Büyük Raevsky Tabyası", label_en: "Great Raevsky Redoubt", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Göğüs Göğüse Çarpışma",
            btn_en: "2. The Bloodbath",
            title_tr: "Tabyaların Düşüşü ve 70.000 Askerin Şehit/Kayıp Düştüğü An",
            title_en: "Assault on the Flèches & The Battle of 70,000 Casualties",
            desc_tr: "Fransız süvari ve piyadeleri Bagration tabyalarını kanlı süngü hücumlarıyla ele geçirdi. Tek bir günde 70.000'den fazla asker hayatını kaybetti veya yaralandı; iki ordu da geri adım atmadı.",
            desc_en: "French cavalry stormed the Great Redoubt in ferocious hand-to-hand combat. Over 70,000 casualties occurred in a single day, leaving neither army decisively routed.",
            forces_tr: "Fransız Ağır Süvarileri (Murat) vs. Rus Muhafız Alayları (Bagration)",
            forces_en: "French Heavy Cavalry (Murat) vs. Russian Imperial Guards",
            outcome_tr: "Tabyalar Ele Geçirildi Fakat Rus Ordusu İmha Edilemedi",
            outcome_en: "Redoubts Taken • Russian Army Retreated in Good Order",
            focusLat: 55.520,
            focusLng: 35.820,
            vectors: [
              { startLat: 55.518, startLng: 35.805, endLat: 55.520, endLng: 35.820, type: 'attack', label: "Murat Süvari Kolordusu Yarması" }
            ],
            rings: [
              { lat: 55.520, lng: 35.820, color: ['rgba(239,68,68,1)', 'rgba(239,68,68,0)'], maxR: 0.72, speed: 0.65, repeat: 540 }
            ],
            markers: [
              { lat: 55.520, lng: 35.820, icon: "💥", label: "Borodino Merkez Çarpışma Hattı", label_en: "Borodino Main Battle Ground", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Moskova Yangını & Ricat",
            btn_en: "3. Moscow Fire & Retreat",
            title_tr: "Moskova'nın Boşaltılması ve Napoléon'un Büyük Ricatı",
            title_en: "The Burning of Moscow & The Great French Retreat",
            desc_tr: "Kutuzov ordusunu korumak için Moskova'yı tahliye etti. Boş şehre giren Napoléon büyük yangın ve Rus kışıyla karşılaştı; erzak bulamayarak tarihin en acımasız geri çekilme faciasını yaşadı.",
            desc_en: "Kutuzov preserved his army by yielding Moscow. Napoleon entered an evacuated, burning capital, only to face bitter winter and scorched-earth tactics that destroyed the Grande Armée.",
            forces_tr: "Rus Kışı ve Kutuzov'un Yıpratma Stratejisi vs. Geri Çekilen Grande Armée",
            forces_en: "Russian Winter & Guerrilla Strategy vs. Retreating Grande Armée",
            outcome_tr: "Napoléon'un Moskova Seferi İflas Etti • Büyük Ricat Başladı",
            outcome_en: "Napoleon's Campaign Collapsed • Strategic Russian Triumph",
            focusLat: 55.755,
            focusLng: 37.617,
            vectors: [
              { startLat: 55.755, startLng: 37.617, endLat: 54.687, endLng: 25.279, type: 'defense', label: "Moskova ➔ Vilnius Grande Armée Ricat Hattı" }
            ],
            rings: [
              { lat: 55.755, lng: 37.617, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.45, repeat: 800 }
            ],
            markers: [
              { lat: 55.752, lng: 37.619, icon: "🏰", label: "Moskova Kremlin Sarayı", label_en: "Moscow Kremlin", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      austerlitz: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Pratzen Tuzağı",
            btn_en: "1. The Pratzen Trap",
            title_tr: "2 Aralık 1805: Napoléon'un Pratzen Tepeleri Sahte Tuzağı",
            title_en: "December 2, 1805: Napoleon's Trap at Pratzen Heights",
            desc_tr: "Napoléon, müttefik Rus-Avusturya ordusunun kendi sağ kanadına saldırmasını sağlamak için stratejik Pratzen Tepeleri'ni kasten boşalttı ve Mareşal Davout'nun yetişeceği sağ kanadını zayıf göstererek düşmanı tuzağa çekti.",
            desc_en: "Napoleon deliberately evacuated the strategic heights of Pratzen and weakened his right flank, baiting the Russo-Austrian coalition into an overextended flanking attack while Marshal Davout marched to support.",
            forces_tr: "Fransız Grande Armée (Napoléon Bonaparte) vs. Rus-Avusturya Müttefik Ordusu (Çar I. Aleksandr & II. Franz)",
            forces_en: "French Grande Armée (Napoleon Bonaparte) vs. Russo-Austrian Allied Army (Tsar Alexander I & Francis II)",
            outcome_tr: "Müttefikler Pratzen'i Boşaltarak Fransız Sağ Kanadına Yüklendi",
            outcome_en: "Allies Abandoned the Heights to Strike Napoleon's Right Flank",
            focusLat: 49.129,
            focusLng: 16.764,
            vectors: [
              { startLat: 49.155, startLng: 16.745, endLat: 49.115, endLng: 16.715, type: 'defense', label: "Napoléon Sağ Kanat Sahte Geri Çekilme Hattı" },
              { startLat: 49.145, startLng: 16.790, endLat: 49.118, endLng: 16.725, type: 'attack', label: "Müttefik Buxhowden Kolonlarının Taarruz Yönü" }
            ],
            rings: [
              { lat: 49.129, lng: 16.764, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.75, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 49.158, lng: 16.742, icon: "🦅", label: "Napoléon Karargahı (Zurlan Tepesi)", label_en: "Napoleon HQ (Zurlan)", tacColor: "#38bdf8" },
              { lat: 49.148, lng: 16.805, icon: "👑", label: "Kutusov & Çar Aleksandr Müttefik Karargahı", label_en: "Allied HQ (Kutusov)", tacColor: "#f43f5e" }
            ]
          },
          {
            btn_tr: "2. Soult'un Yarması",
            btn_en: "2. Soult's Assault",
            title_tr: "Mareşal Soult'un Pratzen Tepeleri Yarması: 'Bir Yıldırım Darbesi'",
            title_en: "Marshal Soult's Assault on the Pratzen Heights: 'A Thunderbolt Strike'",
            desc_tr: "Müttefik birlikleri güneye kayarken Mareşal Soult komutasındaki 4. Kolordu sabah sisi arasından aniden çıkarak boşalan Pratzen Tepeleri'ne yıldırım hücumu yaptı ve düşman merkezini ikiye biçti.",
            desc_en: "As Allied columns marched south, Marshal Soult's IV Corps emerged from the morning mist to storm the Pratzen plateau, cutting the Allied army in half in one of history's decisive tactical maneuvers.",
            forces_tr: "Mareşal Soult 4. Kolordusu & Vandamme vs. General Kolowrat Merkez Fırkaları",
            forces_en: "Marshal Soult IV Corps & Vandamme vs. General Kolowrat Allied Center",
            outcome_tr: "Müttefik Ordusunun Merkezi İkiye Bölündü ve Dağıldı",
            outcome_en: "Allied Center Was Completely Severed and Collapsed",
            focusLat: 49.135,
            focusLng: 16.765,
            vectors: [
              { startLat: 49.142, startLng: 16.745, endLat: 49.131, endLng: 16.764, type: 'attack', label: "Soult Kolordusu Pratzen Yıldırım Yarması" },
              { startLat: 49.131, startLng: 16.764, endLat: 49.120, endLng: 16.780, type: 'attack', label: "Vandamme Fırkası Müttefik Merkezini Çökertme Hattı" }
            ],
            rings: [
              { lat: 49.131, lng: 16.764, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.95, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 49.131, lng: 16.764, icon: "⚔️", label: "Pratzen Tepeleri Yarma Noktası", label_en: "Pratzen Heights Breach", tacColor: "#fbbf24" },
              { lat: 49.115, lng: 16.715, icon: "🛡️", label: "Mareşal Davout Sağ Kanat Direnişi", label_en: "Marshal Davout Flank Stand", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "3. Zafer & Göller",
            btn_en: "3. Victory & Lakes",
            title_tr: "Austerlitz Zaferi: Satschan Buzul Gölleri & Üç İmparatorun Sonu",
            title_en: "Triumph of Austerlitz: Satschan Frozen Lakes & Peace of Pressburg",
            desc_tr: "Merkezi yarılan müttefik ordusunun sol kanadı güneyde kuşatıldı. Geri çekilmeye çalışan müttefik alayları Satschan donmuş göllerine sürüldü ve Fransız topçusunun ateşiyle zafer tescillendi; Kutsal Roma-Cermen İmparatorluğu tarihe karıştı.",
            desc_en: "With their center shattered, the Allied left flank was enveloped and driven onto the frozen Satschan lakes. French artillery broke the ice, culminating in Napoleon's greatest masterpiece and the collapse of the Holy Roman Empire.",
            forces_tr: "Fransız Grande Armée Tam Zaferi vs. Kuşatılan ve Dağılan Müttefik Kolonları",
            forces_en: "French Grande Armée Total Triumph vs. Encircled Russo-Austrian Columns",
            outcome_tr: "Kutsal Roma-Cermen İmparatorluğu Sona Erdi • Pressburg Barışı",
            outcome_en: "Dissolution of the Holy Roman Empire • Peace of Pressburg",
            focusLat: 49.125,
            focusLng: 16.760,
            vectors: [
              { startLat: 49.125, startLng: 16.760, endLat: 49.095, endLng: 16.735, type: 'defense', label: "Satschan Göllerine Sürülen Müttefik Ricat Yolu" }
            ],
            rings: [
              { lat: 49.129, lng: 16.764, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.1, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 49.131, lng: 16.764, icon: "🏆", label: "Austerlitz Barış Anıtı (Mohyla Míru)", label_en: "Austerlitz Cairn of Peace", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      termopil: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Falanks Duvarı",
            btn_en: "1. Phalanx Wall",
            title_tr: "M.Ö. 480: Dar Kıyı Geçidinde Falanks Duvarı ve İlk Dalgalar",
            title_en: "480 BC: Spartan Phalanx Wall at the Middle Gate",
            desc_tr: "Kral Leonidas komutasındaki 300 Spartalı ve müttefik hoplitler, dar sahil geçidinde kalkan duvarı kurarak yüz binlerce kişilik Pers ordusunun ilk taarruzlarını ve 'Ölümsüzler' muhafız birliğini geri püskürttü.",
            desc_en: "King Leonidas with 300 Spartans and Thespians formed an impenetrable bronze phalanx wall at the narrow coastal pass, defying Xerxes' massive army and repulsing the elite Immortals.",
            forces_tr: "Kral Leonidas (300 Spartalı & Thespialılar) vs. Pers İmparatorluk Ordusu & Ölümsüzler",
            forces_en: "King Leonidas (300 Spartans & Allies) vs. Persian Imperial Army & Immortals",
            outcome_tr: "Pers Öncü Dalgaları ve Ölümsüzler Ağır Kayıplarla Püskürtüldü",
            outcome_en: "Persian Vanguard and Immortals Repulsed with Heavy Losses",
            focusLat: 38.796,
            focusLng: 22.536,
            vectors: [
              { startLat: 38.810, startLng: 22.520, endLat: 38.798, endLng: 22.534, type: 'attack', label: "Kserkses Pers Ordusu Dar Geçit Hücumu" }
            ],
            rings: [
              { lat: 38.796, lng: 22.536, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.65, speed: 0.6, repeat: 700 }
            ],
            markers: [
              { lat: 38.796, lng: 22.536, icon: "🛡️", label: "Leonidas Falanks Hattı (Orta Kapı)", label_en: "Leonidas Phalanx Line", tacColor: "#ef4444" },
              { lat: 38.815, lng: 22.510, icon: "🏹", label: "Kserkses Pers Karargahı", label_en: "Xerxes Persian HQ", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Efialtes İhaneti",
            btn_en: "2. Mountain Path",
            title_tr: "Efialtes'in İhaneti: Anopaea Dağ Patikası Kuşatması",
            title_en: "Ephialtes' Treachery: Persian Encirclement via Anopaea Path",
            desc_tr: "Yerel bir hain olan Efialtes, Pers generali Hydarnes'e dağların ardındaki gizli Anopaea patikasını gösterdi. Pers birlikleri gece karanlığında dağdan inerek Spartalıların arkasını sardı.",
            desc_en: "A local traitor, Ephialtes, showed Persian General Hydarnes the hidden mountain path of Anopaea. Persian forces marched overnight to descend behind the Spartan rear.",
            forces_tr: "Hydarnes & Pers Ölümsüzleri (Dağ Kolu) vs. Phokisliler Gözetleme Hattı",
            forces_en: "Hydarnes & Immortals Mountain Flank vs. Phocian Outpost",
            outcome_tr: "Geçit İki Taraftan Kuşatıldı • Leonidas Müttefiklerini Tahliye Etti",
            outcome_en: "Pass Encircled • Leonidas Evacuated Greek Allies to Fight to the End",
            focusLat: 38.793,
            focusLng: 22.538,
            vectors: [
              { startLat: 38.780, startLng: 22.510, endLat: 38.792, endLng: 22.542, type: 'defense', label: "Anopaea Gizli Dağ Patikası Kuşatma Hattı" }
            ],
            rings: [
              { lat: 38.793, lng: 22.538, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.8, speed: 0.55, repeat: 700 }
            ],
            markers: [
              { lat: 38.783, lng: 22.515, icon: "⛰️", label: "Anopaea Dağ Patikası (Pers İntikali)", label_en: "Anopaea Mountain Trail", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Son Direniş",
            btn_en: "3. The Last Stand",
            title_tr: "Son Direniş ve Edebi Miras: 'Yolcu, Git Sparta'ya Söyle...'",
            title_en: "The Last Stand: 'Go Tell the Spartans, Stranger Passing By...'",
            desc_tr: "Leonidas ve 300 Spartalı, Kolonos Tepesi'nde son mızraklarına kadar dövüşerek şehit düştü. Bu kahramanca direniş Yunan kent devletlerine zaman kazandırarak Salamis Zaferi'ne ve Batı medeniyetinin kurtuluşuna yol açtı.",
            desc_en: "Leonidas and his 300 Spartans made their immortal last stand on Kolonos Hill, buying crucial time for Greek city-states to unite and win decisive naval victory at Salamis.",
            forces_tr: "300 Spartalı ve Kral Leonidas vs. Kuşatan Pers Ordusu",
            forces_en: "The 300 Spartans & King Leonidas vs. Imperial Persian Hosts",
            outcome_tr: "Ahlaki Zafer • Salamis ve Plataea Zaferlerine Zemin Hazırlandı",
            outcome_en: "Moral Triumph • Paved Way for Salamis and Greek Freedom",
            focusLat: 38.796,
            focusLng: 22.536,
            vectors: [
              { startLat: 38.796, startLng: 22.536, endLat: 37.942, endLng: 23.535, type: 'defense', label: "Termopil ➔ Salamis Donanma Savunma Koridoru" }
            ],
            rings: [
              { lat: 38.796, lng: 22.536, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 1.0, speed: 0.45, repeat: 850 }
            ],
            markers: [
              { lat: 38.796, lng: 22.536, icon: "🏆", label: "Kral Leonidas Anıtı & Kolonos Tepesi", label_en: "Monument of Leonidas & Kolonos Hill", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      nigbolu: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Şövalye Taarruzu",
            btn_en: "1. Knights' Charge",
            title_tr: "25 Eylül 1396: Fransız Şövalyelerinin Gururu ve Akıncı Tuzağı",
            title_en: "September 25, 1396: French Knights' Charge & Ottoman Feigned Retreat",
            desc_tr: "Jean de Nevers ve Korkusuz Jean komutasındaki kibirli Fransız zırhlı Haçlı şövalyeleri, Macar Kralı Sigismund'un ihtarlarına kulak asmayarak atlarını Osmanlı öncü akıncılarının üzerine sürdü.",
            desc_en: "Burgundian and French knights under Jean de Nevers charged heedlessly ahead of King Sigismund's coalition, chasing Ottoman skirmishers up the fortified hills.",
            forces_tr: "Fransız-Burgonya Ağır Zırhlı Şövalyeleri vs. Osmanlı Öncü Akıncı ve Azap Kolu",
            forces_en: "French-Burgundian Heavy Knights vs. Ottoman Akıncı & Azap Vanguard",
            outcome_tr: "Şövalyeler Kazıklı Tepelere Çekilerek Yorgun Düşürüldü",
            outcome_en: "Knights Were Lured into Stake Traps and Exhausted",
            focusLat: 43.705,
            focusLng: 24.895,
            vectors: [
              { startLat: 43.715, startLng: 24.870, endLat: 43.700, endLng: 24.895, type: 'attack', label: "Haçlı Ağır Süvari Hücum Hattı" },
              { startLat: 43.700, startLng: 24.895, endLat: 43.685, endLng: 24.910, type: 'defense', label: "Osmanlı Öncü Sahte Ricat Yönü" }
            ],
            rings: [
              { lat: 43.705, lng: 24.895, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.75, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 43.715, lng: 24.865, icon: "🛡️", label: "Fransız Şövalye Karargahı", label_en: "French Knights HQ", tacColor: "#38bdf8" },
              { lat: 43.708, lng: 24.898, icon: "🏰", label: "Tuna Kıyısı Niğbolu Kalesi", label_en: "Nicopolis Fortress", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "2. Yıldırım Çarpması",
            btn_en: "2. The Lightning Strike",
            title_tr: "Tepelerin Ardındaki Sürpriz: Yıldırım Bayezid'in Hilal Kapanı",
            title_en: "The Lightning Strike: Sultan Bayezid's Crescent Flank Attack",
            desc_tr: "Atlarından inerek yaya şekilde tepeyi aşan Fransız şövalyeleri, tepenin ardında taze ve eksiksiz bekleyen Sultan I. Bayezid komutasındaki ana Osmanlı sipahi ve yeniçeri ordusunu görünce şoka uğradı.",
            desc_en: "Cresting the hill on foot after losing their horses to stakes, the crusaders found the fresh main Ottoman army commanded by Sultan Bayezid I deployed in iron crescent discipline.",
            forces_tr: "Sultan Yıldırım Bayezid Ana Ordusu & Sırp Müttefiki Stefan Lazarević vs. Haçlı Şövalyeleri",
            forces_en: "Sultan Bayezid I Main Force & Stefan Lazarević Heavy Cavalry vs. Crusaders",
            outcome_tr: "Haçlı Ordusunun Ön Hattı Tamamen Sarıldı",
            outcome_en: "Crusader Front Line Encircled in Iron Pincer",
            focusLat: 43.698,
            focusLng: 24.905,
            vectors: [
              { startLat: 43.690, startLng: 24.915, endLat: 43.702, endLng: 24.895, type: 'attack', label: "Yıldırım Bayezid Hilal Hücumu" }
            ],
            rings: [
              { lat: 43.698, lng: 24.905, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.9, speed: 0.6, repeat: 680 }
            ],
            markers: [
              { lat: 43.692, lng: 24.918, icon: "⚡", label: "Sultan Yıldırım Bayezid Karargahı", label_en: "Sultan Bayezid I HQ", tacColor: "#ef4444" },
              { lat: 43.702, lng: 24.888, icon: "⚔️", label: "Stefan Lazarević Ağır Süvarileri", label_en: "Stefan Lazarević Cavalry", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Kesin Zafer",
            btn_en: "3. Decisive Triumph",
            title_tr: "Tuna Kıyısında Kesin Zafer ve 'Sultan-ı İklim-i Rum' Unvanı",
            title_en: "Triumph on the Danube & Caliphal Title of Sultan of Rûm",
            desc_tr: "Haçlı ana ordusu Tuna nehrine döküldü; Kral Sigismund bir balıkçı teknesiyle güçlükle kaçabildi. Halife tarafından Sultan Bayezid'e 'Sultan-ı İklim-i Rum' unvanı verildi.",
            desc_en: "The Crusade of Nicopolis was utterly destroyed along the Danube. King Sigismund fled by boat; the Abbasid Caliph in Cairo granted Bayezid the prestigious title 'Sultan of Rûm'.",
            forces_tr: "Osmanlı Tam Zaferi vs. Tuna'ya Kaçan Haçlı Kalıntıları",
            forces_en: "Ottoman Total Triumph vs. Fleeing Crusader Remnants",
            outcome_tr: "Balkanlarda Osmanlı Hakimiyeti Kesinleşti • Haçlı İttifakı Çöktü",
            outcome_en: "Ottoman Hegemony in the Balkans Secured • Crusades Defeated",
            focusLat: 43.705,
            focusLng: 24.895,
            vectors: [
              { startLat: 43.705, startLng: 24.895, endLat: 43.725, endLng: 24.870, type: 'defense', label: "Tuna Nehrine Kaçış ve Ricat Yolu" }
            ],
            rings: [
              { lat: 43.705, lng: 24.895, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.05, speed: 0.45, repeat: 850 }
            ],
            markers: [
              { lat: 43.708, lng: 24.898, icon: "🏆", label: "Niğbolu Zafer Meydanı", label_en: "Nicopolis Victory Field", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      hittin: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Susuzluk Çemberi",
            btn_en: "1. Thirst Trap",
            title_tr: "3–4 Temmuz 1187: Taberiye Gölü Susuzluğu ve Çöl Kıskacı",
            title_en: "July 3–4, 1187: Thirst of Tiberias & Desert Encirclement",
            desc_tr: "Kral Guy de Lusignan ve Renaud de Châtillon komutasındaki 20.000 kişilik Haçlı ordusu, Selahaddin'in manevrasıyla kavurucu temmuz sıcağında su kaynaklarından koparılarak Hıttin tepelerine sürüldü.",
            desc_en: "Sultan Saladin severed the crusader army from the freshwater of Lake Tiberias, luring King Guy and Raynald of Châtillon into the scorched heights of Hattin in blistering heat.",
            forces_tr: "Selahaddin Eyyubi Eyyubi Ordusu vs. Kudüs Krallığı & Tapınak Şövalyeleri",
            forces_en: "Saladin's Ayyubid Army vs. Kingdom of Jerusalem & Templar Knights",
            outcome_tr: "Haçlı Ordusu Susuzluk ve Çöl Sıcağında Kuşatıldı",
            outcome_en: "Crusader Host Encircled in Waterless Desert Heat",
            focusLat: 32.802,
            focusLng: 35.454,
            vectors: [
              { startLat: 32.795, startLng: 35.535, endLat: 32.802, endLng: 35.454, type: 'defense', label: "Taberiye Gölü Su Koridorunun Kesilmesi" }
            ],
            rings: [
              { lat: 32.802, lng: 35.454, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.8, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 32.808, lng: 35.460, icon: "🕌", label: "Selahaddin Eyyubi Karargahı", label_en: "Saladin's Royal Camp", tacColor: "#38bdf8" },
              { lat: 32.798, lng: 35.448, icon: "⛺", label: "Kral Guy Haçlı Kraliyet Çadırı", label_en: "King Guy Royal Tent", tacColor: "#f43f5e" }
            ]
          },
          {
            btn_tr: "2. Yangın & Ok Çemberi",
            btn_en: "2. Fire & Arrows",
            title_tr: "Alev Kapanı: Kuru Çalıların Yakılması ve Şövalyelerin Dağılışı",
            title_en: "The Ring of Smoke & Fire: Ayyubid Archery and Tactical Suffocation",
            desc_tr: "Selahaddin Eyyubi'nin emriyle rüzgarın estiği yöndeki kuru otlar ve çalılar ateşe verildi; duman ve alevler içinde kalan zırhlı Haçlılar nefes alamaz hale geldi ve ok yağmuru altında ezildi.",
            desc_en: "Saladin ordered the dry scrub set ablaze upwind. Blinding smoke and heat suffocated the armored knights while thousands of mounted archers poured volleys into their desperate ranks.",
            forces_tr: "Eyyubi Atlı Okçuları ve Süvarileri vs. Tapınak & Hospitalier Şövalyeleri",
            forces_en: "Ayyubid Horse Archers vs. Templar & Hospitaller Shock Troops",
            outcome_tr: "Haçlı Hatları Çözüldü • 'Hakiki Haç' Ele Geçirildi",
            outcome_en: "Crusader Lines Shattered • True Cross Captured",
            focusLat: 32.802,
            focusLng: 35.454,
            vectors: [
              { startLat: 32.805, startLng: 35.470, endLat: 32.800, endLng: 35.450, type: 'attack', label: "Eyyubi Süvari Çember Daraltması" }
            ],
            rings: [
              { lat: 32.802, lng: 35.454, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.9, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 32.802, lng: 35.454, icon: "🔥", label: "Hıttin Alev & Duman Hattı", label_en: "Hattin Fire & Smoke Line", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Kudüs'ün Fethi",
            btn_en: "3. Liberation of Jerusalem",
            title_tr: "Kudüs'ün Kapılarının Açılışı: Selahaddin'in Büyük Adaleti",
            title_en: "Fall of the Horns: Saladin Liberates Jerusalem with Historic Magnanimity",
            desc_tr: "Kral Guy esir alındı. 88 yıllık Haçlı işgali sona erdi; Selahaddin Kudüs'e kan dökmeden girerek kiliselere ve halka tam ibadet özgürlüğü tanıdı.",
            desc_en: "King Guy surrendered; Saladin fulfilled his oath. Months later, Jerusalem surrendered peacefully without massacres, marking a zenith of chivalry and justice in world history.",
            forces_tr: "Selahaddin Eyyubi Kudüs Giriş Alayı vs. Teslim Olan Haçlı Krallığı",
            forces_en: "Saladin's Liberating Army vs. Surrendering Crusader Garrison",
            outcome_tr: "Kudüs 88 Yıl Sonra Yeniden İslam Hakimiyetinde • Haçlı Krallığı Çöktü",
            outcome_en: "Jerusalem Liberated After 88 Years • Crusader Kingdom Collapsed",
            focusLat: 31.778,
            focusLng: 35.234,
            vectors: [
              { startLat: 32.802, startLng: 35.454, endLat: 31.778, endLng: 35.234, type: 'defense', label: "Hıttin ➔ Kudüs Fethi Zafer Yolu" }
            ],
            rings: [
              { lat: 31.778, lng: 35.234, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.1, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 31.778, lng: 35.234, icon: "🏆", label: "Kudüs Mescid-i Aksa & Kubbetü's-Sahra", label_en: "Jerusalem Al-Aqsa & Dome of the Rock", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      maraton: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Falanks Hücumu",
            btn_en: "1. Phalanx Sprint",
            title_tr: "M.Ö. 490: Miltiades'in Dahice Falanks Dizilimi ve Koşar Adım Taarruz",
            title_en: "490 BC: Miltiades' Reinforced Wings & The 8-Stadia Charge",
            desc_tr: "Atinalı general Miltiades, merkez hattını inceltip kanatları iki kat güçlendirdi. Pers ok menziline girildiğinde Atina hoplitleri tarihte ilk kez koşar adımlarla taarruza kalktı.",
            desc_en: "General Miltiades thinned his center to heavily reinforce both wings, then ordered his bronze-clad hoplites to charge at a dead sprint across the plain into Persian arrow storm.",
            forces_tr: "Miltiades & Kallimakhos (10.000 Atinalı ve Plataialı) vs. Datis & Artaphernes (Pers Ordusu)",
            forces_en: "Miltiades (10,000 Athenians & Plataeans) vs. Persian Expeditionary Army",
            outcome_tr: "Atinalı Falanks Pers Okçularını Hızla Etkisiz Kıldı",
            outcome_en: "Athenian Charge Neutralized Persian Archers and Cavalry",
            focusLat: 38.118,
            focusLng: 23.962,
            vectors: [
              { startLat: 38.125, startLng: 23.950, endLat: 38.115, endLng: 23.975, type: 'attack', label: "Atina Falanks Koşar Adım Taarruz Yönü" }
            ],
            rings: [
              { lat: 38.118, lng: 23.962, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 0.7, speed: 0.6, repeat: 700 }
            ],
            markers: [
              { lat: 38.126, lng: 23.948, icon: "🏛️", label: "Miltiades Atina Karargahı", label_en: "Miltiades Camp", tacColor: "#38bdf8" },
              { lat: 38.112, lng: 23.980, icon: "⛵", label: "Pers Sahil Ordugahı (Maraton Koyu)", label_en: "Persian Fleet Shore Camp", tacColor: "#f43f5e" }
            ]
          },
          {
            btn_tr: "2. Kanat Kıskacı",
            btn_en: "2. Envelopment",
            title_tr: "Kanatların Kapanması: Pers Merkezinin Çift Taraflı Kuşatılması",
            title_en: "Double Envelopment: The Annihilation of the Persian Shore Line",
            desc_tr: "Pers merkezi Atina'nın zayıf merkezini geri iterken, Atina'nın güçlü kanatları Pers kanatlarını ezdi ve dönerek Pers merkezini arkadan kuşattı; klasik tarihin ilk çift taraflı kıskacı uygulandı.",
            desc_en: "While the Persian elite drove through the intentionally thin Greek center, the reinforced Athenian wings crushed the Persian flanks and wheeled inward to encircle the invaders.",
            forces_tr: "Atina & Plataea Kanat Hoplitleri vs. Kuşatılan Pers Elit Birlikleri",
            forces_en: "Athenian & Plataean Wings vs. Encircled Persian Infantry",
            outcome_tr: "Pers Ordusu Panik İçinde Gemilere Doğru Kaçtı",
            outcome_en: "Persian Host Routed in Chaos Toward Their Ships",
            focusLat: 38.116,
            focusLng: 23.968,
            vectors: [
              { startLat: 38.125, startLng: 23.965, endLat: 38.115, endLng: 23.970, type: 'attack', label: "Sol Kanat Kuşatma Kıskacı" },
              { startLat: 38.105, startLng: 23.960, endLat: 38.115, endLng: 23.970, type: 'attack', label: "Sağ Kanat Kuşatma Kıskacı" }
            ],
            rings: [
              { lat: 38.116, lng: 23.968, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.9, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 38.116, lng: 23.968, icon: "⚔️", label: "Maraton Çift Taraflı Kıskacı", label_en: "Marathon Double Envelopment", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Nenikēkamen!",
            btn_en: "3. Marathon Run",
            title_tr: "Nenikēkamen! (Kazandık!): Phidippides'in Efsanevi Maraton Koşusu",
            title_en: "Nenikēkamen! Pheidippides' Marathon Run to Athens",
            desc_tr: "Atina kesin zafer kazandı. Haberci Phidippides, Atina halkına 'Nenikēkamen!' (Kazandık!) müjdesini vermek için 42 kilometre durmaksızın koştu ve modern maraton koşusuna adını verdi.",
            desc_en: "Athens lost only 192 hoplites while killing 6,400 invaders. Pheidippides ran the 42 km to Athens to declare 'Joy, we win!', inspiring the modern marathon race.",
            forces_tr: "Atina Demokrasisinin Kurtuluşu vs. Denize Dökülen Pers Donanması",
            forces_en: "Triumph of Athenian Democracy vs. Defeated Persian Armada",
            outcome_tr: "Demokrasi Korundu • Modern Maraton Koşusunun Doğuşu",
            outcome_en: "Democracy Saved • Dawn of the Modern Marathon Race",
            focusLat: 38.050,
            focusLng: 23.850,
            vectors: [
              { startLat: 38.118, startLng: 23.962, endLat: 37.975, endLng: 23.725, type: 'defense', label: "Phidippides 42 km Zafer Koşusu Rotası (Maraton ➔ Atina)" }
            ],
            rings: [
              { lat: 38.118, lng: 23.962, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.05, speed: 0.45, repeat: 850 }
            ],
            markers: [
              { lat: 38.118, lng: 23.962, icon: "🏆", label: "Maraton Tümülüsü (Soros) Zafer Anıtı", label_en: "Tomb of the Athenians (Soros)", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      kizilkayalar: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Zincirli Armada",
            btn_en: "1. Chained Fleet",
            title_tr: "M.S. 208: Cao Cao'nun Zincirli Armada Tuzağı ve Yangtze Donanması",
            title_en: "208 AD: Cao Cao's Iron-Chained Armada on the Yangtze River",
            desc_tr: "Kuzey Çin'in efendisi Başbakan Cao Cao, 800.000 kişilik ordusuyla güneye indi. Kuzeyli askerlerinin deniz tutmasını önlemek için yüzlerce dev savaş gemisini demir zincirlerle birbirine bağladı.",
            desc_en: "Chancellor Cao Cao marched south with an overwhelming host. To steady his northern soldiers against seasickness, he chained his massive Yangtze warships together into floating fortresses.",
            forces_tr: "Cao Cao Kuzey İmparatorluk Armadası vs. Zhou Yu & Liu Bei Güney İttifakı",
            forces_en: "Cao Cao's Imperial Fleet vs. Zhou Yu & Liu Bei Southern Alliance",
            outcome_tr: "Zincirlenen Gemiler Yangın İçin Savunmasız Kaldı",
            outcome_en: "Chained Fleet Rendered Highly Vulnerable to Fire",
            focusLat: 29.878,
            focusLng: 113.896,
            vectors: [
              { startLat: 29.920, startLng: 113.880, endLat: 29.878, endLng: 113.896, type: 'attack', label: "Cao Cao Kuzey Armadası İlerleme Hattı" }
            ],
            rings: [
              { lat: 29.878, lng: 113.896, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.8, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 29.915, lng: 113.875, icon: "🚩", label: "Cao Cao Karargahı (Kuzey Sahili)", label_en: "Cao Cao North Bank HQ", tacColor: "#f43f5e" },
              { lat: 29.865, lng: 113.910, icon: "🏹", label: "Zhou Yu & Liu Bei Müttefik Üssü", label_en: "Zhou Yu & Liu Bei Base", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "2. Yangın Gemileri",
            btn_en: "2. Fire Ships",
            title_tr: "Zhuge Liang'ın Doğu Rüzgarı ve Huang Gai'nin Yangın Gemileri",
            title_en: "The Southeast Gale & Huang Gai's Flaming Fire Ships",
            desc_tr: "General Huang Gai sahte bir teslim mektubuyla zift ve kuru ot dolu onlarca tekneyle Cao Cao'nun armadasına yaklaştı. Beklenen güneydoğu rüzgarı esince gemiler ateşe verildi ve zincirli armadayı alev denizi yuttu.",
            desc_en: "General Huang Gai feigned defection with ships packed with dry reeds, oil, and pitch. Under a sudden southeasterly gale, the fleet caught fire, setting the chained northern armada ablaze.",
            forces_tr: "Huang Gai Yangın Filosu vs. Yanarak Çözülemeyen Zincirli Savaş Gemileri",
            forces_en: "Huang Gai Fire Ship Squadron vs. Chained Northern Warships",
            outcome_tr: "Yangtze Nehri Boyunca Donanma Kül Oldu",
            outcome_en: "Cao Cao's Chained Navy Incinerated on the Yangtze",
            focusLat: 29.878,
            focusLng: 113.896,
            vectors: [
              { startLat: 29.868, startLng: 113.905, endLat: 29.890, endLng: 113.885, type: 'attack', label: "Huang Gai Yangın Gemileri Taarruz Yönü" }
            ],
            rings: [
              { lat: 29.878, lng: 113.896, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.95, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 29.878, lng: 113.896, icon: "🔥", label: "Yangın Gemisi Alev Hattı", label_en: "Red Cliffs Fire Storm", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Üç Krallık Çağı",
            btn_en: "3. Three Kingdoms",
            title_tr: "Kızıl Kayalar Zaferi ve Üç Krallık Çağının Doğuşu",
            title_en: "Triumph at Red Cliffs & The Birth of the Three Kingdoms Era",
            desc_tr: "Cao Cao canını zor kurtararak Huarong üzerinden kuzeye kaçtı. Çin'in tek elden birleşmesi engellendi ve 'Üç Krallığın Hikayesi' romanına konu olan Wei, Shu, Wu dengesi doğdu.",
            desc_en: "Cao Cao narrowly escaped north through Huarong Trail. The battle prevented the reunification of China and established the famous tripartite division of Wei, Shu, and Wu.",
            forces_tr: "Müttefik Zafer Donanması vs. Huarong Patikası'ndan Kaçan Cao Cao",
            forces_en: "Southern Allied Fleet vs. Retreating Remnants of Cao Cao",
            outcome_tr: "Üç Krallık Çağı Başladı • Çin Tarihinin En Ünlü Edebi Destanı",
            outcome_en: "Three Kingdoms Era Established • Epic Romance of the Three Kingdoms",
            focusLat: 29.878,
            focusLng: 113.896,
            vectors: [
              { startLat: 29.878, startLng: 113.896, endLat: 30.592, endLng: 114.305, type: 'defense', label: "Huarong Patikası Üzerinden Kuzeye Kaçış" }
            ],
            rings: [
              { lat: 29.878, lng: 113.896, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.1, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 29.878, lng: 113.896, icon: "🏆", label: "Chibi Kızıl Kayalar Anıtı", label_en: "Chibi Red Cliffs Historic Memorial", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      hastings: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Kalkan Duvarı",
            btn_en: "1. Shield Wall",
            title_tr: "14 Ekim 1066: Senlac Tepesi'nde Anglo-Sakson Kalkan Duvarı",
            title_en: "October 14, 1066: King Harold's Shield Wall at Senlac Hill",
            desc_tr: "Kral Harold Godwinson, Stamford Bridge'de Vikingleri yendikten sonra güneye koştu ve Senlac Tepesi'nde aşılmaz bir Sakson kalkan duvarı kurarak Norman zırhlı süvarilerini durdurdu.",
            desc_en: "Having just defeated the Vikings at Stamford Bridge, King Harold formed an impenetrable Saxon shield-wall on Senlac Hill, breaking repeated Norman cavalry charges.",
            forces_tr: "Kral Harold Godwinson (Sakson Huskarlları) vs. Normandiya Dükü William (Fatih William)",
            forces_en: "King Harold Godwinson (Saxon Housecarls) vs. Duke William of Normandy",
            outcome_tr: "Norman Hücumları Sakson Kalkan Duvarında Kırıldı",
            outcome_en: "Norman Attacks Repulsed by Anglo-Saxon Shield Wall",
            focusLat: 50.913,
            focusLng: 0.487,
            vectors: [
              { startLat: 50.900, startLng: 0.487, endLat: 50.912, endLng: 0.487, type: 'attack', label: "Norman Şövalye Yokuş Yukarı Taarruz Hattı" }
            ],
            rings: [
              { lat: 50.913, lng: 0.487, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 0.75, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 50.915, lng: 0.487, icon: "🛡️", label: "Kral Harold Kalkan Duvarı (Senlac)", label_en: "Harold's Shield Wall", tacColor: "#38bdf8" },
              { lat: 50.898, lng: 0.487, icon: "🐎", label: "Dük William Norman Süvari Hattı", label_en: "William's Norman Cavalry", tacColor: "#f43f5e" }
            ]
          },
          {
            btn_tr: "2. Sahte Ricat",
            btn_en: "2. Feigned Retreat",
            title_tr: "Sahte Ricat Taktiği: Kalkan Duvarının Çözülmesi",
            title_en: "The Feigned Flight: Breaking the Saxon Shield Wall",
            desc_tr: "Normanların kaçtığı söylentisi yayılınca Dük William miğferini çıkarıp 'Hayattayım!' diye bağırdı ve süvarilerine sahte ricat yaptırdı. Tepeyi terk edip peşlerinden inen Saksonlar ovada kuşatılıp kılıçtan geçirildi.",
            desc_en: "As panic spread that William had fallen, he unhelmeted to rally his troops, then ordered feigned retreats. Eager Saxons broke rank to pursue them down the hill, only to be enveloped and slaughtered.",
            forces_tr: "Norman Ağır Süvari Kapanı vs. Safları Bozulan Sakson Milisleri",
            forces_en: "Norman Heavy Cavalry Trap vs. Scattered Anglo-Saxon Fyrd",
            outcome_tr: "Aşılmaz Kalkan Duvarı Parçalandı",
            outcome_en: "The Impregnable Shield Wall Was Irreparably Broken",
            focusLat: 50.910,
            focusLng: 0.487,
            vectors: [
              { startLat: 50.910, startLng: 0.487, endLat: 50.902, endLng: 0.487, type: 'defense', label: "Norman Sahte Geri Çekilme Hattı" }
            ],
            rings: [
              { lat: 50.910, lng: 0.487, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.85, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 50.910, lng: 0.487, icon: "⚔️", label: "Kalkan Duvarı Çözülme Noktası", label_en: "Breached Shield Wall", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Norman Fethi",
            btn_en: "3. Norman Conquest",
            title_tr: "Kral Harold'ın Düşüşü: Norman Fethi ve Bayeux İşlemesi",
            title_en: "The Death of King Harold: The Norman Conquest of England",
            desc_tr: "Kral Harold gözünden vurularak şehit düştü. Fatih William İngiltere Kralı taçlandı; Fransızca ve Anglo-Saksonca harmanlanarak modern İngilizce ve Bayeux Gobleni gibi şaheserler doğdu.",
            desc_en: "King Harold was struck in the eye by an arrow and slain. Duke William was crowned King at Westminster, transforming the English language, law, and culture forever.",
            forces_tr: "Fatih William Zafer Alayı vs. Dağılan Anglo-Sakson Ordusu",
            forces_en: "William the Conqueror Triumph vs. Defeated Saxon Remnants",
            outcome_tr: "İngiltere'de Norman Çağı Başladı • Modern İngilizcenin Temelleri Atıldı",
            outcome_en: "Norman Era Established in England • Foundations of Modern English",
            focusLat: 50.913,
            focusLng: 0.487,
            vectors: [
              { startLat: 50.913, startLng: 0.487, endLat: 51.500, endLng: -0.125, type: 'defense', label: "Hastings ➔ Londra Taç Giyme İlerlemesi" }
            ],
            rings: [
              { lat: 50.913, lng: 0.487, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.05, speed: 0.45, repeat: 850 }
            ],
            markers: [
              { lat: 50.913, lng: 0.487, icon: "🏆", label: "Battle Abbey Yüksek Sunağı (Harold'ın Düştüğü Yer)", label_en: "Battle Abbey High Altar", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      stalingrad: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Şehir Harabeleri",
            btn_en: "1. Urban Ruins",
            title_tr: "Ağustos–Ekim 1942: Volga Kıyısında Sokak Çatışmaları ve 'Fareler Savaşı'",
            title_en: "Autumn 1942: The Battle of the Ruins on the Volga ('Rattenkrieg')",
            desc_tr: "General Paulus'un 6. Ordusu şehri ele geçirmek için yüklendi. General Çuykov'un 62. Ordusu sokak sokak, bina bina (Pavlov'un Evi ve Traktör Fabrikası) insanüstü bir savunma sergileyerek Almanları yıprattı.",
            desc_en: "General Paulus's 6th Army assaulted Stalingrad. Chuikov's 62nd Army contested every cellar, factory, and room (Pavlov's House, Red October Factory), pinning the Wehrmacht in bitter urban attrition.",
            forces_tr: "Alman 6. Ordusu (General Paulus) vs. Sovyet 62. Ordusu (General Çuykov)",
            forces_en: "German 6th Army (General Paulus) vs. Soviet 62nd Army (General Chuikov)",
            outcome_tr: "Wehrmacht Volga Kıyısındaki Harabelerde Çakılı Kaldı",
            outcome_en: "Wehrmacht Pinned in the Smoldering Ruins of the Volga",
            focusLat: 48.708,
            focusLng: 44.513,
            vectors: [
              { startLat: 48.750, startLng: 44.450, endLat: 48.715, endLng: 44.520, type: 'attack', label: "Paulus 6. Ordusu Volga Kıyısı Taarruz Hattı" }
            ],
            rings: [
              { lat: 48.708, lng: 44.513, color: ['rgba(244,63,94,0.95)', 'rgba(244,63,94,0)'], maxR: 0.75, speed: 0.55, repeat: 750 }
            ],
            markers: [
              { lat: 48.742, lng: 44.537, icon: "🏭", label: "Kızıl Ekim & Traktör Fabrikası Cephesi", label_en: "Red October Factory Front", tacColor: "#f43f5e" },
              { lat: 48.715, lng: 44.532, icon: "🏢", label: "Pavlov'un Evi Savunma Kalesi", label_en: "Pavlov's House Fortress", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "2. Uranüs Kıskacı",
            btn_en: "2. Operation Uranus",
            title_tr: "19 Kasım 1942: Uranüs Operasyonu Çift Kıskaç Kuşatması",
            title_en: "November 19, 1942: Operation Uranus – The Great Encirclement",
            desc_tr: "Mareşal Jukov ve Vasilevski, kuzey ve güney kanatlardaki Rumen ve İtalyan ordularını yararak Kalaç-na-Donu'da birleşti. Alman 6. Ordusu ve 300.000 asker dev bir kazan çemberi (Kessel) içine alındı.",
            desc_en: "Marshal Zhukov launched Operation Uranus, smashing through Axis flanks and converging at Kalach-on-Don to trap 300,000 Wehrmacht troops in a hopeless pocket (Kessel).",
            forces_tr: "Sovyet Güney-Batı & Don Cepheleri vs. Kuşatılan Mihver 6. Ordusu",
            forces_en: "Soviet Southwest & Don Fronts vs. Encircled Axis 6th Army",
            outcome_tr: "300.000 Kişilik Mihver Ordusu Tamamen Kuşatıldı",
            outcome_en: "Axis 6th Army Trapped in the Kalach Encirclement",
            focusLat: 48.690,
            focusLng: 43.525,
            vectors: [
              { startLat: 49.300, startLng: 43.100, endLat: 48.690, endLng: 43.525, type: 'attack', label: "Kuzey Kıskacı (Don Cephesi)" },
              { startLat: 48.200, startLng: 43.800, endLat: 48.690, endLng: 43.525, type: 'attack', label: "Güney Kıskacı (Stalingrad Cephesi)" }
            ],
            rings: [
              { lat: 48.690, lng: 43.525, color: ['rgba(251,191,36,0.95)', 'rgba(251,191,36,0)'], maxR: 0.95, speed: 0.65, repeat: 650 }
            ],
            markers: [
              { lat: 48.690, lng: 43.525, icon: "⚡", label: "Kalaç-na-Donu Çift Kıskaç Birleşme Noktası", label_en: "Kalach-on-Don Encirclement Point", tacColor: "#fbbf24" }
            ]
          },
          {
            btn_tr: "3. Kesin Zafer",
            btn_en: "3. Turning Point",
            title_tr: "2 Şubat 1943: Paulus'un Teslimiyeti ve II. Dünya Savaşı'nın Dönüm Noktası",
            title_en: "February 2, 1943: Paulus Surrenders – The Turning Point of WWII",
            desc_tr: "Hava köprüsü başarısız oldu; Feldmareşal Paulus teslim oldu. Stalingrad Zaferi, faşizmin yenilebileceğini tüm dünyaya göstererek II. Dünya Savaşı'nın kesin dönüm noktası oldu.",
            desc_en: "The German airlift failed; Field Marshal Paulus surrendered in the ruins. Stalingrad shattered the myth of Wehrmacht invincibility, turning the strategic tide of World War II.",
            forces_tr: "Kızıl Ordu Zaferi vs. Teslim Olan 91.000 Esir",
            forces_en: "Red Army Victory vs. 91,000 Surrendering Prisoners",
            outcome_tr: "II. Dünya Savaşı'nın Dönüm Noktası • Doğu Cephesi Geri Sayımı",
            outcome_en: "Decisive Turning Point of World War II • Fall of the Axis",
            focusLat: 48.742,
            focusLng: 44.537,
            vectors: [
              { startLat: 48.742, startLng: 44.537, endLat: 52.520, endLng: 13.405, type: 'defense', label: "Stalingrad ➔ Berlin Zafer Yolu" }
            ],
            rings: [
              { lat: 48.742, lng: 44.537, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.1, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 48.742, lng: 44.537, icon: "🏆", label: "Mamayev Kurgan 'Anavatan Çağırıyor' Zafer Anıtı", label_en: "The Motherland Calls Monument", tacColor: "#fbbf24" }
            ]
          }
        ]
      },
      kades: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Şasu Pusu Tuzağı",
            btn_en: "1. Shasu Ambush",
            title_tr: "M.Ö. 1274: Şasu Casusları ve Amun Tümeninin İleri Çıkışı",
            title_en: "1274 BC: Shasu Nomads Deception and Amun Division Advance",
            desc_tr: "Hitit Kralı II. Muvattalli, yerel Şasu göçebelerini sahte bilgiyle Mısır hatlarına gönderdi. Firavun II. Ramses, Hitit ordusunun uzakta olduğuna inanarak Amun tümeniyle Kadeş surları önüne hızla ilerledi ve diğer üç tümeninden koptu.",
            desc_en: "Hittite King Muwatalli II planted deceptive Shasu nomads who falsely told Pharaoh Ramesses II that the Hittite army was far north. Ramesses advanced rapidly with the Amun division, separating from his remaining forces.",
            forces_tr: "II. Ramses (Amun Tümeni) vs. II. Muvattalli (Gizli Hitit Karargahı)",
            forces_en: "Ramesses II (Amun Division) vs. Muwatalli II (Concealed Hittite Host)",
            outcome_tr: "Mısır Öncü Birlikleri Tuzağa Düştü • Ra Tümeni Yolda Pusuya Uğradı",
            outcome_en: "Egyptian Vanguard Isolated • Ra Division Ambushed in March",
            focusLat: 34.557,
            focusLng: 36.519,
            vectors: [
              { startLat: 34.520, startLng: 36.500, endLat: 34.555, endLng: 36.515, type: 'attack', label: "II. Ramses Amun Tümeni İleri Yürüyüşü" }
            ],
            rings: [
              { lat: 34.557, lng: 36.519, color: ['rgba(245,158,11,0.95)', 'rgba(245,158,11,0)'], maxR: 0.8, speed: 0.5, repeat: 800 }
            ],
            markers: [
              { lat: 34.550, lng: 36.512, icon: "👑", label: "II. Ramses & Amun Otağı", label_en: "Ramesses II Royal Tent", tacColor: "#f59e0b" },
              { lat: 34.568, lng: 36.528, icon: "🛡️", label: "II. Muvattalli Gizli Hitit Ordusu", label_en: "Muwatalli Concealed Host", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "2. Hitit Ağır Arabaları",
            btn_en: "2. Chariot Charge",
            title_tr: "2.500 Hitit Ağır Savaş Arabası Yarması & Ne'arin Takviyesi",
            title_en: "2,500 Hittite Heavy Chariots Charge & Ne'arin Rescue",
            desc_tr: "Üçer savaşçı taşıyan 2.500 Hitit ağır savaş arabası Asi Nehri'ni geçerek Ra tümenini ikiye biçti. Ramses bizzat altın zırhıyla savaş arabasına binerek karşı hücumlar düzenledi; kıyıdan yetişen müttefik Ne'arin süvarileri Mısır ordugahını mutlak imhadan kurtardı.",
            desc_en: "2,500 three-man Hittite heavy chariots crossed the Orontes, routing the Ra division. Ramesses mounted his royal chariot, countercharging desperately until the allied Ne'arin elite corps arrived to stabilize the perimeter.",
            forces_tr: "2.500 Hitit Ağır Arabası vs. Mısır Kraliyet Muhafızları & Ne'arin",
            forces_en: "2,500 Hittite Heavy Chariots vs. Egyptian Royal Guards & Ne'arin",
            outcome_tr: "İki Taraf Ağır Zayiat Verdi • Taktik Kilitlenme Meydana Geldi",
            outcome_en: "Staggering Casualties on Both Sides • Tactical Stalemate",
            focusLat: 34.557,
            focusLng: 36.519,
            vectors: [
              { startLat: 34.568, startLng: 36.528, endLat: 34.555, endLng: 36.515, type: 'attack', label: "Hitit Ağır Savaş Arabaları Yarması" },
              { startLat: 34.530, startLng: 36.490, endLat: 34.550, endLng: 36.512, type: 'defense', label: "Ne'arin Müttefik Destek Kolu" }
            ],
            rings: [
              { lat: 34.557, lng: 36.519, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 1.1, speed: 0.65, repeat: 600 }
            ],
            markers: [
              { lat: 34.555, lng: 36.518, icon: "⚔️", label: "Asi Nehri Savaş Arabaları Çarpışması", label_en: "Orontes Chariot Clash", tacColor: "#dc2626" },
              { lat: 34.542, lng: 36.505, icon: "🐎", label: "Ne'arin Kurtarma Hattı", label_en: "Ne'arin Relief Force", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "3. Kadeş Barış Antlaşması",
            btn_en: "3. Historic Treaty",
            title_tr: "M.Ö. 1259 Kadeş Barış Antlaşması: Tarihin İlk Diplomatik Metni",
            title_en: "1259 BC Treaty of Kadesh: History's First Recorded Peace Treaty",
            desc_tr: "Savaşın ardından iki imparatorluk barış masasına oturdu. Hitit Kralı III. Hattuşili ile Firavun II. Ramses arasında imzalanan gümüş tablet antlaşması, karşılıklı saldırmazlık ve ittifak maddeleriyle dünya diplomasi tarihinin başlangıcı oldu (Orijinal kil tablet İstanbul Arkeoloji Müzeleri'ndedir).",
            desc_en: "Following the tactical stalemate, both empires ratified the silver tablet treaty between Hattusili III and Ramesses II, founding international diplomacy with mutual non-aggression and extradition pacts. The clay replica is preserved at the Istanbul Archaeology Museums.",
            forces_tr: "Hitit İmparatorluğu & Antik Mısır Edebi/Hukuki İttifakı",
            forces_en: "Hittite Empire & Ancient Egypt Legal/Literary Accord",
            outcome_tr: "Tarihin İlk Yazılı Uluslararası Barış Antlaşması Mühürlendi",
            outcome_en: "First International Written Peace Treaty in Human History Sealed",
            focusLat: 34.557,
            focusLng: 36.519,
            vectors: [
              { startLat: 34.557, startLng: 36.519, endLat: 40.020, endLng: 34.615, type: 'defense', label: "Kadeş ➔ Hattuşa Diplomatik Barış Hattı" }
            ],
            rings: [
              { lat: 34.557, lng: 36.519, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.2, speed: 0.4, repeat: 1000 }
            ],
            markers: [
              { lat: 34.557, lng: 36.519, icon: "📜", label: "Kadeş Barış Tableti Mirası (İstanbul Ark. Müzesi)", label_en: "Treaty of Kadesh Tablet Heritage", tacColor: "#38bdf8" }
            ]
          }
        ]
      },
      preveze: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Körfez Hilal Dizilişi",
            btn_en: "1. Crescent Formation",
            title_tr: "27 Eylül 1538: Preveze Körfezi Ağzında Hilal Dizilişi ve Rüzgarsızlık",
            title_en: "September 27, 1538: Crescent Formation at Preveza Gulf & Calm Winds",
            desc_tr: "Kaptan-ı Derya Barbaros Hayreddin Paşa, 122 kadırgadan oluşan Osmanlı donanmasını körfez ağzında hilal nizamında konuşlandırdı. Rüzgarın aniden kesilmesi, rüzgar gücüne bağımlı 300'den fazla ağır Haçlı kalyonunu açık denizde hareketsiz bıraktı.",
            desc_en: "Grand Admiral Hayreddin Barbarossa deployed 122 Ottoman galleys in a disciplined crescent at the entrance of the Gulf of Arta. When the wind dropped, over 300 heavy Holy League sailing galleons became motionless targets.",
            forces_tr: "Barbaros Hayreddin Paşa (122 Kadırga) vs. Andrea Doria Kutsal İttifakı (300+ Gemi)",
            forces_en: "Barbarossa (122 Galleys) vs. Andrea Doria Holy League Fleet (300+ Vessels)",
            outcome_tr: "Haçlı Donanması Rüzgarsızlık Nedeniyle Dağıldı • Kadırgalar Manevra Üstünlüğü Kazandı",
            outcome_en: "Holy League Paralyzed by Calm • Ottoman Galleys Gained Complete Maneuverability",
            focusLat: 38.950,
            focusLng: 20.750,
            vectors: [
              { startLat: 38.930, startLng: 20.720, endLat: 38.960, endLng: 20.740, type: 'attack', label: "Barbaros Hilal Taarruzu" }
            ],
            rings: [
              { lat: 38.950, lng: 20.750, color: ['rgba(245,158,11,0.95)', 'rgba(245,158,11,0)'], maxR: 0.9, speed: 0.5, repeat: 800 }
            ],
            markers: [
              { lat: 38.940, lng: 20.735, icon: "⚓", label: "Barbaros Hayreddin Paşa Sancak Gemisi", label_en: "Barbarossa Flagship", tacColor: "#10b981" },
              { lat: 38.970, lng: 20.700, icon: "🛡️", label: "Andrea Doria Haçlı Kalyonları", label_en: "Andrea Doria Holy League Host", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "2. Turgut Reis Kuşatması",
            btn_en: "2. Pincer Encirclement",
            title_tr: "Hilal Açılımı, Turgut Reis Manevrası ve Kadırga Ateşi",
            title_en: "Crescent Expansion, Turgut Reis Encirclement & Galley Firepower",
            desc_tr: "Turgut Reis ve Salih Reis kanatları açarak Haçlı donanmasının arka hatlarını sardı. Kürekle hızla hareket eden Osmanlı kadırgaları, hantal kalyonların etrafında dönerek gemi pruva toplarıyla düşman gemilerini batırdı veya ele geçirdi.",
            desc_en: "Dragut (Turgut Reis) and Salih Reis swept around the wings to envelop the Christian rear. Nimble oared galleys outflanked the hulking flagships, disabling sails and boarding immobilized carracks.",
            forces_tr: "Turgut Reis & Seydi Ali Reis Kanatları vs. Venedik & İspanyol Kalyonları",
            forces_en: "Dragut & Salih Reis Pincer Wings vs. Venetian & Spanish Galleons",
            outcome_tr: "128 Haçlı Gemisi Batırıldı veya Ele Geçirildi • 3.000 Esir Alındı",
            outcome_en: "128 League Ships Sunk or Captured • 3,000 Allied Prisoners Taken",
            focusLat: 38.950,
            focusLng: 20.750,
            vectors: [
              { startLat: 38.980, startLng: 20.730, endLat: 38.960, endLng: 20.710, type: 'attack', label: "Turgut Reis Arkadan Kuşatma Kolu" }
            ],
            rings: [
              { lat: 38.950, lng: 20.750, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 1.15, speed: 0.6, repeat: 600 }
            ],
            markers: [
              { lat: 38.960, lng: 20.760, icon: "⚔️", label: "Turgut Reis & Salih Reis Hücum Hattı", label_en: "Turgut Reis Flank Wing", tacColor: "#38bdf8" },
              { lat: 38.950, lng: 20.710, icon: "💥", label: "Alev Alan Haçlı Kadırgaları", label_en: "Burning League Galleons", tacColor: "#ef4444" }
            ]
          },
          {
            btn_tr: "3. Akdeniz Hakimiyeti",
            btn_en: "3. Ottoman Mare Nostrum",
            title_tr: "Doria'nın Gece Çekilmesi ve Akdeniz'in Türk Gölü Oluşu",
            title_en: "Doria's Night Retreat and Ottoman Supremacy in the Mediterranean",
            desc_tr: "Amiral Andrea Doria, gece karanlığından faydalanarak fenerlerini söndürüp savaş alanından çekildi. Tek bir gemi dahi kaybetmeyen Barbaros, Akdeniz'deki mutlak Osmanlı hakimiyetini mühürledi ve bu zafer Türk Deniz Kuvvetleri Günü ilan edildi.",
            desc_en: "Admiral Andrea Doria ordered his fleet to douse lights and retreat under cover of night. Without losing a single galley, Barbarossa sealed undisputed Ottoman dominance over the Mediterranean, commemorated annually as Turkish Navy Day.",
            forces_tr: "Muzaffer Osmanlı Donanması vs. Geri Çekilen Kutsal İttifak",
            forces_en: "Triumphant Ottoman Fleet vs. Retreated Holy League",
            outcome_tr: "Akdeniz'de Mutlak Türk Hakimiyeti Mühürlendi • 0 Osmanlı Gemisi Kaybı",
            outcome_en: "Absolute Mediterranean Supremacy Established • 0 Ottoman Galleys Lost",
            focusLat: 38.950,
            focusLng: 20.750,
            vectors: [
              { startLat: 38.950, startLng: 20.750, endLat: 41.008, endLng: 28.978, type: 'defense', label: "Preveze ➔ Payitaht İstanbul Zafer Müjdesi" }
            ],
            rings: [
              { lat: 38.950, lng: 20.750, color: ['rgba(16,185,129,0.95)', 'rgba(16,185,129,0)'], maxR: 1.25, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 38.950, lng: 20.750, icon: "🏆", label: "Preveze Zafer Anıtı & Deniz Şehitliği", label_en: "Preveza Victory Monument", tacColor: "#10b981" }
            ]
          }
        ]
      },
      troya: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Akha Çıkarması",
            btn_en: "1. Achaean Landing",
            title_tr: "M.Ö. 1184: Akha Donanmasının Boğaz Kıyılarına Çıkışı ve Surlar",
            title_en: "1184 BC: Achaean Fleet Landing on the Hellespont Shore",
            desc_tr: "Agamemnon ve Menelaos komutasındaki bin gemilik Akha donanması Çanakkale kıyılarına ordugah kurdu. Truva Veliahtı Hektor, sarp surların önünde savunma hattı oluşturarak ilk Yunan hücum dalgalarını püskürttü.",
            desc_en: "The thousand-ship Achaean fleet under Agamemnon established a beachhead near the Hellespont. Trojan Prince Hector marshaled defenders before the monumental walls, repulsing initial coastal assaults.",
            forces_tr: "Hektor & Truva İttifakı vs. Agamemnon & Miken Donanması",
            forces_en: "Hector & Trojan Coalition vs. Agamemnon & Mycenaean Fleet",
            outcome_tr: "Akha Çıkarması Durduruldu • On Yıllık Kuşatma Başladı",
            outcome_en: "Achaean Landing Checked • Decade-Long Siege Commenced",
            focusLat: 39.957,
            focusLng: 26.239,
            vectors: [
              { startLat: 39.980, startLng: 26.180, endLat: 39.960, endLng: 26.230, type: 'attack', label: "Akha Donanması Çıkarması" }
            ],
            rings: [
              { lat: 39.957, lng: 26.239, color: ['rgba(245,158,11,0.95)', 'rgba(245,158,11,0)'], maxR: 0.85, speed: 0.5, repeat: 800 }
            ],
            markers: [
              { lat: 39.957, lng: 26.239, icon: "🛡️", label: "Truva VI/VII Surları & Skaia Kapısı", label_en: "Trojan Walls & Scaean Gate", tacColor: "#ef4444" },
              { lat: 39.975, lng: 26.195, icon: "⚓", label: "Akha Gemileri Ordugahı", label_en: "Achaean Beached Fleet", tacColor: "#38bdf8" }
            ]
          },
          {
            btn_tr: "2. Hektor-Aşil Düellosu",
            btn_en: "2. Hector vs Achilles",
            title_tr: "Skaia Kapısı Önünde Trajik Düello: Aşil ve Hektor",
            title_en: "Tragic Duel at the Scaean Gate: Achilles vs. Hector",
            desc_tr: "Patroklos'un intikamı için dönen Aşil, Truva surları çevresinde Hektor'la destansı bir teke tek dövüşe girdi. Homeros'un İlyada'sında doruk noktasına ulaşan çarpışmada Hektor hayatını kaybetti ve Priamos barış için ordugaha gitti.",
            desc_en: "Avenging Patroclus, Achilles faced Prince Hector before the Scaean Gate in history's most celebrated literary duel. Hector fell, sparking King Priam's nocturnal ransom mission to Achilles' tent.",
            forces_tr: "Aşil (Myrmidonlar) vs. Truva Şampiyonu Hektor",
            forces_en: "Achilles (Myrmidons) vs. Trojan Champion Hector",
            outcome_tr: "Truva'nın En Büyük Savunucusu Düştü • İlyada'nın Zirve Trajedisi",
            outcome_en: "Troy's Greatest Defender Fell • Climax of the Iliad",
            focusLat: 39.957,
            focusLng: 26.239,
            vectors: [
              { startLat: 39.965, startLng: 26.220, endLat: 39.957, endLng: 26.239, type: 'attack', label: "Aşil Myrmidon Taarruzu" }
            ],
            rings: [
              { lat: 39.957, lng: 26.239, color: ['rgba(239,68,68,0.95)', 'rgba(239,68,68,0)'], maxR: 1.1, speed: 0.65, repeat: 600 }
            ],
            markers: [
              { lat: 39.958, lng: 26.235, icon: "⚔️", label: "Hektor & Aşil Düello Alanı", label_en: "Achilles vs Hector Duel Site", tacColor: "#dc2626" }
            ]
          },
          {
            btn_tr: "3. Tahta At & Surların Sonu",
            btn_en: "3. The Trojan Horse",
            title_tr: "Odysseus'un Tahta At Hilesi ve Truva'nın Edebi Mirası",
            title_en: "Odysseus's Wooden Horse Strategy & Eternal Literary Legacy",
            desc_tr: "Odysseus'un planıyla inşa edilen devasa tahta at, sahte bir geri çekilme adağı olarak sahil boyunda bırakıldı. Şehre alınan atın içinden çıkan seçkin savaşçılar kapıları açtı. Truva'nın düşüşü Homeros'tan Vergilius'un Aeneis'ine dünya edebiyatının temel taşı oldu.",
            desc_en: "Conceived by Odysseus, the hollow wooden horse was left as an offering as the fleet sailed behind Tenedos. Emerging at midnight, infiltrators opened the gates, inspiring Virgil's Aeneid and founding classical epic literature.",
            forces_tr: "Odysseus & Gizli Akha Birliği vs. Kutlama Yapan Truva",
            forces_en: "Odysseus & Infiltration Force vs. Celebrating Troy",
            outcome_tr: "Surlar Aşıldı • Batı ve Doğu Edebiyatının Kurucu Mitosu Doğdu",
            outcome_en: "Gates Breached • Foundational Epic of Western & Eastern Literature Born",
            focusLat: 39.957,
            focusLng: 26.239,
            vectors: [
              { startLat: 39.957, startLng: 26.239, endLat: 41.008, endLng: 28.978, type: 'defense', label: "Truva ➔ Boğazlar & Payitaht Kültür Köprüsü" }
            ],
            rings: [
              { lat: 39.957, lng: 26.239, color: ['rgba(56,189,248,0.95)', 'rgba(56,189,248,0)'], maxR: 1.25, speed: 0.45, repeat: 900 }
            ],
            markers: [
              { lat: 39.957, lng: 26.239, icon: "🐎", label: "Efsanevi Tahta At ve Troya Müzesi Mirası", label_en: "Legendary Trojan Horse & Museum Heritage", tacColor: "#f59e0b" }
            ]
          }
        ]
      },
      ani: {
        isBattle: true,
        phases: [
          {
            btn_tr: "1. Kuşatma Düzeni & Arpaçay",
            btn_en: "1. Siege Array & Akhurian",
            title_tr: "1064: Sultan Alp Arslan'ın Ani Önlerine Gelişi ve Nehir Hattı",
            title_en: "1064: Sultan Alp Arslan Surrounds the Mighty Walls of Ani",
            desc_tr: "Büyük Selçuklu Sultanı Alp Arslan ve Vezir Nizamülmülk, Arpaçay Kanyonu'nun sarp kayalıkları üzerinde yükselen üç katlı müstahkem Ani surlarını kuşattı. Gürcü ve Bizans takviyeli garnizona karşı doğu ve kuzey kapıları ablukaya alındı.",
            desc_en: "Seljuk Sultan Alp Arslan and Grand Vizier Nizam al-Mulk enveloped the impregnable tri-layered walls of Ani atop the sheer Akhurian Gorge, cutting off Bagratid and Byzantine relief columns.",
            forces_tr: "Sultan Alp Arslan Selçuklu Ordusu vs. Bagratid & Bizans Muhafızları",
            forces_en: "Seljuk Imperial Host under Alp Arslan vs. Bagratid-Byzantine Defenders",
            outcome_tr: "Ani Çepeçevre Kuşatıldı • Nehir Geçitleri Tutuldu",
            outcome_en: "Ani Fully Invested • River Crossings Secured",
            focusLat: 40.5075,
            focusLng: 43.5728,
            altitude: 0.16,
            vectors: [
              { startLat: 40.400, startLng: 43.400, endLat: 40.5075, endLng: 43.5728, type: 'attack', label: "Selçuklu Merkez Kolu ➔ Ani Güney Kapısı" },
              { startLat: 40.600, startLng: 43.500, endLat: 40.5150, endLng: 43.5750, type: 'flank', label: "Kuzey Çevreleme Süvarileri" }
            ],
            rings: [
              { lat: 40.5075, lng: 43.5728, color: ['rgba(220,38,38,0.95)', 'rgba(220,38,38,0)'], maxR: 0.75, speed: 0.45, repeat: 1000 }
            ],
            markers: [
              { lat: 40.5075, lng: 43.5728, icon: "🏰", label: "Ani Katedrali ve Aslanlı Kapı", label_en: "Cathedral of Ani & Lion Gate", tacColor: "#ef4444" },
              { lat: 40.4800, lng: 43.5500, icon: "⛺", label: "Sultan Alp Arslan Otağ-ı Hümayun", label_en: "Sultan Alp Arslan Imperial Camp", tacColor: "#10b981" }
            ]
          },
          {
            btn_tr: "2. Büyük Ahşap Kuleler",
            btn_en: "2. Wooden Siege Towers",
            title_tr: "Büyük Ahşap Kuşatma Kuleleri ve Mancınık Taarruzu",
            title_en: "Colossal Siege Towers & Trebuchet Bombardment",
            desc_tr: "Alp Arslan'ın emriyle inşa edilen devasa ahşap kuşatma kuleleri tekerlekler üzerinde surlara yaklaştırıldı. Mancınıklarla dövülen burçlar sarsılırken Selçuklu okçuları kulelerin tepesinden mazgalları ateş altına aldı.",
            desc_en: "Massive wheeled wooden siege engines engineered by Seljuk sappers advanced toward the ramparts. Heavy trebuchet barrages breached the outer defenses as elite archers provided suppressing fire.",
            forces_tr: "Selçuklu Kuşatma Mühendisleri vs. Şehir Surları & Savunucular",
            forces_en: "Seljuk Sappers & Siege Engines vs. Inner Fortress Garrison",
            outcome_tr: "Kuzey Surlarında Gedikler Açıldı",
            outcome_en: "Outer Ramparts Breached on Northern Axis",
            focusLat: 40.5100,
            focusLng: 43.5740,
            altitude: 0.15,
            vectors: [
              { startLat: 40.4800, startLng: 43.5500, endLat: 40.5075, endLng: 43.5728, type: 'reinforce', label: "Kuşatma Kulelerinin İlerlemesi" },
              { startLat: 40.5075, startLng: 43.5728, endLat: 40.5150, endLng: 43.5800, type: 'attack', label: "Surlara Doğrudan Hücum" }
            ],
            rings: [
              { lat: 40.5100, lng: 43.5740, color: ['rgba(245,158,11,0.95)', 'rgba(245,158,11,0)'], maxR: 0.95, speed: 0.55, repeat: 800 }
            ],
            markers: [
              { lat: 40.5100, lng: 43.5740, icon: "🔥", label: "Dev Ahşap Kuleler ve Gedik Hattı", label_en: "Wooden Siege Towers & Rampart Breach", tacColor: "#f59e0b" }
            ]
          },
          {
            btn_tr: "3. Fetih & Kafkas Kapısı",
            btn_en: "3. Triumph & Caucasus Gate",
            title_tr: "Ani'nin Fethi, Manuçehr Camii ve Ebü'l-Feth Unvanı (1064)",
            title_en: "Conquest of Ani, Manuçehr Mosque & 'Father of Conquest' Title",
            desc_tr: "16 Ağustos 1064'te Ani teslim oldu. Sultan Alp Arslan şehre girerek adalet fermanı yayınladı; Anadolu'daki ilk Türk camisi Manuçehr inşa edildi. Abbasi Halifesi Kaim-Biemrillah, Alp Arslan'a 'Ebü'l-Feth' (Fetihlerin Babası) unvanını ve hilatlerini gönderdi.",
            desc_en: "On August 16, 1064, Ani surrendered. Alp Arslan entered the metropolis, commissioned Anatolia's very first Turkish mosque (Manuçehr), and was invested by Abbasid Caliph al-Qa'im with the honorary title 'Abu'l-Fath' (Father of Conquest).",
            forces_tr: "Büyük Selçuklu İmparatorluğu Zaferi",
            forces_en: "Grand Seljuk Imperial Triumph",
            outcome_tr: "Kafkasya ve Anadolu Kapıları Türklere Açıldı",
            outcome_en: "Anatolia and the Caucasus Opened to Turkish Settlement",
            focusLat: 40.5075,
            focusLng: 43.5728,
            altitude: 0.18,
            vectors: [
              { startLat: 40.5075, startLng: 43.5728, endLat: 40.6013, endLng: 43.0975, type: 'defense', label: "Ani ➔ Kars Kalesi & Serhat Güvenlik Hattı" },
              { startLat: 40.5075, startLng: 43.5728, endLat: 39.145, endLng: 42.540, type: 'flank', label: "Malazgirt ve Anadolu İçlerine İlerleyiş Hattı" }
            ],
            rings: [
              { lat: 40.5075, lng: 43.5728, color: ['rgba(16,185,129,0.95)', 'rgba(16,185,129,0)'], maxR: 1.35, speed: 0.40, repeat: 1000 }
            ],
            markers: [
              { lat: 40.5050, lng: 43.5710, icon: "🕌", label: "Tarihi Manuçehr Camii (Anadolu'nun İlk Türk Camisi)", label_en: "Manuçehr Mosque (First Turkish Mosque in Anatolia)", tacColor: "#10b981" },
              { lat: 40.6013, lng: 43.0975, icon: "🏆", label: "Kars Kalesi & Serhat Müdafaası", label_en: "Kars Citadel & Frontier Bastion", tacColor: "#0284c7" }
            ]
          }
        ]
      }
    };

    window.__ATLAS_EXTRA_DATA__.COUNTRY_WARS_DATABASE = {
      turkiye: [
        {
          short_tr: "Malazgirt Zaferi (1071)",
          short_en: "Battle of Manzikert (1071)",
          title_tr: "Malazgirt Meydan Muharebesi (26 Ağustos 1071)",
          title_en: "Battle of Manzikert (August 26, 1071)",
          year: "1071",
          lat: 39.15,
          lng: 42.54,
          desc_tr: "Büyük Selçuklu Sultanı Alparslan, Malazgirt Ovası'nda uyguladığı Hilal (Turan) taktiğiyle Bizans İmparatoru Romen Diyojen'in ordusunu kuşatarak mağlup etti ve Anadolu'nun kapılarını Türklere ebediyen açtı.",
          desc_en: "Great Seljuk Sultan Alp Arslan defeated Byzantine Emperor Romanos IV Diogenes using the crescent feigned-retreat tactic, opening Anatolia permanently to the Turks.",
          forces_tr: "Büyük Selçuklu Ordusu (Sultan Alparslan) vs. Bizans İmparatorluğu (Romen Diyojen)",
          forces_en: "Great Seljuk Army (Sultan Alp Arslan) vs. Byzantine Empire (Romanos IV)",
          outcome_tr: "Anadolu'nun Kapıları Türklere Açıldı • Türkiye Tarihi Başladı",
          outcome_en: "Gates of Anatolia Opened • Dawn of Turkish Anatolia"
        },
        {
          short_tr: "Miryokefalon (1176)",
          short_en: "Myriokephalon (1176)",
          title_tr: "Miryokefalon Meydan Muharebesi (17 Eylül 1176)",
          title_en: "Battle of Myriokephalon (September 17, 1176)",
          year: "1176",
          lat: 38.10,
          lng: 30.85,
          desc_tr: "Türkiye Selçuklu Sultanı II. Kılıçarslan, Eğirdir/Karamıkbeli geçidinde Bizans İmparatoru I. Manuel Komnenos'un büyük sefer ordusunu pusuya düşürerek Anadolu'nun kesin olarak Türk yurdu olduğunu tescilledi.",
          desc_en: "Anatolian Seljuk Sultan Kilij Arslan II ambushed Emperor Manuel I Komnenos in the mountain passes, sealing Anatolia permanently as the Turkish homeland.",
          forces_tr: "Türkiye Selçuklu Ordusu (II. Kılıçarslan) vs. Bizans Ordusu (I. Manuel)",
          forces_en: "Anatolian Seljuks (Kilij Arslan II) vs. Byzantine Empire",
          outcome_tr: "Anadolu'nun Kesin Türk Yurdu Olduğu Tescillendi",
          outcome_en: "Anatolia Permanently Confirmed as Turkish Homeland"
        },
        {
          short_tr: "Kosova & Niğbolu (1389–1396)",
          short_en: "Kosovo & Nicopolis (1389–1396)",
          title_tr: "I. Kosova (1389) ve Niğbolu (1396) Meydan Muharebeleri",
          title_en: "Battles of Kosovo (1389) & Nicopolis (1396)",
          year: "1389–1396",
          lat: 42.69,
          lng: 21.12,
          desc_tr: "Sultan I. Murad ve Yıldırım Bayezid komutasındaki Osmanlı orduları, Balkanlar ve Tuna hattında kurulan büyük Haçlı koalisyonlarını mağlup ederek Osmanlı'nın Avrupa'daki varlığını kalıcılaştırdı.",
          desc_en: "Ottoman armies under Sultan Murad I and Bayezid I defeated major Crusader coalitions in the Balkans and along the Danube.",
          forces_tr: "Osmanlı Ordusu (I. Murad & Yıldırım Bayezid) vs. Balkan & Avrupa Haçlı İttifakı",
          forces_en: "Ottoman Empire vs. Balkan & European Crusader Alliances",
          outcome_tr: "Balkanlar ve Tuna Hattında Kesin Osmanlı Hakimiyeti",
          outcome_en: "Decisive Ottoman Rule Secured Across the Balkans"
        },
        {
          short_tr: "İstanbul'un Fethi (1453)",
          short_en: "Conquest of Constantinople (1453)",
          title_tr: "İstanbul'un Fethi ve Çağ Açan Kuşatma (29 Mayıs 1453)",
          title_en: "Conquest of Constantinople (May 29, 1453)",
          year: "1453",
          lat: 41.01,
          lng: 28.97,
          desc_tr: "Fatih Sultan Mehmed, Şahi topları ve 72 geminin Dolmabahçe'den Kasımpaşa'ya karadan yürütülmesiyle 53 günlük kuşatma sonunda İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı başlattı.",
          desc_en: "Sultan Mehmed II breached the millennial walls with giant bombards and hauled 72 ships overland into the Golden Horn, ending the Middle Ages.",
          forces_tr: "Osmanlı Ordusu & Donanması (Fatih Sultan Mehmed) vs. Bizans & Venedik-Ceneviz Savunması",
          forces_en: "Ottoman Forces (Mehmed II) vs. Byzantine & Allied Defenders",
          outcome_tr: "İstanbul Osmanlı Başkenti Oldu • Orta Çağ Kapandı, Yeni Çağ Başladı",
          outcome_en: "End of the Middle Ages • Rise of the Global Ottoman Empire"
        },
        {
          short_tr: "Mohaç & Preveze (1526–1538)",
          short_en: "Mohács & Preveza (1526–1538)",
          title_tr: "Mohaç Meydan Muharebesi (1526) & Preveze Deniz Zaferi (1538)",
          title_en: "Battle of Mohács (1526) & Naval Victory of Preveza (1538)",
          year: "1526–1538",
          lat: 38.95,
          lng: 20.75,
          desc_tr: "Kanuni Sultan Süleyman karada Mohaç'ta dünya tarihinin en kısa sürede (2 saat) kazanılan kesin meydan muharebesine imza atarken, Barbaros Hayreddin Paşa Preveze'de Andrea Doria komutasındaki Haçlı donanmasını bozguna uğrattı.",
          desc_en: "Suleiman the Magnificent won the 2-hour battle at Mohács on land while Grand Admiral Hayreddin Barbarossa crushed the Holy League fleet at Preveza.",
          forces_tr: "Kanuni Sultan Süleyman & Barbaros Hayreddin Paşa vs. Kutsal İttifak Ordusu & Donanması",
          forces_en: "Suleiman the Magnificent & Barbarossa vs. Holy League Forces",
          outcome_tr: "Orta Avrupa ve Akdeniz'de Zirve Hakimiyet",
          outcome_en: "Ottoman Supremacy in Central Europe and the Mediterranean"
        },
        {
          short_tr: "Çanakkale Destanı (1915)",
          short_en: "Gallipoli Campaign (1915)",
          title_tr: "Çanakkale Deniz ve Kara Savaşları (1915)",
          title_en: "Gallipoli Naval & Land Battles (1915)",
          year: "1915",
          lat: 40.15,
          lng: 26.28,
          desc_tr: "18 Mart'ta Nusret Mayın Gemisi ve tabyalarla denizde, Arıburnu, Conkbayırı ve Anafartalar'da Mustafa Kemal'in dehası ve Mehmetçiğin sarsılmaz direnişiyle İtilaf kuvvetlerine 'Çanakkale Geçilmez' dedirtildi.",
          desc_en: "On March 18 at sea and across Chunuk Bair and Anafartalar on land under Mustafa Kemal, Turkish forces repelled the Allied invasion.",
          forces_tr: "Osmanlı 5. Ordusu (Mustafa Kemal - 19. Tümen & Anafartalar) vs. İtilaf Kuvvetleri",
          forces_en: "Ottoman 5th Army (Mustafa Kemal) vs. Allied Expeditionary Forces",
          outcome_tr: "Kesin Türk Zaferi • 'Çanakkale Geçilmez'",
          outcome_en: "Decisive Turkish Victory • Allied Evacuation"
        },
        {
          short_tr: "Sakarya Meydan Muharebesi (1921)",
          short_en: "Battle of Sakarya (1921)",
          title_tr: "Sakarya Meydan Muharebesi (23 Ağustos – 13 Eylül 1921)",
          title_en: "Battle of Sakarya (Aug 23 – Sept 13, 1921)",
          year: "1921",
          lat: 39.58,
          lng: 32.14,
          desc_tr: "22 gün 22 gece süren ölüm kalım muharebesinde Başkomutan Mustafa Kemal Paşa, 'Hattı müdafaa yoktur, sathı müdafaa vardır; o satıh bütün vatandır!' doktriniyle taarruzu Polatlı-Haymana hattında kırdı.",
          desc_en: "Fighting 22 days and nights, Commander-in-Chief Mustafa Kemal Pasha applied his total-surface defense doctrine to break the offensive near Ankara.",
          forces_tr: "TBMM Ordusu (Mustafa Kemal Paşa) vs. Yunan Küçük Asya Ordusu",
          forces_en: "Grand National Assembly Army (Mustafa Kemal Pasha) vs. Greek Army",
          outcome_tr: "1683'ten Beri Süren Geri Çekiliş Son Buldu • Gazilik ve Mareşallik",
          outcome_en: "Turning Point of the Turkish War of Independence"
        },
        {
          short_tr: "Büyük Taarruz & Dumlupınar (1922)",
          short_en: "Great Offensive & Dumlupınar (1922)",
          title_tr: "Büyük Taarruz ve Başkomutanlık Meydan Muharebesi (26–30 Ağustos 1922)",
          title_en: "The Great Offensive & Battle of Dumlupınar (Aug 26–30, 1922)",
          year: "1922",
          lat: 38.85,
          lng: 29.98,
          desc_tr: "26 Ağustos şafağında Afyon Kocatepe'den başlayan Büyük Taarruz, 30 Ağustos'ta Dumlupınar'da kesin imha zaferiyle sonuçlandı ve Türk ordusu 9 Eylül'de İzmir'e girerek Kurtuluş Savaşı'nı zaferle taçlandırdı.",
          desc_en: "Launched at dawn on August 26 from Kocatepe, the Great Offensive achieved decisive victory at Dumlupınar on August 30 and liberated Izmir on September 9.",
          forces_tr: "Türk Ordusu (Başkomutan Mustafa Kemal Paşa, Fevzi & İsmet Paşalar) vs. İşgal Ordusu",
          forces_en: "Turkish National Army (Mustafa Kemal Pasha) vs. Occupying Forces",
          outcome_tr: "Kesin Kurtuluş Zaferi & Tam Bağımsız Türkiye Cumhuriyeti",
          outcome_en: "Complete Liberation & Foundation of the Republic of Türkiye"
        }
      ],
      ingiltere: [
        {
          short_tr: "Lindisfarne & Viking İstilası (793–866)",
          short_en: "Lindisfarne & Viking Invasion (793–866)",
          title_tr: "Lindisfarne Baskını (793) ve Büyük Viking Ordusu'nun York Kuşatması (866)",
          title_en: "Raid on Lindisfarne (793) & Great Heathen Army at York (866)",
          year: "793–866",
          lat: 54.60,
          lng: -1.45,
          desc_tr: "793'te Lindisfarne'a yapılan baskınla başlayan Viking Çağı, 866'da Ivar the Boneless ve Halfdan Ragnarsson'un York'u (Jórvík) ele geçirmesiyle Britanya siyasi haritasını değiştirdi.",
          desc_en: "Beginning with the 793 Lindisfarne raid, the Viking Age reshaped Britain when the Great Heathen Army captured York (Jórvík) in 866.",
          forces_tr: "Büyük Viking Ordusu (Ragnar Oğulları) vs. Northumbria & Wessex Krallıkları",
          forces_en: "Great Heathen Army vs. Anglo-Saxon Kingdoms",
          outcome_tr: "Danelaw Bölgesinin Kurulması ve Viking Çağı'nın Zirvesi",
          outcome_en: "Establishment of the Danelaw Across Northern England"
        },
        {
          short_tr: "Stamford Bridge & Hastings (1066)",
          short_en: "Stamford Bridge & Hastings (1066)",
          title_tr: "Stamford Bridge ve Hastings Meydan Muharebeleri (1066)",
          title_en: "Battles of Stamford Bridge & Hastings (1066)",
          year: "1066",
          lat: 50.91,
          lng: 0.48,
          desc_tr: "Kral Harold Godwinson kuzeyde Viking Kralı Harald Hardrada'yı yendikten hemen sonra güneyde Hastings'te Norman Dükü Fatih William ile karşılaştı; Norman zaferi İngiltere tarihini kökten değiştirdi.",
          desc_en: "Days after defeating Viking King Harald Hardrada at Stamford Bridge, King Harold fell to William the Conqueror at Hastings.",
          forces_tr: "Norman Ordusu (Fatih William) vs. Anglo-Sakson Ordusu (Harold Godwinson)",
          forces_en: "Norman Army (William the Conqueror) vs. Anglo-Saxon Army",
          outcome_tr: "İngiltere'nin Normanlar Tarafından Fethi",
          outcome_en: "Norman Conquest of England"
        },
        {
          short_tr: "Bannockburn Savaşı (1314)",
          short_en: "Battle of Bannockburn (1314)",
          title_tr: "Bannockburn Muharebesi – İskoç Bağımsızlık Savaşı (1314)",
          title_en: "Battle of Bannockburn – First War of Scottish Independence (1314)",
          year: "1314",
          lat: 56.09,
          lng: -3.91,
          desc_tr: "İskoç Kralı Robert the Bruce, Stirling Kalesi yakınlarında yoğun mızraklı 'schiltron' dizilimiyle kendisinden çok daha kalabalık İngiliz ağır süvari ordusunu mağlup etti.",
          desc_en: "Scottish King Robert the Bruce used dense pike 'schiltrons' near Stirling Castle to rout the larger English heavy cavalry army.",
          forces_tr: "İskoç Krallığı (Robert the Bruce) vs. İngiltere Krallığı (II. Edward)",
          forces_en: "Kingdom of Scotland (Robert the Bruce) vs. Kingdom of England",
          outcome_tr: "İskoç Bağımsızlığının Yeniden Kazanılması",
          outcome_en: "Decisive Scottish Victory & Independence"
        },
        {
          short_tr: "Agincourt Muharebesi (1415)",
          short_en: "Battle of Agincourt (1415)",
          title_tr: "Agincourt Meydan Muharebesi – Yüzyıl Savaşları (1415)",
          title_en: "Battle of Agincourt – Hundred Years' War (1415)",
          year: "1415",
          lat: 50.46,
          lng: 2.14,
          desc_tr: "Kral V. Henry komutasındaki İngiliz ve Galli uzun yay (longbow) okçuları, çamurlu Agincourt sahasında Fransız ağır zırhlı şövalyelerini bozguna uğrattı.",
          desc_en: "King Henry V's English and Welsh longbowmen devastated the heavily armored French nobility on the muddy field of Agincourt.",
          forces_tr: "İngiliz Uzun Yay Ordusu (V. Henry) vs. Fransız Şövalye Ordusu",
          forces_en: "English Longbow Army (Henry V) vs. French Heavy Cavalry",
          outcome_tr: "Yüzyıl Savaşlarında Uzun Yay Taktik Devrimi",
          outcome_en: "Tactical Revolution of the Longbow in Medieval Warfare"
        },
        {
          short_tr: "İspanyol Armadası Deniz Savaşı (1588)",
          short_en: "Spanish Armada Naval Battle (1588)",
          title_tr: "Yenilmez Armada Deniz Muharebesi (1588)",
          title_en: "Defeat of the Spanish Armada (1588)",
          year: "1588",
          lat: 50.35,
          lng: -4.14,
          desc_tr: "I. Elizabeth döneminde Sir Francis Drake ve Charles Howard komutasındaki çevik İngiliz kalyonları ve ateş gemileri, Manş Denizi'nde İspanyol Yenilmez Armadası'nı dağıttı.",
          desc_en: "Under Queen Elizabeth I, Francis Drake and Charles Howard used agile warships and fireships in the English Channel to scatter the Spanish Armada.",
          forces_tr: "İngiliz Kraliyet Donanması (Francis Drake) vs. İspanyol Yenilmez Armadası",
          forces_en: "English Royal Navy (Francis Drake) vs. Spanish Armada",
          outcome_tr: "İngiltere'nin Küresel Deniz Gücü Olarak Yükselişi",
          outcome_en: "Rise of England as a Global Naval Power"
        },
        {
          short_tr: "Waterloo & Britanya Savaşı (1815 / 1940)",
          short_en: "Waterloo & Battle of Britain (1815 / 1940)",
          title_tr: "Waterloo Meydan Muharebesi (1815) & Britanya Hava Savaşı (1940)",
          title_en: "Battle of Waterloo (1815) & Battle of Britain (1940)",
          year: "1815 / 1940",
          lat: 51.50,
          lng: -0.12,
          desc_tr: "1815'te Wellington Dükü ve Blücher'in Napolyon'u durdurduğu Waterloo zaferi ve 1940'ta Kraliyet Hava Kuvvetleri'nin (RAF) Londra semalarını savunduğu Britanya Savaşı modern Avrupa kaderini belirledi.",
          desc_en: "Wellington's victory at Waterloo in 1815 and the Royal Air Force's defense of British skies in 1940 shaped modern European history.",
          forces_tr: "Birleşik Krallık & Müttefikler vs. Kıta İmparatorlukları",
          forces_en: "United Kingdom & Allies vs. Continental Powers",
          outcome_tr: "Avrupa Güç Dengesinin Korunması",
          outcome_en: "Preservation of British Sovereignty & Allied Victory"
        }
      ],
      fransa: [
        {
          short_tr: "Poitiers / Tours Muharebesi (732)",
          short_en: "Battle of Tours / Poitiers (732)",
          title_tr: "Poitiers (Tours / Balâtü'ş-Şühedâ) Muharebesi (732)",
          title_en: "Battle of Tours / Poitiers (732)",
          year: "732",
          lat: 46.58,
          lng: 0.34,
          desc_tr: "Frank Saray Nazırı Charles Martel'in piyade falanksı ile Pireneler'i aşan Endülüs Emevi ordusu Poitiers yakınlarında karşılaştı.",
          desc_en: "Charles Martel's Frankish infantry phalanx clashed with the Umayyad cavalry north of Poitiers, halting expansion into Western Europe.",
          forces_tr: "Frank Krallığı (Charles Martel) vs. Endülüs Emevi Ordusu (Abdurrahman el-Gâfikî)",
          forces_en: "Frankish Forces (Charles Martel) vs. Umayyad Forces",
          outcome_tr: "Karolenj İmparatorluğu'nun Yükselişi",
          outcome_en: "Rise of the Carolingian Empire in Western Europe"
        },
        {
          short_tr: "Orléans Kuşatması – Jeanne d'Arc (1429)",
          short_en: "Siege of Orléans – Joan of Arc (1429)",
          title_tr: "Orléans Kuşatması ve Jeanne d'Arc'ın Dönüm Noktası (1429)",
          title_en: "Siege of Orléans & Joan of Arc's Turning Point (1429)",
          year: "1429",
          lat: 47.90,
          lng: 1.90,
          desc_tr: "Yüzyıl Savaşları'nın en karanlık anında 17 yaşındaki Jeanne d'Arc öncülüğündeki Fransız kuvvetleri 9 günde Orléans kuşatmasını kırarak savaşın seyrini tersine çevirdi.",
          desc_en: "Led by 17-year-old Joan of Arc, French forces lifted the siege of Orléans in nine days, reversing the tide of the Hundred Years' War.",
          forces_tr: "Fransa Krallığı (Jeanne d'Arc) vs. İngiliz Kuşatma Ordusu",
          forces_en: "Kingdom of France (Joan of Arc) vs. English Besieging Army",
          outcome_tr: "Yüzyıl Savaşlarında Fransa'nın Yeniden Dirilişi",
          outcome_en: "French Revival in the Hundred Years' War"
        },
        {
          short_tr: "Bastille & Valmy – İhtilal Savaşları (1789–1792)",
          short_en: "Bastille & Valmy – Revolutionary Wars (1789–1792)",
          title_tr: "Bastille Baskını (1789) ve Valmy Topçu Muharebesi (1792)",
          title_en: "Storming of the Bastille (1789) & Battle of Valmy (1792)",
          year: "1789–1792",
          lat: 49.08,
          lng: 4.77,
          desc_tr: "14 Temmuz 1789 Bastille Baskını ile başlayan Fransız İhtilali, 1792'de Valmy'de yurttaş ordusunun koalisyon güçlerini durdurmasıyla Cumhuriyetin ilanına ulaştı.",
          desc_en: "Following the 1789 Storming of the Bastille, the French citizen-army halted the First Coalition at Valmy in 1792.",
          forces_tr: "Fransız İhtilal Ordusu vs. I. Koalisyon Kuvvetleri",
          forces_en: "French Revolutionary Army vs. First Coalition Forces",
          outcome_tr: "Birinci Fransız Cumhuriyeti'nin İlanı",
          outcome_en: "Proclamation of the First French Republic"
        },
        {
          short_tr: "Austerlitz – Napolyon Zaferi (1805)",
          short_en: "Battle of Austerlitz – Napoleon (1805)",
          title_tr: "Austerlitz (Üç İmparator) Meydan Muharebesi (2 Aralık 1805)",
          title_en: "Battle of Austerlitz – Battle of the Three Emperors (1805)",
          year: "1805",
          lat: 49.13,
          lng: 16.76,
          desc_tr: "Napolyon Bonapart, Pratzen Tepeleri'ni kasten zayıf göstererek Rus-Avusturya ordularını tuzağa çekti ve merkezden yaptığı yarma harekatıyla en büyük taktik zaferini kazandı.",
          desc_en: "Napoleon Bonaparte lured the Austro-Russian army into a trap at the Pratzen Heights before splitting their center in his greatest tactical masterpiece.",
          forces_tr: "Grande Armée (Napolyon Bonapart) vs. Rus-Avusturya İmparatorluk Orduları",
          forces_en: "Grande Armée (Napoleon) vs. Austro-Russian Imperial Armies",
          outcome_tr: "III. Koalisyonun Dağılması ve Napolyon'un Avrupa Zirvesi",
          outcome_en: "Collapse of the Third Coalition"
        },
        {
          short_tr: "Marne & Verdun (1914–1916)",
          short_en: "Marne & Verdun (1914–1916)",
          title_tr: "I. Marne (1914) ve Verdun Siper Muharebeleri (1916)",
          title_en: "First Battle of the Marne (1914) & Battle of Verdun (1916)",
          year: "1914–1916",
          lat: 49.16,
          lng: 5.38,
          desc_tr: "Paris taksileriyle cepheye asker taşınan Marne Mucizesi ve 300 gün süren Verdun savunması ('On ne passe pas!'), I. Dünya Savaşı Batı Cephesi'nin en büyük direniş sembolü oldu.",
          desc_en: "The Miracle of the Marne and the 300-day defense of Verdun ('They Shall Not Pass!') defined the Western Front of World War I.",
          forces_tr: "Fransız Ordusu vs. Alman İmparatorluk Ordusu",
          forces_en: "French Army vs. German Imperial Army",
          outcome_tr: "Paris ve Batı Cephesi Savunma Hattının Korunması",
          outcome_en: "Defense of Paris and the Western Front Held"
        },
        {
          short_tr: "Normandiya (D-Day) & Paris (1944)",
          short_en: "Normandy (D-Day) & Paris (1944)",
          title_tr: "Normandiya Çıkarması (6 Haziran 1944) ve Paris'in Kurtuluşu",
          title_en: "Normandy Landings (D-Day, June 6, 1944) & Liberation of Paris",
          year: "1944",
          lat: 49.34,
          lng: -0.85,
          desc_tr: "Tarihin en büyük amfibi harekatı olan Overlord (Normandiya Çıkarması) ile açılan Batı Cephesi, Ağustos 1944'te Paris'in kurtarılmasıyla sonuçlandı.",
          desc_en: "Operation Overlord, the largest amphibious landing in history on the Normandy coast, led to the liberation of Paris in August 1944.",
          forces_tr: "Müttefik Kuvvetler & Fransız Direnişi vs. Mihver Savunma Hattı",
          forces_en: "Allied Expeditionary Force & French Resistance vs. Axis Forces",
          outcome_tr: "Fransa ve Batı Avrupa'nın Kurtuluşu",
          outcome_en: "Liberation of France and Western Europe"
        }
      ],
      italya: [
        {
          short_tr: "Cannae Muharebesi – Pön Savaşları (M.Ö. 216)",
          short_en: "Battle of Cannae – Punic Wars (216 BC)",
          title_tr: "Cannae Meydan Muharebesi – II. Pön Savaşı (M.Ö. 216)",
          title_en: "Battle of Cannae – Second Punic War (216 BC)",
          year: "M.Ö. 216",
          lat: 41.30,
          lng: 16.13,
          desc_tr: "Alpleri fillerle aşarak İtalya'ya giren Kartacalı komutan Hannibal Barca, Cannae'de çift kanatlı kuşatma manevrasıyla kendisinden iki kat büyük Roma ordusunu çembere aldı.",
          desc_en: "Having crossed the Alps into Italy, Carthaginian general Hannibal Barca executed history's most famous double-envelopment at Cannae.",
          forces_tr: "Kartaca Ordusu (Hannibal Barca) vs. Roma Cumhuriyeti (8 Lejyon)",
          forces_en: "Carthaginian Army (Hannibal) vs. Roman Republic (8 Legions)",
          outcome_tr: "Harp Tarihinin En Klasik Çift Kanatlı Kuşatma Örneği",
          outcome_en: "Classic Double-Envelopment in Military History"
        },
        {
          short_tr: "Rubicon & Sezar İç Savaşı (M.Ö. 49–48)",
          short_en: "Rubicon & Caesar's Civil War (49–48 BC)",
          title_tr: "Rubicon Geçişi ('Alea iacta est') ve Pharsalus Muharebesi (M.Ö. 49–48)",
          title_en: "Crossing the Rubicon & Battle of Pharsalus (49–48 BC)",
          year: "M.Ö. 49",
          lat: 44.14,
          lng: 12.40,
          desc_tr: "Jül Sezar, XIII. Lejyon ile Rubicon Nehri'ni 'Ok yaydan çıktı!' diyerek geçti ve Roma Cumhuriyeti'nden İmparatorluğa geçişin yolunu açtı.",
          desc_en: "Julius Caesar crossed the Rubicon River with Legio XIII declaring 'The die is cast', transforming Rome from Republic to Empire.",
          forces_tr: "Jül Sezar Lejyonları vs. Pompeius & Senato Kuvvetleri",
          forces_en: "Julius Caesar's Legions vs. Pompey & Optimates",
          outcome_tr: "Roma İmparatorluk Döneminin Temellerinin Atılması",
          outcome_en: "Transition from Roman Republic to Roman Empire"
        },
        {
          short_tr: "Actium Deniz Savaşı (M.Ö. 31)",
          short_en: "Battle of Actium (31 BC)",
          title_tr: "Actium Deniz Muharebesi ve Pax Romana (M.Ö. 31)",
          title_en: "Battle of Actium & Dawn of Pax Romana (31 BC)",
          year: "M.Ö. 31",
          lat: 38.95,
          lng: 20.74,
          desc_tr: "Octavianus (Augustus) ve amirali Agrippa, Actium açıklarında Marcus Antonius ile Kleopatra'nın donanmasını yenerek Roma İmparatorluğu'nun tek hakimi oldu.",
          desc_en: "Octavian (Augustus) and Admiral Agrippa defeated the fleet of Mark Antony and Cleopatra at Actium, inaugurating the Roman Empire.",
          forces_tr: "Octavianus & Agrippa Donanması vs. Marcus Antonius & Kleopatra Filosu",
          forces_en: "Fleet of Octavian & Agrippa vs. Antony & Cleopatra",
          outcome_tr: "Augustus Çağı ve 200 Yıllık Pax Romana (Roma Barışı)",
          outcome_en: "Rise of Augustus and Two Centuries of Pax Romana"
        },
        {
          short_tr: "İtalyan Rönesans Savaşları (1494–1559)",
          short_en: "Italian Renaissance Wars (1494–1559)",
          title_tr: "İtalya ve Rönesans Şehir Devletleri Savaşları (1494–1559)",
          title_en: "Italian Wars of the Renaissance City-States (1494–1559)",
          year: "1494–1559",
          lat: 43.76,
          lng: 11.25,
          desc_tr: "Floransa, Venedik, Milano ve Papalık arasında yaşanan ve Machiavelli'nin 'Prens' ile 'Savaş Sanatı' eserlerine ilham veren modern diplomasi ve topçu savaşları.",
          desc_en: "Conflicts across Florence, Venice, Milan, and Rome that inspired Machiavelli's 'The Prince' and 'The Art of War'.",
          forces_tr: "İtalyan Şehir Devletleri (Floransa & Venedik) vs. Fransa Krallığı & Kutsal Roma İmparatorluğu",
          forces_en: "Italian City-States (Florence & Venice) vs. Kingdom of France & Holy Roman Empire",
          outcome_tr: "Modern Siyaset Bilimi ve Yıldız Kale Mimarisi Doğdu",
          outcome_en: "Birth of Modern Realpolitik and Trace Italienne Fortifications"
        },
        {
          short_tr: "Risorgimento – İtalya Birliği (1859–1870)",
          short_en: "Risorgimento – Italian Unification (1859–1870)",
          title_tr: "Solferino Muharebesi ve Binlerin Seferi – İtalya Birliği (1859–1870)",
          title_en: "Battle of Solferino & Expedition of the Thousand (1859–1870)",
          year: "1859–1870",
          lat: 45.36,
          lng: 10.56,
          desc_tr: "Garibaldi'nin 'Kırmızı Gömlekliler' (Binlerin Seferi) harekatı ve Solferino Muharebesi sonucunda İtalya yarımadası tek bayrak altında birleşti.",
          desc_en: "Through the Battle of Solferino and Giuseppe Garibaldi's Expedition of the Thousand, Italy achieved national unification.",
          forces_tr: "Piyemonte-Sardinya & Garibaldi Kuvvetleri vs. Avusturya & Bourbon Krallığı",
          forces_en: "Piedmont-Sardinia & Garibaldi vs. Austrian & Bourbon Forces",
          outcome_tr: "Modern İtalya Devleti'nin Kurulması ve Kızılhaç'ın Doğuşu",
          outcome_en: "Unification of Italy & Creation of the International Red Cross"
        }
      ],
      yunanistan: [
        {
          short_tr: "Maraton Meydan Muharebesi (M.Ö. 490)",
          short_en: "Battle of Marathon (490 BC)",
          title_tr: "Maraton Meydan Muharebesi (M.Ö. 490)",
          title_en: "Battle of Marathon (490 BC)",
          year: "M.Ö. 490",
          lat: 38.11,
          lng: 23.97,
          desc_tr: "Atinalı komutan Miltiades, Maraton Ovası'nda hoplit falankslarının kanatlarını güçlendirerek Pers çıkarma ordusunu kuşattı; zafer haberi 42 km koşularak Atina'ya ulaştırıldı.",
          desc_en: "Athenian general Miltiades reinforced the wings of his hoplite phalanx on the plain of Marathon to envelop the Persian landing force.",
          forces_tr: "Atina & Plataea Hoplitleri (Miltiades) vs. Pers Ordusu (I. Darius)",
          forces_en: "Athenian & Plataean Hoplites vs. Achaemenid Persian Army",
          outcome_tr: "Klasik Atina Demokrasisinin Korunması",
          outcome_en: "Preservation of Classical Athenian Democracy"
        },
        {
          short_tr: "Termopil Geçidi Savunması (M.Ö. 480)",
          short_en: "Battle of Thermopylae (480 BC)",
          title_tr: "Termopil (Thermopylae) Geçidi Savunması – 300 Spartalı (M.Ö. 480)",
          title_en: "Battle of Thermopylae – King Leonidas & the 300 Spartans (480 BC)",
          year: "M.Ö. 480",
          lat: 38.79,
          lng: 22.53,
          desc_tr: "Sparta Kralı Leonidas ve 300 Spartalı muhafızı ile Yunan müttefikleri, dar Termopil geçidinde dev Pers ordusunu 3 gün boyunca durdurarak Yunan donanmasına hazırlanma süresi kazandırdı.",
          desc_en: "Spartan King Leonidas and his 300 Spartans held the narrow coastal pass of Thermopylae for three days against Xerxes' massive army.",
          forces_tr: "Sparta Kralı Leonidas & Yunan İttifakı vs. Pers İmparatoru I. Serhas",
          forces_en: "King Leonidas & Greek Allies vs. Xerxes I of Persia",
          outcome_tr: "Tarihin En Ünlü Geçit Savunması ve Direniş Sembolü",
          outcome_en: "Legendary Last Stand in Military History"
        },
        {
          short_tr: "Salamis Deniz Zaferi (M.Ö. 480)",
          short_en: "Battle of Salamis (480 BC)",
          title_tr: "Salamis Boğazı Deniz Muharebesi (M.Ö. 480)",
          title_en: "Naval Battle of Salamis (480 BC)",
          year: "M.Ö. 480",
          lat: 37.95,
          lng: 23.56,
          desc_tr: "Themistokles'in stratejisiyle dar Salamis Boğazı'na çekilen Pers donanması, çevik Yunan triremelerinin mahmuz darbesiyle manevra yapamaz hale getirilerek mağlup edildi.",
          desc_en: "Lured into the narrow Straits of Salamis by Themistocles, the larger Persian fleet was outmaneuvered and rammed by Greek triremes.",
          forces_tr: "Yunan Müttefik Donanması (Themistokles) vs. Pers Donanması",
          forces_en: "Allied Greek Trireme Fleet (Themistocles) vs. Persian Navy",
          outcome_tr: "Ege Denizi Hakimiyeti ve Klasik Yunan Altın Çağı",
          outcome_en: "Greek Naval Supremacy and Dawn of the Golden Age of Athens"
        },
        {
          short_tr: "Peloponez Savaşı (M.Ö. 431–404)",
          short_en: "Peloponnesian War (431–404 BC)",
          title_tr: "Peloponez Savaşı – Atina Deniz Gücü vs. Sparta Kara Gücü (M.Ö. 431–404)",
          title_en: "Peloponnesian War – Athens vs. Sparta (431–404 BC)",
          year: "M.Ö. 431–404",
          lat: 37.07,
          lng: 22.43,
          desc_tr: "Thukydides'in ölümsüzleştirdiği 27 yıllık savaşta deniz imparatorluğu Atina ile kara gücü Sparta çarpıştı.",
          desc_en: "Chronicled by Thucydides, the 27-year struggle pitted maritime Athens against the land power of Sparta.",
          forces_tr: "Attika-Delos Deniz Birliği (Atina) vs. Peloponez Birliği (Sparta)",
          forces_en: "Delian League (Athens) vs. Peloponnesian League (Sparta)",
          outcome_tr: "Stratejik Tarih Yazımının (Thukydides) Doğuşu",
          outcome_en: "Birth of Realist Strategic History (Thucydides)"
        },
        {
          short_tr: "Büyük İskender Seferleri (M.Ö. 334–323)",
          short_en: "Campaigns of Alexander the Great (334–323 BC)",
          title_tr: "Büyük İskender'in Granikos, İssos ve Gaugamela Seferleri (M.Ö. 334–323)",
          title_en: "Alexander the Great's Campaigns: Granicus, Issus & Gaugamela (334–323 BC)",
          year: "M.Ö. 334–323",
          lat: 40.50,
          lng: 22.38,
          desc_tr: "Aristo'nun öğrencisi Makedonya Kralı Büyük İskender, Makedon falanksı ve Hetairoi ağır süvarileriyle Balkanlar'dan Hindistan'a uzanan Helenistik imparatorluğu kurdu.",
          desc_en: "Tutored by Aristotle, Alexander the Great used the Macedonian phalanx and Companion cavalry to forge an empire from Greece to India.",
          forces_tr: "Makedon-Helen Ordusu (Büyük İskender) vs. Pers İmparatorluğu (III. Darius)",
          forces_en: "Macedonian Army (Alexander the Great) vs. Persian Empire (Darius III)",
          outcome_tr: "Doğu ve Batı Kültürlerini Birleştiren Helenistik Çağ Başladı",
          outcome_en: "Dawn of the Hellenistic Era Bridging East and West"
        }
      ],
      almanya: [
        {
          short_tr: "Teutoburg Ormanı Savaşı (M.S. 9)",
          short_en: "Battle of the Teutoburg Forest (AD 9)",
          title_tr: "Teutoburg Ormanı Pususu – Roma'nın Durdurulması (M.S. 9)",
          title_en: "Battle of the Teutoburg Forest (AD 9)",
          year: "M.S. 9",
          lat: 52.41,
          lng: 8.13,
          desc_tr: "Arminius (Hermann) liderliğindeki Cermen kabileleri, sık Teutoburg ormanlarında Publius Quinctilius Varus komutasındaki 3 Roma lejyonunu (XVII, XVIII, XIX) tamamen imha etti.",
          desc_en: "Germanic tribes under Arminius ambushed and destroyed three Roman legions under Varus in the Teutoburg Forest, fixing Rome's frontier at the Rhine.",
          forces_tr: "Cermen İttifakı (Arminius) vs. Roma İmparatorluğu (3 Lejyon - Varus)",
          forces_en: "Germanic Alliance (Arminius) vs. Three Roman Legions (Varus)",
          outcome_tr: "Roma İmparatorluğu Sınırı Ren Nehri'nde Sabitlendi",
          outcome_en: "Roman Expansion Permanently Halted at the Rhine"
        },
        {
          short_tr: "I. ve II. Viyana Kuşatmaları (1529 & 1683)",
          short_en: "Sieges of Vienna (1529 & 1683)",
          title_tr: "I. ve II. Viyana Kuşatmaları – Orta Avrupa Cephesi (1529 & 1683)",
          title_en: "First & Second Sieges of Vienna (1529 & 1683)",
          year: "1529 & 1683",
          lat: 48.20,
          lng: 16.37,
          desc_tr: "Osmanlı İmparatorluğu'nun Orta Avrupa'daki en ileri harekat noktası olan Viyana önlerinde Habsburglar ve Kutsal İttifak güçleriyle yapılan tarihi kuşatmalar.",
          desc_en: "Historic sieges at the heart of Central Europe between the Ottoman Empire, the Habsburg Monarchy, and the Holy League.",
          forces_tr: "Osmanlı Ordusu vs. Habsburg İmparatorluğu & Kutsal İttifak (Jan Sobieski)",
          forces_en: "Ottoman Empire vs. Habsburg Monarchy & Holy League",
          outcome_tr: "Orta Avrupa Siyasi Sınırlarının Şekillenmesi",
          outcome_en: "Reshaping of the Balance of Power in Central Europe"
        },
        {
          short_tr: "Otuz Yıl Savaşları & Vestfalya (1618–1648)",
          short_en: "Thirty Years' War & Westphalia (1618–1648)",
          title_tr: "Otuz Yıl Savaşları: Beyaz Dağ, Lützen ve Vestfalya Barışı (1618–1648)",
          title_en: "Thirty Years' War: White Mountain, Lützen & Peace of Westphalia (1618–1648)",
          year: "1618–1648",
          lat: 51.25,
          lng: 12.14,
          desc_tr: "Prag'da Beyaz Dağ Muharebesi ile başlayıp Orta Avrupa'yı sarsan Otuz Yıl Savaşları, 1648 Vestfalya Antlaşması ile modern egemen ulus-devletler sistemini doğurdu.",
          desc_en: "Beginning at White Mountain near Prague, the Thirty Years' War concluded with the 1648 Peace of Westphalia, founding modern international relations.",
          forces_tr: "Katolik Birliği (Habsburg) vs. Protestan Birliği & İsveç-Fransa-Hollanda",
          forces_en: "Habsburg Catholic League vs. Protestant Union & Allied Powers",
          outcome_tr: "1648 Vestfalya Barışı • Modern Uluslararası Hukukun Doğuşu",
          outcome_en: "1648 Peace of Westphalia • Birth of the Modern State System"
        },
        {
          short_tr: "Leipzig Uluslar Muharebesi (1813)",
          short_en: "Battle of Leipzig (1813)",
          title_tr: "Leipzig (Uluslar) Meydan Muharebesi (16–19 Ekim 1813)",
          title_en: "Battle of Leipzig – Battle of the Nations (Oct 16–19, 1813)",
          year: "1813",
          lat: 51.31,
          lng: 12.41,
          desc_tr: "I. Dünya Savaşı öncesinde Avrupa tarihinin en büyük meydan muharebesi olan Leipzig'de 500.000'den fazla asker çarpıştı.",
          desc_en: "In the largest European battle prior to WWI, over 500,000 soldiers clashed at Leipzig during the German Campaign of 1813.",
          forces_tr: "VI. Koalisyon (Prusya, Avusturya, Rusya, İsveç) vs. Napolyon İmparatorluğu",
          forces_en: "Sixth Coalition (Prussia, Austria, Russia, Sweden) vs. Napoleon",
          outcome_tr: "Almanya ve Orta Avrupa'da Koalisyon Üstünlüğü",
          outcome_en: "Coalition Victory Across Central Europe"
        }
      ],
      ispanya: [
        {
          short_tr: "Guadalete Savaşı – Târık bin Ziyâd (711)",
          short_en: "Battle of Guadalete – Tariq ibn Ziyad (711)",
          title_tr: "Guadalete Muharebesi ve Endülüs'ün Fethi (711)",
          title_en: "Battle of Guadalete & Conquest of Al-Andalus (711)",
          year: "711",
          lat: 36.14,
          lng: -5.35,
          desc_tr: "Cebelitarık (Cebel-i Târık) Boğazı'nı geçerek gemilerini yakan Târık bin Ziyâd, Vizigot Kralı Roderic'i mağlup ederek İber Yarımadası'nda 800 yıllık Endülüs medeniyetini başlattı.",
          desc_en: "Crossing the Strait of Gibraltar, Tariq ibn Ziyad defeated Visigothic King Roderic, initiating eight centuries of Al-Andalus civilization.",
          forces_tr: "Emevi Ordusu (Târık bin Ziyâd) vs. Vizigot Krallığı (Roderic)",
          forces_en: "Umayyad Forces (Tariq ibn Ziyad) vs. Visigothic Kingdom",
          outcome_tr: "İber Yarımadası'nda Endülüs Medeniyetinin Kurulması",
          outcome_en: "Foundation of Al-Andalus on the Iberian Peninsula"
        },
        {
          short_tr: "Las Navas de Tolosa & Reconquista (1212–1492)",
          short_en: "Las Navas de Tolosa & Reconquista (1212–1492)",
          title_tr: "Las Navas de Tolosa (1212) ve Granada'nın Teslimi (1492)",
          title_en: "Las Navas de Tolosa (1212) & Completion of the Reconquista (1492)",
          year: "1212–1492",
          lat: 38.34,
          lng: -3.53,
          desc_tr: "Kastilya, Aragon ve Navarra krallıklarının 1212'deki Las Navas de Tolosa muharebesi ve 1492'de İspanya'nın birleşmesiyle İspanyol İmparatorluğu Çağı başladı.",
          desc_en: "The coalition victory at Las Navas de Tolosa in 1212 and the unification of Castile and Aragon in 1492 launched the Spanish Golden Age.",
          forces_tr: "Kastilya & Aragon Krallıkları vs. Muvahhidler & Gırnata Emirliği",
          forces_en: "Crown of Castile & Aragon vs. Almohad & Nasrid Forces",
          outcome_tr: "İspanya Birliği ve Coğrafi Keşifler Çağı",
          outcome_en: "Unification of Spain & Dawn of the Age of Discovery"
        },
        {
          short_tr: "Trafalgar & Madrid Direnişi (1805–1808)",
          short_en: "Trafalgar & Peninsular War (1805–1808)",
          title_tr: "Trafalgar Deniz Muharebesi (1805) ve Madrid '2 Mayıs' Direnişi (1808)",
          title_en: "Battle of Trafalgar (1805) & Dos de Mayo Madrid Uprising (1808)",
          year: "1805–1808",
          lat: 36.18,
          lng: -6.03,
          desc_tr: "1805'te Cebelitarık batısında Trafalgar Burnu'nda yaşanan dev deniz savaşı ve 1808'de Francisco Goya'nın tablolarına konu olan Madrid halk direnişi.",
          desc_en: "The monumental naval clash off Cape Trafalgar in 1805 and the 1808 Madrid uprising immortalized by Francisco Goya.",
          forces_tr: "İspanyol Direnişi & İngiliz-Portekiz Müttefikleri vs. Fransız İmparatorluğu",
          forces_en: "Spanish Resistance & Allied Forces vs. French Empire",
          outcome_tr: "Modern 'Gerilla' (Küçük Savaş) Kavramının Doğuşu",
          outcome_en: "Birth of Modern Guerrilla Warfare Strategy"
        }
      ],
      rusya: [
        {
          short_tr: "Peipus Gölü (Buz Üzerinde) Savaşı (1242)",
          short_en: "Battle on the Ice – Lake Peipus (1242)",
          title_tr: "Peipus Gölü (Buz Üzerinde) Muharebesi – Aleksandr Nevski (1242)",
          title_en: "Battle on the Ice at Lake Peipus – Alexander Nevsky (1242)",
          year: "1242",
          lat: 58.68,
          lng: 27.49,
          desc_tr: "Novgorod Prensi Aleksandr Nevski, donmuş Peipus Gölü üzerinde Töton Şövalyeleri'nin ağır zırhlı süvarilerini ince buz tabakasına çekerek bozguna uğrattı.",
          desc_en: "Prince Alexander Nevsky of Novgorod halted the Teutonic Knights on the frozen surface of Lake Peipus.",
          forces_tr: "Novgorod Cumhuriyeti (Aleksandr Nevski) vs. Töton & Livonya Şövalyeleri",
          forces_en: "Novgorod Republic (Alexander Nevsky) vs. Teutonic Knights",
          outcome_tr: "Kuzeybatı Rus Topraklarının Savunulması",
          outcome_en: "Eastern Frontier of the Northern Crusades Halted"
        },
        {
          short_tr: "Poltava Meydan Muharebesi (1709)",
          short_en: "Battle of Poltava (1709)",
          title_tr: "Poltava Meydan Muharebesi – Büyük Kuzey Savaşı (1709)",
          title_en: "Battle of Poltava – Great Northern War (1709)",
          year: "1709",
          lat: 49.63,
          lng: 34.55,
          desc_tr: "Çar I. Petro (Büyük Petro), modernleştirdiği Rus topçu ve piyade ordusuyla İsveç Kralı XII. Karl'ı Poltava'da yenerek Rusya'yı Avrupa'nın büyük güçleri arasına soktu.",
          desc_en: "Tsar Peter the Great defeated Swedish King Charles XII at Poltava, establishing Russia as a major European power.",
          forces_tr: "Rus Çarlığı (I. Petro) vs. İsveç İmparatorluğu (XII. Karl / Demirbaş Şarl)",
          forces_en: "Tsardom of Russia (Peter the Great) vs. Swedish Empire (Charles XII)",
          outcome_tr: "St. Petersburg'un Güvenliği ve Rus İmparatorluğu'nun Yükselişi",
          outcome_en: "Rise of the Russian Empire on the Baltic Sea"
        },
        {
          short_tr: "Borodino & 1812 Moskova Seferi (1812)",
          short_en: "Battle of Borodino & 1812 Campaign (1812)",
          title_tr: "Borodino Meydan Muharebesi ve 1812 Vatan Savaşı (Tolstoy - Savaş ve Barış)",
          title_en: "Battle of Borodino & 1812 Patriotic War (Tolstoy's War and Peace)",
          year: "1812",
          lat: 55.52,
          lng: 35.82,
          desc_tr: "Lev Tolstoy'un 'Savaş ve Barış' romanında ölümsüzleştirdiği Borodino Muharebesi ve Mareşal Kutuzov'un derinlikte yıpratma stratejisiyle Napolyon'un 600.000 kişilik Grande Armée'si Rusya kışında eridi.",
          desc_en: "Immortalized in Tolstoy's 'War and Peace', Field Marshal Kutuzov's defense at Borodino and strategic attrition shattered Napoleon's Grande Armée.",
          forces_tr: "Rus İmparatorluk Ordusu (Mareşal Kutuzov) vs. Grande Armée (Napolyon)",
          forces_en: "Russian Imperial Army (Kutuzov) vs. Napoleon's Grande Armée",
          outcome_tr: "Napolyon'un Moskova'dan Çekilişi ve Avrupa'da Dönüm Noktası",
          outcome_en: "Retreat of the Grande Armée from Moscow"
        },
        {
          short_tr: "Leningrad & Stalingrad Savunmaları (1941–1944)",
          short_en: "Siege of Leningrad & Battle of Stalingrad (1941–1944)",
          title_tr: "900 Günlük Leningrad Kuşatması ve Stalingrad Meydan Muharebesi (1941–1944)",
          title_en: "900-Day Siege of Leningrad & Battle of Stalingrad (1941–1944)",
          year: "1941–1944",
          lat: 48.70,
          lng: 44.51,
          desc_tr: "Donmuş Ladoga Gölü ('Yaşam Yolu') üzerinden direnen Leningrad (St. Petersburg) ve Volga kıyısında Uranüs Harekatı ile kuşatılan Stalingrad, II. Dünya Savaşı'nın kaderini değiştirdi.",
          desc_en: "The 900-day defense of Leningrad via the frozen Lake Ladoga 'Road of Life' and the encirclement at Stalingrad turned the tide of World War II.",
          forces_tr: "Sovyet Kızıl Ordusu (Mareşal Jukov) vs. Mihver Ordular Grubu",
          forces_en: "Soviet Red Army (Marshal Zhukov) vs. Axis Army Groups",
          outcome_tr: "II. Dünya Savaşı Doğu Cephesi'nin Kesin Dönüm Noktası",
          outcome_en: "Decisive Turning Point on the Eastern Front of WWII"
        }
      ],
      ortadogu: [
        {
          short_tr: "Kadeş Meydan Muharebesi (M.Ö. 1274)",
          short_en: "Battle of Kadesh (1274 BC)",
          title_tr: "Kadeş Meydan Muharebesi – Tarihin İlk Yazılı Barış Antlaşması (M.Ö. 1274)",
          title_en: "Battle of Kadesh – World's First Recorded Peace Treaty (1274 BC)",
          year: "M.Ö. 1274",
          lat: 34.55,
          lng: 36.51,
          desc_tr: "Asi Nehri kıyısında Hitit Kralı II. Muvatalli ile Mısır Firavunu II. Ramses arasında 5.000 savaş arabasıyla yapılan tarihin en büyük savaş arabası muharebesi Kadeş Barış Antlaşması ile sonuçlandı.",
          desc_en: "Fought with over 5,000 chariots between Hittite King Muwatalli II and Pharaoh Ramesses II, leading to history's oldest surviving peace treaty.",
          forces_tr: "Hitit İmparatorluğu (II. Muvatalli) vs. Mısır İmparatorluğu (II. Ramses)",
          forces_en: "Hittite Empire (Muwatalli II) vs. New Kingdom of Egypt (Ramesses II)",
          outcome_tr: "Kadeş Antlaşması • Dünya Tarihinin İlk Yazılı Diplomasi Belgesi",
          outcome_en: "Treaty of Kadesh • Oldest Known International Peace Treaty"
        },
        {
          short_tr: "Gaugamela (Erbil) Muharebesi (M.Ö. 331)",
          short_en: "Battle of Gaugamela (331 BC)",
          title_tr: "Gaugamela (Erbil) Meydan Muharebesi (M.Ö. 331)",
          title_en: "Battle of Gaugamela (331 BC)",
          year: "M.Ö. 331",
          lat: 36.36,
          lng: 43.25,
          desc_tr: "Mezopotamya düzlüğünde Büyük İskender, sağ kanada doğru eğik yürüyüş manevrasıyla Pers Kralı III. Darius'un savaş arabalarını boşa çıkarıp merkezde açılan gedikten kesin hücumu gerçekleştirdi.",
          desc_en: "On the plains of Mesopotamia, Alexander the Great used an oblique echelon advance to open a gap in Darius III's Persian line.",
          forces_tr: "Makedon Ordusu (Büyük İskender) vs. Ahameniş Pers İmparatorluğu (III. Darius)",
          forces_en: "Macedonian Army (Alexander) vs. Achaemenid Empire (Darius III)",
          outcome_tr: "Babil, Susa ve Persepolis'in İskender'in Elinde Birleşmesi",
          outcome_en: "Fall of the Achaemenid Empire and Entry into Babylon"
        },
        {
          short_tr: "Hıttin & Kudüs'ün Fethi – Selahaddin (1187)",
          short_en: "Battle of Hattin & Jerusalem – Saladin (1187)",
          title_tr: "Hıttin Meydan Muharebesi ve Kudüs'ün Fethi – Selahaddin Eyyubi (1187)",
          title_en: "Battle of Hattin & Liberation of Jerusalem – Saladin (1187)",
          year: "1187",
          lat: 32.80,
          lng: 35.45,
          desc_tr: "Sultan Selahaddin Eyyubi, Taberiye Gölü yakınlarındaki Hıttin Boynuzları'nda su kaynaklarını kontrol altına alarak Haçlı ordusunu mağlup etti ve Kudüs'ü barışçıl bir amanname ile teslim aldı.",
          desc_en: "Sultan Saladin cut off the Crusader army from water at the Horns of Hattin near Lake Tiberias and peacefully retook Jerusalem.",
          forces_tr: "Eyyubi Ordusu (Selahaddin Eyyubi) vs. Kudüs Haçlı Krallığı",
          forces_en: "Ayyubid Army (Saladin) vs. Kingdom of Jerusalem",
          outcome_tr: "Kudüs'ün Yeniden Fethi ve Şövalyelik/Merhamet Diplomasisi",
          outcome_en: "Recapture of Jerusalem & Renowned Chivalric Clemency"
        },
        {
          short_tr: "Bağdat Kuşatması & Ayn Câlût (1258–1260)",
          short_en: "Siege of Baghdad & Ain Jalut (1258–1260)",
          title_tr: "Bağdat Kuşatması (1258) ve Ayn Câlût Meydan Muharebesi (1260)",
          title_en: "Siege of Baghdad (1258) & Battle of Ain Jalut (1260)",
          year: "1258–1260",
          lat: 32.55,
          lng: 35.35,
          desc_tr: "1258'de Hülagü Han'ın Bağdat'ı kuşatmasının ardından 1260'ta Filistin'de Ayn Câlût'ta Sultan Kutuz ve Baybars komutasındaki Memlük ordusu Moğol ilerleyişini tarihte ilk kez durdurdu.",
          desc_en: "Following the 1258 siege of Baghdad, Mamluk commanders Qutuz and Baibars inflicted the first decisive defeat on the Mongol army at Ain Jalut in 1260.",
          forces_tr: "Memlük Sultanlığı (Kutuz & Baybars) vs. İlhanlı Moğol Ordusu",
          forces_en: "Mamluk Sultanate (Qutuz & Baibars) vs. Ilkhanate Mongol Forces",
          outcome_tr: "Mısır ve Doğu Akdeniz'de İslam Bilim ve Kültür Mirasının Korunması",
          outcome_en: "Mongol Westward Advance Halted in the Levant"
        }
      ],
      ortaasya: [
        {
          short_tr: "Talas Meydan Muharebesi (751)",
          short_en: "Battle of Talas (751)",
          title_tr: "Talas Meydan Muharebesi – Kağıdın Semerkant'tan Dünyaya Yayılışı (751)",
          title_en: "Battle of Talas – Spread of Papermaking to Samarkand & the World (751)",
          year: "751",
          lat: 42.52,
          lng: 72.24,
          desc_tr: "Karluk Türklerinin desteğiyle Abbasi-Türk ittifakı Tang Hanedanı ordusunu Talas Irmağı kıyısında mağlup etti; Semerkant'ta kurulan kağıt atölyeleri dünya bilim ve edebiyat tarihini değiştirdi.",
          desc_en: "Supported by Karluk Turks, Abbasid-Turkic forces defeated the Tang Dynasty at the Talas River, bringing papermaking technology to Samarkand and the West.",
          forces_tr: "Abbasi & Karluk Türk Ordusu vs. Tang Hanedanı Ordusu",
          forces_en: "Abbasid & Karluk Turkic Forces vs. Tang Dynasty Army",
          outcome_tr: "Orta Asya'nın İslamlaşması ve Kağıt Teknolojisinin Batıya Geçişi",
          outcome_en: "Spread of Papermaking via Samarkand to the Islamic World and Europe"
        },
        {
          short_tr: "Buhara & Semerkant Seferi – Cengiz Han (1220)",
          short_en: "Bukhara & Samarkand Campaign – Genghis Khan (1220)",
          title_tr: "Cengiz Han'ın Kızılkum Çölü Manevrası ve Semerkant Seferi (1219–1221)",
          title_en: "Genghis Khan's Kyzylkum Desert Maneuver & Samarkand Campaign (1219–1221)",
          year: "1219–1221",
          lat: 39.65,
          lng: 66.95,
          desc_tr: "Cengiz Han ve komutanları Cebe ile Subutay, geçilmez sanılan Kızılkum Çölü'nü aşarak Buhara ve Semerkant'ı kuşattı ve İpek Yolu'nu tek bir imparatorluk çatısı altında birleştirdi.",
          desc_en: "Genghis Khan and generals Jebe and Subutai crossed the Kyzylkum Desert in a surprise strategic flank on Bukhara and Samarkand.",
          forces_tr: "Moğol İmparatorluğu (Cengiz Han & Subutay) vs. Harzemşahlar Devleti",
          forces_en: "Mongol Empire (Genghis Khan & Subutai) vs. Khwarazmian Empire",
          outcome_tr: "İpek Yolu Üzerinde Pax Mongolica (Moğol Barışı) Ticaret Ağı",
          outcome_en: "Integration of the Silk Road Under Pax Mongolica"
        },
        {
          short_tr: "Terek Irmağı & Timur Rönesansı (1391–1395)",
          short_en: "Terek River & Timurid Campaigns (1391–1395)",
          title_tr: "Kunduzca (1391) ve Terek Irmağı (1395) Meydan Muharebeleri – Emir Timur",
          title_en: "Battles of Kondurcha River (1391) & Terek River (1395) – Timur",
          year: "1391–1395",
          lat: 43.60,
          lng: 46.10,
          desc_tr: "Emir Timur, Altın Orda Hanı Toktamış'ı mağlup ederek İpek Yolu ticaretinin merkezini başkent Semerkant'a taşıdı ve Uluğ Bey'in bilim mirasına zemin hazırladı.",
          desc_en: "Timur (Tamerlane) defeated Tokhtamysh of the Golden Horde, channeling Silk Road wealth into Samarkand's Timurid Renaissance.",
          forces_tr: "Timur İmparatorluğu (Emir Timur) vs. Altın Orda Devleti (Toktamış Han)",
          forces_en: "Timurid Empire (Timur) vs. Golden Horde (Tokhtamysh)",
          outcome_tr: "Semerkant'ın Avrasya Bilim ve Mimari Başkenti Oluşu",
          outcome_en: "Rise of Samarkand as the Jewel of the Timurid Renaissance"
        }
      ],
      doguasya: [
        {
          short_tr: "Çin'in Birleşmesi Seferleri (M.Ö. 221)",
          short_en: "Qin Wars of Unification (221 BC)",
          title_tr: "Savaşan Devletler Dönemi ve Çin'in Birleşmesi (M.Ö. 230–221)",
          title_en: "Warring States Campaigns & Qin Unification of China (230–221 BC)",
          year: "M.Ö. 221",
          lat: 34.26,
          lng: 108.94,
          desc_tr: "Sun Tzu'nun 'Savaş Sanatı' ilkelerinin uygulandığı Savaşan Devletler Dönemi sonunda Qin Shi Huang 6 rakip krallığı birleştirerek Çin Seddi ve Terracotta Ordusu'nu inşa ettirdi.",
          desc_en: "Applying principles from Sun Tzu's 'The Art of War', Qin Shi Huang unified the Warring States, founding Imperial China and constructing the Great Wall.",
          forces_tr: "Qin Krallığı (Qin Shi Huang & General Wang Jian) vs. 6 Savaşan Devlet",
          forces_en: "State of Qin (Qin Shi Huang) vs. Six Warring States",
          outcome_tr: "Birleşik Çin İmparatorluğu, Çin Seddi ve Yazı/Ölçü Standartlaşması",
          outcome_en: "Unification of Imperial China & Construction of the Great Wall"
        },
        {
          short_tr: "Kızıl Kayalar (Chibi) Deniz Savaşı (208)",
          short_en: "Battle of Red Cliffs / Chibi (AD 208)",
          title_tr: "Kızıl Kayalar (Red Cliffs / Chibi) Deniz Muharebesi (M.S. 208)",
          title_en: "Battle of Red Cliffs (Chibi) on the Yangtze River (AD 208)",
          year: "208",
          lat: 29.87,
          lng: 113.62,
          desc_tr: "'Üç Krallığın Hikâyesi' destanının kalbi olan Kızıl Kayalar'da Zhuge Liang ve Zhou Yu, birbirine zincirlenmiş kuzey donanmasını rüzgar yönünü hesaplayarak ateş gemileriyle yaktı.",
          desc_en: "Immortalized in 'Romance of the Three Kingdoms', strategists Zhuge Liang and Zhou Yu used fireships on the Yangtze River to destroy Cao Cao's chained fleet.",
          forces_tr: "Güney İttifakı (Liu Bei, Sun Quan, Zhuge Liang) vs. Kuzey Donanması (Cao Cao)",
          forces_en: "Allied Forces of Liu Bei & Sun Quan vs. Cao Cao's Fleet",
          outcome_tr: "Çin'de Üç Krallık Döneminin Başlaması",
          outcome_en: "Establishment of the Three Kingdoms Period"
        },
        {
          short_tr: "Myeongnyang Deniz Zaferi – Kore (1597)",
          short_en: "Battle of Myeongnyang – Admiral Yi (1597)",
          title_tr: "Myeongnyang Boğazı Deniz Zaferi – Amiral Yi Sun-sin (1597)",
          title_en: "Battle of Myeongnyang – Admiral Yi Sun-sin's 13 Ships vs. 133 (1597)",
          year: "1597",
          lat: 34.57,
          lng: 126.30,
          desc_tr: "Koreli Amiral Yi Sun-sin, Myeongnyang Boğazı'nın sert gelgit akıntılarını kullanarak yalnızca 13 savaş gemisiyle (ve Geobukseon Kaplumbağa Gemisi geleneğiyle) 133 gemilik filoyu hiçbir gemi kaybetmeden mağlup etti.",
          desc_en: "Using the roaring tidal currents of Myeongnyang Strait, Korean Admiral Yi Sun-sin defeated 133 warships with just 13 ships without losing a single vessel.",
          forces_tr: "Joseon Kore Donanması (Amiral Yi Sun-sin - 13 Gemi) vs. İstilacı Donanma (133 Gemi)",
          forces_en: "Joseon Navy (Admiral Yi Sun-sin - 13 Ships) vs. 133 Warships",
          outcome_tr: "Dünya Deniz Harp Tarihinin En Olağanüstü Savunma Zaferi",
          outcome_en: "One of the Greatest Naval Defensive Victories in World History"
        },
        {
          short_tr: "Sekigahara & Panipat Muharebeleri (1526 / 1600)",
          short_en: "Panipat & Sekigahara Battles (1526 / 1600)",
          title_tr: "I. Panipat (1526 - Babür Şah) ve Sekigahara Samuray Meydan Muharebesi (1600)",
          title_en: "First Battle of Panipat (1526) & Battle of Sekigahara (1600)",
          year: "1526 / 1600",
          lat: 35.36,
          lng: 136.46,
          desc_tr: "Hindistan'da Babür Şah'ın Osmanlı tabur cengi ve topçu tertibiyle kazandığı Panipat Zaferi (1526) ile Japonya'da Tokugawa Ieyasu'nun Samuray çağını birleştirdiği Sekigahara Muharebesi (1600).",
          desc_en: "Babur's artillery-wagon tactics at Panipat (1526) founding the Mughal Empire, and Tokugawa Ieyasu's samurai victory at Sekigahara (1600) unifying Japan.",
          forces_tr: "Babür Şah & Tokugawa Ieyasu (Doğu Ordusu) vs. İbrahim Lodi Sultanlığı & Batı Daimyo Koalisyonu",
          forces_en: "Babur & Tokugawa Ieyasu (Eastern Army) vs. Lodi Sultanate & Western Daimyo Coalition",
          outcome_tr: "Babür İmparatorluğu ve Edo Dönemi Barışının Kurulması",
          outcome_en: "Foundation of the Mughal Empire and 250-Year Edo Peace"
        }
      ],
      amerika: [
        {
          short_tr: "Tenochtitlan Kuşatması – Meksika (1521)",
          short_en: "Siege of Tenochtitlan – Mexico (1521)",
          title_tr: "Tenochtitlan Göl Başkenti Kuşatması ve Aztek Direnişi (1521)",
          title_en: "Siege of Tenochtitlan & Aztec Defense of the Lake Capital (1521)",
          year: "1521",
          lat: 19.43,
          lng: -99.13,
          desc_tr: "Texcoco Gölü ortasındaki Aztek başkenti Tenochtitlan'da son hükümdar Cuauhtémoc liderliğindeki Aztek savaşçıları, su yolları ve geçitlerde 75 gün boyunca destansı bir savunma verdi.",
          desc_en: "Led by the last Aztec Emperor Cuauhtémoc, defenders fought across the causeways and canals of Lake Texcoco for 75 days.",
          forces_tr: "Aztek İmparatorluğu (Cuauhtémoc) vs. İspanyol & Tlaxcala Koalisyonu",
          forces_en: "Aztec Empire (Cuauhtémoc) vs. Spanish & Tlaxcalan Coalition",
          outcome_tr: "Meksika'da Kolomb Öncesi İmparatorluktan Yeni İspanya'ya Geçiş",
          outcome_en: "Transformation of Mesoamerica and Birth of Modern Mexico"
        },
        {
          short_tr: "Cusco & Ollantaytambo – İnka Direnişi (1536–1537)",
          short_en: "Cusco & Ollantaytambo – Inca Defense (1536–1537)",
          title_tr: "Cusco Kuşatması ve Ollantaytambo İnka Savunması (1536–1537)",
          title_en: "Siege of Cusco & Battle of Ollantaytambo (1536–1537)",
          year: "1536–1537",
          lat: -13.25,
          lng: -72.26,
          desc_tr: "Manco Inca Yupanqui, And Dağları'nın sarp teraslarında ve Ollantaytambo kalesinde nehir sularını vadiye salarak süvarileri durdurdu ve İnka direnişini başlattı.",
          desc_en: "Manco Inca Yupanqui flooded the plains below the terraced fortress of Ollantaytambo in the Sacred Valley to neutralize Spanish cavalry.",
          forces_tr: "İnka İmparatorluğu (Manco Inca) vs. Konkistador Kuvvetleri",
          forces_en: "Inca Empire (Manco Inca) vs. Conquistador Forces",
          outcome_tr: "And Dağları'nda Vilcabamba İnka Direniş Hattı",
          outcome_en: "Preservation of Inca Resistance in the High Andes"
        },
        {
          short_tr: "Lexington, Concord & Saratoga – ABD (1775–1777)",
          short_en: "Lexington, Concord & Saratoga – USA (1775–1777)",
          title_tr: "Lexington-Concord (1775) ve Saratoga Meydan Muharebesi (1777)",
          title_en: "Battles of Lexington & Concord (1775) and Saratoga (1777)",
          year: "1775–1777",
          lat: 42.46,
          lng: -71.35,
          desc_tr: "Concord Kuzey Köprüsü'nde atılan 'dünyanın duyduğu ilk kurşun' ile başlayan Amerikan Bağımsızlık Savaşı, Saratoga ve Yorktown zaferleriyle ABD'nin kuruluşunu sağladı.",
          desc_en: "Beginning with the 'shot heard round the world' at Concord's North Bridge, American victories at Saratoga and Yorktown secured independence.",
          forces_tr: "Kıta Ordusu (George Washington) vs. Britanya İmparatorluk Ordusu",
          forces_en: "Continental Army (George Washington) vs. British Army",
          outcome_tr: "Amerika Birleşik Devletleri'nin Bağımsızlığı",
          outcome_en: "Independence of the United States of America"
        },
        {
          short_tr: "Boyacá & Ayacucho – Güney Amerika (1819–1824)",
          short_en: "Boyacá & Ayacucho – South America (1819–1824)",
          title_tr: "Boyacá (1819), Chacabuco ve Ayacucho Bağımsızlık Muharebeleri (1824)",
          title_en: "Battles of Boyacá (1819), Chacabuco & Ayacucho (1824)",
          year: "1819–1824",
          lat: 5.45,
          lng: -73.36,
          desc_tr: "Simón Bolívar ve José de San Martín'in And Dağları'nı aşarak kazandıkları Boyacá, Chacabuco ve Ayacucho meydan muharebeleriyle Kolombiya, Peru, Arjantin ve tüm Güney Amerika bağımsızlığına kavuştu.",
          desc_en: "Crossing the freezing Andes, Simón Bolívar and José de San Martín won decisive victories at Boyacá and Ayacucho to liberate South America.",
          forces_tr: "Güney Amerika Kurtuluş Orduları (Bolívar & San Martín) vs. Kraliyet Ordusu",
          forces_en: "Liberation Armies (Bolívar & San Martín) vs. Royalist Forces",
          outcome_tr: "Güney Amerika Cumhuriyetlerinin Bağımsızlığı",
          outcome_en: "Independence of the South American Republics"
        },
        {
          short_tr: "Gettysburg Meydan Muharebesi (1863)",
          short_en: "Battle of Gettysburg (1863)",
          title_tr: "Gettysburg Meydan Muharebesi ve Abraham Lincoln'ün Hitabesi (1863)",
          title_en: "Battle of Gettysburg & Lincoln's Gettysburg Address (1863)",
          year: "1863",
          lat: 39.81,
          lng: -77.23,
          desc_tr: "Amerikan İç Savaşı'nın en kritik dönüm noktası olan 3 günlük Gettysburg Muharebesi sonunda Birlik (Union) ordusu hattı korudu ve köleliğin kaldırılması süreci kesinleşti.",
          desc_en: "The three-day Battle of Gettysburg marked the decisive turning point of the American Civil War and inspired Lincoln's Gettysburg Address.",
          forces_tr: "Birlik Ordusu (Union - General Meade) vs. Konfederasyon Ordusu (General Lee)",
          forces_en: "Union Army (Gen. Meade) vs. Confederate Army (Gen. Lee)",
          outcome_tr: "ABD'nin Birliğinin Korunması ve Köleliğin Kaldırılması",
          outcome_en: "Preservation of the Union & Abolition of Slavery"
        }
      ],
      iskandinavya: [
        {
          short_tr: "Hafrsfjord Deniz Savaşı – Norveç (872)",
          short_en: "Battle of Hafrsfjord – Norway (872)",
          title_tr: "Hafrsfjord Fiyordu Deniz Savaşı – Norveç'in Birleşmesi (872)",
          title_en: "Naval Battle of Hafrsfjord – Unification of Norway (872)",
          year: "872",
          lat: 58.94,
          lng: 5.61,
          desc_tr: "Kral Güzel Saçlı Harald (Harald Fairhair), Hafrsfjord fiyordunda Viking uzun gemileriyle yapılan büyük deniz muharebesini kazanarak birleşik Norveç Krallığı'nı kurdu.",
          desc_en: "King Harald Fairhair won the great longship naval battle in Hafrsfjord, uniting the petty kingdoms into the Kingdom of Norway.",
          forces_tr: "Kral Harald Fairhair Filosu vs. Batı Fiyortları Viking Şefleri",
          forces_en: "King Harald Fairhair's Fleet vs. Rival Viking Chieftains",
          outcome_tr: "Birleşik Norveç Krallığı'nın Kurulması ve İzlanda Göçleri",
          outcome_en: "Unification of Norway & Viking Settlement of Iceland"
        },
        {
          short_tr: "Clontarf & Svolder Viking Savaşları (1000–1014)",
          short_en: "Svolder & Clontarf Viking Battles (1000–1014)",
          title_tr: "Svolder Deniz Savaşı (1000) ve Dublin Clontarf Muharebesi (1014)",
          title_en: "Naval Battle of Svolder (1000) & Battle of Clontarf in Dublin (1014)",
          year: "1000–1014",
          lat: 53.36,
          lng: -6.20,
          desc_tr: "Baltık'ta Kral Olaf Tryggvason'un 'Uzun Yılan' (Ormen Lange) gemisiyle verdiği efsanevi Svolder Savaşı ve İrlanda Yüksek Kralı Brian Boru'nun Dublin'de Viking gücünü kırdığı Clontarf Muharebesi.",
          desc_en: "Olaf Tryggvason's legendary last stand aboard the 'Long Serpent' at Svolder (1000) and High King Brian Boru's victory at Clontarf near Dublin (1014).",
          forces_tr: "İrlanda Yüksek Kralı Brian Boru & Kuzey Krallıkları vs. Dublin-Orkney Viking İttifakı",
          forces_en: "High King Brian Boru & Norse Kings vs. Viking Coalitions",
          outcome_tr: "Kuzey Denizi ve İrlanda'da Yeni Siyasi Dengenin Kurulması",
          outcome_en: "Transformation of Norse-Gaelic Power Across the North Atlantic"
        },
        {
          short_tr: "Breitenfeld & Lützen – İsveç (1631–1632)",
          short_en: "Breitenfeld & Lützen – Sweden (1631–1632)",
          title_tr: "Breitenfeld (1631) ve Lützen (1632) Muharebeleri – 'Kuzeyin Aslanı' Gustav Adolf",
          title_en: "Battles of Breitenfeld (1631) & Lützen (1632) – Gustavus Adolphus",
          year: "1631–1632",
          lat: 51.40,
          lng: 12.33,
          desc_tr: "İsveç Kralı II. Gustav Adolf, hafif sahra topları ve hareketli ateş hattı taktiğiyle Breitenfeld ve Lützen'de modern askeri taktik devrimini gerçekleştirdi.",
          desc_en: "Swedish King Gustavus Adolphus ('The Lion of the North') revolutionized warfare with mobile field artillery and combined-arms tactics.",
          forces_tr: "İsveç İmparatorluğu (Gustav Adolf) vs. Kutsal Roma İmparatorluğu (Tilly & Wallenstein)",
          forces_en: "Swedish Empire (Gustavus Adolphus) vs. Imperial Forces",
          outcome_tr: "Modern Sahra Topçusu ve Ateş Gücü Doktrininin Doğuşu",
          outcome_en: "Birth of Modern Combined-Arms Field Artillery Doctrine"
        }
      ],
      afrika: [
        {
          short_tr: "Zama Meydan Muharebesi – Tunus (M.Ö. 202)",
          short_en: "Battle of Zama – Tunisia (202 BC)",
          title_tr: "Zama Meydan Muharebesi – Hannibal Barca vs. Scipio Africanus (M.Ö. 202)",
          title_en: "Battle of Zama – Hannibal Barca vs. Scipio Africanus (202 BC)",
          year: "M.Ö. 202",
          lat: 36.11,
          lng: 9.29,
          desc_tr: "Tunus/Kartaca yakınlarındaki Zama Ovası'nda Hannibal'ın 80 savaş filine karşı Scipio Africanus, lejyonları arasında koridorlar açıp borazanlarla filleri şaşırtarak II. Pön Savaşı'nı kazandı.",
          desc_en: "On the plains of Zama near Carthage, Scipio Africanus opened lanes in his legions to neutralize Hannibal's 80 war elephants, ending the Second Punic War.",
          forces_tr: "Kartaca Ordusu (Hannibal Barca & 80 Savaş Fili) vs. Roma & Numidya Süvarileri (Scipio)",
          forces_en: "Carthage (Hannibal & 80 War Elephants) vs. Rome & Numidia (Scipio)",
          outcome_tr: "II. Pön Savaşı'nın Sona Ermesi ve Akdeniz Hakimiyetinin Değişimi",
          outcome_en: "End of the Second Punic War"
        },
        {
          short_tr: "Vadisseyl (Üç Kral) Savaşı – Fas (1578)",
          short_en: "Battle of Alcácer Quibir – Morocco (1578)",
          title_tr: "Vadisseyl (Vadi'l-Mehâzin / Üç Kral) Meydan Muharebesi (1578)",
          title_en: "Battle of Alcácer Quibir – Battle of the Three Kings (1578)",
          year: "1578",
          lat: 35.03,
          lng: -5.91,
          desc_tr: "Fas Saadi Sultanlığı (Osmanlı desteğiyle), Kuzey Fas'ta Portekiz Kralı I. Sebastião'nun ordusunu kesin bir yenilgiye uğratarak Kuzeybatı Afrika'nın bağımsızlığını korudu.",
          desc_en: "Moroccan Saadi forces decisively defeated King Sebastian of Portugal in northern Morocco, preserving Moroccan independence and elevating Ahmad al-Mansur.",
          forces_tr: "Fas Saadi Sultanlığı (Abdülmelik & Ahmed el-Mansur) vs. Portekiz Krallığı (I. Sebastião)",
          forces_en: "Saadi Sultanate of Morocco vs. Kingdom of Portugal",
          outcome_tr: "Fas'ın Altın Çağı ve Kuzey Afrika Bağımsızlığının Korunması",
          outcome_en: "Preservation of Moroccan Sovereignty & Golden Age of Marrakesh-Fez"
        },
        {
          short_tr: "Isandlwana Muharebesi – Güney Afrika (1879)",
          short_en: "Battle of Isandlwana – South Africa (1879)",
          title_tr: "Isandlwana Meydan Muharebesi – Zulu 'Boğa Boynuzu' Taktiği (1879)",
          title_en: "Battle of Isandlwana – Zulu 'Horns of the Buffalo' Tactic (1879)",
          year: "1879",
          lat: -28.35,
          lng: 30.65,
          desc_tr: "Zulu Kralı Cetshwayo'nun komutanı Ntshingwayo, Shaka Zulu'nun meşhur 'Impi Boğa Boynuzu' (merkez göğüs ve iki kuşatıcı kanat) taktiğiyle modern tüfekli ve toplu İngiliz kolordusunu kuşattı.",
          desc_en: "Using Shaka Zulu's classic 'Horns of the Buffalo' encirclement formation, 20,000 Zulu warriors overwhelmed a modern British column at Isandlwana.",
          forces_tr: "Zulu Krallığı Ordusu (20.000 Impi Savaşçısı) vs. Britanya İmparatorluk Kolordusu",
          forces_en: "Zulu Kingdom Impi Army vs. British Imperial Column",
          outcome_tr: "Afrika Askeri Tarihinin En Çarpıcı Kuşatma Manevralarından Biri",
          outcome_en: "Landmark Indigenous Tactical Victory in Southern Africa"
        },
        {
          short_tr: "Adowa (Adwa) Zaferi – Etiyopya (1896)",
          short_en: "Battle of Adwa – Ethiopia (1896)",
          title_tr: "Adowa (Adwa) Meydan Muharebesi – Etiyopya'nın Bağımsızlık Zaferi (1896)",
          title_en: "Battle of Adwa – Ethiopian Victory Against Colonialism (1896)",
          year: "1896",
          lat: 14.16,
          lng: 38.89,
          desc_tr: "Etiyopya İmparatoru II. Menelik ve İmparatoriçe Taytu Betul, Adwa dağlarında 100.000 kişilik birleşik Etiyopya ordusuyla İtalyan sömürge ordusunu mağlup ederek Etiyopya'nın bağımsızlığını dünyaya kabul ettirdi.",
          desc_en: "Emperor Menelik II and Empress Taytu Betul led a united Ethiopian army in the mountains of Adwa to defeat the invading Italian army, securing Ethiopian sovereignty.",
          forces_tr: "Etiyopya İmparatorluğu (II. Menelik & Taytu Betul) vs. İtalya Krallığı Sömürge Ordusu",
          forces_en: "Ethiopian Empire (Menelik II & Empress Taytu) vs. Kingdom of Italy",
          outcome_tr: "Etiyopya'nın Sömürgeleştirilemeyen Bağımsız Afrika Devleti Olarak Kalması",
          outcome_en: "Preservation of Ethiopian Independence & Pan-African Symbol"
        }
      ]
    };

    window.__ATLAS_EXTRA_DATA__.CITY_LANDMARK_GALLERIES = {
      bursa: [
        {
          title_tr: "1. Bursa Ulu Cami & 20 Kubbesi",
          title_en: "1. Grand Mosque of Bursa (Ulu Cami)",
          caption_tr: "Yıldırım Bayezid tarafından Niğbolu Zaferi şükranı olarak 1399'da yaptırılan 20 kubbeli şaheser ve iç şadırvan.",
          caption_en: "Commissioned by Sultan Bayezid I in 1399 after the Battle of Nicopolis, featuring 20 monumental domes and an indoor ablution fountain.",
          wikiQuery: "Bursa Ulu Camii",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Tarihi Koza Han (İpek Yolu Kervansarayı)",
          title_en: "2. Historic Koza Han Silk Caravanserai",
          caption_tr: "1491 yılında II. Bayezid tarafından inşa ettirilen, Doğu ile Batı ipek ticaretinin kalbi tarihi Koza Han.",
          caption_en: "Constructed in 1491 by Sultan Bayezid II, Koza Han served for centuries as the epicenter of global silk trading.",
          wikiQuery: "Koza Han",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Yeşil Türbe & Çelebi Mehmed Külliyesi",
          title_en: "3. Green Tomb & Sultan Mehmed I Complex",
          caption_tr: "Osmanlı'nın ikinci kurucusu kabul edilen Çelebi Mehmed'in turkuaz çinilerle bezeli anıt türbesi.",
          caption_en: "The turquoise tile-clad mausoleum of Sultan Mehmed I, architecturally defining the early Ottoman classical aesthetic.",
          wikiQuery: "Yeşil Türbe",
          img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      edirne: [
        {
          title_tr: "1. Mimar Sinan'ın Ustalık Eseri Selimiye Camii",
          title_en: "1. Selimiye Mosque – Mimar Sinan's Masterpiece",
          caption_tr: "Mimar Sinan'ın 80 yaşında inşa ettiği, UNESCO Dünya Mirası listesindeki tek kubbe mimarisinin zirvesi Selimiye.",
          caption_en: "Masterpiece of classical Ottoman architecture designed by Mimar Sinan at age 80, celebrated on UNESCO's World Heritage list.",
          wikiQuery: "Selimiye Camii",
          img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. II. Bayezid Külliyesi Sağlık Müzesi (Darüşşifa)",
          title_en: "2. Bayezid II Complex Health Museum (Dar al-Shifa)",
          caption_tr: "Orta çağda su sesi, musiki ve çiçek kokularıyla akıl hastalıklarını tedavi eden tıp tarihi şaheseri.",
          caption_en: "Historic medical complex where patients were healed through music, the sound of flowing water, and aromatics.",
          wikiQuery: "Sultan II. Bayezid Külliyesi Sağlık Müzesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Tarihi Meriç Köprüsü & Edirne Sarayı (Saray-ı Cedid)",
          title_en: "3. Historic Meric Bridge & Edirne Palace",
          caption_tr: "Meriç Nehri üzerindeki taş kemerli Mecidiye Köprüsü ve Fatih'in fethi planladığı Edirne Sarayı.",
          caption_en: "Monumental stone bridge spanning the Maritsa River and the ruins of the Edirne New Imperial Palace.",
          wikiQuery: "Meriç Köprüsü",
          img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      mardin: [
        {
          title_tr: "1. Kasımiye Medresesi & Mezopotamya Manzarası",
          title_en: "1. Kasimiye Madrasa & Mesopotamian Panorama",
          caption_tr: "Artuklu taş işçiliğinin şaheseri; hayat havuzu ve Mezopotamya ovasına açılan eyvan mimarisi.",
          caption_en: "Artuqid limestone masterpiece featuring the symbolic fountain of life and vistas over Mesopotamia.",
          wikiQuery: "Kasımiye Medresesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Deyrulzafaran Süryani Kadim Manastırı",
          title_en: "2. Deyrulzafaran Syriac Orthodox Monastery",
          caption_tr: "5. yüzyıldan bu yana duaların yankılandığı, safran sarısı taşlarıyla ünlü kadim Süryani manastırı.",
          caption_en: "Ancient Syriac Orthodox monastic sanctuary founded in the 5th century, named after saffron-colored stonework.",
          wikiQuery: "Deyrülzafarân Manastırı",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Dara Antik Kenti Devasa Su Sarnıçları",
          title_en: "3. Ancient Dara Roman Subterranean Cisterns",
          caption_tr: "Roma İmparatoru Anastasius tarafından kurulan garnizon şehri ve kayalara oyulmuş zindan sarnıçları.",
          caption_en: "Monumental underground Roman cisterns and rock-cut necropolis carved into limestone on the Persian frontier.",
          wikiQuery: "Dara (antik kent)",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      sanliurfa: [
        {
          title_tr: "1. Göbeklitepe T Biçimli Megalitik Dikilitaşları",
          title_en: "1. Megalithic T-Pillars of Göbeklitepe",
          caption_tr: "12.000 yıllık geçmişiyle dünya tarihinin en eski anıtsal tapınağı; hayvan kabartmalı T sütunlar.",
          caption_en: "12,000-year-old megalithic ceremonial sanctuary with zoomorphic relief carvings, rewriting human prehistory.",
          wikiQuery: "Göbeklitepe",
          img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Tarihi Balıklıgöl (Halil-ür Rahman)",
          title_en: "2. Sacred Pool of Abraham (Balıklıgöl)",
          caption_tr: "Hz. İbrahim'in ateşe atıldığı yer olduğuna inanılan kutsal havuz, asırlık balıkları ve Rıdvaniye Camii.",
          caption_en: "Legendary sacred pool venerated across Abrahamic faiths, bordered by historic stone arcades and minarets.",
          wikiQuery: "Balıklıgöl",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Harran Kümbet Evleri & Dünyanın İlk İslam Üniversitesi",
          title_en: "3. Harran Beehive Houses & Ancient University",
          caption_tr: "Konik kubbeli kerpiç evleri ve Sabii astronom El-Bettânî'nin ders verdiği antik Harran Üniversitesi.",
          caption_en: "Conical mud-brick beehive houses and ruins of ancient Harran academy where early astronomy flourished.",
          wikiQuery: "Harran",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      trabzon: [
        {
          title_tr: "1. Sümela Manastırı (Mela Dağı Kaya Tapınağı)",
          title_en: "1. Sümela Cliffside Monastery (Mount Mela)",
          caption_tr: "Karadağ'ın 300 metre yüksekliğindeki dik yamacına 4. yüzyılda kurulan efsanevi kaya manastırı.",
          caption_en: "Spectacular 4th-century monastery clinging to a sheer precipice in the Altındere National Park.",
          wikiQuery: "Sümela Manastırı",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Trabzon Ayasofyası & Kule Freskleri",
          title_en: "2. Trabzon Hagia Sophia & Bell Tower Frescoes",
          caption_tr: "13. yüzyıl Komnenos mimarisi başyapıtı; kabartmalı güney kapısı ve tarihi freskleri.",
          caption_en: "Exquisite 13th-century Byzantine architecture with sculpted stonework and vibrant biblical frescoes.",
          wikiQuery: "Ayasofya (Trabzon)",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Ortahisar Zağnos Vadisi & Trabzon Kalesi",
          title_en: "3. Ortahisar Zagnos Valley & Trabzon Castle",
          caption_tr: "Fatih Sultan Mehmed'in 1461'de fethettiği tarihi kara surları ve yeşil Zağnos vadisi.",
          caption_en: "Historic Byzantine and Ottoman defensive ramparts overlooking the lush coastal valleys of Trebizond.",
          wikiQuery: "Trabzon Kalesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      granada: [
        {
          title_tr: "1. Elhamra Sarayı & Cennetü'l-Arif Bahçeleri",
          title_en: "1. Alhambra Palace & Generalife Gardens",
          caption_tr: "Endülüs Nasri Devleti'nin kırmızı sarayı; dantel mukarnasları ve fıskiyeli su bahçeleri.",
          caption_en: "Moorish palace complex renowned for intricate stucco stalactites, courtyards, and cypress avenues.",
          wikiQuery: "Elhamra Sarayı",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Elhamra Aslanlı Avlu (Patio de los Leones)",
          title_en: "2. Court of the Lions (Patio de los Leones)",
          caption_tr: "124 mermer sütunla çevrili, ortasında 12 mermer aslanın taşıdığı su çeşmesiyle İslam sanatının zirvesi.",
          caption_en: "The heart of the Nasrid palace, surrounded by 124 carved alabaster columns encircling the iconic lion fountain.",
          wikiQuery: "Elhamra Sarayı",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Kurtuba Ulu Camii (Mezquita) Kemerleri",
          title_en: "3. Great Mosque of Cordoba (Mezquita)",
          caption_tr: "850 sütunlu at nalı kemerleri altında İbn Rüşd'ün Aristo felsefesini kaleme aldığı Endülüs medeniyet merkezi.",
          caption_en: "Endless forest of jasper and onyx double arches where Averroes interpreted ancient philosophy.",
          wikiQuery: "Kurtuba Camii",
          img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      venedik: [
        {
          title_tr: "1. San Marco Meydanı & Bazilikası",
          title_en: "1. St. Mark's Square & Byzantine Basilica",
          caption_tr: "Napoléon'un 'Avrupa'nın en güzel salonu' dediği San Marco Meydanı ve altın yaldızlı mozaikler.",
          caption_en: "Venice's principal public square and glittering Byzantine cathedral adorned with golden mosaics.",
          wikiQuery: "San Marco Meydanı",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Büyük Kanal (Canal Grande) & Rialto Köprüsü",
          title_en: "2. Grand Canal & Iconic Rialto Bridge",
          caption_tr: "Shakespeare'in 'Venedik Taciri'ne sahne olan tarihi Rialto Köprüsü ve lagün su yolları.",
          caption_en: "The historic stone arch bridge immortalized in Shakespeare's Merchant of Venice crossing the Grand Canal.",
          wikiQuery: "Rialto Köprüsü",
          img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Dükler Sarayı (Palazzo Ducale) & Ahlar Köprüsü",
          title_en: "3. Doge's Palace & Bridge of Sighs",
          caption_tr: "Venedik Cumhuriyeti'nin 1000 yıllık yönetim merkezi, Gotik sütunlu Dükler Sarayı.",
          caption_en: "The monumental Venetian Gothic palace that served as the seat of the Doges and republican senate.",
          wikiQuery: "Dükler Sarayı",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        }
      ],

      canakkale: [
        {
          title_tr: "1. Çanakkale Şehitler Abidesi & Conkbayırı Savaş Alanı",
          title_en: "1. Çanakkale Martyrs' Memorial & Chunuk Bair Battlefield",
          caption_tr: "Gelibolu Yarımadası'nda 1915 Çanakkale Deniz ve Kara Savaşlarının yaşandığı tarihi cephe hattı ve Şehitler Abidesi.",
          caption_en: "Historic Gallipoli battlefield of 1915 and the monumental Çanakkale Martyrs' Memorial overlooking the Dardanelles.",
          wikiQuery: "Çanakkale Şehitler Abidesi",
          img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Kilitbahir Kalesi & Nusret Mayın Gemisi Boğaz Hattı",
          title_en: "2. Kilitbahir Fortress & Nusret Minelayer Strait Line",
          caption_tr: "Fatih Sultan Mehmed tarafından Çanakkale Boğazı'nın en dar noktasına inşa ettirilen yonca planlı Kilitbahir Kalesi ve 18 Mart Boğaz savunması.",
          caption_en: "Heart-shaped Kilitbahir Fortress built by Sultan Mehmed II at the narrowest point of the Dardanelles Strait.",
          wikiQuery: "Kilitbahir Kalesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Troya Antik Kenti & 57. Alay Şehitliği",
          title_en: "3. Ancient City of Troy & 57th Infantry Regiment Memorial",
          caption_tr: "Homeros'un İlyada destanına konu olan 5.000 yıllık Troya Antik Kenti surları ve Gelibolu 57. Alay Şehitliği.",
          caption_en: "The 5,000-year-old walls of Homeric Troy and the 57th Infantry Regiment Memorial on the Gallipoli Peninsula.",
          wikiQuery: "Troya",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      istanbul: [
        {
          title_tr: "1. Ayasofya-i Kebir & Tarihi Yarımada",
          title_en: "1. Hagia Sophia & Historic Peninsula",
          caption_tr: "1453 İstanbul'un Fethi'nin sembolü, dünya mimarlık tarihinin başyapıtı Ayasofya-i Kebir Cami-i Şerifi.",
          caption_en: "Architectural masterpiece Hagia Sophia at the heart of Istanbul's Historic Peninsula.",
          wikiQuery: "Ayasofya",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Topkapı Sarayı, Rumeli Hisarı & 1453 Kuşatma Surları",
          title_en: "2. Topkapı Palace, Rumeli Fortress & 1453 Siege Walls",
          caption_tr: "Osmanlı İmparatorluğu'nun 400 yıl yönetim merkezi olan Topkapı Sarayı, Boğazkesen Rumeli Hisarı ve tarihi kara surları.",
          caption_en: "Topkapı Palace, Rumeli Fortress on the Bosphorus, and the historic Theodosian land walls.",
          wikiQuery: "Rumeli Hisarı",
          img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Galata Kulesi, Süleymaniye & Haliç Panoraması",
          title_en: "3. Galata Tower, Süleymaniye Mosque & Golden Horn",
          caption_tr: "Mimar Sinan'ın kalfalık eseri Süleymaniye Külliyesi, Ceneviz mirası Galata Kulesi ve Haliç su yolu.",
          caption_en: "Mimar Sinan's Süleymaniye Mosque, medieval Galata Tower, and the Golden Horn.",
          wikiQuery: "Galata Kulesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      ankara: [
        {
          title_tr: "1. Anıtkabir & Cumhuriyetin Kalbi",
          title_en: "1. Anıtkabir – Mausoleum of Mustafa Kemal Atatürk",
          caption_tr: "Türkiye Cumhuriyeti'nin kurucusu Gazi Mustafa Kemal Atatürk'ün ebedi istirahatgahı Anıtkabir ve Aslanlı Yol.",
          caption_en: "Anıtkabir, the monumental mausoleum of Mustafa Kemal Atatürk, founder of the Republic of Türkiye.",
          wikiQuery: "Anıtkabir",
          img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. I. TBMM Binası (Kurtuluş Savaşı Müzesi)",
          title_en: "2. First Grand National Assembly Building (War of Independence Museum)",
          caption_tr: "23 Nisan 1920'de açılan ve Sakarya ile Büyük Taarruz kararlarının alındığı Birinci Türkiye Büyük Millet Meclisi binası.",
          caption_en: "The historic First Parliament building in Ulus where the Turkish War of Independence was directed.",
          wikiQuery: "Kurtuluş Savaşı Müzesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Polatlı Duatepe (Sakarya Cephesi) & Ankara Kalesi",
          title_en: "3. Duatepe Sakarya Battlefield Memorial & Ankara Castle",
          caption_tr: "Sakarya Meydan Muharebesi'nin dönüm noktası olan Polatlı Duatepe Anıtı ve binlerce yıllık tarihi Ankara Kalesi.",
          caption_en: "Duatepe Battlefield Memorial of the Battle of Sakarya and historic Ankara Castle.",
          wikiQuery: "Ankara Kalesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      samsun: [
        {
          title_tr: "1. Bandırma Vapuru & Milli Mücadele Açıkhava Müzesi",
          title_en: "1. Bandırma Ferry & National Struggle Museum",
          caption_tr: "Mustafa Kemal Paşa ve silah arkadaşlarını 19 Mayıs 1919'da Samsun'a ulaştıran tarihi Bandırma Vapuru.",
          caption_en: "Historic Bandırma Ferry that carried Mustafa Kemal Pasha to Samsun on May 19, 1919.",
          wikiQuery: "Bandırma Vapuru",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Samsun Onur Anıtı (Atatürk Anıtı) & İlkadım",
          title_en: "2. Samsun Monument of Honor (Heinrich Krippel Monument)",
          caption_tr: "Avusturyalı heykeltıraş Heinrich Krippel tarafından yapılan ve Kurtuluş Savaşı'nın başlangıcını simgeleyen Onur Anıtı.",
          caption_en: "Iconic equestrian Monument of Honor in Samsun symbolizing the birth of the National Struggle.",
          wikiQuery: "Onur Anıtı",
          img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Tütün İskelesi, Kurtuluş Yolu & Gazi Müzesi",
          title_en: "3. Tütün Pier, Liberation Road & Gazi Museum",
          caption_tr: "19 Mayıs 1919'da ilk adımın atıldığı Tütün İskelesi ve Mustafa Kemal Paşa'nın karargah olarak kullandığı Gazi Müzesi (Mıntıka Palas).",
          caption_en: "Tütün Pier where the first step of liberation was taken and the historic Gazi Museum.",
          wikiQuery: "Gazi Müzesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      amasya: [
        {
          title_tr: "1. Amasya Saraydüzü Kışlası (Genelge Karargahı)",
          title_en: "1. Saraydüzü Barracks (Amasya Circular Headquarters)",
          caption_tr: "22 Haziran 1919'da 'Milletin istiklalini yine milletin azim ve kararı kurtaracaktır' maddesinin kaleme alındığı Saraydüzü Kışlası.",
          caption_en: "Saraydüzü Barracks where the historic Amasya Circular of June 22, 1919 was drafted.",
          wikiQuery: "Amasya Genelgesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Harşena Kalesi & Pontus Kral Kaya Mezarları",
          title_en: "2. Harşena Castle & Tombs of the Kings of Pontus",
          caption_tr: "Yeşilırmak vadisine hakim sarp kayalıklara oyulmuş antik Kral Kaya Mezarları ve UNESCO mirası Harşena Kalesi.",
          caption_en: "Rock-cut Tombs of the Kings of Pontus and Harşena Fortress overlooking the Yeşilırmak River.",
          wikiQuery: "Kral Kaya Mezarları",
          img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. II. Bayezid Külliyesi & Yalıboyu Konakları",
          title_en: "3. Sultan Bayezid II Complex & Yalıboyu Ottoman Houses",
          caption_tr: "Şehzadeler şehri Amasya'da Yeşilırmak kıyısına dizilen tarihi Yalıboyu konakları ve 1486 tarihli II. Bayezid Külliyesi.",
          caption_en: "Historic Ottoman riverside mansions of Yalıboyu and the 1486 Sultan Bayezid II Complex.",
          wikiQuery: "Amasya",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      erzurum: [
        {
          title_tr: "1. Erzurum Kongre Binası & Aziziye Tabyaları",
          title_en: "1. Erzurum Congress Building & Aziziye Redoubts",
          caption_tr: "23 Temmuz 1919'da Misak-ı Milli kararlarının alındığı Erzurum Kongre Binası ve Nene Hatun destanının yazıldığı Aziziye Tabyaları.",
          caption_en: "Historic Erzurum Congress Building (1919) and the Aziziye Redoubts defended by the people of Erzurum.",
          wikiQuery: "Erzurum Kongresi",
          img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Çifte Minareli Medrese & Yakutiye Medresesi",
          title_en: "2. Twin Minaret Madrasa (Çifte Minareli Medrese) & Yakutiye",
          caption_tr: "Anadolu Selçuklu taş işçiliğinin zirvesi olan 13. yüzyıl Çifte Minareli Medrese ve Yakutiye Medresesi.",
          caption_en: "13th-century Anatolian Seljuk architectural jewel Çifte Minareli Medrese in Erzurum.",
          wikiQuery: "Çifte Minareli Medrese",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Erzurum Kalesi, Üç Kümbetler & Ulu Cami",
          title_en: "3. Erzurum Citadel, Three Tombs (Üç Kümbetler) & Grand Mosque",
          caption_tr: "Saltuklu ve Selçuklu mirası Üç Kümbetler, tarihi Erzurum İç Kalesi ve Saat Kulesi.",
          caption_en: "Historic Erzurum Citadel, the Saltukid Three Tombs (Üç Kümbetler), and the Grand Mosque.",
          wikiQuery: "Erzurum Kalesi",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      sivas: [
        {
          title_tr: "1. Sivas Kongre Binası (Atatürk ve Etnografya Müzesi)",
          title_en: "1. Sivas Congress Building (Atatürk & Ethnography Museum)",
          caption_tr: "4 Eylül 1919 Sivas Kongresi'ne ve Milli Mücadele karargahına 108 gün ev sahipliği yapan tarihi Sivas Lisesi / Kongre Binası.",
          caption_en: "Historic Sivas Congress Building where national resistance societies were united in September 1919.",
          wikiQuery: "Sivas Kongresi",
          img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Divriği Ulu Camii ve Darüşşifası (UNESCO Mirası)",
          title_en: "2. Great Mosque and Hospital of Divriği (UNESCO World Heritage)",
          caption_tr: "1228 yılında Mengücekliler döneminde inşa edilen ve taş bezemeleriyle 'Anadolu'nun Elhamrası' sayılan UNESCO Dünya Mirası.",
          caption_en: "1228 Mengujekid masterpiece Divriği Great Mosque and Hospital, a UNESCO World Heritage Site.",
          wikiQuery: "Divriği Ulu Camii ve Darüşşifası",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Gök Medrese, Çifte Minareli Medrese & Âşık Veysel Müzesi",
          title_en: "3. Gök Medrese, Buruciye & Âşık Veysel Museum (Sivrialan)",
          caption_tr: "1271 tarihli Selçuklu şaheseri Gök Medrese ve Sivrialan köyündeki Âşık Veysel Müzesi.",
          caption_en: "1271 Seljuk Gök Medrese in Sivas and the Âşık Veysel Museum in Sivrialan.",
          wikiQuery: "Gök Medrese (Sivas)",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      konya: [
        {
          title_tr: "1. Mevlânâ Müzesi ve Kubbe-i Hadra (Yeşil Kubbe)",
          title_en: "1. Mevlana Museum & Kubbe-i Hadra (Green Dome)",
          caption_tr: "Mevlânâ Celâleddîn-i Rûmî'nin türbesinin yer aldığı Kubbe-i Hadra ve Mevlevî dergâhı.",
          caption_en: "Mevlana Museum and the turquoise Green Dome (Kubbe-i Hadra) in Konya.",
          wikiQuery: "Mevlana Müzesi",
          img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. Karatay Medresesi, İnce Minareli Medrese & Alaeddin Tepesi",
          title_en: "2. Karatay Madrasa, Ince Minaret & Alaeddin Mosque",
          caption_tr: "Türkiye Selçuklu Devleti'nin başkenti Konya'da yükselen 13. yüzyıl Karatay ve İnce Minareli medreseleri.",
          caption_en: "13th-century Seljuk architectural landmarks Karatay Madrasa and Ince Minaret Madrasa.",
          wikiQuery: "Karatay Medresesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. Çatalhöyük Neolitik Kenti (UNESCO Dünya Mirası)",
          title_en: "3. Çatalhöyük Neolithic Settlement (UNESCO World Heritage)",
          caption_tr: "İnsanlık tarihinin bilinen en eski yerleşim ve ilk kentleşme merkezlerinden 9.000 yıllık Çatalhöyük.",
          caption_en: "9,000-year-old Neolithic proto-city of Çatalhöyük on the Konya Plain.",
          wikiQuery: "Çatalhöyük",
          img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      troya: [
        {
          title_tr: "1. 🏛️ Truva Antik Kenti Arkeolojik Katmanları & Hisarlık",
          title_en: "1. 🏛️ Archaeological Layers of Troy & Hisarlık Mound",
          caption_tr: "5.000 yıllık dokuz yerleşim katmanına sahip UNESCO mirası antik Troya surları.",
          caption_en: "The ancient UNESCO-listed stone fortification walls spanning nine historic layers.",
          wikiQuery: "Truva",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🐎 Sembolik Truva Atı Anıtı & Çanakkale Boğazı",
          title_en: "2. 🐎 Iconic Trojan Horse Monument & Dardanelles Shore",
          caption_tr: "Homeros'un İlyada destanındaki kurnaz stratejiyi simgeleyen anıtsal tahta at heykeli.",
          caption_en: "Monumental wooden horse sculpture commemorating Homer's epic strategy in the Iliad.",
          wikiQuery: "Truva Atı",
          img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏺 Troya Müzesi (Avrupa Yılın Müzesi Özel Ödülü)",
          title_en: "3. 🏺 Troy Museum (European Museum of the Year Award Winner)",
          caption_tr: "Hisarlık girişinde yükselen, paslanmış çelik kaplamalı mimarisiyle ödüllü çağdaş arkeoloji müzesi.",
          caption_en: "Award-winning contemporary museum housing artifacts excavated across the Troad plain.",
          wikiQuery: "Troya Müzesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      prag: [
        {
          title_tr: "1. 🌉 Karl Köprüsü & Vltava Nehri (Charles Bridge)",
          title_en: "1. 🌉 Charles Bridge & Vltava River Silhouette",
          caption_tr: "14. yüzyılda IV. Karl tarafından yaptırılan, barok aziz heykelleriyle süslü gotik köprü.",
          caption_en: "14th-century gothic stone bridge adorned with 30 baroque statues of venerated saints.",
          wikiQuery: "Karl Köprüsü",
          img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 Prag Kalesi & Aziz Vitus Katedrali",
          title_en: "2. 🏰 Prague Castle & St. Vitus Gothic Cathedral",
          caption_tr: "Dünyanın en büyük antik kale kompleksi ve Bohemya krallarının taç giydiği gotik katedral.",
          caption_en: "The historic seat of Bohemian kings and the soaring gothic spires of St. Vitus Cathedral.",
          wikiQuery: "Prag Kalesi",
          img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. ⏰ Eski Kent Meydanı & Astronomik Saat Kulesi (Orloj)",
          title_en: "3. ⏰ Old Town Square & Medieval Astronomical Clock (Orloj)",
          caption_tr: "1410 yapımı dünyanın çalışan en eski astronomik saati ve Kafka'nın gençlik sokakları.",
          caption_en: "The 1410 mechanical marvel Orloj and the historic cobblestone alleys walked by Franz Kafka.",
          wikiQuery: "Prag Astronomik Saati",
          img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      krakow: [
        {
          title_tr: "1. 🏰 Wawel Kraliyet Kalesi & Katedrali (Vistula Nehri)",
          title_en: "1. 🏰 Wawel Royal Castle & Cathedral on the Vistula",
          caption_tr: "Polonya krallarının ikametgahı ve Rönesans avlusuyla anıtsal Wawel Kalesi tepesi.",
          caption_en: "Historic seat of Polish monarchs perched high on the limestone bluffs above the Vistula.",
          wikiQuery: "Wawel Kalesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏛️ Rynek Główny (Tarihi Pazar Meydanı & Sukiennice)",
          title_en: "2. 🏛️ Rynek Główny (Grand Market Square & Sukiennice Cloth Hall)",
          caption_tr: "Avrupa'nın en büyük Ortaçağ kent meydanı ve ortasındaki Gotik Kumaş Hali (Sukiennice).",
          caption_en: "Europe's largest medieval town square centered around the magnificent Renaissance Cloth Hall.",
          wikiQuery: "Krakow Ana Meydanı",
          img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🎓 Jagiellon Üniversitesi Collegium Maius (Kopernik Salonu)",
          title_en: "3. 🎓 Jagiellonian University Collegium Maius & Copernicus Hall",
          caption_tr: "1364 yılında kurulan ve Kopernik'in güneş merkezli evren araçlarının korunduğu gotik avlu.",
          caption_en: "Late-gothic quadrangle housing astronomical instruments used by Nicolaus Copernicus.",
          wikiQuery: "Jagiellon Üniversitesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      kurtuba: [
        {
          title_tr: "1. 🕌 Kurtuba Ulu Camii (La Mezquita - Çift Kemer Ormanı)",
          title_en: "1. 🕌 The Great Mosque of Cordoba (La Mezquita Arcaded Forest)",
          caption_tr: "850 kırmızı-beyaz çift kemerli sütunuyla İslam mimarisinin en eşsiz şaheseri.",
          caption_en: "The breathtaking 850-column hypostyle hall with two-tiered red and white jasper arches.",
          wikiQuery: "Kurtuba Camii",
          img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🌉 Tarihi Roma Köprüsü & Guadalquivir Nehri",
          title_en: "2. 🌉 Historic Roman Bridge across the Guadalquivir",
          caption_tr: "M.Ö. 1. yüzyılda inşa edilen, Calahorra Kulesi'ne bağlanan 16 kemerli taş köprü.",
          caption_en: "16-arch Roman bridge anchored by the Calahorra Tower guarding the entrance to Cordoba.",
          wikiQuery: "Kurtuba Roma Köprüsü",
          img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 👑 Medinetü'z-Zehra Saray Şehri (UNESCO Dünya Mirası)",
          title_en: "3. 👑 Madinat al-Zahra Caliphal Palace City (UNESCO Heritage)",
          caption_tr: "III. Abdurrahman'ın 10. yüzyılda inşa ettirdiği saraylar, bahçeler ve mermer salonlar kompleksi.",
          caption_en: "10th-century palatial city constructed by Caliph Abd al-Rahman III at the Sierra Morena foot.",
          wikiQuery: "Medinetü'z-Zehra",
          img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      diyarbakir: [
        {
          title_tr: "1. 🏰 UNESCO Tarihi Diyarbakır Surları & Dağ Kapı",
          title_en: "1. 🏰 UNESCO Basalt Fortress Walls & Dağ Gate",
          caption_tr: "Çin Seddi'nden sonra dünyanın en uzun ve en sağlam kesintisiz taş savunma surları.",
          caption_en: "The 5.5-kilometer-long black basalt fortification walls defending ancient Amida.",
          wikiQuery: "Diyarbakır Kalesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🕌 Diyarbakır Tarihi Ulu Camii (5. Harem-i Şerif)",
          title_en: "2. 🕌 Historic Grand Mosque of Diyarbakir (5th Holy Site)",
          caption_tr: "Anadolu'nun en eski camisi sayılan, Selçuklu kitabeleri ve güneş saatiyle bezeli mabet.",
          caption_en: "One of the oldest mosques in Anatolia, featuring medieval celestial sundials and Seljuk inscriptions.",
          wikiQuery: "Diyarbakır Ulu Camii",
          img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🌉 Tarihi On Gözlü Köprü & Dicle Hevsel Bahçeleri",
          title_en: "3. 🌉 Historic Ten-Eyed Bridge & Dicle Hevsel Gardens",
          caption_tr: "Dicle Nehri üzerinde 1065 yapımı taş köprü ve UNESCO tescilli bereketli Hevsel Bahçeleri.",
          caption_en: "1065 stone bridge over the Tigris River flanked by the ancient fertile Hevsel Gardens.",
          wikiQuery: "Dicle Köprüsü",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      isfahan: [
        {
          title_tr: "1. 🕌 Nakş-ı Cihan Meydanı & Şah Camii (İmam Camii)",
          title_en: "1. 🕌 Naqsh-e Jahan Square & The Royal Shah Mosque",
          caption_tr: "Dünyanın en geniş tarihi meydanlarından biri ve turkuaz çinili anıtsal Şah Camii kubbesi.",
          caption_en: "UNESCO monumental public plaza anchored by the magnificent azure-tiled Shah Mosque.",
          wikiQuery: "Nakş-ı Cihan Meydanı",
          img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏛️ Âlî Kapı Sarayı & Şeyh Lütfullah Camii",
          title_en: "2. 🏛️ Ali Qapu Royal Palace & Sheikh Lotfollah Mosque",
          caption_tr: "Müzik odasının akustik nişleriyle ünlü Safevi sarayı ve minaresiz zarif mabet.",
          caption_en: "Safavid imperial grand reception palace famed for acoustic music rooms and dome motifs.",
          wikiQuery: "Ali Kapı",
          img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🌉 Si-o-se-pol (33 Gözlü Köprü & Zayende Nehri)",
          title_en: "3. 🌉 Si-o-se-pol (Bridge of Thirty-Three Arches)",
          caption_tr: "1602 yapımı Şah Abbas dönemi taş köprüsü ve geleneksel çayhaneler mekanı.",
          caption_en: "Classic Safavid multi-tiered arch stone bridge spanning the Zayandeh River in Isfahan.",
          wikiQuery: "Si-o-se Pol",
          img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      belh: [
        {
          title_tr: "1. 🕌 Nuh Günbed Camii (Hadji Piyada - En Eski İslam Yapısı)",
          title_en: "1. 🕌 Haji Piyada Mosque (Noh Gonbad - 9th-Century Marvel)",
          caption_tr: "M.S. 9. yüzyıldan günümüze ulaşan, Samani dönemi kabartmalı dokuz kubbeli anıt mabet.",
          caption_en: "9th-century Samanid stucco architecture, revered as Afghanistan's oldest Islamic building.",
          wikiQuery: "Balkh",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 Belh Antik Surları & Bala Hisar Kalesi",
          title_en: "2. 🏰 Ancient Citadel Walls of Balkh & Bala Hisar",
          caption_tr: "Büyük İskender'in Baktriya başkenti yaptığı döneme uzanan devasa toprak savunma surları.",
          caption_en: "Massive mudbrick ramparts dating back to the Hellenistic Bactrian kingdom of Alexander the Great.",
          wikiQuery: "Bactria",
          img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 📜 Mevlana Bahaeddin Veled Medresesi Kalıntıları",
          title_en: "3. 📜 Bahaeddin Veled Sufi Lodge & Rumi's Birth Grounds",
          caption_tr: "Mevlana Celaleddin Rumi'nin çocukluğunun geçtiği Horasan tasavvuf medresesi sahası.",
          caption_en: "Historic grounds of the theological academy where Rumi studied before the westward migration.",
          wikiQuery: "Mevlana",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      tokyo: [
        {
          title_tr: "1. ⛩️ Sensō-ji Tapınağı & Asakusa Kaminarimon Kapısı",
          title_en: "1. ⛩️ Senso-ji Temple & Historic Kaminarimon Gate",
          caption_tr: "M.S. 645 yapımı Tokyo'nun en eski Budist tapınağı ve devasa kırmızı feneri.",
          caption_en: "Tokyo's oldest Buddhist temple founded in 645 AD, anchored by the iconic Thunder Gate lantern.",
          wikiQuery: "Sensō-ji",
          img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🌲 Meiji Jingu Tapınağı & Yoyogi Ruh Korusu",
          title_en: "2. 🌲 Meiji Jingu Shinto Shrine & Sacred Yoyogi Forest",
          caption_tr: "Meiji Restorasyonu imparatoruna adanmış, 100.000 ağaçlık huzurlu Şinto mabedi.",
          caption_en: "Monumental Shinto shrine surrounded by a 170-acre forest dedicated to Emperor Meiji.",
          wikiQuery: "Meiji Tapınağı",
          img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏯 Tokyo İmparatorluk Sarayı & Nijubashi Köprüsü",
          title_en: "3. 🏯 Tokyo Imperial Palace & Nijubashi Double Bridge",
          caption_tr: "Eski Edo Kalesi temelleri üzerinde yükselen, su hendekleriyle çevrili imparatorluk sarayı.",
          caption_en: "The primary residence of the Emperor of Japan built atop the historic Edo Castle grounds.",
          wikiQuery: "Tokyo İmparatorluk Sarayı",
          img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      iznik: [
        {
          title_tr: "1. 🏛️ İznik Ayasofya Camii (Orhan Camii)",
          title_en: "1. 🏛️ Hagia Sophia of Nicaea (Orhan Mosque)",
          caption_tr: "787 yılında 7. Ekümenik Konsil'in toplandığı, 1331'de Orhan Gazi tarafından camiye çevrilen tarihi bazilika.",
          caption_en: "Historic basilica where the 7th Ecumenical Council convened in 787 AD, converted into a mosque by Orhan Gazi in 1331.",
          wikiQuery: "İznik Ayasofya Camii",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 İznik Lefke Kapısı & Antik Roma Surları",
          title_en: "2. 🏰 Lefke Gate & Ancient Roman Ramparts",
          caption_tr: "Göl kenarındaki kenti çepeçevre saran, 4.970 metre uzunluğunda 4 anıtsal kapılı Roma ve Selçuklu surları.",
          caption_en: "Magnificent 4,970-meter Roman and Seljuk fortifications featuring four monumental gates encirling historic Nicaea.",
          wikiQuery: "İznik Surları",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏺 Yeşil Cami & İznik Çini Sanatı Atölyeleri",
          title_en: "3. 🏺 Green Mosque & Historic Iznik Ceramic Kilns",
          caption_tr: "Çandarlı Halil Paşa yapımı firuze ve mor çinili minaresiyle erken Osmanlı mimarisinin başyapıtı.",
          caption_en: "Masterwork of early Ottoman architecture commissioned by Chandarli Halil Pasha, famed for its turquoise tiled minaret.",
          wikiQuery: "Yeşil Cami (İznik)",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      kars: [
        {
          title_tr: "1. 🕌 Ani Harabeleri & Tarihi Manuçehr Camii",
          title_en: "1. 🕌 UNESCO Ani Ruins & Historic Manuçehr Mosque",
          caption_tr: "1064 fethinin ardından inşa edilen Anadolu'daki ilk Türk camisi ve Arpaçay Kanyonu manzarası.",
          caption_en: "The first Turkish mosque built in Anatolia following the 1064 conquest, overlooking the stunning Arpaçay Gorge.",
          wikiQuery: "Menûçihr Camii",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 Tarihi Kars Kalesi & Kars Çayı Taş Köprüsü",
          title_en: "2. 🏰 Historic Kars Citadel & Ottoman Stone Bridge",
          caption_tr: "1153'te Melik İzzeddin tarafından inşa ettirilen, yüzyıllar boyu Kafkasya'nın kilidi olan sarp kale.",
          caption_en: "Perched dramatically above the Kars River, built in 1153 by Sultan Melik Izzeddin as the impregnable key to the Caucasus.",
          wikiQuery: "Kars Kalesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. ⛪ Ani Katedrali (Fethiye Camii) & Kümbet Camii",
          title_en: "3. ⛪ Cathedral of Ani (Fethiye Mosque) & Kümbet Mosque",
          caption_tr: "Mimar Trdat tarafından 1001'de tamamlanan, Alp Arslan'ın fethiyle camiye tahsis edilen anıtsal katedral.",
          caption_en: "Completed in 1001 by royal architect Trdat, elevated as Fethiye Mosque following Alp Arslan's epochal victory.",
          wikiQuery: "Ani Katedrali",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      kastamonu: [
        {
          title_tr: "1. 🕌 Mahmut Bey Camii (Kasaba Köyü - UNESCO Mirası)",
          title_en: "1. 🕌 Mahmut Bey Wooden Mosque (UNESCO World Heritage)",
          caption_tr: "1366 yapımı, tek bir metal çivi dahi kullanılmadan inşa edilen kündekari ahşap oymacılık şaheseri.",
          caption_en: "Built in 1366 without a single metal nail, a breathtaking UNESCO masterwork of interlocking Anatolian woodwork.",
          wikiQuery: "Mahmut Bey Camii",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 Tarihi Kastamonu Kalesi & Saat Kulesi",
          title_en: "2. 🏰 Kastamonu Citadel & Historic Clock Tower",
          caption_tr: "Komnenoslar temelleri üzerinde yükselen Candaroğulları kalesi ve kente tepeden bakan 1885 tarihli saat kulesi.",
          caption_en: "Byzantine-Candarid stronghold reigning over the valley, flanked by the iconic 1885 hilltop clock tower.",
          wikiQuery: "Kastamonu Kalesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 📜 Nasrullah Camii & Şeyh Şaban-ı Veli Külliyesi",
          title_en: "3. 📜 Nasrullah Mosque & Sheikh Shaban-i Veli Complex",
          caption_tr: "Milli Mücadele'de Mehmet Akif Ersoy'un Sebilürreşad vaazlarını verdiği tarihi cami ve şadırvan.",
          caption_en: "Where national poet Mehmet Akif rallied Anatolian defenders during the War of Independence with impassioned sermons.",
          wikiQuery: "Nasrullah Camii",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      kutahya: [
        {
          title_tr: "1. 🏛️ Aizanoi Antik Kenti & Zeus Tapınağı",
          title_en: "1. 🏛️ Ancient City of Aizanoi & Temple of Zeus",
          caption_tr: "Dünyanın en iyi korunmuş Zeus Tapınağı ve tarihin bilinen ilk borsa yapısına sahip UNESCO adayı antik kent.",
          caption_en: "Home to the world's best-preserved classical Temple of Zeus and the earliest known commercial trading exchange.",
          wikiQuery: "Aizanoi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏺 Kütahya Çini Müzesi & Germiyan Konakları",
          title_en: "2. 🏺 Kutahya Tile Museum & Germiyan Heritage Mansions",
          caption_tr: "1411 yapımı II. Yakup Bey Külliyesi imaretinde sergilenen paha biçilmez Osmanlı ve Germiyan çinileri.",
          caption_en: "Housed in the 1411 Yakup Bey complex, showcasing centuries of irreplaceable Germiyan and Ottoman ceramic masterpieces.",
          wikiQuery: "Kütahya Çini Müzesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🎖️ Dumlupınar Şehitliği & Zafer Anıtı",
          title_en: "3. 🎖️ Dumlupinar Memorial & National Victory Monument",
          caption_tr: "30 Ağustos 1922 Başkomutanlık Meydan Muharebesi şehitlerinin anısına Zafertepe sırtlarında yükselen abide.",
          caption_en: "Sacred national memorial honoring the fallen heroes of the decisive Great Offensive of August 30, 1922.",
          wikiQuery: "Dumlupınar Şehitliği",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      maras: [
        {
          title_tr: "1. 🏰 Tarihi Kahramanmaraş Kalesi & Kurtuluş Meydanı",
          title_en: "1. 🏰 Kahramanmaras Citadel & Independence Square",
          caption_tr: "Hititlerden günümüze ulaşan, 1919'da bayrak olayıyla kurtuluş meşalesinin alevlendiği kadim kale.",
          caption_en: "Ancient citadel originating in Hittite times, where the dramatic 1919 Flag Incident sparked the liberation movement.",
          wikiQuery: "Kahramanmaraş Kalesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 📚 Yedi Güzel Adam Edebiyat Müzesi (Tarihi Lise)",
          title_en: "2. 📚 Seven Beautiful Men Literature Museum (Historic High School)",
          caption_tr: "Zarifoğlu, Bayazıt ve Özdenören'in yetiştiği 1850'ler taş yapısı tarihi okulda Türk şiirinin canlandığı müze.",
          caption_en: "Preserved 1850s masonry high school where Cahit Zarifoglu and Erdem Bayazit forged the Seven Beautiful Men movement.",
          wikiQuery: "Yedi Güzel Adam",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🕌 Kahramanmaraş Ulu Camii & Taş Medrese",
          title_en: "3. 🕌 Grand Mosque of Maras & Tash Madrasah",
          caption_tr: "1496 yılında Dulkadiroğlu Beyi Alaüddevle Bozkurt Bey tarafından yaptırılan ahşap tavanlı anıtsal cami.",
          caption_en: "Monumental hypostyle wooden-ceiling mosque erected in 1496 by Dulkadirid ruler Bozkurt Bey.",
          wikiQuery: "Kahramanmaraş Ulu Camii",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      iskenderiye: [
        {
          title_tr: "1. 📚 Bibliotheca Alexandrina (Yeni İskenderiye Kütüphanesi)",
          title_en: "1. 📚 Bibliotheca Alexandrina (New Library of Alexandria)",
          caption_tr: "Antik kütüphanenin mirasçısı olarak deniz kıyısında inşa edilen, devasa granit duvarlı çağdaş kültür merkezi.",
          caption_en: "Magnificent contemporary cultural complex honoring the legendary ancient library with tilting disc design by the sea.",
          wikiQuery: "Bibliotheca Alexandrina",
          img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏰 Kayıtbay Kalesi (Antik Pharos Deniz Feneri Temelleri)",
          title_en: "2. 🏰 Citadel of Qaitbay (Site of Ancient Pharos Lighthouse)",
          caption_tr: "1477 yılında Memlük Sultanı Kayıtbay tarafından, Dünyanın Yedi Harikasından Pharos Feneri'nin taşlarıyla inşa edilen hisar.",
          caption_en: "15th-century defensive fortress constructed atop the foundations and fallen masonry of the legendary Pharos Lighthouse.",
          wikiQuery: "Kayıtbay Kalesi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏛️ Pompey Sütunu & Serapeum Kalıntıları",
          title_en: "3. 🏛️ Pompey's Pillar & Ancient Serapeum Sanctuary",
          caption_tr: "İmparator Diocletianus onuruna dikilen, 27 metre yüksekliğindeki monolitik kırmızı Asvan graniti sütun.",
          caption_en: "A monumental 27-meter monolithic Aswan red granite triumphal column towering above the ancient Serapeum acropolis.",
          wikiQuery: "Pompey Sütunu",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      siraz: [
        {
          title_tr: "1. 🌹 Hafıziye (Hafız-ı Şîrâzî Türbesi & Şiir Bahçesi)",
          title_en: "1. 🌹 Tomb of Hafez (Hafezieh & Poetic Gardens)",
          caption_tr: "Sekiz sütunlu mozaik kubbesi altında dünya şairlerinin ziyaretgahı olan Hâfız-ı Şîrâzî'nin ebedi istirahatgahı.",
          caption_en: "Iconic octagonal pavilion surrounded by aromatic cypress groves where seekers contemplate Hafez's immortal ghazals.",
          wikiQuery: "Hafıziye",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🕌 Nasîrü'l-Mülk Camii (Pembe Cami)",
          title_en: "2. 🕌 Nasir al-Mulk Mosque (The Pink Mosque)",
          caption_tr: "Sabah güneşinin vitray pencerelerden rengarenk Fars halılarına döküldüğü ışık ve renk mabedi.",
          caption_en: "Famed for its breathtaking stained-glass windows bathing kaleidoscopic Persian carpets in luminous morning light.",
          wikiQuery: "Nasîrü'l-Mülk Camii",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏛️ Persepolis (Taht-ı Cemşid Antik Sarayı)",
          title_en: "3. 🏛️ Persepolis (UNESCO Throne of Jamshid)",
          caption_tr: "Büyük Darius ve Kserkses tarafından kurulan, dev sütunları ve kabartmalarıyla Akamenid Pers İmparatorluğu'nun törensel payitahtı.",
          caption_en: "Ceremonial capital of the Achaemenid Empire founded by Darius the Great in 518 BC, featuring colossal Apadana reliefs.",
          wikiQuery: "Persepolis",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      buhara: [
        {
          title_tr: "1. 🕌 Poy-i Kalyan Külliyesi & Kalyan Minaresi",
          title_en: "1. 🕌 Po-i-Kalyan Ensemble & Kalyan Minaret",
          caption_tr: "1127 yılında Karahanlılar döneminde inşa edilen, 46 metre yüksekliğiyle Cengiz Han'ın bile kıyamadığı şaheser minare.",
          caption_en: "Soaring 46-meter brick minaret erected in 1127 by the Karakhanids, famously spared from destruction by Genghis Khan.",
          wikiQuery: "Kalyan Minaresi",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🏛️ Samanîler Türbesi (9. Yüzyıl Tuğla Şaheseri)",
          title_en: "2. 🏛️ Samanid Mausoleum (9th-Century Brick Masterwork)",
          caption_tr: "İslam mimarisinin günümüze ulaşan en eski anıt mezarlarından biri olan eşsiz geometrik pişmiş tuğla yapısı.",
          caption_en: "One of the earliest surviving monuments of Islamic funerary architecture, built with exquisite interlocking baked bricks.",
          wikiQuery: "Sâmânîler Türbesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏰 Ark Kalesi (Buhara Emirleri Sarayı)",
          title_en: "3. 🏰 Ark of Bukhara (Citadel of the Emirs)",
          caption_tr: "5. yüzyıldan itibaren Buhara yöneticilerine saray olan, masif dış surlarıyla çöl ortasında yükselen muazzam kale.",
          caption_en: "Massive 5th-century fortified palace complex that served as an imperial city-within-a-city for the Emirs of Bukhara.",
          wikiQuery: "Ark (Buhara)",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      heidelberg: [
        {
          title_tr: "1. 🏰 Tarihi Heidelberg Kalesi (Schloss Heidelberg)",
          title_en: "1. 🏰 Heidelberg Castle Ruins (Schloss Heidelberg)",
          caption_tr: "Königstuhl tepesi yamacında kızıl kumtaşından yükselen, Rönesans ve Gotik mimari harmanı romantik kale kalıntısı.",
          caption_en: "Perched majestically over the Neckar river, Germany's most famous romantic red sandstone Renaissance castle ruins.",
          wikiQuery: "Heidelberg Kalesi",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. 🌉 Eski Taş Köprü (Alte Brücke / Karl-Theodor-Brücke)",
          title_en: "2. 🌉 Old Bridge (Alte Brücke / Karl Theodor Bridge)",
          caption_tr: "1788 yılında Prens Karl Theodor tarafından inşa ettirilen, kuleli anıtsal kapısıyla Neckar üzerindeki tarihi taş köprü.",
          caption_en: "Iconic 1788 sandstone arch bridge spanning the Neckar, flanked by medieval twin white gate towers.",
          wikiQuery: "Karl Theodor Köprüsü",
          img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🚶 Philosophenweg (Filozoflar Yolu)",
          title_en: "3. 🚶 Philosophers' Walk (Philosophenweg Panorama)",
          caption_tr: "Hegel, Goethe ve Eichendorff'un yürüyerek eski şehri ve kaleyi seyrettiği güneşli bağlar arasındaki felsefe patikası.",
          caption_en: "Legendary hilltop path offering panoramic views where university philosophers and romantic poets meditated.",
          wikiQuery: "Heidelberg",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=85"
        }
      ],
      kyoto: [
        {
          title_tr: "1. ⛩️ Kinkaku-ji (Altın Köşk Tapınağı)",
          title_en: "1. ⛩️ Kinkaku-ji (The Golden Pavilion)",
          caption_tr: "Saf altın varakla kaplı üst iki katıyla ayna gibi gölete yansıyan, 1397 tarihli UNESCO mirası Zen tapınağı.",
          caption_en: "Zen Buddhist temple whose top two floors are completely covered in pure gold leaf, mirrored across Kyoko-chi pond.",
          wikiQuery: "Kinkaku-ji",
          img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "2. ⛩️ Fushimi Inari-Taisha (Binlerce Kırmızı Torii Kapısı)",
          title_en: "2. ⛩️ Fushimi Inari-Taisha (Path of Ten Thousand Torii)",
          caption_tr: "Inari Dağı patikaları boyunca kilometrelerce uzanan, bereketi ve bereketi simgeleyen büyüleyici kırmızı ahşap kapı koridoru.",
          caption_en: "Shinto shrine dedicated to rice and prosperity, renowned for thousands of vermilion Torii gates snaking up Mount Inari.",
          wikiQuery: "Fushimi İnari Tapınağı",
          img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85"
        },
        {
          title_tr: "3. 🏯 Kiyomizu-dera Tapınağı & Ahşap Teras",
          title_en: "3. 🏯 Kiyomizu-dera Temple & Monumental Wooden Stage",
          caption_tr: "Tek bir çivi çakılmadan 13 metrelik devasa ahşap sütunlar üzerine inşa edilen, Kyoto'yu kuşbakışı gören 778 yapımı tapınak.",
          caption_en: "Founded in 778 AD, soaring upon massive interlocking wooden pillars without a single nail overlooking maple hills.",
          wikiQuery: "Kiyomizu-dera",
          img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85"
        }
      ]
    };