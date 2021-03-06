const { countSyllable } = require('../utils/countSyllable');

module.exports = (req, res, next) => {
  const syllables = countSyllable(req.body.text);
  if(req.body.text.toLowerCase().includes('robothaikubot')) {
    const error = new Error('You cannot add my name to my database');
    error.status = 400;
    next(error);  
  } else if(req.baseUrl === '/api/v1/fives' && syllables === 5) {
    next();
  } else if(req.baseUrl === '/api/v1/sevens' && syllables === 7) {
    next();
  } else {
    const error = new Error('Syllable count incorrect');
    error.status = 400;
    next(error);
  }
};
