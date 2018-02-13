export default class Layout {
    render() {
        var $ = require("jquery");
        $(document).ready(function () {
            $('body').append(require('./layout.html'));
        })
    }
}