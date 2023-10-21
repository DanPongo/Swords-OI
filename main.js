document.addEventListener("DOMContentLoaded", function () {
    fetch("data/urls.json")
        .then((response) => response.json())
        .then((data) => {
            loadImages(data["page1"].concat(data["page2"]));
        })
        .catch((error) => console.log(error));

    function loadImages(images) {
        const container = document.querySelector(".image-container");
        container.innerHTML = "";  // Clear previous images
        images.forEach((item) => {
            const div = document.createElement("div");
            div.className = "image-box";

            const img = document.createElement("img");
            img.src = `images/${item.image}`;
            img.alt = item.description || ""; // Added alt attribute for accessibility
            img.onclick = function () {
                window.location.href = item.url;
            };

            const text = document.createElement("p");
            text.className = "image-text";
            text.textContent = item.text;

            div.appendChild(img);
            div.appendChild(text);
            container.appendChild(div);
        });
    }

    document.getElementById('homeLink').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default behavior of link
        document.querySelector('.info-section').style.display = 'block';  // Show images
        document.getElementById('about').style.display = 'none';  // Hide About text
        document.getElementById('contact').style.display = 'none';  // Hide Contact text
    });

    document.getElementById('aboutLink').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default behavior of link
        document.querySelector('.info-section').style.display = 'none';  // Hide images
        document.getElementById('about').style.display = 'block';  // Show About text
        document.getElementById('contact').style.display = 'none';  // Hide Contact text
    });

    document.getElementById('contactLink').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default behavior of link
        document.querySelector('.info-section').style.display = 'none';  // Hide images
        document.getElementById('about').style.display = 'none';  // Hide About text
        document.getElementById('contact').style.display = 'block';  // Show Contact text
    });

    document.getElementById("englishButton").addEventListener("click", function() {
        changeLanguage("en");
    });

    document.getElementById("hebrewButton").addEventListener("click", function() {
        changeLanguage("he");
    });

    function changeLanguage(language) {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "he" ? "rtl" : "ltr";

        if (language === "en") {
            document.getElementById("homeLink").textContent = "Home";
            document.getElementById("aboutLink").textContent = "About";
            document.getElementById("contactLink").textContent = "Contacts";
            document.querySelectorAll("[data-i18n]").forEach(element => {
                element.textContent = i18n.en[element.dataset.i18n];
            });
        } else if (language === "he") {
            document.getElementById("homeLink").textContent = "בית";
            document.getElementById("aboutLink").textContent = "אודות";
            document.getElementById("contactLink").textContent = "מוקדי חירום";
            document.querySelectorAll("[data-i18n]").forEach(element => {
                element.textContent = i18n.he[element.dataset.i18n];
            });
        }
    }

    function updateClock() {
        const clockDiv = document.getElementById('clock');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        clockDiv.innerHTML = `${hours}:${minutes}:${seconds} &nbsp;&nbsp; ${day}/${month}/${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});

const i18n = {
    en: {
        headline: "Vital Links",
        smallHeader: "Iron Swords",
        firstParagraph: "We have gathered all the information you need on protection, government reports, and contributions to the war effort and Israeli advocacy. Donate to secure associations and report fake news to government bodies. Click on the image and go to the desired site.",
        about: "About",
        aboutContent: "Created as a public service by Daniel Hotmacher. You are welcome to send additional links you would like me to add to the site to daniel.h12377@gmail.com",
        emergencyContacts: "Emergency Phones",
        emergencyNumbers: "Emergency numbers",
        police: "Israel Police",
        policeDescription: "Report fallen and security-related events...",
        mda: "MDA",
        mdaDescription: "Report injured and receive first aid.",
        firefighters: "Firefighters and Rescue",
        firefightersDescription: "Report fires and emergency events...",
        municipality: "Municipality",
        municipalityDescription: "Service to residents.",
        socialServices: "Social Services",
        socialServicesDescription: "Receive information and assistance on social issues.",
        emotionalSupport: "Emotional Support Center",
        emotionalSupportDescription: "",
    },
    he: {
        headline: "קישורים חיונים",
        smallHeader: "חרבות ברזל",
        firstParagraph: "ריכזנו לכם את כל המידע שאתם צריכים בנושא מוגנות, דיווחים ממשלתיים ותרומה למאמץ המלחמתי וההסברה הישראלית. תרמו לעמותות מאובטחות ודווחו על פייק ניוז לגורמים הממשלתיים. לחצו על התמונה ומיעברו לאתר המבוקש.",
        about: "אודות",
        aboutContent: "נוצר כשירות לציבור על ידי דניאל הוטמכר. מוזמנים לשלוח לינקים נוספים שתרצו שאוסיף לאתר לdaniel.h12377@gmail.com",
        emergencyContacts: "טלפונים חיוניים",
        emergencyNumbers: "מוקדי חירום",
        police: "משטרת ישראל",
        policeDescription: "דיווח על נפלים ואירועים הקשורים לביטחון פנים.",
        mda: "מד\"א",
        mdaDescription: "דיווח על נפגעים וקבלת עזרה ראשונה.",
        firefighters: "כבאות והצלה",
        firefightersDescription: "דיווח על שריפות ואירועי חירום.",
        municipality: "עירייה",
        municipalityDescription: "שירות לתושב.",
        socialServices: "שירותים חברתיים",
        socialServicesDescription: "קבלת מידע ועזרה בנושאים החברתיים.",
        emotionalSupport: "מרכז תמיכה נפשית",
        emotionalSupportDescription: ".",
    }
};


