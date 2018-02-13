import $  from "jquery";

export default class SpeakerList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSpeakers()
            .then(
            speakersFound => {
                `<ul>
               ${ $(idView).html(speakersFound.map(sp => `<li>${sp.firstname}</li>`)) }
               </ul>`
            },
            error => `<p> ${error} </p>`
            )
    }
}