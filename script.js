// script.js

let cart = [];

// ADD TO CART

function addToCart(productName, price){

    cart.push({

        name: productName,
        price: price

    });

    updateCart();

}

// UPDATE CART

function updateCart(){

    // CART COUNT

    document.getElementById(
    "cart-count"
    ).innerText = cart.length;

    // CART ITEMS

    let cartItems =
    document.getElementById(
    "cart-items"
    );

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item)=>{

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <p>${item.name}</p>

            <span>₹${item.price}</span>

        </div>

        `;

    });

    document.getElementById(
    "cart-total"
    ).innerText =

    "Total: ₹" + total;
}

// TOGGLE CART

function toggleCart(){

    document.getElementById(
    "cart-sidebar"
    ).classList.toggle(
    "active"
    );

}
// BUY GAME MESSAGE

function buyGame(gameName){

    alert(
        "🎉 " + gameName +
        " Purchased Successfully!"
    );

}