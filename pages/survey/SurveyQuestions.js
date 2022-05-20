export const surveyQuestions = [
  {
    question: "Have you tested positive for COVID-19 in the past 10 days?",
    multiAnswer: false,
    score: 10
  },
  {
    question: "How do you feel yourself?",
    multiAnswer: true,
    checkboxAnswers: ["awful", "fine", "very good"],
    first: true,
    score: 9
  },
  {
    question: "Are you currently awaiting results from a COVID-19 test?",
    multiAnswer: false,
    score: 8
  },
  {
    question: "Do you smoke?",
    multiAnswer: false,
    score: 7
  },
  {
    question: "How many doses have you been vaccinated?",
    multiAnswer: false,
    score: 6
  },
  {
    question: "Do you use public transportation?",
    multiAnswer: false,
    score: 5
  },
  {
    question: "Do you have any chronological illness?",
    multiAnswer: false,
    score: 4
  },
  {
    question: "Have you contacted with someone with COVID-19 recently?",
    multiAnswer: false,
    score: 3
  },
  {
    question: "Do you have loss of taste or smell",
    multiAnswer: false,
    score: 2
  },
  {
    question: "Do you suffer from any of the below diseases?",
    multiAnswer: true,
    checkboxAnswers: ["cold", "fever", "cough", "headache", "muscle pain"],
    first: false,
    score: 1
  },
];
