const menuContainer = document.getElementById("menu-container");

// Hämta meny från API
async function getMenu() {

  try {

    const response = await fetch("http://localhost:5000/api/menu");

    const menuItems = await response.json();

    displayMenu(menuItems);

  } catch (error) {

    console.log("Fel vid hämtning av meny:", error);

  }

}

// Skriver ut meny på sidan
function displayMenu(items) {

  menuContainer.innerHTML = "";

  items.forEach(item => {

    const menuCard = document.createElement("div");

    menuCard.classList.add("menu-card");

    menuCard.innerHTML = `
    
      <h2>${item.title}</h2>

      ${item.imageUrl ? `<img src="http://localhost:5000/${item.imageUrl}" alt="${item.title}">` : ""}

      <p>${item.description}</p>

      <span>${item.price} kr</span>

    `;

    menuContainer.appendChild(menuCard);

  });

}

//Månadens pizza
async function loadMonthlySpecial() {

  try {

    const res = await fetch("http://localhost:5000/api/menu");

    const data = await res.json();

    // Hittar pizzan som är special
    const special = data.find(item => item.monthly_special === true);

    const container = document.getElementById("special-container");

    // Om ingen specialpizza finns
    if (!special) {

      container.innerHTML = `
        <p>Ingen månadens pizza just nu.</p>
      `;

      return;
    }

    // Renderar specialpizza
    container.innerHTML = `
      <div class="special-card">

        <h3>${special.title}</h3>

        ${special.imageUrl? `<img src="http://localhost:5000/${special.imageUrl}" alt="${special.title}">`: ""}

        <p>${special.description}</p>

        <p>${special.price} kr</p>

      </div>
    `;

  } catch (err) {

    console.error("Kunde inte hämta månadens pizza:", err);
  }
}

loadMonthlySpecial();

// Kör funktion
getMenu();

// Hamburger-meny
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});