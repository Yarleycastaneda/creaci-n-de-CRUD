// Simulación de datos (normalmente se conectaría con una base de datos)
let items = [];

// Función para mostrar los ítems en la lista
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item}`;
    
    // Botón para borrar un ítem
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.onclick = () => {
      deleteItem(index);
      displayItems();
    };
    
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  });
}

// Función para agregar un ítem
function addItem(item) {
  items.push(item);
}

// Función para borrar un ítem
function deleteItem(index) {
  items.splice(index, 1);
}

// Manejar el envío del formulario
const form = document.getElementById('crudForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const itemNameInput = document.getElementById('itemName');
  const itemName = itemNameInput.value.trim();

  if (itemName !== '') {
    addItem(itemName);
    itemNameInput.value = '';
    displayItems();
  } else {
    alert('Por favor, introduce un nombre para el ítem.');
  }
});

// Mostrar los ítems al cargar la página
displayItems();