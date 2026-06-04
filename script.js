const menuContainer = document.getElementById("menu-container");
const drinkContainer = document.getElementById("drink-container");

// Hämtar menydata från backend-API
async function getMenu() {

  try {

    const response = await fetch("http://localhost:5000/api/menu");

    const menuItems = await response.json();

    // Filtrerar ut pizza och dryck
    displayMenu(menuItems.filter(item => item.category === "pizza"));
    displayDrinks(menuItems.filter(item => item.category === "drink"));

  } catch (error) {

    console.log("Fel vid hämtning av meny:", error);

  }

}

// Renderar pizzor på sidan
function displayMenu(items) {

  const pizzaContainer = document.getElementById("menu-container");
  const drinkContainer = document.getElementById("drink-container");

  pizzaContainer.innerHTML = "";
  drinkContainer.innerHTML = "";

  const pizzas = items.filter(item => item.category === "pizza");
  const drinks = items.filter(item => item.category === "drink");

  // Skapar UI-kort för pizzor
  pizzas.forEach(item => {

    const menuCard = document.createElement("div");

    menuCard.classList.add("menu-card");

    menuCard.innerHTML = `
    
      <h2>${item.title}</h2>

      ${item.imageUrl
        ? `<img src="http://localhost:5000/${item.imageUrl}" alt="${item.title}">`
        : ""
      }

      <p>${item.description}</p>

      <span>${item.price} kr</span>

    `;

    pizzaContainer.appendChild(menuCard);

  });

  // Skapar UI-kort för drycker
  drinks.forEach(item => {

    const drinkCard = document.createElement("div");

    drinkCard.classList.add("drink-card");

    drinkCard.innerHTML = `
    
      <h2>${item.title}</h2>

      <p>${item.description || ""}</p>

      <span>${item.price} kr</span>

    `;

    drinkContainer.appendChild(drinkCard);

  });

}

// Hämtar och visar månadens pizza
async function loadMonthlySpecial() {

  try {

    const res = await fetch("http://localhost:5000/api/menu");

    const data = await res.json();

    // Letar upp markerad specialpizza
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

        ${special.imageUrl ? `<img src="http://localhost:5000/${special.imageUrl}" alt="${special.title}">` : ""}

        <p>${special.description}</p>

        <p>${special.price} kr</p>

      </div>
    `;

  } catch (err) {

    console.error("Kunde inte hämta månadens pizza:", err);
  }
}

// Kör initial laddning av special och meny
loadMonthlySpecial();
getMenu();

// Hamburger-meny
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Renderar drycker separat 
function displayDrinks(items) {

  drinkContainer.innerHTML = "";

  items.forEach(item => {

    const drinkCard = document.createElement("div");

    drinkCard.classList.add("menu-card");

    drinkCard.innerHTML = `
    
      <h2>${item.title}</h2>

      ${item.imageUrl ? `<img src="http://localhost:5000/${item.imageUrl}" alt="${item.title}">` : ""}

      <p>${item.description}</p>

      <span>${item.price} kr</span>

    `;

    drinkContainer.appendChild(drinkCard);

  });
}

// Bokningsformulär som hanterar UI-feedback
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

  bookingForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // Hämtar värden från formuläret
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const email = document.getElementById("email").value;

    const successBox = document.getElementById("booking-success");

    // Visar bekräftelse direkt i UI
    successBox.style.display = "block";

    successBox.innerHTML = `
                
                    <h3>Tack för din bokning <strong>${name}</strong>!</h3>

                    <p>
                        Vi har reserverat en bokning för
                        <strong>${guests}</strong>
                        personer den
                        <strong>${date}</strong>
                        kl.
                        <strong>${time}</strong>.
                    </p>

                    <p>
                        En bekräftelse har skickats till angiven e-post och telefonnummer.
                    </p>

                `;

    bookingForm.reset();

  });

}

// Förbättrad datum/tid-picker (om webbläsaren stödjer det)
document.querySelectorAll('input[type="date"], input[type="time"]').forEach(input => {
  input.addEventListener("click", () => input.showPicker?.());
});

// Kontaktformulär – visar bekräftelse (ingen backend-anslutning)
const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    const successBox = document.getElementById("contact-success");

    // Visar bekräftelse i UI
    successBox.style.display = "block";

    successBox.innerHTML = `
      <h3>Tack för ditt meddelande, ${name}!</h3>

      <p>
        Vi har mottagit ditt meddelande och återkommer till
        <strong>${email}</strong> så snart vi kan.
      </p>

      <p>
        Vi återkopplar vanligtvis inom 24 timmar.
      </p>
    `;

    contactForm.reset();
  });

}