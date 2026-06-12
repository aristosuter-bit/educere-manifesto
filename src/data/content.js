// Educere — All translations in one place.
// To add Romansh (rm): add an `rm: { ... }` block, add `"rm"` to the Astro i18n config,
// and create /rm/ index page. See BUILD-NOTES.md.

const CONTENT = {
  de: {
    lang: "de",
    langLabel: "DE",
    dir: "ltr",

    // ── BRAND ──────────────────────────────
    wordmark: "EDUCERE",
    name: "Educere",
    subtitle: "Ein Manifest der Lehrerinnen und Lehrer für die Primarschule",
    tagline:
      "Zeit, Vertrauen und Fokus der Lehrperson zurückgewinnen – damit jedes Kind bereit für die Welt ist.",
    draft: "Arbeitsentwurf",
    etymology:
      "educere (lat.) – herausführen, hervorlocken. Der Ursprung des Wortes «Bildung».",

    // ── PREAMBLE ───────────────────────────
    // <!-- TODO: native review -->
    preamble: {
      heading: "Warum dieses Manifest",
      p1: "Die Primarschule ist auf stille Weise zu dem Ort geworden, an dem die gesellschaftlichen Belastungen zusammenlaufen. Lehrpersonen werden jedes Jahr mit mehr beauftragt – und haben immer weniger Spielraum für das, worauf es am meisten ankommt: ein Kind zu kennen, es zu sehen und das Beste aus ihm herauszuholen. Was skalierbar ist – Inhalte vermitteln, Arbeiten korrigieren – frisst den Tag. Was nicht skalierbar ist – ein Kind durch Schwierigkeiten zu coachen – bleibt liegen.",
      p2: "Dieses Manifest ist aus der Perspektive derjenigen geschrieben, die ein Klassenzimmer verändern können: der Lehrerinnen und Lehrer. Wir wollen den skalierbaren Teil an Werkzeuge übergeben und der Lehrperson die Zeit, das Vertrauen und den Fokus zurückgeben, die jedes Kind verdient. Das Ziel: ein Kind, das bereit für die Welt ist – fähig, neugierig, widerstandsfähig und fähig, mit anderen zu leben und zu arbeiten.",
    },

    // ── THE MANIFESTO ──────────────────────
    manifesto: {
      label: "Das Manifest",
      intro:
        "Wir sind diejenigen, die diese Arbeit tun. Indem wir sie tun – und beobachten, was einem Kind hilft, bereit für die Welt zu werden – haben wir bessere Wege gefunden zu unterrichten. Wir schätzen:",
      connector: "statt",
      values: [
        {
          left: "Jedem Kind helfen, seinen eigenen Weg nach vorne zu finden",
          right: "sie alle auf einem Weg zu führen, den wir vorgeben",
        },
        {
          left: "Das Kind vor uns begleiten",
          right: "die Klasse als Ganzes zu unterrichten",
        },
        {
          left: "Kinder ringen und stark werden lassen",
          right: "sie zu schonen",
        },
        {
          left: "Kindern zeigen, wie weit sie gekommen sind",
          right: "zu bewerten, wo sie im Vergleich stehen",
        },
      ],
      closing:
        "Es gab gute Gründe für die Art, wie wir früher unterrichtet haben. Durch die Arbeit selbst sind wir dazu gekommen, stattdessen so zu unterrichten.",
    },

    // ── THE PRINCIPLES ─────────────────────
    principles: {
      label: "Die Prinzipien",
      groups: [
        {
          heading: "Jedem Kind helfen, seinen eigenen Weg zu finden",
          items: [
            "Wir beginnen dort, wo das Kind wirklich steht – nicht dort, wo der Lehrplan es vermutet – und lassen es in seinem eigenen Tempo gehen: vorauseilen, wo es ihm leichtfällt, sich Zeit nehmen, wo es schwer ist. Eine Startlinie und ein Tempo waren nie für dreissig Kinder richtig.",
            "Wir bringen Kindern bei, selbst zu steuern: zu wählen, zu versuchen, um das zu bitten, was sie brauchen. Ein Kind, das sein Lernen selbst lenken kann, hört nie auf zu lernen.",
          ],
        },
        {
          heading: "Das Kind vor uns begleiten",
          items: [
            "Wir geben alles ab, was keinen Menschen braucht – und behalten, was niemals einer Maschine gelingen wird: ein Kind wirklich zu sehen, ihm zu vertrauen und es durch Schwierigkeiten zu begleiten. Unsere Aufmerksamkeit gehört dem Kind, nicht dem Tag.",
            "Wir leisten unsere beste Arbeit für Kinder, die wissen, dass wir sie kennen. Die Beziehung ist nicht das Vorspiel zum Lernen; sie ist, wie das Lernen geschieht.",
            "Wir sehen das ganze Kind, nicht nur seine Arbeit – die Verzweiflung hinter einer falschen Antwort, die Angst hinter einem stillen Kind – denn das ist der Teil, den sonst niemand sieht.",
          ],
        },
        {
          heading: "Kinder ringen und stark werden lassen",
          items: [
            "Wir erwarten viel, denn Kinder werden zu dem, was wir ihnen zutrauen – und wir weigern uns, von einem Kind weniger zu verlangen, nur weil von ihm früher weniger verlangt wurde.",
            "Wir lassen die Aufgabe wirklich schwer sein und bleiben beim Kind, während sie es ist. Ringen heisst nicht, dass wir es im Stich lassen; es ist das, was wir lehren.",
            "Wir hüten die Freude. Die tiefste Freude, die ein Kind in der Schule findet, ist es, etwas zu meistern, das wirklich schwer war – und wir tauschen sie nie gegen Bequemlichkeit oder leeres Lob ein.",
            "Wir lehren Widerstandskraft, Konzentration und den Mut, wieder anzufangen, so sorgfältig wie Lesen und Rechnen – sie sind der Kern der Arbeit, nicht das Glück einiger weniger.",
            "Wir lassen Kinder herausfinden, wie man miteinander auskommt – zu streiten, zu verhandeln, sich zu versöhnen – denn miteinander leben zu lernen ist Teil dessen, wofür sie hier sind.",
          ],
        },
        {
          heading: "Kindern zeigen, wie weit sie gekommen sind",
          items: [
            "Wir messen, um den nächsten Schritt zu erhellen, nie um festzulegen, wer ein Kind ist. Was wir beurteilen, weist nach vorne, nicht nach unten – und das Kind sieht stets, wo es steht und was als Nächstes kommt.",
            "Wir bewahren das, was wir über ein Kind erfahren, im Vertrauen. Es dient dazu, ihm zu helfen, nie es abzustempeln, und darf nie zum Käfig werden, in dem es aufwächst.",
          ],
        },
      ],
    },

    // ── SIGN ───────────────────────────────
    sign: {
      heading: "Das Manifest unterzeichnen",
      line: "Lehrpersonen, Eltern – alle, die sich das für ihre Kinder wünschen.",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail (optional)",
      emailPlaceholder: "ihre@email.ch",
      emailNote: "wird nicht weitergegeben",
      roleLabel: "Rolle",
      roleOptions: ["Lehrperson", "Eltern", "Andere"],
      cantonLabel: "Kanton (optional)",
      cantonPlaceholder: "Kanton wählen",
      commentLabel: "Warum unterzeichnen Sie? (optional)",
      commentPlaceholder:
        "Ein, zwei Sätze – Ihre Stimme erscheint bei Ihrem Namen.",
      updatesLabel:
        "Ich möchte über die nächsten Schritte informiert werden.",
      privacy:
        "Wir erheben nur, was nötig ist, verwenden es ausschliesslich für dieses Manifest und löschen es auf Wunsch.",
      submit: "Unterzeichnen",
      thanks: "Danke.",
      thanksMsg: "Ihre Unterzeichnung wurde erfasst.",
    },

    // ── SIGNATORIES ────────────────────────
    signatories: {
      heading: "Unterzeichnet von",
      empty:
        "Setzen Sie als Erste oder Erster Ihren Namen darunter.",
    },

    // ── FOOTER ─────────────────────────────
    printLink: "Zum Ausdrucken (A4)",
    footer:
      "Ein offenes Manifest. Arbeitsentwurf. Frei zu teilen und anzupassen mit Namensnennung (CC BY).",

    // ── CANTONS ────────────────────────────
    cantons: [
      "Aargau",
      "Appenzell Ausserrhoden",
      "Appenzell Innerrhoden",
      "Basel-Landschaft",
      "Basel-Stadt",
      "Bern",
      "Freiburg",
      "Genf",
      "Glarus",
      "Graubünden",
      "Jura",
      "Luzern",
      "Neuenburg",
      "Nidwalden",
      "Obwalden",
      "Schaffhausen",
      "Schwyz",
      "Solothurn",
      "St. Gallen",
      "Tessin",
      "Thurgau",
      "Uri",
      "Waadt",
      "Wallis",
      "Zug",
      "Zürich",
    ],
  },

  // ══════════════════════════════════════════
  // FRANÇAIS
  // ══════════════════════════════════════════
  fr: {
    lang: "fr",
    langLabel: "FR",
    dir: "ltr",

    wordmark: "EDUCERE",
    name: "Educere",
    subtitle: "Un manifeste des enseignantes et enseignants pour l'école primaire",
    tagline:
      "Rendre à l'enseignant son temps, sa confiance et son attention – pour que chaque enfant soit prêt pour le monde.",
    draft: "Version de travail",
    etymology:
      "educere (lat.) – conduire dehors, faire éclore. L'origine du mot « éducation ».",

    preamble: {
      heading: "Pourquoi ce manifeste",
      // <!-- TODO: native review -->
      p1: "L'école primaire est devenue, sans bruit, le lieu où les pressions d'une société convergent. Chaque année, on demande plus aux enseignants – avec moins de place pour la seule chose qui compte vraiment : connaître un enfant, le voir et faire ressortir le meilleur de lui. Ce qui est industrialisable – transmettre des contenus, corriger des travaux – dévore la journée. Ce qui ne l'est pas – coacher un enfant à travers les difficultés – reste en plan.",
      // <!-- TODO: native review -->
      p2: "Ce manifeste est écrit du point de vue de celles et ceux qui peuvent changer une classe : les enseignantes et enseignants. Nous voulons confier la part industrialisable aux outils et rendre à l'enseignant le temps, la confiance et l'attention que chaque enfant mérite. Le but : un enfant prêt pour le monde – capable, curieux, résilient et apte à vivre et travailler avec les autres.",
    },

    manifesto: {
      label: "Le Manifeste",
      intro:
        "Nous sommes celles et ceux qui font ce travail. En le faisant – et en observant ce qui aide un enfant à être prêt pour le monde – nous avons trouvé de meilleures façons d'enseigner. Nous valorisons :",
      connector: "plutôt que",
      values: [
        {
          left: "Aider chaque enfant à trouver son propre chemin",
          right: "de les mener tous sur celui que nous traçons",
        },
        {
          left: "Accompagner l'enfant qui est devant nous",
          right: "d'enseigner à la classe comme à un seul",
        },
        {
          left: "Laisser les enfants peiner et se fortifier",
          right: "de les garder dans le confort",
        },
        {
          left: "Montrer aux enfants le chemin parcouru",
          right: "de noter leur rang",
        },
      ],
      closing:
        "Il y avait de bonnes raisons à notre manière d'enseigner d'hier. C'est en faisant ce travail que nous en sommes venus à enseigner ainsi.",
    },

    principles: {
      label: "Les principes",
      groups: [
        {
          heading: "Aider chaque enfant à trouver son propre chemin",
          items: [
            "Nous partons de là où l'enfant se trouve vraiment – non là où le programme le suppose – et nous le laissons avancer à son propre rythme : vite là où c'est facile, avec le temps qu'il faut là où c'est difficile. Une seule ligne de départ et un seul rythme n'ont jamais convenu à trente enfants.",
            "Nous apprenons aux enfants à se diriger : choisir, essayer, demander ce dont ils ont besoin. Un enfant capable de conduire son apprentissage n'arrête jamais d'apprendre.",
          ],
        },
        {
          heading: "Accompagner l'enfant qui est devant nous",
          items: [
            "Nous déléguons tout ce qui n'a pas besoin d'un humain – et nous gardons ce qu'aucune machine ne saura jamais faire : voir vraiment un enfant, lui faire confiance, l'accompagner à travers la difficulté. Notre attention appartient à l'enfant, non au quotidien.",
            "Nous faisons notre meilleur travail pour des enfants qui savent que nous les connaissons. La relation n'est pas le préambule de l'apprentissage ; elle est la manière dont il advient.",
            "Nous regardons l'enfant tout entier, pas seulement son travail – la frustration derrière une mauvaise réponse, la peur derrière un silence – car c'est la part que personne d'autre ne voit.",
          ],
        },
        {
          heading: "Laisser les enfants peiner et se fortifier",
          items: [
            "Nous attendons beaucoup, car les enfants deviennent ce que nous croyons d'eux – et nous refusons d'exiger moins d'un enfant simplement parce qu'on a jadis exigé moins de lui.",
            "Nous laissons la tâche être vraiment difficile, et nous restons auprès de l'enfant pendant qu'elle l'est. Peiner n'est pas un échec de notre part ; c'est ce que nous enseignons.",
            "Nous protégeons la joie. La joie la plus profonde qu'un enfant trouve à l'école est de maîtriser quelque chose qui était vraiment difficile – et nous ne l'échangeons jamais contre le confort ou les éloges creux.",
            "Nous enseignons la résilience, la concentration et le courage de recommencer avec autant de soin que la lecture et le calcul – c'est le cœur du travail, non la chance de quelques-uns.",
            "Nous laissons les enfants découvrir comment vivre ensemble – être en désaccord, négocier, réparer – car apprendre à vivre les uns avec les autres fait partie de ce pour quoi ils sont là.",
          ],
        },
        {
          heading: "Montrer aux enfants le chemin parcouru",
          items: [
            "Nous évaluons pour éclairer le pas suivant, jamais pour fixer qui est un enfant. Ce que nous évaluons regarde vers l'avant, non vers le bas – et l'enfant voit toujours où il en est et ce qui vient ensuite.",
            "Nous gardons en confiance ce que nous apprenons d'un enfant. Cela sert à l'aider, jamais à l'étiqueter, et ne doit jamais devenir la cage où il grandit.",
          ],
        },
      ],
    },

    sign: {
      heading: "Signer le manifeste",
      line: "Enseignants, parents – tous ceux qui veulent cela pour leurs enfants.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "E-mail (facultatif)",
      emailPlaceholder: "votre@email.ch",
      emailNote: "ne sera pas transmis",
      roleLabel: "Rôle",
      roleOptions: ["Enseignant·e", "Parent", "Autre"],
      cantonLabel: "Canton (facultatif)",
      cantonPlaceholder: "Choisir le canton",
      commentLabel: "Pourquoi signez-vous ? (facultatif)",
      commentPlaceholder:
        "Une ou deux phrases – votre voix apparaîtra à côté de votre nom.",
      updatesLabel:
        "Je souhaite être informé·e des prochaines étapes.",
      privacy:
        "Nous ne collectons que le nécessaire, l'utilisons uniquement pour ce manifeste et le supprimons sur demande.",
      submit: "Signer",
      thanks: "Merci.",
      thanksMsg: "Votre signature a été enregistrée.",
    },

    signatories: {
      heading: "Signé par",
      empty:
        "Soyez la première ou le premier à signer.",
    },

    printLink: "À imprimer (A4)",
    footer:
      "Un manifeste ouvert. Version de travail. Libre de partager et d'adapter avec attribution (CC BY).",

    cantons: [
      "Argovie",
      "Appenzell Rhodes-Extérieures",
      "Appenzell Rhodes-Intérieures",
      "Bâle-Campagne",
      "Bâle-Ville",
      "Berne",
      "Fribourg",
      "Genève",
      "Glaris",
      "Grisons",
      "Jura",
      "Lucerne",
      "Neuchâtel",
      "Nidwald",
      "Obwald",
      "Schaffhouse",
      "Schwytz",
      "Soleure",
      "Saint-Gall",
      "Tessin",
      "Thurgovie",
      "Uri",
      "Vaud",
      "Valais",
      "Zoug",
      "Zurich",
    ],
  },

  // ══════════════════════════════════════════
  // ITALIANO
  // ══════════════════════════════════════════
  it: {
    lang: "it",
    langLabel: "IT",
    dir: "ltr",

    wordmark: "EDUCERE",
    name: "Educere",
    subtitle: "Un manifesto delle e degli insegnanti per la scuola elementare",
    tagline:
      "Restituire all'insegnante tempo, fiducia e attenzione – perché ogni bambino sia pronto per il mondo.",
    draft: "Bozza di lavoro",
    etymology:
      "educere (lat.) – condurre fuori, far emergere. L'origine della parola «educazione».",

    preamble: {
      heading: "Perché questo manifesto",
      // <!-- TODO: native review -->
      p1: "La scuola elementare è diventata, in silenzio, il luogo in cui convergono le pressioni di una società. Ogni anno si chiede di più agli insegnanti – con meno spazio per la sola cosa che conta davvero: conoscere un bambino, vederlo e far emergere il meglio di lui. Ciò che è scalabile – trasmettere contenuti, correggere compiti – divora la giornata. Ciò che non lo è – accompagnare un bambino nelle difficoltà – resta indietro.",
      // <!-- TODO: native review -->
      p2: "Questo manifesto è scritto dal punto di vista di chi può cambiare un'aula: le insegnanti e gli insegnanti. Vogliamo affidare la parte scalabile agli strumenti e restituire all'insegnante il tempo, la fiducia e l'attenzione che ogni bambino merita. L'obiettivo: un bambino pronto per il mondo – capace, curioso, resiliente e in grado di vivere e lavorare con gli altri.",
    },

    manifesto: {
      label: "Il Manifesto",
      intro:
        "Siamo noi a fare questo lavoro. Facendolo – e osservando ciò che aiuta un bambino a diventare pronto per il mondo – abbiamo trovato modi migliori di insegnare. Diamo valore a:",
      connector: "più che",
      values: [
        {
          left: "Aiutare ogni bambino a trovare la propria strada",
          right: "condurli tutti su quella che tracciamo noi",
        },
        {
          left: "Accompagnare il bambino che abbiamo davanti",
          right: "insegnare alla classe come a uno solo",
        },
        {
          left: "Lasciare che i bambini fatichino e diventino forti",
          right: "tenerli nella comodità",
        },
        {
          left: "Mostrare ai bambini quanta strada hanno fatto",
          right: "valutare la loro posizione",
        },
      ],
      closing:
        "C'erano buone ragioni nel modo in cui insegnavamo prima. È facendo questo lavoro che siamo arrivati a insegnare così.",
    },

    principles: {
      label: "I principi",
      groups: [
        {
          heading: "Aiutare ogni bambino a trovare la propria strada",
          items: [
            "Partiamo da dove il bambino si trova davvero – non da dove il programma lo immagina – e lo lasciamo procedere al suo ritmo: veloce dove gli riesce facile, con il tempo che serve dove è difficile. Un'unica linea di partenza e un unico ritmo non sono mai stati giusti per trenta bambini.",
            "Insegniamo ai bambini a guidarsi: a scegliere, a provare, a chiedere ciò di cui hanno bisogno. Un bambino che sa guidare il proprio apprendimento non smette mai di imparare.",
          ],
        },
        {
          heading: "Accompagnare il bambino che abbiamo davanti",
          items: [
            "Deleghiamo tutto ciò che non ha bisogno di un essere umano – e teniamo ciò che nessuna macchina saprà mai fare: vedere davvero un bambino, dargli fiducia, accompagnarlo attraverso la difficoltà. La nostra attenzione appartiene al bambino, non alla giornata.",
            "Diamo il meglio per i bambini che sanno di essere conosciuti da noi. La relazione non è il preludio all'apprendimento; è il modo in cui l'apprendimento avviene.",
            "Guardiamo il bambino nella sua interezza, non solo il suo lavoro – la frustrazione dietro una risposta sbagliata, la paura dietro un silenzio – perché è la parte che nessun altro vede.",
          ],
        },
        {
          heading: "Lasciare che i bambini fatichino e diventino forti",
          items: [
            "Ci aspettiamo molto, perché i bambini diventano ciò che crediamo di loro – e ci rifiutiamo di chiedere meno a un bambino solo perché in passato gli si è chiesto meno.",
            "Lasciamo che il compito sia davvero difficile e restiamo accanto al bambino mentre lo è. Faticare non significa che lo stiamo abbandonando; è ciò che insegniamo.",
            "Custodiamo la gioia. La gioia più profonda che un bambino trova a scuola è padroneggiare qualcosa che era davvero difficile – e non la scambiamo mai con la comodità o con lodi vuote.",
            "Insegniamo la resilienza, la concentrazione e il coraggio di ricominciare con la stessa cura con cui insegniamo a leggere e a contare – sono il cuore del lavoro, non la fortuna di pochi.",
            "Lasciamo che i bambini scoprano come stare insieme – litigare, negoziare, riconciliarsi – perché imparare a vivere accanto agli altri è parte di ciò per cui sono qui.",
          ],
        },
        {
          heading: "Mostrare ai bambini quanta strada hanno fatto",
          items: [
            "Valutiamo per illuminare il passo successivo, mai per stabilire chi è un bambino. Ciò che valutiamo guarda avanti, non in basso – e il bambino vede sempre dove si trova e cosa viene dopo.",
            "Custodiamo con fiducia ciò che apprendiamo di un bambino. Serve ad aiutarlo, mai a etichettarlo, e non deve mai diventare la gabbia in cui cresce.",
          ],
        },
      ],
    },

    sign: {
      heading: "Firmare il manifesto",
      line: "Insegnanti, genitori – chiunque desideri questo per i propri figli.",
      nameLabel: "Nome",
      namePlaceholder: "Il suo nome",
      emailLabel: "E-mail (facoltativo)",
      emailPlaceholder: "suo@email.ch",
      emailNote: "non sarà condiviso",
      roleLabel: "Ruolo",
      roleOptions: ["Insegnante", "Genitore", "Altro"],
      cantonLabel: "Cantone (facoltativo)",
      cantonPlaceholder: "Scegli il cantone",
      commentLabel: "Perché firma? (facoltativo)",
      commentPlaceholder:
        "Una o due frasi – la sua voce apparirà accanto al suo nome.",
      updatesLabel:
        "Desidero essere informato/a sui prossimi passi.",
      privacy:
        "Raccogliamo solo il necessario, lo usiamo unicamente per questo manifesto e lo cancelliamo su richiesta.",
      submit: "Firma",
      thanks: "Grazie.",
      thanksMsg: "La sua firma è stata registrata.",
    },

    signatories: {
      heading: "Firmato da",
      empty: "Sia la prima o il primo a firmare.",
    },

    printLink: "Da stampare (A4)",
    footer:
      "Un manifesto aperto. Bozza di lavoro. Libero di condividere e adattare con attribuzione (CC BY).",

    cantons: [
      "Argovia",
      "Appenzello Esterno",
      "Appenzello Interno",
      "Basilea Campagna",
      "Basilea Città",
      "Berna",
      "Friburgo",
      "Ginevra",
      "Glarona",
      "Grigioni",
      "Giura",
      "Lucerna",
      "Neuchâtel",
      "Nidvaldo",
      "Obvaldo",
      "Sciaffusa",
      "Svitto",
      "Soletta",
      "San Gallo",
      "Ticino",
      "Turgovia",
      "Uri",
      "Vaud",
      "Vallese",
      "Zugo",
      "Zurigo",
    ],
  },

  // ══════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════
  en: {
    lang: "en",
    langLabel: "EN",
    dir: "ltr",

    wordmark: "EDUCERE",
    name: "Educere",
    subtitle: "A teachers' manifesto for primary school",
    tagline:
      "Reclaiming the teacher's time, trust and focus – so that every child is ready for the world.",
    draft: "Working draft",
    etymology:
      "educere (Latin) – to lead out, to draw forth. The root of the word “education”.",

    preamble: {
      heading: "Why this manifesto",
      p1: "Primary school has quietly become the place where a society's pressures converge. Every year, teachers are tasked with more – and have ever less room for the one thing that matters most: knowing a child, seeing them, and bringing out the best in them. What scales – delivering content, correcting work – devours the day. What does not scale – coaching a child through difficulty – is left undone.",
      p2: "This manifesto is written from the perspective of those who can change a classroom: the teachers. We want to hand the scalable part over to tools and give teachers back the time, the trust and the focus that every child deserves. The goal: a child who is ready for the world – capable, curious, resilient, and able to live and work with others.",
    },

    manifesto: {
      label: "The Manifesto",
      intro:
        "We are the ones doing this work. By doing it – and by watching what helps a child become ready for the world – we have found better ways to teach. We value:",
      connector: "over",
      values: [
        {
          left: "Helping every child find their own way forward",
          right: "leading them all down a path we set",
        },
        {
          left: "Accompanying the child in front of us",
          right: "teaching the class as a whole",
        },
        {
          left: "Letting children struggle and grow strong",
          right: "sparing them",
        },
        {
          left: "Showing children how far they have come",
          right: "grading where they stand in comparison",
        },
      ],
      closing:
        "There were good reasons for the way we used to teach. Through the work itself, we have come to teach this way instead.",
    },

    principles: {
      label: "The Principles",
      groups: [
        {
          heading: "Helping every child find their own way",
          items: [
            "We start where the child truly is – not where the curriculum assumes – and let them move at their own pace: racing ahead where it comes easily, taking time where it is hard. One starting line and one pace were never right for thirty children.",
            "We teach children to steer for themselves: to choose, to try, to ask for what they need. A child who can direct their own learning never stops learning.",
          ],
        },
        {
          heading: "Accompanying the child in front of us",
          items: [
            "We hand over everything that does not need a human – and keep what no machine will ever manage: truly seeing a child, trusting them, and walking with them through difficulty. Our attention belongs to the child, not to the day.",
            "We do our best work for children who know that we know them. The relationship is not the prelude to learning; it is how learning happens.",
            "We see the whole child, not just their work – the frustration behind a wrong answer, the fear behind a quiet child – because that is the part no one else sees.",
          ],
        },
        {
          heading: "Letting children struggle and grow strong",
          items: [
            "We expect much, because children become what we believe of them – and we refuse to ask less of a child simply because less was asked of them before.",
            "We let the task be truly hard and stay with the child while it is. Struggle does not mean we are abandoning them; it is what we teach.",
            "We guard the joy. The deepest joy a child finds in school is mastering something that was truly hard – and we never trade it for comfort or empty praise.",
            "We teach resilience, concentration and the courage to begin again as carefully as we teach reading and arithmetic – they are the heart of the work, not the luck of a few.",
            "We let children figure out how to get along with one another – to argue, to negotiate, to make up again – because learning to live with others is part of what they are here for.",
          ],
        },
        {
          heading: "Showing children how far they have come",
          items: [
            "We measure to light up the next step, never to fix who a child is. What we assess points forward, not down – and the child always sees where they stand and what comes next.",
            "We hold what we learn about a child in trust. It exists to help them, never to label them, and must never become the cage they grow up in.",
          ],
        },
      ],
    },

    sign: {
      heading: "Sign the manifesto",
      line: "Teachers, parents – everyone who wants this for their children.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "E-mail (optional)",
      emailPlaceholder: "your@email.ch",
      emailNote: "will not be shared",
      roleLabel: "Role",
      roleOptions: ["Teacher", "Parent", "Other"],
      cantonLabel: "Canton (optional)",
      cantonPlaceholder: "Choose canton",
      commentLabel: "Why are you signing? (optional)",
      commentPlaceholder:
        "A sentence or two – your voice will appear next to your name.",
      updatesLabel:
        "I would like to be kept informed about next steps.",
      privacy:
        "We collect only what is necessary, use it solely for this manifesto, and delete it on request.",
      submit: "Sign",
      thanks: "Thank you.",
      thanksMsg: "Your signature has been recorded.",
    },

    signatories: {
      heading: "Signed by",
      empty: "Be the first to put your name to it.",
    },

    printLink: "Print version (A4)",
    footer:
      "An open manifesto. Working draft. Free to share and adapt with attribution (CC BY).",

    cantons: [
      "Aargau",
      "Appenzell Ausserrhoden",
      "Appenzell Innerrhoden",
      "Basel-Landschaft",
      "Basel-Stadt",
      "Bern",
      "Fribourg",
      "Geneva",
      "Glarus",
      "Graubünden",
      "Jura",
      "Lucerne",
      "Neuchâtel",
      "Nidwalden",
      "Obwalden",
      "Schaffhausen",
      "Schwyz",
      "Solothurn",
      "St. Gallen",
      "Ticino",
      "Thurgau",
      "Uri",
      "Vaud",
      "Valais",
      "Zug",
      "Zurich",
    ],
  },
};

export default CONTENT;
