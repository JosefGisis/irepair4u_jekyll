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

    // Scroll-reveal animations using IntersectionObserver
    if ("IntersectionObserver" in window) {
        var targets = document.querySelectorAll("section, .banner");
        var viewportHeight = window.innerHeight;

        // Mark elements already in view to prevent flash
        targets.forEach(function (el) {
            if (el.getBoundingClientRect().top < viewportHeight) {
                el.classList.add("revealed");
            }
        });

        // Enable animation styles
        document.documentElement.classList.add("js-animations");

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -50px 0px",
            },
        );

        targets.forEach(function (el) {
            if (!el.classList.contains("revealed")) {
                observer.observe(el);
            }
        });
    }
});

window.addEventListener("resize", function () {
    updateAllElementHeights(); // Update on window resize
});
