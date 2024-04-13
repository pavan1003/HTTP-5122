function calculate() {
  const tiffins = parseInt(document.getElementById('tiffins').value);
  const items = document.querySelectorAll('.item');
  let output = '';

  items.forEach((item, index) => {
    const itemName = item.querySelector('input[type="text"]').value;
    const quantity = parseFloat(item.querySelector('input[type="number"]').value);
    const totalQuantity = quantity * tiffins;
    output += `Item ${index + 1}: ${itemName} - Quantity: ${totalQuantity}<br>`;
  });

  document.getElementById('output').innerHTML = output;
}
