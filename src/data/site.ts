// Edini vir vseh besedil na strani. Komponente berejo vse od tukaj.
// Vse spodaj opisuje IZMIŠLJENO podjetje za namen prototipa.

import bathBefore from '../assets/bath-before.jpg';
import bathAfter from '../assets/bath-after.jpg';
import boilerBefore from '../assets/boiler-before.jpg';
import boilerAfter from '../assets/boiler-after.jpg';
import heatpumpBefore from '../assets/heatpump-before.jpg';
import heatpumpAfter from '../assets/heatpump-after.jpg';

export const business = {
  name: 'Kovač inštalacije',
  shortName: 'Kovač',
  tagline: 'Voda · Plin · Ogrevanje',
  owner: 'Marko Kovač',
  ownerFirst: 'Marko',
  ownerAccusative: 'Marka', // »Pokličite Marka«
  // Izmišljena, a realistična številka za prototip. Lahko pripada resnični osebi:
  // pred javno objavo jo OBVEZNO zamenjajte s pravo številko vodovodarja.
  phoneDisplay: '041 582 736',
  phoneTel: 'tel:+38641582736',
  phoneE164: '+38641582736',
  callLabel: 'Pokličite Kovač inštalacije na 041 582 736',
  base: 'Ljubljana',
  region: 'Ljubljana z okolico',
  hours: 'Pon–pet 7–19, sob 8–14',
  license: 'Pooblaščeni serviser plinskih naprav · št. 000',
  licenseShort: 'Pooblaščeni serviser',
  licenseBadge: ['PLIN', 'OK'],
  rating: '4,2',
  ratingValue: 4.2,
  reviewCount: 312,
  years: 18,
};

export const hero = {
  pill: 'Pon–pet 7–19 · sob 8–14',
  headline: 'Voda, kjer je ne bi smelo biti? Pokličite Marka.',
  subline: 'Lokalni vodovodar in serviser plinskih naprav v Ljubljani. Jasne cene, dogovorjene vnaprej, in 12 mesecev garancije na vsako delo.',
  cta: 'Pokličite zdaj',
  trustLabel: 'Zakaj nam ljudje zaupajo',
  reviewsLabel: 'Googlovih ocen',
  yearsLabel: 'let v domačem kraju',
  imageAlt: 'Marko Kovač stoji ob svojem kombiju Kovač inštalacije v Ljubljani',
};

export const objections = {
  hero: 'Brez stroškov prihoda · Cena dogovorjena, preden začnemo',
  services: 'Samo opišite težavo. Skupaj ugotovimo, kaj je narobe.',
  results: '12 mesecev garancije na vsako delo.',
  final: 'Klic je brezplačen in traja par minut. Brez obveznosti.',
  sticky: 'Pooblaščeni serviser · 4,2★ · 12 mesecev garancije',
};

export const cta = {
  header: 'Pokličite zdaj',
  primary: 'Pokličite zdaj',
  short: 'Pokličite zdaj',
  ask: 'Pokličite zdaj',
  sticky: 'Pokličite zdaj',
};

export const proofStats = [
  { value: '18 let', label: 'v Ljubljani in okolici' },
  { value: '4,2★', label: '312 Googlovih ocen' },
  { value: 'Brezplačen', label: 'prihod na dom' },
  { value: '12 mesecev', label: 'garancije na vsako delo' },
];

export const servicesSection = {
  eyebrow: 'Storitve',
  title: 'Kaj popravimo',
  intro: 'Velik ali majhen poseg, skrb je enaka.',
  ctaText: 'Ne veste, kaj je narobe? Opišite nam po telefonu.',
};

export const services = [
  { icon: 'droplets', title: 'Puščanje in počene cevi', text: 'Pipe, sifoni, priključki in cevi v steni. Popravimo samo tisto, kar je res pokvarjeno, brez nepotrebnega razbijanja.' },
  { icon: 'flame', title: 'Plinski kotli: popravilo in menjava', text: 'Popravimo vse večje znamke. Pred menjavo pridemo na ogled in vam povemo ceno in trajanje, brez presenečenj.' },
  { icon: 'toilet', title: 'Zamašeni odtoki in školjke', text: 'Voda odteka počasi ali se vrača? Odmašimo korita, školjke in odtočne cevi.' },
  { icon: 'bath', title: 'Prenova kopalnic', text: 'Nova pipa, tuš, školjka ali celotna kopalnica. Najprej pridemo na ogled, nato dobite ceno za točno to, kar želite.' },
  { icon: 'clipboard-check', title: 'Redni servis plinskih naprav', text: 'Redni servis podaljša življenjsko dobo kotla in zmanjša možnost okvare sredi zime. Pregledamo, očistimo in nastavimo.' },
  { icon: 'fan', title: 'Toplotne črpalke', text: 'Vgradnja in servis toplotnih črpalk zrak-voda. Namestimo jih tudi namesto stare peči na drva, kurilno olje ali plin.' },
];

export const extraWorks = {
  title: 'Urejamo tudi',
  items: [
    'Montaža, prestavitev in menjava radiatorjev',
    'Talno ogrevanje',
    'Bojlerji in zalogovniki tople vode',
    'Zamrznjene in počene cevi',
    'Zunanje pipe',
    'Priklop pralnih in pomivalnih strojev',
    'Popravila školjk, kotličkov in splakovalnikov',
    'Popravila tušev in tuš baterij',
    'Priklop plinskih štedilnikov in kuhališč',
    'Pametni termostati',
  ],
};

export const howItWorks = {
  eyebrow: 'Kako poteka',
  title: 'Trije koraki.',
  stepLabel: 'Korak',
  steps: [
    { icon: 'phone', title: 'Pokličete', text: 'Opišete težavo in dogovorimo termin.' },
    { icon: 'badge-euro', title: 'Cena', text: 'Ceno povemo, preden začnemo z delom.' },
    { icon: 'circle-check', title: 'Popravljeno', text: 'Z 12 meseci garancije na opravljeno delo.' },
  ],
};

export const guaranteesSection = {
  eyebrow: 'Garancije',
  title: 'Naše obljube vam',
  coversLabel: 'Velja za:',
  note: 'Te obljube veljajo poleg vaših zakonskih pravic, ne namesto njih. Ne veljajo za material, ki ste ga priskrbeli sami, ali za škodo, nastalo po našem odhodu.',
};

export const guarantees = [
  {
    icon: 'badge-euro',
    title: 'Cena, ki jo dogovorimo, je cena, ki jo plačate.',
    text: 'Preden začnemo, vam povemo celotno ceno. Če delo traja dlje, kot smo mislili, je to naša skrb, ne vaša.',
    covers: 'Vse delo pri dogovorjenem posegu. Če najdemo drugo težavo, se ustavimo in vas vprašamo, preden naredimo karkoli dodatnega.',
  },
  {
    icon: 'shield-check',
    title: '12 mesecev garancije na delo.',
    text: 'Če se v 12 mesecih pokvari karkoli, kar smo popravili ali vgradili, pridemo nazaj in brezplačno popravimo.',
    covers: 'Naše delo in ves material, ki smo ga dobavili. Novi kotli imajo poleg tega še garancijo proizvajalca (do 10 let).',
  },
  {
    icon: 'clock',
    title: 'Pridemo ali vas pravočasno obvestimo.',
    text: 'Pridemo v dogovorjenem terminu. Če se kaj zaplete, vas pokličemo, preden se termin začne.',
    covers: 'Vse dogovorjene obiske.',
  },
];

export const about = {
  eyebrow: 'O nas',
  heading: 'Spoznajte Marka',
  paragraphs: [
    'Kot vajenec sem začel v Šiški pri 23 letih in od takrat urejam vodovod in ogrevanje po Ljubljani in okolici.',
    'Moja dva monterja sta del moje ekipe, ne podizvajalca, in vsi delamo tako, kot bi želel, da nekdo dela pri moji mami doma: skrbno, čisto in pošteno glede cene.',
    'Ko pokličete, se oglasi eden izmed nas. Navadno kar jaz.',
  ],
  signature: 'Marko',
  signatureLabel: 'Podpis: Marko',
  imageAlt: 'Marko Kovač kleči pred odprto omarico pod kuhinjskim koritom z ključem v roki',
};

export const resultsSection = {
  eyebrow: 'Rezultati',
  title: 'Nedavna dela',
  beforeLabel: 'Pred',
  afterLabel: 'Po',
  problemLabel: 'Težava',
  fixLabel: 'Kaj smo naredili',
  resultLabel: 'Rezultat:',
  ctaText: 'Imate podobno delo?',
};

