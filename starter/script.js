/*************************************/ 
/*    STARTER CODE                   */
/*    No need to touch this code!    */
/*************************************/

/* Your credit card */
const creditCard = { balance: 0, limit: 2000 };

/* Products you can buy */
const products = [
    { name: "T-shirt", price: 20, numberPurchased: 0 },
    { name: "Handbag", price: 200, numberPurchased: 0 },
    { name: "Computer", price: 2000, numberPurchased: 0 }
];

/* Function to display the current amounts of everything in the DOM */
function displayBalances() {
    const balanceEl = document.querySelector(".card-balance");
    const myProductsEl = document.querySelector(".my-products");

    // Display the credit card balance
    balanceEl.innerText = "Balance: $" + creditCard.balance;

    // Display the products purchased
    myProductsEl.innerHTML = "";
    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product.name + ": " + product.numberPurchased;
        myProductsEl.appendChild(listItem);
    });
}

/* Function to buy a product with your credit card */
/* Takes a single product object as a parameter */
/* Returns a Promise */
function buyProduct(product) {
    return new Promise((resolve, reject) => {
        // Wait a second or two to simulate credit card processing delay
        const randomTime = Math.random() * 2000;
        setTimeout(processPayment, randomTime);

        function processPayment() {
            // If the price is within the credit card's limit,
            // 1) charge the card, 2) purchase the product, 3) resolve the promise
            if (creditCard.balance + product.price <= creditCard.limit) {
                creditCard.balance += product.price;
                product.numberPurchased++;
                resolve({
                    status: `Purchased ${product.name} for $${product.price}`,
                    timestamp: Date.now(),
                });
            }

            // Otherwise the price exceeds the credit card's limit, so reject the promise
            reject({
                status: `Declined purchase of ${product.name} for $${product.price}`,
                timestamp: Date.now()
            }); 
        }
    });
}

/*************************************/ 
/*    END OF STARTER CODE            */
/*    Start writing code below!      */
/*************************************/

displayBalances(); // You can call this pre-written function to update the DOM later

// buyProduct(products[0])
//     .then((result) => {
//         console.log(result.status)
//         displayBalances();
//     })
// buyProduct(products[1])
//     .then(result => {
//         console.log(result.status);
//         displayBalances();
//     })

// buyProduct(products[2])
// .catch(result => {
//     console.log(result.status);
//     displayBalances();
// })

// Promise.all([buyProduct(products[0]), buyProduct(products[1]), buyProduct(products[2])])
//     .then(values => {
//         console.log('purchases 3 products');
//         displayBalances();
//     })
//     .catch(values => {
//         console.log('failed to purchase all 3')
//         displayBalances();
//     })


function refundProduct(product) {
    return new Promise((resolve, reject) => {
        const randomTime = Math.random() * 2000;
        setTimeout(() => {
            if (!products.includes(product)){
            reject({
                status: "we don't own this product",
                timestamp: Date.now()
            })
            } else if (product.numberPurchased === 0) {
                reject({
                    status: "You haven't bought this product yet",
                    timestamp: Date.now()
                })
            }
             else {
                creditCard.balance -= product.price;
                product.numberPurchased -= 1;
                resolve({
                    status: `${product.name} has been refunded.
                    New Credit Card Balance: ${creditCard.balance}`
                });

            }}, randomTime)
    })
}

buyProduct(products[0])
    .then((result) => {
        console.log(result.status)
        displayBalances();
    })
    .then(()=>{
        return buyProduct(products[1])
    })
    .then(result => {
            console.log(result.status);
            displayBalances();
    })
    .then(()=>{
        return refundProduct(products[1])
    })
    .then(result => {
        console.log(result.status);
        displayBalances();
    })
    .then(()=>{
        return refundProduct(products[2])
    })
    .catch(result =>{
        console.log(result.status);
        displayBalances();
    })
    .then(()=>{
        return refundProduct({ name: "laptop", price: 2000, numberPurchased: 0 })
    })
    .catch(result =>{
        console.log(result.status);
        displayBalances();
    })
    



