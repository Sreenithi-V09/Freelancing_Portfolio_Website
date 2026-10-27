/**
 * Sreenithi V. — Freelance Web Developer Portfolio
 * Vanilla JavaScript (ES6+) for interactive behavior
 * Accessible, lightweight, zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC COPYRIGHT YEAR
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. MOBILE NAVIGATION DRAWER
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('active');
      mobileNav.setAttribute('aria-hidden', isExpanded);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 3. FAQ ACCORDION INTERACTION
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach((button) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const content = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');

      // Close all other accordions for clean UX
      faqToggles.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          const otherContent = otherButton.nextElementSibling;
          const otherIcon = otherButton.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.remove('open');
          if (otherIcon) otherIcon.innerHTML = '&plus;';
        }
      });

      // Toggle current accordion
      button.setAttribute('aria-expanded', !isExpanded);
      if (content) {
        content.classList.toggle('open');
      }
      if (icon) {
        icon.innerHTML = isExpanded ? '&plus;' : '&minus;';
      }
    });
  });

  // 4. ACTIVE SECTION NAV SPY
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 5. CONTACT FORM VALIDATION & MAILTO FORMATTER
  const inquiryForm = document.getElementById('inquiryForm');
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const projectTypeSelect = document.getElementById('projectType');
  const budgetSelect = document.getElementById('budget');
  const descInput = document.getElementById('projectDescription');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const descError = document.getElementById('descError');
  const formFeedback = document.getElementById('formFeedback');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous error messages
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (descError) descError.textContent = '';
      if (formFeedback) {
        formFeedback.className = 'form-feedback hidden';
        formFeedback.innerHTML = '';
      }

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        if (nameError) nameError.textContent = 'Please provide your full name.';
        isValid = false;
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        if (emailError) emailError.textContent = 'Please provide your email address.';
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        if (emailError) emailError.textContent = 'Please enter a valid email format.';
        isValid = false;
      }

      // Validate project description
      if (!descInput.value.trim()) {
        if (descError) descError.textContent = 'Please describe your project.';
        isValid = false;
      } else if (descInput.value.trim().length < 15) {
        if (descError) descError.textContent = 'Please provide at least 15 characters describing what you need.';
        isValid = false;
      }

      if (!isValid) return;

      // Format clean inquiry draft
      const recipient = 'sreenithivenkatesan09@gmail.com';
      const subject = `Website Inquiry: ${projectTypeSelect.value} from ${nameInput.value.trim()}`;
      const body = `Hi Sreenithi,

I would like to inquire about a website project.

• Full Name: ${nameInput.value.trim()}
• Email: ${emailInput.value.trim()}
• Project Type: ${projectTypeSelect.value}
• Budget Range: ${budgetSelect.value}

Project Description:
${descInput.value.trim()}

Looking forward to hearing from you!`;

      // Compose mailto URI
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Display accessible confirmation
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Inquiry Formatted!</strong> Opening your email client to send to <em>${recipient}</em>.<br><br>
          If your email app didn't open automatically, <a href="${mailtoUrl}" style="color:#A78BFA;text-decoration:underline;">click here to open it directly</a>, or copy your project description into an email.
        `;
      }

      // Launch email client
      window.location.href = mailtoUrl;
    });
  }

  // 6. LIGHTWEIGHT BACKGROUND PARTICLE & SHOOTING STAR SYSTEM
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const particleCount = Math.min(Math.floor((width * height) / 30000), 50);
      const particles = [];
      const colors = ['167, 139, 250', '139, 92, 246', '245, 243, 255'];
      const mouse = { x: -1000, y: -1000, radius: 120 };

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }, { passive: true });

      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = 0.15 + Math.random() * 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.15 - Math.random() * 0.25,
          radius: 1 + Math.random() * 1.5,
          alpha: baseAlpha,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Shooting stars
      const shootingStars = [];
      function spawnShootingStar() {
        if (prefersReducedMotion) return;
        shootingStars.push({
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * (height * 0.4),
          length: 80 + Math.random() * 70,
          speed: 9 + Math.random() * 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          opacity: 0.8,
          active: true,
        });
      }

      if (!prefersReducedMotion) {
        setInterval(() => {
          if (Math.random() > 0.3) spawnShootingStar();
        }, 4500);
        setTimeout(spawnShootingStar, 1200);
      }

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // Subtle faint constellations
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - dist / 90) * 0.07})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }

        // Draw and drift particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx.shadowColor = `rgba(${p.color}, 0.5)`;
          ctx.shadowBlur = p.radius * 2;
          ctx.fill();
          ctx.shadowBlur = 0;

          if (!prefersReducedMotion) {
            p.x += p.vx;
            p.y += p.vy;

            // Interactive mouse repulsion
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < mouse.radius && mdist > 0) {
              const force = (1 - mdist / mouse.radius) * 0.7;
              p.x += (mdx / mdist) * force;
              p.y += (mdy / mdist) * force;
            }

            // Twinkle
            p.alpha += Math.sin(Date.now() * 0.002 + i) * 0.003;
            if (p.alpha < 0.1) p.alpha = 0.1;
            if (p.alpha > 0.55) p.alpha = 0.55;

            if (p.y < -10) {
              p.y = height + 10;
              p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
          }
        }

        // Draw shooting stars
        if (!prefersReducedMotion) {
          for (let i = shootingStars.length - 1; i >= 0; i--) {
            const s = shootingStars[i];
            if (!s.active) {
              shootingStars.splice(i, 1);
              continue;
            }

            const tailX = s.x - Math.cos(s.angle) * s.length;
            const tailY = s.y - Math.sin(s.angle) * s.length;

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

            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.opacity -= 0.015;

            if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
              s.active = false;
            }
          }
        }

        if (!prefersReducedMotion) {
          requestAnimationFrame(animateParticles);
        }
      }

      animateParticles();
    }
  }

  // 7. INTERSECTION OBSERVER SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach((el) => {
      el.classList.add('revealed');
    });
  }
});


