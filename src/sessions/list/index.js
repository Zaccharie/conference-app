import $  from "jquery";

export default class SessionList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSessions()
            .then(
            sessionsFound => {
                `<ul>
               ${ $(idView).html(sessionsFound.map(se => `<li>${se.title}</li>`)) }
               </ul>`
            },
            error => `<p> ${error} </p>`
            )
    }
}