import $ from "jquery";

export default class SessionList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSessions()
            .then(
            sessionsFound => {
                $("#header").hide()
                $(idView).html(sessionsFound.map(se => `<p><a href="#">${se.title}</a></p>`))

            },
            error => `<p> ${error} </p>`
            )
    }
}