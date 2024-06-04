// Fetch category ID from URL parameters
const params = window.location.search;
const paramString = new URLSearchParams(params);
const categoryID = paramString.get('category_id');
console.log(categoryID);

// Determine which function to call based on the category ID
document.getElementById(categoryID).checked = true;
if (categoryID == 0) {
  getAllProduct();
} else {
  getProductByCategory(categoryID);
}

let baseUrl = 'http://localhost:1338';
// Function to fetch products by category
async function getProductByCategory(catID) {
  const url = `http://localhost:1338/api/products?filters[CategoryID][id][$eq]=${catID}&populate=*`;
  const apiToken = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';
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
  const url = `http://localhost:1338/api/products?pagination[pageSize]=34&populate=*`;
  const apiToken = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';
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
    <div class="card-container">
    <div class="card-card">
      <div class="row">
        <div class="col-md-4">
          <div class="card position-relative">
            <img src="${baseUrl}${product.attributes.images.data[0].attributes.url}" class="card-img-top" alt="">
            ${product.attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
            <div class="card-body">
              <h5 class="card-title">${product.attributes.Name}</h5>
              <p class="card-text">Quantity: ${product.attributes.Quantity} kg</p>
              <p class="card-text">Price: $${product.attributes.Price} per kg</p>
              <p class="card-text">Province: ${product.attributes.OriginProvince}</p>
              <hr>
              <div class="btn"><a href="/pages/detail/detail.html?id=${product.id}"><i class="fa-solid fa-cart-shopping"></i></a></div>
              <div class="btn heart"><i class="fa-solid fa-heart"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  });
}

// Function to handle category click
function onClickCategory(catID) {
  
  if (catID == 0) {
    getAllProduct();
  } else {
    getProductByCategory(catID);
  }
  // Update URL parameter
  const url = new URL(window.location);
  url.searchParams.set('category_id', catID);
  window.history.pushState({}, '', url);
}
