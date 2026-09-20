/* =========================================================
   💍 MOHAMED & SARA WEDDING INVITATION
   COMPLETE CLEAN SCRIPT

   CHANGE ONLY THE WEDDING CONFIGURATION
   AT THE TOP OF THIS FILE.
========================================================= */


/* =========================================================
   💍 WEDDING CONFIGURATION
   =========================================================
   THIS IS THE ONLY SECTION YOU SHOULD NORMALLY EDIT.
========================================================= */

const WEDDING = {

    /* =====================================================
       COUPLE
    ===================================================== */

    couple: {

        groom: "hamed",

        bride: "Sara"

    },


    /* =====================================================
       WEDDING DATE
    ===================================================== */

    date: {

        day: "07",

        month: "OCTOBER",

        year: "2026",

        dayName: "WEDNESDAY",

        time: "7:00 PM",

        /*
         * Countdown date
         *
         * Format:
         * YYYY-MM-DDTHH:MM:SS
         */

        countdown:
            "2026-10-07T19:00:00"

    },


    /* =====================================================
       CEREMONY
    ===================================================== */

    ceremony: {

        time: "7:00 PM",

        description:
            "The celebration begins"

    },


    /* =====================================================
       TIE THE KNOT
    ===================================================== */

    knot: {

        time: "7:30 PM",

        description:
            'We say "I do" and begin forever'

    },


    /* =====================================================
       CELEBRATION
    ===================================================== */

    celebration: {

        time: "Until Late",

        description:
            "Dinner, dancing & memories"

    },


    /* =====================================================
       LOCATION
    ===================================================== */

    location: {

        venue:
            "Grand Wedding Hall",

        city:
            "Cairo, Egypt",

        mapsUrl:
            "https://maps.app.goo.gl/HNaeH6PTy4VDhjRR7?g_st=aw"

    },


    /* =====================================================
       MUSIC
    ===================================================== */

    music: {

        file:
            "assets/wedding-music.mp3",

        autoplay:
            false

    },


    /* =====================================================
       GALLERY
    ===================================================== */

    gallery: [

        "assets/photo1.jpeg",

        "assets/photo2.jpeg",

        "assets/photo3.jpeg"

    ],


    /* =====================================================
       INVITATION BOOK
    ===================================================== */

    book: {

        title:
            "Guest Book",

        smallTitle:
            "OUR",

        introduction:
            "Leave us a little message that we can keep as a memory of our special day.",

        greeting:
            "Dear amed & Sara,",

        emptyMessage:
            "We are waiting for your beautiful message.",

        emptyName:
            "— Your message",

        date:
            "09 • 10 • 2026",

        openButton:
            "OPEN OUR BOOK",

        closeButton:
            "CLOSE BOOK",

        writeButton:
            "❧ WRITE IN OUR BOOK"

    }

};


/* =========================================================
   ⚠️ DO NOT EDIT BELOW THIS LINE
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://zeirvgpdliuxuxzmywsg.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_KxaPvyYPh-GNjNq6NYpbGw_bGAB7vMc";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeWedding();
        

    }
);


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializeWedding() {

    applyWeddingData();

    initializeCountdown();

    initializeMusic();

    initializeThemes();

    initializeRSVP();

    initializeBook();

    initializeScrollReveal();

    initializeWriteBookButton();

}


/* =========================================================
   WEDDING DATA
========================================================= */

