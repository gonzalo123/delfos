// The original Greek and Spanish collection is kept intact.
const FACTS = [
  ["Έπου θεῴ","Obedece al dios"],
  ["Νόμοις πείθου","Obedece a las leyes"],
  ["Θεούς σέβου","Respeta a los dioses"],
  ["Γονείς αίδου","Respeta a tus padres"],
  ["Ηττώ υπέρ δικαίου","Sométete a la justicia"],
  ["Γνῶθι μαθών","Aprende a aprender"],
  ["Ακούσας νόει","Reflexiona sobre lo que hayas escuchado"],
  ["Εστίαν τίμα","Honra tu casa"],
  ["Άρχε σεαυτού","Manda de ti mismo"],
  ["Φίλους βοήθει","Ayuda a tus amigos"],
  ["Θυμοῦ κράτει","Domina tu carácter"],
  ["Όρκῶ μη χρω","No te sirvas de los juramentos"],
  ["Φιλίαν αγάπα", "Ama la amistad"],
  ["Παιδείας αντέχου","Persevera en tu educación"],
  ["Σοφίαν ζήτει","Busca la sabiduría"],
  ["Ψέγε μηδένα","No censures"],
  ["Επαίνει αρετήν","Ensalza la virtud"],
  ["Πράττε δίκαια","Actúa de modo justo"],
  ["Φίλοις ευνόει","Sé benévolo con tus amigos"],
  ["Εχθρούς αμύνου","Aparta a tus enemigos"],
  ["Ευγένειαν άσκει", "Ejercita la nobleza"],
  ["Κακίας απέχου","Aléjate del mal"],
  ["Εύφημος ίσθι","Aprende a ser bienhablado"],
  ["Άκουε πάντα","Escúchalo todo"],
  ["Μηδέν άγαν", "Nada en demasía"],
  ["Χρόνου φείδου","No pierdas el tiempo"],
  ["Ύβριν μίσει","Aborrece la arrogancia"],
  ["Ικέτας αίδου","Respeta a los suplicantes"],
  ["Υιούς παίδευε","Educa a tus hijos"],
  ["Έχων χαρίζου","Sé generoso cuando tengas"],
  ["Δόλον φοβού","Cuídate del engaño"],
  ["Ευλόγει πάντας","Háblale bien a todos"],
  ["Φιλόσοφος γίνου", "Hazte amante del saber"],
  ["Όσια κρίνε","Estima lo sagrado"],
  ["Γνους πράττε","Obra de acuerdo con tu conciencia"],
  ["Φόνου απέχου","No mates"],
  ["Σοφοίς χρω","Ten trato con los sabios"],
  ["Ήθος δοκίμαζε","Examina tu carácter"],
  ["Υφορώ μηδένα","No mires a nadie con desconfianza"],
  ["Τέχνῃ χρω","Haz uso del arte"],
  ["Ευεργεσίας τίμα","Honra la buena conducta"],
  ["Φθόνει μηδενί","No envidies a nadie"],
  ["Ελπίδα αίνει","Alaba la esperanza"],
  ["Διαβολήν μίσει","Aborrece la calumnia"],
  ["Δικαίως κτω","Obtén las cosas justamente"],
  ["Αγαθούς τίμα", "Honra a los buenos"],
  ["Αισχύνην σέβου","Ten sentimientos de pudor"],
  ["Ευτυχίαν εύχου","Desea la felicidad"],
  ["Εργάσου κτητά","Trabaja por lo que es digno de ser adquirido"],
  ["Έριν μίσει","Odia la discordia"],
  ["Όνειδος έχθαιρε","Aborrece la injuria"],
  ["Λέγε ειδώς","Habla cuando sepas"],
  ["Βίας μη έχου","Renuncia a la violencia"],
  ["Φιλοφρόνει πάσιν","Muestra benevolencia con todo el mundo"],
  ["Γλώττης άρχε","Domina tu lengua"],
  ["Σεαυτόν ευ ποίει", "Hazte el bien a ti mismo"],
  ["Ευπροσήγορος γίνου","Sé amable con todos"],
  ["Αποκρίνου εν καιρῴ", "Responde en el momento oportuno"],
  ["Πόνει μετά δικαίου","Esfuérzate más allá de lo necesario"],
  ["Πράττε αμετανοήτως","Actúa sin arrepentimiento"],
  ["Αμαρτάνων μετανόει","Arrepiéntete cuando te equivoques"],
  ["Οφθαλμού κράτει","Domina tu mirada"],
  ["Βουλεύου χρήσιμα","Piensa en lo útil"],
  ["Φιλίαν φύλασσε","Conserva la amistad"],
  ["Ευγνώμων γίνου","Sé agradecido"],
  ["Ομόνοιαν δίωκε","Busca la concordia"],
  ["Άρρητα μη λέγε","No digas lo indecible"],
  ["Έχθρας διάλυει","Aniquila el odio"],
  ["Γήρας προσδέχου","Acepta la vejez"],
  ["Επί ρώμη μη καυχώ","No alardees de tu fuerza"],
  ["Ευφημίαν άσκει","Ejercita una buena reputación"],
  ["Απέχθειαν φεύγε","Evita el resentimiento"],
  ["Πλούτει δικαίως","Enriquécete de manera honrada"],
  ["Κακίαν μίσει","Aborrece el mal"],
  ["Μανθάνων μη κάμνε", "No te canses de aprender"],
  ["Ους τρέφεις αγάπα","Ama a quienes te alimentan"],
  ["Απόντι μη μάχου","No combatas contra aquel que está ausente"],
  ["Πρεσβύτερον σέβου","Respeta al anciano"],
  ["Νεώτερον δίδασκε","Enseña a los más jóvenes"],
  ["Πλούτω απόστει","Distánciate de la riqueza"],
  ["Σεαυτόν αιδού","Respétate a ti mismo"],
  ["Μη άρχε υβρίζων", "No seas dominado por la arrogancia"],
  ["Προγόνους στεφάνου","Corona a tus antepasados"],
  ["Θνήσκε υπέρ πατρίδος","Muere por tu patria"],
  ["Επί νεκρώ μη γέλα","No te burles de los muertos"],
  ["Ατυχούντι συνάχθου","Siente compasión por los desgraciados"],
  ["Τύχῃ μη πίστευε","No confíes en la suerte"],
  ["Τελεύτα άλυπος","Muere exento de sufrimiento"]
];


