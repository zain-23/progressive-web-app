const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "Mind Mesh (1).png" },
  { name: "Voluptatem", image: "Mind Mesh (1).png" },
  { name: "Explicabo", image: "Mind Mesh (1).png" },
  { name: "Rchitecto", image: "Mind Mesh (1).png" },
];

const showCoffee = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `<div class="card">
  <img class="card--avatar" src="${image}" />
  <h1 class="card--title">${name}</h1>
  <a class="card--link" href="#">Taste</a>
</div>`)
  );

  container.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCoffee);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service.js")
    .then((res) => console.log("service worker connected"))
    .catch((err) => console.log("not connected service worker", err));
}