function applyWeddingData() {


    /* =====================================================
       COUPLE
    ===================================================== */

    const coupleNames =
        document.getElementById(
            "coupleNames"
        );


    if (coupleNames) {

        coupleNames.innerHTML = `

            ${WEDDING.couple.groom}

            <span class="ampersand">
                &
            </span>

            ${WEDDING.couple.bride}

        `;

    }


    /* =====================================================
       MONTH
    ===================================================== */

    const month =
        document.querySelector(
            ".month"
        );


    if (month) {

        month.textContent =
            WEDDING.date.month;

    }


    /* =====================================================
       DAY
    ===================================================== */

    const dateNumber =
        document.querySelector(
            ".date-row strong"
        );


    if (dateNumber) {

        dateNumber.textContent =
            WEDDING.date.day;

    }


    /* =====================================================
       DAY NAME
    ===================================================== */

    const dateSpans =
        document.querySelectorAll(
            ".date-row span"
        );


    if (dateSpans.length > 0) {

        dateSpans[0].textContent =
            WEDDING.date.dayName;

    }


    /* =====================================================
       TIME
    ===================================================== */

    if (dateSpans.length > 1) {

        dateSpans[
            dateSpans.length - 1
        ].textContent =
            `AT ${WEDDING.date.time}`;

    }


    /* =====================================================
       YEAR
    ===================================================== */

    const year =
        document.querySelector(
            ".year"
        );


    if (year) {

        year.textContent =
            WEDDING.date.year;

    }


    /* =====================================================
       CEREMONY
    ===================================================== */

    const ceremonyCard =
        document.querySelector(
            ".detail-card:nth-child(1)"
        );


    if (ceremonyCard) {

        const time =
            ceremonyCard.querySelector(
                "p"
            );

        const description =
            ceremonyCard.querySelector(
                "span"
            );


        if (time) {

            time.textContent =
                WEDDING.ceremony.time;

        }


        if (description) {

            description.textContent =
                WEDDING.ceremony.description;

        }

    }


    /* =====================================================
       TIE THE KNOT
    ===================================================== */

    const knotCard =
        document.querySelector(
            ".detail-card:nth-child(2)"
        );


    if (knotCard) {

        const time =
            knotCard.querySelector(
                "p"
            );

        const description =
            knotCard.querySelector(
                "span"
            );


        if (time) {

            time.textContent =
                WEDDING.knot.time;

        }


        if (description) {

            description.textContent =
                WEDDING.knot.description;

        }

    }


    /* =====================================================
       CELEBRATION
    ===================================================== */

    const celebrationCard =
        document.querySelector(
            ".detail-card:nth-child(3)"
        );


    if (celebrationCard) {

        const time =
            celebrationCard.querySelector(
                "p"
            );

        const description =
            celebrationCard.querySelector(
                "span"
            );


        if (time) {

            time.textContent =
                WEDDING.celebration.time;

        }


        if (description) {

            description.textContent =
                WEDDING.celebration.description;

        }

    }


    /* =====================================================
       LOCATION
    ===================================================== */

    const locationText =
        document.querySelector(
            ".location-text"
        );


    if (locationText) {

        locationText.innerHTML = `

            ${WEDDING.location.venue}

            <br>

            ${WEDDING.location.city}

        `;

    }


    /* =====================================================
       MAP BUTTON
    ===================================================== */

    const mapButton =
        document.querySelector(
            ".map-button"
        );


    if (mapButton) {

        mapButton.href =
            WEDDING.location.mapsUrl;

    }


    /* =====================================================
       FOOTER
    ===================================================== */

    const footerNames =
        document.querySelector(
            ".footer h2"
        );


    if (footerNames) {

        footerNames.textContent =

            `${WEDDING.couple.groom} & ` +
            `${WEDDING.couple.bride}`;

    }


    const footerDate =
        document.querySelector(
            ".footer > p"
        );


    if (footerDate) {

        footerDate.textContent =

            `${WEDDING.date.day} • ` +
            `${getMonthNumber(WEDDING.date.month)} • ` +
            `${WEDDING.date.year}`;

    }


    /* =====================================================
       GALLERY
    ===================================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img"
        );


    galleryImages.forEach(
        function (image, index) {

            if (
                WEDDING.gallery[index]
            ) {

                image.src =
                    WEDDING.gallery[index];

            }

        }
    );

}


/* =========================================================
   MONTH NUMBER
========================================================= */

function getMonthNumber(month) {

    const months = {

        JANUARY: "01",

        FEBRUARY: "02",

        MARCH: "03",

        APRIL: "04",

        MAY: "05",

        JUNE: "06",

        JULY: "07",

        AUGUST: "08",

        SEPTEMBER: "09",

        OCTOBER: "10",

        NOVEMBER: "11",

        DECEMBER: "12"

    };


    return months[
        String(month).toUpperCase()
    ] || "01";

}


/* =========================================================
   COUNTDOWN
========================================================= */

let weddingCountdownDate = null;


function initializeCountdown() {

    weddingCountdownDate =
        new Date(
            WEDDING.date.countdown
        ).getTime();


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );

}


function updateCountdown() {

    const daysElement =
        document.getElementById(
            "days"
        );

    const hoursElement =
        document.getElementById(
            "hours"
        );

    const minutesElement =
        document.getElementById(
            "minutes"
        );

    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    const now =
        new Date().getTime();


    const difference =
        weddingCountdownDate - now;


    if (
        difference <= 0
    ) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        Math.floor(

            (
                difference %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            ) /

            (
                1000 *
                60 *
                60
            )

        );


    const minutes =
        Math.floor(

            (
                difference %
                (
                    1000 *
                    60 *
                    60
                )

            ) /

            (
                1000 *
                60
            )

        );


    const seconds =
        Math.floor(

            (
                difference %
                (
                    1000 *
                    60
                )

            ) /

            1000

        );


    daysElement.textContent =
        String(days).padStart(
            2,
            "0"
        );


    hoursElement.textContent =
        String(hours).padStart(
            2,
            "0"
        );


    minutesElement.textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    secondsElement.textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}


/* =========================================================
   MUSIC
========================================================= */

