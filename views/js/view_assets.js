// view_assets.js

// Function to fetch assets from the backend API
function fetchAssets() {
    fetch('/routes/assetRoute') // Assuming this is the endpoint to fetch assets
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse JSON response
        } else {
          throw new Error('Failed to fetch assets');
        }
      })
      .then(data => {
        // Call function to update HTML with the retrieved assets
        updateAssetsList(data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
        // Display error message to user
        alert('Failed to fetch assets. Please try again later.');
      });
  }
  
  // Function to update HTML with the retrieved assets
  function updateAssetsList(assets) {
    const assetsContainer = document.getElementById('assetsContainer');
    assetsContainer.innerHTML = ''; // Clear previous content
    
    // Loop through each asset and create HTML elements to display them
    assets.forEach(asset => {
      const assetElement = document.createElement('div');
      assetElement.classList.add('asset');
      
      const nameElement = document.createElement('h3');
      nameElement.textContent = asset.name;
      
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = asset.description;
      
      assetElement.appendChild(nameElement);
      assetElement.appendChild(descriptionElement);
      
      assetsContainer.appendChild(assetElement);
    });
  }
  
  // Call fetchAssets function when the page loads
  window.onload = fetchAssets;
  