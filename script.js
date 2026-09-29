// ===============================
// CART
// ===============================

let cart = [];


// Add product to cart
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " added to cart!");
}


// Update cart
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    } else {

        cart.forEach((item, index) => {

            total += item.price * item.quantity;
            count += item.quantity;

            const div = document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>
                        ₹${item.price} × ${item.quantity}
                    </p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    ✕
                </button>
            `;

            cartItems.appendChild(div);

        });

    }

    cartCount.textContent = count;
    cartTotal.textContent = total;
}


// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Open cart
function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");
}


// Close cart
function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("show");
}


// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Thank you for your order! ☕\n\n" +
        "Your order has been received."
    );

    cart = [];

    updateCart();

    closeCart();
}


// ===============================
// MENU FILTER
// ===============================

function filterMenu(category, button) {

    const cards =
        document.querySelectorAll(".menu-card");

    const buttons =
        document.querySelectorAll(".category");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("show");

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList.remove("show");

    });

});


// ===============================
// CONTACT FORM
// ===============================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! ☕\n\n" +
        "Your message has been sent successfully."
    );

    event.target.reset();

}