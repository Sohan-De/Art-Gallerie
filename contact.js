// Galerie Dealer d'art - Contact Page JavaScript Engine
// Bilingual (FR/EN), Multi-Theme Engine, Real-time Open Status, Interactive Chips, FAQ Accordion

(function () {
  "use strict";

  // Themes loaded from color.js
  const themes = window.themes || {};

  // Gallery opening schedule (Montmorillon / France time)
  const galleryHours = [
    { dayIndex: 1, nameFr: "Lundi", nameEn: "Monday", opens: [], closed: true },
    { dayIndex: 2, nameFr: "Mardi", nameEn: "Tuesday", opens: [["14:00", "18:00"]] },
    { dayIndex: 3, nameFr: "Mercredi", nameEn: "Wednesday", opens: [["10:00", "18:00"]] },
    { dayIndex: 4, nameFr: "Jeudi", nameEn: "Thursday", opens: [["14:00", "18:00"]] },
    { dayIndex: 5, nameFr: "Vendredi", nameEn: "Friday", opens: [["14:00", "18:00"]] },
    { dayIndex: 6, nameFr: "Samedi", nameEn: "Saturday", opens: [["10:00", "12:00"], ["14:00", "18:00"]] },
    { dayIndex: 0, nameFr: "Dimanche", nameEn: "Sunday", opens: [["10:00", "12:00"], ["14:00", "18:00"]] },
  ];

  // Bilingual strings dictionary
  const copy = {
    fr: {
      siteTitle: "Contact & Atelier — Galerie Dealer d'art",
      navHome: "Accueil",
      navArtist: "L’artiste",
      navExhibitions: "Expositions",
      navGallery: "Galerie",
      navVisit: "Visite",
      navContact: "Contact",
      crumbHome: "Accueil",
      crumbContact: "Contact & Atelier",
      heroKicker: "05 — Atelier & Rencontres",
      heroTitle: "Échangeons autour d'une <em>toile</em> ou d'un projet.",
      heroSub: "Que vous souhaitiez acquérir une œuvre, planifier une visite privée avec Jicé ou échanger sur une commande personnalisée, nous vous répondons avec soin sous 24 à 48h.",
      statusOpen: "Atelier Ouvert",
      statusClosed: "Fermé pour le moment",
      statusSubOpen: "Visite libre ou sur rendez-vous",
      statusSubClosed: "Rendez-vous privés disponibles",
      artistCardName: "Jicé",
      artistCardRole: "Artiste peintre & Galeriste",
      artistCardQuote: "« Chaque toile naît d’une émotion, mais elle prend tout son sens lorsqu’elle rencontre le regard de celui ou celle qui la contemple. Venez partager ce moment à l'atelier. »",
      channelPhoneLabel: "Téléphone direct",
      channelPhoneVal: "+33 6 56 80 45 59",
      channelEmailLabel: "E-mail atelier",
      channelEmailVal: "contact@dealerdart.fr",
      channelAddressLabel: "Adresse & Galerie",
      channelAddressVal: "10 Grand Rue, 86500 Montmorillon",
      channelItineraryLabel: "Itinéraire Maps",
      channelItineraryVal: "Cité de l'Écrit · France",
      hoursTitle: "Horaires de la galerie",
      hoursClosedText: "Fermé",
      hoursFootnote: "Visites libres aux horaires d'ouverture ou accueil privé sur rendez-vous avec Jicé.",
      formKicker: "Formulaire d'échange",
      formTitle: "Envoyer un message à l'atelier",
      formSub: "Remplissez ce formulaire et Jicé vous contactera directement.",
      topicLabel: "Quel est le sujet de votre message ?",
      topic1: "Acquérir une œuvre",
      topic2: "Visite privée de l'atelier",
      topic3: "Commande sur-mesure",
      topic4: "Presse & Partenariat",
      topic5: "Autre question",
      labelName: "Votre nom complet",
      labelEmail: "Votre adresse e-mail",
      labelPhone: "Téléphone (optionnel)",
      labelArtwork: "Œuvre d’intérêt (optionnel)",
      labelMessage: "Votre message ou projet",
      placeholderName: "ex. Claire Laurent",
      placeholderEmail: "ex. claire@exemple.com",
      placeholderPhone: "ex. +33 6 12 34 56 78",
      placeholderArtwork: "ex. Œuvre · 01 (Peinture contemporaine)",
      placeholderMessage: "Parlez-nous de vos envies, de votre projet ou de vos disponibilités de visite...",
      privacyNotice: "J'accepte que mes données soient utilisées uniquement pour répondre à ma demande.",
      submitBtnText: "Envoyer le message",
      sendingText: "Envoi en cours…",
      formSuccess: "Message transmis avec succès ! Jicé vous répondra très rapidement.",
      formError: "Merci de bien renseigner votre nom, un e-mail valide et un message d’au moins 10 caractères.",
      locationTitle: "Venir à Montmorillon",
      accessTrainTitle: "En train",
      accessTrainDesc: "Gare de Montmorillon (ligne Poitiers–Limoges) à 10 minutes à pied de la galerie.",
      accessCarTitle: "En voiture",
      accessCarDesc: "Parkings gratuits à proximité immédiate (Place Saint-Divitien et bords de Gartempe).",
      accessWalkTitle: "Au cœur historique",
      accessWalkDesc: "Situé dans la Grand Rue piétonne de la charmante Cité de l'Écrit et des Métiers du Livre.",
      faqKicker: "Foire aux questions",
      faqTitle: "Questions des amateurs d'art",
      faqSub: "Tout ce qu'il faut savoir sur les acquisitions, visites et expéditions d'œuvres.",
      faqQ1: "Comment se déroule l'acquisition d'un tableau ?",
      faqA1: "Chaque acquisition s'accompagne d'une facture officielle et d'un certificat d'authenticité original signé par Jicé. Un paiement échelonné ou réservation peut être convenu sur simple demande.",
      faqQ2: "Peut-on faire expédier une toile en France ou à l'étranger ?",
      faqA2: "Oui, absolument. Les toiles sont emballées avec des matériaux de protection pour œuvres d'art (mousse technique, caisse rigide selon format) et expédiées avec assurance transport spécialisée.",
      faqQ3: "Faut-il obligatoirement réserver pour venir à la galerie ?",
      faqA3: "Non, les portes sont ouvertes à tous pendant les heures d'ouverture indiquées. Si vous souhaitez toutefois un moment privilégié et tranquille d'échange avec l'artiste, un rendez-vous est recommandé.",
      faqQ4: "Jicé réalise-t-il des commandes sur-mesure ?",
      faqA4: "Tout à fait ! Jicé échange volontiers avec vous sur les formats, la gamme chromatique et l'esprit souhaité pour composer une toile unique adaptée à votre intérieur.",
      footerCurator: "Galerie d’art contemporain & atelier de création par Jicé. Un espace d'expression libre, de rencontres et d'émotions artistiques à Montmorillon, Cité de l'Écrit.",
      footerColExploration: "Exploration",
      footerColVisit: "Coordonnées & Horaires",
      footerColValues: "Un lieu pour tous",
      footerInclusiveTitle: "Espace ouvert & bienveillant",
      footerNote: "Un espace accueillant, LGBTQ+ friendly.",
      footerVisitNote: "Visites libres pendant les horaires d’ouverture ou sur rendez-vous privé avec Jicé.",
      footerRights: "Tous droits réservés",
      citeDeLecrit: "Montmorillon · Cité de l’Écrit",
      backToTop: "Haut de page",
      directions: "Itinéraire",
      menu: "Menu",
      close: "Fermer",
      headerAtelierCity: "Montmorillon · Atelier",
      atelierSubtitle: "Atelier Jicé · Montmorillon",
    },
    en: {
      siteTitle: "Contact & Studio — Galerie Dealer d'art",
      navHome: "Home",
      navArtist: "The artist",
      navExhibitions: "Exhibitions",
      navGallery: "Gallery",
      navVisit: "Visit",
      navContact: "Contact",
      crumbHome: "Home",
      crumbContact: "Contact & Studio",
      heroKicker: "05 — Studio & Encounters",
      heroTitle: "Let's talk about a <em>painting</em> or a project.",
      heroSub: "Whether you wish to acquire an artwork, schedule a private studio viewing with Jicé, or discuss a bespoke commission, we will get back to you with care within 24 to 48 hours.",
      statusOpen: "Studio Open Now",
      statusClosed: "Currently Closed",
      statusSubOpen: "Walk-in visits or by appointment",
      statusSubClosed: "Private viewings available on request",
      artistCardName: "Jicé",
      artistCardRole: "Painter & Gallery Founder",
      artistCardQuote: "“Every painting begins with an emotion, but finds its true meaning when it connects with the eyes of the person beholding it. Come share that moment at the studio.”",
      channelPhoneLabel: "Direct telephone",
      channelPhoneVal: "+33 6 56 80 45 59",
      channelEmailLabel: "Studio email",
      channelEmailVal: "contact@dealerdart.fr",
      channelAddressLabel: "Address & Gallery",
      channelAddressVal: "10 Grand Rue, 86500 Montmorillon",
      channelItineraryLabel: "Google Maps Route",
      channelItineraryVal: "City of Writing · France",
      hoursTitle: "Gallery opening hours",
      hoursClosedText: "Closed",
      hoursFootnote: "Walk-in visits during opening hours or private reception by appointment with Jicé.",
      formKicker: "Studio Inquiry",
      formTitle: "Send a message to the studio",
      formSub: "Fill out this form and Jicé will reply to you directly.",
      topicLabel: "What is your inquiry about?",
      topic1: "Acquire an artwork",
      topic2: "Private studio visit",
      topic3: "Bespoke commission",
      topic4: "Press & Partnership",
      topic5: "Other question",
      labelName: "Your full name",
      labelEmail: "Your email address",
      labelPhone: "Phone number (optional)",
      labelArtwork: "Artwork of interest (optional)",
      labelMessage: "Your message or project",
      placeholderName: "e.g. Claire Laurent",
      placeholderEmail: "e.g. claire@example.com",
      placeholderPhone: "e.g. +33 6 12 34 56 78",
      placeholderArtwork: "e.g. Artwork · 01 (Contemporary painting)",
      placeholderMessage: "Tell us about your interests, project ideas, or preferred visit dates...",
      privacyNotice: "I agree that my information will only be used to respond to this request.",
      submitBtnText: "Send message",
      sendingText: "Sending…",
      formSuccess: "Message sent successfully! Jicé will respond very soon.",
      formError: "Please provide your name, a valid email, and a message of at least 10 characters.",
      locationTitle: "Visiting Montmorillon",
      accessTrainTitle: "By train",
      accessTrainDesc: "Montmorillon railway station (Poitiers–Limoges line) 10 minutes walking from the gallery.",
      accessCarTitle: "By car",
      accessCarDesc: "Free public parking nearby at Place Saint-Divitien and along the Gartempe riverbanks.",
      accessWalkTitle: "Historic precinct",
      accessWalkDesc: "Nestled in the pedestrian Grand Rue of the picturesque City of Writing and Bookcraft.",
      faqKicker: "Frequently Asked Questions",
      faqTitle: "Questions from art collectors",
      faqSub: "Everything you need to know about purchasing, visiting, and international shipping.",
      faqQ1: "How does the purchase of a painting work?",
      faqA1: "Every acquisition is accompanied by an official invoice and an original Certificate of Authenticity signed by Jicé. Flexible installment plans or reservations can be arranged upon request.",
      faqQ2: "Can artworks be safely shipped within France or worldwide?",
      faqA2: "Yes, absolutely. Artworks are packaged using high-grade archival museum protection (technical foam, custom wood crates for larger canvases) and dispatched with tracked specialized art transit insurance.",
      faqQ3: "Do I have to book in advance to visit the gallery?",
      faqA3: "No, doors are open to everyone during regular opening hours. However, if you would like dedicated one-on-one time with Jicé to explore particular pieces, an appointment is recommended.",
      faqQ4: "Does Jicé accept bespoke painting commissions?",
      faqA4: "Certainly! Jicé enjoys discussing custom dimensions, color palettes, and emotional tones to craft a one-of-a-kind original work tailored to your space.",
      footerCurator: "Contemporary art gallery & creative studio by Jicé. A space of free expression, encounters, and artistic emotion in Montmorillon, City of Writing.",
      footerColExploration: "Exploration",
      footerColVisit: "Coordinates & Hours",
      footerColValues: "A place for all",
      footerInclusiveTitle: "Welcoming & open space",
      footerNote: "A welcoming, LGBTQ+ friendly space.",
      footerVisitNote: "Walk-in visits during opening hours or by private appointment with Jicé.",
      footerRights: "All rights reserved",
      citeDeLecrit: "Montmorillon · City of Writing",
      backToTop: "Back to top",
      directions: "Directions",
      menu: "Menu",
      close: "Close",
      headerAtelierCity: "Montmorillon · Studio",
      atelierSubtitle: "Studio Jicé · Montmorillon",
    },
  };

  // State
  let currentLocale = localStorage.getItem("gallery-language") || "fr";
  let activeTheme = localStorage.getItem("gallery-theme-name") || "terracotta";
  let activeMode = localStorage.getItem("gallery-theme-mode") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let selectedTopic = "Acquérir une œuvre";
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

  // --- REALTIME SCHEDULE CHECKER ---
  function checkOpenStatus() {
    const now = new Date();
    // Montmorillon timezone is Europe/Paris
    const parisFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Paris",
      hour12: false,
      weekday: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    const parts = parisFormatter.formatToParts(now);
    let dayOfWeek = now.getDay(); // 0 is Sunday
    let hour = now.getHours();
    let minute = now.getMinutes();

    parts.forEach((p) => {
      if (p.type === "weekday") {
        const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        if (map[p.value] !== undefined) dayOfWeek = map[p.value];
      }
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    });

    const currentMinutes = hour * 60 + minute;
    const schedule = galleryHours.find((s) => s.dayIndex === dayOfWeek);

    let isOpen = false;
    if (schedule && !schedule.closed && schedule.opens) {
      for (const [start, end] of schedule.opens) {
        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);
        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em;
        if (currentMinutes >= startMin && currentMinutes < endMin) {
          isOpen = true;
          break;
        }
      }
    }

    // Update status badge UI
    const statusBadge = document.getElementById("hero-status-badge");
    const statusTitle = document.getElementById("hero-status-title");
    const statusDesc = document.getElementById("hero-status-desc");
    const hoursPill = document.getElementById("hours-status-pill");

    const t = copy[currentLocale];

    if (statusTitle && statusDesc) {
      if (isOpen) {
        statusTitle.textContent = t.statusOpen;
        statusDesc.textContent = t.statusSubOpen;
        if (statusBadge) statusBadge.classList.remove("is-closed");
      } else {
        statusTitle.textContent = t.statusClosed;
        statusDesc.textContent = t.statusSubClosed;
        if (statusBadge) statusBadge.classList.add("is-closed");
      }
    }

    if (hoursPill) {
      if (isOpen) {
        hoursPill.textContent = t.statusOpen;
        hoursPill.classList.remove("is-closed");
      } else {
        hoursPill.textContent = t.hoursClosedText;
        hoursPill.classList.add("is-closed");
      }
    }

    // Highlight today in hours table
    document.querySelectorAll(".hours-row").forEach((row) => {
      const idx = parseInt(row.getAttribute("data-day-index"), 10);
      if (idx === dayOfWeek) {
        row.classList.add("is-today");
      } else {
        row.classList.remove("is-today");
      }
    });
  }

  // --- LANGUAGE MANAGEMENT ---
  function setLanguage(locale) {
    currentLocale = locale;
    localStorage.setItem("gallery-language", locale);
    document.documentElement.lang = locale;

    const t = copy[locale];
    document.title = t.siteTitle;

    const langSwitch = document.getElementById("language-switch");
    if (langSwitch) {
      langSwitch.textContent = locale === "fr" ? "EN" : "FR";
      langSwitch.setAttribute("lang", locale === "fr" ? "en" : "fr");
    }

    // Text translations
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Placeholders
    const nameInput = document.getElementById("inquiry-name");
    if (nameInput) nameInput.placeholder = t.placeholderName;
    const emailInput = document.getElementById("inquiry-email");
    if (emailInput) emailInput.placeholder = t.placeholderEmail;
    const phoneInput = document.getElementById("inquiry-phone");
    if (phoneInput) phoneInput.placeholder = t.placeholderPhone;
    const artInput = document.getElementById("inquiry-artwork");
    if (artInput) artInput.placeholder = t.placeholderArtwork;
    const msgInput = document.getElementById("inquiry-message");
    if (msgInput) msgInput.placeholder = t.placeholderMessage;

    checkOpenStatus();
  }

  function toggleLanguage() {
    setLanguage(currentLocale === "fr" ? "en" : "fr");
  }

  // --- INTERACTIVE TOPIC CHIPS ---
  function initTopicChips() {
    const chips = document.querySelectorAll(".topic-chip");
    const subjectField = document.getElementById("inquiry-subject");
    const artworkFieldGroup = document.getElementById("field-artwork-group");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        selectedTopic = chip.getAttribute("data-topic");
        if (subjectField) subjectField.value = selectedTopic;

        // Auto-show/hide artwork field if relevant
        if (artworkFieldGroup) {
          if (selectedTopic === "Acquérir une œuvre") {
            artworkFieldGroup.style.display = "flex";
          } else {
            artworkFieldGroup.style.display = "flex"; // Keep visible but optional
          }
        }
      });
    });
  }

  // --- FAQ ACCORDION ---
  function initFaqAccordion() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const btn = item.querySelector(".faq-question-btn");
      if (btn) {
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("is-open");
          items.forEach((other) => {
            other.classList.remove("is-open");
            const otherBtn = other.querySelector(".faq-question-btn");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          });

          if (!isOpen) {
            item.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
          }
        });
      }
    });
  }

  // --- CONTACT FORM HANDLER ---
  function initInquiryForm() {
    const form = document.getElementById("contact-inquiry-form");
    const alertBox = document.getElementById("inquiry-form-status");
    const submitBtn = document.getElementById("inquiry-submit-btn");

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const t = copy[currentLocale];

      const name = document.getElementById("inquiry-name").value.trim();
      const email = document.getElementById("inquiry-email").value.trim();
      const message = document.getElementById("inquiry-message").value.trim();

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailValid || message.length < 10) {
        alertBox.className = "form-status-alert is-error";
        alertBox.textContent = t.formError;
        alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }

      // Simulated sending state
      const btnText = submitBtn.querySelector(".btn-label");
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = t.sendingText;
      alertBox.className = "form-status-alert";
      alertBox.textContent = "";

      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = t.submitBtnText;
        alertBox.className = "form-status-alert is-success";
        alertBox.textContent = t.formSuccess;
        form.reset();

        // Keep active topic chip reset to first
        const chips = document.querySelectorAll(".topic-chip");
        if (chips.length > 0) {
          chips.forEach((c) => c.classList.remove("is-active"));
          chips[0].classList.add("is-active");
          selectedTopic = chips[0].getAttribute("data-topic");
        }
      }, 700);
    });
  }

  // --- MOBILE NAVIGATION ---
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

  // --- CHECK URL QUERY PARAMETERS ---
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const oeuvre = params.get("oeuvre");
    const subject = params.get("subject");

    if (oeuvre) {
      const artField = document.getElementById("inquiry-artwork");
      if (artField) artField.value = `Œuvre · ${oeuvre}`;
      const msgField = document.getElementById("inquiry-message");
      if (msgField) {
        msgField.value = currentLocale === "fr"
          ? `Bonjour Jicé, je souhaiterais obtenir des informations sur l'acquisition de l'Œuvre n°${oeuvre}.`
          : `Hello Jicé, I would like to inquire about purchasing Artwork #${oeuvre}.`;
      }
    }

    if (subject) {
      const targetChip = Array.from(document.querySelectorAll(".topic-chip")).find(
        (chip) => chip.getAttribute("data-topic").toLowerCase().includes(subject.toLowerCase())
      );
      if (targetChip) targetChip.click();
    }
  }

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(activeTheme, activeMode);
    setLanguage(currentLocale);

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleMode);

    const themeSelect = document.getElementById("theme-select");
    if (themeSelect) themeSelect.addEventListener("change", (e) => setTheme(e.target.value));

    const langSwitchBtn = document.getElementById("language-switch");
    if (langSwitchBtn) langSwitchBtn.addEventListener("click", toggleLanguage);

    initTopicChips();
    initFaqAccordion();
    initInquiryForm();
    initNavigation();
    checkUrlParams();

    // Site Header elevation on scroll
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
