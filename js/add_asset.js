document.getElementById('addAssetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const assetName = document.getElementById('assetName').value;
    const assetDescription = document.getElementById('assetDescription').value;
    
    // Perform validation if needed
    
    // Send data to backend
    fetch('/api/assets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: assetName, description: assetDescription })
    })
    .then(response => {
        if (response.ok) {
            alert('Asset added successfully!');
            // Optionally clear the form fields
            document.getElementById('assetName').value = '';
            document.getElementById('assetDescription').value = '';
        } else {
            throw new Error('Failed to add asset');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Failed to add asset');
    });
});
