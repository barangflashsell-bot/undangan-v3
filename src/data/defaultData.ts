import type { WeddingData, WishItem } from '../types/wedding';

export const DEFAULT_WEDDING_DATA: WeddingData = {
  general: {
    pageTitle: "Undangan Pernikahan | Farhan & Fatimah (Tema Santri & Alam)",
    metaDescription: "Walimatul 'Urs Muhammad Farhan Al-Hafidz & Siti Fatimah Az-Zahra - Merajut Berkah dalam Bingkai Mahabbah & Alam Asri Pesantren",
    coverSubheading: "WALIMATUL 'URS",
    coverBlessing: "Menenun Berkah di Bumi Pesantren",
    coverImg: "assets/images/couple_santri.jpg",
    heroBgImg: "assets/images/hero_scenery.jpg",
    heroBadge: "Walimatul 'Urs Santri",
    heroDate: "Ahad, 25 Oktober 2026",
    heroLocation: "Lereng Hijau Pesantren Al-Mubarokah"
  },
  groom: {
    shortName: "Farhan",
    fullName: "Muhammad Farhan Al-Hafidz, S.Pd.",
    father: "KH. Ahmad Dahlan Basri",
    mother: "Nyai Hj. Aminah Masrurah",
    pesantren: "Alumni Pondok Pesantren Raudlatul Ulum & Ma'had Aly",
    instaUser: "@kangfarhan.hafiz",
    instaLink: "https://instagram.com",
    img: "assets/images/groom_portrait.jpg"
  },
  bride: {
    shortName: "Fatimah",
    fullName: "Siti Fatimah Az-Zahra, S.Ag.",
    father: "KH. Mansyur Shodiq",
    mother: "Nyai Hj. Siti Khadijah",
    pesantren: "Alumni Pondok Pesantren Al-Fath Lil Banat",
    instaUser: "@ningfatimah.zahra",
    instaLink: "https://instagram.com",
    img: "assets/images/bride_portrait.jpg"
  },
  countdownTarget: "2026-10-25T08:00",
  events: {
    akad: {
      title: "Akad Nikah",
      date: "Ahad, 25 Oktober 2026",
      time: "Pukul 08.00 - 10.00 WIB",
      venueName: "Masjid Jami' Pesantren Al-Mubarokah",
      venueAddress: "Jl. Lembah Pinus No. 09, Kawasan Lereng Asri, Batu - Jawa Timur",
      mapsLink: "https://maps.google.com/?q=Batu+Jawa+Timur"
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Ahad, 25 Oktober 2026",
      time: "Pukul 11.00 - 17.00 WIB (Selesai)",
      venueName: "Bale Alam Santri & Taman Firdaus",
      venueAddress: "Kawasan Wisata Alam Pesantren, Jl. Lembah Pinus No. 09, Batu - Jawa Timur",
      mapsLink: "https://maps.google.com/?q=Batu+Jawa+Timur"
    }
  },
  story: {
    quranSurah: "— QS. Ar-Rum Ayat 21 —",
    quranArabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
    quranMeaning: "\"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.\"",
    greeting: "Assalamu’alaikum Warahmatullahi Wabarakatuh\nDengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, serta meneladani sunnah baginda Nabi Muhammad SAW, dengan kerendahan hati dan ta'dzim kami mengundang Bapak/Ibu/Saudara/i serta para Sahabat sekalian untuk menghadiri dan memberikan doa restu pada pernikahan putra-putri kami:",
    hikmahBody: "\"Cinta sejati seorang santri bukan sekadar tentang rupa dan kata-kata manis, melainkan tentang kesiapan saling membimbing dalam taat, memuliakan Al-Qur'an, dan bersama-sama meniti jalan menuju surga-Nya.\"",
    hikmahAuthor: "— Untaian Mutiara Santri Nusantara —",
    milestones: [
      {
        year: "Tahun 2023",
        title: "Pertemuan di Majelis Bahtsul Masa'il",
        desc: "Berawal dari musyawarah ilmiah antar pondok pesantren se-Jawa Timur. Tanpa saling bertatap lama, ada rasa kagum atas keluhuran adab dan ketawadhuan masing-masing yang tersimpan rapi dalam doa sepertiga malam."
      },
      {
        year: "Awal 2025",
        title: "Jalur Ta'aruf & Dawuh Kyai",
        desc: "Melalui perantara guru mulia dan restu kedua orang tua, niat mulia ini disampaikan melalui jalur ta'aruf yang syar'i. Setelah istikharah yang panjang, Allah mantapkan hati kedua keluarga besar untuk menyatukan nasab keilmuan."
      },
      {
        year: "Oktober 2026",
        title: "Ikatan Suci Mitsaqan Ghalidha",
        desc: "Kini, dengan mengharap barakah dari para guru dan para kiai, kami melangkah bersama menuju bahtera rumah tangga yang sakinah, mawaddah, wa rahmah di tengah syahdunya alam ciptaan-Nya."
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
    homeAddress: "Komplek Ndalem Pondok Pesantren Al-Mubarokah, Jl. Lembah Pinus No. 09, Desa Wisata Asri, Kec. Bumiaji, Kota Batu, Jawa Timur 65331 (Penerima: Kang Farhan / Ning Fatimah - 0812-3456-7890)"
  }
};

export const DEFAULT_WISHES: WishItem[] = [
  {
    name: 'Gus Hilman Fauzi',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Barakallah lakuma wa baraka alaikuma wa jama\'a bainakuma fii khair. Turut bersyukur atas pernikahan Kang Farhan & Ning Fatimah. Semoga berkah melimpah, ilmunya terus bermanfaat bagi umat.',
    time: '1 jam yang lalu'
  },
  {
    name: 'Keluarga Besar Ponpes Al-Fath',
    status: 'Hadir',
    count: '3 Orang atau lebih',
    message: 'Alhamdulillah, selamat untuk Ning Fatimah dan Kang Farhan. Mengalir doa tulus dari para asatidz dan santri putri. Semoga menjadi keluarga sakinah mawaddah wa rahmah.',
    time: '3 jam yang lalu'
  },
  {
    name: 'Ustadz Rofi\'i Al-Manshuri',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Selamat menempuh hidup baru sahabat seperjuangan bahtsul masa\'il. Semoga senantiasa rukun, saling menopang dalam dakwah, dan langgeng hingga jannah.',
    time: '5 jam yang lalu'
  },
  {
    name: 'Hj. Rohmah & H. Subhan',
    status: 'Hadir',
    count: '2 Orang',
    message: 'Selamat untuk kedua mempelai dan keluarga besar KH. Ahmad Dahlan & KH. Mansyur Shodiq. Insya Allah kami sekeluarga hadir ke Batu mendoakan langsung.',
    time: 'Kemarin'
  },
  {
    name: 'Ahmad Faiz (Alumni Raudlatul Ulum)',
    status: 'Masih Ragu',
    count: '1 Orang',
    message: 'Selamat berbahagia Kang Farhan! Semoga acaranya lancar tanpa halangan. Insya Allah diusahakan hadir sowan.',
    time: 'Kemarin'
  }
];
