/* =========================================================
   WEDDING INVITATION - COMPLETE SCRIPT
========================================================= */

/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL = "https://zeirvgpdliuxuxzmywsg.supabase.co";

const SUPABASE_KEY = "sb_publishable_KxaPvyYPh-GNjNq6NYpbGw_bGAB7vMc";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* =========================================================
   ELEMENTS
========================================================= */

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const themeTester = document.getElementById("themeTester");

const themeOpen = document.getElementById("themeOpen");

const themeClose = document.getElementById("themeClose");

const themeList = document.getElementById("themeList");

/* =========================================================
   THEMES
========================================================= */

const themes = {
  sage: {
    name: "Sage & Cream",

    colors: ["#FAF7EF", "#F3EEE3", "#858666", "#C99C4D"],

    variables: {
      "--background": "#FAF7EF",
      "--background-secondary": "#F3EEE3",
      "--background-accent": "#EBE3D2",

      "--primary": "#858666",
      "--primary-dark": "#666747",

      "--accent": "#C99C4D",
      "--accent-soft": "#E1C48B",

      "--text": "#38372F",
      "--text-light": "#77736A",

      "--card": "#FFFDF8",
      "--border": "#DDD1BA",

      "--script": "#C47F68",
    },
  },

  rose: {
    name: "Dusty Rose",

    colors: ["#FBF5F3", "#F0DFDB", "#A97879", "#C89D59"],

    variables: {
      "--background": "#FBF5F3",
      "--background-secondary": "#F1E1DE",
      "--background-accent": "#E9D2CD",

      "--primary": "#A97879",
      "--primary-dark": "#794F51",

      "--accent": "#C89D59",
      "--accent-soft": "#E0C28A",

      "--text": "#403638",
      "--text-light": "#7A7072",

      "--card": "#FFFDFC",
      "--border": "#E0CCCA",

      "--script": "#B86F70",
    },
  },

  champagne: {
    name: "Champagne",

    colors: ["#FCF8EE", "#F1E6D1", "#A88B51", "#C49A50"],

    variables: {
      "--background": "#FCF8EE",
      "--background-secondary": "#F1E6D1",
      "--background-accent": "#E6D6B8",

      "--primary": "#A88B51",
      "--primary-dark": "#70572F",

      "--accent": "#C49A50",
      "--accent-soft": "#E0C389",

      "--text": "#40382D",
      "--text-light": "#777064",

      "--card": "#FFFDF8",
      "--border": "#DDD0B6",

      "--script": "#B68B5C",
    },
  },

  dustyBlue: {
    name: "Dusty Blue",

    colors: ["#F5F7F6", "#E3EBEC", "#78949A", "#C8A66A"],

    variables: {
      "--background": "#F5F7F6",
      "--background-secondary": "#E3EBEC",
      "--background-accent": "#D5E1E3",

      "--primary": "#78949A",
      "--primary-dark": "#506E74",

      "--accent": "#C8A66A",
      "--accent-soft": "#DEC58E",

      "--text": "#354145",
      "--text-light": "#6F7C80",

      "--card": "#FFFFFF",
      "--border": "#D0DDDE",

      "--script": "#AE7A70",
    },
  },

  lavender: {
    name: "Lavender",

    colors: ["#F9F6FA", "#EAE2EF", "#947EA2", "#C7A56A"],

    variables: {
      "--background": "#F9F6FA",
      "--background-secondary": "#EAE2EF",
      "--background-accent": "#DED2E7",

      "--primary": "#947EA2",
      "--primary-dark": "#68516F",

      "--accent": "#C7A56A",
      "--accent-soft": "#DFC590",

      "--text": "#403943",
      "--text-light": "#77717C",

      "--card": "#FFFFFF",
      "--border": "#DDD2E3",

      "--script": "#AD7B7C",
    },
  },

  terracotta: {
    name: "Terracotta",

    colors: ["#FBF4EB", "#EDDDCF", "#A9684E", "#C49B5E"],

    variables: {
      "--background": "#FBF4EB",
      "--background-secondary": "#EDDDCF",
      "--background-accent": "#E4C9B3",

      "--primary": "#A9684E",
      "--primary-dark": "#784634",

      "--accent": "#C49B5E",
      "--accent-soft": "#DFC28A",

      "--text": "#483A34",
      "--text-light": "#7B6E67",

      "--card": "#FFFDF9",
      "--border": "#DECABE",

      "--script": "#B66F55",
    },
  },

  dark: {
    name: "Dark & Gold",

    colors: ["#1D1D1A", "#292923", "#C5A55F", "#C47F68"],

    variables: {
      "--background": "#1D1D1A",
      "--background-secondary": "#282820",
      "--background-accent": "#302E25",

      "--primary": "#858666",
      "--primary-dark": "#656542",

      "--accent": "#C5A55F",
      "--accent-soft": "#DFC789",

      "--text": "#F5F1E7",
      "--text-light": "#BDB9AE",

      "--card": "#292923",
      "--border": "#464438",

      "--script": "#D09278",
    },
  },

  olive: {
    name: "Olive & Sand",

    colors: ["#F8F4E9", "#EAE1CE", "#7F805D", "#C49D61"],

    variables: {
      "--background": "#F8F4E9",
      "--background-secondary": "#EAE1CE",
      "--background-accent": "#DDD2B7",

      "--primary": "#7F805D",
      "--primary-dark": "#5B5B40",

      "--accent": "#C49D61",
      "--accent-soft": "#DDC38B",

      "--text": "#414134",
      "--text-light": "#777663",

      "--card": "#FFFDF7",
      "--border": "#DAD1BC",

      "--script": "#AE7A64",
    },
  },
};

