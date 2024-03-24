// Add this function to create and display toast messages
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');

    // Create a new toast element
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type);
    toast.textContent = message;

    // Add the toast to the container
    toastContainer.appendChild(toast);

    // Remove the toast after a delay
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000); // Adjust the delay as needed
}

// Add event listener for form submission
document.getElementById('addAssetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const assetName = document.getElementById('assetName').value;
    const assetDescription = document.getElementById('assetDescription').value;

    // Send data to backend
    fetch('/routes/assetRoute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: assetName, description: assetDescription })
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse JSON response
        } else {
            throw new Error('Failed to add asset');
        }
    })
    .then(data => {
        // Display success message
        showToast(data.message, 'success');
        // Optionally clear the form fields
        document.getElementById('assetName').value = '';
        document.getElementById('assetDescription').value = '';
    })
    .catch(error => {
        console.error(error);
        // Display error message
        showToast('Failed to add asset', 'error');
    });
});
