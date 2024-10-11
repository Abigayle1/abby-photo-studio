const products = [
    { name: 'Product 1', price: 50, quantity: 2 },
    { name: 'Product 2', price: 30, quantity: 1 },
    // Include other selected products
];

const taxRate = 0.15;
const discountRate = 0.1;

// Function to load the invoice
function loadInvoice() {
    const invoiceTableBody = document.querySelector('#invoice-table tbody');
    let subtotal = 0;

    products.forEach(product => {
        const productTotal = product.price * product.quantity;
        subtotal += productTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${productTotal.toFixed(2)}</td>
        `;
        invoiceTableBody.appendChild(row);
    });

    const tax = subtotal * taxRate;
    const discount = subtotal * discountRate;
    const total = subtotal + tax - discount;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('discount').textContent = discount.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);

    // Set the date
    const today = new Date();
    document.getElementById('invoice-date').textContent = today.toDateString();
}

// Cancel and Exit functionality
document.getElementById('cancel-btn').addEventListener('click', () => {
    window.location.href = 'products.html'; // Redirect back to product selection
});

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to home page
});

// Load the invoice when the page loads
window.onload = loadInvoice;
