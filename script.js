function updateClassHeight(className) {
    let classOccurrences = document.querySelectorAll(className);
    if (classOccurrences.length > 0) {
        classOccurrences.forEach((classOccurrence) => {
            let cardWidth = classOccurrence.offsetWidth;
            let cardHeight = cardWidth * 1.5;
            classOccurrence.style.height = cardHeight + "px";
        });
    }
}

function updateAllElementHeights() {
    updateClassHeight(".grid-card");
    updateClassHeight(".grid-card-logo");
    updateClassHeight(".grid-card-text");
}

document.addEventListener("DOMContentLoaded", function () {
    updateAllElementHeights(); // Initial update on page load
});

window.addEventListener("resize", function () {
    updateAllElementHeights(); // Update on window resize
});
