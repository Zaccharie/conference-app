import $  from "jquery";

export default class SpeakerList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSpeakers()
            .then(
            speakersFound => {
            $("#header").hide()
          
                $(idView).html(speakersFound.map(sp => `<p>${sp.firstname}</p>`))
        
            },
            error => `<p> ${error} </p>`
            )
    }
}