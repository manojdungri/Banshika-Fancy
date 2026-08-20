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
// BUY NOW
// ==========================

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


    if (!cartItems || !cartTotal) {

        return;

    }


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

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


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
// INCREASE QUANTITY
// ==========================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// ==========================
// DECREASE QUANTITY
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
// REMOVE FROM CART
// ==========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// ==========================
// SHOP NOW
// ==========================

function scrollToProducts() {

    const productsSection =
        document.getElementById(
            "products"
        );


    if (productsSection) {

        productsSection.scrollIntoView({

            behavior: "smooth"

        });

    }
}


// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (!searchInput) {

        return;

    }


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const productCards =
        document.querySelectorAll(
            ".product"
        );


    productCards.forEach(
        product => {

            const name =
                (
                    product.getAttribute(
                        "data-name"
                    ) || ""
                ).toLowerCase();


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


    const productsSection =
        document.getElementById(
            "products"
        );


    if (productsSection) {

        productsSection.scrollIntoView({

            behavior: "smooth"

        });

    }
}


// ==========================
// PRODUCT DETAILS
// ==========================

function showProductDetails(
    name,
    price,
    description
) {

    const modalName =
        document.getElementById(
            "modalName"
        );


    const modalPrice =
        document.getElementById(
            "modalPrice"
        );


    const modalDescription =
        document.getElementById(
            "modalDescription"
        );


    const productModal =
        document.getElementById(
            "productModal"
        );


    if (modalName) {

        modalName.innerText =
            name;

    }


    if (modalPrice) {

        modalPrice.innerText =
            price;

    }


    if (modalDescription) {

        modalDescription.innerText =
            description;

    }


    if (productModal) {

        productModal.style.display =
            "flex";

    }
}


// ==========================
// CLOSE PRODUCT DETAILS
// ==========================

function closeProductDetails() {

    const productModal =
        document.getElementById(
            "productModal"
        );


    if (productModal) {

        productModal.style.display =
            "none";

    }
}


// ==========================
// WHATSAPP ORDER
// ==========================

function orderOnWhatsApp() {

    // CART CHECK

    if (cart.length === 0) {

        alert(
            "Pehle cart mein product add karein 🛒"
        );

        return;

    }


    // CUSTOMER DETAILS

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


    // NAME VALIDATION

    if (
        customerName === ""
    ) {

        alert(
            "Please apna naam enter karein."
        );

        return;

    }


    // PHONE VALIDATION

    if (
        customerPhone.length !== 10 ||
        isNaN(customerPhone)
    ) {

        alert(
            "Please valid 10 digit mobile number enter karein."
        );

        return;

    }


    // ADDRESS VALIDATION

    if (
        customerAddress === ""
    ) {

        alert(
            "Please apna full address enter karein."
        );

        return;

    }


    // CITY VALIDATION

    if (
        customerCity === ""
    ) {

        alert(
            "Please apna city enter karein."
        );

        return;

    }


    // PINCODE VALIDATION

    if (
        customerPincode.length !== 6 ||
        isNaN(customerPincode)
    ) {

        alert(
            "Please valid 6 digit pincode enter karein."
        );

        return;

    }


    // ==========================
    // CREATE WHATSAPP MESSAGE
    // ==========================

    let message =
        "🛍️ *Banshika Fancy ORDER*";


    message +=
        "\n\n👤 *CUSTOMER DETAILS*";


    message +=
        "\nName: " +
        customerName;


    message +=
        "\nMobile: " +
        customerPhone;


    message +=
        "\n\n📦 *ORDER ITEMS*";


    let total = 0;


    cart.forEach(
        (item, index) => {

            const itemTotal =
                item.price *
                item.quantity;


            total +=
                itemTotal;


            message +=
                "\n\n" +
                (index + 1) +
                ". " +
                item.name;


            message +=
                "\n   Qty: " +
                item.quantity;


            message +=
                "\n   Price: ₹" +
                itemTotal;

        }
    );


    // TOTAL

    message +=
        "\n\n💰 *TOTAL: ₹" +
        total +
        "*";


    // DELIVERY ADDRESS

    message +=
        "\n\n🏠 *DELIVERY ADDRESS*";


    message +=
        "\nAddress: " +
        customerAddress;


    message +=
        "\nCity: " +
        customerCity;


    message +=
        "\nPincode: " +
        customerPincode;


    // PAYMENT

    message +=
        "\n\n💳 Payment: To be confirmed";


    // FINAL MESSAGE

    message +=
        "\n\n🙏 Please confirm my order.";


    // ==========================
    // WHATSAPP NUMBER
    // ==========================

    const phoneNumber =
        "917681004565";


    // ==========================
    // WHATSAPP URL
    // ==========================

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(
            message
        );


    // OPEN WHATSAPP

    window.location.href =
        whatsappURL;
}
