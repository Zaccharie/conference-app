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
          
                $(idView).html(speakersFound.map(sp => `<p><a href="#">${sp.firstname} ${sp.lastname}</a></p>`))
        
            },
            error => `<p> ${error} </p>`
            )
    }
}