import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  colorType: 'violet' | 'purple' | 'white';
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates for subtle interactive reaction
    const mouse = { x: -1000, y: -1000, radius: 120 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Density of drifting particles
    const particleCount = Math.min(Math.floor((width * height) / 30000), 50);
    const particles: Particle[] = [];
    const colors = {
      violet: '167, 139, 250', // #A78BFA
      purple: '139, 92, 246', // #8B5CF6
      white: '245, 243, 255',  // #F5F3FF
    };
    const colorTypes: Array<'violet' | 'purple' | 'white'> = ['violet', 'purple', 'white', 'violet'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.15 + Math.random() * 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, // Gentle sway
        vy: -0.15 - Math.random() * 0.25, // Slow upward drift
        radius: 1 + Math.random() * 1.5,
        baseAlpha,
        alpha: baseAlpha,
        colorType: colorTypes[Math.floor(Math.random() * colorTypes.length)],
      });
    }

    // Shooting stars array
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      if (prefersReducedMotion) return;
      shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * (height * 0.4),
        length: 80 + Math.random() * 70,
        speed: 9 + Math.random() * 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
        opacity: 0.8,
        active: true,
      });
    };

    // Spawn an occasional shooting star every 4 to 8 seconds
    let starInterval: number;
    if (!prefersReducedMotion) {
      starInterval = window.setInterval(() => {
        if (Math.random() > 0.3) {
          spawnShootingStar();
        }
      }, 4500);
      // Spawn one early on
      setTimeout(spawnShootingStar, 1200);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Constellation lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Render & drift particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const rgb = colors[p.colorType];
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.shadowColor = `rgba(${rgb}, 0.5)`;
        ctx.shadowBlur = p.radius * 2;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (!prefersReducedMotion) {
          // Normal upward & sway motion
          p.x += p.vx;
          p.y += p.vy;

          // Interactive subtle mouse repulsion
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius && mdist > 0) {
            const force = (1 - mdist / mouse.radius) * 0.7;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }

          // Twinkle pulse
          p.alpha += Math.sin(Date.now() * 0.002 + i) * 0.003;
          if (p.alpha < 0.1) p.alpha = 0.1;
          if (p.alpha > 0.55) p.alpha = 0.55;

          // Wrap edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }
      }

      // 3. Render animated shooting stars
      if (!prefersReducedMotion) {
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          if (!s.active) {
            shootingStars.splice(i, 1);
            continue;
          }

          const tailX = s.x - Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;

          // Gradient streak from bright white-violet head to transparent tail
          const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
          gradient.addColorStop(0, 'rgba(167, 139, 250, 0)');
          gradient.addColorStop(0.7, `rgba(167, 139, 250, ${s.opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(245, 243, 255, ${s.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = 'rgba(167, 139, 250, 0.8)';
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Head glow
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
          ctx.fill();

          // Move shooting star
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.opacity -= 0.015;

          if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
            s.active = false;
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(starInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-5 w-full h-full"
      aria-hidden="true"
    />
  );
};
