/**
 * UNDANGAN PERNIKAHAN TEMA SANTRI & PEMANDANGAN ALAM
 * Farhan & Fatimah - Walimatul 'Urs
 */

document.addEventListener('DOMContentLoaded', () => {
  initGuestName();
  initInvitationOpener();
  initCountdown();
  initAudioPlayer();
  initNatureCanvas();
  initRsvpAndWishes();
  initScrollSpy();
});

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
  const vinylDisc = document.getElementById('vinylDisc');
  const musicWave = document.getElementById('musicWave');

  // Try playing audio element if loaded, else play peaceful harmonic synthesizer
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

// Gentle Santri Acoustic Harp / Oud Ambience Generator (Pentatonic Hijaz)
function startAmbientSynth() {
  if (synthInterval) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  
  if (!audioCtx) {
    audioCtx = new AudioContext();
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Melodic notes in Hz (D minor / Bayati serene scales: D, E, F, G, A, Bb, C, D)
  const notes = [
    293.66, 329.63, 349.23, 392.00, 440.00, 466.16, 523.25, 587.33,
    659.25, 698.46, 783.99, 880.00
  ];
  
  // Melody pattern sequence
  const pattern = [0, 3, 4, 6, 7, 4, 3, 1, 0, 4, 5, 7, 9, 7, 5, 4];
  let step = 0;

  function playNote() {
    if (!isAudioPlaying || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle'; // Soft, warm acoustic tone
      const freq = notes[pattern[step % pattern.length]];
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Smooth decay envelope like traditional plucked string / harp
      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 1.8);

      // Play soft bass root drone on every 4th beat
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
      console.warn('Audio synthesis note issue:', e);
    }
  }

  playNote();
  synthInterval = setInterval(playNote, 750);
}

/* ===================================================================
   4. COUNTDOWN TIMER HARI H
   =================================================================== */
function initCountdown() {
  // Target: 25 October 2026 08:00:00 WIB (UTC+7)
  const targetDate = new Date('2026-10-25T08:00:00+07:00').getTime();

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
  setInterval(update, 1000);
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

  // Load from localStorage or seed with default
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

      // Show toast
      showToast('Jazakumullah khairan! Doa dan konfirmasi kehadiran Anda telah tersimpan.');

      // Reset message box
      document.getElementById('blessingMessage').value = '';
    });
  }
}

function escapeHtml(text) {
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
   6. SALIN NOMOR REKENING & ALAMAT (CLIPBOARD & TOAST)
   =================================================================== */
function copyAccountNumber(accountNumber, bankName) {
  navigator.clipboard.writeText(accountNumber).then(() => {
    showToast(`Nomor Rekening ${bankName} (${accountNumber}) berhasil disalin!`);
  }).catch(() => {
    // Fallback
    fallbackCopyText(accountNumber);
    showToast(`Nomor Rekening ${bankName} disalin!`);
  });
}

function copyAddressText() {
  const address = `Komplek Ndalem Pondok Pesantren Al-Mubarokah, Jl. Lembah Pinus No. 09, Desa Wisata Asri, Kec. Bumiaji, Kota Batu, Jawa Timur 65331 (Penerima: Kang Farhan / Ning Fatimah - 0812-3456-7890)`;
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
  const details = "Walimatul 'Urs Muhammad Farhan Al-Hafidz & Siti Fatimah Az-Zahra. Semoga Allah memberkahi ikatan suci ini.";
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
  }
});

/* ===================================================================
   9. NATURE CANVAS EFFECT (FALLING GREEN LEAVES & PETALS)
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

  // Colors: delicate olive leaves & soft golden blossoms
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
        // Oval leaf shape
        ctx.ellipse(0, 0, p.size, p.size / 2.2, 0, 0, Math.PI * 2);
      } else {
        // Soft petal shape
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.restore();

      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.015) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      // Wrap around edges
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
   10. SCROLLSPY UNTUK BOTTOM NAVIGATION
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
