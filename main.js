import "./styles.css";

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEL = document.querySelector("#top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "#0e9aa7";
topMenuEL.classList.add("flex-around");

menuLinks.forEach((link) => {
  const newLink = document.createElement("a");
  newLink.href = link.href;
  newLink.textContent = link.text;
  topMenuEL.appendChild(newLink);
});
