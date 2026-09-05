/**
 * UNDANGAN PERNIKAHAN TEMA SANTRI & PEMANDANGAN ALAM
 * Farhan & Fatimah - Walimatul 'Urs
 * Dengan Editor Data & Guest Link Generator
 */

/* ===================================================================
   DATA BAWAAN (DEFAULT WEDDING DATA)
   =================================================================== */
const DEFAULT_WEDDING_DATA = {
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
    roleBadge: "Kang Santri",
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
    roleBadge: "Ning Santri",
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

const STORAGE_KEY = 'wedding_santri_data_v3';
let activeWeddingData = null;

/* ===================================================================
   INISIALISASI APLIKASI
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  activeWeddingData = loadWeddingData();
  applyWeddingData(activeWeddingData);

  initGuestName();
  initInvitationOpener();
  initAudioPlayer();
  initNatureCanvas();
  initRsvpAndWishes();
  initScrollSpy();
  initEditorPanel();
});

/* ===================================================================
   MANAJEMEN DATA (LOCALSTORAGE)
   =================================================================== */
function loadWeddingData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Merge with default data in case new keys exist
      return deepMerge(DEFAULT_WEDDING_DATA, parsed);
    }
  } catch (e) {
    console.error("Gagal memuat data dari localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
}

function saveWeddingData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    activeWeddingData = data;
    applyWeddingData(data);
  } catch (e) {
    console.error("Gagal menyimpan data ke localStorage:", e);
  }
}

