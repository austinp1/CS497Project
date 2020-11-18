const fetch = require('node-fetch');        // For sending HTTP requests
const gatewayPort = 9000;
const gatewayHost = 'http://localhost:';
// const gatewayHost = 'http://gateway:';


exports.getChallengeSetPage = async function(req, res, next){
    const url = `${gatewayHost}${gatewayPort}/getChallengeSetPageData`;
    fetch(url)                                                      // Fetch challenge data from gateway
        .then(response => response.json())                          // Extract body from response and parse it
        .then(result =>{
            if(!result.ok){
                console.log("not ok");
                console.log(result.error);
            } 
        } )
        .then(data => {
            res.render("challengeSet", {"challenges": data});       // Render challenge data using "challengeSet" template
        })
        .catch(err => res.send(err));
}

exports.getHighscoresPage = async function(req, res, next){
    var challengeId = req.query.challengeId;
    var programmingLanguage = req.query.programmingLanguage;
    console.log(`Front-End: Got highscores request for challenge: ${challengeId}, programming language: ${programmingLanguage} `)
    const url = `${gatewayHost}${gatewayPort}/getHighscoresPageData?challengeId=${challengeId}&programmingLanguage=${programmingLanguage}`;
    fetch(url)
    .then(response => response.json())                              // Extract body from response and parse it
    .then(data =>{
        res.render("highscores", {"highscores": data});
    })
    .catch(err => res.send(err));
}

exports.postNewChallenge = async function(req, res, next){
    const url = `${gatewayHost}${gatewayPort}/createChallenge`;
    console.log(req.body);

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(req.body) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        .then(result => {
            if(!result.ok){
                console.log(result);
                console.log("Front End: Error creating challenge");
                res.status(result.status).send({ error: 'TO DO: ADD THE ERROR MESSAGE SENT FROM CHALLENGES' });
            }
            res.status(result.status).send("Challenge created successfully");
        })
        .catch( err => res.status(500).send({ error: err }));
}

exports.test = function(req,res, next){
    console.log(req.body);
    
    res.send("test worked");
}