const ORACLE_INTERVAL = 16000;
const MAXIM_EXIT_DURATION = 240;
const MAXIM_WORD_DURATION = 780;
const MAXIM_WORD_STAGGER = 55;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const $ = (id) => document.getElementById(id);
const archive = $('archive');
const progress = $('oracle-progress');
const rotatingIndexes = FACTS.map((_, index) => index)
  .filter((index) => FACTS[index][0] !== 'Μηδέν άγαν');
let maximDeck = [];
let currentIndex = -1;
let oracleTimer = 0;
let transitionTimer = 0;
let clockTimer = 0;
let startedAt = 0;
let remaining = ORACLE_INTERVAL;
let isChanging = false;
let contemplating = false;
let paused = false;
let pendingMaximIndex = null;
let activeWave = null;

// Storage may be unavailable in private tabs or when opened as a local file.
try { paused = localStorage.getItem('delfos-paused') === 'true'; } catch { /* Optional preference. */ }

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function nextMaximIndex() {
  if (!maximDeck.length) {
    maximDeck = shuffle(rotatingIndexes);
    // A fresh deck also avoids repeating the last item of the previous cycle.
    if (maximDeck.at(-1) === currentIndex) {
      [maximDeck[0], maximDeck[maximDeck.length - 1]] = [maximDeck.at(-1), maximDeck[0]];
    }
  }
  return maximDeck.pop();
}

function stopOracleTimer() {
  if (!oracleTimer) return;
  window.clearTimeout(oracleTimer);
  remaining = Math.max(0, remaining - (performance.now() - startedAt));
  oracleTimer = 0;
}

function syncPlayback(reset = false) {
  stopOracleTimer();
  syncMotionState();
  if (reset) {
    remaining = ORACLE_INTERVAL;
    progress.classList.remove('running');
    // One layout read restarts the CSS clock along with the reading timer.
    void progress.offsetWidth;
    progress.classList.add('running');
  }
  const suspended = paused || contemplating || archive.open || document.hidden || isChanging;
  progress.classList.toggle('is-paused', suspended);
  if (!suspended) {
    startedAt = performance.now();
    oracleTimer = window.setTimeout(() => {
      oracleTimer = 0;
      showMaxim(nextMaximIndex());
    }, remaining);
  }
}

function syncMotionState() {
  const suspended = paused || contemplating || archive.open || document.hidden;
  document.body.classList.toggle('motion-paused', suspended);
  if (suspended || prefersReducedMotion.matches) {
    if (activeWave) activeWave.cancel();
    activeWave = null;
    resetArt();
  }
}

