const express = require('express');
const axios = require('axios');
const router = express.Router();

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const NEWS_API_KEY = 'b89339ed5ad34c288b2f40a6771a1280'; 

router.get('/news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'There is an error fetching news' });
  }
});

module.exports = router;