export const caseStudies = [
  {
    title: 'Prenova kopalnice',
    town: 'Domžale',
    duration: '6 dni',
    problem: 'Stara kopalnica iz leta 2000, počene ploščice in puščajoča tuš kabina, ki je zamakala strop kuhinje.',
    fix: 'Odstranili smo vse do sten, napeljali nove cevi, vgradili tuš brez kadi in viseče stranišče ter vse na novo obložili.',
    result: 'Nobenega puščanja več in kopalnica, ki jo je dvakrat lažje čistiti.',
    before: { label: 'Pred: stara kopalnica iz leta 2000', alt: 'Stara kopalnica iz leta 2000 v Domžalah pred prenovo, z bež ploščicami, mozaičnim trakom in polkrožno tuš kabino', image: bathBefore },
    after: { label: 'Po: tuš brez kadi', alt: 'Ista kopalnica v Domžalah po prenovi, s svetlo sivimi ploščicami, tušem brez kadi in visečo školjko', image: bathAfter },
  },
  {
    title: 'Menjava plinskega kotla',
    town: 'Vrhnika',
    duration: '1 dan',
    problem: '22 let star plinski kotel, mlačna voda in pozimi 160 € za plin na mesec.',
    fix: 'Odstranili smo stari kotel ter vgradili kondenzacijski kotel in pameten termostat.',
    result: 'Topla voda takoj in približno 40 € nižji računi za plin na mesec.',
    before: { label: 'Pred: star plinski kotel', alt: '22 let star stenski plinski kotel v kotlovnici hiše na Vrhniki, s sivo dimno cevjo, sajami na steni in rdečo raztezno posodo', image: boilerBefore },
    after: { label: 'Po: nov kondenzacijski kotel', alt: 'Nov bel kondenzacijski plinski kotel v isti kotlovnici na Vrhniki, z belo koaksialno dimno cevjo in izoliranimi cevmi', image: boilerAfter },
  },
  {
    title: 'Vgradnja toplotne črpalke',
    town: 'Škofljica',
    duration: '3 dni',
    problem: 'Star kotel na kurilno olje, visoki stroški ogrevanja in vsakoletno naročanje olja.',
    fix: 'Vgradili smo toplotno črpalko zrak-voda in jo priklopili na obstoječe radiatorje ter bojler.',
    result: 'Ogrevanje in topla voda na elektriko.',
    before: { label: 'Pred: pripravljen podstavek', alt: 'Stranska fasada hiše v Škofljici pred vgradnjo, z novim betonskim podstavkom in cevmi, ki štrlijo iz zidu', image: heatpumpBefore },
    after: { label: 'Po: zunanja enota toplotne črpalke', alt: 'Ista fasada po vgradnji, z belo zunanjo enoto toplotne črpalke na podstavku in cevmi v belem kanalu', image: heatpumpAfter },
  },
];

export const testimonialsSection = {
  eyebrow: 'Mnenja',
  title: 'Kaj pravijo stranke',
  ratingLine: 'Ocena 4,2 iz 312 Googlovih ocen',
  starsLabel: (n: number) => `${n} od 5 zvezdic`,
  more: (n: number) => {
    // Slovenska dvojina: 1 mnenje, 2 mnenji, 3–4 mnenja, 5+ mnenj
    const word = n % 100 === 1 ? 'mnenje' : n % 100 === 2 ? 'mnenji' : n % 100 === 3 || n % 100 === 4 ? 'mnenja' : 'mnenj';
    return `Preberite še ${n} ${word}`;
  },
  fewer: 'Prikaži manj mnenj',
  note: 'Vzorčna mnenja za izmišljeno podjetje.',
};

export const testimonials = [
  { quote: 'Pod kuhinjskim koritom je začela puščati cev. Marko je prišel ob dogovorjenem terminu, delal mirno, pospravil za sabo, cena pa je bila točno taka, kot jo je povedal po telefonu.', name: 'Maja', town: 'Domžale', job: 'Puščanje pod koritom', rating: 5 },
  { quote: 'Nov kotel vgrajen točno v roku, ki ga je povedal. Povsod zaščitna folija, na koncu so vse posesali. Ogrevanje še nikoli ni delovalo tako dobro.', name: 'Andrej', town: 'Vrhnika', job: 'Menjava kotla', rating: 5 },
  { quote: 'Upravljam šest najemniških stanovanj. Marko skrbi za vse servise kotlov, zapisnike pošlje isti dan in me opomni, ko je čas za naslednjega. Ena skrb manj.', name: 'Petra', town: 'Ljubljana', job: 'Servis za najemodajalce', rating: 5 },
  { quote: 'Dva mojstra sta mi rekla, da potrebujem nov kotel. Marko je našel del za 40 € in kotel je v eni uri spet delal. Poštene obrtnike je težko najti.', name: 'Janez', town: 'Medvode', job: 'Popravilo kotla', rating: 5 },
  { quote: 'Zamašeno stranišče, gostje pa prihajajo na kosilo. Urejeno v pol ure, po fiksni ceni, ki jo je povedal vnaprej. Rešitelj.', name: 'Nina', town: 'Grosuplje', job: 'Zamašeno stranišče', rating: 5 },
];

export const faqSection = {
  eyebrow: 'Vprašanja',
  title: 'Vprašanja, ki jih ljudje zastavijo, preden pokličejo',
  intro: 'Jasni odgovori na stvari, ki ljudi najbolj skrbijo.',
  ctaText: 'Vašega vprašanja ni na seznamu?',
};

