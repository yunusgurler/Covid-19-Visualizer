export const surveyQuestions = [
  {
    question:
      "Is there a place other than your home that you regularly go to more than 3 days a week? ",
    multiAnswer: false,
    score: 10,
  },
  {
    question: "How would you rate your diet?",
    multiAnswer: true,
    checkboxAnswers: [
      { message: "Unbalanced and malnourished.", score: 8 },
      { message: "Neither good nor bad.", score: 3 },
      { message: "Very good and balanced diet.", score: 0 },
    ],
    first: true,
  },
  {
    question: "Have you been indoors outside of your home in the last week?",
    multiAnswer: false,
    score: 8,
  },
  {
    question: "Do you smoke?",
    multiAnswer: false,
    score: 7,
  },
  {
    question: "Do you have a cough or shortness of breath?",
    multiAnswer: false,
    score: 6,
  },
  {
    question: "Do you use public transportation?",
    multiAnswer: false,
    score: 5,
  },
  {
    question: "Do you have any chronological illness?",
    multiAnswer: false,
    score: 4,
  },
  {
    question: "Have you contacted with someone with COVID-19 recently?",
    multiAnswer: false,
    score: 3,
  },
  {
    question: "Do you have loss of taste or smell?",
    multiAnswer: false,
    score: 2,
  },
  {
    question: "How many doses have you been vaccinated?",
    multiAnswer: true,
    checkboxAnswers: [
      { message: "1", score: 7 },
      { message: "2", score: 5 },
      { message: "3", score: 3 },
      { message: "3+", score: 2 },
      { message: "Never", score: 10 },
    ],
    first: false,
  },
];
