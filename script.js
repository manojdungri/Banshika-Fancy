let cart = [];


// ==========================
// PRODUCTS
// ==========================

const products = [

    {
        name: "Beautiful Earrings",
        price: 299,
        category: "earrings",
        image: "images/earrings.jpg",
        description:
            "Beautiful stylish earrings perfect for daily wear and special occasions."
    },

    {
        name: "Beautiful Chain",
        price: 499,
        category: "chain",
        image: "images/chain.jpg",
        description:
            "Elegant and stylish chain suitable for parties, functions and daily wear."
    },

    {
        name: "Beautiful Bracelet",
        price: 399,
        category: "bracelet",
        image: "images/bracelet.jpg",
        description:
            "Beautiful bracelet with a stylish look, perfect for gifting and everyday fashion."
    }

];


// ==========================
// ADD TO CART
// ==========================

function addToCart(name, price) {

    const existingProduct =
        cart.find(
            item => item.name === name
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    updateCart();


    alert(
        name +
        " Cart mein add ho gaya 🛒"
    );
}


// ==========================
// UPDATE CART
// ==========================

function updateCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );

    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.innerText =
            "Total: ₹0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(
        (item, index) => {

            total +=
                item.price *
                item.quantity;


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </p>

                </div>


                <div>

                    <button
                        onclick="
                        decreaseQuantity(${index})
                        "
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="
                        increaseQuantity(${index})
                        "
                    >
                        +
                    </button>


                    <button
                        onclick="
                        removeFromCart(${index})
                        "
                    >
                        Remove
                    </button>

                </div>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    cartTotal.innerText =
        "Total: ₹" + total;
}


// ==========================
// QUANTITY + 
// ==========================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// ==========================
// QUANTITY -
// ==========================

function decreaseQuantity(index) {

    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();
}


// ==========================
// REMOVE
// ==========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// ==========================
// SHOP NOW
// ==========================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({

            behavior: "smooth"

        });
}


// ==========================
// SEARCH
// ==========================

function searchProducts() {

    const searchText =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    const productCards =
        document.querySelectorAll(
            ".product"
        );


    productCards.forEach(
        product => {

            const name =
                product
                    .getAttribute(
                        "data-name"
                    )
                    .toLowerCase();


            if (
                name.includes(
                    searchText
                )
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        }
    );
}


// ==========================
// CATEGORY FILTER
// ==========================

function filterProducts(category) {

    const productCards =
        document.querySelectorAll(
            ".product"
        );


    productCards.forEach(
        product => {

            const productCategory =
                product.getAttribute(
                    "data-category"
                );


            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        }
    );


    document
        .getElementById("products")
        .scrollIntoView({

            behavior: "smooth"

        });
}


// ==========================
// PRODUCT DETAILS
// ==========================

function showProductDetails(
    name,
    price,
    description
) {

    document
        .getElementById(
            "modalName"
        )
        .innerText = name;


    document
        .getElementById(
            "modalPrice"
        )
        .innerText = price;


    document
        .getElementById(
            "modalDescription"
        )
        .innerText = description;


    document
        .getElementById(
            "productModal"
        )
        .style.display =
            "flex";
}


// ==========================
// CLOSE DETAILS
// ==========================

function closeProductDetails() {

    document
        .getElementById(
            "productModal"
        )
        .style.display =
            "none";
}


// ==========================
// WHATSAPP ORDER
// ==========================

function orderOnWhatsApp() {

    if (cart.length === 0) {

        alert(
            "Pehle cart mein product add karein 🛒"
        );

        return;
    }


    const customerName =
        document
            .getElementById(
                "customerName"
            )
            .value
            .trim();


    const customerPhone =
        document
            .getElementById(
                "customerPhone"
            )
            .value
            .trim();


    const customerAddress =
        document
            .getElementById(
                "customerAddress"
            )
            .value
            .trim();


    const customerCity =
        document
            .getElementById(
                "customerCity"
            )
            .value
            .trim();


    const customerPincode =
        document
            .getElementById(
                "customerPincode"
            )
            .value
            .trim();


    if (customerName === "") {

        alert(
            "Please apna naam enter karein."
        );

        return;
    }


    if (
        customerPhone.length !== 10 ||
        isNaN(customerPhone)
    ) {

        alert(
            "Please valid 10 digit mobile number enter karein."
        );

        return;
    }


    if (customerAddress === "") {

        alert(
            "Please apna full address enter karein."
        );

        return;
    }


    if (customerCity === "") {

        alert(
            "Please apna city enter karein."
        );

        return;
    }


    if (
        customerPincode.length !== 6 ||
        isNaN(customerPincode)
    ) {

        alert(
            "Please valid 6 digit pincode enter karein."
        );

        return;
    }


    let message =
        "🛍️ *Banshika Fancy Order*";


    message +=
        "\n\n👤 Customer: " +
        customerName;


    message +=
        "\n📱 Mobile: " +
        customerPhone;


    message +=
        "\n🏠 Address: " +
        customerAddress;


    message +=
        "\n🏙️ City: " +
        customerCity;


    message +=
        "\n📮 Pincode: " +
        customerPincode;


    message +=
        "\n\n💎 *Products:*";


    let total = 0;


    cart.forEach(
        item => {

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            message +=
                "\n\n• " +
                item.name;


            message +=
                "\n  Quantity: " +
                item.quantity;


            message +=
                "\n  Price: ₹" +
                itemTotal;

        }
    );


    message +=
        "\n\n💰 *Total: ₹" +
        total +
        "*";


    message +=
        "\n\nPlease confirm my order. 🙏";


    const phoneNumber =
        "917681004565";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(
            message
        );


    window.location.href =
        whatsappURL;
}
function buyNow(name, price) {

    cart = [];

    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

    updateCart();

    document
        .getElementById("cart")
        .scrollIntoView({
            behavior: "smooth"
        });
}