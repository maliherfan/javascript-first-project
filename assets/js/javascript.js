const allLinks = document.querySelectorAll('.nav a');
const allSections = document.querySelectorAll('section');
const navElement = document.querySelector('.nav');
const elevatorElement = document.querySelector('.elevator');
const headerContentElement = document.querySelector('header .hero');
const navTopDistance = navElement.offsetTop;
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    if (scrollTop > headerContentElement.offsetTop) {
        headerContentElement.style.opacity = 0;
    } else {
        headerContentElement.style.opacity = 1;
    }

    if (scrollTop > 250) {
        elevatorElement.style.visibility = 'visible';
    } else {
        elevatorElement.style.visibility = 'hidden';
    }

    if (scrollTop >= navTopDistance) {
        navElement.classList.add('sticky');
    } else {
        navElement.classList.remove('sticky');
    }

    allSections.forEach(section => {
        addLightToMenue(scrollTop, section);
    });
});

const addLightToMenue = (scrollTop, section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = sectionTop + section.clientHeight;
    const sectionId = section.id;
    if (scrollTop >= sectionTop) {
        for (const link of allLinks) {
            if (sectionId === link.dataset.section) {
                link.classList.add("selected");
            }
        }
    }
    if (scrollTop > sectionHeight || scrollTop < sectionTop) {
        for (const link of allLinks) {
            if (sectionId === link.dataset.section) {
                link.classList.remove("selected");
            }
        }
    }
};

elevatorElement.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

const allLis = document.querySelectorAll("main section.detail .detailPart .detailList li");
const allInnerMenu = document.querySelectorAll("main section.detail .detailPart .detailList li div");
const allPlusIcons = document.querySelectorAll("main section.detail .detailPart .detailList li span i");
for (const li of allLis) {
    li.addEventListener("click", function () {
        const innerDiv = this.querySelector("div");
        const currPlusElement = this.querySelector("i");
        currPlusElement.innerHTML = "+";
        if (innerDiv.classList.contains("showHide")) {
            allInnerMenu.forEach(innerMenue => {
                innerMenue.classList.add("showHide")
            });
            allPlusIcons.forEach(plusIcon => {
                plusIcon.innerHTML = "+";
            });
            currPlusElement.innerHTML = "-";
        }
        innerDiv.classList.toggle("showHide");
    });
}

const openCloseElement = document.querySelector(".timingWrapper > h3");
const innerElement = document.querySelector(".timingWrapper .wrapperColumns");
openCloseElement.addEventListener("click", function () {
    innerElement.classList.toggle("openClose");
});

const inviteMoveElement = document.querySelector('section.invite div.sectionImg');
const storyMoveElement = document.querySelector('section.story div.sectionImg');
const galleryMoveElement = document.querySelector('section.gallery div.sectionImg');

let prevScrollPosition = 0;
window.addEventListener('scroll', function () {
    const newScrollPos = window.scrollY;
    if (newScrollPos > prevScrollPosition) {
        //scroll down
        inviteMoveElement.style.backgroundPositionX = "right";
        storyMoveElement.style.backgroundPositionX = "left";
        galleryMoveElement.style.backgroundPositionY = "top";
    } else {
        //scroll up
        inviteMoveElement.style.backgroundPositionX = "left";
        storyMoveElement.style.backgroundPositionX = "right";
        galleryMoveElement.style.backgroundPositionY = "bottom";
    }
    prevScrollPosition = newScrollPos <= 0 ? 0 : newScrollPos;//update previous scroll position
});

const hambergurMenu = document.querySelector('.nav ul.hamburger-menu');
const toggleElement = document.querySelector('.hamburger');
toggleElement.addEventListener('click', function () {
    hambergurMenu.classList.toggle('toggled');
});

