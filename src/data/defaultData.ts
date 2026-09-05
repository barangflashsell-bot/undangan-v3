import type { WeddingData, WishItem } from '../types/wedding';

export const DEFAULT_WEDDING_DATA: WeddingData = {
  general: {
    pageTitle: "Undangan Pernikahan | Farhan & Fatimah (Walimatul 'Urs Syar'i & Alam)",
    metaDescription: "Walimatul 'Urs Muhammad Farhan & Siti Fatimah Az-Zahra - Merajut Cinta & Berkah dalam Bingkai Syar'i Bernuansa Alam Asri",
    coverSubheading: "WALIMATUL 'URS",
    coverBlessing: "Menenun Berkah dalam Bingkai Mahabbah yang Syar'i",
    coverImg: "assets/images/couple_santri.jpg",
    heroBgImg: "assets/images/hero_scenery.jpg",
    heroBadge: "Walimatul 'Urs Syar'i",
    heroDate: "Ahad, 25 Oktober 2026",
    heroLocation: "Kawasan Lembah Hijau Asri, Batu - Jawa Timur"
  },
  groom: {
    shortName: "Farhan",
    fullName: "Muhammad Farhan, S.Pd.",
    father: "Bapak H. Ahmad Dahlan Basri",
    mother: "Ibu Hj. Aminah Masrurah",
    pesantren: "Sarjana Pendidikan Islam & Penggiat Dakwah Literasi",
    instaUser: "@farhan.official",
    instaLink: "https://instagram.com",
    img: "assets/images/groom_portrait.jpg"
  },
  bride: {
    shortName: "Fatimah",
    fullName: "Siti Fatimah Az-Zahra, S.Ag.",
    father: "Bapak H. Mansyur Shodiq",
    mother: "Ibu Hj. Siti Khadijah",
    pesantren: "Sarjana Agama Islam & Pemerhati Pendidikan Keluarga",
    instaUser: "@fatimah.zahra",
    instaLink: "https://instagram.com",
    img: "assets/images/bride_portrait.jpg"
  },
  countdownTarget: "2026-10-25T08:00",
  events: {
    akad: {
      title: "Akad Nikah",
      date: "Ahad, 25 Oktober 2026",
      time: "Pukul 08.00 - 10.00 WIB",
      venueName: "Masjid Raya Al-Mubarokah",
      venueAddress: "Jl. Lembah Pinus No. 09, Kawasan Wisata Alam Asri, Batu - Jawa Timur",
      mapsLink: "https://maps.google.com/?q=Batu+Jawa+Timur"
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Ahad, 25 Oktober 2026",
      time: "Pukul 11.00 - 17.00 WIB (Selesai)",
      venueName: "Grand Garden Hall & Bale Alam Asri",
      venueAddress: "Kawasan Wisata Lembah Hijau, Jl. Lembah Pinus No. 09, Batu - Jawa Timur",
      mapsLink: "https://maps.google.com/?q=Batu+Jawa+Timur"
    }
  },
  story: {
    quranSurah: "— QS. Ar-Rum Ayat 21 —",
    quranArabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْmٍ يَّتَفَكَّرُوْنَ",
    quranMeaning: "\"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.\"",
    greeting: "Assalamu’alaikum Warahmatullahi Wabarakatuh\nDengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, serta meneladani sunnah baginda Nabi Muhammad SAW, dengan kerendahan hati dan rasa syukur kami mengundang Bapak/Ibu/Saudara/i serta para Sahabat sekalian untuk menghadiri dan memberikan doa restu pada pernikahan putra-putri kami:",
    hikmahBody: "\"Cinta sejati dalam ikatan suci pernikahan bukan sekadar tentang rupa dan kata-kata manis, melainkan tentang kesiapan saling membimbing dalam ketaatan kepada Allah, menjaga kehormatan diri, dan bersama-sama meniti jalan menuju surga-Nya.\"",
    hikmahAuthor: "— Untaian Hikmah Pernikahan Syar'i —",
    milestones: [
      {
        year: "Tahun 2023",
        title: "Pertemuan di Majelis Silaturahmi Ilmiah",
        desc: "Berawal dari sebuah forum silaturahmi ilmiah kepemudaan nasional. Tanpa saling bertatap lama, tumbuh rasa kagum atas keluhuran budi pekerti dan ketawadhuan masing-masing yang tersimpan rapi dalam doa istikharah."
      },
      {
        year: "Awal 2025",
        title: "Proses Ta'aruf yang Syar'i",
        desc: "Melalui perantara keluarga dan restu kedua orang tua, niat mulia ini disampaikan melalui proses ta'aruf yang syar'i sesuai tuntunan sunnah Rasulullah SAW. Allah SWT memantapkan hati kedua keluarga besar untuk menyatukan dua insan dalam kebaikan."
      },
      {
        year: "Oktober 2026",
        title: "Ikatan Suci Mitsaqan Ghalidha",
        desc: "Kini, dengan mengharap ridho Allah Subhanahu Wa Ta'ala dan doa restu kedua orang tua serta keluarga besar, kami melangkah bersama membangun mahligai rumah tangga yang sakinah, mawaddah, wa rahmah di tengah indahnya alam ciptaan-Nya."
      }
    ]
  },
  envelope: {
    bank1Name: "BSI (Bank Syariah Indonesia)",
    bank1Number: "7192837465",
    bank1Holder: "MUHAMMAD FARHAN",
    bank2Name: "BCA",
    bank2Number: "8273940182",
    bank2Holder: "SITI FATIMAH AZ ZAHRA",
    homeAddress: "Kediaman Keluarga Mempelai, Jl. Lembah Pinus No. 09, Desa Wisata Asri, Kec. Bumiaji, Kota Batu, Jawa Timur 65331 (Penerima: Farhan / Fatimah - 0812-3456-7890)"
  }
};

export const DEFAULT_WISHES: WishItem[] = [
  {
    name: 'Bpk. Dr. Hilman Fauzi',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Barakallah lakuma wa baraka alaikuma wa jama\'a bainakuma fii khair. Turut bersyukur atas pernikahan ananda Farhan & Fatimah. Semoga menjadi keluarga sakinah mawaddah wa rahmah dan berkah melimpah.',
    time: '1 jam yang lalu'
  },
  {
    name: 'Keluarga Besar Sahabat Silaturahmi',
    status: 'Hadir',
    count: '3 Orang atau lebih',
    message: 'Alhamdulillah, selamat untuk Fatimah dan Farhan. Teriring doa tulus semoga senantiasa rukun, saling menopang dalam kebaikan, dan langgeng hingga jannah.',
    time: '3 jam yang lalu'
  },
  {
    name: 'Ustadz Rofi\'i Al-Manshuri',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Selamat menempuh hidup baru sahabat Farhan & Fatimah. Semoga senantiasa rukun, saling membimbing dalam ketaatan kepada Allah SWT, dan selalu diliputi sakinah.',
    time: '5 jam yang lalu'
  },
  {
    name: 'Hj. Rohmah & H. Subhan',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Selamat untuk kedua mempelai dan keluarga besar Bapak H. Ahmad Dahlan & Bapak H. Mansyur Shodiq. Insya Allah kami sekeluarga hadir ke Batu mendoakan langsung.',
    time: 'Kemarin'
  },
  {
    name: 'Ahmad Faiz Pratama',
    status: 'Masih Ragu',
    count: '1 Orang',
    message: 'Selamat berbahagia Farhan & Fatimah! Semoga seluruh rangkaian acara berjalan lancar dan penuh berkah. Insya Allah diusahakan hadir.',
    time: 'Kemarin'
  }
];
