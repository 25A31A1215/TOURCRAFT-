/* =========================================================
   TOURCRAFT JAVASCRIPT
   No demo login credentials required.
   User can create/login with their own email + password.
========================================================= */

"use strict";


/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = [

    {
        id: "goa",
        name: "Goa",
        state: "Goa",
        region: "west",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
        description: "Sunny beaches, relaxed evenings, water sports and coastal food.",
        tags: ["beach", "food", "adventure"],
        price: "₹12k+"
    },

    {
        id: "manali",
        name: "Manali",
        state: "Himachal Pradesh",
        region: "north",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
        description: "Mountain views, rivers, snow adventures and peaceful valleys.",
        tags: ["mountains", "nature", "adventure"],
        price: "₹15k+"
    },

    {
        id: "rishikesh",
        name: "Rishikesh",
        state: "Uttarakhand",
        region: "north",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1000&q=80",
        description: "Yoga, river adventures, temples and beautiful Himalayan scenery.",
        tags: ["adventure", "nature", "culture"],
        price: "₹8k+"
    },

    {
        id: "jaipur",
        name: "Jaipur",
        state: "Rajasthan",
        region: "north",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
        description: "Royal palaces, forts, colourful markets and delicious Rajasthani food.",
        tags: ["culture", "food", "shopping"],
        price: "₹9k+"
    },

    {
        id: "munnar",
        name: "Munnar",
        state: "Kerala",
        region: "south",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
        description: "Tea gardens, misty mountains, waterfalls and peaceful nature.",
        tags: ["nature", "mountains", "food"],
        price: "₹11k+"
    },

    {
        id: "ooty",
        name: "Ooty",
        state: "Tamil Nadu",
        region: "south",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1000&q=80",
        description: "Cool weather, tea estates, lakes and beautiful Nilgiri landscapes.",
        tags: ["nature", "mountains", "food"],
        price: "₹8k+"
    },

    {
        id: "pondicherry",
        name: "Pondicherry",
        state: "Puducherry",
        region: "south",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1602421135750-8d7d2e2e1f7a?auto=format&fit=crop&w=1000&q=80",
        description: "French-style streets, cafés, beaches and relaxed coastal vibes.",
        tags: ["beach", "food", "culture"],
        price: "₹8k+"
    },

    {
        id: "hyderabad",
        name: "Hyderabad",
        state: "Telangana",
        region: "south",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1000&q=80",
        description: "Historic monuments, biryani, modern city life and local markets.",
        tags: ["food", "culture", "shopping"],
        price: "₹6k+"
    },

    {
        id: "kochi",
        name: "Kochi",
        state: "Kerala",
        region: "south",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1600688090823-72ce7c2e8d2b?auto=format&fit=crop&w=1000&q=80",
        description: "Backwaters, heritage streets, seafood and coastal Kerala culture.",
        tags: ["nature", "food", "culture"],
        price: "₹10k+"
    },

    {
        id: "coorg",
        name: "Coorg",
        state: "Karnataka",
        region: "south",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80",
        description: "Coffee plantations, waterfalls, forests and peaceful hill views.",
        tags: ["nature", "mountains", "food"],
        price: "₹10k+"
    },

    {
        id: "vizag",
        name: "Visakhapatnam",
        state: "Andhra Pradesh",
        region: "south",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc6c6a?auto=format&fit=crop&w=1000&q=80",
        description: "Beautiful beaches, hills, viewpoints and coastal Andhra food.",
        tags: ["beach", "nature", "food"],
        price: "₹6k+"
    },

    {
        id: "darjeeling",
        name: "Darjeeling",
        state: "West Bengal",
        region: "east",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1544634076-a90160ddf6b5?auto=format&fit=crop&w=1000&q=80",
        description: "Tea gardens, mountain views, toy train rides and peaceful mornings.",
        tags: ["mountains", "nature", "food"],
        price: "₹12k+"
    },

    {
        id: "varanasi",
        name: "Varanasi",
        state: "Uttar Pradesh",
        region: "north",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1000&q=80",
        description: "Ancient ghats, spiritual experiences, temples and local cuisine.",
        tags: ["culture", "food", "nature"],
        price: "₹7k+"
    },

    {
        id: "udaipur",
        name: "Udaipur",
        state: "Rajasthan",
        region: "north",
        budget: "premium",
        image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
        description: "Lakes, palaces, heritage hotels and romantic Rajasthan views.",
        tags: ["culture", "nature", "food"],
        price: "₹16k+"
    },

    {
        id: "alleppey",
        name: "Alappuzha",
        state: "Kerala",
        region: "south",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1602301749946-7f2c3aab4a76?auto=format&fit=crop&w=1000&q=80",
        description: "Kerala backwaters, houseboats, coconut palms and local cuisine.",
        tags: ["nature", "food", "culture"],
        price: "₹11k+"
    },

    {
        id: "agra",
        name: "Agra",
        state: "Uttar Pradesh",
        region: "north",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
        description: "The Taj Mahal, Mughal history, forts and famous local sweets.",
        tags: ["culture", "food", "shopping"],
        price: "₹6k+"
    },

    {
        id: "mumbai",
        name: "Mumbai",
        state: "Maharashtra",
        region: "west",
        budget: "premium",
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1000&q=80",
        description: "Marine Drive, street food, markets, nightlife and city culture.",
        tags: ["food", "culture", "shopping"],
        price: "₹14k+"
    },

    {
        id: "lonavala",
        name: "Lonavala",
        state: "Maharashtra",
        region: "west",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1623858890575-1a4c7f1f1d2f?auto=format&fit=crop&w=1000&q=80",
        description: "Green hills, waterfalls, viewpoints and relaxing weekend escapes.",
        tags: ["nature", "mountains", "adventure"],
        price: "₹7k+"
    },

    {
        id: "khajuraho",
        name: "Khajuraho",
        state: "Madhya Pradesh",
        region: "central",
        budget: "budget",
        image: "https://images.unsplash.com/photo-1600100397608-f010c5e5e0aa?auto=format&fit=crop&w=1000&q=80",
        description: "Historic temples, architecture and fascinating Indian heritage.",
        tags: ["culture", "history", "nature"],
        price: "₹7k+"
    },

    {
        id: "pune",
        name: "Pune",
        state: "Maharashtra",
        region: "west",
        budget: "medium",
        image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
        description: "Food, forts, cafés, culture and nearby weekend getaways.",
        tags: ["food", "culture", "shopping"],
        price: "₹8k+"
    }

];


