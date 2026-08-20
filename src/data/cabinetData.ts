/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, YouthAchievement, PricingPlan, AccreditationStep } from '../types.ts';

export const DOCTOR_PROFILE = {
  name: "Dr. Maria Barbuia",
  title: "Psihoterapeut & Doctor în Psihologie (Științe Cognitive)",
  age: 35,
  institution: "Universitatea Babeș-Bolyai (UBB)",
  summary: "Sunt un psihoterapeut dedicat și cercetător în științe cognitive, cu o misiune simplă: să fiu un pilon de sprijin necondiționat pentru cei care caută claritate, vindecare și liniște interioară.",
  stats: [
    { value: "250+", label: "Persoane Ghidate spre Claritate" },
    { value: "Doctorat", label: "În Psihologie & Științe Cognitive (UBB)" },
    { value: "10+ Ani", label: "Cercetare & Practică Clinică" },
    { value: "CPR", label: "Atestat de Liberă Practică Autorizat" },
  ],
  whyTherapy: `Am ales psihoterapia dintr-o nevoie profundă de a ajuta pe orice latură îmi stă în putință. Pentru mine, științele cognitive oferă rigoarea și instrumentele precise de a înțelege cum funcționează mintea umană, însă relația terapeutică caldă, autentică și empatică este cea care deschide ușa vindecării reale. 

Când nu sunt implicată în cercetare sau în proiecte științifice, îmi dedic timpul liber oferind consiliere și sprijin terapeutic pentru cazuri excepționale și persoane aflate în momente de răscruce. Cred cu tărie că fiecare om merită un spațiu sigur în care să nu fie judecat, ci ascultat cu răbdare și căldură.`,
  sanctuaryPhilosophy: `Cabinetul meu este mai mult decât un spațiu de lucru; este un sanctuar de liniște și siguranță emoțională. Aici, atât tinerii aflați la început de drum, cât și adulții sau seniorii care poartă poveri adânci găsesc o atmosferă primitoare, deschisă și comunicativă.

Vreau ca fiecare persoană care îmi trece pragul să simtă că nu mai este singură în lupta sa, că există o direcție clară și că investiția sufletească și financiară pe care o face în propria persoană are un sens profund și măsurabil.`
};

export const ACCREDITATION_STEPS: AccreditationStep[] = [
  {
    step: 1,
    title: "Licență în Psihologie - Specializarea Științe Cognitive",
    institution: "Universitatea Babeș-Bolyai (UBB)",
    description: "Formare de bază riguroasă în mecanismele cognitive, neuroștiințe, procesarea informației și psihologie experimentală. În timpul facultății am acumulat echivalentul a 2 ani de experiență practică prin internship-uri în centre de top.",
    status: 'completat'
  },
  {
    step: 2,
    title: "Masterat în Cercetare Avansată în Psihologie",
    institution: "Universitatea Babeș-Bolyai (UBB)",
    description: "Specializare avansată în metodologie științifică, protocoale clinice bazate pe dovezi (Evidence-Based Practice) și validarea intervențiilor psihoterapeutice.",
    status: 'completat'
  },
  {
    step: 3,
    title: "Doctorat (Ph.D.) în Psihologie & Științe Cognitive",
    institution: "Universitatea Babeș-Bolyai (UBB)",
    description: "Cercetare doctorală aprofundată ce a culminat cu un breakthrough științific recunoscut în domeniu, aducând perspective inovatoare asupra flexibilității cognitive și autoreglării emoționale.",
    status: 'completat'
  },
  {
    step: 4,
    title: "Formare Complementară de Lungă Durată în Psihoterapie",
    institution: "Asociație Profesională Acreditată de Colegiul Psihologilor din România (CPR)",
    description: "Sute de ore de formare teoretică și practică, dezvoltare personală individuală obligatorie și stagiul de supervizare clinică sub îndrumarea mentorilor de elită.",
    status: 'completat'
  },
  {
    step: 5,
    title: "Atestat de Liberă Practică & Înscriere în RUP",
    institution: "Colegiul Psihologilor din România (CPR)",
    description: "Obținerea dreptului legal de liberă practică și înscrierea în Registrul Unic al Psihologilor (Cod RUP oficial), garantând respectarea celor mai înalte standarde etice și deontologice.",
    status: 'completat'
  },
  {
    step: 6,
    title: "Avizarea & Înființarea Cabinetului Individual de Psihologie",
    institution: "Colegiul Psihologilor & Autorități Sanitare",
    description: "Amenajarea unui spațiu conform normelor legale de igienă, confidențialitate și securitate emoțională, destinat sesiunilor individuale, de cuplu și consilierii aprofundate.",
    status: 'completat'
  }
];

