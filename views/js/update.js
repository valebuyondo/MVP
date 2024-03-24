// Function to update an asset by ID
function updateAsset(id) {
    const newName = prompt("Enter the new name for the asset:");
    const newDescription = prompt("Enter the new description for the asset:");
  
    if (newName && newDescription) {
      fetch(`/routes/assetRoute/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName, description: newDescription })
      })
      .then(response => {
        if (response.ok) {
          fetchAssets(); // Refresh the asset list after updating
          alert('Asset updated successfully');
        } else {
          throw new Error('Failed to update asset');
        }
      })
      .catch(error => {
        console.error('Error updating asset:', error);
        alert('Failed to update asset');
      });
    }
  }
  