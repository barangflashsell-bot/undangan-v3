/**
 * Modul Editor Panel Drawer & Penyimpanan Konfigurasi
 */
import type { WeddingData } from '../types/wedding';
import { DEFAULT_WEDDING_DATA } from '../data/defaultData';
import { showToast } from './rsvp';
import { updateGuestGeneratorPreview } from './guestGenerator';

export const STORAGE_KEY = 'wedding_syari_nasional_v3';

export function loadWeddingData(): WeddingData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return deepMerge(DEFAULT_WEDDING_DATA, parsed);
    }
  } catch (e) {
    console.error("Gagal memuat data dari localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
}

export function saveWeddingData(data: WeddingData, onUpdated: (data: WeddingData) => void): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    onUpdated(data);
  } catch (e) {
    console.error("Gagal menyimpan data ke localStorage:", e);
  }
}

function deepMerge<T>(target: T, source: Record<string, any>): T {
  const result = JSON.parse(JSON.stringify(target)) as Record<string, any>;
  if (!source || typeof source !== 'object') return result as T;
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        result[key] || {},
        source[key]
      );
    } else {
      result[key] = source[key];
    }
  }
  return result as T;
}

export function initEditorPanel(
  getActiveData: () => WeddingData,
  onSave: (data: WeddingData) => void
): void {
  const btnOpen = document.getElementById('btnOpenEditor');
  const btnClose = document.getElementById('btnCloseEditor');
  const btnCancel = document.getElementById('btnCancelEditor');
  const btnSave = document.getElementById('btnSaveEditor');
  const btnReset = document.getElementById('btnResetDefault');
  const btnResetFooter = document.getElementById('btnResetInFooter');
  const backdrop = document.getElementById('editorBackdrop');
  const tabBtns = document.querySelectorAll('.editor-tab-btn');
  const tabPanes = document.querySelectorAll('.editor-tab-pane');

  if (btnOpen) {
    btnOpen.addEventListener('click', () => openEditorModal(getActiveData()));
  }

  if (btnClose) btnClose.addEventListener('click', closeEditorModal);
  if (btnCancel) btnCancel.addEventListener('click', closeEditorModal);
  if (backdrop) backdrop.addEventListener('click', closeEditorModal);

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      if (targetTabId) {
        const targetPane = document.getElementById(targetTabId);
        if (targetPane) targetPane.classList.add('active');
      }
    });
  });

  bindImagePreview('editCoverImgUrl', 'previewCoverImg');
  bindImagePreview('editHeroBgUrl', 'previewHeroBgImg');
  bindImagePreview('editGroomImgUrl', 'previewGroomImg');
  bindImagePreview('editBrideImgUrl', 'previewBrideImg');

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const updated = collectFormData(getActiveData());
      saveWeddingData(updated, onSave);
      closeEditorModal();
      showToast('Alhamdulillah! Seluruh data undangan berhasil disimpan & diperbarui.');
    });
  }

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan seluruh data undangan ke format bawaan awal?')) {
      localStorage.removeItem(STORAGE_KEY);
      const defaultClone = JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
      onSave(defaultClone);
      populateEditorForm(defaultClone);
      showToast('Data undangan telah di-reset ke bawaan awal.');
    }
  };

  if (btnReset) btnReset.addEventListener('click', handleReset);
  if (btnResetFooter) btnResetFooter.addEventListener('click', handleReset);

  const btnExport = document.getElementById('btnExportJson');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const data = getActiveData();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `undangan_pernikahan_${data.groom.shortName}_${data.bride.shortName}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('File cadangan JSON berhasil diunduh!');
    });
  }

  const inputImport = document.getElementById('inputImportJson') as HTMLInputElement | null;
  if (inputImport) {
    inputImport.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        try {
          const content = event.target?.result as string;
          const importedData = JSON.parse(content) as WeddingData;
          if (importedData && (importedData.groom || importedData.general)) {
            saveWeddingData(importedData, onSave);
            populateEditorForm(importedData);
            showToast('Berhasil memuat konfigurasi dari file JSON!');
          } else {
            alert('Format file JSON tidak valid untuk undangan ini.');
          }
        } catch {
          alert('Gagal membaca file JSON. Pastikan file valid.');
        }
      };
      reader.readAsText(file);
      target.value = '';
    });
  }
}

export function openEditorModal(data: WeddingData): void {
  const modal = document.getElementById('editorModal');
  if (!modal) return;

  populateEditorForm(data);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeEditorModal(): void {
  const modal = document.getElementById('editorModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function bindImagePreview(inputId: string, imgId: string): void {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  const img = document.getElementById(imgId) as HTMLImageElement | null;
  if (input && img) {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        img.src = input.value.trim();
      }
    });
  }
}

export function populateEditorForm(data: WeddingData): void {
  if (!data) return;

  setVal('editCoverSubheading', data.general?.coverSubheading);
  setVal('editCoverBlessing', data.general?.coverBlessing);
  setVal('editHeroBadge', data.general?.heroBadge);
  setVal('editHeroDate', data.general?.heroDate);
  setVal('editHeroLocation', data.general?.heroLocation);
  setVal('editCoverImgUrl', data.general?.coverImg);
  setVal('editHeroBgUrl', data.general?.heroBgImg);
  setImgSrc('previewCoverImg', data.general?.coverImg);
  setImgSrc('previewHeroBgImg', data.general?.heroBgImg);

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

  setVal('editBank1Name', data.envelope?.bank1Name);
  setVal('editBank1Number', data.envelope?.bank1Number);
  setVal('editBank1Holder', data.envelope?.bank1Holder);

  setVal('editBank2Name', data.envelope?.bank2Name);
  setVal('editBank2Number', data.envelope?.bank2Number);
  setVal('editBank2Holder', data.envelope?.bank2Holder);

  setVal('editHomeAddress', data.envelope?.homeAddress);

  updateGuestGeneratorPreview();
}

function setVal(id: string, val: string | undefined): void {
  const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
  if (el) el.value = val || '';
}

function setImgSrc(id: string, src: string | undefined): void {
  const el = document.getElementById(id) as HTMLImageElement | null;
  if (el && src) el.src = src;
}

function getVal(id: string): string {
  const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
  return el ? el.value.trim() : '';
}

function collectFormData(activeData: WeddingData): WeddingData {
  return {
    general: {
      pageTitle: `Undangan Pernikahan | ${getVal('editGroomShortName') || 'Farhan'} & ${getVal('editBrideShortName') || 'Fatimah'} (Walimatul 'Urs Syar'i & Alam)`,
      metaDescription: `Walimatul 'Urs ${getVal('editGroomFullName')} & ${getVal('editBrideFullName')}`,
      coverSubheading: getVal('editCoverSubheading'),
      coverBlessing: getVal('editCoverBlessing'),
      coverImg: getVal('editCoverImgUrl') || activeData.general.coverImg,
      heroBgImg: getVal('editHeroBgUrl') || activeData.general.heroBgImg,
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
      img: getVal('editGroomImgUrl') || activeData.groom.img
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
      img: getVal('editBrideImgUrl') || activeData.bride.img
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
}
