/**
 * Modul Pengontrol Musik Latar & Web Audio API Synthesizer
 */

let audioCtx: AudioContext | null = null;
let isAudioPlaying = false;
let synthInterval: ReturnType<typeof setInterval> | null = null;

export function initAudioPlayer(): void {
  const musicBtn = document.getElementById('musicController');
  if (musicBtn) {
    musicBtn.addEventListener('click', toggleBgm);
  }
}

export function toggleBgm(): void {
  if (isAudioPlaying) {
    pauseBgm();
  } else {
    playBgm();
  }
}

export function playBgm(): void {
  const audioEl = document.getElementById('weddingBgm') as HTMLAudioElement | null;
  
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

export function pauseBgm(): void {
  const audioEl = document.getElementById('weddingBgm') as HTMLAudioElement | null;
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

function updateMusicUI(playing: boolean): void {
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

function startAmbientSynth(): void {
  if (synthInterval) return;

  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Pentatonic notes in Hz (D minor / Bayati serene scales)
  const notes = [
    293.66, 329.63, 349.23, 392.00, 440.00, 466.16, 523.25, 587.33,
    659.25, 698.46, 783.99, 880.00
  ];
  
  const pattern = [0, 3, 4, 6, 7, 4, 3, 1, 0, 4, 5, 7, 9, 7, 5, 4];
  let step = 0;

  function playNote(): void {
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
