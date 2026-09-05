/**
 * Modul Animasi Partikel Daun & Kelopak Bunga (Nature Canvas)
 */

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  type: 'leaf' | 'petal';
}

export function initNatureCanvas(): void {
  const canvas = document.getElementById('natureCanvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles: Particle[] = [];
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

  function draw(): void {
    if (!ctx) return;
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