function initializeMusic() {

    const music =
        document.getElementById(
            "backgroundMusic"
        );


    const musicButton =
        document.getElementById(
            "musicButton"
        );


    if (!music) {

        return;

    }


    music.src =
        WEDDING.music.file;


    function updateMusicButton() {

        if (!musicButton) {

            return;

        }


        musicButton.textContent =
            music.paused
                ? "🔇"
                : "🔊";

    }


    updateMusicButton();


    if (
        WEDDING.music.autoplay
    ) {

        music.play()
            .then(
                updateMusicButton
            )
            .catch(
                function () {

                    updateMusicButton();

                }
            );

    }


    if (musicButton) {

        musicButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                if (
                    music.paused
                ) {

                    music.play()
                        .then(
                            updateMusicButton
                        )
                        .catch(
                            function () {}
                        );

                } else {

                    music.pause();

                    updateMusicButton();

                }

            }
        );

    }

}


/* =========================================================
   THEMES
========================================================= */

const themes = {

    sage: {

        name:
            "Sage & Cream",

        colors: [
            "#FAF7EF",
            "#F3EEE3",
            "#858666",
            "#C99C4D"
        ],

        variables: {

            "--background":
                "#FAF7EF",

            "--background-secondary":
                "#F3EEE3",

            "--background-accent":
                "#EBE3D2",

            "--primary":
                "#858666",

            "--primary-dark":
                "#666747",

            "--accent":
                "#C99C4D",

            "--accent-soft":
                "#E1C48B",

            "--text":
                "#38372F",

            "--text-light":
                "#77736A",

            "--card":
                "#FFFDF8",

            "--border":
                "#DDD1BA",

            "--script":
                "#C47F68"

        }

    },


    rose: {

        name:
            "Dusty Rose",

        colors: [
            "#FBF5F3",
            "#F0DFDB",
            "#A97879",
            "#C89D59"
        ],

        variables: {

            "--background":
                "#FBF5F3",

            "--background-secondary":
                "#F0DFDB",

            "--background-accent":
                "#E9D2CD",

            "--primary":
                "#A97879",

            "--primary-dark":
                "#794F51",

            "--accent":
                "#C89D59",

            "--accent-soft":
                "#E0C28A",

            "--text":
                "#403638",

            "--text-light":
                "#7A7072",

            "--card":
                "#FFFDFC",

            "--border":
                "#E0CCCA",

            "--script":
                "#B86F70"

        }

    },


    champagne: {

        name:
            "Champagne",

        colors: [
            "#FCF8EE",
            "#F1E6D1",
            "#A88B51",
            "#C49A50"
        ],

        variables: {

            "--background":
                "#FCF8EE",

            "--background-secondary":
                "#F1E6D1",

            "--background-accent":
                "#E6D6B8",

            "--primary":
                "#A88B51",

            "--primary-dark":
                "#70572F",

            "--accent":
                "#C49A50",

            "--accent-soft":
                "#E0C389",

            "--text":
                "#40382D",

            "--text-light":
                "#777064",

            "--card":
                "#FFFDF8",

            "--border":
                "#DDD0B6",

            "--script":
                "#B68B5C"

        }

    },


    dustyBlue: {

        name:
            "Dusty Blue",

        colors: [
            "#F5F7F6",
            "#E3EBEC",
            "#78949A",
            "#C8A66A"
        ],

        variables: {

            "--background":
                "#F5F7F6",

            "--background-secondary":
                "#E3EBEC",

            "--background-accent":
                "#D5E1E3",

            "--primary":
                "#78949A",

            "--primary-dark":
                "#506E74",

            "--accent":
                "#C8A66A",

            "--accent-soft":
                "#DEC58E",

            "--text":
                "#354145",

            "--text-light":
                "#6F7C80",

            "--card":
                "#FFFFFF",

            "--border":
                "#D0DDDE",

            "--script":
                "#AE7A70"

        }

    },


    lavender: {

        name:
            "Lavender",

        colors: [
            "#F9F6FA",
            "#EAE2EF",
            "#947EA2",
            "#C7A56A"
        ],

        variables: {

            "--background":
                "#F9F6FA",

            "--background-secondary":
                "#EAE2EF",

            "--background-accent":
                "#DED2E7",

            "--primary":
                "#947EA2",

            "--primary-dark":
                "#68516F",

            "--accent":
                "#C7A56A",

            "--accent-soft":
                "#DFC590",

            "--text":
                "#403943",

            "--text-light":
                "#77717C",

            "--card":
                "#FFFFFF",

            "--border":
                "#DDD2E3",

            "--script":
                "#AD7B7C"

        }

    },


    terracotta: {

        name:
            "Terracotta",

        colors: [
            "#FBF4EB",
            "#EDDDCF",
            "#A9684E",
            "#C49B5E"
        ],

        variables: {

            "--background":
                "#FBF4EB",

            "--background-secondary":
                "#EDDDCF",

            "--background-accent":
                "#E4C9B3",

            "--primary":
                "#A9684E",

            "--primary-dark":
                "#784634",

            "--accent":
                "#C49B5E",

            "--accent-soft":
                "#DFC28A",

            "--text":
                "#483A34",

            "--text-light":
                "#7B6E67",

            "--card":
                "#FFFDF9",

            "--border":
                "#DECABE",

            "--script":
                "#B66F55"

        }

    },


    dark: {

        name:
            "Dark & Gold",

        colors: [
            "#1D1D1A",
            "#292923",
            "#C5A55F",
            "#C47F68"
        ],

        variables: {

            "--background":
                "#1D1D1A",

            "--background-secondary":
                "#282820",

            "--background-accent":
                "#302E25",

            "--primary":
                "#858666",

            "--primary-dark":
                "#656542",

            "--accent":
                "#C5A55F",

            "--accent-soft":
                "#DFC789",

            "--text":
                "#F5F1E7",

            "--text-light":
                "#BDB9AE",

            "--card":
                "#292923",

            "--border":
                "#464438",

            "--script":
                "#D09278"

        }

    },


    olive: {

        name:
            "Olive & Sand",

        colors: [
            "#F8F4E9",
            "#EAE1CE",
            "#7F805D",
            "#C49D61"
        ],

        variables: {

            "--background":
                "#F8F4E9",

            "--background-secondary":
                "#EAE1CE",

            "--background-accent":
                "#DDD2B7",

            "--primary":
                "#7F805D",

            "--primary-dark":
                "#5B5B40",

            "--accent":
                "#C49D61",

            "--accent-soft":
                "#DDC38B",

            "--text":
                "#414134",

            "--text-light":
                "#777663",

            "--card":
                "#FFFDF7",

            "--border":
                "#DAD1BC",

            "--script":
                "#AE7A64"

        }

    }

};


