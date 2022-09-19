window.scrollBy(0, 1);
window.addEventListener('scroll', function() {
    let productCatalog = document.getElementById('product-catalog').offsetTop;
    let manufacture = document.getElementById('manufacture').offsetTop;
    let officeMap = document.getElementById('office-map').offsetTop;
    let statistics = document.getElementById('statistics').offsetTop;
    console.log(manufacture)
    console.log(scrollY)
    if (scrollY >= 0) {
        document.getElementById('header-nav').classList.remove('black')
    }

    if (scrollY >= productCatalog - 50) {
        document.getElementById('header-nav').classList.add('black')
    }

    if (scrollY >= manufacture - 50) {
        document.getElementById('header-nav').classList.remove('black')
    }

    if (scrollY >= officeMap - 50) {
        document.getElementById('header-nav').classList.add('black')
    }

    if (scrollY >= statistics - 50) {
        document.getElementById('header-nav').classList.remove('black')
    }

})

$(document).ready(function() {
    $('#pagepiling').pagepiling();
});




