// Function to load the invoice
function loadInvoice() {
    // Get products from storage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const invoiceTableBody = document.querySelector('#invoice-table tbody');
    let subtotal = 0;
// Calculations
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

    const taxRate = 0.15;
    const discountRate = 0.1;
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

// Cancel and Exit 
document.getElementById('cancel-btn').addEventListener('click', () => {
    window.location.href = 'products.html'; // Redirect back to product selection
});

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'products.html'; // Redirect to home page
});

// Load the invoice when the page loads
window.onload = loadInvoice;