/* =========================================================
   INITIALIZE THEMES
========================================================= */

function initializeThemes() {

    const themeTester =
        document.getElementById(
            "themeTester"
        );


    const themeOpen =
        document.getElementById(
            "themeOpen"
        );


    const themeClose =
        document.getElementById(
            "themeClose"
        );


    const themeList =
        document.getElementById(
            "themeList"
        );


    if (themeList) {

        themeList.innerHTML =
            "";


        Object.entries(
            themes
        ).forEach(
            function (
                [
                    key,
                    theme
                ]
            ) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "theme-option";


                button.dataset.theme =
                    key;


                const name =
                    document.createElement(
                        "span"
                    );


                name.className =
                    "theme-name";


                name.textContent =
                    theme.name;


                const colors =
                    document.createElement(
                        "div"
                    );


                colors.className =
                    "theme-colors";


                theme.colors.forEach(
                    function (
                        color
                    ) {

                        const circle =
                            document.createElement(
                                "span"
                            );


                        circle.className =
                            "theme-color";


                        circle.style.background =
                            color;


                        colors.appendChild(
                            circle
                        );

                    }
                );


                button.appendChild(
                    name
                );


                button.appendChild(
                    colors
                );


                button.addEventListener(
                    "click",
                    function () {

                        applyTheme(
                            key
                        );

                    }
                );


                themeList.appendChild(
                    button
                );

            }
        );

    }


    const savedTheme =
        localStorage.getItem(
            "wedding-theme"
        );


    applyTheme(

        savedTheme &&
        themes[savedTheme]

            ? savedTheme

            : "sage"

    );


    if (
        themeOpen &&
        themeTester
    ) {

        themeOpen.addEventListener(
            "click",
            function () {

                themeTester.classList.remove(
                    "hidden"
                );


                themeOpen.classList.remove(
                    "visible"
                );

            }
        );

    }


    if (
        themeClose &&
        themeTester
    ) {

        themeClose.addEventListener(
            "click",
            function () {

                themeTester.classList.add(
                    "hidden"
                );


                themeOpen.classList.add(
                    "visible"
                );

            }
        );

    }

}


/* =========================================================
   APPLY THEME
========================================================= */

function applyTheme(
    themeKey
) {

    const theme =
        themes[themeKey];


    if (!theme) {

        return;

    }


    Object.entries(
        theme.variables
    ).forEach(
        function (
            [
                variable,
                value
            ]
        ) {

            document.documentElement.style.setProperty(
                variable,
                value
            );

        }
    );


    document
        .querySelectorAll(
            ".theme-option"
        )
        .forEach(
            function (
                button
            ) {

                button.classList.remove(
                    "active"
                );

            }
        );


    const activeButton =
        document.querySelector(
            `[data-theme="${themeKey}"]`
        );


    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }


    localStorage.setItem(
        "wedding-theme",
        themeKey
    );

}


