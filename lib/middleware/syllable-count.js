const { countSyllable } = require('../utils/countSyllable');

module.exports = (req, res, next) => {
  const syllables = countSyllable(req.body.text);
 console.log(req.baseUrl);
  if(req.baseUrl === '/api/v1/fives' && syllables === 5) {
    next();
  } else if(req.baseUrl === '/api/v1/sevens' && syllables === 7) {
    next();
  } else {
    const error = new Error('Syllable count incorrect');
    error.status = 400;
    next(error, console.log(syllables));
  }
};