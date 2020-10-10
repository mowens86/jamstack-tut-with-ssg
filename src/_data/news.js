// jshint esversion: 6

const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
    try {
      const response = await axios.get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}&pageSize=5`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };