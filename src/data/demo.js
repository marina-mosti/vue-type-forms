export default {
  callToAction: 'Hello, foxy person!',
  launchButton: "Let's go!",
  formId: 'registration',
  questions: [
    {
      question: 'Do you identify as a woman?',
      type: 'single',
      answers: [
        {
          answer: 'Yes',
          action: 'continue',
        },
        {
          answer: 'No',
          action: 'skip',
          skipTo: 'thank-you',
        },
      ],
    },
    {
      question: 'Are you awesome?',
      type: 'single',
      answers: [
        {
          answer: 'Yes',
          action: 'continue',
        },
        {
          answer: 'No',
          action: 'skip',
          skipTo: 'thank-you',
        },
        {
          answer: 'Sometimes',
          action: 'skip',
          skipTo: 'thank-you',
        },
      ],
    },
    {
      question: "What's your name?",
      type: 'text',
      action: 'continue',
      minLength: 3,
    },
    {
      question: "What's your last name?",
      type: 'text',
      action: 'continue',
      minLength: 3,
    },
    {
      question: "What's your email?",
      small: 'We promise not to spam you',
      type: 'email',
      action: 'continue',
    },
    {
      id: 'thank-you',
      question: 'Thank you!',
      type: 'submit',
    },
  ],
};