function pulseOracle() {
  if (prefersReducedMotion.matches || paused || contemplating || archive.open || document.hidden) return;
  if (activeWave) activeWave.cancel();
  const wave = $('oracle-wave').animate([
    { transform: 'scale(.84)', opacity: 0, offset: 0 },
    { transform: 'scale(.91)', opacity: .65, offset: .18 },
    { transform: 'scale(1.17)', opacity: 0, offset: 1 }
  ], { duration: 1600, easing: 'cubic-bezier(.16, 1, .3, 1)' });
  activeWave = wave;
  wave.onfinish = () => { if (activeWave === wave) activeWave = null; };
}

function renderGreekMaxim(text) {
  const words = text.split(/\s+/u);
  const fragment = document.createDocumentFragment();
  words.forEach((word, index) => {
    if (index) fragment.append(' ');
    const span = document.createElement('span');
    span.className = 'maxim-word';
    span.style.setProperty('--word-order', Math.min(index, 8));
    span.textContent = word;
    fragment.append(span);
  });
  $('fact_text_greek').replaceChildren(fragment);
  return words.length;
}

function showMaxim(index, animate = true) {
  stopOracleTimer();
  window.clearTimeout(transitionTimer);
  isChanging = true;
  pendingMaximIndex = index;
  $('next-maxim').disabled = true;
  progress.classList.remove('running');
  const copy = $('oracle-copy');
  copy.classList.remove('is-revealing');
  const useMotion = animate && !prefersReducedMotion.matches && !document.hidden && !contemplating;

  function reveal() {
    currentIndex = index;
    maximDeck = maximDeck.filter((item) => item !== index);
    const [greek, spanish] = FACTS[index];
    const wordCount = renderGreekMaxim(greek);
    $('fact_text').textContent = spanish;
    $('oracle-number').textContent = String(index + 1).padStart(3, '0');
    $('oracle-announcement').textContent = spanish;
    copy.classList.remove('is-changing');
    if (useMotion) {
      copy.classList.add('is-revealing');
      pulseOracle();
    }

    function finish() {
      copy.classList.remove('is-revealing');
      isChanging = false;
      pendingMaximIndex = null;
      $('next-maxim').disabled = false;
      syncPlayback(true);
    }
    const revealDuration = MAXIM_WORD_DURATION + Math.min(wordCount - 1, 8) * MAXIM_WORD_STAGGER;
    if (useMotion) transitionTimer = window.setTimeout(finish, revealDuration);
    else finish();
  }

  if (useMotion) {
    copy.classList.add('is-changing');
    transitionTimer = window.setTimeout(reveal, MAXIM_EXIT_DURATION);
  } else reveal();
}

function showNextMaxim() {
  if (!isChanging) showMaxim(nextMaximIndex());
}

function updatePauseButton() {
  $('pause-oracle').setAttribute('aria-pressed', String(paused));
  $('pause-oracle').setAttribute('aria-label', `${paused ? 'Reanudar' : 'Pausar'} las máximas (P)`);
  $('playback-icon').setAttribute('href', paused ? '#icon-play' : '#icon-pause');
  $('playback-label').textContent = paused ? 'EN PAUSA' : 'CADA 16 S';
}

function togglePause() {
  paused = !paused;
  try { localStorage.setItem('delfos-paused', String(paused)); } catch { /* Optional preference. */ }
  updatePauseButton();
  syncPlayback();
}

function toggleContemplation(force) {
  contemplating = typeof force === 'boolean' ? force : !contemplating;
  document.body.classList.toggle('contemplating', contemplating);
  $('focus-mode').setAttribute('aria-pressed', String(contemplating));
  $('focus-mode').setAttribute('aria-label', `${contemplating ? 'Salir del' : 'Activar'} modo contemplación (F)`);
  $('focus-label').textContent = contemplating ? 'Volver' : 'Contemplar';
  if (contemplating) $('focus-mode').focus({ preventScroll: true });
  resetArt();
  syncPlayback();
}

function normalizeSearch(text) {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es');
}

function renderArchive() {
  const query = normalizeSearch($('maxim-search').value.trim());
  const fragment = document.createDocumentFragment();
  let count = 0;
  FACTS.forEach(([greek, spanish], index) => {
    if (!normalizeSearch(`${greek} ${spanish}`).includes(query)) return;
    count += 1;
    const row = document.createElement('button');
    row.className = 'archive-row';
    row.type = 'button';
    row.dataset.index = index;
    if (index === currentIndex) row.setAttribute('aria-current', 'true');
    const number = document.createElement('span');
    number.className = 'archive-row-number';
    number.textContent = String(index + 1).padStart(3, '0');
    const copy = document.createElement('span');
    const greekText = document.createElement('span');
    greekText.className = 'archive-row-greek';
    greekText.lang = 'grc';
    greekText.textContent = greek;
    const spanishText = document.createElement('span');
    spanishText.className = 'archive-row-spanish';
    spanishText.textContent = spanish;
    copy.append(greekText, spanishText);
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#icon-arrow');
    arrow.append(use);
    row.append(number, copy, arrow);
    fragment.append(row);
  });
  $('archive-list').replaceChildren(fragment);
  $('archive-count').textContent = `${count} ${count === 1 ? 'MÁXIMA' : 'MÁXIMAS'} · GRIEGO Y ESPAÑOL`;
  $('archive-empty').hidden = count !== 0;
}

