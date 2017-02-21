function classToggleEventHandler(event) {
    var target = $(event.target);
    if (target.is('h2')) {
        target.parent()
            .find('.content')
            .slideToggle(500)
            .toggleClass('hidden');
    }
}

function clickEventHandler() {
    $('.container').click(classToggleEventHandler);
}

function main() {
    clickEventHandler();
}

$(document).ready(main);