function deepMerge(target, source) {
  const result = JSON.parse(JSON.stringify(target));
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

/* ===================================================================
   PENERAPAN DATA KE DOM (APPLY WEDDING DATA)
   =================================================================== */
let countdownInterval = null;

function applyWeddingData(data) {
  if (!data) return;

  // 1. Page Title & Meta
  if (data.general) {
    if (data.general.pageTitle) {
      document.title = data.general.pageTitle;
      const ptEl = document.getElementById('pageTitle');
      if (ptEl) ptEl.textContent = data.general.pageTitle;
    }

    // Cover
    const coverSubEl = document.getElementById('coverSubheading');
    if (coverSubEl) coverSubEl.textContent = data.general.coverSubheading || "WALIMATUL 'URS";

    const coverBlessingEl = document.getElementById('coverBlessingQuote');
    if (coverBlessingEl) {
      coverBlessingEl.innerHTML = `<i class="fa-solid fa-leaf"></i> ${escapeHtml(data.general.coverBlessing || '')} <i class="fa-solid fa-leaf"></i>`;
    }

    const coverImgEl = document.getElementById('coverCoupleImg');
    if (coverImgEl && data.general.coverImg) {
      coverImgEl.src = data.general.coverImg;
    }

    // Hero
    const heroBadgeEl = document.getElementById('heroBadge');
    if (heroBadgeEl) {
      heroBadgeEl.innerHTML = `<i class="fa-solid fa-star-and-crescent"></i> ${escapeHtml(data.general.heroBadge || '')}`;
    }

    const heroDateEl = document.getElementById('heroDateText');
    if (heroDateEl) {
      heroDateEl.innerHTML = `<i class="fa-regular fa-calendar-check"></i> ${escapeHtml(data.general.heroDate || '')}`;
    }

    const heroLocEl = document.getElementById('heroLocationText');
    if (heroLocEl) {
      heroLocEl.innerHTML = `<i class="fa-solid fa-mountain-sun"></i> ${escapeHtml(data.general.heroLocation || '')}`;
    }

    const heroBgEl = document.getElementById('heroBgImg');
    if (heroBgEl && data.general.heroBgImg) {
      heroBgEl.src = data.general.heroBgImg;
    }
  }

  // 2. Mempelai Pria
  if (data.groom) {
    const coverGroom = document.getElementById('coverGroomName');
    if (coverGroom) coverGroom.textContent = data.groom.shortName || '';

    const heroGroom = document.getElementById('heroGroomName');
    if (heroGroom) heroGroom.textContent = data.groom.fullName || data.groom.shortName || '';

    const groomImgEl = document.getElementById('groomImg');
    if (groomImgEl && data.groom.img) groomImgEl.src = data.groom.img;

    const groomRoleEl = document.getElementById('groomRoleBadge');
    if (groomRoleEl) groomRoleEl.textContent = data.groom.roleBadge || '';

    const groomFullEl = document.getElementById('groomFullName');
    if (groomFullEl) groomFullEl.textContent = data.groom.fullName || '';

    const groomFatherEl = document.getElementById('groomFather');
    if (groomFatherEl) groomFatherEl.textContent = data.groom.father || '';

    const groomMotherEl = document.getElementById('groomMother');
    if (groomMotherEl) groomMotherEl.textContent = data.groom.mother || '';

    const groomPesantrenEl = document.getElementById('groomPesantren');
    if (groomPesantrenEl) {
      groomPesantrenEl.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${escapeHtml(data.groom.pesantren || '')}`;
    }

    const groomInstaLinkEl = document.getElementById('groomInstaLink');
    const groomInstaUserEl = document.getElementById('groomInstaUser');
    if (groomInstaLinkEl && data.groom.instaLink) groomInstaLinkEl.href = data.groom.instaLink;
    if (groomInstaUserEl && data.groom.instaUser) groomInstaUserEl.textContent = data.groom.instaUser;
  }

  // 3. Mempelai Wanita
  if (data.bride) {
    const coverBride = document.getElementById('coverBrideName');
    if (coverBride) coverBride.textContent = data.bride.shortName || '';

    const heroBride = document.getElementById('heroBrideName');
    if (heroBride) heroBride.textContent = data.bride.fullName || data.bride.shortName || '';

    const brideImgEl = document.getElementById('brideImg');
    if (brideImgEl && data.bride.img) brideImgEl.src = data.bride.img;

    const brideRoleEl = document.getElementById('brideRoleBadge');
    if (brideRoleEl) brideRoleEl.textContent = data.bride.roleBadge || '';

    const brideFullEl = document.getElementById('brideFullName');
    if (brideFullEl) brideFullEl.textContent = data.bride.fullName || '';

    const brideFatherEl = document.getElementById('brideFather');
    if (brideFatherEl) brideFatherEl.textContent = data.bride.father || '';

    const brideMotherEl = document.getElementById('brideMother');
    if (brideMotherEl) brideMotherEl.textContent = data.bride.mother || '';

    const bridePesantrenEl = document.getElementById('bridePesantren');
    if (bridePesantrenEl) {
      bridePesantrenEl.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${escapeHtml(data.bride.pesantren || '')}`;
    }

    const brideInstaLinkEl = document.getElementById('brideInstaLink');
    const brideInstaUserEl = document.getElementById('brideInstaUser');
    if (brideInstaLinkEl && data.bride.instaLink) brideInstaLinkEl.href = data.bride.instaLink;
    if (brideInstaUserEl && data.bride.instaUser) brideInstaUserEl.textContent = data.bride.instaUser;
  }

  // 4. Rangkaian Acara
  if (data.events) {
    if (data.events.akad) {
      const elTitle = document.getElementById('akadTitle');
      const elDate = document.getElementById('akadDateText');
      const elTime = document.getElementById('akadTimeText');
      const elVenue = document.getElementById('akadVenueName');
      const elAddr = document.getElementById('akadVenueAddress');
      const elMaps = document.getElementById('akadMapsLink');
      const elBtnCal = document.getElementById('btnCalendarAkad');

      if (elTitle) elTitle.textContent = data.events.akad.title || 'Akad Nikah';
      if (elDate) elDate.textContent = data.events.akad.date || '';
      if (elTime) elTime.textContent = data.events.akad.time || '';
      if (elVenue) elVenue.textContent = data.events.akad.venueName || '';
      if (elAddr) elAddr.textContent = data.events.akad.venueAddress || '';
      if (elMaps && data.events.akad.mapsLink) elMaps.href = data.events.akad.mapsLink;

      if (elBtnCal) {
        elBtnCal.onclick = () => {
          saveToGoogleCalendar(
            `${data.events.akad.title} ${data.groom.shortName} & ${data.bride.shortName}`,
            data.events.akad.venueName,
            '20261025T010000Z',
            '20261025T030000Z'
          );
        };
      }
    }

    if (data.events.resepsi) {
      const elTitle = document.getElementById('resepsiTitle');
      const elDate = document.getElementById('resepsiDateText');
      const elTime = document.getElementById('resepsiTimeText');
      const elVenue = document.getElementById('resepsiVenueName');
      const elAddr = document.getElementById('resepsiVenueAddress');
      const elMaps = document.getElementById('resepsiMapsLink');
      const elBtnCal = document.getElementById('btnCalendarResepsi');

      if (elTitle) elTitle.textContent = data.events.resepsi.title || 'Resepsi Pernikahan';
      if (elDate) elDate.textContent = data.events.resepsi.date || '';
      if (elTime) elTime.textContent = data.events.resepsi.time || '';
      if (elVenue) elVenue.textContent = data.events.resepsi.venueName || '';
      if (elAddr) elAddr.textContent = data.events.resepsi.venueAddress || '';
      if (elMaps && data.events.resepsi.mapsLink) elMaps.href = data.events.resepsi.mapsLink;

      if (elBtnCal) {
        elBtnCal.onclick = () => {
          saveToGoogleCalendar(
            `${data.events.resepsi.title} ${data.groom.shortName} & ${data.bride.shortName}`,
            data.events.resepsi.venueName,
            '20261025T040000Z',
            '20261025T100000Z'
          );
        };
      }
    }
  }

  // 5. Countdown Target
  restartCountdown(data.countdownTarget || '2026-10-25T08:00');

  // 6. Mukaddimah, Hikmah & Kisah
  if (data.story) {
    const qSurah = document.getElementById('quranSurahText');
    const qArab = document.getElementById('quranArabicText');
    const qMean = document.getElementById('quranMeaningText');
    const greet = document.getElementById('greetingText');

    if (qSurah) qSurah.textContent = data.story.quranSurah || '';
    if (qArab) qArab.textContent = data.story.quranArabic || '';
    if (qMean) qMean.textContent = data.story.quranMeaning || '';
    if (greet) {
      greet.innerHTML = `<strong>Assalamu’alaikum Warahmatullahi Wabarakatuh</strong><br>${escapeHtml(data.story.greeting || '').replace(/\n/g, '<br>')}`;
    }

    const hBody = document.getElementById('quoteHikmahBody');
    const hAuthor = document.getElementById('quoteHikmahAuthor');
    if (hBody) hBody.textContent = data.story.hikmahBody || '';
    if (hAuthor) hAuthor.textContent = data.story.hikmahAuthor || '';

    if (data.story.milestones && data.story.milestones.length >= 3) {
      const m1 = data.story.milestones[0];
      const m2 = data.story.milestones[1];
      const m3 = data.story.milestones[2];

      const y1 = document.getElementById('storyYear1');
      const t1 = document.getElementById('storyTitle1');
      const d1 = document.getElementById('storyDesc1');
      if (y1) y1.textContent = m1.year;
      if (t1) t1.textContent = m1.title;
      if (d1) d1.textContent = m1.desc;

      const y2 = document.getElementById('storyYear2');
      const t2 = document.getElementById('storyTitle2');
      const d2 = document.getElementById('storyDesc2');
      if (y2) y2.textContent = m2.year;
      if (t2) t2.textContent = m2.title;
      if (d2) d2.textContent = m2.desc;

      const y3 = document.getElementById('storyYear3');
      const t3 = document.getElementById('storyTitle3');
      const d3 = document.getElementById('storyDesc3');
      if (y3) y3.textContent = m3.year;
      if (t3) t3.textContent = m3.title;
      if (d3) d3.textContent = m3.desc;
    }
  }

  // 7. Amplop Digital & Alamat
  if (data.envelope) {
    const b1Name = document.getElementById('bank1Name');
    const b1Num = document.getElementById('bank1Number');
    const b1Holder = document.getElementById('bank1Holder');
    const btnCopy1 = document.getElementById('btnCopyBank1');

    if (b1Name) b1Name.textContent = data.envelope.bank1Name || '';
    if (b1Num) b1Num.textContent = data.envelope.bank1Number || '';
    if (b1Holder) b1Holder.textContent = data.envelope.bank1Holder || '';
    if (btnCopy1) {
      btnCopy1.onclick = () => copyAccountNumber(data.envelope.bank1Number, data.envelope.bank1Name);
    }

    const b2Name = document.getElementById('bank2Name');
    const b2Num = document.getElementById('bank2Number');
    const b2Holder = document.getElementById('bank2Holder');
    const btnCopy2 = document.getElementById('btnCopyBank2');

    if (b2Name) b2Name.textContent = data.envelope.bank2Name || '';
    if (b2Num) b2Num.textContent = data.envelope.bank2Number || '';
    if (b2Holder) b2Holder.textContent = data.envelope.bank2Holder || '';
    if (btnCopy2) {
      btnCopy2.onclick = () => copyAccountNumber(data.envelope.bank2Number, data.envelope.bank2Name);
    }

    const addrEl = document.getElementById('homeAddress');
    const btnAddr = document.getElementById('btnCopyAddress');
    if (addrEl) addrEl.textContent = data.envelope.homeAddress || '';
    if (btnAddr) {
      btnAddr.onclick = () => copyAddressText(data.envelope.homeAddress);
    }
  }

  // 8. Closing Section
  const closeFamGroom = document.getElementById('closingFamilyGroom');
  if (closeFamGroom && data.groom) {
    closeFamGroom.textContent = `Keluarga Besar ${data.groom.father} & ${data.groom.mother}`;
  }

  const closeFamBride = document.getElementById('closingFamilyBride');
  if (closeFamBride && data.bride) {
    closeFamBride.textContent = `Keluarga Besar ${data.bride.father} & ${data.bride.mother}`;
  }

  const closeCouple = document.getElementById('closingCoupleNames');
  if (closeCouple && data.groom && data.bride) {
    closeCouple.textContent = `Kang ${data.groom.shortName} & Ning ${data.bride.shortName}`;
  }

  const copyrightEl = document.getElementById('footerCopyright');
  if (copyrightEl && data.groom && data.bride) {
    copyrightEl.textContent = `© 2026 Walimatul 'Urs ${data.groom.shortName} & ${data.bride.shortName}`;
  }
}

/* ===================================================================
   1. NAMA TAMU DINAMIS (URL PARAMETER)
   =================================================================== */
function initGuestName() {
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get('to') || urlParams.get('u') || urlParams.get('nama');
  
  const guestCoverEl = document.getElementById('guestNameCover');
  const senderInputEl = document.getElementById('senderName');

  if (guest && guest.trim() !== '') {
    const formattedName = decodeURIComponent(guest).replace(/\+/g, ' ');
    if (guestCoverEl) guestCoverEl.textContent = formattedName;
    if (senderInputEl) senderInputEl.value = formattedName;
  }
}

/* ===================================================================
   2. BUKA UNDANGAN TRANSISI
   =================================================================== */
function initInvitationOpener() {
  const openBtn = document.getElementById('openInvitationBtn');
  const coverEl = document.getElementById('welcomeCover');
  const mainApp = document.getElementById('mainApp');

  if (!openBtn || !coverEl) return;

  openBtn.addEventListener('click', () => {
    // Play sound / start audio
    playBgm();

    // Fade out cover
    coverEl.classList.add('opened');

    // Reveal main app
    if (mainApp) {
      mainApp.classList.remove('hidden-initial');
    }

    // Scroll to hero
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  });
}

/* ===================================================================
   3. BACKGROUND MUSIC & WEB AUDIO SYNTHESIZER
   =================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let synthInterval = null;

function initAudioPlayer() {
  const musicBtn = document.getElementById('musicController');
  if (musicBtn) {
    musicBtn.addEventListener('click', toggleBgm);
  }
}

function toggleBgm() {
  if (isAudioPlaying) {
    pauseBgm();
  } else {
    playBgm();
  }
}

function playBgm() {
  const audioEl = document.getElementById('weddingBgm');
  
  if (audioEl && audioEl.src && audioEl.src.endsWith('.mp3')) {
    audioEl.play().then(() => {
      isAudioPlaying = true;
      updateMusicUI(true);
    }).catch(() => {
      startAmbientSynth();
    });
  } else {
    startAmbientSynth();
  }

  isAudioPlaying = true;
  updateMusicUI(true);
}

function pauseBgm() {
  const audioEl = document.getElementById('weddingBgm');
  if (audioEl && !audioEl.paused) {
    audioEl.pause();
  }
  
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
  
  isAudioPlaying = false;
  updateMusicUI(false);
}

function updateMusicUI(playing) {
  const vinylDisc = document.getElementById('vinylDisc');
  const musicWave = document.getElementById('musicWave');

  if (playing) {
    vinylDisc?.classList.add('playing');
    musicWave?.classList.add('active');
  } else {
    vinylDisc?.classList.remove('playing');
    musicWave?.classList.remove('active');
  }
}

function startAmbientSynth() {
  if (synthInterval) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  
  if (!audioCtx) {
    audioCtx = new AudioContext();
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const notes = [
    293.66, 329.63, 349.23, 392.00, 440.00, 466.16, 523.25, 587.33,
    659.25, 698.46, 783.99, 880.00
  ];
  
  const pattern = [0, 3, 4, 6, 7, 4, 3, 1, 0, 4, 5, 7, 9, 7, 5, 4];
  let step = 0;

  function playNote() {
    if (!isAudioPlaying || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      const freq = notes[pattern[step % pattern.length]];
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 1.8);

      if (step % 4 === 0) {
        const bassOsc = audioCtx.createOscillator();
        const bassGain = audioCtx.createGain();
        bassOsc.type = 'sine';
        bassOsc.frequency.setValueAtTime(notes[0] / 2, audioCtx.currentTime);
        bassGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5);
        bassOsc.connect(bassGain);
        bassGain.connect(audioCtx.destination);
        bassOsc.start(audioCtx.currentTime);
        bassOsc.stop(audioCtx.currentTime + 2.6);
      }

      step++;
    } catch (e) {
      console.warn('Audio synthesis issue:', e);
    }
  }

  playNote();
  synthInterval = setInterval(playNote, 750);
}

/* ===================================================================
   4. COUNTDOWN TIMER DINAMIS
   =================================================================== */
function restartCountdown(isoTarget) {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  const targetDate = new Date(isoTarget).getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

/* ===================================================================
   5. BUKU TAMU & RSVP (LOCALSTORAGE)
   =================================================================== */
const DEFAULT_WISHES = [
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

function initRsvpAndWishes() {
  const form = document.getElementById('rsvpForm');
  const wishesList = document.getElementById('wishesList');
  const badge = document.getElementById('wishesCountBadge');

  let storedWishes = JSON.parse(localStorage.getItem('wedding_santri_wishes'));
  if (!storedWishes || storedWishes.length === 0) {
    storedWishes = DEFAULT_WISHES;
    localStorage.setItem('wedding_santri_wishes', JSON.stringify(storedWishes));
  }

  function renderWishes() {
    if (!wishesList) return;
    wishesList.innerHTML = '';

    storedWishes.forEach(item => {
      let statusClass = 'status-hadir';
      let statusText = 'Insya Allah Hadir';

      if (item.status === 'Masih Ragu') {
        statusClass = 'status-ragu';
        statusText = 'Belum Pasti';
      } else if (item.status === 'Berhalangan') {
        statusClass = 'status-berhalangan';
        statusText = 'Berhalangan';
      }

      const itemEl = document.createElement('div');
      itemEl.className = 'wish-item';
      itemEl.innerHTML = `
        <div class="wish-top">
          <span class="wish-author">${escapeHtml(item.name)}</span>
          <span class="wish-status ${statusClass}"><i class="fa-solid fa-circle-check"></i> ${statusText}</span>
        </div>
        <p class="wish-msg">${escapeHtml(item.message)}</p>
        <span class="wish-time"><i class="fa-regular fa-clock"></i> ${escapeHtml(item.time || 'Baru saja')}</span>
      `;
      wishesList.appendChild(itemEl);
    });

    if (badge) {
      badge.textContent = `${storedWishes.length} Doa Tersimpan`;
    }
  }

  renderWishes();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const status = document.getElementById('attendanceStatus').value;
      const count = document.getElementById('guestCount').value;
      const message = document.getElementById('blessingMessage').value.trim();

      if (!name || !message) return;

      const newWish = {
        name,
        status,
        count,
        message,
        time: 'Baru saja'
      };

      storedWishes.unshift(newWish);
      localStorage.setItem('wedding_santri_wishes', JSON.stringify(storedWishes));
      renderWishes();

      showToast('Jazakumullah khairan! Doa dan konfirmasi kehadiran Anda telah tersimpan.');
      document.getElementById('blessingMessage').value = '';
    });
  }
}

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/* ===================================================================
   6. SALIN NOMOR REKENING & ALAMAT
   =================================================================== */