export const YOUTH_ACHIEVEMENTS: YouthAchievement[] = [
  {
    id: "debate-math",
    period: "Anii de Liceu",
    title: "Olimpică la Dezbateri Academice (Debate) & Matematică",
    organization: "Concursuri Naționale & Județene",
    description: "Participarea la olimpiade de matematică mi-a dezvoltat gândirea analitică și structurată, în timp ce dezbaterile academice mi-au format arta ascultării active, a empatiei perspectivale și a comunicării fără judecată.",
    impact: "Baza abilităților mele de a destructura logic convingerile iraționale și de a crea dialoguri vindecătoare.",
    iconName: "Award"
  },
  {
    id: "robotics",
    period: "Liceu",
    title: "Membră a Echipei de Robotică EngiNeerds",
    organization: "EngiNeerds Robotics Club",
    description: "Lucru în echipă sub presiune, programare și rezolvare creativă a problemelor tehnice și umane complexe în competiții de prestigiu.",
    impact: "Dezvoltarea rezilienței, a spiritului de echipă și a înțelegerii sistemelor complexe.",
    iconName: "Cpu"
  },
  {
    id: "fjt-interact",
    period: "Liceu & Tineret",
    title: "Voluntariat & Leadership Comunitar",
    organization: "Fundația Județeană pentru Tineret (FJT) & Interact District 2241",
    description: "Implicare activă în sute de ore de voluntariat, proiecte caritabile, ateliere pentru tineri și inițiative de sănătate mintală și sprijin comunitar.",
    impact: "Solidificarea valorilor de dăruire, empatie socială și grijă pentru cei vulnerabili.",
    iconName: "HeartHandshake"
  },
  {
    id: "school-council",
    period: "Liceu",
    title: "Vicepreședinte în Consiliul Școlar al Elevilor",
    organization: "Consiliul Elevilor",
    description: "Reprezentarea intereselor a sute de elevi, medierea conflictelor, inițierea de campanii împotriva bullying-ului și promovarea dialogului deschis cu cadrele didactice.",
    impact: "Experiență directă în ascultarea nevoilor reale ale tinerilor și crearea unui climat de siguranță emoțională.",
    iconName: "Users"
  },
  {
    id: "eyp",
    period: "Liceu & Facultate",
    title: "Participantă la 4 Sesiuni EYP & Oficial Național / Regional",
    organization: "European Youth Parliament (EYP)",
    description: "Am participat la 4 sesiuni ale Parlamentului European al Tinerilor, inclusiv o sesiune internațională a cărei rezoluție a ajuns la forurile Uniunii Europene. În timpul facultății am activat ca oficial EYP, coordonând organizarea evenimentelor naționale și regionale.",
    impact: "Viziune europeană, abilități avansate de negociere, leadership etic și formulare de rezoluții de impact civic.",
    iconName: "Globe"
  },
  {
    id: "ctr-ryc",
    period: "Liceu & Tineret",
    title: "Romanian Youth Conference (CTR) & Rezoluția Europeană",
    organization: "Consiliul Tineretului din România (CTR)",
    description: "Contribuție directă la conferința națională CTR unde a fost redactată Rezoluția Finală a Tineretului (orizont 2027-2030), adoptată și transmisă Parlamentului European.",
    impact: "Recunoaștere la nivelul instituțiilor europene a vocii tinerilor pentru viitorul educației și stării de bine.",
    iconName: "BookOpenCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "adhd-success",
    category: "adhd",
    categoryLabel: "Gestionare ADHD & Claritate",
    clientName: "Alexandru M.",
    clientRole: "Software Engineer & Creator",
    age: 28,
    badge: "Diagnostic & Management ADHD Adult",
    duration: "4 luni de terapie",
    initialState: "Trăiam într-un haos copleșitor. Aveam mereu 20 de idei deschise, procrastinam până la epuizare și mă simțeam profund vinovat că nu pot funcționa ca ceilalți oameni.",
    transformation: "Maria a schimbat totul. Nu mi-a oferit sfaturi generice, ci am înțeles mecanismul cognitiv din spatele creierului meu ADHD. Am creat o rutină blândă, fără presiune absurdă, am învățat să prioritizez fără frică și mi-am recăpătat respectul de sine.",
    quote: "Maria nu te judecă niciodată. Înțelege neurodiversitatea cu o rigoare științifică impecabilă, dar cu o căldură umană rară. Pentru prima oară în viață, simt că dețin controlul asupra zilelor mele fără să mă mai urăsc."
  },
  {
    id: "anxietate-depresie",
    category: "anxietate_depresie",
    categoryLabel: "Depresie & Anxietate Severă",
    clientName: "Elena R.",
    clientRole: "Manager Resurse Umane",
    age: 34,
    badge: "Recuperare după Burnout & Depresie",
    duration: "6 luni de terapie",
    initialState: "Mă trezeam în fiecare dimineață cu un nod în stomac și un gol imens. Anxietatea mă paraliza, iar depresia îmi ștersese orice bucurie de a trăi. Mă simțeam captivă într-un tunel fără ieșire.",
    transformation: "Prin ședințele cu Maria, am învățat să îmi restructurez gândurile automate catastrofice și să îmi permit să fiu vulnerabilă. Pas cu pas, am readus lumina în viața mea și am dezvoltat un calm interior pe care nu credeam că îl voi cunoaște vreodată.",
    quote: "Cabinetul Mariei a fost colacul meu de salvare. M-am simțit ascultată, susținută și validată în fiecare secundă. Este un pilon de rezistență autentic. Astăzi zâmbesc din nou cu toată inima."
  },
  {
    id: "trauma-seniori",
    category: "trauma_seniori",
    categoryLabel: "Traume din Tinerețe & Pace la Maturitate",
    clientName: "Doamna Viorica T.",
    clientRole: "Profesoară Pensionară",
    age: 64,
    badge: "Reconciliere Emoțională & Vindecare Traume",
    duration: "8 luni de terapie",
    initialState: "Am purtat cu mine timp de aproape cinci decenii convingeri rigide, frici și traume dureroase din tinerețe pe care le consideram imposibil de schimbat. Credeam că la bătrânețe e prea târziu să mai cauți fericirea.",
    transformation: "Lucrul cu Dr. Maria Barbuia a fost o binecuvântare târzie, dar nespus de prețioasă. M-a ajutat cu o infinită răbdare să dezrădăcinez tiparele învechite, să îmi iert trecutul și să găsesc o împăcare profundă cu mine și cu cei dragi.",
    quote: "Niciodată nu este prea târziu pentru pace sufletească. Maria a știut să atingă cele mai sensibile corzi ale sufletului meu fără să mă rănească. Trăiesc acum cu o liniște și o bucurie la care nici nu mai îndrăzneam să sper."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "sesiune-1h",
    title: "Sesiune Individuală",
    duration: "1 Oră (50-60 minute)",
    standardPrice: 300,
    fidelityPrice: 180,
    description: "Sesiune clasică de psihoterapie și consiliere psihologică axată pe obiective clare, adaptată ritmului tău personal.",
    features: [
      "Evaluare clinică și conceptualizare cognitivă",
      "Intervenție țintită pe obiectivele tale specifice",
      "Fișe și instrumente practice de lucru între ședințe",
      "Disponibilitate pentru întrebări scurte între sesiuni",
      "Format fizic la cabinet sau online securizat"
    ]
  },
  {
    id: "sesiune-2h",
    title: "Sesiune Aprofundată",
    duration: "2 Ore (110-120 minute)",
    standardPrice: 500,
    fidelityPrice: 300,
    popular: true,
    description: "Sesiune extinsă recomandată pentru procesarea profundă a traumelor, deblocare cognitivă intensivă sau persoane din alte localități.",
    features: [
      "Timp generos de explorare fără grabă sau presiune",
      "Procesare intensivă a traumelor și tiparelor adânci",
      "Tehnici avansate de restructurare cognitiv-comportamentală",
      "Plan de acțiune personalizat pe termen mediu",
      "Prioritate la reprogramare și flexibilitate orară"
    ]
  }
];

