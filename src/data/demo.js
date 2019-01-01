export default {
    callToAction: 'Hello, foxy person!',
    launchButton: 'Let\'s go!',
    formId: 'registration',
    questions: [
        {
            question: 'Do you identify as a woman?',
            type: 'single',
            answers: [
                {
                    answer: 'Yes',
                    action: 'continue'
                },
                {
                    answer: 'No',
                    action: 'skip',
                    skipTo: 'thank-you'
                }
            ]
        },
        {
            id: 'thank-you',
            question: 'Thank you!',
            type: 'submit'
        }
    ]
}