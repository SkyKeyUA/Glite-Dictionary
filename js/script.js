window.addEventListener("load", windowLoad);
const html = document.documentElement;
const searchHeaderBody = document.querySelector(".search-header__input");
const searchHeaderInput = document.getElementById("header-search");
const headerSearchListbox = document.querySelector(".search-header__pop-up");
const headerSearchRemoveBtn = document.querySelector(".search-header__clean");
const meaningItems = document.querySelectorAll(".card-meanings__item");
const meaningCollapseButton = document.querySelector(".card-meanings__button");

function windowLoad() {
    document.addEventListener("click", documentActions);
    html.classList.add("loaded");
}
function documentActions(e) {
    const targetElement = e.target;

    if (
        targetElement.closest(".dark-light-mode__sun") &&
        !html.classList.contains("light-mode")
    ) {
        html.classList.add("light-mode");
    }
    if (
        targetElement.closest(".dark-light-mode__moon") &&
        html.classList.contains("light-mode")
    ) {
        html.classList.remove("light-mode");
    }
    if (targetElement.closest(".home-content__scroll")) {
        const video = document.querySelector(
            ".home-content__hero-swiper--scroll-video",
        );
        if (video) {
            const y =
                video.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
    if (
        targetElement.closest(".actions__btn--search") &&
        !html.classList.contains("search-bar-open")
    ) {
        html.classList.add("search-bar-open");
    }
    if (targetElement.closest(".search-header__close")) {
        html.classList.remove("search-bar-open");
    }
    if (
        targetElement.closest(".search-header__clean") ||
        targetElement.closest(".search-header__close")
    ) {
        searchHeaderInput.value = "";
        headerSearchRemoveBtn.style.display = "none";
        searchHeaderBody?.classList.remove("active");
    } else if (
        !targetElement.closest(".search-header__input") &&
        searchHeaderBody.classList.contains("active")
    ) {
        searchHeaderInput.value = "";
        headerSearchRemoveBtn.style.display = "none";
        searchHeaderBody?.classList.remove("active");
    }
}
if (meaningItems.length <= 1) {
    meaningCollapseButton.style.display = "none";
}
if (document.querySelector(".hero-swiper")) {
    var swiper = new Swiper(".hero-swiper", {
        spaceBetween: 20,
        pagination: {
            el: ".swiper-actions__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-actions__arrow--next",
            prevEl: ".swiper-actions__arrow--prev",
        },
    });
}

searchHeaderInput?.addEventListener("input", (e) => {
    if (searchHeaderInput.value.length > 0 && headerSearchRemoveBtn) {
        headerSearchRemoveBtn.style.display = "block";
        searchHeaderBody?.classList.add("active");
    } else {
        headerSearchRemoveBtn.style.display = "none";
        searchHeaderBody?.classList.remove("active");
    }
});
