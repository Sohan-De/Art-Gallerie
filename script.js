// Galerie Dealer d'art - Pure Vanilla JavaScript Engine
// Bilingual (FR/EN), Multi-Theme Engine, Realtime Opening Hours, Interactive Lightbox & Filters

(function () {
  "use strict";

  // Theme configuration is loaded from color.js
  const themes = window.themes || {};

  // --- GALLERY SCHEDULE DATA ---
  const galleryHours = [
    { day: "monday", opens: [], closed: true },
    { day: "tuesday", opens: [["14:00", "18:00"]] },
    { day: "wednesday", opens: [["10:00", "18:00"]] },
    { day: "thursday", opens: [["14:00", "18:00"]] },
    { day: "friday", opens: [["14:00", "18:00"]] },
    { day: "saturday", opens: [["10:00", "12:00"], ["14:00", "18:00"]] },
    { day: "sunday", opens: [["10:00", "12:00"], ["14:00", "18:00"]] },
  ];

  const artworks = [
    { src: "gallery-images/image_4.jpg", altFr: "Œuvre exposée à la galerie", altEn: "Artwork exhibited at the gallery", mediumFr: "Peinture", mediumEn: "Painting", mediumCategory: "Peinture" },
    { src: "gallery-images/image_16.jpg", altFr: "Dessin présenté dans la galerie", altEn: "Drawing presented in the gallery", mediumFr: "Dessin", mediumEn: "Drawing", mediumCategory: "Dessin" },
    { src: "gallery-images/image_18.jpg", altFr: "Peinture exposée à la galerie", altEn: "Painting on display at the gallery", mediumFr: "Peinture", mediumEn: "Painting", mediumCategory: "Peinture" },
    { src: "gallery-images/image_20.jpg", altFr: "Œuvre et espace de travail", altEn: "Artwork and workshop space", mediumFr: "Autres médiums", mediumEn: "Other mediums", mediumCategory: "Autres médiums" },
    { src: "gallery-images/image_22.jpg", altFr: "Peinture contemporaine en cours de création", altEn: "Contemporary painting in progress", mediumFr: "Peinture", mediumEn: "Painting", mediumCategory: "Peinture" },
    { src: "gallery-images/image_24.jpg", altFr: "Dessin au crayon d’un visage", altEn: "Pencil portrait sketch", mediumFr: "Dessin", mediumEn: "Drawing", mediumCategory: "Dessin" },
  ];

  // --- BILINGUAL CONTENT ---
  const copy = {
    fr: {
      siteTitle: "Galerie Dealer d'art — L’art se vit, ici.",
      navHome: "Accueil",
      navArtist: "L’artiste",
      navExhibitions: "Expositions",
      navGallery: "Galerie",
      navWorks: "Galerie",
      navVisit: "Visite",
      navContact: "Contact",
      eyebrow: "Un lieu vivant, à Montmorillon",
      tagline: "L’art se vit, ici.",
      visit: "Venir à la galerie",
      call: "Appeler",
      introLabel: "01 — La galerie",
      introTitle: "Un lieu pour regarder. Et rencontrer.",
      introOne: "Galerie et atelier d’artiste, le Dealer d’art présente le travail de Jicé et invite des artistes dont les expositions se renouvellent régulièrement.",
      introTwo: "Ici, Jicé vous accueille personnellement, vous guide parmi les œuvres et partage le plaisir de la découverte. Les œuvres exposées sont proposées à la vente.",
      artistLabel: "02 — L’artiste",
      artistTitle: "Jicé, peintre aux multiples voix.",
      artistCopy: "Peintre local, passionné et engagé, Jicé explore une grande diversité de médiums et aborde chaque demande avec soin.",
      artistCaption: "Œuvre et atelier — photographie fournie",
      artistSideNote: "Artiste · accueillant · passionné",
      exhibitLabel: "03 — Expositions",
      exhibitTitle: "Les murs changent. La curiosité reste.",
      exhibitCurrent: "Exposition en cours",
      exhibitTodo: "Informations sur l’exposition à compléter",
      exhibitsFuture: "À venir",
      exhibitsFutureVal: "Dates à venir",
      exhibitsPast: "Passées",
      exhibitsPastVal: "Expositions précédentes",
      exhibitNote: "Le programme évolue régulièrement. Informations à compléter.",
      worksLabel: "04 — Œuvres",
      worksTitle: "Des œuvres à rencontrer, peut-être à emporter.",
      worksSub: "photographies d’œuvres",
      detailsToCome: "Détails à compléter",
      filterAll: "Tout",
      filterPainting: "Peinture",
      filterDrawing: "Dessin",
      filterOther: "Autres médiums",
      workLabel: "Œuvre",
      viewLabel: "Voir",
      contactArtwork: "Une œuvre vous intéresse ? Écrivez-nous.",
      reviewsLabel: "05 — Avis",
      reviewsTitle: "Leurs mots, après la visite.",
      googleReview: "Avis Google",
      leaveReview: "Laisser un avis",
      googleReviewsCount: "avis Google",
      reviewsNote: "Le lien vers les avis Google sera ajouté.",
      visitLabel: "06 — Visite & contact",
      visitTitle: "Poussez la porte.",
      hours: "Horaires d’ouverture",
      open: "Ouvert",
      closed: "Fermé",
      today: "Aujourd’hui",
      directions: "Itinéraire",
      plusCode: "Plus Code",
      contactTitle: "Écrire à la galerie",
      contactHint: "Pour une œuvre, une visite ou toute autre question.",
      name: "Votre nom",
      email: "Votre e-mail",
      message: "Votre message",
      send: "Envoyer le message",
      formSuccess: "Message envoyé. Merci !",
      formError: "Veuillez remplir correctement tous les champs.",
      footerNote: "Un espace accueillant, LGBTQ+ friendly.",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      menu: "Menu",
      close: "Fermer",
      inquiryPrefix: "Je suis intéressé·e par l’œuvre",
      atelierSubtitle: "Atelier Jicé · Montmorillon",
      headerAtelierCity: "Montmorillon · Atelier",
      footerCurator: "Galerie d’art contemporain & atelier de création par Jicé. Un espace d'expression libre, de rencontres et d'émotions artistiques à Montmorillon, Cité de l'Écrit.",
      footerColExploration: "Exploration",
      footerColVisit: "Coordonnées & Horaires",
      footerColValues: "Un lieu pour tous",
      footerInclusiveTitle: "Espace ouvert & bienveillant",
      footerVisitNote: "Visites libres pendant les horaires d’ouverture ou sur rendez-vous privé avec Jicé.",
      footerRights: "Tous droits réservés",
      citeDeLecrit: "Montmorillon · Cité de l’Écrit",
      backToTop: "Haut de page",
    },
    en: {
      siteTitle: "Galerie Dealer d'art — Art lives here.",
      navHome: "Home",
      navArtist: "The artist",
      navExhibitions: "Exhibitions",
      navGallery: "Gallery",
      navWorks: "Gallery",
      navVisit: "Visit",
      navContact: "Contact",
      eyebrow: "A living place in Montmorillon",
      tagline: "Art lives here.",
      visit: "Visit the gallery",
      call: "Call",
      introLabel: "01 — The gallery",
      introTitle: "A place to look. And to meet.",
      introOne: "Both gallery and artist studio, Dealer d'art presents Jicé’s own work and welcomes guest artists whose exhibitions change regularly.",
      introTwo: "Jicé welcomes visitors personally, guides them through the works and shares the pleasure of discovery. The works on view are available to purchase.",
      artistLabel: "02 — The artist",
      artistTitle: "Jicé, a painter in many voices.",
      artistCopy: "A passionate and dedicated local painter, Jicé explores a wide variety of mediums and approaches each brief with care.",
      artistCaption: "Artwork and studio — supplied photograph",
      artistSideNote: "Artist · welcoming · passionate",
      exhibitLabel: "03 — Exhibitions",
      exhibitTitle: "The walls change. Curiosity stays.",
      exhibitCurrent: "Current exhibition",
      exhibitTodo: "Exhibition details to be added",
      exhibitsFuture: "Coming up",
      exhibitsFutureVal: "Details to come",
      exhibitsPast: "Past",
      exhibitsPastVal: "Previous exhibitions",
      exhibitNote: "The programme changes regularly. Details to be added.",
      worksLabel: "04 — Works",
      worksTitle: "Works to meet, perhaps to take home.",
      worksSub: "artwork photographs",
      detailsToCome: "Details to be added",
      filterAll: "All",
      filterPainting: "Painting",
      filterDrawing: "Drawing",
      filterOther: "Other mediums",
      workLabel: "Artwork",
      viewLabel: "View",
      contactArtwork: "Interested in a work? Get in touch.",
      reviewsLabel: "05 — Reviews",
      reviewsTitle: "Their words, after a visit.",
      googleReview: "Google review",
      leaveReview: "Leave a review",
      googleReviewsCount: "Google reviews",
      reviewsNote: "The Google review link will be added.",
      visitLabel: "06 — Visit & contact",
      visitTitle: "Come on in.",
      hours: "Opening hours",
      open: "Open",
      closed: "Closed",
      today: "Today",
      directions: "Get directions",
      plusCode: "Plus Code",
      contactTitle: "Write to the gallery",
      contactHint: "For artwork, a visit, or any other question.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      formSuccess: "Message sent. Thank you!",
      formError: "Please check your name, email, and message.",
      footerNote: "A welcoming space, LGBTQ+ friendly.",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      menu: "Menu",
      close: "Close",
      inquiryPrefix: "I am interested in artwork",
      atelierSubtitle: "Jicé Studio · Montmorillon",
      headerAtelierCity: "Montmorillon · Studio",
      footerCurator: "Contemporary art gallery and creative studio by Jicé. A space for artistic encounters, free expression, and discovery in Montmorillon.",
      footerColExploration: "Explore",
      footerColVisit: "Visit & Contact",
      footerColValues: "A Welcoming Space",
      footerInclusiveTitle: "Open & welcoming space",
      footerVisitNote: "Drop-in visits during opening hours or by private appointment with Jicé.",
      footerRights: "All rights reserved",
      citeDeLecrit: "Montmorillon · City of Writing",
      backToTop: "Back to top",
    },
  };

  // State
  let currentLocale = localStorage.getItem("gallery-language") || "fr";
  let activeTheme = localStorage.getItem("gallery-theme-name") || "terracotta";
  let activeMode = localStorage.getItem("gallery-theme-mode") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let activeFilter = "Tout";
  let activeLightboxIndex = null;
  let menuOpen = false;

  // --- THEME MANAGEMENT ---
  function applyTheme(themeName, mode) {
    if (!themes[themeName]) themeName = "terracotta";
    const tokens = themes[themeName][mode];
    const root = document.documentElement;

    for (const [key, value] of Object.entries(tokens)) {
      const cssKey = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      root.style.setProperty(`--color-${cssKey}`, value);
    }

    root.dataset.theme = themeName;
    root.dataset.themeMode = mode;
    root.style.colorScheme = mode;

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.textContent = mode === "light" ? "☾" : "☼";
      themeToggleBtn.setAttribute(
        "aria-label",
        mode === "light"
          ? (currentLocale === "fr" ? "Activer le thème sombre" : "Activate dark theme")
          : (currentLocale === "fr" ? "Activer le thème clair" : "Activate light theme")
      );
    }

    const themeSelect = document.getElementById("theme-select");
    if (themeSelect) themeSelect.value = themeName;
  }

  function toggleMode() {
    activeMode = activeMode === "light" ? "dark" : "light";
    localStorage.setItem("gallery-theme-mode", activeMode);
    applyTheme(activeTheme, activeMode);
  }

  function setTheme(themeName) {
    activeTheme = themeName;
    localStorage.setItem("gallery-theme-name", activeTheme);
    applyTheme(activeTheme, activeMode);
  }

  // --- LANGUAGE MANAGEMENT ---
  function setLanguage(locale) {
    currentLocale = locale;
    localStorage.setItem("gallery-language", locale);
    document.documentElement.lang = locale;

    const t = copy[locale];

    // Document Title
    document.title = t.siteTitle;

    // Language Toggle Button Text
    const langSwitch = document.getElementById("language-switch");
    if (langSwitch) {
      langSwitch.textContent = locale === "fr" ? "EN" : "FR";
      langSwitch.setAttribute("lang", locale === "fr" ? "en" : "fr");
    }

    // Dynamic Text Swapping via data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Form inputs placeholders / labels
    const nameLabel = document.querySelector('label[for="contact-name"] span');
    if (nameLabel) nameLabel.textContent = t.name;
    const emailLabel = document.querySelector('label[for="contact-email"] span');
    if (emailLabel) emailLabel.textContent = t.email;
    const messageLabel = document.querySelector('label[for="contact-message"] span');
    if (messageLabel) messageLabel.textContent = t.message;

    // Mobile Menu Button
    const menuBtn = document.getElementById("menu-toggle");
    if (menuBtn) {
      menuBtn.textContent = menuOpen ? t.close : t.menu;
    }

    // Work filter buttons text
    const filterButtons = document.querySelectorAll(".work-filters button");
    if (filterButtons.length >= 4) {
      filterButtons[0].textContent = t.filterAll;
      filterButtons[1].textContent = t.filterPainting;
      filterButtons[2].textContent = t.filterDrawing;
      filterButtons[3].textContent = t.filterOther;
    }

    // Update artworks captions and counters
    updateArtworksUI();

    // Update Opening Hours Table & Live Status
    updateOpeningStatus();

    // Update Lightbox if open
    if (activeLightboxIndex !== null) {
      updateLightboxContent(activeLightboxIndex);
    }
  }

  function toggleLanguage() {
    setLanguage(currentLocale === "fr" ? "en" : "fr");
  }

  // --- OPENING HOURS & REALTIME STATUS ---
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  function getParisTime() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Paris",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());

    const part = (type) => parts.find((item) => item.type === type)?.value ?? "";
    const weekday = part("weekday").toLowerCase();
    return {
      day: dayNames.indexOf(weekday),
      minutes: Number(part("hour")) * 60 + Number(part("minute")),
    };
  }

  function isOpenNow(dayIndex, minutes) {
    const weekday = dayNames[dayIndex];
    const schedule = galleryHours.find((item) => item.day === weekday);
    if (!schedule || schedule.closed) return false;
    return schedule.opens.some(([from, to]) => {
      const [fH, fM] = from.split(":").map(Number);
      const [tH, tM] = to.split(":").map(Number);
      return minutes >= fH * 60 + fM && minutes < tH * 60 + tM;
    });
  }

  function updateOpeningStatus() {
    const t = copy[currentLocale];
    const { day, minutes } = getParisTime();
    const open = isOpenNow(day, minutes);

    const statusPill = document.getElementById("live-open-status");
    if (statusPill) {
      statusPill.className = `open-status ${open ? "status-open" : "status-closed"}`;
      statusPill.innerHTML = `
        <span aria-hidden="true"></span>
        <span>${open ? t.open : t.closed}</span>
        <span> · ${t.today}</span>
      `;
    }

    // Build or update hours table
    const tableBody = document.querySelector(".hours-table tbody");
    if (tableBody) {
      tableBody.innerHTML = "";
      galleryHours.forEach((item, index) => {
        const isToday = day === dayNames.indexOf(item.day);
        const hoursText = item.closed
          ? (currentLocale === "fr" ? "Fermé" : "Closed")
          : item.opens.map(([from, to]) => `${from}–${to}`).join(" · ");

        const tr = document.createElement("tr");
        if (isToday) tr.className = "today-row";

        tr.innerHTML = `
          <th scope="row">
            ${t.days[index]}
            ${isToday ? `<span class="today-tag"> · ${t.today}</span>` : ""}
          </th>
          <td>${hoursText}</td>
        `;
        tableBody.appendChild(tr);
      });
    }
  }

  // --- ARTWORK GALLERY & FILTERS ---
  function updateArtworksUI() {
    const t = copy[currentLocale];
    const cards = document.querySelectorAll(".work-card");
    let visibleCount = 0;

    cards.forEach((card, index) => {
      const art = artworks[index];
      const match = activeFilter === "Tout" || art.mediumCategory === activeFilter;

      if (match) {
        card.classList.remove("is-hidden");
        visibleCount++;
      } else {
        card.classList.add("is-hidden");
      }

      // Update caption texts
      const captionNumber = card.querySelector(".caption-number");
      if (captionNumber) {
        captionNumber.textContent = `${t.workLabel} · ${String(index + 1).padStart(2, "0")}`;
      }
      const captionMedium = card.querySelector(".caption-medium");
      if (captionMedium) {
        captionMedium.textContent = currentLocale === "fr" ? art.mediumFr : art.mediumEn;
      }
      const hoverLabel = card.querySelector(".work-hover-label");
      if (hoverLabel) {
        hoverLabel.innerHTML = `${t.viewLabel} ↗`;
      }
      card.setAttribute("aria-label", `${t.viewLabel} : ${currentLocale === "fr" ? art.altFr : art.altEn}`);
    });

    const countNumberEl = document.getElementById("works-count-number");
    if (countNumberEl) {
      countNumberEl.textContent = String(visibleCount).padStart(2, "0");
    }
  }

  function setFilter(filterCategory, buttonEl) {
    activeFilter = filterCategory;
    document.querySelectorAll(".work-filters button").forEach((btn) => btn.classList.remove("filter-active"));
    if (buttonEl) buttonEl.classList.add("filter-active");
    updateArtworksUI();
  }

  // --- LIGHTBOX MODAL ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxInquireBtn = document.getElementById("lightbox-inquire-btn");

  function openLightbox(index) {
    activeLightboxIndex = index;
    updateLightboxContent(index);
    lightbox.classList.add("is-open");
    document.body.classList.add("dialog-open");
  }

  function closeLightbox() {
    activeLightboxIndex = null;
    lightbox.classList.remove("is-open");
    document.body.classList.remove("dialog-open");
  }

  function updateLightboxContent(index) {
    const art = artworks[index];
    const t = copy[currentLocale];
    const alt = currentLocale === "fr" ? art.altFr : art.altEn;
    const medium = currentLocale === "fr" ? art.mediumFr : art.mediumEn;

    if (lightboxImg) {
      lightboxImg.src = art.src;
      lightboxImg.alt = alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = `${alt} · ${medium}`;
    }
    if (lightboxInquireBtn) {
      lightboxInquireBtn.textContent = t.contactArtwork;
    }
  }

  function cycleLightbox(direction) {
    if (activeLightboxIndex === null) return;
    activeLightboxIndex = (activeLightboxIndex + direction + artworks.length) % artworks.length;
    updateLightboxContent(activeLightboxIndex);
  }

  // --- CONTACT FORM HANDLER ---
  function initContactForm() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("form-status");
    const submitBtn = document.getElementById("contact-submit-btn");

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const t = copy[currentLocale];

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const msgInput = document.getElementById("contact-message");

      if (!nameInput.value.trim() || !emailInput.value.trim() || msgInput.value.trim().length < 10) {
        statusMsg.className = "form-status error";
        statusMsg.textContent = t.formError;
        return;
      }

      // Simulated sending state
      const btnText = submitBtn.querySelector("[data-i18n='send']");
      submitBtn.disabled = true;
      if (btnText) {
        btnText.textContent = "…";
      } else {
        submitBtn.textContent = "…";
      }
      statusMsg.textContent = "";

      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) {
          btnText.textContent = t.send;
        } else {
          submitBtn.textContent = t.send;
        }
        statusMsg.className = "form-status sent";
        statusMsg.textContent = t.formSuccess;
        form.reset();
      }, 500);
    });
  }

  // --- MOBILE NAV TOGGLE ---
  function initNavigation() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (!toggleBtn || !mobileNav) return;

    toggleBtn.addEventListener("click", () => {
      menuOpen = !menuOpen;
      toggleBtn.setAttribute("aria-expanded", String(menuOpen));
      mobileNav.classList.toggle("is-open", menuOpen);
      toggleBtn.textContent = menuOpen ? copy[currentLocale].close : copy[currentLocale].menu;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuOpen = false;
        toggleBtn.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        toggleBtn.textContent = copy[currentLocale].menu;
      });
    });
  }

  // --- EVENT LISTENERS & SETUP ---
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial Theme & Language
    applyTheme(activeTheme, activeMode);
    setLanguage(currentLocale);

    // 2. Theme Controls
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleMode);
    }

    const themeSelect = document.getElementById("theme-select");
    if (themeSelect) {
      themeSelect.addEventListener("change", (e) => setTheme(e.target.value));
    }

    // 3. Language Controls
    const langSwitchBtn = document.getElementById("language-switch");
    if (langSwitchBtn) {
      langSwitchBtn.addEventListener("click", toggleLanguage);
    }

    // 4. Artwork Card Clicks
    document.querySelectorAll(".work-card").forEach((card) => {
      card.addEventListener("click", () => {
        const index = parseInt(card.getAttribute("data-index"), 10);
        openLightbox(index);
      });
    });

    // 5. Lightbox Controls
    const closeBtn = document.getElementById("lightbox-close");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    const prevBtn = document.getElementById("lightbox-prev");
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); cycleLightbox(-1); });

    const nextBtn = document.getElementById("lightbox-next");
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); cycleLightbox(1); });

    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    if (lightboxInquireBtn) {
      lightboxInquireBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const t = copy[currentLocale];
        const num = activeLightboxIndex !== null ? activeLightboxIndex + 1 : 1;
        const msgField = document.getElementById("contact-message");
        if (msgField) {
          msgField.value = `${t.inquiryPrefix} ${num}.`;
        }
        closeLightbox();
        const visitSection = document.getElementById("visite");
        if (visitSection) {
          visitSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => msgField && msgField.focus(), 600);
        }
      });
    }

    // Keyboard navigation for Lightbox
    document.addEventListener("keydown", (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") cycleLightbox(-1);
      if (e.key === "ArrowRight") cycleLightbox(1);
    });

    // 6. Artwork Filter Buttons
    const filterButtons = document.querySelectorAll(".work-filters button");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        setFilter(category, btn);
      });
    });

    // 7. Contact Form
    initContactForm();

    // 8. Mobile Navigation
    initNavigation();

    // 9. URL Query Parameter for artwork inquiry (`?oeuvre=3`)
    const urlParams = new URLSearchParams(window.location.search);
    const oeuvreParam = urlParams.get("oeuvre");
    if (oeuvreParam) {
      const msgField = document.getElementById("contact-message");
      if (msgField) {
        msgField.value = `${copy[currentLocale].inquiryPrefix} ${oeuvreParam}.`;
      }
    }

    // 12. Header Scroll Elevation & Back-to-Top
    const siteHeader = document.getElementById("site-header");
    if (siteHeader) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 25) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})();
