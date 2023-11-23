function toggleMenu() {
    let hamburgerNavigation = document.querySelector('.hamburger-navigation');
    let hamburgerBars = document.querySelectorAll('.bar')

    if (hamburgerNavigation.style.display === 'block') {
        hamburgerNavigation.style.display = 'none';
        hamburgerBars.forEach(bar => bar.style.margin = '9px 0');
        hamburgerBars.forEach(bar => bar.style.height = '5px');
    } else {
        hamburgerNavigation.style.display = 'block';
        hamburgerBars.forEach(bar => bar.style.margin = '4px 0');
        hamburgerBars.forEach(bar => bar.style.height = '5px');
    }
}




function updateClassHeight(className) {
    let classOccurrences = document.querySelectorAll(className);
    if (classOccurrences.length > 0) {
        classOccurrences.forEach(classOccurrence => {
            let cardWidth = classOccurrence.offsetWidth;
            let cardHeight = cardWidth * 1.5;
            classOccurrence.style.height = cardHeight + 'px';
        });
    }
}

function updateAllElementHeights() {
    updateClassHeight('.grid-card');
    updateClassHeight('.grid-card-logo');
    updateClassHeight('.grid-card-text');
}

document.addEventListener('DOMContentLoaded', function () {
    updateAllElementHeights(); // Initial update on page load
});

window.addEventListener('resize', function () {
    updateAllElementHeights(); // Update on window resize
});