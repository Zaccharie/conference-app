import TalkService from "./common/talk.service.js";

alert('Conférence App démarré');

//Appel findAllSpeakers()
let talkService = new TalkService();

talkService.findAllSpeakers()
    .then(
        speakersFound => {
            speakersFound.forEach(function(sp){
                console.log(sp.firstname);
            })
        },
        error => console.log(error)
    )