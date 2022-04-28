export const surveyQuestions = [
  {
    question: "Have you tested positive for COVID-19 in the past 10 days?",
    multiAnswer: false,
  },
  {
    question: "Are you currently awaiting results from a COVID-19 test?",
    multiAnswer: false,
  },
  {
    question:
      "Have you been told that you are suspected to have COVID-19 by a licensed healthcare provider in the past 10 days?",
    multiAnswer: false,
  },
  {
    question: "Do you suffer from any of the below diseases?",
    multiAnswer: true,
    checkboxAnswers: ["cold", "fever", "cough", "headache", "muscle pain"],
  },
];
