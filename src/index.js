import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";
import TalkService from "./common/talk.service.js";

alert('Conférence App démarré');

//Appel findAllSpeakers()
let talkService = new TalkService();

//Render du layout principal
let layout = new Layout();
layout.render();

//render du composant listSpeaker
let listSp = new SpeakerList(talkService);
listSp.render('#main-view');