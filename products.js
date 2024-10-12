
const products = [
    { id: 'product1', name: 'Product 1', price: 70, quantity: 15 },
    { id: 'product2', name: 'Product 2', price: 90, quantity: 20 },
    { id: 'product3', name: 'Product 3', price: 60, quantity: 10 },
    { id: 'product4', name: 'Product 4', price: 40, quantity: 5 },
    { id: 'product5', name: 'Product 5', price: 20, quantity: 10 },
    // Add more products here
];

// Function to update quantities when user selects them
function updateQuantities() {
    products.forEach(product => {
        const qty = document.getElementById(`${product.id}-qty`).value;
        product.quantity = qty ? parseInt(qty) : 0;
    });
}

// Function to calculate invoice
function calculateInvoice() {
    updateQuantities();
    let subtotal = 0;
    let taxRate = 0.15; // 15% tax
    let discount = 0.1; // 10% discount on subtotal
    
    products.forEach(product => {
        subtotal += product.price * product.quantity;
    });

    const tax = subtotal * taxRate;
    const discountAmount = subtotal * discount;
    const total = subtotal + tax - discountAmount;

    return { subtotal, tax, discountAmount, total };
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    const invoice = calculateInvoice();
    alert(`Subtotal: $${invoice.subtotal}\nTax: $${invoice.tax}\nDiscount: $${invoice.discountAmount}\nTotal: $${invoice.total}`);
    // Redirect to invoice page or display it on the current page
    window.location.href = 'invoice.html'; // Redirect to homepage

});

// Cancel and Exit buttons functionality
document.getElementById('cancel-btn').addEventListener('click', () => {
    products.forEach(product => {
        document.getElementById(`${product.id}-qty`).value = 0;
    });
});

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'products.html'; // Redirect to homepage
});

// Logout button functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    // Perform logout logic here (e.g., clear user session, cookies, etc.)
    alert('You have logged out successfully.');
    window.location.href = 'login.html'; // Redirect to the login page
});
