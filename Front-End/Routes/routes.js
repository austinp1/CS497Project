const router = require('express').Router(); 
const controller = require('../Controllers/controller');

/// Serve Challenge Set Page ///
router.get('/challengeSet', controller.getChallengeSetPage);

/// Serve Highscores Page ///
router.get('/highscores', controller.getHighscoresPage);       /// GET /highscores?challengeId=212&programmingLanguage=java

/// Save new challenge to database ///
router.post('/createChallenge', controller.postNewChallenge);

router.get('/test', controller.test);

module.exports = router;