/**
 * ==========================================================================
 * PORTOFOLIO RESMI & INTERAKTIF - LOGIKA JAVASCRIPT
 * File: script.js
 * Fitur: Mobile Nav, WhatsApp Message Builder, Filter Proyek, Copy Toast,
 *        Theme Switcher, Scroll Active Link & Back-to-Top.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. SELECTORS & STATE
  // --------------------------------------------------------------------------
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  // WhatsApp Message Builder
  const waSelect = document.getElementById('wa-template-select');
  const waPreview = document.getElementById('wa-preview-text');
  const waGoBtn = document.getElementById('btn-go-whatsapp');
  const whatsappPhone = '6281234567890'; // Ubah sesuai nomor asli Anda

  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Copy Buttons & Toast
  const copyBtns = document.querySelectorAll('[data-copy]');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  // CV Download Button
  const btnDownloadCv = document.getElementById('btn-download-cv');

  // --------------------------------------------------------------------------
  // 2. THEME SWITCHER (DARK / LIGHT MODE) WITH LOCAL STORAGE
  // --------------------------------------------------------------------------
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Tema diubah ke mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'}`);
    });
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE MENU TOGGLE
  // --------------------------------------------------------------------------
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggleBtn.classList.toggle('active', isOpen);
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggleBtn.classList.remove('active');
          mobileToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. SCROLL ACTIVE LINK & HEADER SHADOW & BACK TO TOP
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header styling on scroll
    if (header) {
      if (scrollY > 50) {
        header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Section Spy
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // Back to top click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. INTERACTIVE WHATSAPP MESSAGE BUILDER
  // --------------------------------------------------------------------------
  const waTemplates = {
    recruiter: 'Halo Adinda, saya dari Tim Rekrutmen. Kami telah meninjau portofolio Anda dan tertarik untuk mendiskusikan peluang kerja posisi Web Developer bersama tim kami.',
    project: 'Halo Adinda, saya tertarik dengan keahlian web programming Anda dan ingin mendiskusikan penawaran proyek pembuatan website.',
    general: 'Halo Adinda Pratama, salam kenal. Saya ingin bertukar wawasan dan menanyakan beberapa hal terkait portofolio web Anda.'
  };

  function updateWhatsAppUrl() {
    if (!waSelect || !waPreview || !waGoBtn) return;

    const selectedValue = waSelect.value;
    const message = waTemplates[selectedValue] || waTemplates.recruiter;

    // Update Live Preview text
    waPreview.textContent = `"${message}"`;

    // Update WhatsApp link with URL-encoded text
    const encodedMessage = encodeURIComponent(message);
    waGoBtn.href = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
  }

  if (waSelect) {
    waSelect.addEventListener('change', updateWhatsAppUrl);
    // Initial run
    updateWhatsAppUrl();
  }

  // --------------------------------------------------------------------------
  // 6. PROJECT CATEGORY FILTER (ALL / HTML-CSS / JAVASCRIPT)
  // --------------------------------------------------------------------------
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active button UI state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'flex';
            // Smooth entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            requestAnimationFrame(() => {
              card.style.transition = 'all 0.35s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. COPY-TO-CLIPBOARD FUNCTIONALITY & TOAST NOTIFICATION
  // --------------------------------------------------------------------------
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');

      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            showToast(`Berhasil disalin: ${textToCopy}`);
          })
          .catch(() => {
            fallbackCopy(textToCopy);
          });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showToast(`Berhasil disalin: ${text}`);
    } catch (err) {
      showToast('Gagal menyalin teks, silakan salin secara manual.');
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    if (!toastNotification || !toastMessage) return;

    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // 8. CV DOWNLOAD SIMULATION / NOTIFICATION
  // --------------------------------------------------------------------------
  if (btnDownloadCv) {
    btnDownloadCv.addEventListener('click', () => {
      showToast('CV siap diunduh! Tautan dapat dihubungkan ke file PDF Anda.');
    });
  }

  // --------------------------------------------------------------------------
  // 9. LIGHTWEIGHT SCROLL-REVEAL ENHANCEMENT
  // --------------------------------------------------------------------------
  // Using native IntersectionObserver for high performance 60fps animations
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const animatedElements = document.querySelectorAll(
      '.skill-category-card, .project-card, .channel-card, .timeline-item'
    );

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    // Style for when element comes into view
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .in-view {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(styleEl);
  }

  console.log('Portofolio formal siap digunakan dengan HTML, CSS, dan JavaScript murni.');
});
