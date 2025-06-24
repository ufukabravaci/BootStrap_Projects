$(document).ready(function() {
    const texts = ["France", "Spain", "United States", "China", "India", "Pakistan", "Italy", "Türkiye", "Mexico", "Germany", "United Kingdom"];
    let currentIndex = 0;
    const changeContentSpan = $(".change-content");

    function changeText() {
        changeContentSpan.fadeOut(800, function() {
            $(this).text(texts[currentIndex]);
            $(this).fadeIn(800);
        });

        currentIndex = (currentIndex + 1) % texts.length;
    }

    changeContentSpan.text(texts[currentIndex]);
    currentIndex = (currentIndex + 1) % texts.length;

    setInterval(changeText, 2500);
});