export type Lang = 'en' | 'fi' | 'de'

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.showreel': 'Showreel',
    'nav.services': 'Services',
    'nav.booklet': 'Industry 5.0 White Paper',
    'nav.getInTouch': 'Get in touch',
    'nav.gofore': 'Gofore.com',

    // Hero
    'hero.tag': 'DESIGN SERVICES',
    'hero.heading': 'Designing the future of industry',
    'hero.body': 'From idea to impact to measurement, we turn complex systems into intuitive, scalable solutions. Empowering people to do more, with less friction.',
    'hero.ctaText': 'Get ahead of the shift. Read our Industry 5.0 White Paper.',
    'hero.ctaBtn': 'Download White Paper',

    // Video
    'video.playLabel': 'Play showreel',

    // Strategy
    'strategy.heading': 'Turning strategy into future-ready intelligent solutions',
    'strategy.body': 'We help organizations design and deliver advanced digital products, services, and systems. From early concepts to production, we turn complexity into clarity and measurable impact. Explore our core offering to accelerate your business.',

    // Services
    'services.heading': 'Our approach to industrial solutions',
    'services.1.title': 'Make Data Work for People',
    'services.1.b1': 'Make data actionable at every level',
    'services.1.b2': 'Align systems with real workflows',
    'services.1.b3': 'Measure what matters',
    'services.1.b4': 'Track ESG and lifecycle impact effectively',
    'services.2.title': 'Human‑Centric AI: From Repetition to Meaningful, High‑Quality Work',
    'services.2.b1': 'Automate repetitive work, enable strategic focus',
    'services.2.b2': 'Connect systems with AI to reflect real work',
    'services.2.b3': 'Design AI for quality, resilience, sustainability',
    'services.3.title': 'Empower workforce with right tools',
    'services.3.b1': 'Reduce cognitive load to simplify workflows',
    'services.3.b2': 'Fit tools to real tasks',
    'services.3.b3': 'Support fast, confident decisions',
    'services.3.b4': 'Enable safe, sustainable, and productive work',
    'services.4.title': 'Connect strategy to everyday work',
    'services.4.b1': 'Align tools and data with strategic goals',
    'services.4.b2': 'Break silos and connect systems',
    'services.4.b3': 'Envision the future of your factory',
    'services.4.b4': 'Embed sustainability across the product lifecycle',

    // Booklet
    'booklet.heading': 'Industry 5.0 White Paper',
    'booklet.body': 'Our Industry 5.0 White Paper provides actionable tools and design principles for modern industrial challenges. Learn how to turn emerging technologies into usable, impactful solutions.',
    'booklet.btn': 'Download White Paper',

    // Headlines
    'headlines.heading': 'See the latest headlines',
    'headlines.1.category': 'CUSTOMER – dd.mm.yyyy',
    'headlines.1.title': 'Ethical design referenssinosto tähän',
    'headlines.2.category': 'BLOG – dd.mm.yyyy',
    'headlines.2.title': 'Planetary service design nosto',
    'headlines.3.category': 'CUSTOMER – DD.MM.YYYY',
    'headlines.3.title': 'Intelligent Industry refenosto tähän',

    // Contact
    'contact.heading': 'Please reach out, what can we do together?',
    'contact.firstname': 'Firstname *',
    'contact.lastname': 'Lastname *',
    'contact.email': 'Email *',
    'contact.phone': 'Phone',
    'contact.company': 'Company name',
    'contact.message': 'How could we help?',
    'contact.checkbox': 'I give Gofore permission to process my data so they can respond to my inquiry. *',
    'contact.privacy': 'We promise to keep your data safe. Read more in our',
    'contact.privacyLink': 'privacy policy',
    'contact.submit': 'Submit',

    // Footer
    'footer.tagline': 'Pioneering an ethical digital world',
    'footer.copyright': '2026 Gofore Oyj',
    'footer.legal.cookies': 'Cookie Settings',
    'footer.legal.whistleblowing': 'Whistleblowing',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.security': 'Information Security Policy',
    'footer.legal.iso': 'ISO27001 Certificate',
    'footer.legal.brandbook': 'Brandbook',
  },

  fi: {
    // Nav
    'nav.showreel': 'Showreel',
    'nav.services': 'Palvelut',
    'nav.booklet': 'Industry 5.0 White Paper',
    'nav.getInTouch': 'Ota yhteyttä',
    'nav.gofore': 'Gofore.com',

    // Hero
    'hero.tag': 'DESIGN-PALVELUT',
    'hero.heading': 'Suunnittelemme teollisuuden tulevaisuutta',
    'hero.body': 'Ideasta vaikutukseen ja mittaukseen – muutamme monimutkaiset järjestelmät intuitiivisiksi ja skaalautuviksi ratkaisuiksi. Autetaan ihmisiä tekemään enemmän, vähemmällä vaivalla.',
    'hero.ctaText': 'Pysy muutoksen edellä. Lue Industry 5.0 White Paper -raporttimme.',
    'hero.ctaBtn': 'Lataa White Paper',

    // Video
    'video.playLabel': 'Toista showreel',

    // Strategy
    'strategy.heading': 'Muutamme strategian tulevaisuuden valmiiksi älykkäiksi ratkaisuiksi',
    'strategy.body': 'Autamme organisaatioita suunnittelemaan ja toimittamaan edistyneitä digitaalisia tuotteita, palveluita ja järjestelmiä. Varhaisista konsepteista tuotantoon – muutamme monimutkaisuuden selkeydeksi ja mitattavaksi vaikutukseksi. Tutustu ydinpalveluihimme liiketoimintasi kiihdyttämiseksi.',

    // Services
    'services.heading': 'Lähestymistapamme teollisiin ratkaisuihin',
    'services.1.title': 'Tee datasta toimivaa ihmisille',
    'services.1.b1': 'Tee datasta käytännöllistä jokaisella tasolla',
    'services.1.b2': 'Sovita järjestelmät todellisiin työnkulkuihin',
    'services.1.b3': 'Mittaa sitä, mikä merkitsee',
    'services.1.b4': 'Seuraa ESG- ja elinkaarivaikutuksia tehokkaasti',
    'services.2.title': 'Ihmiskeskeinen tekoäly: Toistosta merkitykselliseen, laadukkaaseen työhön',
    'services.2.b1': 'Automatisoi toistuva työ, mahdollista strateginen keskittyminen',
    'services.2.b2': 'Yhdistä järjestelmät tekoälyllä vastaamaan todellista työtä',
    'services.2.b3': 'Suunnittele tekoäly laadun, resilienssin ja kestävyyden lähtökohdista',
    'services.3.title': 'Varusta henkilöstö oikeilla työkaluilla',
    'services.3.b1': 'Vähennä kognitiivista kuormaa ja yksinkertaista työnkulkuja',
    'services.3.b2': 'Sovita työkalut todellisiin tehtäviin',
    'services.3.b3': 'Tue nopeita ja varmoja päätöksiä',
    'services.3.b4': 'Mahdollista turvallinen, kestävä ja tuottava työ',
    'services.4.title': 'Muuta strategia arkipäivän toiminnaksi',
    'services.4.b1': 'Sovita työkalut ja data strategisiin tavoitteisiin',
    'services.4.b2': 'Poista siilot ja yhdistä järjestelmät',
    'services.4.b3': 'Hahmota tehtaasi tulevaisuus',
    'services.4.b4': 'Sisällytä kestävyys tuotteen koko elinkaareen',

    // Booklet
    'booklet.heading': 'Industry 5.0 White Paper',
    'booklet.body': 'Industry 5.0 White Paper -raporttimme tarjoaa käytännön työkaluja ja design-periaatteita moderneihin teollisuuden haasteisiin. Opi muuttamaan uudet teknologiat käytettäviksi ja vaikuttaviksi ratkaisuiksi.',
    'booklet.btn': 'Lataa White Paper',

    // Headlines
    'headlines.heading': 'Katso uusimmat otsikot',
    'headlines.1.category': 'ASIAKAS – pp.kk.vvvv',
    'headlines.1.title': 'Eettinen design referenssinosto tähän',
    'headlines.2.category': 'BLOGI – pp.kk.vvvv',
    'headlines.2.title': 'Planetaarinen palveludesign nosto',
    'headlines.3.category': 'ASIAKAS – PP.KK.VVVV',
    'headlines.3.title': 'Älykkään teollisuuden refenosto tähän',

    // Contact
    'contact.heading': 'Ota yhteyttä – mitä voimme tehdä yhdessä?',
    'contact.firstname': 'Etunimi *',
    'contact.lastname': 'Sukunimi *',
    'contact.email': 'Sähköposti *',
    'contact.phone': 'Puhelin',
    'contact.company': 'Yrityksen nimi',
    'contact.message': 'Miten voimme auttaa?',
    'contact.checkbox': 'Annan Goforelle luvan käsitellä tietojani, jotta he voivat vastata tiedusteluuni. *',
    'contact.privacy': 'Lupaamme pitää tietosi turvassa. Lue lisää',
    'contact.privacyLink': 'tietosuojaselosteestamme',
    'contact.submit': 'Lähetä',

    // Footer
    'footer.tagline': 'Pioneering an ethical digital world',
    'footer.copyright': '2026 Gofore Oyj',
    'footer.legal.cookies': 'Evästeasetukset',
    'footer.legal.whistleblowing': 'Väärinkäytösilmoitukset',
    'footer.legal.privacy': 'Tietosuojaseloste',
    'footer.legal.security': 'Tietoturvapolitiikka',
    'footer.legal.iso': 'ISO27001 -sertifikaatti',
    'footer.legal.brandbook': 'Brandbook',
  },

  de: {
    // Nav
    'nav.showreel': 'Showreel',
    'nav.services': 'Leistungen',
    'nav.booklet': 'Industry 5.0 White Paper',
    'nav.getInTouch': 'Kontakt aufnehmen',
    'nav.gofore': 'Gofore.com',

    // Hero
    'hero.tag': 'DESIGN-SERVICES',
    'hero.heading': 'Die Zukunft der Industrie gestalten',
    'hero.body': 'Von der Idee zur Wirkung und Messung – wir verwandeln komplexe Systeme in intuitive, skalierbare Lösungen. Menschen befähigen, mehr zu leisten, mit weniger Reibung.',
    'hero.ctaText': 'Dem Wandel voraus sein. Lesen Sie unser Industry 5.0 White Paper.',
    'hero.ctaBtn': 'White Paper herunterladen',

    // Video
    'video.playLabel': 'Showreel abspielen',

    // Strategy
    'strategy.heading': 'Strategie in zukunftsfähige intelligente Lösungen umwandeln',
    'strategy.body': 'Wir helfen Organisationen dabei, fortschrittliche digitale Produkte, Dienstleistungen und Systeme zu gestalten und zu liefern. Von frühen Konzepten bis zur Produktion – wir machen aus Komplexität Klarheit und messbaren Nutzen. Entdecken Sie unser Kernangebot, um Ihr Unternehmen zu beschleunigen.',

    // Services
    'services.heading': 'Unser Ansatz für industrielle Lösungen',
    'services.1.title': 'Daten für Menschen nutzbar machen',
    'services.1.b1': 'Daten auf jeder Ebene handlungsfähig machen',
    'services.1.b2': 'Systeme mit echten Arbeitsabläufen in Einklang bringen',
    'services.1.b3': 'Messen, was wichtig ist',
    'services.1.b4': 'ESG- und Lebenszyklusauswirkungen effektiv verfolgen',
    'services.2.title': 'Human‑Centric AI: Von Wiederholung zu bedeutungsvoller, hochwertiger Arbeit',
    'services.2.b1': 'Repetitive Arbeit automatisieren, strategischen Fokus ermöglichen',
    'services.2.b2': 'Systeme mit KI verbinden, um reale Arbeit widerzuspiegeln',
    'services.2.b3': 'KI für Qualität, Resilienz und Nachhaltigkeit gestalten',
    'services.3.title': 'Belegschaft mit den richtigen Werkzeugen ausstatten',
    'services.3.b1': 'Kognitive Belastung reduzieren, Arbeitsabläufe vereinfachen',
    'services.3.b2': 'Werkzeuge auf echte Aufgaben abstimmen',
    'services.3.b3': 'Schnelle, sichere Entscheidungen unterstützen',
    'services.3.b4': 'Sichere, nachhaltige und produktive Arbeit ermöglichen',
    'services.4.title': 'Strategie mit der täglichen Arbeit verbinden',
    'services.4.b1': 'Werkzeuge und Daten mit strategischen Zielen in Einklang bringen',
    'services.4.b2': 'Silos aufbrechen und Systeme verbinden',
    'services.4.b3': 'Die Zukunft Ihrer Fabrik gestalten',
    'services.4.b4': 'Nachhaltigkeit über den gesamten Produktlebenszyklus einbetten',

    // Booklet
    'booklet.heading': 'Industry 5.0 White Paper',
    'booklet.body': 'Unser Industry 5.0 White Paper bietet umsetzbare Werkzeuge und Designprinzipien für moderne industrielle Herausforderungen. Erfahren Sie, wie Sie aufkommende Technologien in nutzbare, wirkungsvolle Lösungen verwandeln.',
    'booklet.btn': 'White Paper herunterladen',

    // Headlines
    'headlines.heading': 'Die neuesten Schlagzeilen',
    'headlines.1.category': 'KUNDE – TT.MM.JJJJ',
    'headlines.1.title': 'Ethisches Design Referenzbeispiel hier',
    'headlines.2.category': 'BLOG – TT.MM.JJJJ',
    'headlines.2.title': 'Planetares Service-Design Beispiel',
    'headlines.3.category': 'KUNDE – TT.MM.JJJJ',
    'headlines.3.title': 'Intelligente Industrie Referenzbeispiel hier',

    // Contact
    'contact.heading': 'Kontaktieren Sie uns – was können wir gemeinsam tun?',
    'contact.firstname': 'Vorname *',
    'contact.lastname': 'Nachname *',
    'contact.email': 'E-Mail *',
    'contact.phone': 'Telefon',
    'contact.company': 'Unternehmensname',
    'contact.message': 'Wie können wir helfen?',
    'contact.checkbox': 'Ich erteile Gofore die Erlaubnis, meine Daten zu verarbeiten, damit sie auf meine Anfrage antworten können. *',
    'contact.privacy': 'Wir versprechen, Ihre Daten sicher aufzubewahren. Mehr dazu in unserer',
    'contact.privacyLink': 'Datenschutzerklärung',
    'contact.submit': 'Absenden',

    // Footer
    'footer.tagline': 'Pioneering an ethical digital world',
    'footer.copyright': '2026 Gofore Oyj',
    'footer.legal.cookies': 'Cookie-Einstellungen',
    'footer.legal.whistleblowing': 'Hinweisgebersystem',
    'footer.legal.privacy': 'Datenschutzerklärung',
    'footer.legal.security': 'Informationssicherheitsrichtlinie',
    'footer.legal.iso': 'ISO27001-Zertifikat',
    'footer.legal.brandbook': 'Brandbook',
  },
}
