// Greek pottery background images - direct URLs
const BG_IMAGES = [
  "./960px-Amphora_birth_Athena_Louvre_F32.jpg",
  "./960px-Dionysos_satyrs_Cdm_Paris_575.jpg",
  "./960px-Heracles_Geryon_Louvre_F55.jpg",
  "./960px-Akhilleus_Penthesileia_Staatliche_Antikensammlungen_1502.jpg",
  "./Exekias_-_ABV_146_21_-_Dionysos_reclining_in_a_ship_-_fight_-_München_AS_8729_-_04.jpg",
  "./960px-Thetis_Peleus_Cdm_Paris_539.jpg"
];

let currentBgIndex = 0;
let bgElements = [];

function initBackgrounds() {
  bgElements = [
    document.getElementById('bg1'),
    document.getElementById('bg2'),
    document.getElementById('bg3')
  ];

  bgElements.forEach((el, idx) => {
    el.style.backgroundImage = `url(${BG_IMAGES[idx % BG_IMAGES.length]})`;
  });

  setInterval(rotateBackground, 12000);
}

function rotateBackground() {
  const currentEl = bgElements[currentBgIndex % bgElements.length];
  const nextIndex = (currentBgIndex + 1) % bgElements.length;
  const nextEl = bgElements[nextIndex];

  const nextImageIndex = (currentBgIndex + bgElements.length) % BG_IMAGES.length;
  nextEl.style.backgroundImage = `url(${BG_IMAGES[nextImageIndex]})`;

  currentEl.classList.remove('active');
  nextEl.classList.add('active');

  currentBgIndex = nextIndex;
}

const FACTS = [
  ["Έπου θεῴ","Obedece al dios"],
  ["Νόμοις πείθου","Obedece a las leyes"],
  ["Θεούς σέβου","Respeta a a los dioses"],
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
  ["Αποκρίνου εν *καιρῴ", "Responde en el momento oportuno"],
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

const GREEK_CHARS = ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω'];
const SPANISH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';

let currentMaxim = null;
let isTransitioning = false;

function getRandomChar(isGreek) {
  if (isGreek) {
    return GREEK_CHARS[Math.floor(Math.random() * GREEK_CHARS.length)];
  }
  return SPANISH_CHARS[Math.floor(Math.random() * SPANISH_CHARS.length)];
}

function scrambleText(element, targetText, isGreek, callback) {
  let iterations = 0;
  const maxIterations = 20;
  const interval = setInterval(() => {
    element.innerHTML = targetText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iterations) {
          return targetText[index];
        }
        return getRandomChar(isGreek);
      })
      .join('');

    iterations += 1;

    if (iterations > maxIterations) {
      clearInterval(interval);
      element.innerHTML = targetText;
      if (callback) callback();
    }
  }, 40);
}

function applyGlitchEffect(element, callback) {
  element.classList.add('text-glitch');
  setTimeout(() => {
    element.classList.remove('text-glitch');
    if (callback) callback();
  }, 300);
}

function applyFlickerEffect(element, callback) {
  element.classList.add('flicker');
  setTimeout(() => {
    element.classList.remove('flicker');
    if (callback) callback();
  }, 450);
}

function applyContainerGlitch(container, callback) {
  container.classList.add('glitch-active');
  setTimeout(() => {
    container.classList.remove('glitch-active');
    if (callback) callback();
  }, 300);
}

function changeMaxim() {
  if (isTransitioning) return;
  isTransitioning = true;

  const factText = document.getElementById('fact_text');
  const factTextGreek = document.getElementById('fact_text_greek');
  const container = document.getElementById('maxim-container');

  let newMaxim;
  do {
    newMaxim = FACTS[Math.floor(Math.random() * FACTS.length)];
  } while (currentMaxim && newMaxim[0] === currentMaxim[0]);

  currentMaxim = newMaxim;
  const [greek, spanish] = newMaxim;

  applyContainerGlitch(container, () => {
    applyGlitchEffect(factText, () => {
      applyFlickerEffect(factTextGreek, () => {
        scrambleText(factText, spanish, false, () => {
          scrambleText(factTextGreek, greek, true, () => {
            isTransitioning = false;
          });
        });
      });
    });
  });
}

function refresh() {
  changeMaxim();
  setTimeout(refresh, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  const factText = document.getElementById('fact_text');
  const factTextGreek = document.getElementById('fact_text_greek');

  initBackgrounds();

  const initialMaxim = FACTS[Math.floor(Math.random() * FACTS.length)];
  currentMaxim = initialMaxim;

  scrambleText(factText, initialMaxim[1], false, () => {
    scrambleText(factTextGreek, initialMaxim[0], true, () => {
      setTimeout(refresh, 4000);
    });
  });
});
