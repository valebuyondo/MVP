// Function to delete an asset by ID
function deleteAsset(id) {
    if (confirm("Are you sure you want to delete this asset?")) {
      fetch(`/routes/assetRoute/${id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          fetchAssets(); // Refresh the asset list after deletion
          alert('Asset deleted successfully');
        } else {
          throw new Error('Failed to delete asset');
        }
      })
      .catch(error => {
        console.error('Error deleting asset:', error);
        alert('Failed to delete asset');
      });
    }
  }
  