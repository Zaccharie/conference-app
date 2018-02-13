import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";
import TalkService from "./common/talk.service.js";
import SessionList from "./sessions/list/index";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//alert('Conférence App démarré');

//Appel findAllSpeakers()
let talkService = new TalkService();

//Render du layout principal
let layout = new Layout();
layout.render();

//declaration des composants
let listSpeaker = new SpeakerList(talkService);
let listSession = new SessionList(talkService);


//router
var router = () => {
    if (location.hash == '#speakers-list') {
        listSpeaker.render('#main-view');
    } else if (location.hash == '#sessions-list') {
        listSession.render('#main-view');
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});