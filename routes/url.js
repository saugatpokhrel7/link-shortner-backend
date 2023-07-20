const express = require('express');
const router = express.Router();
const Links = require('../models/Links');

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'This is url shortener api' });
});
function shortenUrl() {
  const url = Math.random().toString(36).substring(2, 7);
  return url;
}

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = 'http://localhost:5000';
  const shortUrl=shortenUrl();
const url=baseUrl+'/'+shortUrl;

  try {
    let link = await Links.findOne({ longUrl });
    if (link) {
      res.json(link.shortUrl);
    } else {
      const newLink = new Links({
        longUrl,
        shortUrl,
        url,
      });

      await newLink.save();
      res.json(newLink.shortUrl);
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }

});
router.get('/:shortUrl', async (req, res) => {
  try {
    const link = await Links.findOne({ shortUrl: req.params.shortUrl });
    if (link) {
      return res.redirect(link.longUrl);
    } else {
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});


module.exports = router;