/* =========================================================
   RSVP
========================================================= */

function initializeRSVP() {

    const rsvpModal =
        document.getElementById(
            "rsvpModal"
        );


    const rsvpForm =
        document.getElementById(
            "rsvpForm"
        );


    if (
        rsvpModal
    ) {

        rsvpModal.addEventListener(
            "click",
            function (
                event
            ) {

                if (
                    event.target ===
                    rsvpModal
                ) {

                    closeRSVP();

                }

            }
        );

    }


    if (
        rsvpForm
    ) {

        rsvpForm.addEventListener(
            "submit",
            submitRSVP
        );

    }


    window.showRSVP =
        showRSVP;


    window.closeRSVP =
        closeRSVP;

}


/* =========================================================
   SHOW RSVP
========================================================= */

function showRSVP() {

    const modal =
        document.getElementById(
            "rsvpModal"
        );


    if (modal) {

        modal.classList.add(
            "show"
        );

    }

}


/* =========================================================
   CLOSE RSVP
========================================================= */

function closeRSVP() {

    const modal =
        document.getElementById(
            "rsvpModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   SUBMIT RSVP
========================================================= */

async function submitRSVP(
    event
) {

    event.preventDefault();


    const form =
        event.currentTarget;


    const nameInput =
        form.querySelector(
            'input[name="name"]'
        );


    const guestsInput =
        form.querySelector(
            'input[name="guests"]'
        );


    const attendanceInput =
        form.querySelector(
            'select[name="attendance"]'
        );


    const messageInput =
        form.querySelector(
            "textarea"
        );


    const name =
        nameInput
            ? nameInput.value.trim()
            : "";


    const guests =
        guestsInput
            ? guestsInput.value.trim()
            : "";


    const attendance =
        attendanceInput
            ? attendanceInput.value
            : "";


    const message =
        messageInput
            ? messageInput.value.trim()
            : "";


    if (
        !name ||
        !guests ||
        !attendance ||
        !message
    ) {

        alert(
            "Please fill in all fields ❤️"
        );

        return;

    }


    const guestNumber =
        Number(
            guests
        );


    if (
        !Number.isInteger(
            guestNumber
        ) ||
        guestNumber < 1 ||
        guestNumber > 20
    ) {

        alert(
            "Please enter a valid number of guests."
        );

        return;

    }


    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            "SENDING...";

    }


    try {

        const {
            error
        } =
            await supabaseClient
                .from(
                    "wedding_messages"
                )
                .insert({

                    name:
                        name,

                    attendance:
                        attendance,

                    guests:
                        guestNumber,

                    message:
                        message

                });


        if (error) {

            throw error;

        }


        alert(
            "Thank you! Your message has been added to our invitation book. ❤️"
        );


        form.reset();


        closeRSVP();


        await loadGuestMessages();

    }

    catch (error) {

        console.error(
            "Supabase RSVP error:",
            error
        );


        alert(
            "Sorry, we couldn't save your RSVP. Please try again. ❤️"
        );

    }

    finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                "SEND RSVP";

        }

    }

}


/* =========================================================
   INVITATION BOOK
========================================================= */

let realBook = null;

let bookCover = null;

let bookToggleButton = null;

let bookPages = null;

let leftPage = null;

let rightPage = null;

let leftMessage = null;

let rightMessage = null;

let leftName = null;

let rightName = null;

let leftDate = null;

let rightDate = null;

let previousPage = null;

let nextPage = null;

let currentPage = null;

let totalPages = null;

let closeBookButton = null;

let bookCloseControl = null;

let guestBookMessages = [];

let bookIndex = 0;

let bookIsOpen = false;

let bookIsTurning = false;


/* =========================================================
   INITIALIZE BOOK
========================================================= */

