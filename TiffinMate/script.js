const indianTiffinItems = [
  "Roti (Indian flatbread)",
  "Tomato Sabzi (vegetable curry)",
  "Dal (lentil curry)",
  "Rice",
  "Pickles",
  "Salad",
  "Raita (yogurt side dish)",
  "Sambar (South Indian lentil soup)",
  "Idli (steamed rice cake)",
];

function addItems() {
  const tiffinItems = parseInt(document.getElementById('tiffinItems').value);
  const itemsContainer = document.getElementById('items');

  // Clear previous items
  itemsContainer.innerHTML = '';

  // Create input fields for each item per tiffin
  let itemsHTML = '';

  for (let i = 1; i <= tiffinItems; i++) {
    let optionsHTML = '';
    indianTiffinItems.forEach(item => {
      optionsHTML += `<option value="${item}">${item}</option>`;
    });
    itemsHTML += `
      <div class="item form-input">
        <label for="item${i}">Item ${i}:</label>
        <select id="item${i}">
          <option value="">Select Item</option>
          ${optionsHTML}
        </select>
        <div class="radio-container">
          <div class="radio-btn">
            <input type="radio" id="quantityRadio${i}" name="option${i}" value="quantityRadio">
            <label for="quantityRadio${i}">Enter Quantity</label>
          </div>
          <input class="input-box" type="number" id="quantityValue${i}" placeholder="quantityValue" style="display:none;">
        </div>
        <div class="radio-container">
          <div class="radio-btn">
            <input type="radio" id="container${i}" name="option${i}" value="container">
            <label for="container${i}">Select Container Size</label>
          </div>
          <div id="containers${i}" style="display:none;">
            <input type="radio" id="12oz-Item${i}" name="container${i}" value="12">
            <label for="12oz-Item${i}">12oz</label>
            <input type="radio" id="8oz-Item${i}" name="container${i}" value="8">
            <label for="8oz-Item${i}">8oz</label>
          </div>
        </div>
      </div>
    `;
  }

  // Append the generated HTML to the itemsContainer
  itemsContainer.innerHTML = itemsHTML;

  // Add event listeners to toggle display of quantity input
  for (let i = 1; i <= tiffinItems; i++) {
    const containerRadio = document.getElementById(`container${i}`);
    const containers = document.getElementById(`containers${i}`);
    const quantityRadio = document.getElementById(`quantityRadio${i}`);
    const valueInput = document.getElementById(`quantityValue${i}`);

    containerRadio.addEventListener('change', function () {
      valueInput.style.display = 'none';
      containers.style.display = 'inline-block';
    });

    quantityRadio.addEventListener('change', function () {
      containers.style.display = 'none';
      valueInput.style.display = 'inline-block';
    });
  }
}

