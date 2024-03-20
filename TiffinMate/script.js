// Define available items
const items = [
    { name: 'Rice', unit: 'kg', defaultQuantity: 0 },
    { name: 'Vegetables', unit: 'kg', defaultQuantity: 0 },
    { name: 'Chicken', unit: 'kg', defaultQuantity: 0 },
    // Add more items as needed
  ];
  
  // Function to dynamically generate item selection checkboxes
  function generateItemCheckboxes() {
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';
    items.forEach(item => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = item.name;
      checkbox.value = item.name;
      checkbox.id = item.name;
      const label = document.createElement('label');
      label.htmlFor = item.name;
      label.appendChild(document.createTextNode(`${item.name} (${item.unit})`));
      itemsDiv.appendChild(checkbox);
      itemsDiv.appendChild(label);
      itemsDiv.appendChild(document.createElement('br'));
    });
  }
  
  // Function to calculate total ingredients
  function calculateIngredients() {
    const tiffins = parseInt(document.getElementById('tiffins').value);
    const ingredientsSummary = document.getElementById('ingredients-summary');
    ingredientsSummary.innerHTML = '';
    
    items.forEach(item => {
      const checkbox = document.getElementById(item.name);
      if (checkbox.checked) {
        const quantity = parseFloat(item.defaultQuantity); // Assuming default quantity is always 0
        const totalQuantity = quantity * tiffins;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${totalQuantity} ${item.unit}`;
        ingredientsSummary.appendChild(listItem);
      }
    });
  }
  
  // Generate item selection checkboxes on page load
  window.onload = function() {
    generateItemCheckboxes();
  };
  