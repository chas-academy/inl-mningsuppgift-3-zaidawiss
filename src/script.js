// Skapa en tom array för varukorgen
const cart = [];

// Hämta element från DOM
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

// Klickhändelse för "Lägg till i varukorgen"
addButton.addEventListener("click", () => {
  const productName = productInput.value.trim();
  const price = parseFloat(priceInput.value);

  // Kontrollera att båda fälten är korrekt ifyllda
  if (!productName || isNaN(price)) {
    alert("Fyll i både ett produktnamn och ett giltigt pris!");
    return;
  }

  // Kolla om produkten redan finns i varukorgen
  const existingProduct = cart.find(item => item.productName.toLowerCase() === productName.toLowerCase());

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      price: price,
      quantity: 1
    });
  }

  // Rensa inputfälten
  productInput.value = "";
  priceInput.value = "";

  // Uppdatera visningen
  renderCart();
});

// Funktion för att visa varukorgen
function renderCart() {
    cartList.innerHTML = ""; // Töm listan innan uppdatering
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.productName} - ${item.price}kr (x${item.quantity})`;
      cartList.appendChild(li);
    });
  }
  
