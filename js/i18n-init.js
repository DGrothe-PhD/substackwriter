const installedLanguages = ["de", "en", "fr"];
var initLang = navigator.language.substring(0,2);
const lang = (installedLanguages.indexOf(initLang) > -1) ? 
  installedLanguages.indexOf(initLang) : "en";


function updateContent() {
  const localeIds = ["title", "headline", "advice",
    "prettify", "removeEmpty", "copyText", "clearAll", "countWords"];
  for(let id of localeIds){
    document.getElementById(id).innerHTML = i18next.t(id);
  }
  document.getElementById("userinput").setAttribute("placeholder", i18next.t("typeHere"));
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
		if(document.getElementById(`btn-${lang}`))
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