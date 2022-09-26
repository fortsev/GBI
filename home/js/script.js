new fullpage('#fullpage', {
    verticalCentered: false,
    navigation: true,
    onLeave: function (origin, destination, direction) {
        if (destination.index == 1 || destination.index == 3) {
            document.getElementById('header-nav').classList.add('black')
            document.getElementById('fp-nav').classList.add('black')
        } else {
            document.getElementById('header-nav').classList.remove('black')
            document.getElementById('fp-nav').classList.remove('black')
        }
    }
});







