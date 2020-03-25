function initMap() {
    //location: NYC
    const location = {lat: 40.704437, lng: -73.906243};
    //created map based on location
    const map = new google.maps.Map(document.querySelector('.map')
        , {
            center: location,
            zoom: 8
        });
    //marker, positioned on location
    const marker = new google.maps.Marker({position: location, map: map})
}

//Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});