function initializeBook() {

    realBook =
        document.getElementById(
            "realBook"
        );


    bookCover =
        document.getElementById(
            "bookCover"
        );


    bookToggleButton =
        document.getElementById(
            "bookToggleButton"
        );


    bookPages =
        document.getElementById(
            "bookPages"
        );


    leftPage =
        document.getElementById(
            "leftPage"
        );


    rightPage =
        document.getElementById(
            "rightPage"
        );


    leftMessage =
        document.getElementById(
            "leftMessage"
        );


    rightMessage =
        document.getElementById(
            "rightMessage"
        );


    leftName =
        document.getElementById(
            "leftName"
        );


    rightName =
        document.getElementById(
            "rightName"
        );


    leftDate =
        document.getElementById(
            "leftDate"
        );


    rightDate =
        document.getElementById(
            "rightDate"
        );


    previousPage =
        document.getElementById(
            "previousPage"
        );


    nextPage =
        document.getElementById(
            "nextPage"
        );


    currentPage =
        document.getElementById(
            "currentPage"
        );


    totalPages =
        document.getElementById(
            "totalPages"
        );


    closeBookButton =
        document.getElementById(
            "closeBookButton"
        );


    bookCloseControl =
        document.getElementById(
            "bookCloseControl"
        );


    /* =====================================================
       APPLY BOOK CONFIG
    ===================================================== */

    applyBookData();


    /* =====================================================
       OPEN
    ===================================================== */

    if (
        bookToggleButton
    ) {

        bookToggleButton.addEventListener(
            "click",
            function (
                event
            ) {

                event.preventDefault();

                event.stopPropagation();

                openBook();

            }
        );

    }


    /* =====================================================
       CLOSE
    ===================================================== */

    if (
        closeBookButton
    ) {

        closeBookButton.addEventListener(
            "click",
            function (
                event
            ) {

                event.preventDefault();

                event.stopPropagation();

                closeBook();

            }
        );

    }


    /* =====================================================
       NEXT
    ===================================================== */

    if (
        nextPage
    ) {

        nextPage.addEventListener(
            "click",
            function () {

                turnBookPage(
                    "next"
                );

            }
        );

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    if (
        previousPage
    ) {

        previousPage.addEventListener(
            "click",
            function () {

                turnBookPage(
                    "previous"
                );

            }
        );

    }


    /* =====================================================
       MOBILE SWIPE
    ===================================================== */

    initializeBookSwipe();


    /* =====================================================
       INITIAL DATA
    ===================================================== */

    updateBookPages();


    loadGuestMessages();

}


/* =========================================================
   APPLY BOOK CONFIGURATION
========================================================= */

function applyBookData() {

    /* =====================================================
       BOOK COVER — SMALL TITLE
    ===================================================== */

    const bookCoverSmallTitle =
        document.getElementById(
            "bookCoverSmallTitle"
        );

    if (bookCoverSmallTitle) {

        bookCoverSmallTitle.textContent =
            WEDDING.book.smallTitle;

    }


    /* =====================================================
       BOOK COVER — TITLE
    ===================================================== */

    const bookCoverTitle =
        document.getElementById(
            "bookCoverTitle"
        );

    if (bookCoverTitle) {

        bookCoverTitle.textContent =
            WEDDING.book.title;

    }


    /* =====================================================
       BOOK COVER — COUPLE NAMES
    ===================================================== */

    const bookCoverNames =
        document.getElementById(
            "bookCoverNames"
        );

    if (bookCoverNames) {

        bookCoverNames.textContent =
            `${WEDDING.couple.groom} & ` +
            `${WEDDING.couple.bride}`;

    }


    /* =====================================================
       BOOK COVER — DATE
    ===================================================== */

    const bookCoverDate =
        document.getElementById(
            "bookCoverDate"
        );

    if (bookCoverDate) {

        bookCoverDate.textContent =
            `${WEDDING.date.day} • ` +
            `${getMonthNumber(WEDDING.date.month)} • ` +
            `${WEDDING.date.year}`;

    }


    /* =====================================================
       BOOK INTRODUCTION
    ===================================================== */

    const bookIntro =
        document.getElementById(
            "guestBookIntro"
        );

    if (bookIntro) {

        bookIntro.textContent =
            WEDDING.book.introduction;

    }


    /* =====================================================
       LEFT PAGE — GREETING
    ===================================================== */

    const leftGreeting =
        document.getElementById(
            "leftGreeting"
        );

    if (leftGreeting) {

        leftGreeting.textContent =
            WEDDING.book.greeting;

    }


    /* =====================================================
       RIGHT PAGE — GREETING
    ===================================================== */

    const rightGreeting =
        document.getElementById(
            "rightGreeting"
        );

    if (rightGreeting) {

        rightGreeting.textContent =
            WEDDING.book.greeting;

    }


    /* =====================================================
       EMPTY / DEFAULT RIGHT MESSAGE
    ===================================================== */

    if (rightMessage) {

        rightMessage.textContent =
            WEDDING.book.emptyMessage;

    }


    /* =====================================================
       EMPTY / DEFAULT RIGHT NAME
    ===================================================== */

    if (rightName) {

        rightName.textContent =
            WEDDING.book.emptyName;

    }


    /* =====================================================
       PAGE DATES
    ===================================================== */

    const pageDates =
        document.querySelectorAll(
            ".page-date"
        );

    pageDates.forEach(
        function (element) {

            /*
             * Use the wedding date automatically
             * instead of maintaining another date
             * inside WEDDING.book.
             */

            element.textContent =
                `${WEDDING.date.day} • ` +
                `${getMonthNumber(WEDDING.date.month)} • ` +
                `${WEDDING.date.year}`;

        }
    );


    /* =====================================================
       OPEN BOOK BUTTON
    ===================================================== */

    const openButton =
        document.getElementById(
            "bookToggleButton"
        );

    if (openButton) {

        openButton.textContent =
            WEDDING.book.openButton;

    }


    /* =====================================================
       CLOSE BOOK BUTTON
    ===================================================== */

    const closeButton =
        document.getElementById(
            "closeBookButton"
        );

    if (closeButton) {

        closeButton.textContent =
            WEDDING.book.closeButton;

    }


    /* =====================================================
       WRITE IN OUR BOOK BUTTON
    ===================================================== */

    const writeButton =
        document.getElementById(
            "writeBookButton"
        );

    if (writeButton) {

        writeButton.textContent =
            WEDDING.book.writeButton;

    }

}


/* =========================================================
   OPEN BOOK
========================================================= */

function openBook() {

    if (
        !realBook ||
        !bookCover ||
        bookIsOpen
    ) {

        return;

    }


    console.log(
        "OPEN BOOK CLICKED"
    );


    bookIsOpen =
        true;


    bookIndex =
        0;


    updateBookPages();


    bookCover.classList.add(
        "open"
    );


    realBook.classList.add(
        "book-is-open"
    );


    if (
        bookCloseControl
    ) {

        bookCloseControl.classList.add(
            "show"
        );

    }


    if (
        bookToggleButton
    ) {

        bookToggleButton.textContent =
            WEDDING.book.closeButton;

    }

}


/* =========================================================
   CLOSE BOOK
========================================================= */

function closeBook() {

    if (
        !realBook ||
        !bookCover ||
        !bookIsOpen
    ) {

        return;

    }


    console.log(
        "CLOSE BOOK CLICKED"
    );


    bookIsOpen =
        false;


    bookCover.classList.remove(
        "open"
    );


    realBook.classList.remove(
        "book-is-open"
    );


    if (
        bookCloseControl
    ) {

        bookCloseControl.classList.remove(
            "show"
        );

    }


    if (
        bookToggleButton
    ) {

        bookToggleButton.textContent =
            WEDDING.book.openButton;

    }


    bookIndex =
        0;


    updateBookPages();

}


/* =========================================================
   UPDATE BOOK CONTROLS
========================================================= */

function updateBookControls() {

    const total =
        Math.max(
            1,
            guestBookMessages.length
        );


    if (
        currentPage
    ) {

        currentPage.textContent =
            Math.min(
                bookIndex + 1,
                total
            );

    }


    if (
        totalPages
    ) {

        totalPages.textContent =
            total;

    }


    if (
        previousPage
    ) {

        previousPage.disabled =
            bookIndex <= 0;

    }


    if (
        nextPage
    ) {

        nextPage.disabled =
            bookIndex + 2 >=
            guestBookMessages.length;

    }

}


/* =========================================================
   UPDATE BOOK PAGES
========================================================= */

function updateBookPages() {

    const left =
        guestBookMessages[
            bookIndex
        ];


    const right =
        guestBookMessages[
            bookIndex + 1
        ];


    /* =====================================================
       LEFT PAGE
    ===================================================== */

    if (
        leftMessage
    ) {

        leftMessage.textContent =

            left?.message ||

            WEDDING.book.emptyMessage;

    }


    if (
        leftName
    ) {

        leftName.textContent =

            left

                ? `— ${left.name || "Guest"}`

                : `— ${WEDDING.couple.groom} & ` +
                  `${WEDDING.couple.bride}`;

    }


    if (
        leftDate
    ) {

        leftDate.textContent =

            left

                ? formatBookDate(
                    left.created_at
                )

                : WEDDING.book.date;

    }


    /* =====================================================
       RIGHT PAGE
    ===================================================== */

    if (
        rightMessage
    ) {

        rightMessage.textContent =

            right?.message ||

            WEDDING.book.emptyMessage;

    }


    if (
        rightName
    ) {

        rightName.textContent =

            right

                ? `— ${right.name || "Guest"}`

                : WEDDING.book.emptyName;

    }


    if (
        rightDate
    ) {

        rightDate.textContent =

            right

                ? formatBookDate(
                    right.created_at
                )

                : WEDDING.book.date;

    }


    updateBookControls();

}


/* =========================================================
   FORMAT BOOK DATE
========================================================= */

function formatBookDate(
    date
) {

    if (!date) {

        return WEDDING.book.date;

    }


    const parsedDate =
        new Date(
            date
        );


    if (
        Number.isNaN(
            parsedDate.getTime()
        )
    ) {

        return WEDDING.book.date;

    }


    return parsedDate.toLocaleDateString(
        "en-GB"
    );

}


/* =========================================================
   TURN PAGE
========================================================= */

function turnBookPage(
    direction
) {

    if (
        !bookIsOpen ||
        bookIsTurning
    ) {

        return;

    }


    /* =====================================================
       NEXT
    ===================================================== */

    if (
        direction === "next"
    ) {

        if (
            bookIndex + 2 >=
            guestBookMessages.length
        ) {

            return;

        }


        bookIsTurning =
            true;


        if (
            rightPage
        ) {

            rightPage.classList.add(
                "turn-next"
            );

        }


        setTimeout(
            function () {

                bookIndex +=
                    2;

                updateBookPages();

            },
            550
        );


        setTimeout(
            function () {

                if (
                    rightPage
                ) {

                    rightPage.classList.remove(
                        "turn-next"
                    );

                }


                bookIsTurning =
                    false;

            },
            1100
        );


        return;

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    if (
        direction === "previous"
    ) {

        if (
            bookIndex <= 0
        ) {

            return;

        }


        bookIsTurning =
            true;


        if (
            leftPage
        ) {

            leftPage.classList.add(
                "turn-previous"
            );

        }


        setTimeout(
            function () {

                bookIndex -=
                    2;

                updateBookPages();

            },
            550
        );


        setTimeout(
            function () {

                if (
                    leftPage
                ) {

                    leftPage.classList.remove(
                        "turn-previous"
                    );

                }


                bookIsTurning =
                    false;

            },
            1100
        );

    }

}


/* =========================================================
   LOAD GUEST MESSAGES
========================================================= */

async function loadGuestMessages() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from(
                    "wedding_messages"
                )
                .select(
                    "id,name,attendance,guests,message,created_at"
                )
                .order(
                    "created_at",
                    {
                        ascending:
                            false
                    }
                );


        if (
            error
        ) {

            console.error(
                "Error loading guest book:",
                error
            );


            guestBookMessages =
                [];


            updateBookPages();


            return;

        }


        guestBookMessages =
            data || [];


        bookIndex =
            0;


        updateBookPages();

    }

    catch (
        error
    ) {

        console.error(
            "Unexpected guest book error:",
            error
        );


        guestBookMessages =
            [];


        updateBookPages();

    }

}


