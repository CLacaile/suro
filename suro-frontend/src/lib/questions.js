const FAKE_QUESTIONS = [
    // Histoire
    {
      id: 1,
      question: "Quel événement a marqué le début de la Révolution française en 1789 ?",
      answers: [
        {
          id: 1,
          label: "La prise de la Bastille",
          isCorrect: true,
        },
        {
          id: 2,
          label: "L'assassinat de Louis XVI",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Le sacre de Napoléon Bonaparte",
          isCorrect: false,
        },
        {
          id: 4,
          label: "La Déclaration des Droits de l'Homme et du Citoyen",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "Quelle bataille a mis fin à l'expansionnisme napoléonien en Europe en 1815 ?",
      answers: [
        {
          id: 1,
          label: "Bataille de Waterloo",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Bataille d'Austerlitz",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Bataille de Trafalgar",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Bataille de Borodino",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Quelle civilisation a construit la cité de Machu Picchu au XVe siècle ?",
      answers: [
        {
          id: 1,
          label: "Les Incas",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Les Mayas",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Les Aztèques",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Les Égyptiens",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question: "Quel empereur romain a instauré le christianisme comme religion officielle de l'Empire ?",
      answers: [
        {
          id: 1,
          label: "Constantin Ier",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Jules César",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Auguste",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Néron",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      question: "Quel événement a marqué la fin de la Seconde Guerre mondiale en Europe en 1945 ?",
      answers: [
        {
          id: 1,
          label: "La capitulation allemande",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Le bombardement de Pearl Harbor",
          isCorrect: false,
        },
        {
          id: 3,
          label: "La conférence de Yalta",
          isCorrect: false,
        },
        {
          id: 4,
          label: "L'attentat de l'archiduc François-Ferdinand",
          isCorrect: false,
        },
      ],
    },
  
    // Sciences
    {
      id: 6,
      question: "Quel est le processus par lequel les plantes convertissent la lumière en énergie ?",
      answers: [
        {
          id: 1,
          label: "Photosynthèse",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Respiration",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Osmose",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Fermentation",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      question: "Quel scientifique a formulé les lois du mouvement et de la gravité au XVIIe siècle ?",
      answers: [
        {
          id: 1,
          label: "Isaac Newton",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Galilée",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Albert Einstein",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Marie Curie",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      question: "Quelle est l'unité de mesure de l'intensité du courant électrique ?",
      answers: [
        {
          id: 1,
          label: "L'ampère",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Le volt",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Le watt",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Le ohm",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      question: "Quel est l'élément chimique principal constituant de l'atmosphère terrestre ?",
      answers: [
        {
          id: 1,
          label: "L'azote",
          isCorrect: true,
        },
        {
          id: 2,
          label: "L'oxygène",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Le carbone",
          isCorrect: false,
        },
        {
          id: 4,
          label: "L'hydrogène",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      question: "Quel scientifique a découvert la pénicilline en 1928 ?",
      answers: [
        {
          id: 1,
          label: "Alexander Fleming",
          isCorrect: true,
        },
        {
          id: 2,
          label: "Louis Pasteur",
          isCorrect: false,
        },
        {
          id: 3,
          label: "Marie Curie",
          isCorrect: false,
        },
        {
          id: 4,
          label: "Albert Einstein",
          isCorrect: false,
        },
      ],
    },
  ];
  
  export const fetchRandomQuestions = (nbQuestionsToFetch = 1) => {
    const randomQuestions = [];
    for (let i=0; i<nbQuestionsToFetch; i++) {
      const randomNumber = Math.floor(Math.random() * FAKE_QUESTIONS.length);
      const newQuestion = FAKE_QUESTIONS[randomNumber];
      newQuestion.id = Math.floor(Math.random() * 100000);
      randomQuestions.push(newQuestion);
    }
    return randomQuestions;
  };