function calculate() {
  const tiffins = parseInt(document.getElementById('tiffins').value);
  const tiffinItems = parseInt(document.getElementById('tiffinItems').value);
  const report = document.getElementById('output');
  let output = '<h1>TiffinMate Report</h1>';
  let totalIngredients = {}; // Object to store total amount of each ingredient
  let totalItemsQuantity = {}; // Object to store total quantity of each item
  // Mapping between item names and their ingredient lists with amounts for different container sizes
  const itemIngredientsMap = {
    "Roti (Indian flatbread)": {
      "12": [
        { ingredient: "Flour", amount: "200g" },
        { ingredient: "Water", amount: "100ml" },
        { ingredient: "Salt", amount: "5g" }
      ],
      "8": [
        { ingredient: "Flour", amount: "150g" },
        { ingredient: "Water", amount: "75ml" },
        { ingredient: "Salt", amount: "3g" }
      ]
    },
    "Tomato Sabzi (vegetable curry)": {
      "12": [
        { ingredient: "Tomatoes", amount: "500g" },
        { ingredient: "Onions", amount: "200g" },
        { ingredient: "Spices", amount: "10g" }
      ],
      "8": [
        { ingredient: "Tomatoes", amount: "300g" },
        { ingredient: "Onions", amount: "150g" },
        { ingredient: "Spices", amount: "5g" }
      ]
    },
    "Dal (lentil curry)": {
      "12": [
        { ingredient: "Lentils", amount: "300g" },
        { ingredient: "Spices", amount: "10g" },
        { ingredient: "Tomatoes", amount: "200g" }
      ],
      "8": [
        { ingredient: "Lentils", amount: "200g" },
        { ingredient: "Spices", amount: "5g" },
        { ingredient: "Tomatoes", amount: "100g" }
      ]
    },
    "Rice": {
      "12": [
        { ingredient: "Rice", amount: "400g" },
        { ingredient: "Water", amount: "800ml" }
      ],
      "8": [
        { ingredient: "Rice", amount: "250g" },
        { ingredient: "Water", amount: "500ml" }
      ]
    },
    "Pickles": {
      "12": [
        { ingredient: "Vegetables", amount: "300g" },
        { ingredient: "Spices", amount: "20g" },
        { ingredient: "Oil", amount: "50ml" }
      ],
      "8": [
        { ingredient: "Vegetables", amount: "200g" },
        { ingredient: "Spices", amount: "10g" },
        { ingredient: "Oil", amount: "30ml" }
      ]
    },
    "Salad": {
      "12": [
        { ingredient: "Lettuce", amount: "200g" },
        { ingredient: "Tomatoes", amount: "150g" },
        { ingredient: "Cucumbers", amount: "150g" }
      ],
      "8": [
        { ingredient: "Lettuce", amount: "100g" },
        { ingredient: "Tomatoes", amount: "75g" },
        { ingredient: "Cucumbers", amount: "75g" }
      ]
    },
    "Raita (yogurt side dish)": {
      "12": [
        { ingredient: "Yogurt", amount: "300g" },
        { ingredient: "Cucumbers", amount: "150g" },
        { ingredient: "Spices", amount: "10g" }
      ],
      "8": [
        { ingredient: "Yogurt", amount: "200g" },
        { ingredient: "Cucumbers", amount: "100g" },
        { ingredient: "Spices", amount: "5g" }
      ]
    },
    "Sambar (South Indian lentil soup)": {
      "12": [
        { ingredient: "Lentils", amount: "400g" },
        { ingredient: "Vegetables", amount: "300g" },
        { ingredient: "Tamarind", amount: "30g" },
        { ingredient: "Spices", amount: "15g" }
      ],
      "8": [
        { ingredient: "Lentils", amount: "250g" },
        { ingredient: "Vegetables", amount: "150g" },
        { ingredient: "Tamarind", amount: "20g" },
        { ingredient: "Spices", amount: "10g" }
      ]
    },
    "Idli (steamed rice cake)": {
      "12": [
        { ingredient: "Rice", amount: "200g" },
        { ingredient: "Lentils", amount: "100g" },
        { ingredient: "Salt", amount: "5g" }
      ],
      "8": [
        { ingredient: "Rice", amount: "150g" },
        { ingredient: "Lentils", amount: "75g" },
        { ingredient: "Salt", amount: "3g" }
      ]
    }
  };

  // Iterate over each selected item and display its ingredient list
  for (let i = 1; i <= tiffinItems; i++) {
    const itemName = document.getElementById(`item${i}`).value;
    console.log("ItemName: ", itemName);
    const isContainerSelected = document.getElementById(`container${i}`).checked;
    const isQuantitySelected = document.getElementById(`quantityRadio${i}`).checked;

    if (itemName) {
      output += `<p>Item ${i}: ${itemName}</p>`;

      // If quantity is selected, calculate total quantity
      if (isQuantitySelected) {
        const quantityInput = document.getElementById(`quantityValue${i}`).value;
        const totalQuantity = parseFloat(quantityInput) * tiffins;
        output += `<p>Total Quantity: ${totalQuantity}</p>`;
        // Update totalItemsQuantity object
        totalItemsQuantity[itemName] = (totalItemsQuantity[itemName] || 0) + totalQuantity;
      }

      // If a container size is selected, display ingredients accordingly
      if (isContainerSelected) {
        const container12oz = document.getElementById(`12oz-Item${i}`);
        const container8oz = document.getElementById(`8oz-Item${i}`);
        const selectedContainer = container12oz.checked ? "12" : (container8oz.checked ? "8" : null);
        console.log("selectedContainer: ", selectedContainer);

        // If a container size is selected, display ingredients accordingly
        if (selectedContainer) {
          output += `<ul>`;
          // Add ingredients based on container size
          const ingredientsForContainer = itemIngredientsMap[itemName][selectedContainer];
          console.log(ingredientsForContainer);
          ingredientsForContainer.forEach(({ ingredient, amount }) => {
            output += `<li>${ingredient}: ${amount}</li>`;
            // Update totalIngredients object
            totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + parseFloat(amount);
          });
          output += `</ul>`;
        }
      }
    }

  }


  // Display total quantity of each item
  output += `<h2>Total Quantity of Each Item:</h2>`;
  output += `<ul>`;
  for (const item in totalItemsQuantity) {
    const totalQuantity = totalItemsQuantity[item];
    output += `<li>${item}: ${totalQuantity}</li>`;
  }
  output += `</ul>`;

  // Calculate total amount of ingredients required for total number of tiffins
  output += `<h2>Total Ingredients Required for ${tiffins} Tiffins:</h2>`;
  output += `<ul>`;
  for (const ingredient in totalIngredients) {
    const totalAmount = totalIngredients[ingredient] * tiffins;
    output += `<li>${ingredient}: ${totalAmount}g/ml</li>`;
  }
  output += `</ul>`;

  report.style.display = "block";
  report.innerHTML = output;
}

function exportReport() {
  window.print();
}