/* =========================================================
   CREATE THEME BUTTONS
========================================================= */

function createThemeOptions() {
  if (!themeList) {
    return;
  }

  themeList.innerHTML = "";

  Object.entries(themes).forEach(([key, theme]) => {
    const button = document.createElement("button");

    button.type = "button";

    button.className = "theme-option";

    button.dataset.theme = key;

    const name = document.createElement("span");

    name.className = "theme-name";

    name.textContent = theme.name;

    const colors = document.createElement("div");

    colors.className = "theme-colors";

    theme.colors.forEach(color => {
      const circle = document.createElement("span");

      circle.className = "theme-color";

      circle.style.background = color;

      colors.appendChild(circle);
    });

    button.appendChild(name);

    button.appendChild(colors);

    button.addEventListener("click", () => {
      applyTheme(key);
    });

    themeList.appendChild(button);
  });
}

/* =========================================================
   APPLY THEME
========================================================= */

function applyTheme(themeKey) {
  const theme = themes[themeKey];

  if (!theme) {
    return;
  }

  Object.entries(theme.variables).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });

  document.querySelectorAll(".theme-option").forEach(button => {
    button.classList.remove("active");
  });

  const activeButton = document.querySelector(`[data-theme="${themeKey}"]`);

  if (activeButton) {
    activeButton.classList.add("active");
  }

  localStorage.setItem("wedding-theme", themeKey);
}

/* =========================================================
   INITIALIZE THEMES
========================================================= */

createThemeOptions();

const savedTheme = localStorage.getItem("wedding-theme");

applyTheme(savedTheme && themes[savedTheme] ? savedTheme : "sage");

/* =========================================================
   THEME TESTER
   CLOSED AT START
========================================================= */

if (themeTester && themeOpen) {
  themeTester.classList.add("hidden");

  themeOpen.classList.add("visible");
}

/* =========================================================
   OPEN THEME TESTER
========================================================= */

if (themeOpen && themeTester) {
  themeOpen.addEventListener("click", () => {
    themeTester.classList.remove("hidden");

    themeOpen.classList.remove("visible");
  });
}

/* =========================================================
   CLOSE THEME TESTER
========================================================= */

if (themeClose && themeTester && themeOpen) {
  themeClose.addEventListener("click", () => {
    themeTester.classList.add("hidden");

    themeOpen.classList.add("visible");
  });
}

/* =========================================================
   MUSIC
========================================================= */

function updateMusicButton() {
  if (!music || !musicButton) {
    return;
  }

  musicButton.textContent = music.paused ? "🔇" : "🔊";
}

/* =========================================================
   MUSIC AUTOPLAY
========================================================= */

window.addEventListener("load", () => {
  if (!music) {
    return;
  }

  music.play().then(updateMusicButton).catch(updateMusicButton);
});

