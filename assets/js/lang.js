/**
 * lang.js - UD Bengkel Kriya Daun
 * Kamus terjemahan Bahasa Indonesia (id) dan English (en).
 * File ini HANYA memuat data kamus (kamus dan logika dipisahkan).
 * Logika penerapan bahasa ditangani oleh main.js.
 */

const LANG_DATA = {
  id: {
    meta: {
      title: "UD Bengkel Kriya Daun - Kerajinan Daun dan Kayu Ramah Lingkungan",
      description: "UD Bengkel Kriya Daun mengolah daun gugur dan kayu menjadi peralatan makan, dekorasi, dan suvenir ramah lingkungan, dibuat tangan oleh pengrajin lokal di Surabaya."
    },
    nav: {
      brand: "Bengkel Kriya Daun",
      beranda: "Beranda",
      tentang: "Tentang Kami",
      produk: "Produk",
      proses: "Proses Kerja",
      struktur: "Struktur Organisasi",
      lokasi: "Lokasi",
      hubungi: "Hubungi Kami",
      openMenu: "Buka menu navigasi"
    },
    langToggle: {
      aria: "Pilih bahasa / Select language",
      current: "ID",
      id: "Indonesia (ID)",
      en: "English (EN)"
    },
    hero: {
      eyebrow1: "Kerajinan Daun dan Kayu",
      title1: "Kriya dari daun, karya yang kembali ke alam.",
      sub1: "UD Bengkel Kriya Daun mengolah daun dan kayu pilihan menjadi peralatan makan, dekorasi, dan suvenir ramah lingkungan, dibuat tangan oleh pengrajin lokal.",
      btnLihat: "Lihat Produk Kami",
      btnHubungi: "Hubungi Kami",

      eyebrow2: "Produk Kami",
      title2: "Dari bahan alami, untuk kehidupan sehari-hari.",
      sub2: "Piring, mangkuk, tatakan, hingga lampu hias - semua dibuat dari daun dan kayu pilihan, tanpa plastik, tahan lama, dan indah.",

      eyebrow3: "Bahan Baku Pilihan",
      title3: "Dimulai dari daun yang jatuh ke tanah.",
      sub3: "Kami memungut daun gugur dan sisa kayu yang biasanya terbuang, lalu mengolahnya menjadi produk yang bernilai dan ramah lingkungan.",
      btnKenali: "Kenali Kami",

      eyebrow4: "Dekorasi Alami",
      title4: "Cahaya hangat dari lembaran daun.",
      sub4: "Lampu hias kap daun kami menghadirkan suasana alami dan nyaman di ruanganmu - rangka kayu kokoh, daun transparan, sinar yang hangat.",

      eyebrow5: "Pengrajin Lokal",
      title5: "Dibuat tangan, penuh perhatian.",
      sub5: "Setiap produk kami dikerjakan langsung oleh pengrajin lokal yang terampil - tidak ada mesin massal, hanya keahlian tangan dan cinta pada bahan alami.",
      btnProses: "Lihat Proses Kerja",

      prev: "Slide sebelumnya",
      next: "Slide selanjutnya"
    },
    angka: {
      caption: "Bengkel Kriya Daun dalam angka",
      tahun: "Tahun berkarya",
      pengrajin: "Pengrajin dan staf",
      lini: "Lini produk",
      bahan: "Bahan alami dan terbarukan"
    },
    tentang: {
      eyebrow: "Tentang Kami",
      title: "Usaha kriya yang tumbuh dari limbah daun.",
      p1: "UD Bengkel Kriya Daun adalah usaha dagang di bidang kerajinan berbahan dasar daun dan kayu. Kami memanfaatkan daun gugur dan sisa kayu yang biasanya terbuang, lalu mengolahnya menjadi produk yang indah, kuat, dan aman dipakai sehari-hari.",
      p2: "Setiap produk melewati empat tahap yang terkoordinasi: penjualan, pengadaan bahan, penyimpanan di gudang, dan produksi. Pencatatan stok bahan baku dilakukan dengan sistem informasi persediaan agar bahan selalu tersedia dan tidak ada yang terbuang percuma.",
      visiLabel: "Visi",
      visiText: "Menjadi bengkel kriya daun terpercaya yang mengubah limbah alam menjadi karya bernilai.",
      misiLabel: "Misi",
      misiItem1: "Memanfaatkan daun dan kayu secara bertanggung jawab.",
      misiItem2: "Menjaga mutu produk lewat produksi yang rapi dan terjadwal.",
      misiItem3: "Mengelola persediaan bahan baku agar produksi tidak terhenti.",
      misiItem4: "Memberdayakan pengrajin dan pemasok lokal.",
      profilTitle: "Profil Perusahaan",
      keyNama: "Nama usaha",
      keyBentuk: "Bentuk usaha",
      valBentuk: "Usaha Dagang (UD)",
      keyBidang: "Bidang usaha",
      valBidang: "Kerajinan berbahan daun dan kayu",
      keyTahun: "Tahun berdiri",
      keyPemilik: "Pemilik",
      keyNib: "NIB",
      keyKaryawan: "Jumlah karyawan",
      valKaryawan: "25 orang",
      keyAlamat: "Alamat"
    },
    produk: {
      eyebrow: "Produk Kami",
      title: "Dari daun dan kayu, untuk keseharian.",
      lead: "Setiap produk dibuat dari bahan alami, tanpa plastik, dan bisa dipesan satuan maupun grosir.",
      catMakan: "Peralatan Makan",
      catDekor: "Dekorasi",
      catSuvenir: "Suvenir",
      p1Name: "Piring Daun Pres",
      p1Desc: "Piring dari daun yang dipres, kuat dan bisa terurai alami.",
      p1Price: "mulai Rp 3.500/pcs",
      p2Name: "Mangkuk Daun Lapis",
      p2Desc: "Mangkuk tahan kuah hangat dengan lapisan daun berlapis.",
      p2Price: "mulai Rp 4.500/pcs",
      p3Name: "Tatakan Gelas Kayu-Daun",
      p3Desc: "Tatakan kayu berhias inlay daun kering, satu set isi empat.",
      p3Price: "mulai Rp 45.000/set",
      p4Name: "Keranjang Anyam Daun",
      p4Desc: "Keranjang serbaguna dari anyaman daun, cocok untuk penyimpanan.",
      p4Price: "mulai Rp 85.000/pcs",
      p5Name: "Lampu Hias Daun",
      p5Desc: "Kap lampu dari lembaran daun transparan dengan rangka kayu.",
      p5Price: "mulai Rp 165.000/pcs",
      p6Name: "Bingkai Daun Awetan",
      p6Desc: "Bingkai kayu berisi daun awetan, cocok untuk hadiah dan suvenir acara.",
      p6Price: "mulai Rp 35.000/pcs",
      tanyaBtn: "Tanya produk ini",
      katalogBtn: "Minta Katalog Lengkap"
    },
    proses: {
      eyebrow: "Proses Kerja",
      title: "Dari bahan baku sampai ke tangan pelanggan.",
      lead: "Empat bagian bekerja berurutan dan saling terhubung lewat satu sistem pencatatan.",
      step1Title: "Pengadaan",
      step1Desc: "Kami memantau stok bahan baku dan memesan daun serta kayu dari pemasok lokal saat persediaan mendekati batas aman.",
      step2Title: "Gudang",
      step2Desc: "Bahan masuk diperiksa, dicatat, lalu disimpan rapi. Setiap barang keluar dan masuk tercatat tanggal dan jumlahnya.",
      step3Title: "Produksi",
      step3Desc: "Pengrajin mengambil bahan sesuai jadwal produksi, membuat produk, lalu memeriksa kualitas dan jumlah cacat.",
      step4Title: "Penjualan",
      step4Desc: "Pesanan pelanggan dicatat dan ketersediaan produk dicek di gudang sebelum pesanan dikonfirmasi.",
      sistemTitle: "Sistem Persediaan Bahan Baku",
      sistemDesc: "Seluruh alur di atas dicatat dalam sistem informasi persediaan berbasis divisi, sehingga stok selalu terpantau dan kesalahan pencatatan manual berkurang.",
      sistemBtn: "Lihat tampilan sistem",
      modalTitle: "Tampilan Sistem Persediaan Bahan Baku",
      modalClose: "Tutup"
    },
    komitmen: {
      title: "Setiap lembar daun punya cerita kedua.",
      text: "Kami mengolah daun gugur dan sisa kayu menjadi produk yang tahan lama, mengurangi sampah, dan menggantikan kemasan plastik sekali pakai.",
      point1: "Bahan alami",
      point2: "Minim limbah",
      point3: "Dibuat tangan lokal"
    },
    struktur: {
      eyebrow: "Struktur Organisasi",
      title: "Tim di balik setiap karya.",
      lead: "Empat divisi bekerja di bawah satu pimpinan dan saling bertukar data setiap hari.",
      ariaBagan: "Bagan struktur organisasi",
      role1: "Pemilik / Pimpinan Usaha",
      role2: "Manajer Operasional",
      role3: "Kepala Penjualan",
      desc3: "Mencatat pesanan dan transaksi, mengecek ketersediaan produk.",
      role4: "Kepala Pengadaan",
      desc4: "Membuat permintaan dan pembelian bahan baku ke pemasok.",
      role5: "Kepala Gudang",
      desc5: "Mengelola persediaan serta keluar masuk bahan baku.",
      role6: "Kepala Produksi",
      desc6: "Menyusun jadwal produksi dan mengecek hasil serta kualitas produk."
    },
    lokasi: {
      eyebrow: "Lokasi",
      title: "Kunjungi bengkel kami.",
      cardTitle: "Bengkel dan Kantor",
      alamatLabel: "Alamat",
      jamLabel: "Jam buka",
      jamVal: "Senin sampai Sabtu, 08.00 – 16.00 WIB",
      jamNote: "Minggu dan hari libur nasional tutup.",
      waLabel: "Telepon / WhatsApp",
      emailLabel: "Email",
      mapsBtn: "Buka di Google Maps",
      dirBtn: "Petunjuk Arah",
      loadingMap: "Memuat peta…",
      fallbackText: "Peta belum bisa ditampilkan.",
      fallbackLink: "Buka lokasi kami langsung di Google Maps."
    },
    kontak: {
      title: "Mau pesan atau tanya produk?",
      lead: "Ceritakan kebutuhanmu. Kami balas lewat WhatsApp pada jam kerja.",
      namaLabel: "Nama lengkap",
      namaPlaceholder: "Contoh: Budi Santoso",
      waLabel: "Nomor WhatsApp",
      waPlaceholder: "Contoh: 08**********",
      kebutuhanLabel: "Jenis kebutuhan",
      kebutuhanDefault: "Pilih jenis kebutuhan…",
      optSatuan: "Pesan satuan",
      optGrosir: "Pesan grosir",
      optSuvenir: "Suvenir acara",
      optKerjasama: "Kerja sama pemasok",
      optLainnya: "Lainnya",
      pesanLabel: "Pesan",
      pesanPlaceholder: "Tulis produk yang kamu minati, jumlah, atau pertanyaanmu…",
      submitBtn: "Kirim lewat WhatsApp",
      directTitle: "Hubungi langsung",
      jamKerjaLabel: "Jam kerja",
      jamKerjaVal: "Senin – Sabtu, 08.00 – 16.00 WIB",
      socialTitle: "Media Sosial"
    },
    formErrors: {
      errNama: "Isi nama lengkap supaya kami tahu harus menyapa siapa.",
      errWaEmpty: "Isi nomor WhatsApp supaya kami bisa membalas.",
      errWaFormat: "Nomor belum sesuai. Gunakan angka saja, contoh 08**********.",
      errPesan: "Tulis pesan singkat tentang produk atau jumlah yang kamu butuhkan.",
      statusLoading: "Membuka WhatsApp…",
      statusSuccess: "WhatsApp sudah terbuka. Tekan kirim di sana untuk mengirim pesanmu.",
      statusFallback: "WhatsApp tidak terbuka? Salin pesanmu lalu kirim ke +62 812-3456-7890."
    },
    waMessage: {
      intro: "Halo, saya",
      phone: "Nomor WA saya:",
      need: "Kebutuhan:",
      message: "Pesan:"
    },
    footer: {
      desc: "UD Bengkel Kriya Daun, kerajinan daun dan kayu yang ramah lingkungan.",
      quickTitle: "Tautan cepat",
      kontakTitle: "Kontak",
      jamTitle: "Jam operasional",
      jamDays: "Senin – Sabtu",
      jamHours: "08.00 – 16.00 WIB",
      jamNote: "Minggu dan hari libur nasional tutup.",
      copyright: "© 2026 UD Bengkel Kriya Daun. Situs ini dibuat untuk keperluan praktikum."
    },
    social: {
      igLabel: "Instagram UD Bengkel Kriya Daun",
      fbLabel: "Facebook UD Bengkel Kriya Daun",
      xLabel: "X (Twitter) UD Bengkel Kriya Daun"
    },
    backToTop: {
      aria: "Kembali ke atas"
    }
  },

  en: {
    meta: {
      title: "UD Bengkel Kriya Daun - Eco-Friendly Leaf and Wood Crafts",
      description: "UD Bengkel Kriya Daun transforms fallen leaves and wood into eco-friendly tableware, home decor, and souvenirs, handcrafted by local artisans in Surabaya."
    },
    nav: {
      brand: "Bengkel Kriya Daun",
      beranda: "Home",
      tentang: "About Us",
      produk: "Products",
      proses: "Workflow",
      struktur: "Organization",
      lokasi: "Location",
      hubungi: "Contact Us",
      openMenu: "Open navigation menu"
    },
    langToggle: {
      aria: "Select language / Pilih bahasa",
      current: "EN",
      id: "Indonesia (ID)",
      en: "English (EN)"
    },
    hero: {
      eyebrow1: "Leaf and Wood Crafts",
      title1: "Crafted from leaves, creations returning to nature.",
      sub1: "UD Bengkel Kriya Daun turns selected leaves and wood into eco-friendly tableware, decor, and souvenirs, handmade by local artisans.",
      btnLihat: "Explore Our Products",
      btnHubungi: "Contact Us",

      eyebrow2: "Our Products",
      title2: "From natural materials, for everyday living.",
      sub2: "Plates, bowls, coasters, to decorative lamps - all crafted from selected leaves and wood, plastic-free, durable, and elegant.",

      eyebrow3: "Selected Raw Materials",
      title3: "Beginning with leaves fallen to the earth.",
      sub3: "We collect fallen leaves and wood scraps usually discarded, crafting them into valuable and environmentally conscious goods.",
      btnKenali: "Discover Our Story",

      eyebrow4: "Natural Home Decor",
      title4: "Warm radiance through delicate leaf textures.",
      sub4: "Our handcrafted leaf lampshades bring a soothing natural ambiance to your space - sturdy wooden frames, translucent foliage, warm light.",

      eyebrow5: "Local Artisans",
      title5: "Handcrafted with attentive care.",
      sub5: "Each creation is made directly by skilled local craftspeople - no mass-production machinery, only pure artisanal dedication.",
      btnProses: "View Our Workflow",

      prev: "Previous slide",
      next: "Next slide"
    },
    angka: {
      caption: "Bengkel Kriya Daun in numbers",
      tahun: "Years of craftsmanship",
      pengrajin: "Artisans and staff",
      lini: "Product lines",
      bahan: "Natural and renewable materials"
    },
    tentang: {
      eyebrow: "About Us",
      title: "An artisanal venture rooted in leaf waste repurposing.",
      p1: "UD Bengkel Kriya Daun is a craft enterprise specializing in sustainable leaf and wood products. We collect fallen foliage and reclaimed timber, turning them into resilient, beautiful, and safe everyday goods.",
      p2: "Every product goes through four coordinated stages: sales, raw material procurement, warehouse storage, and production. Inventory monitoring is managed through an integrated inventory system ensuring consistent supply without unnecessary waste.",
      visiLabel: "Vision",
      visiText: "To be a trusted eco-craft workshop converting nature's fallen leaves into valuable creations.",
      misiLabel: "Mission",
      misiItem1: "Utilize leaves and timber responsibly.",
      misiItem2: "Maintain product excellence through disciplined production schedules.",
      misiItem3: "Manage raw material inventory so workshops never run out of supply.",
      misiItem4: "Empower local artisans and neighborhood suppliers.",
      profilTitle: "Company Profile",
      keyNama: "Business name",
      keyBentuk: "Legal entity",
      valBentuk: "Sole Proprietorship (UD)",
      keyBidang: "Line of business",
      valBidang: "Leaf and wood handicrafts",
      keyTahun: "Founded in",
      keyPemilik: "Owner",
      keyNib: "NIB (Business ID)",
      keyKaryawan: "Total employees",
      valKaryawan: "25 employees",
      keyAlamat: "Address"
    },
    produk: {
      eyebrow: "Our Products",
      title: "From leaves and timber, for your daily life.",
      lead: "Each product is crafted from natural materials, 100% plastic-free, available for individual and wholesale orders.",
      catMakan: "Tableware",
      catDekor: "Home Decor",
      catSuvenir: "Souvenirs",
      p1Name: "Pressed Leaf Plate",
      p1Desc: "Sturdy heat-pressed leaf plate, durable and completely biodegradable.",
      p1Price: "from Rp 3,500/pc",
      p2Name: "Layered Leaf Bowl",
      p2Desc: "Warm broth resistant bowl engineered with reinforced leaf layers.",
      p2Price: "from Rp 4,500/pc",
      p3Name: "Wood-Leaf Coaster Set",
      p3Desc: "Timber coasters inlaid with natural dried leaf veins, set of four.",
      p3Price: "from Rp 45,000/set",
      p4Name: "Woven Leaf Basket",
      p4Desc: "Versatile woven leaf storage basket, perfect for home organizing.",
      p4Price: "from Rp 85,000/pc",
      p5Name: "Artisanal Leaf Lamp",
      p5Desc: "Translucent leaf lampshade supported by a handcrafted wood structure.",
      p5Price: "from Rp 165,000/pc",
      p6Name: "Preserved Leaf Frame",
      p6Desc: "Natural wood frame displaying preserved foliage, ideal for gifts and keepsakes.",
      p6Price: "from Rp 35,000/pc",
      tanyaBtn: "Inquire about this",
      katalogBtn: "Request Full Catalog"
    },
    proses: {
      eyebrow: "Workflow",
      title: "From raw materials to our customers' hands.",
      lead: "Four dedicated teams operate in sequence, seamlessly linked through a centralized system.",
      step1Title: "Procurement",
      step1Desc: "We monitor material reserves and purchase leaves and timber from local suppliers when stock nears safety limits.",
      step2Title: "Warehouse",
      step2Desc: "Incoming materials are inspected, cataloged, and neatly organized. All warehouse flows record precise dates and quantities.",
      step3Title: "Production",
      step3Desc: "Artisans pick supplies according to production schedules, manufacture items, and conduct quality inspections.",
      step4Title: "Sales",
      step4Desc: "Customer orders are logged and product availability is confirmed in the warehouse before confirmation.",
      sistemTitle: "Raw Material Inventory System",
      sistemDesc: "All departmental steps above are tracked within a division-based inventory system, keeping inventory precise and minimizing manual errors.",
      sistemBtn: "View system preview",
      modalTitle: "Raw Material Inventory System Preview",
      modalClose: "Close"
    },
    komitmen: {
      title: "Every fallen leaf deserves a second story.",
      text: "We repurpose fallen foliage and wood offcuts into durable items, cutting waste and replacing single-use plastic packaging.",
      point1: "Natural materials",
      point2: "Minimal waste",
      point3: "Handmade locally"
    },
    struktur: {
      eyebrow: "Organization",
      title: "The dedicated craftspeople behind every piece.",
      lead: "Four divisions operate under unified leadership and exchange operational updates daily.",
      ariaBagan: "Organizational structure chart",
      role1: "Business Owner / Managing Director",
      role2: "Operations Manager",
      role3: "Head of Sales",
      desc3: "Logs orders and customer transactions, checking product inventory.",
      role4: "Head of Procurement",
      desc4: "Issues raw material purchase orders and liaises with local suppliers.",
      role5: "Head of Warehouse",
      desc5: "Oversees raw material inventory and logs stock arrivals and releases.",
      role6: "Head of Production",
      desc6: "Plans production schedules and examines output quality standards."
    },
    lokasi: {
      eyebrow: "Location",
      title: "Visit our workshop.",
      cardTitle: "Workshop and Office",
      alamatLabel: "Address",
      jamLabel: "Opening hours",
      jamVal: "Monday to Saturday, 08:00 – 16:00 WIB",
      jamNote: "Closed on Sundays and public holidays.",
      waLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      mapsBtn: "Open in Google Maps",
      dirBtn: "Get Directions",
      loadingMap: "Loading map…",
      fallbackText: "Unable to load interactive map right now.",
      fallbackLink: "View our location directly on Google Maps."
    },
    kontak: {
      title: "Ready to order or ask a question?",
      lead: "Let us know your requirements. We reply promptly via WhatsApp during business hours.",
      namaLabel: "Full name",
      namaPlaceholder: "e.g. Budi Santoso",
      waLabel: "WhatsApp number",
      waPlaceholder: "e.g. 08**********",
      kebutuhanLabel: "Requirement type",
      kebutuhanDefault: "Select requirement type…",
      optSatuan: "Individual order",
      optGrosir: "Wholesale order",
      optSuvenir: "Event souvenir",
      optKerjasama: "Supplier partnership",
      optLainnya: "Other",
      pesanLabel: "Message",
      pesanPlaceholder: "Write about the products you are interested in, quantities, or your inquiries…",
      submitBtn: "Send via WhatsApp",
      directTitle: "Direct Contact",
      jamKerjaLabel: "Working hours",
      jamKerjaVal: "Monday – Saturday, 08:00 – 16:00 WIB",
      socialTitle: "Social Media"
    },
    formErrors: {
      errNama: "Please provide your full name so we know how to address you.",
      errWaEmpty: "Please enter your WhatsApp number so we can get back to you.",
      errWaFormat: "Invalid format. Please enter digits only, e.g. 08**********.",
      errPesan: "Please enter a brief message describing your inquiry or order details.",
      statusLoading: "Opening WhatsApp…",
      statusSuccess: "WhatsApp has been opened. Press send in WhatsApp to deliver your message.",
      statusFallback: "WhatsApp didn't launch? Copy your message and send it to +62 812-3456-7890."
    },
    waMessage: {
      intro: "Hello, I am",
      phone: "My WhatsApp number:",
      need: "Requirement:",
      message: "Message:"
    },
    footer: {
      desc: "UD Bengkel Kriya Daun, eco-friendly leaf and wood handicrafts.",
      quickTitle: "Quick Links",
      kontakTitle: "Contact",
      jamTitle: "Operating Hours",
      jamDays: "Monday – Saturday",
      jamHours: "08:00 – 16:00 WIB",
      jamNote: "Closed on Sundays and national holidays.",
      copyright: "© 2026 UD Bengkel Kriya Daun. This website was created for academic purposes."
    },
    social: {
      igLabel: "UD Bengkel Kriya Daun on Instagram",
      fbLabel: "UD Bengkel Kriya Daun on Facebook",
      xLabel: "UD Bengkel Kriya Daun on X (Twitter)"
    },
    backToTop: {
      aria: "Back to top"
    }
  }
};

window.LANG_DATA = LANG_DATA;