/* =========================================================
   STATE
========================================================= */

const state = {

    currentPage: "home",

    previousPage: null,

    history: [],

    activeTripId: null,

    currentStopIndex: 0,

    selectedInterest: "all",

    user: null

};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   STORAGE
========================================================= */

function getStoredUser() {

    try {
        const user = localStorage.getItem("tourcraftUser");

        return user ? JSON.parse(user) : null;

    } catch (error) {

        console.error("User storage error:", error);

        return null;
    }
}


function saveUser(user) {

    localStorage.setItem(
        "tourcraftUser",
        JSON.stringify(user)
    );

    state.user = user;
}


function getTrips() {

    try {

        return JSON.parse(
            localStorage.getItem("tourcraftTrips") || "[]"
        );

    } catch (error) {

        console.error("Trip storage error:", error);

        return [];
    }
}


function saveTrips(trips) {

    localStorage.setItem(
        "tourcraftTrips",
        JSON.stringify(trips)
    );
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;

function showToast(message) {

    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);
}


/* =========================================================
   MODAL
========================================================= */

function openModal(html) {

    $("#modalContent").innerHTML = html;

    $("#modalOverlay").classList.remove("hidden");
}


function closeModal() {

    $("#modalOverlay").classList.add("hidden");

    $("#modalContent").innerHTML = "";
}


/* =========================================================
   LOGIN
========================================================= */

function showLogin() {

    $("#loginScreen").classList.remove("hidden");

    $("#app").classList.add("hidden");
}


function showApp() {

    $("#loginScreen").classList.add("hidden");

    $("#app").classList.remove("hidden");

    state.user = getStoredUser();

    updateUserUI();

    renderHome();

    renderExplore();

    populateDestinationSelects();

    renderTrips();

    loadProfileForm();

    navigateTo("home", false);
}


/* =========================================================
   LOGIN FORM
========================================================= */

$("#loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = $("#loginEmail").value.trim();

    const password = $("#loginPassword").value;

    if (!email || !password) {

        showToast("Please enter email and password.");

        return;
    }

    if (password.length < 6) {

        showToast("Password must contain at least 6 characters.");

        return;
    }


    /*
       NO DEMO LOGIN.
       User can use their own email and password.
    */

    const existingUser = getStoredUser();

    let user;

    if (
        existingUser &&
        existingUser.email.toLowerCase() === email.toLowerCase()
    ) {

        user = {
            ...existingUser,
            email: email
        };

    } else {

        user = {

            name: email
                .split("@")[0]
                .replace(/[._-]/g, " ")
                .replace(/\b\w/g, letter =>
                    letter.toUpperCase()
                ),

            email: email,

            phone: "",

            region: "India",

            currency: "INR",

            language: "English",

            interests: [
                "nature",
                "food"
            ]

        };
    }


    saveUser(user);

    showToast("Login successful!");

    setTimeout(showApp, 350);

});


/* =========================================================
   CREATE ACCOUNT
========================================================= */

$("#createAccountBtn").addEventListener(
    "click",
    function () {

        openModal(`

            <h2>Create your TourCraft account</h2>

            <p>
                Enter your own details. There is no fixed demo
                email or demo password.
            </p>

            <div class="field">
                <label for="signupName">Full name</label>

                <input
                    id="signupName"
                    type="text"
                    placeholder="Your full name"
                    required
                >
            </div>

            <div class="field">
                <label for="signupEmail">Email</label>

                <input
                    id="signupEmail"
                    type="email"
                    placeholder="you@example.com"
                    required
                >
            </div>

            <div class="field">
                <label for="signupPassword">Password</label>

                <input
                    id="signupPassword"
                    type="password"
                    minlength="6"
                    placeholder="Create your password"
                    required
                >
            </div>

            <div class="modal-actions">

                <button
                    class="primary-btn"
                    id="signupSubmitBtn"
                >
                    Create Account
                </button>

                <button
                    class="secondary-btn"
                    id="signupCancelBtn"
                >
                    Cancel
                </button>

            </div>
        `);


        $("#signupSubmitBtn").addEventListener(
            "click",
            function () {

                const name =
                    $("#signupName").value.trim();

                const email =
                    $("#signupEmail").value.trim();

                const password =
                    $("#signupPassword").value;


                if (!name || !email || !password) {

                    showToast("Please complete all fields.");

                    return;
                }


                if (password.length < 6) {

                    showToast(
                        "Password must contain at least 6 characters."
                    );

                    return;
                }


                const user = {

                    name,

                    email,

                    phone: "",

                    region: "India",

                    currency: "INR",

                    language: "English",

                    interests: [
                        "nature",
                        "food"
                    ]

                };


                saveUser(user);

                closeModal();

                showToast("Account created successfully!");

                setTimeout(showApp, 300);

            }
        );


        $("#signupCancelBtn").addEventListener(
            "click",
            closeModal
        );

    }
);


/* =========================================================
   FORGOT PASSWORD
========================================================= */

$("#forgotPasswordBtn").addEventListener(
    "click",
    function () {

        openModal(`

            <h2>Reset your password</h2>

            <p>
                Enter your email address and we'll show a
                confirmation message for this demo application.
            </p>

            <div class="field">
                <label for="resetEmail">
                    Email address
                </label>

                <input
                    id="resetEmail"
                    type="email"
                    placeholder="you@example.com"
                >
            </div>

            <div class="modal-actions">

                <button
                    class="primary-btn"
                    id="sendResetBtn"
                >
                    Send Reset Request
                </button>

            </div>

        `);


        $("#sendResetBtn").addEventListener(
            "click",
            function () {

                const email =
                    $("#resetEmail").value.trim();

                if (!email) {

                    showToast("Please enter your email.");

                    return;
                }

                closeModal();

                showToast(
                    "Password reset request submitted."
                );

            }
        );

    }
);


/* =========================================================
   PASSWORD TOGGLE
========================================================= */

$$(".password-toggle").forEach(button => {

    button.addEventListener("click", function () {

        const input =
            document.getElementById(
                button.dataset.target
            );

        if (!input) return;

        if (input.type === "password") {

            input.type = "text";

            button.textContent = "🙈";

        } else {

            input.type = "password";

            button.textContent = "👁";

        }

    });

});


