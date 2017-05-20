var elem = document.querySelector('#elem')
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) {
    console.log(1)
}, false);

// Dispatch the event.
elem.dispatchEvent(event);