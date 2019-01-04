export default {
  callToAction: 'Apply to become a NativeScript Ambassador! If you\'re a college student or junior developer interested in using NativeScript to build mobile apps this summer, paired with a mentor who will help you learn and grow as a developer, this program may be for you!',
  launchButton: "Start",
  formId: 'registration',
  questions: [
    {
      question: 'Do you identify as a woman?',
      type: 'single',
      answers: [
        {
          answer: 'Yes',
          action: 'continue',
          key: 'Y'
        },
        {
          answer: 'No',
          action: 'skip',
          skipTo: 'thank-you',
          key: 'N'
        },
      ],
    },
    {
      question: "What's your first name?",
      type: 'text',
      minLength: 2
    },
    {
      question: "What's your last name?",
      type: 'text',
      minLength: 3,
    },
    {
      question: "Which email address shall we use?",
      small: "Don't worry, we're not going to spam you.",
      type: 'email',
    },
    {
      question: "Why do you want to join the NativeScript Ambassador program?",
      type: "text"
    },
    {
      question: "Which mentor would you like to work with, if you have a choice?",
      type: "single",
      answers: [
        {
          answer: "Sherman Chen",
          action: "continue",
          key: "A"
        },
        {
          answer: "The Brosteins (Nick and Mike Branstein)",
          action: "continue",
          key: "B"
        },
        {
          answer: "Alex Ziskind",
          action: "continue",
          key: "C"
        },
        {
          answer: "Nic Raboy",
          action: "continue",
          key: "D"
        },
        {
          answer: "Brad Martin",
          action: "continue",
          key: "E"
        },
        {
          answer: "Doesn't matter to me!",
          action: "continue",
          key: "F"
        },
      ]
    },
    {
      question: "Where are you located?",
      type: "text"
    },
    {
      question: "What company do you work for, or do you work as a freelancer? Or are you a student? If so, where?",
      type: "text"
    },
    {
      question: "If selected into the program, are you able to commit your time from June-August 2017 to building a NativeScript app and working with your mentor to become an Ambassador?",
      type: "text"
    },
    {
      id: 'thank-you',
      question: 'Thank you!',
      type: 'submit',
    },
  ],
};
