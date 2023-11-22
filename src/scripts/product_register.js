function validateForm() {
  const productId = document.getElementById('productId').value;
  const productDescription = document.getElementById('productDescription').value;
  const price = document.getElementById('price').value;
  const supplierUsername = document.getElementById('supplierUsername').value;
  const supplierStatus = document.querySelectorAll('input[name="supplierStatus"]:checked');
  const supplierEmail = document.getElementById('supplierEmail').value;

  let isValid = true;
  let errorMessages = '';

  // Product ID validation
  // I utilized my regular expessions knowledge to
  // create input validation
  const productIdRegex = /^\d{8}$/;

  errorMessages += '<h1 style="color: #FAA0A0;">Errors:</h1>';

  if (!productId.match(productIdRegex)) {
    errorMessages +=
      '<div class="error">- Product ID must be 8 digits long and contain only numbers.</div>';
    isValid = false;
  }

  // Product Description validation
  if (productDescription.length < 20) {
    errorMessages +=
      '<div class="error">- Product Description must be at least 20 characters long.</div>';
    isValid = false;
  }

  // Price validation
  if (!/^\d+$/.test(price) || price <= 0 || price >= 1000) {
    errorMessages +=
      '<div class="error">- Price must be a positive integer greater than 0 and less than 1000.</div>';
    isValid = false;
  }

  // Supplier Username validation
  if (!/^[A-Za-z][A-Za-z0-9]{3,}$/.test(supplierUsername)) {
    errorMessages +=
      '<div class="error">- Supplier Username must start with an alphabet and be at least 4 characters long.</div>';
    isValid = false;
  }

  // Supplier Status validation
  if (supplierStatus.length === 0) {
    errorMessages += '<div class="error">- Please select at least one Supplier Status.</div>';
    isValid = false;
  }

  // Supplier Email validation
  if (!document.getElementById('signup').checkValidity()) {
    errorMessages += '<div class="error">- Please enter a valid email address.</div>';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('signup').setAttribute('action', 'https://httpbin.org/post');
    document.getElementById('signup').submit();
  } else {
    document.getElementById('errorPanel').innerHTML = errorMessages;
  }
}