export const faqs = [
  { group: 'Stroški in cena', question: 'Koliko bo stalo?', answer: 'Izveste, preden začnemo. Ko vidimo težavo, vam povemo ceno, vi pa se odločite, ali nadaljujemo.' },
  { group: 'Stroški in cena', question: 'Ali zaračunate prihod?', answer: 'Ne. Prihod je vedno brezplačen.' },
  { group: 'Stroški in cena', question: 'Kaj, če delo traja dlje, kot ste rekli?', answer: 'Potem stane enako. Cena, ki jo dogovorimo, je cena, ki jo plačate.' },
  { group: 'Stroški in cena', question: 'Mi boste skušali prodati stvari, ki jih ne potrebujem?', answer: 'Ne. Če težavo reši cenejši del, vgradimo cenejši del. Če opazimo še kaj, vam povemo, odločite pa se vi. Brez pritiska.' },
  { group: 'Stroški in cena', question: 'Ali material zaračunate posebej?', answer: 'Da, po ceni z računa. Pokažemo vam ga, preden ga vgradimo.' },
  { group: 'Zaupanje in varnost', question: 'Ste usposobljeni in zavarovani?', answer: 'Da. Smo pooblaščeni serviser plinskih naprav (št. 000), člani obrtne zbornice in v celoti zavarovani. Ob prihodu nas prosite za pooblastilo. Vsak pravi serviser vam ga bo pokazal.' },
  { group: 'Zaupanje in varnost', question: 'Kdo bo dejansko prišel?', answer: 'Marko ali eden od njegovih dveh monterjev. Vsi so zaposleni pri nas, nikoli podizvajalci.' },
  { group: 'Zaupanje in varnost', question: 'Boste naredili nered?', answer: 'Uporabljamo zaščitne folije in copate, preden odidemo, pa pospravimo za sabo.' },
  { group: 'Termini in dosegljivost', question: 'Kdaj lahko pridete?', answer: 'Termin dogovorimo med klicem. Povemo vam realen datum in uro, ki ju tudi držimo.' },
  { group: 'Termini in dosegljivost', question: 'Kdaj ste dosegljivi?', answer: 'Od ponedeljka do petka od 7. do 19. ure in ob sobotah od 8. do 14. ure. Brez klicnega centra.' },
  { group: 'Po opravljenem delu', question: 'Kaj, če se spet pokvari?', answer: 'Pokličite nas. Za naše delo in material, ki ga dobavimo, velja 12 mesecev garancije. Pridemo nazaj in brezplačno popravimo.' },
  { group: 'Po opravljenem delu', question: 'Kako plačam?', answer: 'S kartico, nakazilom ali gotovino, ko je delo končano. Dobite davčno potrjen račun s specifikacijo.' },
  { group: 'Po opravljenem delu', question: 'Lahko dobim samo ponudbo, brez obveznosti?', answer: 'Seveda. Pokličite, opišite delo in povemo vam ceno. Brez obveznosti.' },
];

export const areasSection = {
  eyebrow: 'Območje',
  title: 'Blizu vas',
  intro: 'S sedežem v Ljubljani, delamo po Ljubljani in okolici.',
  outside: 'Ste izven teh krajev? Vseeno pokličite. Povemo vam naravnost.',
};

export const areas = [
  'Ljubljana', 'Domžale', 'Kamnik', 'Medvode', 'Vrhnika', 'Grosuplje',
  'Škofljica', 'Ig', 'Brezovica', 'Logatec', 'Litija', 'Trzin',
];

export const finalCta = {
  title: 'Še berete? Kar pokličite. Hitreje bo.',
  available: 'Pon–pet 7–19 · sob 8–14',
};

export const footer = {
  credentials: 'Pooblaščeni serviser plinskih naprav št. 000 · V celoti zavarovani · 12 mesecev garancije · Cena dogovorjena, preden začnemo',
  serving: 'Delamo po Ljubljani in okolici',
  backToTop: 'Na vrh',
  note: 'Prototip, izmišljeno podjetje',
};

export const a11y = {
  skipLink: 'Preskoči na glavno vsebino',
  keyFacts: 'Ključni podatki',
  homeLink: 'Kovač inštalacije, na vrh strani',
};

export const seo = {
  lang: 'sl',
  locale: 'sl_SI',
  title: 'Vodoinštalater Ljubljana: jasne cene, 12 mesecev garancije | Kovač inštalacije',
  description:
    'Lokalni vodovodar in pooblaščeni serviser plinskih naprav v Ljubljani. Brez stroškov prihoda, cena dogovorjena vnaprej, 12 mesecev garancije.',
};
