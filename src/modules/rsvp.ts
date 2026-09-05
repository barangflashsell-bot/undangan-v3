/**
 * Modul Buku Tamu & RSVP (LocalStorage)
 */
import type { WishItem } from '../types/wedding';
import { DEFAULT_WISHES } from '../data/defaultData';

const WISHES_STORAGE_KEY = 'wedding_syari_nasional_wishes';

export function initRsvpAndWishes(): void {
  const form = document.getElementById('rsvpForm') as HTMLFormElement | null;
  const wishesList = document.getElementById('wishesList');
  const badge = document.getElementById('wishesCountBadge');

  let storedWishes: WishItem[] = [];
  try {
    const raw = localStorage.getItem(WISHES_STORAGE_KEY);
    storedWishes = raw ? JSON.parse(raw) : DEFAULT_WISHES;
  } catch {
    storedWishes = DEFAULT_WISHES;
  }

  if (!storedWishes || storedWishes.length === 0) {
    storedWishes = DEFAULT_WISHES;
    localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(storedWishes));
  }

  function renderWishes(): void {
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

      const nameInput = document.getElementById('senderName') as HTMLInputElement | null;
      const statusSelect = document.getElementById('attendanceStatus') as HTMLSelectElement | null;
      const countSelect = document.getElementById('guestCount') as HTMLSelectElement | null;
      const messageTextarea = document.getElementById('blessingMessage') as HTMLTextAreaElement | null;

      const name = nameInput?.value.trim() || '';
      const status = statusSelect?.value || 'Hadir';
      const count = countSelect?.value || '1 Orang';
      const message = messageTextarea?.value.trim() || '';

      if (!name || !message) return;

      const newWish: WishItem = {
        name,
        status,
        count,
        message,
        time: 'Baru saja'
      };

      storedWishes.unshift(newWish);
      localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(storedWishes));
      renderWishes();

      showToast('Jazakumullah khairan! Doa dan konfirmasi kehadiran Anda telah tersimpan.');
      if (messageTextarea) messageTextarea.value = '';
    });
  }
}

export function escapeHtml(text: string): string {
  if (typeof text !== 'string') return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

let toastTimer: ReturnType<typeof setTimeout> | null = null;
export function showToast(message: string): void {
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
