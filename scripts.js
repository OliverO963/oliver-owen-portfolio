// Typing animation "switcher"
const typingTexts = ['an Artist','a Developer', 'a Designer', 'a Maker', 'a Gamer', 'a YouTuber', 'a Swimmer'];
let wordCount = 0;
let letterIndex = 0;
let currentText = '';
let letter = '';

(function typingEffect() {
    if (wordCount === typingTexts.length){
        wordCount = 0;
    }
    currentText = typingTexts[wordCount];
    letter = currentText.slice(0, ++letterIndex);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length){
        wordCount++;
        letterIndex = 0;
    }
    setTimeout(typingEffect, 200);
})();

// Go to top button "hider"
goToTopButton = document.getElementById("goToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none"
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Portrait image gallery changer
var i = 0;
var LandscapeImageGallery = [];
var slideDelayTime = 3000;
var j = 0;
var PortraitImageGallery = [];

(function changeImgs(){
    LandscapeImageGallery[0] = "images/artwork/Aurora.png";
    LandscapeImageGallery[1] = "images/artwork/MakingNews.png";
    LandscapeImageGallery[2] = "images/artwork/SeasonalSenna.jpg";
    LandscapeImageGallery[3] = "images/artwork/SpaceShoes2.jpg";
    LandscapeImageGallery[4] = "images/artwork/SpaceShoes4.jpg";
    LandscapeImageGallery[5] = "images/artwork/Splotches.jpg";
    LandscapeImageGallery[6] = "images/artwork/DeskSubwooferRender.png"
    LandscapeImageGallery[7] = "images/artwork/TraxxasBatteryHoldDown.png"

    document.slidingGalleryLandscape.src = LandscapeImageGallery[i];

    if (i < LandscapeImageGallery.length - 1) {
        i++;
    } else {
        i = 0;
    }
    
    PortraitImageGallery[0] = "images/artwork/BullFlower.png";
    PortraitImageGallery[1] = "images/artwork/Loft1.jpg";
    PortraitImageGallery[2] = "images/artwork/Loft2.jpg";
    PortraitImageGallery[3] = "images/artwork/Loft3.jpg";
    PortraitImageGallery[4] = "images/artwork/Loft4.jpg";
    PortraitImageGallery[5] = "images/artwork/SpaceShoes1.jpg";
    PortraitImageGallery[6] = "images/artwork/SpaceShoes3.jpg";
    PortraitImageGallery[7] = "images/artwork/MicHolder.png"
    
    document.slidingGalleryPortrait.src = PortraitImageGallery[j];

    if (j < PortraitImageGallery.length - 1) {
        j++;
    } else {
        j = 0;
    }

    setTimeout(changeImgs, slideDelayTime)
})();

// Year updater for copyright declaration

document.getElementById("currentYear").innerHTML = new Date().getFullYear();