function copyAccountNumber(accountNumber, bankName) {
  const text = String(accountNumber || '');
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Nomor Rekening ${bankName} (${text}) berhasil disalin!`);
  }).catch(() => {
    fallbackCopyText(text);
    showToast(`Nomor Rekening ${bankName} (${text}) disalin!`);
  });
}

function copyAddressText(customAddress) {
  const address = customAddress || document.getElementById('homeAddress')?.textContent || '';
  navigator.clipboard.writeText(address).then(() => {
    showToast('Alamat pengiriman bingkisan berhasil disalin!');
  }).catch(() => {
    fallbackCopyText(address);
    showToast('Alamat pengiriman berhasil disalin!');
  });
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ===================================================================
   7. GOOGLE CALENDAR HELPER
   =================================================================== */
function saveToGoogleCalendar(title, location, startIso, endIso) {
  const details = "Walimatul 'Urs. Semoga Allah memberkahi ikatan suci ini.";
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  window.open(url, '_blank');
}

/* ===================================================================
   8. LIGHTBOX PREVIEW GALERI
   =================================================================== */
function openLightbox(imgSrc, caption) {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = caption || '';
  modal.classList.add('active');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeEditorModal();
  }
});

/* ===================================================================
   9. NATURE CANVAS EFFECT (LEAVES & PETALS)
   =================================================================== */
function initNatureCanvas() {
  const canvas = document.getElementById('natureCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const total = window.innerWidth < 768 ? 18 : 32;

  const colors = [
    'rgba(72, 133, 98, 0.45)',
    'rgba(45, 106, 79, 0.40)',
    'rgba(212, 175, 55, 0.40)',
    'rgba(245, 228, 159, 0.45)',
    'rgba(180, 205, 185, 0.35)'
  ];

  for (let i = 0; i < total; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.7 + 0.4,
      speedX: Math.random() * 0.5 - 0.25,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: Math.random() > 0.5 ? 'leaf' : 'petal'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      ctx.beginPath();
      if (p.type === 'leaf') {
        ctx.ellipse(0, 0, p.size, p.size / 2.2, 0, 0, Math.PI * 2);
      } else {
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.restore();

      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.015) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ===================================================================
   10. SCROLLSPY
   =================================================================== */
function initScrollSpy() {
  const navItems = document.querySelectorAll('.bottom-navbar .nav-item');
  const sections = ['hero', 'mempelai', 'acara', 'kisah', 'galeri', 'rsvp'];

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset + 250;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const h = el.offsetHeight;
        if (scrollY >= top && scrollY < top + h) {
          current = id;
        }
      }
    });

    if (current) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === current) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ===================================================================
   11. CONTROLLER PANEL UBAH DATA (EDITOR DRAWER & GUEST GENERATOR)
   =================================================================== */
function initEditorPanel() {
  const btnOpen = document.getElementById('btnOpenEditor');
  const btnClose = document.getElementById('btnCloseEditor');
  const btnCancel = document.getElementById('btnCancelEditor');
  const btnSave = document.getElementById('btnSaveEditor');
  const btnReset = document.getElementById('btnResetDefault');
  const btnResetFooter = document.getElementById('btnResetInFooter');
  const modal = document.getElementById('editorModal');
  const backdrop = document.getElementById('editorBackdrop');
  const tabBtns = document.querySelectorAll('.editor-tab-btn');
  const tabPanes = document.querySelectorAll('.editor-tab-pane');

  // Trigger Open
  if (btnOpen) {
    btnOpen.addEventListener('click', openEditorModal);
  }

  // Trigger Close
  if (btnClose) btnClose.addEventListener('click', closeEditorModal);
  if (btnCancel) btnCancel.addEventListener('click', closeEditorModal);
  if (backdrop) backdrop.addEventListener('click', closeEditorModal);

  // Tabs Switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Realtime image preview inputs
  bindImagePreview('editCoverImgUrl', 'previewCoverImg');
  bindImagePreview('editHeroBgUrl', 'previewHeroBgImg');
  bindImagePreview('editGroomImgUrl', 'previewGroomImg');
  bindImagePreview('editBrideImgUrl', 'previewBrideImg');

  // Save Event
  if (btnSave) {
    btnSave.addEventListener('click', handleSaveEditor);
  }

  // Reset Events
  if (btnReset) btnReset.addEventListener('click', handleResetDefault);
  if (btnResetFooter) btnResetFooter.addEventListener('click', handleResetDefault);

  // Backup JSON Export & Import
  const btnExport = document.getElementById('btnExportJson');
  if (btnExport) {
    btnExport.addEventListener('click', handleExportJson);
  }

  const inputImport = document.getElementById('inputImportJson');
  if (inputImport) {
    inputImport.addEventListener('change', handleImportJson);
  }

  // Guest Generator
  initGuestLinkGenerator();
}

function bindImagePreview(inputId, imgId) {
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);
  if (input && img) {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        img.src = input.value.trim();
      }
    });
  }
}

function openEditorModal() {
  const modal = document.getElementById('editorModal');
  if (!modal) return;

  populateEditorForm(activeWeddingData);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEditorModal() {
  const modal = document.getElementById('editorModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function populateEditorForm(data) {
  if (!data) return;

  // Tab 1: General & Cover
  setVal('editCoverSubheading', data.general?.coverSubheading);
  setVal('editCoverBlessing', data.general?.coverBlessing);
  setVal('editHeroBadge', data.general?.heroBadge);
  setVal('editHeroDate', data.general?.heroDate);
  setVal('editHeroLocation', data.general?.heroLocation);
  setVal('editCoverImgUrl', data.general?.coverImg);
  setVal('editHeroBgUrl', data.general?.heroBgImg);
  setImgSrc('previewCoverImg', data.general?.coverImg);
  setImgSrc('previewHeroBgImg', data.general?.heroBgImg);

  // Tab 2: Groom
  setVal('editGroomShortName', data.groom?.shortName);
  setVal('editGroomRoleBadge', data.groom?.roleBadge);
  setVal('editGroomFullName', data.groom?.fullName);
  setVal('editGroomFather', data.groom?.father);
  setVal('editGroomMother', data.groom?.mother);
  setVal('editGroomPesantren', data.groom?.pesantren);
  setVal('editGroomInsta', data.groom?.instaUser);
  setVal('editGroomInstaLink', data.groom?.instaLink);
  setVal('editGroomImgUrl', data.groom?.img);
  setImgSrc('previewGroomImg', data.groom?.img);

  // Tab 3: Bride
  setVal('editBrideShortName', data.bride?.shortName);
  setVal('editBrideRoleBadge', data.bride?.roleBadge);
  setVal('editBrideFullName', data.bride?.fullName);
  setVal('editBrideFather', data.bride?.father);
  setVal('editBrideMother', data.bride?.mother);
  setVal('editBridePesantren', data.bride?.pesantren);
  setVal('editBrideInsta', data.bride?.instaUser);
  setVal('editBrideInstaLink', data.bride?.instaLink);
  setVal('editBrideImgUrl', data.bride?.img);
  setImgSrc('previewBrideImg', data.bride?.img);

  // Tab 4: Events & Countdown
  setVal('editCountdownTarget', data.countdownTarget || '2026-10-25T08:00');
  
  setVal('editAkadTitle', data.events?.akad?.title);
  setVal('editAkadDate', data.events?.akad?.date);
  setVal('editAkadTime', data.events?.akad?.time);
  setVal('editAkadVenue', data.events?.akad?.venueName);
  setVal('editAkadAddress', data.events?.akad?.venueAddress);
  setVal('editAkadMaps', data.events?.akad?.mapsLink);

  setVal('editResepsiTitle', data.events?.resepsi?.title);
  setVal('editResepsiDate', data.events?.resepsi?.date);
  setVal('editResepsiTime', data.events?.resepsi?.time);
  setVal('editResepsiVenue', data.events?.resepsi?.venueName);
  setVal('editResepsiAddress', data.events?.resepsi?.venueAddress);
  setVal('editResepsiMaps', data.events?.resepsi?.mapsLink);

  // Tab 5: Story & Ayat
  setVal('editQuranSurah', data.story?.quranSurah);
  setVal('editQuranArabic', data.story?.quranArabic);
  setVal('editQuranMeaning', data.story?.quranMeaning);
  setVal('editGreetingText', data.story?.greeting);

  setVal('editHikmahBody', data.story?.hikmahBody);
  setVal('editHikmahAuthor', data.story?.hikmahAuthor);

  if (data.story?.milestones) {
    setVal('editStoryYear1', data.story.milestones[0]?.year);
    setVal('editStoryTitle1', data.story.milestones[0]?.title);
    setVal('editStoryDesc1', data.story.milestones[0]?.desc);

    setVal('editStoryYear2', data.story.milestones[1]?.year);
    setVal('editStoryTitle2', data.story.milestones[1]?.title);
    setVal('editStoryDesc2', data.story.milestones[1]?.desc);

    setVal('editStoryYear3', data.story.milestones[2]?.year);
    setVal('editStoryTitle3', data.story.milestones[2]?.title);
    setVal('editStoryDesc3', data.story.milestones[2]?.desc);
  }

  // Tab 6: Envelope
  setVal('editBank1Name', data.envelope?.bank1Name);
  setVal('editBank1Number', data.envelope?.bank1Number);
  setVal('editBank1Holder', data.envelope?.bank1Holder);

  setVal('editBank2Name', data.envelope?.bank2Name);
  setVal('editBank2Number', data.envelope?.bank2Number);
  setVal('editBank2Holder', data.envelope?.bank2Holder);

  setVal('editHomeAddress', data.envelope?.homeAddress);

  // Update guest generator default
  updateGuestGeneratorPreview();
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function setImgSrc(id, src) {
  const el = document.getElementById(id);
  if (el && src) el.src = src;
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function handleSaveEditor() {
  const updatedData = {
    general: {
      pageTitle: `Undangan Pernikahan | ${getVal('editGroomShortName') || 'Farhan'} & ${getVal('editBrideShortName') || 'Fatimah'} (Tema Santri & Alam)`,
      metaDescription: `Walimatul 'Urs ${getVal('editGroomFullName')} & ${getVal('editBrideFullName')}`,
      coverSubheading: getVal('editCoverSubheading'),
      coverBlessing: getVal('editCoverBlessing'),
      coverImg: getVal('editCoverImgUrl') || activeWeddingData.general.coverImg,
      heroBgImg: getVal('editHeroBgUrl') || activeWeddingData.general.heroBgImg,
      heroBadge: getVal('editHeroBadge'),
      heroDate: getVal('editHeroDate'),
      heroLocation: getVal('editHeroLocation')
    },
    groom: {
      shortName: getVal('editGroomShortName'),
      roleBadge: getVal('editGroomRoleBadge'),
      fullName: getVal('editGroomFullName'),
      father: getVal('editGroomFather'),
      mother: getVal('editGroomMother'),
      pesantren: getVal('editGroomPesantren'),
      instaUser: getVal('editGroomInsta'),
      instaLink: getVal('editGroomInstaLink'),
      img: getVal('editGroomImgUrl') || activeWeddingData.groom.img
    },
    bride: {
      shortName: getVal('editBrideShortName'),
      roleBadge: getVal('editBrideRoleBadge'),
      fullName: getVal('editBrideFullName'),
      father: getVal('editBrideFather'),
      mother: getVal('editBrideMother'),
      pesantren: getVal('editBridePesantren'),
      instaUser: getVal('editBrideInsta'),
      instaLink: getVal('editBrideInstaLink'),
      img: getVal('editBrideImgUrl') || activeWeddingData.bride.img
    },
    countdownTarget: getVal('editCountdownTarget') || '2026-10-25T08:00',
    events: {
      akad: {
        title: getVal('editAkadTitle'),
        date: getVal('editAkadDate'),
        time: getVal('editAkadTime'),
        venueName: getVal('editAkadVenue'),
        venueAddress: getVal('editAkadAddress'),
        mapsLink: getVal('editAkadMaps')
      },
      resepsi: {
        title: getVal('editResepsiTitle'),
        date: getVal('editResepsiDate'),
        time: getVal('editResepsiTime'),
        venueName: getVal('editResepsiVenue'),
        venueAddress: getVal('editResepsiAddress'),
        mapsLink: getVal('editResepsiMaps')
      }
    },
    story: {
      quranSurah: getVal('editQuranSurah'),
      quranArabic: getVal('editQuranArabic'),
      quranMeaning: getVal('editQuranMeaning'),
      greeting: getVal('editGreetingText'),
      hikmahBody: getVal('editHikmahBody'),
      hikmahAuthor: getVal('editHikmahAuthor'),
      milestones: [
        {
          year: getVal('editStoryYear1'),
          title: getVal('editStoryTitle1'),
          desc: getVal('editStoryDesc1')
        },
        {
          year: getVal('editStoryYear2'),
          title: getVal('editStoryTitle2'),
          desc: getVal('editStoryDesc2')
        },
        {
          year: getVal('editStoryYear3'),
          title: getVal('editStoryTitle3'),
          desc: getVal('editStoryDesc3')
        }
      ]
    },
    envelope: {
      bank1Name: getVal('editBank1Name'),
      bank1Number: getVal('editBank1Number'),
      bank1Holder: getVal('editBank1Holder'),
      bank2Name: getVal('editBank2Name'),
      bank2Number: getVal('editBank2Number'),
      bank2Holder: getVal('editBank2Holder'),
      homeAddress: getVal('editHomeAddress')
    }
  };

  saveWeddingData(updatedData);
  closeEditorModal();
  showToast('Alhamdulillah! Seluruh data undangan berhasil disimpan & diperbarui.');
}

