$(document).ready(function() {
    // Handle form submission
    $('#addAssetForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form data
      var formData = {
        assetName: $('#assetName').val(),
        assetDescription: $('#assetDescription').val()
      };
  
      // Send form data to the server
      $.ajax({
        type: 'POST',
        url: '/assets/add',
        data: formData,
        success: function(response) {
          // Display success message or redirect to another page
          console.log('Asset added successfully:', response);
          alert('Asset added successfully!');
          window.location.href = 'view_assets.html'; // Redirect to view assets page
        },
        error: function(err) {
          // Handle errors
          console.error('Error adding asset:', err);
          alert('Error adding asset. Please try again.');
        }
      });
    });
  });
  