// Fetch category ID from URL parameters
const params = window.location.search;
const paramString = new URLSearchParams(params);
const categoryID = paramString.get('category_id');
console.log(categoryID);

// Determine which function to call based on the category ID
if (categoryID) {
  getProductByCategory(categoryID);
} else {
  getAllProduct();
}

// Function to fetch products by category
async function getProductByCategory(catID) {
  const url = `https://jolly-angel-aabddcd512.strapiapp.com/api/products?filters[CategoryID][id][$eq]=${catID}&populate=*`;
  const apiToken = '98c9896be37b9f0448a29d269ebf385359d769807f0be6fa6d28094427f75a316c3d7acd3f8e4b782ee5f81ab16c1d171c6ae715ee024ecb02c7d10ddc0579412582ea9cf602a3dc9f170c7abb50b1608f38b24cf5d6186a1b2eb399919d247c09778073dc64bccb3e6ffbfbf9f94e3e5b95e352979ba082c36f4bc182089512';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`, 
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    displayProduct(result.data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to fetch all products
async function getAllProduct(){
  const url = `https://jolly-angel-aabddcd512.strapiapp.com/api/products?pagination[pageSize]=34&populate=*`;
  const apiToken = '98c9896be37b9f0448a29d269ebf385359d769807f0be6fa6d28094427f75a316c3d7acd3f8e4b782ee5f81ab16c1d171c6ae715ee024ecb02c7d10ddc0579412582ea9cf602a3dc9f170c7abb50b1608f38b24cf5d6186a1b2eb399919d247c09778073dc64bccb3e6ffbfbf9f94e3e5b95e352979ba082c36f4bc182089512';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`, 
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    displayProduct(result.data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display products
function displayProduct(data) {
  console.log('Products data:', data);
  const card = document.getElementById('container1');
  card.innerHTML = ''; // Clear existing content
  data.forEach(product => {
    card.innerHTML += `
      <div class="box">
        <img src="${product.attributes.images.data[0].attributes.formats.thumbnail.url}" alt="">
        ${product.attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
        <div class="box-1">
          <div class="left">
            <h2>${product.attributes.Name}</h2>
            <p>Price: $${product.attributes.Price} per kg</p>
            <p>Quantity: ${product.attributes.Quantity} kg</p>
            <p>Province: ${product.attributes.OriginProvince}</p>
          </div>
          <button class="btn-b"><a href="">Add to cart</a></button>
        </div>
      </div>
    `;
  });
}

// Function to handle category click
function onClickCategory(catID) {
  if (catID === 'all') {
    getAllProduct();
  } else {
    getProductByCategory(catID);
  }
  // Update URL parameter
  const url = new URL(window.location);
  url.searchParams.set('category_id', catID);
  window.history.pushState({}, '', url);
}