/* =========================================================
   USER UI
========================================================= */

function updateUserUI() {

    const user =
        state.user || getStoredUser();

    if (!user) return;


    const firstLetter =
        (user.name || "Traveler")
            .trim()
            .charAt(0)
            .toUpperCase();


    $("#headerAvatar").textContent =
        firstLetter;

    $("#headerUserName").textContent =
        user.name || "Traveler";

    $("#homeUserName").textContent =
        user.name || "Traveler";

    $("#profileAvatar").textContent =
        firstLetter;

    $("#profileDisplayName").textContent =
        user.name || "Traveler";

    $("#profileDisplayEmail").textContent =
        user.email || "";

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigateTo(page, addHistory = true) {

    const validPages = [
        "home",
        "explore",
        "inspire",
        "plan",
        "trips",
        "active-trip",
        "bookings",
        "profile",
        "emergency"
    ];


    if (!validPages.includes(page)) {

        page = "home";
    }


    if (
        addHistory &&
        state.currentPage !== page
    ) {

        state.history.push(
            state.currentPage
        );

        state.previousPage =
            state.currentPage;
    }


    state.currentPage = page;


    $$(".page").forEach(section => {

        section.classList.remove(
            "active-page"
        );

    });


    const target =
        document.querySelector(
            `[data-page-section="${page}"]`
        );


    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    updateNavigation(page);

    updateBackButtons();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (page === "home") {

        renderHome();

    }

    if (page === "explore") {

        renderExplore();

    }

    if (page === "trips") {

        renderTrips();

    }

    if (page === "profile") {

        loadProfileForm();

    }

}


/* =========================================================
   BACK
========================================================= */

function goBack() {

    if (state.history.length > 0) {

        const previous =
            state.history.pop();

        state.currentPage =
            previous;

        navigateTo(
            previous,
            false
        );

        return;
    }


    if (state.currentPage !== "home") {

        navigateTo(
            "home",
            false
        );

        return;
    }

    showToast("You are already on the home page.");

}


/* =========================================================
   BACK BUTTONS
========================================================= */

function updateBackButtons() {

    const mobileBack =
        $("#mobileBackBtn");

    if (
        state.currentPage === "home"
    ) {

        mobileBack.classList.add(
            "hidden"
        );

    } else {

        mobileBack.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   NAV HIGHLIGHT
========================================================= */

function updateNavigation(page) {

    $$(".nav-link").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    $$(".bottom-nav-item").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });

}


/* =========================================================
   UNIVERSAL PAGE BUTTONS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const pageButton =
            event.target.closest(
                "[data-page]"
            );


        if (pageButton) {

            const page =
                pageButton.dataset.page;

            navigateTo(page);

            return;
        }


        const backButton =
            event.target.closest(
                "[data-back]"
            );


        if (backButton) {

            goBack();

            return;
        }

    }
);


/* Mobile back */

$("#mobileBackBtn").addEventListener(
    "click",
    goBack
);


/* =========================================================
   HOME
========================================================= */

function destinationCardHTML(destination) {

    const tags =
        destination.tags
            .slice(0, 3)
            .map(tag =>
                `<span>${formatTag(tag)}</span>`
            )
            .join("");


    return `

        <article
            class="destination-card"
            data-destination-id="${destination.id}"
        >

            <div class="destination-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    loading="lazy"
                >

                <button
                    class="destination-favourite"
                    data-favourite="${destination.id}"
                    aria-label="Save destination"
                >
                    ♡
                </button>

                <span class="destination-badge">
                    ${destination.budget.toUpperCase()}
                </span>

            </div>


            <div class="destination-body">

                <h3>
                    ${destination.name}
                </h3>

                <div class="destination-location">
                    📍 ${destination.state}
                </div>

                <p class="destination-description">
                    ${destination.description}
                </p>

                <div class="destination-tags">
                    ${tags}
                </div>


                <div class="destination-footer">

                    <span class="destination-price">
                        From ${destination.price}
                    </span>

                    <button
                        class="destination-view-btn"
                        data-destination="${destination.id}"
                    >
                        View
                    </button>

                </div>

            </div>

        </article>
    `;
}


function formatTag(tag) {

    const map = {

        beach: "🏖 Beach",

        mountains: "🏔 Mountains",

        culture: "🏛 Culture",

        nature: "🌿 Nature",

        food: "🍛 Food",

        adventure: "🧗 Adventure",

        shopping: "🛍 Shopping",

        history: "📜 History"

    };

    return map[tag] || tag;
}


function renderHome() {

    const popularIds = [
        "goa",
        "manali",
        "munnar",
        "jaipur"
    ];


    const popular =
        popularIds
            .map(id =>
                destinations.find(
                    d => d.id === id
                )
            )
            .filter(Boolean);


    $("#homePopularGrid").innerHTML =
        popular
            .map(destinationCardHTML)
            .join("");


    const user =
        state.user || getStoredUser();


    let recommendations =
        destinations
            .filter(destination => {

                if (!user?.interests?.length) {

                    return true;
                }

                return destination.tags.some(
                    tag =>
                        user.interests.includes(tag)
                );

            })
            .slice(0, 4);


    if (recommendations.length < 4) {

        recommendations =
            destinations.slice(0, 4);
    }


    $("#recommendationGrid").innerHTML =
        recommendations
            .map(destinationCardHTML)
            .join("");

}


/* =========================================================
   DESTINATION CLICK HANDLERS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const destinationButton =
            event.target.closest(
                "[data-destination]"
            );


        if (
            destinationButton &&
            !event.target.closest(
                "[data-favourite]"
            )
        ) {

            const id =
                destinationButton.dataset.destination;

            openDestination(id);

            return;
        }


        const favourite =
            event.target.closest(
                "[data-favourite]"
            );


        if (favourite) {

            const id =
                favourite.dataset.favourite;

            toggleFavourite(
                id,
                favourite
            );

        }

    }
);


/* =========================================================
   DESTINATION DETAILS
========================================================= */

function openDestination(id) {

    const destination =
        destinations.find(
            item => item.id === id
        );


    if (!destination) return;


    openModal(`

        <img
            src="${destination.image}"
            alt="${destination.name}"
            style="
                width:100%;
                height:220px;
                object-fit:cover;
                border-radius:16px;
                margin-bottom:20px;
            "
        >

        <span class="eyebrow">
            ${destination.state.toUpperCase()}
        </span>

        <h2>
            ${destination.name}
        </h2>

        <p>
            ${destination.description}
        </p>

        <p style="margin-top:10px;">
            <strong>Typical budget:</strong>
            ${destination.price}
        </p>

        <div class="destination-tags" style="margin-top:15px;">
            ${destination.tags
                .map(tag =>
                    `<span>${formatTag(tag)}</span>`
                )
                .join("")}
        </div>

        <div class="modal-actions">

            <button
                class="primary-btn"
                id="planDestinationBtn"
            >
                Plan this trip
            </button>

            <button
                class="secondary-btn"
                id="exploreDestinationBtn"
            >
                Explore more
            </button>

        </div>
    `);


    $("#planDestinationBtn").addEventListener(
        "click",
        function () {

            closeModal();

            $("#planDestination").value =
                destination.id;

            navigateTo("plan");

        }
    );


    $("#exploreDestinationBtn").addEventListener(
        "click",
        function () {

            closeModal();

            $("#destinationSearch").value =
                destination.name;

            state.selectedInterest =
                "all";

            $$(".interest-chip").forEach(
                chip =>
                    chip.classList.toggle(
                        "active",
                        chip.dataset.interest === "all"
                    )
            );

            navigateTo("explore");

            renderExplore();

        }
    );

}


/* =========================================================
   FAVOURITES
========================================================= */

function getFavourites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "tourcraftFavourites"
            ) || "[]"
        );

    } catch {

        return [];
    }
}


