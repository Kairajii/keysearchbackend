const Keyword = require('../models/keywordModel.js');

exports.getSearchVolume = async (req, res) => {
  const { keyword } = req.params;

  try {
    const result = await Keyword.findOne({ keyword });
    res.json(result ? result.searchVolume : 0);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateSearchVolume = async (req, res) => {
  const { keyword } = req.params;

  try {
    await Keyword.findOneAndUpdate(
      { keyword },
      { $inc: { searchVolume: 1 } },
      { upsert: true, new: true }
    );
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllKeywordVolumes = async (req, res) => {
    try {
        console.log('Before fetching keyword volumes');
        const keywordVolumes = await Keyword.find();
        console.log('Fetched keywordVolumes:', keywordVolumes);
        res.json(keywordVolumes);
      } catch (error) {
        console.error('Error fetching keyword volumes:', error);
        res.status(500).send('Internal Server Error');
      }
  };
