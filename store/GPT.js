import axios from 'axios';

// const axios = require('axios');

const API_KEY = 'api_key';
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Set up Axios request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
};

const actions = {
    async GPTconnect({}, {prompt}) {
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
        try {
            // Make Axios request
            const response = await axios.post(API_URL, data, { headers })
            const messageContent = response.data.choices[0].message.content
            // commit a mutation to update the state with the message content
            // commit('SET_MESSAGE_CONTENT', messageContent);
            // return the message content
            return messageContent;
        } catch (error) {
            console.error(error);
            return "Error";
        }
    } 
};

export default {
    actions,
}