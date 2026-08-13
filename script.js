/* =========================================================
   ELEMENTS
========================================================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


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
                "#F1E1DE",

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
   CREATE THEME OPTIONS
========================================================= */

function createThemeOptions() {

    Object.entries(
        themes
    ).forEach(
        ([key, theme]) => {


            const button =
                document.createElement(
                    "button"
                );


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
        ([variable, value]) => {

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
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );



    const active =
        document.querySelector(
            `[data-theme="${themeKey}"]`
        );


    if (active) {

        active.classList.add(
            "active"
        );

    }



    localStorage.setItem(
        "wedding-theme",
        themeKey
    );

}



/* =========================================================
   INITIALIZE THEMES
========================================================= */

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
   THEME TESTER
   ALWAYS CLOSED AT START
========================================================= */

themeTester.classList.add(
    "hidden"
);

themeOpen.classList.add(
    "visible"
);



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



/* =========================================================
   MUSIC
========================================================= */

function updateMusicButton() {

    musicButton.textContent =
        music.paused
            ? "🔇"
            : "🔊";

}



/*
    Try autoplay.
*/

window.addEventListener(
    "load",
    () => {

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



/*
    Start music after
    first user interaction
    if autoplay was blocked.
*/

document.addEventListener(
    "click",
    () => {

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

    },
    {
        once: true
    }
);



/*
    Music button.
*/

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
                );

        }

        else {

            music.pause();

            updateMusicButton();

        }

    }
);



/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
    new Date(
        "October 7, 2026 17:00:00"
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (
        difference <= 0
    ) {

        document.getElementById(
            "days"
        ).textContent =
            "00";


        document.getElementById(
            "hours"
        ).textContent =
            "00";


        document.getElementById(
            "minutes"
        ).textContent =
            "00";


        document.getElementById(
            "seconds"
        ).textContent =
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



    document.getElementById(
        "days"
    ).textContent =
        String(
            days
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =
        String(
            hours
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(
            minutes
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(
            seconds
        ).padStart(
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
   RSVP
========================================================= */

const rsvpModal =
    document.getElementById(
        "rsvpModal"
    );


function showRSVP() {

    rsvpModal.classList.add(
        "show"
    );

}


function closeRSVP() {

    rsvpModal.classList.remove(
        "show"
    );

}



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



/* =========================================================
   RSVP FORM
========================================================= */

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );


rsvpForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        alert(
            "Thank you! ❤️ We can't wait to see you!"
        );


        rsvpForm.reset();


        closeRSVP();

    }
);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedSections =
    document.querySelectorAll(
        ".story, .details, .location, .countdown-section, .gallery, .rsvp, .footer"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

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
            threshold: 0.15
        }
    );


animatedSections.forEach(
    (section) => {

        sectionObserver.observe(
            section
        );

    }
);