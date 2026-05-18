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

      <p>${item.description}</p>

      <span>${item.price} kr</span>

    `;

    menuContainer.appendChild(menuCard);

  });

}

// Kör funktion
getMenu();