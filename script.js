/* =========================================================
   WEDDING INVITATION
   COMPLETE CLEAN SCRIPT
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
   MUSIC
========================================================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


function updateMusicButton() {

    if (
        !music ||
        !musicButton
    ) {

        return;

    }


    musicButton.textContent =
        music.paused
            ? "🔇"
            : "🔊";

}


window.addEventListener(
    "load",
    () => {

        if (!music) {
            return;
        }


        music
            .play()
            .then(
                updateMusicButton
            )
            .catch(
                updateMusicButton
            );

    }
);


document.addEventListener(
    "click",
    () => {

        if (!music) {
            return;
        }


        if (music.paused) {

            music
                .play()
                .then(
                    updateMusicButton
                )
                .catch(
                    () => {}
                );

        }

    },
    {
        once: true
    }
);


if (
    musicButton &&
    music
) {

    musicButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if (
                music.paused
            ) {

                music
                    .play()
                    .then(
                        updateMusicButton
                    )
                    .catch(
                        () => {}
                    );

            }

            else {

                music.pause();

                updateMusicButton();

            }

        }
    );

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
   THEME TESTER
========================================================= */

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


function createThemeOptions() {

    if (!themeList) {
        return;
    }


    themeList.innerHTML =
        "";


    Object.entries(
        themes
    ).forEach(
        (
            [key, theme]
        ) => {

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
                color => {

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
                () => {

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
        (
            [
                variable,
                value
            ]
        ) => {

            document.documentElement
                .style
                .setProperty(
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
            button => {

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


createThemeOptions();


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


/* =========================================================
   THEME BUTTONS
========================================================= */

if (
    themeOpen &&
    themeTester
) {

    themeOpen.addEventListener(
        "click",
        () => {

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
        () => {

            themeTester.classList.add(
                "hidden"
            );

            themeOpen.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   COUNTDOWN
   7 OCTOBER 2026 - 7:00 PM
========================================================= */

const weddingDate =
    new Date(
        "October 7, 2026 19:00:00"
    ).getTime();


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
        weddingDate -
        now;


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
        String(days)
            .padStart(
                2,
                "0"
            );


    hoursElement.textContent =
        String(hours)
            .padStart(
                2,
                "0"
            );


    minutesElement.textContent =
        String(minutes)
            .padStart(
                2,
                "0"
            );


    secondsElement.textContent =
        String(seconds)
            .padStart(
                2,
                "0"
            );

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   RSVP MODAL
========================================================= */

const rsvpModal =
    document.getElementById(
        "rsvpModal"
    );

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );


function showRSVP() {

    if (!rsvpModal) {
        return;
    }


    rsvpModal.classList.add(
        "show"
    );

}


function closeRSVP() {

    if (!rsvpModal) {
        return;
    }


    rsvpModal.classList.remove(
        "show"
    );

}


window.showRSVP =
    showRSVP;

window.closeRSVP =
    closeRSVP;


if (rsvpModal) {

    rsvpModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                rsvpModal
            ) {

                closeRSVP();

            }

        }
    );

}


/* =========================================================
   RSVP SUBMISSION
========================================================= */

if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const nameInput =
                rsvpForm.querySelector(
                    'input[name="name"]'
                );


            const guestsInput =
                rsvpForm.querySelector(
                    'input[name="guests"]'
                );


            const attendanceInput =
                rsvpForm.querySelector(
                    'select[name="attendance"]'
                );


            const messageInput =
                rsvpForm.querySelector(
                    "textarea"
                );


            /*
               Fallback for forms that
               don't have name attributes.
            */

            const inputs =
                rsvpForm.querySelectorAll(
                    "input"
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : (
                        inputs[0]
                            ? inputs[0].value.trim()
                            : ""
                    );


            const guests =
                guestsInput
                    ? guestsInput.value.trim()
                    : (
                        inputs[1]
                            ? inputs[1].value.trim()
                            : ""
                    );


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
                !attendance ||
                !guests ||
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
                rsvpForm.querySelector(
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


                rsvpForm.reset();


                closeRSVP();


                /*
                   Reload the book so
                   the new message appears.
                */

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
    );

}


/* =========================================================
   REAL WEDDING INVITATION BOOK
========================================================= */

const realBook = document.getElementById("realBook");
const bookCover = document.getElementById("bookCover");
const bookToggleButton = document.getElementById("bookToggleButton");
const bookPages = document.getElementById("bookPages");

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

const leftMessage = document.getElementById("leftMessage");
const rightMessage = document.getElementById("rightMessage");

const leftName = document.getElementById("leftName");
const rightName = document.getElementById("rightName");

const leftDate = document.getElementById("leftDate");
const rightDate = document.getElementById("rightDate");

const previousPage = document.getElementById("previousPage");
const nextPage = document.getElementById("nextPage");

const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");

const closeBookButton =
    document.getElementById("closeBookButton");

const bookCloseControl =
    document.getElementById("bookCloseControl");


/* =========================================================
   BOOK STATE
========================================================= */

let guestBookMessages = [];

let bookIndex = 0;

let bookIsOpen = false;

let bookIsTurning = false;


/* =========================================================
   DATE FORMAT
========================================================= */

function formatBookDate(date) {

    if (!date) {
        return "07 • 10 • 2026";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "07 • 10 • 2026";
    }

    return parsedDate.toLocaleDateString("en-GB");
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


    if (currentPage) {

        currentPage.textContent =
            Math.min(
                bookIndex + 1,
                total
            );

    }


    if (totalPages) {

        totalPages.textContent =
            total;

    }


    if (previousPage) {

        previousPage.disabled =
            bookIndex <= 0;

    }


    if (nextPage) {

        nextPage.disabled =
            bookIndex + 2 >=
            guestBookMessages.length;

    }

}


/* =========================================================
   UPDATE BOOK CONTENT
========================================================= */

function updateBookPages() {

    const left =
        guestBookMessages[bookIndex];

    const right =
        guestBookMessages[bookIndex + 1];


    /* LEFT PAGE */

    if (leftMessage) {

        leftMessage.textContent =
            left?.message ||
            "Our story is filled with love, laughter, and beautiful memories.";

    }


    if (leftName) {

        leftName.textContent =
            left
                ? `— ${left.name || "Guest"}`
                : "— Mohamed & Sara";

    }


    if (leftDate) {

        leftDate.textContent =
            formatBookDate(
                left?.created_at
            );

    }


    /* RIGHT PAGE */

    if (rightMessage) {

        rightMessage.textContent =
            right?.message ||
            "Leave us a beautiful message to make our guest book complete. ❤️";

    }


    if (rightName) {

        rightName.textContent =
            right
                ? `— ${right.name || "Guest"}`
                : "— Your message";

    }


    if (rightDate) {

        rightDate.textContent =
            formatBookDate(
                right?.created_at
            );

    }


    updateBookControls();

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


    console.log("OPEN BOOK CLICKED");


    bookIndex = 0;

    bookIsOpen = true;


    updateBookPages();


    /* Open cover */

    bookCover.classList.add("open");


    /* Show pages */

    realBook.classList.add("book-is-open");


    /* Show close button */

    if (bookCloseControl) {

        bookCloseControl.classList.add("show");

    }


    /* Update button */

    if (bookToggleButton) {

        bookToggleButton.textContent =
            "BOOK OPENED";

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


    console.log("CLOSE BOOK CLICKED");


    bookIsOpen = false;


    /* Close cover */

    bookCover.classList.remove("open");


    /* Hide pages */

    realBook.classList.remove("book-is-open");


    /* Hide close button */

    if (bookCloseControl) {

        bookCloseControl.classList.remove("show");

    }


    /* Restore button */

    if (bookToggleButton) {

        bookToggleButton.textContent =
            "OPEN OUR BOOK";

    }


    /* Return to first page */

    bookIndex = 0;

    updateBookPages();

}


/* =========================================================
   OPEN BUTTON
========================================================= */

if (bookToggleButton) {

    bookToggleButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            openBook();

        }
    );

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (closeBookButton) {

    closeBookButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            closeBook();

        }
    );

}


/* =========================================================
   PAGE TURN
========================================================= */

function turnBookPage(direction) {

    if (
        !bookIsOpen ||
        bookIsTurning ||
        !leftPage ||
        !rightPage
    ) {
        return;
    }


    /* NEXT */

    if (direction === "next") {

        if (
            bookIndex + 2 >=
            guestBookMessages.length
        ) {
            return;
        }


        bookIsTurning = true;


        rightPage.classList.add(
            "turn-next"
        );


        setTimeout(
            function () {

                bookIndex += 2;

                updateBookPages();

            },
            550
        );


        setTimeout(
            function () {

                rightPage.classList.remove(
                    "turn-next"
                );

                bookIsTurning = false;

            },
            1100
        );


        return;

    }


    /* PREVIOUS */

    if (direction === "previous") {

        if (bookIndex <= 0) {
            return;
        }


        bookIsTurning = true;


        leftPage.classList.add(
            "turn-previous"
        );


        setTimeout(
            function () {

                bookIndex -= 2;

                updateBookPages();

            },
            550
        );


        setTimeout(
            function () {

                leftPage.classList.remove(
                    "turn-previous"
                );

                bookIsTurning = false;

            },
            1100
        );

    }

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextPage) {

    nextPage.addEventListener(
        "click",
        function () {

            turnBookPage("next");

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (previousPage) {

    previousPage.addEventListener(
        "click",
        function () {

            turnBookPage("previous");

        }
    );

}


/* =========================================================
   LOAD GUEST MESSAGES
========================================================= */

async function loadGuestMessages() {

    try {

        const {
            data,
            error
        } = await supabaseClient
            .from("wedding_messages")
            .select(
                "id,name,attendance,guests,message,created_at"
            )
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


        if (error) {

            console.error(
                "Error loading guest book:",
                error
            );

            guestBookMessages = [];

            updateBookPages();

            return;
        }


        guestBookMessages =
            data || [];


        bookIndex = 0;


        updateBookPages();

    }

    catch (error) {

        console.error(
            "Unexpected guest book error:",
            error
        );

        guestBookMessages = [];

        updateBookPages();

    }

}


/* =========================================================
   INITIAL BOOK STATE
========================================================= */

updateBookPages();

loadGuestMessages();

/* =========================================================
   MOBILE SWIPE
========================================================= */

let touchStartX = 0;
let touchEndX = 0;

if (realBook) {

    realBook.addEventListener(
        "touchstart",
        function (event) {

            if (!bookIsOpen) {
                return;
            }

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    realBook.addEventListener(
        "touchend",
        function (event) {

            if (!bookIsOpen) {
                return;
            }

            touchEndX =
                event.changedTouches[0].clientX;

            handleBookSwipe();

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   HANDLE SWIPE
========================================================= */

function handleBookSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    /* Ignore very small movements */

    if (
        Math.abs(swipeDistance) < 50
    ) {

        return;

    }


    /* Swipe LEFT
       → Next page
    */

    if (swipeDistance < 0) {

        turnBookPage("next");

    }


    /* Swipe RIGHT
       → Previous page
    */

    else {

        turnBookPage("previous");

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


        if (error) {

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

    catch (error) {

        console.error(
            "Unexpected guest book error:",
            error
        );

    }

}


/* =========================================================
   INITIAL BOOK LOAD
========================================================= */

loadGuestMessages();


/* =========================================================
   SCROLL REVEAL
========================================================= */

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

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
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
        section => {

            sectionObserver.observe(
                section
            );

        }
    );

}

else {

    animatedSections.forEach(
        section => {

            section.classList.add(
                "show"
            );

        }
    );

}

const writeBookButton =
    document.getElementById("writeBookButton");


if (writeBookButton) {

    writeBookButton.addEventListener(
        "click",
        function () {

            showRSVP();

        }
    );

}