function toggleFavourite(id, button) {

    let favourites =
        getFavourites();


    if (favourites.includes(id)) {

        favourites =
            favourites.filter(
                item => item !== id
            );

        button.textContent = "♡";

        showToast(
            "Removed from favourites."
        );

    } else {

        favourites.push(id);

        button.textContent = "♥";

        showToast(
            "Destination saved."
        );

    }


    localStorage.setItem(
        "tourcraftFavourites",
        JSON.stringify(favourites)
    );

}


/* =========================================================
   EXPLORE
========================================================= */

function renderExplore() {

    const search =
        $("#destinationSearch")
            .value
            .trim()
            .toLowerCase();


    const region =
        $("#regionFilter").value;


    const budget =
        $("#budgetFilter").value;


    const interest =
        state.selectedInterest;


    const filtered =
        destinations.filter(destination => {

            const matchesSearch =
                !search ||
                destination.name
                    .toLowerCase()
                    .includes(search) ||
                destination.state
                    .toLowerCase()
                    .includes(search) ||
                destination.description
                    .toLowerCase()
                    .includes(search);


            const matchesRegion =
                region === "all" ||
                destination.region === region;


            const matchesBudget =
                budget === "all" ||
                destination.budget === budget;


            const matchesInterest =
                interest === "all" ||
                destination.tags.includes(
                    interest
                );


            return (
                matchesSearch &&
                matchesRegion &&
                matchesBudget &&
                matchesInterest
            );

        });


    $("#exploreGrid").innerHTML =
        filtered
            .map(destinationCardHTML)
            .join("");


    $("#noResults").classList.toggle(
        "hidden",
        filtered.length > 0
    );

}


/* Search */

$("#destinationSearch").addEventListener(
    "input",
    renderExplore
);

$("#regionFilter").addEventListener(
    "change",
    renderExplore
);

$("#budgetFilter").addEventListener(
    "change",
    renderExplore
);


/* Interests */

$$(".interest-chip").forEach(chip => {

    chip.addEventListener(
        "click",
        function () {

            state.selectedInterest =
                chip.dataset.interest;


            $$(".interest-chip").forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            chip.classList.add("active");

            renderExplore();

        }
    );

});


/* Clear */

$("#clearFiltersBtn").addEventListener(
    "click",
    function () {

        $("#destinationSearch").value = "";

        $("#regionFilter").value = "all";

        $("#budgetFilter").value = "all";

        state.selectedInterest = "all";


        $$(".interest-chip").forEach(
            chip =>
                chip.classList.toggle(
                    "active",
                    chip.dataset.interest === "all"
                )
        );


        renderExplore();

    }
);


/* =========================================================
   INSPIRE
========================================================= */

$("#inspireMeBtn").addEventListener(
    "click",
    function () {

        $("#inspireFormArea")
            .classList.remove("hidden");

        $("#knowWhereArea")
            .classList.add("hidden");

        $("#inspireFormArea")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }
);


$("#knowWhereBtn").addEventListener(
    "click",
    function () {

        $("#knowWhereArea")
            .classList.remove("hidden");

        $("#inspireFormArea")
            .classList.add("hidden");

        $("#knowWhereArea")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }
);


$("#closeInspireForm").addEventListener(
    "click",
    function () {

        $("#inspireFormArea")
            .classList.add("hidden");

        $("#inspirationResult")
            .classList.add("hidden");

    }
);


$("#closeKnowWhere").addEventListener(
    "click",
    function () {

        $("#knowWhereArea")
            .classList.add("hidden");

    }
);


/* =========================================================
   POPULATE SELECTS
========================================================= */

function populateDestinationSelects() {

    const options =
        destinations
            .map(destination => `

                <option value="${destination.id}">
                    ${destination.name}, ${destination.state}
                </option>

            `)
            .join("");


    $("#knownDestination").innerHTML =
        options;

    $("#planDestination").innerHTML =
        options;

}


/* =========================================================
   INSPIRE GENERATOR
========================================================= */

