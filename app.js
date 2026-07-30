// Local, GitHub Pages-safe image rotation. The two very large source files stay
// out of the homepage path so a new tab remains quick to load.
const PLATE_IMAGES = [
  "./960px-Amphora_birth_Athena_Louvre_F32.jpg",
  "./960px-Dionysos_satyrs_Cdm_Paris_575.jpg",
  "./960px-Heracles_Geryon_Louvre_F55.jpg",
  "./960px-Akhilleus_Penthesileia_Staatliche_Antikensammlungen_1502.jpg"
];

const ORACLE_INTERVAL = 16000;
const CERAMIC_INTERVAL = 18000;
const GREEK_CHARS = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
const SPANISH_CHARS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

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

let maximDeck = [];
let oracleTimer;
let ceramicTimer;
let ceramicIndex = 0;
let activeCeramicLayer = 0;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ROTATING_MAXIM_INDEXES = FACTS
  .map((_, index) => index)
  .filter((index) => FACTS[index][0] !== "Μηδέν άγαν");

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function nextMaximIndex() {
  if (maximDeck.length === 0) {
    maximDeck = shuffle(ROTATING_MAXIM_INDEXES);
  }
  return maximDeck.pop();
}

function randomCharacter(alphabet) {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function scrambleText(element, targetText, alphabet) {
  if (prefersReducedMotion.matches) {
    element.textContent = targetText;
    return Promise.resolve();
  }

  const characters = [...targetText];
  const totalFrames = 24;
  let frame = 0;

  return new Promise((resolve) => {
    const interval = window.setInterval(() => {
      const resolvedCharacters = Math.floor((frame / totalFrames) * characters.length);

      element.textContent = characters
        .map((character, index) => {
          if (/\s|[.,;:·—'’!?]/u.test(character) || index < resolvedCharacters) {
            return character;
          }
          return randomCharacter(alphabet);
        })
        .join('');

      frame += 1;

      if (frame > totalFrames) {
        window.clearInterval(interval);
        element.textContent = targetText;
        resolve();
      }
    }, 38);
  });
}

function restartProgress() {
  const progress = document.getElementById('oracle-progress');
  progress.classList.remove('running');
  // Restarting a CSS animation requires one layout read between state changes.
  void progress.offsetWidth;
  if (!prefersReducedMotion.matches && !document.hidden) {
    progress.classList.add('running');
  }
}

function scheduleOracle() {
  window.clearTimeout(oracleTimer);
  restartProgress();
  if (!document.hidden) {
    oracleTimer = window.setTimeout(showNextMaxim, ORACLE_INTERVAL);
  }
}

async function showNextMaxim() {
  const panel = document.getElementById('oraculo');
  const greekText = document.getElementById('fact_text_greek');
  const spanishText = document.getElementById('fact_text');
  const counter = document.getElementById('oracle-number');
  const maximIndex = nextMaximIndex();
  const [greek, spanish] = FACTS[maximIndex];

  counter.textContent = String(maximIndex + 1).padStart(3, '0');

  panel.classList.add('is-scrambling');
  await Promise.all([
    scrambleText(greekText, greek, GREEK_CHARS),
    scrambleText(spanishText, spanish, SPANISH_CHARS)
  ]);
  panel.classList.remove('is-scrambling');

  scheduleOracle();
}

function setCeramicImage(layer, imageIndex) {
  layer.style.backgroundImage = `url("${PLATE_IMAGES[imageIndex]}")`;
}

function rotateCeramic() {
  const layers = [
    document.getElementById('ceramic-a'),
    document.getElementById('ceramic-b')
  ];
  const currentLayer = layers[activeCeramicLayer];
  const nextLayerIndex = activeCeramicLayer === 0 ? 1 : 0;
  const nextLayer = layers[nextLayerIndex];

  ceramicIndex = (ceramicIndex + 1) % PLATE_IMAGES.length;
  setCeramicImage(nextLayer, ceramicIndex);
  nextLayer.classList.add('active');
  currentLayer.classList.remove('active');
  activeCeramicLayer = nextLayerIndex;

}

function scheduleCeramicRotation() {
  window.clearInterval(ceramicTimer);
  if (!document.hidden && !prefersReducedMotion.matches) {
    ceramicTimer = window.setInterval(rotateCeramic, CERAMIC_INTERVAL);
  }
}

function initCeramics() {
  setCeramicImage(document.getElementById('ceramic-a'), ceramicIndex);
  const nextPlate = new Image();
  nextPlate.src = PLATE_IMAGES[1];
  scheduleCeramicRotation();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    window.clearTimeout(oracleTimer);
    window.clearInterval(ceramicTimer);
    document.getElementById('oracle-progress').classList.remove('running');
  } else {
    scheduleOracle();
    scheduleCeramicRotation();
  }
});

prefersReducedMotion.addEventListener('change', () => {
  scheduleOracle();
  scheduleCeramicRotation();
});

document.addEventListener('DOMContentLoaded', () => {
  initCeramics();
  showNextMaxim();
});
