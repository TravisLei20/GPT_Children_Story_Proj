import axios from 'axios';

// const axios = require('axios');

const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/images/generations';

// Set up Axios request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
};

const actions = {
    async DALLE2connect({}, {prompt}) {
        // Set up Axios request body
        const data = {
            'prompt': prompt,
            'num_images': 1,
            'size': '256x256',
            'response_format': 'url'
        };
        try {
            // Make Axios request
            const response = await axios.post(API_URL, data, { headers })
            const messageContent = response.data.data[0].url
            console.log(response)
            console.log(messageContent)
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