$("#generateInspirationBtn").addEventListener(
    "click",
    function () {

        const mood =
            $("#inspireMood").value;

        const budget =
            $("#inspireBudget").value;


        const days =
            Number(
                $("#inspireDays").value
            );


        if (
            !days ||
            days < 1
        ) {

            showToast(
                "Please enter a valid number of days."
            );

            return;
        }


        let results =
            destinations.filter(
                destination => {

                    const moodMatch =
                        destination.tags.includes(
                            mood
                        );

                    const budgetMatch =
                        destination.budget === budget;


                    return (
                        moodMatch &&
                        budgetMatch
                    );

                }
            );


        if (results.length === 0) {

            results =
                destinations.filter(
                    destination =>
                        destination.tags.includes(
                            mood
                        )
                );

        }


        if (results.length === 0) {

            results =
                destinations.slice(0, 4);

        }


        const selected =
            results[
                Math.floor(
                    Math.random() * results.length
                )
            ];


        $("#inspirationResult").innerHTML = `

            <div class="form-card">

                <span class="eyebrow">
                    YOUR MATCH
                </span>

                <h2 style="margin:5px 0 15px;">
                    We think you'll love ${selected.name}
                </h2>

                ${destinationCardHTML(selected)}

                <div class="modal-actions">

                    <button
                        class="primary-btn"
                        id="inspirePlanBtn"
                    >
                        Plan ${days} Days
                    </button>

                    <button
                        class="secondary-btn"
                        id="inspireAnotherBtn"
                    >
                        Try Another
                    </button>

                </div>

            </div>
        `;


        $("#inspirationResult")
            .classList.remove("hidden");


        $("#inspirePlanBtn")
            .addEventListener(
                "click",
                function () {

                    $("#planDestination").value =
                        selected.id;

                    $("#planDays").value =
                        days;

                    navigateTo("plan");

                }
            );


        $("#inspireAnotherBtn")
            .addEventListener(
                "click",
                function () {

                    $("#generateInspirationBtn")
                        .click();

                }
            );


        $("#inspirationResult")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   KNOW WHERE TO GO
========================================================= */

$("#continueKnownDestinationBtn")
    .addEventListener(
        "click",
        function () {

            const destination =
                $("#knownDestination").value;

            const days =
                Number(
                    $("#knownDays").value
                );


            if (!destination) {

                showToast(
                    "Please select a destination."
                );

                return;
            }


            if (!days || days < 1) {

                showToast(
                    "Please enter valid trip days."
                );

                return;
            }


            $("#planDestination").value =
                destination;

            $("#planDays").value =
                days;


            $("#knowWhereArea")
                .classList.add("hidden");


            navigateTo("plan");

        }
    );


/* =========================================================
   PLAN FORM
========================================================= */

$("#planForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const destinationId =
            $("#planDestination").value;


        const days =
            Number(
                $("#planDays").value
            );


        const travelers =
            Number(
                $("#planTravelers").value
            );


        const budget =
            $("#planBudget").value;


        const transport =
            $("#planTransport").value;


        const startDate =
            $("#planStartDate").value;


        const interests =
            [...document.querySelectorAll(
                "#planForm input[type='checkbox']:checked"
            )]
                .map(input => input.value);


        const destination =
            destinations.find(
                item =>
                    item.id === destinationId
            );


        if (!destination) {

            showToast(
                "Please choose a destination."
            );

            return;
        }


        if (
            days < 1 ||
            days > 14
        ) {

            showToast(
                "Trip length should be between 1 and 14 days."
            );

            return;
        }


        const itinerary =
            createItinerary(
                destination,
                days,
                interests
            );


        const trip = {

            id:
                Date.now().toString(),

            destinationId:
                destination.id,

            destinationName:
                destination.name,

            state:
                destination.state,

            days,

            travelers,

            budget,

            transport,

            startDate:
                startDate ||
                new Date()
                    .toISOString()
                    .split("T")[0],

            interests,

            itinerary,

            createdAt:
                new Date().toISOString()

        };


        const trips =
            getTrips();


        trips.unshift(trip);

        saveTrips(trips);


        state.activeTripId =
            trip.id;

        state.currentStopIndex =
            0;


        renderTrips();

        renderActiveTrip(trip);

        navigateTo("active-trip");

        showToast(
            "Your itinerary has been created!"
        );

    }
);


/* =========================================================
   CREATE ITINERARY
========================================================= */

function createItinerary(
    destination,
    days,
    interests
) {

    const placeSets = {

        goa: [
            ["Calangute Beach", "09:00", "Beach"],
            ["Fort Aguada", "12:00", "Culture"],
            ["Baga Beach", "16:00", "Beach"],
            ["Anjuna Market", "19:00", "Shopping"],
            ["Dudhsagar Falls", "08:00", "Nature"],
            ["Panaji Heritage Walk", "17:00", "Culture"]
        ],

        manali: [
            ["Hadimba Temple", "09:00", "Culture"],
            ["Old Manali", "11:30", "Food"],
            ["Solang Valley", "15:00", "Adventure"],
            ["Mall Road", "18:30", "Shopping"],
            ["Rohtang Area", "08:00", "Mountains"],
            ["Vashisht Hot Springs", "16:00", "Nature"]
        ],

        munnar: [
            ["Tea Gardens", "08:30", "Nature"],
            ["Mattupetty Dam", "11:30", "Nature"],
            ["Echo Point", "14:00", "Adventure"],
            ["Munnar Market", "18:00", "Food"],
            ["Eravikulam National Park", "08:00", "Nature"],
            ["Top Station", "15:30", "Mountains"]
        ],

        jaipur: [
            ["Amber Fort", "09:00", "Culture"],
            ["City Palace", "12:00", "Culture"],
            ["Hawa Mahal", "15:00", "Culture"],
            ["Johari Bazaar", "18:00", "Shopping"],
            ["Jantar Mantar", "09:00", "History"],
            ["Local Food Walk", "18:30", "Food"]
        ]

    };


    const genericPlaces = [

        ["City Centre", "09:00", "Culture"],

        ["Popular Local Market", "11:30", "Shopping"],

        ["Famous Viewpoint", "15:00", "Nature"],

        ["Local Food Experience", "18:00", "Food"],

        ["Main Attraction", "09:00", "Culture"],

        ["Nature Escape", "15:30", "Nature"],

        ["Adventure Activity", "10:00", "Adventure"],

        ["Sunset Spot", "17:30", "Nature"]

    ];


    const places =
        placeSets[destination.id] ||
        genericPlaces;


    const result = [];


    for (
        let day = 1;
        day <= days;
        day++
    ) {

        const stops = [];


        const first =
            places[
                (day * 2 - 2) %
                places.length
            ];


        const second =
            places[
                (day * 2 - 1) %
                places.length
            ];


        const chosen = [
            first,
            second
        ];


        if (interests.length > 0) {

            const matching =
                places.filter(place =>
                    interests.some(
                        interest =>
                            place[2]
                                .toLowerCase()
                                .includes(
                                    interest.toLowerCase()
                                )
                    )
                );


            if (matching.length > 0) {

                chosen[0] =
                    matching[
                        (day - 1) %
                        matching.length
                    ];

            }

        }


        chosen.forEach(
            (place, index) => {

                stops.push({

                    id:
                        `${day}-${index}`,

                    name:
                        place[0],

                    time:
                        place[1],

                    type:
                        place[2],

                    completed:
                        false

                });

            }
        );


        result.push({

            day,

            title:
                `Day ${day}`,

            stops

        });

    }


    return result;

}


/* =========================================================
   TRIPS
========================================================= */

function renderTrips() {

    const trips =
        getTrips();


    const container =
        $("#tripsList");


    if (trips.length === 0) {

        container.innerHTML = `

            <div class="trip-empty">

                <div class="empty-icon">
                    🧳
                </div>

                <h2>
                    No trips yet
                </h2>

                <p style="
                    color:var(--muted);
                    margin:8px 0 20px;
                ">
                    Start planning your next adventure.
                </p>

                <button
                    class="primary-btn"
                    data-page="plan"
                >
                    Plan My First Trip
                </button>

            </div>

        `;

        return;
    }


    container.innerHTML = `

        <div class="trip-list">

            ${trips.map(trip => `

                <article class="trip-card">

                    <div>

                        <span class="eyebrow">
                            ${trip.budget.toUpperCase()} TRIP
                        </span>

                        <h2>
                            ${trip.destinationName}
                        </h2>

                        <div class="trip-meta">

                            <span>
                                📍 ${trip.state}
                            </span>

                            <span>
                                📅 ${trip.days} days
                            </span>

                            <span>
                                👥 ${trip.travelers} travellers
                            </span>

                            <span>
                                🚆 ${capitalize(
                                    trip.transport
                                )}
                            </span>

                        </div>

                        <p class="muted">
                            Created on
                            ${formatDate(
                                trip.createdAt
                            )}
                        </p>

                    </div>


                    <div class="trip-actions">

                        <button
                            class="primary-btn"
                            data-open-trip="${trip.id}"
                        >
                            Open Trip
                        </button>

                        <button
                            class="secondary-btn"
                            data-download-trip="${trip.id}"
                        >
                            Save Offline
                        </button>

                        <button
                            class="danger-btn"
                            data-delete-trip="${trip.id}"
                        >
                            Delete
                        </button>

                    </div>

                </article>

            `).join("")}

        </div>

    `;

}


/* =========================================================
   TRIP ACTIONS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const openTrip =
            event.target.closest(
                "[data-open-trip]"
            );


        if (openTrip) {

            const trip =
                getTrips().find(
                    item =>
                        item.id ===
                        openTrip.dataset.openTrip
                );


            if (!trip) return;


            state.activeTripId =
                trip.id;

            state.currentStopIndex =
                0;

            renderActiveTrip(trip);

            navigateTo("active-trip");

            return;
        }


        const deleteTrip =
            event.target.closest(
                "[data-delete-trip]"
            );


        if (deleteTrip) {

            const id =
                deleteTrip.dataset.deleteTrip;


            openModal(`

                <h2>
                    Delete this trip?
                </h2>

                <p>
                    This action cannot be undone.
                </p>

                <div class="modal-actions">

                    <button
                        class="danger-btn"
                        id="confirmDeleteTrip"
                    >
                        Delete Trip
                    </button>

                    <button
                        class="secondary-btn"
                        id="cancelDeleteTrip"
                    >
                        Cancel
                    </button>

                </div>
            `);


            $("#confirmDeleteTrip")
                .addEventListener(
                    "click",
                    function () {

                        const trips =
                            getTrips()
                                .filter(
                                    trip =>
                                        trip.id !== id
                                );


                        saveTrips(trips);

                        closeModal();

                        renderTrips();

                        showToast(
                            "Trip deleted."
                        );

                    }
                );


            $("#cancelDeleteTrip")
                .addEventListener(
                    "click",
                    closeModal
                );


            return;
        }


        const downloadTrip =
            event.target.closest(
                "[data-download-trip]"
            );


        if (downloadTrip) {

            downloadTripOffline(
                downloadTrip.dataset.downloadTrip
            );

        }

    }
);


/* =========================================================
   ACTIVE TRIP
========================================================= */

function renderActiveTrip(trip) {

    if (!trip) return;


    const destination =
        destinations.find(
            d =>
                d.id ===
                trip.destinationId
        );


    $("#activeTripTitle").textContent =
        trip.destinationName;


    $("#activeTripSubtitle").textContent =
        `${trip.days} days • ${trip.travelers} travellers`;


    $("#activeTripSummary").innerHTML = `

        <span class="eyebrow">
            ${trip.destinationName.toUpperCase()}
        </span>

        <h2 style="margin-top:5px;">
            Your personalised itinerary
        </h2>

        <p class="muted">
            ${destination?.description || ""}
        </p>

        <div class="trip-summary-stats">

            <div class="trip-stat">
                <strong>${trip.days}</strong>
                <span>Days</span>
            </div>

            <div class="trip-stat">
                <strong>${trip.travelers}</strong>
                <span>Travellers</span>
            </div>

            <div class="trip-stat">
                <strong>
                    ${capitalize(trip.budget)}
                </strong>
                <span>Budget</span>
            </div>

            <div class="trip-stat">
                <strong>
                    ${capitalize(trip.transport)}
                </strong>
                <span>Transport</span>
            </div>

        </div>

    `;


    renderItinerary(trip);

}


/* =========================================================
   RENDER ITINERARY
========================================================= */

function renderItinerary(trip) {

    const container =
        $("#activeItinerary");


    container.innerHTML =
        trip.itinerary
            .map(day => `

                <div class="itinerary-day">

                    <div class="itinerary-day-header">

                        <strong>
                            ${day.title}
                        </strong>

                        <span class="muted">
                            ${day.stops.length} stops
                        </span>

                    </div>


                    ${day.stops
                        .map(stop => {

                            const globalIndex =
                                getGlobalStopIndex(
                                    trip,
                                    day.day,
                                    stop.id
                                );


                            const current =
                                globalIndex ===
                                state.currentStopIndex;


                            return `

                                <div
                                    class="
                                        itinerary-stop
                                        ${current
                                            ? "current-stop"
                                            : ""}
                                    "
                                >

                                    <div class="stop-number">
                                        ${globalIndex + 1}
                                    </div>


                                    <div>

                                        <strong>
                                            ${stop.name}
                                        </strong>

                                        <div class="stop-time">
                                            ${stop.time}
                                            •
                                            ${stop.type}
                                        </div>

                                    </div>


                                    <div class="stop-actions">

                                        <button
                                            class="small-btn"
                                            data-navigate-place="${encodeURIComponent(
                                                stop.name +
                                                " " +
                                                trip.destinationName
                                            )}"
                                        >
                                            Navigate
                                        </button>

                                    </div>

                                </div>

                            `;

                        })
                        .join("")}

                </div>

            `)
            .join("");

}


