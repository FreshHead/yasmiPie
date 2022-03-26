
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(btn => btn.addEventListener("click", route));
});

const routes = {
    404: "pages/main.html",
    "/": "pages/main.html",
    "/cakes": "pages/cakes.html",
    "/desserts": "pages/desserts.html",
    "/about": "pages/about.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    document.getElementById("description")
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();