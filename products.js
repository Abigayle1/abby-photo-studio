const products = [
    { id: 'product1', name: 'Wedding Photography', price: 70 },
    { id: 'product2', name: 'Party Photography', price: 90 },
    { id: 'product3', name: 'Date Photography', price: 60 },
    { id: 'product4', name: 'Proposal Photography', price: 40 },
    { id: 'product5', name: 'Headshots', price: 20 },
    { id: 'product6', name: 'Graduation Photography', price: 100 },
    { id: 'product7', name: 'Corporate Event Photography', price: 150 },
    { id: 'product8', name: 'Family Portraits', price: 80 },
    { id: 'product9', name: 'Newborn Photography', price: 120 },
    { id: 'product10', name: 'Landscape Photography', price: 50 }
];

// Function to update quantities when the user selects them
function updateQuantities() {
    products.forEach(product => {
        const qty = document.getElementById(`${product.id}-qty`).value;
        product.quantity = qty === '' ? 0 : qty; 
    });
}


// Function to calculate invoice
function calculateInvoice() {
    updateQuantities();
    let subtotal = 0;
    const taxRate = 0.15; // 15% tax
    const discountRate = 0.1; // 10% discount on subtotal
    
    products.forEach(product => {
        subtotal += product.price * Number(product.quantity); // Convert to number 
    });

    const tax = subtotal * taxRate;
    const discountAmount = subtotal * discountRate;
    const total = subtotal + tax - discountAmount;

    return { subtotal, tax, discountAmount, total };
}


// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Calculate the invoice
    var invoice = calculateInvoice();

    // Save the invoice to local storage
    localStorage.setItem('invoice', JSON.stringify(invoice));

    // Filter products with quantity greater than 0
    var filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {
            filteredProducts.push(products[i]);
        }
    }
    localStorage.setItem('products', JSON.stringify(filteredProducts));

    // Redirect to the invoice page
    window.location.href = 'invoice.html';
});

// Cancel and Exit buttons 
document.getElementById('cancel-btn').addEventListener('click', () => {
    products.forEach(product => {
        document.getElementById(`${product.id}-qty`).value = 0;
    });
});

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'products.html'; 
});

// Logout button 
document.getElementById('logout-btn').addEventListener('click', () => {
    window.location.href = 'login.html';
});