function getGlobalStopIndex(
    trip,
    dayNumber,
    stopId
) {

    let index = 0;


    for (const day of trip.itinerary) {

        for (const stop of day.stops) {

            if (
                day.day === dayNumber &&
                stop.id === stopId
            ) {

                return index;

            }

            index++;

        }

    }


    return 0;
}


/* =========================================================
   START TRIP
========================================================= */

$("#startTripBtn").addEventListener(
    "click",
    function () {

        state.currentStopIndex = 0;

        const trip =
            getTrips().find(
                item =>
                    item.id ===
                    state.activeTripId
            );


        if (!trip) return;


        renderItinerary(trip);

        showToast(
            `Trip started. Your first stop is ready.`
        );

    }
);


/* =========================================================
   NEXT STOP
========================================================= */

$("#nextStopBtn").addEventListener(
    "click",
    function () {

        const trip =
            getTrips().find(
                item =>
                    item.id ===
                    state.activeTripId
            );


        if (!trip) return;


        const totalStops =
            trip.itinerary.reduce(
                (total, day) =>
                    total + day.stops.length,
                0
            );


        if (
            state.currentStopIndex >=
            totalStops - 1
        ) {

            showToast(
                "You reached the last stop of this itinerary!"
            );

            return;
        }


        state.currentStopIndex++;

        renderItinerary(trip);

        showToast(
            "Moved to the next stop."
        );

    }
);


