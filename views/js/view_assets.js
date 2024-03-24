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
  if (!assetsContainer) {
    console.error('Assets container not found');
    return;
  }

  // Clear previous content
  assetsContainer.innerHTML = '';

  // Create the table element
  const table = document.createElement('table');
  table.classList.add('asset-table');

  // Create table header row
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  const descriptionHeader = document.createElement('th');
  descriptionHeader.textContent = 'Description';
  const actionHeader = document.createElement('th');
  actionHeader.textContent = 'Actions';
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(descriptionHeader);
  headerRow.appendChild(actionHeader);
  table.appendChild(headerRow);

  // Loop through each asset and create table rows to display them
  assets.forEach(asset => {
    // Create a table row for the asset
    const assetRow = document.createElement('tr');

    // Create table data cells for the asset's information
    const nameCell = document.createElement('td');
    nameCell.textContent = asset.name;
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = asset.description;
    const actionCell = document.createElement('td');
    actionCell.classList.add('asset-actions');

    // Create buttons for deleting and updating the asset
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => deleteAsset(asset.id));

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => updateAsset(asset.id));

    // Append buttons to the action cell
    actionCell.appendChild(deleteButton);
    actionCell.appendChild(updateButton);

    // Append cells to the row
    assetRow.appendChild(nameCell);
    assetRow.appendChild(descriptionCell);
    assetRow.appendChild(actionCell);

    // Append the row to the table
    table.appendChild(assetRow);
  });

  // Append the table to the assets container
  assetsContainer.appendChild(table);
}

  // Call fetchAssets function when the page loads
  window.onload = fetchAssets;
  
  // Function to create a row for each asset
function createAssetRow(asset) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = asset.name;
  row.appendChild(nameCell);

  const descriptionCell = document.createElement('td');
  descriptionCell.textContent = asset.description;
  row.appendChild(descriptionCell);

  const updateCell = document.createElement('td');
  const updateButton = document.createElement('button');
  updateButton.textContent = 'Update';
  updateButton.addEventListener('click', () => handleUpdate(asset.id));
  updateCell.appendChild(updateButton);
  row.appendChild(updateCell);

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => handleDelete(asset.id));
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);

  return row;
}

// Function to handle updating an asset
function handleUpdate(assetId) {
  // Implement logic to handle updating the asset with the given ID
}

// Function to handle deleting an asset
function handleDelete(assetId) {
  // Implement logic to handle deleting the asset with the given ID
}
