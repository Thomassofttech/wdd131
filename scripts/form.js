// Product data array
const products = [
    { id: 'prod001', name: 'Ultra HD Smart TV' },
    { id: 'prod002', name: 'Wireless Noise-Canceling Headphones' },
    { id: 'prod003', name: 'Smartphone Pro Max' },
    { id: 'prod004', name: 'Laptop EliteBook' },
    { id: 'prod005', name: 'Fitness Tracker Band' },
    { id: 'prod006', name: 'Smart Home Hub' },
    { id: 'prod007', name: '4K Action Camera' },
    { id: 'prod008', name: 'Ergonomic Office Chair' },
    { id: 'prod009', name: 'Air Purifier Pro' },
    { id: 'prod010', name: 'Electric Kettle Smart' }
];

// Function to populate product dropdown
function populateProductDropdown() {
    const productSelect = document.getElementById('productName');
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Function to handle review counter
function updateReviewCounter() {
    const counterElement = document.getElementById('reviewCounter');
    
    if (counterElement) {
        // Get current count from localStorage or initialize to 0
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        
        // Increment the count
        reviewCount = parseInt(reviewCount) + 1;
        
        // Save back to localStorage
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display the count
        counterElement.textContent = `You've submitted ${reviewCount} review${reviewCount !== 1 ? 's' : ''} in total.`;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateProductDropdown();
    updateReviewCounter();
    
    // Set minimum date to today for date picker
    const dateInput = document.getElementById('installDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('max', today);
    }
});