/* =========================================================
   NAVIGATE CURRENT STOP
========================================================= */

$("#navigateStopBtn").addEventListener(
    "click",
    function () {

        const trip =
            getTrips().find(
                item =>
                    item.id ===
                    state.activeTripId
            );


        if (!trip) return;


        const stop =
            getCurrentStop(trip);


        if (!stop) return;


        openGoogleMaps(
            stop.name +
            " " +
            trip.destinationName
        );

    }
);


/* =========================================================
   NAVIGATE INDIVIDUAL STOP
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-navigate-place]"
            );


        if (!button) return;


        const place =
            decodeURIComponent(
                button.dataset.navigatePlace
            );


        openGoogleMaps(place);

    }
);


function getCurrentStop(trip) {

    let index = 0;


    for (const day of trip.itinerary) {

        for (const stop of day.stops) {

            if (
                index ===
                state.currentStopIndex
            ) {

                return stop;

            }

            index++;

        }

    }


    return null;
}


/* =========================================================
   GOOGLE MAPS
========================================================= */

function openGoogleMaps(place) {

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(place);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   BOOKING ACTIONS
========================================================= */

$$("[data-booking]").forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const type =
                button.dataset.booking;


            const searches = {

                flight:
                    "https://www.google.com/search?q=flights",

                hotel:
                    "https://www.google.com/search?q=hotels",

                train:
                    "https://www.google.com/search?q=Indian+Railway+train+booking",

                bus:
                    "https://www.google.com/search?q=bus+booking+India"

            };


            const url =
                searches[type];


            if (!url) {

                showToast(
                    "Booking option unavailable."
                );

                return;
            }


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );


            showToast(
                `${capitalize(type)} search opened in a new tab.`
            );

        }
    );

});


/* =========================================================
   PROFILE
========================================================= */

function loadProfileForm() {

    const user =
        state.user ||
        getStoredUser();


    if (!user) return;


    $("#profileName").value =
        user.name || "";


    $("#profileEmail").value =
        user.email || "";


    $("#profilePhone").value =
        user.phone || "";


    $("#profileRegion").value =
        user.region || "India";


    $("#profileCurrency").value =
        user.currency || "INR";


    $("#profileLanguage").value =
        user.language || "English";


    const interests =
        user.interests || [];


    $("#profileBeach").checked =
        interests.includes("beach");


    $("#profileMountains").checked =
        interests.includes("mountains");


    $("#profileNature").checked =
        interests.includes("nature");


    $("#profileCulture").checked =
        interests.includes("culture");


    $("#profileFood").checked =
        interests.includes("food");

}


/* Save Profile */

$("#profileForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            $("#profileName")
                .value
                .trim();


        const email =
            $("#profileEmail")
                .value
                .trim();


        const phone =
            $("#profilePhone")
                .value
                .trim();


        const region =
            $("#profileRegion").value;


        const currency =
            $("#profileCurrency").value;


        const language =
            $("#profileLanguage").value;


        if (!name || !email) {

            showToast(
                "Name and email are required."
            );

            return;
        }


        const interests =
            [...document.querySelectorAll(
                "#profileForm input[type='checkbox']:checked"
            )]
                .map(input => input.value);


        const user = {

            name,

            email,

            phone,

            region,

            currency,

            language,

            interests

        };


        saveUser(user);

        updateUserUI();

        renderHome();

        showToast(
            "Profile saved successfully ✓"
        );

    }
);


/* Reset */

$("#resetProfileBtn").addEventListener(
    "click",
    function () {

        loadProfileForm();

        showToast(
            "Profile changes reset."
        );

    }
);


/* Logout */

