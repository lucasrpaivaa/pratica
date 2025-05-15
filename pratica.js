const accessories = [
    { name: "Capa de Silicone Premium", price: 89.90, image: "capadesilicone.png" },
    { name: "Película de Vidro 9D", price: 49.90, image: "pelicula.png" },
    { name: "Carregador Turbo 25W", price: 119.90, image: "carregador.png" }
  ];
  
  const cart = [];
  
  function renderAccessories() {
    const container = document.getElementById('accessoryList');
    accessories.forEach(acc => {
      const div = document.createElement('div');
      div.className = 'accessory-card';
      div.innerHTML = `
        <img src="${acc.image}" alt="${acc.name}">
        <p>${acc.name}</p>
        <button onclick="addToCart('${acc.name}', ${acc.price})">Adicionar</button>
      `;
      container.appendChild(div);
    });
  }
  
  function addToCart(name, price = 0) {
    cart.push({ name, price });
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `<span>${item.name}</span><span>R$ ${item.price.toFixed(2)}</span>`;
      cartItems.appendChild(itemDiv);
      total += item.price;
    });
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('cartTotal').innerText = total.toFixed(2);
  }
  
  function toggleCart() {
    document.getElementById('cartModal').classList.toggle('active');
  }
  
  function checkout() {
    alert("Compra finalizada com sucesso! Obrigado por comprar conosco.");
    cart.length = 0;
    updateCart();
    toggleCart();
  }
  
  renderAccessories();  