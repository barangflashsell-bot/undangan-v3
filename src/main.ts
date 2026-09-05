/**
 * Main TypeScript Entry Point
 * Undangan Pernikahan Santri V3
 */

import type { WeddingData } from './types/wedding';
import { loadWeddingData, initEditorPanel } from './modules/editor';
import { initAudioPlayer, playBgm } from './modules/audio';
import { initNatureCanvas } from './modules/canvas';
import { restartCountdown } from './modules/countdown';
import { initRsvpAndWishes, showToast, escapeHtml } from './modules/rsvp';
import { initGuestLinkGenerator } from './modules/guestGenerator';

let currentData: WeddingData;

document.addEventListener('DOMContentLoaded', () => {
  currentData = loadWeddingData();
  applyWeddingData(currentData);

  initGuestName();
  initInvitationOpener();
  initAudioPlayer();
  initNatureCanvas();
  initRsvpAndWishes();
  initScrollSpy();
  
  initEditorPanel(
    () => currentData,
    (updated) => {
      currentData = updated;
      applyWeddingData(updated);
    }
  );

  initGuestLinkGenerator(() => currentData);
  setupWindowHelpers();
});

/* ===================================================================
   DOM BINDING DENGAN STRICT TYPES
   =================================================================== */
function applyWeddingData(data: WeddingData): void {
  if (!data) return;

  // 1. General & Cover
  if (data.general) {
    if (data.general.pageTitle) {
      document.title = data.general.pageTitle;
      const ptEl = document.getElementById('pageTitle');
      if (ptEl) ptEl.textContent = data.general.pageTitle;
    }

    const coverSubEl = document.getElementById('coverSubheading');
    if (coverSubEl) coverSubEl.textContent = data.general.coverSubheading || "WALIMATUL 'URS";

    const coverBlessingEl = document.getElementById('coverBlessingQuote');
    if (coverBlessingEl) {
      coverBlessingEl.innerHTML = `<i class="fa-solid fa-leaf"></i> ${escapeHtml(data.general.coverBlessing || '')} <i class="fa-solid fa-leaf"></i>`;
    }

    const coverImgEl = document.getElementById('coverCoupleImg') as HTMLImageElement | null;
    if (coverImgEl && data.general.coverImg) {
      coverImgEl.src = data.general.coverImg;
    }

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

    const heroBgEl = document.getElementById('heroBgImg') as HTMLImageElement | null;
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

    const groomImgEl = document.getElementById('groomImg') as HTMLImageElement | null;
    if (groomImgEl && data.groom.img) groomImgEl.src = data.groom.img;

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

    const groomInstaLinkEl = document.getElementById('groomInstaLink') as HTMLAnchorElement | null;
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

    const brideImgEl = document.getElementById('brideImg') as HTMLImageElement | null;
    if (brideImgEl && data.bride.img) brideImgEl.src = data.bride.img;

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

    const brideInstaLinkEl = document.getElementById('brideInstaLink') as HTMLAnchorElement | null;
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
      const elMaps = document.getElementById('akadMapsLink') as HTMLAnchorElement | null;
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
      const elMaps = document.getElementById('resepsiMapsLink') as HTMLAnchorElement | null;
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
      const [m1, m2, m3] = data.story.milestones;

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
   HELPER UTILITY WINDOW FUNCTIONS
   =================================================================== */
function setupWindowHelpers(): void {
  (window as unknown as { openLightbox: (src: string, cap: string) => void }).openLightbox = openLightbox;
  (window as unknown as { closeLightbox: () => void }).closeLightbox = closeLightbox;
  (window as unknown as { copyAccountNumber: (num: string, bank: string) => void }).copyAccountNumber = copyAccountNumber;
  (window as unknown as { copyAddressText: (addr?: string) => void }).copyAddressText = copyAddressText;
  (window as unknown as { saveToGoogleCalendar: (t: string, l: string, s: string, e: string) => void }).saveToGoogleCalendar = saveToGoogleCalendar;
}

function initGuestName(): void {
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get('to') || urlParams.get('u') || urlParams.get('nama');
  
  const guestCoverEl = document.getElementById('guestNameCover');
  const senderInputEl = document.getElementById('senderName') as HTMLInputElement | null;

  if (guest && guest.trim() !== '') {
    const formattedName = decodeURIComponent(guest).replace(/\+/g, ' ');
    if (guestCoverEl) guestCoverEl.textContent = formattedName;
    if (senderInputEl) senderInputEl.value = formattedName;
  }
}

function initInvitationOpener(): void {
  const openBtn = document.getElementById('openInvitationBtn');
  const coverEl = document.getElementById('welcomeCover');
  const mainApp = document.getElementById('mainApp');

  if (!openBtn || !coverEl) return;

  openBtn.addEventListener('click', () => {
    playBgm();
    coverEl.classList.add('opened');
    if (mainApp) mainApp.classList.remove('hidden-initial');

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  });
}

function copyAccountNumber(accountNumber: string, bankName: string): void {
  const text = String(accountNumber || '');
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Nomor Rekening ${bankName} (${text}) berhasil disalin!`);
  }).catch(() => {
    fallbackCopyText(text);
    showToast(`Nomor Rekening ${bankName} (${text}) disalin!`);
  });
}

function copyAddressText(customAddress?: string): void {
  const address = customAddress || document.getElementById('homeAddress')?.textContent || '';
  navigator.clipboard.writeText(address).then(() => {
    showToast('Alamat pengiriman bingkisan berhasil disalin!');
  }).catch(() => {
    fallbackCopyText(address);
    showToast('Alamat pengiriman berhasil disalin!');
  });
}

function fallbackCopyText(text: string): void {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function saveToGoogleCalendar(title: string, location: string, startIso: string, endIso: string): void {
  const details = "Walimatul 'Urs. Semoga Allah memberkahi ikatan suci ini.";
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  window.open(url, '_blank');
}

function openLightbox(imgSrc: string, caption: string): void {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg') as HTMLImageElement | null;
  const modalCaption = document.getElementById('lightboxCaption');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = caption || '';
  modal.classList.add('active');
}

function closeLightbox(): void {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

function initScrollSpy(): void {
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
