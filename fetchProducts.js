async function fetchProducts() {
  const container = document.getElementById('productContainer');
  try {
    const response = await fetch('products.json'); // تأكد من المسار الصحيح
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    container.innerHTML = '<p>حدث خطأ في تحميل المنتجات. يرجى المحاولة لاحقاً.</p>';
  }
}

function displayProducts(products) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p>لا توجد منتجات لعرضها.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>سعر: ${product.price}</p>
            <p>وصف: ${product.description}</p>
        `;
    container.appendChild(productDiv);
  });
}

window.onload = fetchProducts;