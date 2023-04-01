import axios from 'axios';

// const axios = require('axios');

const API_KEY = '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';
// const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Set up Axios request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
};

export const actions = {
    async connect({}, {prompt}) {
        // Request Body
        const data = {
            'model': 'gpt-3.5-turbo',
            'messages': [{role: "user", content: prompt}],
            // 'temperature': 0.5,
            // 'max_tokens': 100,
            // 'top_p': 1,
            // 'frequency_penalty': 0,
            // 'presence_penalty': 0
        };
        // Make Axios request
        axios.post(API_URL, data, { headers })
        .then(response => {
        // console.log(response.data.choices[0].text);
        console.log(response.data.choices[0].message.content);
        })
        .catch(error => {
        console.error(error);
        });
    }, 
}