/* =========================================================
   MOBILE SWIPE
========================================================= */

function initializeBookSwipe() {

    if (
        !realBook
    ) {

        return;

    }


    let touchStartX =
        0;


    let touchStartY =
        0;


    realBook.addEventListener(
        "touchstart",
        function (
            event
        ) {

            if (
                !bookIsOpen
            ) {

                return;

            }


            const touch =
                event.touches[0];


            touchStartX =
                touch.clientX;


            touchStartY =
                touch.clientY;

        },
        {
            passive:
                true
        }
    );


    realBook.addEventListener(
        "touchend",
        function (
            event
        ) {

            if (
                !bookIsOpen
            ) {

                return;

            }


            const touch =
                event.changedTouches[0];


            const touchEndX =
                touch.clientX;


            const touchEndY =
                touch.clientY;


            const differenceX =
                touchEndX -
                touchStartX;


            const differenceY =
                touchEndY -
                touchStartY;


            /*
             * Ignore vertical scrolling.
             */

            if (
                Math.abs(
                    differenceY
                ) >
                Math.abs(
                    differenceX
                )
            ) {

                return;

            }


            /*
             * Minimum swipe distance.
             */

            if (
                Math.abs(
                    differenceX
                ) < 50
            ) {

                return;

            }


            /*
             * LEFT → NEXT
             */

            if (
                differenceX < 0
            ) {

                turnBookPage(
                    "next"
                );

            }


            /*
             * RIGHT → PREVIOUS
             */

            else {

                turnBookPage(
                    "previous"
                );

            }

        },
        {
            passive:
                true
        }
    );

}


/* =========================================================
   WRITE IN OUR BOOK
========================================================= */

function initializeWriteBookButton() {

    const writeBookButton =
        document.getElementById(
            "writeBookButton"
        );


    if (
        writeBookButton
    ) {

        writeBookButton.addEventListener(
            "click",
            function () {

                showRSVP();

            }
        );

    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeScrollReveal() {

    const animatedSections =
        document.querySelectorAll(

            ".story," +

            ".details," +

            ".location," +

            ".countdown-section," +

            ".gallery," +

            ".rsvp," +

            ".guest-book," +

            ".footer"

        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(

                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                            }

                        }
                    );

                },

                {
                    threshold:
                        0.15
                }

            );


        animatedSections.forEach(
            function (
                section
            ) {

                observer.observe(
                    section
                );

            }
        );

    }

    else {

        animatedSections.forEach(
            function (
                section
            ) {

                section.classList.add(
                    "show"
                );

            }
        );

    }

}