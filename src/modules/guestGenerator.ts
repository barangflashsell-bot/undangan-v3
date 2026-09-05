/**
 * Modul Pembuat Tautan Tamu & Kirim WhatsApp Otomatis
 */
import type { WeddingData } from '../types/wedding';
import { showToast } from './rsvp';

export function initGuestLinkGenerator(getData: () => WeddingData): void {
  const inputGuest = document.getElementById('inputGenGuestName') as HTMLInputElement | null;
  const btnCopy = document.getElementById('btnCopyGenUrl');
  const btnWa = document.getElementById('btnShareGenWa');

  if (inputGuest) {
    inputGuest.addEventListener('input', () => updateGuestGeneratorPreview());
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
      const guestName = (document.getElementById('inputGenGuestName') as HTMLInputElement | null)?.value.trim() || 'Sahabat & Kerabat';
      const url = getGeneratedGuestUrl();
      const currentData = getData();
      const groom = currentData?.groom?.shortName || 'Farhan';
      const bride = currentData?.bride?.shortName || 'Fatimah';

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

export function getGeneratedGuestUrl(): string {
  const inputGuest = document.getElementById('inputGenGuestName') as HTMLInputElement | null;
  const name = inputGuest ? inputGuest.value.trim() : '';

  const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  if (name) {
    return `${baseUrl}?to=${encodeURIComponent(name).replace(/%20/g, '+')}`;
  }
  return baseUrl;
}

export function updateGuestGeneratorPreview(): void {
  const previewEl = document.getElementById('previewGenUrl');
  if (previewEl) {
    previewEl.textContent = getGeneratedGuestUrl();
  }
}

export function fallbackCopyText(text: string): void {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