/* =========================================================
   START MUSIC AFTER USER INTERACTION
========================================================= */

document.addEventListener(
  "click",
  () => {
    if (!music) {
      return;
    }

    if (music.paused) {
      music
        .play()
        .then(updateMusicButton)
        .catch(() => {});
    }
  },
  {
    once: true,
  },
);

/* =========================================================
   MUSIC BUTTON
========================================================= */

if (musicButton && music) {
  musicButton.addEventListener("click", event => {
    event.stopPropagation();

    if (music.paused) {
      music
        .play()
        .then(updateMusicButton)
        .catch(() => {});
    } else {
      music.pause();

      updateMusicButton();
    }
  });
}

/* =========================================================
   COUNTDOWN
   7 OCTOBER 2026 - 7:00 PM
========================================================= */

const weddingDate = new Date("October 7, 2026 19:00:00").getTime();

function updateCountdown() {
  const daysElement = document.getElementById("days");

  const hoursElement = document.getElementById("hours");

  const minutesElement = document.getElementById("minutes");

  const secondsElement = document.getElementById("seconds");

  if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  const now = new Date().getTime();

  const difference = weddingDate - now;

  if (difference <= 0) {
    daysElement.textContent = "00";

    hoursElement.textContent = "00";

    minutesElement.textContent = "00";

    secondsElement.textContent = "00";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = String(days).padStart(2, "0");

  hoursElement.textContent = String(hours).padStart(2, "0");

  minutesElement.textContent = String(minutes).padStart(2, "0");

  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* =========================================================
   RSVP
========================================================= */

const rsvpModal = document.getElementById("rsvpModal");

const rsvpForm = document.getElementById("rsvpForm");

const guestMessages = document.getElementById("guestMessages");

/* =========================================================
   OPEN RSVP
========================================================= */

function showRSVP() {
  if (!rsvpModal) {
    return;
  }

  rsvpModal.classList.add("show");
}

/* =========================================================
   CLOSE RSVP
========================================================= */

function closeRSVP() {
  if (!rsvpModal) {
    return;
  }

  rsvpModal.classList.remove("show");
}

/* =========================================================
   CLOSE RSVP OUTSIDE
========================================================= */

if (rsvpModal) {
  rsvpModal.addEventListener("click", event => {
    if (event.target === rsvpModal) {
      closeRSVP();
    }
  });
}

/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text || "";

  return div.innerHTML;
}

/* =========================================================
   CREATE INVITATION BOOK CARD
========================================================= */

function createGuestMessage(message) {
  if (!guestMessages) {
    return;
  }

  const page = document.createElement("div");

  page.className = "guest-page";

  const date = message.created_at
    ? new Date(message.created_at).toLocaleDateString("en-GB")
    : "";

  page.innerHTML = `

        <div class="page-decoration">
            ✦
        </div>


        <p class="page-greeting">
            Dear Mohamed & Sara,
        </p>


        <p class="page-message">
            ${escapeHTML(message.message)}
        </p>


        <div class="page-divider">

            <span></span>

            ♡

            <span></span>

        </div>


        <p class="page-name">
            — ${escapeHTML(message.name)}
        </p>


        <p class="page-date">
            ${escapeHTML(date)}
        </p>

    `;

  guestMessages.appendChild(page);
}

/* =========================================================
   LOAD MESSAGES FROM SUPABASE
========================================================= */

async function loadGuestMessages() {
  if (!guestMessages) {
    return;
  }

  guestMessages.innerHTML = `

        <div class="empty-book">

            <div class="empty-book-icon">
                ♡
            </div>

            <h3>
                Loading our invitation book...
            </h3>

        </div>

    `;

  const { data, error } = await supabaseClient

    .from("wedding_messages")

    .select("id, name, attendance, guests, message, created_at")

    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Error loading messages:", error);

    guestMessages.innerHTML = `

            <div class="empty-book">

                <div class="empty-book-icon">
                    ♡
                </div>

                <h3>
                    Our Invitation Book
                </h3>

                <p>
                    We couldn't load the messages right now.
                </p>

            </div>

        `;

    return;
  }

  guestMessages.innerHTML = "";

  if (!data || data.length === 0) {
    guestMessages.innerHTML = `

            <div class="empty-book">

                <div class="empty-book-icon">
                    ♡
                </div>

                <h3>
                    The book is waiting for you
                </h3>

                <p>
                    Be the first to leave a message.
                </p>

            </div>

        `;

    return;
  }

  data.forEach(message => {
    createGuestMessage(message);
  });
}

