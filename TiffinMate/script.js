var indianTiffinItems = [
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
window.onload = function () {
  function addItems() {
    //Varibales
    var tiffinsInput = document.getElementById('tiffins');
    var tiffinItemsInput = document.getElementById('tiffinItems');
    var errorMessageTiffins = document.getElementById('error-tiffins');
    var errorMessageItems = document.getElementById('error-items');
    var tiffins = parseInt(tiffinsInput.value);
    var tiffinItems = parseInt(tiffinItemsInput.value);
    var itemsContainer = document.getElementById('items');
    var itemsHTML = '';
    var btnCalculate = document.getElementById("btn-calculate");

    // Reset previous error messages and background validation colors
    errorMessageTiffins.innerHTML = '';
    errorMessageItems.innerHTML = '';
    tiffinsInput.style.backgroundColor = '';
    tiffinItemsInput.style.backgroundColor = '';


    // Validate if number of tiffins is a positive integer
    if (isNaN(tiffins) || tiffins <= 0 || !Number.isInteger(tiffins)) {
      // Display error message
      errorMessageTiffins.innerHTML = "Please enter a valid positive integer for the number of tiffins.";
      errorMessageTiffins.classList.add('error-message');
      // Change background color to red
      tiffinsInput.style.backgroundColor = 'red';
      return;
    }

    // Validate if tiffinItems is a positive integer
    if (isNaN(tiffinItems) || tiffinItems <= 0 || !Number.isInteger(tiffinItems)) {
      // Display error message
      errorMessageItems.innerHTML = "Please enter a valid positive integer for the number of items.";
      errorMessageItems.classList.add('error-message');
      // Change background color to red
      tiffinItemsInput.style.backgroundColor = 'red';
      return;
    }

    itemsContainer.innerHTML = '';
    

    for (var i = 1; i <= tiffinItems; i++) {
      var optionsHTML = '';
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

    btnCalculate.style.display = "block";

    // Add event listeners to toggle display of quantity input
    for (var i = 1; i <= tiffinItems; i++) {
      var containerRadio = document.getElementById(`container${i}`);
      var containers = document.getElementById(`containers${i}`);
      var quantityRadio = document.getElementById(`quantityRadio${i}`);
      var valueInput = document.getElementById(`quantityValue${i}`);

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
    //Variables
    var tiffins = parseInt(document.getElementById('tiffins').value);
    var tiffinItems = parseInt(document.getElementById('tiffinItems').value);
    var report = document.getElementById('output');
    var output = '';
    var totalIngredients = {};
    var totalItemsQuantity = {};
    var errorFlag = false; // Flag to check if there are any errors

    // Iterate over each selected item and display its ingredient list
    for (var i = 1; i <= tiffinItems; i++) {
      var itemName = document.getElementById(`item${i}`).value;
      var isContainerSelected = document.getElementById(`container${i}`).checked;
      var isQuantitySelected = document.getElementById(`quantityRadio${i}`).checked;

      if (!itemName) {
        output += `<p class="error-message">Please select an item for Tiffin ${i}.</p>`;
        errorFlag = true;
      } else {

        // If quantity is selected, calculate total quantity
        if (isQuantitySelected) {
          var quantityInput = document.getElementById(`quantityValue${i}`).value;
          if (!quantityInput) {
            output += `<p class="error-message">Please enter quantity for ${itemName} in Tiffin ${i}.</p>`;
            errorFlag = true;
          } else {
            output = '<h1>TiffinMate Report</h1>'
            output += `<p>Item ${i}: ${itemName}</p>`;
            var totalQuantity = parseFloat(quantityInput) * tiffins;
            output += `<p>Total Quantity: ${totalQuantity}</p>`;
            // Update totalItemsQuantity object
            totalItemsQuantity[itemName] = (totalItemsQuantity[itemName] || 0) + totalQuantity;
          }
        }

        // If a container size is selected, display ingredients accordingly
        else if (isContainerSelected) {
          var container12oz = document.getElementById(`12oz-Item${i}`);
          var container8oz = document.getElementById(`8oz-Item${i}`);
          var selectedContainer = container12oz.checked ? "12" : (container8oz.checked ? "8" : null);

          if (!selectedContainer) {
            output += `<p class="error-message">Please select a container size for ${itemName} in Tiffin ${i}.</p>`;
            errorFlag = true;
          } else {
            // Add ingredients based on container size
            output = '<h1>TiffinMate Report</h1>'
            output += `<p>Item ${i}: ${itemName}</p>`;
            var ingredientsForContainer = itemIngredientsMap[itemName][selectedContainer];
            output += `<ul>`;
            ingredientsForContainer.forEach(({ ingredient, amount }) => {
              output += `<li>${ingredient}: ${amount}</li>`;
              // Update totalIngredients object
              totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + parseFloat(amount);
            });
            output += `</ul>`;
          }
        }
        else {
          output += `<p class="error-message">Please select quantity or container size for ${itemName}.</p>`;
          errorFlag = true;
        }
      }
    }

    // Display error if any
    if (errorFlag) {
      report.style.display = "block";
      report.innerHTML = output;
      return; // Exit the function if there is an error
    }

    // Proceed with calculation only if there are no errors
    // Display total quantity of each item
    output += `<h2>Total Quantity of Each Item:</h2>`;
    output += `<ul>`;
    for (var item in totalItemsQuantity) {
      var totalQuantity = totalItemsQuantity[item];
      output += `<li>${item}: ${totalQuantity}</li>`;
    }
    output += `</ul>`;

    // Calculate total amount of ingredients required for total number of tiffins
    output += `<h2>Total Ingredients Required for ${tiffins} Tiffins:</h2>`;
    output += `<ul>`;
    for (var ingredient in totalIngredients) {
      var totalAmount = totalIngredients[ingredient] * tiffins;
      output += `<li>${ingredient}: ${totalAmount}g/ml</li>`;
    }
    output += `</ul>`;

    // Display the report
    report.style.display = "block";
    report.innerHTML = output;

    var btnExport = document.getElementById("btn-export");
    btnExport.style.display = "block";
  }

  function exportReport() {
    window.print();
  }
}