export const FIDELITY_PROGRAM = {
  discountPercent: 40,
  description: `Sănătatea ta mintală nu ar trebui să fie un lux inaccesibil. Pentru a încuraja continuitatea și procesul terapeutic complet, am creat un program etic de fidelitate și revenire.`,
  rules: [
    {
      title: "După 1 Lună de Terapie Constantă",
      desc: "Dacă participi constant la ședințe timp de o lună (minim 4 sesiuni), beneficiezi automat de 40% reducere pentru toate sesiunile următoare (180 lei în loc de 300 lei/oră)."
    },
    {
      title: "Programul de Revenire la Cabinet",
      desc: "Dacă ai finalizat cu succes un ciclu terapeutic și decizi să revii ulterior pentru o nouă provocare de viață sau pentru menținerea echilibrului, beneficiezi instant de reducerea de 40%."
    }
  ]
};

export const CABINET_LOCATION = {
  city: "Cluj-Napoca",
  address: "Strada Republicii, Nr. 42 (Zonă Centrală Liniștită), Cluj-Napoca",
  details: "Cabinetul este situat într-o clădire istorică restaurată cu atenție, înconjurată de verdeață, ferită de agitația traficului bulevardier.",
  features: [
    "Spațiu intim, izolat fonic pentru confidențialitate absolută",
    "Lumină naturală filtrată, fotolii ergonomice confortabile",
    "Ceaiuri calmante calde, cafea de specialitate și apă infuzată",
    "Acces facil cu transportul în comun și locuri de parcare dedicate",
    "Opțiune pentru sesiuni Online securizate (Zoom / Google Meet HD)"
  ],
  phone: "+40 740 123 456",
  email: "contact@mariabarbuia.ro",
  hours: "Luni – Vineri: 09:00 – 20:00 | Sâmbătă: 10:00 – 15:00"
};