/* =========================================================
   RSVP FORM SUBMISSION
========================================================= */

if (rsvpForm) {
  rsvpForm.addEventListener("submit", async event => {
    event.preventDefault();

    /* =========================================
               GET INPUTS
            ========================================== */

    const inputs = rsvpForm.querySelectorAll("input");

    /*
               First input = name
            */

    const name = inputs[0] ? inputs[0].value.trim() : "";

    /*
               Second input = guests
            */

    const guests = inputs[1] ? inputs[1].value.trim() : "";

    /*
               Select = attendance
            */

    const attendanceInput = rsvpForm.querySelector("select");

    /*
               Textarea = message
            */

    const messageInput = rsvpForm.querySelector("textarea");

    const attendance = attendanceInput ? attendanceInput.value : "";

    const message = messageInput ? messageInput.value.trim() : "";

    /* =========================================
               VALIDATION
            ========================================== */

    if (!name || !attendance || !guests || !message) {
      alert("Please fill in all fields ❤️");

      return;
    }

    /* =========================================
               VALIDATE GUEST NUMBER
            ========================================== */

    const guestNumber = Number(guests);

    if (!Number.isInteger(guestNumber) || guestNumber < 1 || guestNumber > 20) {
      alert("Please enter a valid number of guests.");

      return;
    }

    /* =========================================
               SUBMIT BUTTON
            ========================================== */

    const submitButton = rsvpForm.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.disabled = true;

      submitButton.textContent = "SENDING...";
    }

    /* =========================================
               INSERT INTO SUPABASE
            ========================================== */

    const { error } = await supabaseClient

      .from("wedding_messages")

      .insert({
        name: name,

        attendance: attendance,

        guests: guestNumber,

        message: message,
      });

    /* =========================================
               DATABASE ERROR
            ========================================== */

    if (error) {
      console.error("Supabase RSVP error:", error);

      alert("Sorry, we couldn't save your RSVP. Please try again. ❤️");

      if (submitButton) {
        submitButton.disabled = false;

        submitButton.textContent = "SEND RSVP";
      }

      return;
    }

    /* =========================================
               SUCCESS
            ========================================== */

    alert("Thank you! Your message has been added to our invitation book. ❤️");

    /* =========================================
               CLOSE MODAL
            ========================================== */

    closeRSVP();

    /* =========================================
               RESET FORM
            ========================================== */

    rsvpForm.reset();

    /* =========================================
               ENABLE BUTTON
            ========================================== */

    if (submitButton) {
      submitButton.disabled = false;

      submitButton.textContent = "SEND RSVP";
    }

    /* =========================================
               RELOAD BOOK FROM DATABASE
            ========================================== */

    await loadGuestMessages();

    /* =========================================
               SCROLL TO INVITATION BOOK
            ========================================== */

    const guestBook = document.getElementById("guestBook");

    if (guestBook) {
      setTimeout(() => {
        guestBook.scrollIntoView({
          behavior: "smooth",

          block: "start",
        });
      }, 300);
    }
  });
}

/* =========================================================
   LOAD INVITATION BOOK
========================================================= */

loadGuestMessages();

/* =========================================================
   SCROLL REVEAL
========================================================= */

const animatedSections = document.querySelectorAll(
  ".story, " +
    ".details, " +
    ".location, " +
    ".countdown-section, " +
    ".gallery, " +
    ".rsvp, " +
    ".guest-book, " +
    ".footer",
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },

    {
      threshold: 0.15,
    },
  );

  animatedSections.forEach(section => {
    sectionObserver.observe(section);
  });
} else {
  animatedSections.forEach(section => {
    section.classList.add("show");
  });
}

/* =========================================================
   MAKE HTML ONCLICK FUNCTIONS GLOBAL
========================================================= */

window.showRSVP = showRSVP;
window.closeRSVP = closeRSVP;
