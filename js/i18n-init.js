const lang = navigator.language.startsWith("de") ? "de" : "en";

function updateContent() {
  document.getElementById("title").textContent = i18next.t("title");
  document.getElementById("headline").textContent = i18next.t("headline");
  document.getElementById("advice").textContent = i18next.t("advice");
  //document.querySelector("h1").textContent         = i18next.t("title");
  //document.querySelector("p.intro").textContent    = i18next.t("intro");
  //document.querySelector("footer p").textContent   = i18next.t("footer");
  // ... weitere Elemente
}

fetch(`./locales/${lang}.json`)
  .then(r => r.json())
  .then(translations => {
    return i18next.init({
      lng: lang,
      resources: {
        [lang]: { translation: translations }
      }
    });
  })
  .then(() => {
    updateContent();
    document.getElementById(`btn-${lang}`).classList.add('active');
  });

function switchLang(newLang) {
  // Übersetzung für diese Sprache ggf. erst nachladen
  if (!i18next.hasResourceBundle(newLang, 'translation')) {
    fetch(`./locales/${newLang}.json`)
      .then(r => r.json())
      .then(translations => {
        i18next.addResourceBundle(newLang, 'translation', translations);
        return i18next.changeLanguage(newLang);
      })
      .then(() => {
        updateContent();
        updateButtons(newLang);
      });
  } else {
    i18next.changeLanguage(newLang).then(() => {
      updateContent();
      updateButtons(newLang);
    });
  }
}

function updateButtons(lang) {
  document.querySelectorAll('#lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.id === `btn-${lang}`);
  });
}


// Beim Start den richtigen Button markieren
//document.getElementById(`btn-${lang}`).classList.add('active');