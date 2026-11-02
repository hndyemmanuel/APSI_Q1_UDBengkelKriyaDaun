/**
 * main.js - UD Bengkel Kriya Daun
 * Logika landing page:
 * - Slider Hero (custom JS fade 700ms, timer 5s, smart pause, swipe, keyboard)
 * - Sistem Bahasa (ID/EN via data-i18n*, persistensi localStorage)
 * - Interaksi Kartu & UX (scroll-spy, count-up 1.5s, sequential reveal 80ms, back-to-top 600px)
 * - Ikon Konfigurasi (ICONS dengan fallback SVG / Bootstrap Icons)
 * - Media Sosial (SOCIALS di Kontak & Footer)
 * - Formulir Kontak ke WhatsApp (validasi terjemah & status responsif)
 */

(function () {
  'use strict';

  /* ── 1. MEDIA SOSIAL ──────────────────────────────────────────
   * Konfigurasi akun media sosial resmi UD Bengkel Kriya Daun.
   * Ganti URL dan handle di bawah ini dengan tautan & nama akun resmi.
   * ─────────────────────────────────────────────────────────── */
  const SOCIALS = {
    instagram: {
      url: 'https://instagram.com/bengkelkriyadaun',
      handle: '@bengkelkriyadaun'
    },
    facebook: {
      url: 'https://facebook.com/bengkelkriyadaun',
      handle: 'bengkelkriyadaun'
    },
    x: {
      url: 'https://x.com/bengkelkriyadaun',
      handle: '@bengkelkriyadaun'
    }
  };

  /* ── 2. IKON KONFIGURASI ──────────────────────────────────────
   * Konfigurasi ikon Visi, Misi, dan Sistem Persediaan Bahan Baku.
   * Cara mengganti: ubah nama kelas Bootstrap Icons pada properti di bawah ini.
   * Jika file SVG (assets/img/ikon/ikon-[visi|misi|sistem].svg) tersedia,
   * sistem akan memprioritaskan SVG tersebut secara otomatis.
   * ─────────────────────────────────────────────────────────── */
  const ICONS = {
    visi: 'bi-eye',
    misi: 'bi-bullseye',
    sistem: 'bi-box-seam'
  };

  /* ── UTILS ─────────────────────────────────────────────────── */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentLang = 'id';

  /* ── 3. SISTEM BAHASA (POIN 3) ─────────────────────────────── */
  function getNestedTranslation(obj, path) {
    if (!obj || !path) return null;
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
  }

  function applyLanguage(lang) {
    const data = window.LANG_DATA || (typeof LANG_DATA !== 'undefined' ? LANG_DATA : null);
    if (!data || !data[lang]) return;
    currentLang = lang;
    const dict = data[lang];

    // Simpan pilihan ke localStorage dengan aman
    try {
      localStorage.setItem('kd-lang', lang);
    } catch (e) {
      /* abaikan kegagalan storage pada private mode */
    }

    // Atribut html lang, title, dan meta description
    document.documentElement.lang = lang;
    if (dict.meta) {
      if (dict.meta.title) document.title = dict.meta.title;
      const metaDesc = $('meta[name="description"]');
      if (metaDesc && dict.meta.description) metaDesc.setAttribute('content', dict.meta.description);
    }

    // Terjemahkan seluruh elemen teks [data-i18n]
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = getNestedTranslation(dict, key);
      if (val !== null && val !== undefined) {
        el.textContent = val;
      }
    });

    // Terjemahkan placeholder input/textarea [data-i18n-placeholder]
    $$('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = getNestedTranslation(dict, key);
      if (val !== null && val !== undefined) {
        el.setAttribute('placeholder', val);
      }
    });

    // Terjemahkan atribut alt gambar [data-i18n-alt]
    $$('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      const val = getNestedTranslation(dict, key);
      if (val !== null && val !== undefined) {
        el.setAttribute('alt', val);
      }
    });

    // Terjemahkan atribut aria-label [data-i18n-aria]
    $$('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      const val = getNestedTranslation(dict, key);
      if (val !== null && val !== undefined) {
        el.setAttribute('aria-label', val);
      }
    });

    // Perbarui tampilan toggle navbar (bendera & kode)
    const flagEl = $('#langFlag');
    const codeEl = $('#langCode');
    if (flagEl) {
      flagEl.className = `fi ${lang === 'id' ? 'fi-id' : 'fi-gb'} kd-lang-flag`;
      flagEl.setAttribute('aria-label', lang === 'id' ? 'Bendera Indonesia' : 'Flag of United Kingdom');
    }
    if (codeEl) {
      codeEl.textContent = lang.toUpperCase();
    }

    // Tandai pilihan aktif di dropdown
    $$('.kd-lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initLanguage() {
    let savedLang = 'id';
    try {
      savedLang = localStorage.getItem('kd-lang') || 'id';
    } catch (e) {
      savedLang = 'id';
    }
    const data = window.LANG_DATA || (typeof LANG_DATA !== 'undefined' ? LANG_DATA : null);
    if (!data || !data[savedLang]) {
      savedLang = 'id';
    }

    applyLanguage(savedLang);

    const langBtn = document.getElementById('langDropdown');
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu') || (langToggle ? langToggle.querySelector('.kd-lang-menu') : null);

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('show');
        if (isOpen) {
          langMenu.classList.remove('show');
          langBtn.setAttribute('aria-expanded', 'false');
        } else {
          langMenu.classList.add('show');
          langBtn.setAttribute('aria-expanded', 'true');
        }
      });

      // Tutup dropdown jika klik di luar
      document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target)) {
          langMenu.classList.remove('show');
          langBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Event listener pilihan dropdown bahasa
    $$('.kd-lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = btn.dataset.lang;
        if (target) {
          applyLanguage(target);
        }
        if (langMenu) {
          langMenu.classList.remove('show');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* ── 4. NAVBAR SCROLL & SCROLL-SPY (POIN 4) ─────────────────── */
  function initNavbar() {
    const navbar = $('#navbar');
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle('navbar--solid', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Scroll-spy via IntersectionObserver
    const sections = $$('section[id]');
    const navLinks = $$('.kd-nav-link');

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => io.observe(s));
  }

  /* ── 5. HERO SLIDER - HORIZONTAL SLIDE KE KANAN & KIRI (POIN 1) ─ */
  function initHeroSlider() {
    const slider = document.getElementById('heroCarousel');
    if (!slider) return;

    const track = slider.querySelector('.kd-slider__track');
    const slides = slider.querySelectorAll('.kd-slide');
    const indicators = slider.querySelectorAll('.kd-slider__indicators button');
    const btnPrev = document.getElementById('heroPrev');
    const btnNext = document.getElementById('heroNext');

    if (!slides.length || !track) return;

    let current = 0;
    let timer = null;
    const INTERVAL = 3000; // Otomatis tiap 3 detik

    function goTo(idx) {
      current = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;

      slides.forEach((s, i) => {
        s.classList.toggle('kd-slide--active', i === current);
      });

      indicators.forEach((btn, i) => {
        const isActive = i === current;
        btn.classList.toggle('active', isActive);
        if (isActive) {
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.removeAttribute('aria-current');
        }
      });
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    function startTimer() {
      stopTimer();
      if (prefersReducedMotion) return;
      if (document.visibilityState !== 'hidden') {
        timer = setInterval(next, INTERVAL);
      }
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Fungsi pemicu aksi manual:
    // Hentikan timer sejenak, jalankan perpindahan slide,
    // lalu jalankan timer baru sehingga setelah 3 detik diam, auto-slide kembali berlanjut.
    function handleUserAction(actionFn) {
      stopTimer();
      actionFn();
      startTimer();
    }

    // Tab tidak aktif (document.visibilityState)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        stopTimer();
      } else {
        startTimer();
      }
    });

    // Tombol panah
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        handleUserAction(prev);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        handleUserAction(next);
      });
    }

    // 5 Indikator titik
    indicators.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        handleUserAction(() => goTo(idx));
      });
    });

    // Keyboard ArrowLeft dan ArrowRight
    slider.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        handleUserAction(prev);
      } else if (e.key === 'ArrowRight') {
        handleUserAction(next);
      }
    });

    // Swipe sentuh di HP (horizontal dominan)
    let touchStartX = 0;
    let touchStartY = 0;
    slider.addEventListener('touchstart', e => {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    slider.addEventListener('touchend', e => {
      if (e.changedTouches && e.changedTouches[0]) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) {
            handleUserAction(next);
          } else {
            handleUserAction(prev);
          }
        }
      }
    }, { passive: true });

    // Inisialisasi slide pertama dan timer 3 detik
    goTo(0);
    startTimer();
  }

  /* ── 6. COUNT-UP STATISTIK 1.5 DETIK (POIN 4) ───────────────── */
  function initCountUp() {
    const counters = $$('.kd-stat__number');
    if (!counters.length) return;

    const setFinal = el => {
      el.textContent = el.dataset.target + (el.dataset.suffix || '');
    };

    if (prefersReducedMotion) {
      counters.forEach(setFinal);
      return;
    }

    const animate = el => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1500; // Durasi 1,5 detik
      const start = performance.now();

      const step = now => {
        const progress = Math.min((now - start) / duration, 1);
        // Easing out-cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target); // Hanya jalan sekali
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => io.observe(el));
  }

  /* ── 7. SCROLL REVEAL BERURUTAN 80MS (POIN 4) ───────────────── */
  function initReveal() {
    if (prefersReducedMotion) {
      $$('.kd-reveal').forEach(el => el.classList.add('kd-visible'));
      return;
    }

    // Tentukan delay berurutan 80ms per baris elemen
    const rows = $$('.row');
    rows.forEach(row => {
      const cards = $$('.kd-reveal', row);
      cards.forEach((card, idx) => {
        card.style.transitionDelay = `${idx * 80}ms`;
      });
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('kd-visible');
          io.unobserve(e.target); // Hanya jalan sekali
        }
      });
    }, { threshold: 0.1 });

    $$('.kd-reveal').forEach(el => io.observe(el));
    // Fallback: pastikan semua konten terlihat jika observer lambat
    setTimeout(() => {
      $$('.kd-reveal:not(.kd-visible)').forEach(el => el.classList.add('kd-visible'));
    }, 1500);
  }

  /* ── 8. TOMBOL KEMBALI KE ATAS SETELAH 600PX (POIN 4) ──────── */
  function initBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  /* ── 9. IKON VISI, MISI, SISTEM (POIN 5) ───────────────────── */
  function initIcons() {
    const iconTargets = [
      { key: 'visi', selector: '#iconVisi', svg: 'assets/img/ikon/ikon-visi.svg' },
      { key: 'misi', selector: '#iconMisi', svg: 'assets/img/ikon/ikon-misi.svg' },
      { key: 'sistem', selector: '#iconSistem', svg: 'assets/img/ikon/ikon-sistem.svg' }
    ];

    iconTargets.forEach(({ key, selector, svg }) => {
      const el = $(selector);
      if (!el) return;
      const bsClass = ICONS[key];

      // Tes keberadaan file SVG
      const img = new Image();
      img.onload = () => {
        el.innerHTML = '';
        img.className = 'kd-icon-img';
        img.alt = '';
        el.appendChild(img);
      };
      img.onerror = () => {
        el.innerHTML = `<i class="bi ${bsClass}"></i>`;
      };
      img.src = svg;
    });
  }

  /* ── 10. MEDIA SOSIAL (POIN 8) ─────────────────────────────── */
  function initSocials() {
    const map = {
      ig: SOCIALS.instagram,
      fb: SOCIALS.facebook,
      x: SOCIALS.x
    };

    $$('[data-social]').forEach(el => {
      const key = el.dataset.social;
      if (!map[key]) return;
      el.href = map[key].url;
      // Di bagian Kontak, tampilkan teks handle
      if (el.tagName === 'A' && el.classList.contains('kd-link')) {
        el.textContent = map[key].handle;
      }
    });
  }

  /* ── 11. FORM KONTAK WHATSAPP (POIN 3) ─────────────────────── */
  function initContactForm() {
    const form = $('#kontakForm');
    if (!form) return;

    const WA_NUMBER = '628123240214'; // Nomor WhatsApp resmi bengkel

    const gel = id => document.getElementById(id);

    const setErr = (errId, msg) => {
      const el = gel(errId);
      if (!el) return;
      el.textContent = msg;
      const inputId = 'input' + errId.replace('err', '');
      const input = gel(inputId);
      if (input) input.classList.toggle('is-invalid', !!msg);
    };

    const clrErr = id => setErr(id, '');

    const getErrorMessages = () => {
      const dict = (window.LANG_DATA && window.LANG_DATA[currentLang]) ? window.LANG_DATA[currentLang].formErrors : null;
      return dict || {
        errNama: 'Isi nama lengkap supaya kami tahu harus menyapa siapa.',
        errWaEmpty: 'Isi nomor WhatsApp supaya kami bisa membalas.',
        errWaFormat: 'Nomor belum sesuai. Gunakan angka saja, contoh 08**********.',
        errPesan: 'Tulis pesan singkat tentang produk atau jumlah yang kamu butuhkan.',
        statusLoading: 'Membuka WhatsApp…',
        statusSuccess: 'WhatsApp sudah terbuka. Tekan kirim di sana untuk mengirim pesanmu.',
        statusFallback: 'WhatsApp tidak terbuka? Salin pesanmu lalu kirim ke +62 812-3456-7890.'
      };
    };

    const validate = () => {
      let valid = true;
      const errs = getErrorMessages();
      const nama = gel('inputNama').value.trim();
      const wa = gel('inputWA').value.trim();
      const pesan = gel('inputPesan').value.trim();
      const waDigit = wa.replace(/\D/g, '');

      clrErr('errNama');
      clrErr('errWA');
      clrErr('errPesan');

      if (!nama) {
        setErr('errNama', errs.errNama);
        valid = false;
      }
      if (!wa) {
        setErr('errWA', errs.errWaEmpty);
        valid = false;
      } else if (!/^\d{9,15}$/.test(waDigit)) {
        setErr('errWA', errs.errWaFormat);
        valid = false;
      }
      if (!pesan) {
        setErr('errPesan', errs.errPesan);
        valid = false;
      }

      return valid;
    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate()) return;

      const errs = getErrorMessages();
      const nama = gel('inputNama').value.trim();
      const wa = gel('inputWA').value.trim();
      const kebutuhan = gel('inputKebutuhan').value || (currentLang === 'en' ? 'Unspecified' : 'Tidak dipilih');
      const pesan = gel('inputPesan').value.trim();

      const waTemplate = (window.LANG_DATA && window.LANG_DATA[currentLang])
        ? window.LANG_DATA[currentLang].waMessage
        : { intro: 'Halo, saya', phone: 'Nomor WA saya:', need: 'Kebutuhan:', message: 'Pesan:' };

      const text = [
        `${waTemplate.intro} ${nama}.`,
        `${waTemplate.phone} ${wa}`,
        `${waTemplate.need} ${kebutuhan}`,
        `${waTemplate.message} ${pesan}`
      ].join('\n');

      const statusEl = gel('formStatus');
      statusEl.textContent = errs.statusLoading;
      statusEl.className = 'kd-form-status kd-form-status--loading';

      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      const newTab = window.open(url, '_blank', 'noopener,noreferrer');

      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
          statusEl.textContent = '';
          statusEl.className = 'kd-form-status';
        } else {
          statusEl.textContent = errs.statusSuccess;
          statusEl.className = 'kd-form-status kd-form-status--success';
          form.reset();
        }
      }, 800);
    });
  }

  /* ── 12. LOGO FALLBACK & GAMBAR (POIN 7) ───────────────────── */
  function initLogoFallback() {
    // Navbar logo fallback
    $$('.kd-navbar__logo').forEach(img => {
      img.addEventListener('error', () => {
        const span = document.createElement('span');
        span.className = 'kd-navbar__logo-text';
        span.textContent = 'BKD';
        span.setAttribute('aria-label', 'UD Bengkel Kriya Daun');
        img.replaceWith(span);
      }, { once: true });
    });

    // Footer logo fallback (Poin 7: tampilkan teks nama usaha jika gagal muat)
    const footerLogo = document.getElementById('footerLogoColor');
    if (footerLogo) {
      footerLogo.addEventListener('error', () => {
        const wrap = footerLogo.closest('.kd-footer__logo-wrap');
        const span = document.createElement('span');
        span.className = 'kd-footer__brand-name';
        span.style.color = 'var(--text-on-dark)';
        span.textContent = 'UD Bengkel Kriya Daun';
        if (wrap) {
          wrap.replaceWith(span);
        } else {
          footerLogo.replaceWith(span);
        }
      }, { once: true });
    }
  }

  function initImagePlaceholders() {
    $$('img').forEach(img => {
      const apply = () => {
        if (img.dataset.phApplied) return;
        img.dataset.phApplied = '1';

        const filename = img.src.split('/').pop() || img.alt || 'gambar';
        const ph = document.createElement('div');
        ph.className = 'kd-img-placeholder';

        if (img.width && img.height) {
          ph.style.aspectRatio = `${img.width} / ${img.height}`;
        }
        ph.setAttribute('role', 'img');
        ph.setAttribute('aria-label', img.alt || filename);
        ph.innerHTML = `<i class="bi bi-image"></i><span>${filename}</span>`;

        if (img.parentElement) img.replaceWith(ph);
      };

      if (!img.complete || img.naturalWidth === 0) {
        img.addEventListener('error', apply, { once: true });
      }
    });
  }

  /* ── 13. PETA GOOGLE MAPS ──────────────────────────────────── */
  function initMap() {
    const mapFrame = document.getElementById('mapFrame');
    const mapLoading = document.getElementById('mapLoading');
    const mapFallback = document.getElementById('mapFallback');
    if (!mapFrame) return;

    mapFrame.addEventListener('load', () => {
      if (mapLoading) mapLoading.classList.add('d-none');
      mapFrame.classList.remove('d-none');
    });

    mapFrame.addEventListener('error', () => {
      if (mapLoading) mapLoading.classList.add('d-none');
      if (mapFallback) mapFallback.classList.remove('d-none');
    });

    setTimeout(() => mapFrame.classList.remove('d-none'), 500);
  }

  /* ── INISIALISASI SETELAH DOM SIAP ─────────────────────────── */
  function initAll() {
    initLanguage();
    initNavbar();
    initHeroSlider();
    initCountUp();
    initReveal();
    initBackToTop();
    initIcons();
    initSocials();
    initContactForm();
    initLogoFallback();
    initImagePlaceholders();
    initMap();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();
