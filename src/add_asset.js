document.getElementById('addAssetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const assetName = document.getElementById('assetName').value;
    const assetDescription = document.getElementById('assetDescription').value;

    // Send data to backend
    fetch('/assets', {
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
        alert(data.message);
        // Optionally clear the form fields
        document.getElementById('assetName').value = '';
        document.getElementById('assetDescription').value = '';
    })
    .catch(error => {
        console.error(error);
        // Display error message
        alert('Failed to add asset');
    });
});