$("#logoutBtn").addEventListener(
    "click",
    function () {

        openModal(`

            <h2>
                Logout from TourCraft?
            </h2>

            <p>
                Your saved trips remain on this browser.
            </p>

            <div class="modal-actions">

                <button
                    class="danger-btn"
                    id="confirmLogout"
                >
                    Logout
                </button>

                <button
                    class="secondary-btn"
                    id="cancelLogout"
                >
                    Cancel
                </button>

            </div>
        `);


        $("#confirmLogout").addEventListener(
            "click",
            function () {

                closeModal();

                state.currentPage = "home";

                state.history = [];

                $("#app").classList.add("hidden");

                $("#loginScreen")
                    .classList.remove("hidden");

                $("#loginPassword").value = "";

                showToast(
                    "You have been logged out."
                );

            }
        );


        $("#cancelLogout")
            .addEventListener(
                "click",
                closeModal
            );

    }
);


/* =========================================================
   EMERGENCY
========================================================= */

$$("[data-emergency]").forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const number =
                button.dataset.emergency;


            openModal(`

                <h2>
                    Call ${number}?
                </h2>

                <p>
                    Your phone may ask for permission
                    to place the call.
                </p>

                <div class="modal-actions">

                    <a
                        class="primary-btn"
                        href="tel:${number}"
                        style="
                            display:inline-flex;
                            align-items:center;
                            justify-content:center;
                            text-decoration:none;
                        "
                    >
                        📞 Call ${number}
                    </a>

                    <button
                        class="secondary-btn"
                        id="cancelEmergency"
                    >
                        Cancel
                    </button>

                </div>

            `);


            $("#cancelEmergency")
                .addEventListener(
                    "click",
                    closeModal
                );

        }
    );

});


/* =========================================================
   SHARE LOCATION
========================================================= */

$("#shareLocationBtn").addEventListener(
    "click",
    function () {

        if (!navigator.geolocation) {

            showToast(
                "Geolocation is not supported by this browser."
            );

            return;
        }


        showToast(
            "Requesting your location..."
        );


        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;


                const mapUrl =
                    "https://www.google.com/maps/search/?api=1&query=" +
                    latitude +
                    "," +
                    longitude;


                $("#locationResult").innerHTML = `

                    <strong>
                        📍 Your location is ready
                    </strong>

                    <p style="
                        margin-top:8px;
                        color:var(--muted);
                    ">
                        Latitude:
                        ${latitude.toFixed(5)}
                        <br>
                        Longitude:
                        ${longitude.toFixed(5)}
                    </p>

                    <div class="modal-actions">

                        <button
                            class="primary-btn"
                            id="openLocationMap"
                        >
                            Open in Maps
                        </button>

                        <button
                            class="secondary-btn"
                            id="copyLocation"
                        >
                            Copy Location
                        </button>

                    </div>

                `;


                $("#locationResult")
                    .classList.remove("hidden");


                $("#openLocationMap")
                    .addEventListener(
                        "click",
                        function () {

                            window.open(
                                mapUrl,
                                "_blank",
                                "noopener,noreferrer"
                            );

                        }
                    );


                $("#copyLocation")
                    .addEventListener(
                        "click",
                        async function () {

                            const text =
                                `${latitude}, ${longitude}`;

                            try {

                                await navigator.clipboard
                                    .writeText(text);

                                showToast(
                                    "Location copied."
                                );

                            } catch {

                                showToast(
                                    "Copy is not available in this browser."
                                );

                            }

                        }
                    );

            },

            function () {

                showToast(
                    "Location permission was denied or unavailable."
                );

            },

            {
                enableHighAccuracy: true,

                timeout: 10000,

                maximumAge: 0

            }

        );

    }
);


/* =========================================================
   NEARBY HELP
========================================================= */

$("#nearbyHelpBtn").addEventListener(
    "click",
    function () {

        openGoogleMaps(
            "hospital near me"
        );

        showToast(
            "Opening nearby hospitals in Maps."
        );

    }
);


/* =========================================================
   MODAL CLOSE
========================================================= */

$("#modalCloseBtn").addEventListener(
    "click",
    closeModal
);


$("#modalOverlay").addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            $("#modalOverlay")
        ) {

            closeModal();

        }

    }
);


/* ESCAPE CLOSE */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !$("#modalOverlay")
                .classList.contains("hidden")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   OFFLINE TRIP DOWNLOAD
========================================================= */

function downloadTripOffline(id) {

    const trip =
        getTrips().find(
            item => item.id === id
        );


    if (!trip) {

        showToast(
            "Trip not found."
        );

        return;
    }


    let text =
        `TOURCRAFT TRIP\n`;

    text +=
        `====================\n\n`;

    text +=
        `Destination: ${trip.destinationName}\n`;

    text +=
        `State: ${trip.state}\n`;

    text +=
        `Days: ${trip.days}\n`;

    text +=
        `Travellers: ${trip.travelers}\n`;

    text +=
        `Budget: ${trip.budget}\n`;

    text +=
        `Transport: ${trip.transport}\n`;

    text +=
        `Start Date: ${trip.startDate}\n\n`;


    trip.itinerary.forEach(day => {

        text +=
            `${day.title}\n`;

        text +=
            `--------------------\n`;


        day.stops.forEach(
            (stop, index) => {

                text +=
                    `${index + 1}. ` +
                    `${stop.time} - ` +
                    `${stop.name} ` +
                    `(${stop.type})\n`;

            }
        );


        text += "\n";

    });


    const blob =
        new Blob(
            [text],
            {
                type:
                    "text/plain;charset=utf-8"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        `${trip.destinationName}-TourCraft-Trip.txt`;


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);


    showToast(
        "Trip saved offline."
    );

}


/* =========================================================
   HELPERS
========================================================= */

function capitalize(value) {

    if (!value) return "";

    return value.charAt(0).toUpperCase() +
        value.slice(1);

}


function formatDate(value) {

    if (!value) return "";

    const date =
        new Date(value);


    if (Number.isNaN(date.getTime())) {

        return value;

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   DEFAULT DATE
========================================================= */

function setDefaultDate() {

    const today =
        new Date();


    const yyyy =
        today.getFullYear();


    const mm =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const dd =
        String(
            today.getDate()
        ).padStart(2, "0");


    $("#planStartDate").value =
        `${yyyy}-${mm}-${dd}`;

}


/* =========================================================
   INITIALISE
========================================================= */

function initialise() {

    setDefaultDate();

    populateDestinationSelects();

    const existingUser =
        getStoredUser();


    if (existingUser) {

        state.user =
            existingUser;

        showApp();

    } else {

        showLogin();

    }

}


/* =========================================================
   START APPLICATION
========================================================= */

initialise();