function handleResetDefault() {
  if (confirm('Apakah Anda yakin ingin mengembalikan seluruh data undangan ke format bawaan awal?')) {
    localStorage.removeItem(STORAGE_KEY);
    activeWeddingData = JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
    applyWeddingData(activeWeddingData);
    populateEditorForm(activeWeddingData);
    showToast('Data undangan telah di-reset ke bawaan santri awal.');
  }
}

function handleExportJson() {
  const jsonStr = JSON.stringify(activeWeddingData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `undangan_pernikahan_${activeWeddingData.groom?.shortName || 'farhan'}_${activeWeddingData.bride?.shortName || 'fatimah'}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('File cadangan JSON berhasil diunduh!');
}

function handleImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedData = JSON.parse(event.target.result);
      if (importedData && (importedData.groom || importedData.general)) {
        saveWeddingData(importedData);
        populateEditorForm(importedData);
        showToast('Berhasil memuat konfigurasi dari file JSON!');
      } else {
        alert('Format file JSON tidak valid untuk undangan ini.');
      }
    } catch (err) {
      alert('Gagal membaca file JSON. Pastikan file valid.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

/* ===================================================================
   12. GENERATOR LINK TAMU UNDANGAN (WHATSAPP & CLIPBOARD)
   =================================================================== */
function initGuestLinkGenerator() {
  const inputGuest = document.getElementById('inputGenGuestName');
  const btnCopy = document.getElementById('btnCopyGenUrl');
  const btnWa = document.getElementById('btnShareGenWa');

  if (inputGuest) {
    inputGuest.addEventListener('input', updateGuestGeneratorPreview);
  }

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const url = getGeneratedGuestUrl();
      navigator.clipboard.writeText(url).then(() => {
        showToast('Tautan undangan khusus tamu berhasil disalin!');
      }).catch(() => {
        fallbackCopyText(url);
        showToast('Tautan undangan berhasil disalin!');
      });
    });
  }

  if (btnWa) {
    btnWa.addEventListener('click', () => {
      const guestName = document.getElementById('inputGenGuestName')?.value.trim() || 'Sahabat & Kerabat';
      const url = getGeneratedGuestUrl();
      const groom = activeWeddingData?.groom?.shortName || 'Farhan';
      const bride = activeWeddingData?.bride?.shortName || 'Fatimah';

      const waText = 
`Assalamu’alaikum Warahmatullahi Wabarakatuh.

Kepada Yth. Bapak/Ibu/Saudara/i:
*${guestName}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk hadir serta memberikan doa restu pada hari bahagia pernikahan kami:

*Walimatul 'Urs ${groom} & ${bride}*

Silakan buka tautan undangan digital di bawah ini untuk melihat agenda acara & lokasi:
${url}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.

Jazakumullahu Khairan Katsiran.
Wassalamu’alaikum Warahmatullahi Wabarakatuh.`;

      const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
      window.open(waLink, '_blank');
    });
  }

  updateGuestGeneratorPreview();
}

function getGeneratedGuestUrl() {
  const inputGuest = document.getElementById('inputGenGuestName');
  const name = inputGuest ? inputGuest.value.trim() : '';

  const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  if (name) {
    return `${baseUrl}?to=${encodeURIComponent(name).replace(/%20/g, '+')}`;
  }
  return baseUrl;
}

function updateGuestGeneratorPreview() {
  const previewEl = document.getElementById('previewGenUrl');
  if (previewEl) {
    previewEl.textContent = getGeneratedGuestUrl();
  }
}