function openArchive() {
  if (archive.open) return;
  $('maxim-search').value = '';
  renderArchive();
  archive.showModal();
  archive.scrollTop = 0;
  $('maxim-search').focus({ preventScroll: true });
  syncPlayback();
}

function updateClock() {
  window.clearTimeout(clockTimer);
  const now = new Date();
  const clock = $('local-clock');
  clock.textContent = new Intl.DateTimeFormat('es', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(now);
  clock.dateTime = now.toISOString();
  $('local-date').textContent = new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', month: 'short' }).format(now);
  if (!document.hidden) clockTimer = window.setTimeout(updateClock, 60000 - (Date.now() % 60000));
}

const hero = document.querySelector('.hero');
let pointerFrame = 0;
function resetArt() {
  window.cancelAnimationFrame(pointerFrame);
  pointerFrame = 0;
  ['art', 'copy', 'orbit'].forEach((layer) => {
    hero.style.removeProperty(`--${layer}-x`);
    hero.style.removeProperty(`--${layer}-y`);
  });
}
hero.addEventListener('pointermove', (event) => {
  if (prefersReducedMotion.matches || !finePointer.matches || paused || contemplating || archive.open || document.hidden || pointerFrame) return;
  pointerFrame = window.requestAnimationFrame(() => {
    const bounds = hero.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - .5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - .5) * 2));
    hero.style.setProperty('--art-x', `${x * 22}px`);
    hero.style.setProperty('--art-y', `${y * 14}px`);
    hero.style.setProperty('--copy-x', `${x * -7}px`);
    hero.style.setProperty('--copy-y', `${y * -5}px`);
    hero.style.setProperty('--orbit-x', `${x * -12}px`);
    hero.style.setProperty('--orbit-y', `${y * -8}px`);
    pointerFrame = 0;
  });
});
hero.addEventListener('pointerleave', resetArt);
finePointer.addEventListener('change', resetArt);
prefersReducedMotion.addEventListener('change', () => {
  resetArt();
  syncMotionState();
  if (prefersReducedMotion.matches && pendingMaximIndex !== null) showMaxim(pendingMaximIndex, false);
});

$('next-maxim').addEventListener('click', showNextMaxim);
$('pause-oracle').addEventListener('click', togglePause);
$('focus-mode').addEventListener('click', () => toggleContemplation());
$('open-archive').addEventListener('click', openArchive);
$('close-archive').addEventListener('click', () => archive.close());
$('maxim-search').addEventListener('input', renderArchive);
$('archive-list').addEventListener('click', (event) => {
  const row = event.target.closest('button[data-index]');
  if (!row) return;
  showMaxim(Number(row.dataset.index));
  archive.close();
});
archive.addEventListener('close', () => syncPlayback());
archive.addEventListener('keydown', (event) => {
  // A search input otherwise consumes the first Escape to clear its value.
  if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    archive.close();
  }
}, { capture: true });
archive.addEventListener('click', (event) => {
  if (event.target !== archive) return;
  const bounds = archive.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) archive.close();
});

document.addEventListener('keydown', (event) => {
  if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || archive.open) return;
  if (event.target.closest('input, textarea, select, [contenteditable]')) return;
  if (event.code === 'Space') {
    if (event.target.closest('button, a')) return;
    event.preventDefault();
    showNextMaxim();
  } else if (event.key.toLowerCase() === 'p') togglePause();
  else if (event.key.toLowerCase() === 'f') toggleContemplation();
  else if (event.key.toLowerCase() === 'a' && !contemplating) openArchive();
});
// Escape also works when the contemplation button has keyboard focus.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && contemplating && !archive.open) toggleContemplation(false);
});

document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('tab-hidden', document.hidden);
  // Finish a pending reveal immediately so a hidden tab never freezes mid-word.
  if (document.hidden && pendingMaximIndex !== null) showMaxim(pendingMaximIndex, false);
  syncPlayback();
  updateClock();
  if (document.hidden) resetArt();
});

$('oracle-total').textContent = String(FACTS.length).padStart(3, '0');
updatePauseButton();
updateClock();
showMaxim(nextMaximIndex(), false);
