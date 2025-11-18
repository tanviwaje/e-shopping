const products = [
    { id: 1, name: "Wireless Headphones", price: 39.99, img: "https://i.imgur.com/3ZQ3Z5F.jpg" },
    { id: 2, name: "Smart Watch", price: 59.99, img: "https://i.imgur.com/kG8wQ9D.jpg" },
    { id: 3, name: "Sports Shoes", price: 49.99, img: "https://i.imgur.com/uwNw5Yi.jpg" },
    { id: 4, name: "Sunglasses", price: 19.99, img: "https://i.imgur.com/jv7oapK.jpg" }
];

let cart = [];

function loadProducts() {
    const list = document.getElementById("product-list");

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>$${p.price.toFixed(2)}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        list.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

loadProducts();
