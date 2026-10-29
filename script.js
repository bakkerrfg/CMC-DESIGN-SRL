(function () {
  var L = function (it, en) { return '<span class="it">' + it + '</span><span class="en">' + en + '</span>'; };
  var lang = 'it';
  try { lang = localStorage.getItem('lang') || 'it'; } catch (e) {}
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  var header = '<header><div class="wrap nav">' +
    '<a href="index.html" class="logo">CMC DESIGN<small>INTERIOR &amp; PROJECT</small></a>' +
    '<nav><ul id="menu">' +
    '<li><a href="index.html#about">' + L('Studio', 'Studio') + '</a></li>' +
    '<li><a href="index.html#services">' + L('Servizi', 'Services') + '</a></li>' +
    '<li><a href="index.html#projects">' + L('Progetti', 'Projects') + '</a></li>' +
    '<li><a href="index.html#process">' + L('Metodo', 'Process') + '</a></li>' +
    '<li><a href="index.html#contact">' + L('Contatti', 'Contact') + '</a></li>' +
    '<li class="lang"><button data-l="it">IT</button><button data-l="en">EN</button></li>' +
    '</ul></nav><button class="burger" aria-label="Menu" id="bg">&#9776;</button></div></header>';

  var footer = '<footer><div class="wrap"><div class="fgrid">' +
    '<div><a href="index.html" class="logo" style="color:#fff">CMC DESIGN</a>' +
    '<p style="margin-top:16px;max-width:320px">' + L('Progettazione di interni, arredi su misura e direzione lavori nel cuore della Sicilia.', 'Interior design, bespoke furnishing and project management in the heart of Sicily.') + '</p></div>' +
    '<div><h4>' + L('Sede', 'Office') + '</h4><ul><li>CMC DESIGN SRL</li><li>Via Andrea Sigona 161/B</li><li>97016 Pozzallo (RG)</li><li>' + L('Italia', 'Italy') + '</li></ul></div>' +
    '<div><h4>' + L('Informazioni', 'Information') + '</h4><ul>' +
    '<li><a href="privacy.html">Privacy Policy</a></li><li><a href="cookies.html">Cookie Policy</a></li>' +
    '<li><a href="termini.html">' + L('Termini e Condizioni', 'Terms &amp; Conditions') + '</a></li>' +
    '<li><a href="index.html#contact">' + L('Contatti', 'Contact') + '</a></li></ul></div></div>' +
    '<div class="legal"><span>&copy; ' + new Date().getFullYear() + ' CMC DESIGN SRL. ' + L('Tutti i diritti riservati.', 'All rights reserved.') + '</span>' +
    '<span>' + L('Via Andrea Sigona 161/B, 97016 Pozzallo, Italia', 'Via Andrea Sigona 161/B, 97016 Pozzallo, Italy') + '</span></div></div></footer>';

  var banner = '<div id="cb"><p>' + L(
    'Utilizziamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso potremmo usare anche cookie di analisi. Maggiori dettagli nella <a href="cookies.html">Cookie Policy</a>.',
    'We use technical cookies required for the site to work. With your consent we may also use analytics cookies. See our <a href="cookies.html">Cookie Policy</a> for details.') + '</p>' +
    '<button class="btn dark fill" data-c="all">' + L('Accetta', 'Accept') + '</button>' +
    '<button class="btn dark" data-c="nec">' + L('Solo necessari', 'Necessary only') + '</button></div>';

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + banner);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-l');
      document.documentElement.setAttribute('data-lang', l);
      document.documentElement.lang = l;
      try { localStorage.setItem('lang', l); } catch (e) {}
    });
  });
  document.getElementById('bg').addEventListener('click', function () { document.getElementById('menu').classList.toggle('open'); });
  document.querySelectorAll('#menu a').forEach(function (a) { a.addEventListener('click', function () { document.getElementById('menu').classList.remove('open'); }); });

  var cb = document.getElementById('cb'), seen = false;
  try { seen = localStorage.getItem('cc'); } catch (e) {}
  if (!seen) cb.style.display = 'block';
  cb.querySelectorAll('button').forEach(function (b) {
    b.addEventListener('click', function () { try { localStorage.setItem('cc', b.getAttribute('data-c')); } catch (e) {} cb.style.display = 'none'; });
  });

  var f = document.getElementById('cf');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    f.style.display = 'none';
    document.getElementById('ok').style.display = 'block';
  });
})();
