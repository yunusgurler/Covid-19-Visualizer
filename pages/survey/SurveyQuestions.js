export const surveyQuestions = [
  {
    question: "Have you tested positive for COVID-19 in the past 10 days?",
    multiAnswer: false,
  },
  {
    question: "How do you feel yourself?",
    multiAnswer: true,
    checkboxAnswers: ["awful", "fine", "very good"],
    first: true,
  },
  {
    question: "Are you currently awaiting results from a COVID-19 test?",
    multiAnswer: false,
  },
  {
    question: "Do you smoke?",
    multiAnswer: false,
  },
  {
    question: "How many doses have you been vaccinated?",
    multiAnswer: false,
  },
  {
    question: "Do you use public transportation?",
    multiAnswer: false,
  },
  {
    question: "Do you have any chronological illness?",
    multiAnswer: false,
  },
  {
    question: "Have you contacted with someone with COVID-19 recently?",
    multiAnswer: false,
  },
  {
    question: "Do you have loss of taste or smell",
    multiAnswer: false,
  },
  {
    question: "Do you suffer from any of the below diseases?",
    multiAnswer: true,
    checkboxAnswers: ["cold", "fever", "cough", "headache", "muscle pain"],
    first: false,
  },
];
