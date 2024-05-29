const url = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*&pagination[CategoryID]=1&pagination[pageSize]=6';
const apiToken = '0296b85241287136fd22a3dca55da1bc53cd23222b8e81b4fba63b7370a4d0ef8c959a5de21afdfa20e847c1bb2745f8cd4a814fc9e3792b833a99576615bc82bcc1a715739f30bc434f5a59291d2b0d9db871dbb426a1cbf7ad41a5f5d5a2e1059465d02c83c05bd6bca338ab8335c0a3e0a14270b7ec03384b96f9346c1c45';

async function getApi() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

getApi()
  .then(data => {
    console.log(data)
    const card = document.getElementById('category-1');
    for (let i = 0; i <data.length; i++) { 
      if (data[i].id) {
        card.innerHTML += `
        <div class="card-container">
          <div class="card-card">
            <div class="row">
              <div class="col-md-4">
                <div class="card position-relative">
                  <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <div class="btn"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="btn heart"><i class="fa-solid fa-heart"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
    }
    console.log('Products data:', data);
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });

//vegatables//
const url1 = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*&filters[CategoryID]=2&pagination[pageSize]=6';
const apiToken1 = '0296b85241287136fd22a3dca55da1bc53cd23222b8e81b4fba63b7370a4d0ef8c959a5de21afdfa20e847c1bb2745f8cd4a814fc9e3792b833a99576615bc82bcc1a715739f30bc434f5a59291d2b0d9db871dbb426a1cbf7ad41a5f5d5a2e1059465d02c83c05bd6bca338ab8335c0a3e0a14270b7ec03384b96f9346c1c45';

async function getApi1() {
  try {
    const response = await fetch(url1, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken1}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data; // Assuming the products are under `result.data`
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

getApi1()
  .then(data => {
    console.log(data);
    const card = document.getElementById('category-2');
    for (let i = 0; i <data.length; i++) { 
      if (data[i].id) {
        card.innerHTML += `
        <div class="card-container">
          <div class="card-card">
            <div class="row">
              <div class="col-md-4">
                <div class="card position-relative">
                  <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <div class="btn"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="btn heart"><i class="fa-solid fa-heart"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
    }
    console.log('Products data:', data);
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });

  //trator//
const url2 = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*&filters[CategoryID]=3&pagination[pageSize]=6';
const apiToken2 = '0296b85241287136fd22a3dca55da1bc53cd23222b8e81b4fba63b7370a4d0ef8c959a5de21afdfa20e847c1bb2745f8cd4a814fc9e3792b833a99576615bc82bcc1a715739f30bc434f5a59291d2b0d9db871dbb426a1cbf7ad41a5f5d5a2e1059465d02c83c05bd6bca338ab8335c0a3e0a14270b7ec03384b96f9346c1c45';

async function getApi2() {
  try {
    const response = await fetch(url2, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken2}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data; // Assuming the products are under `result.data`
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

getApi2()
  .then(data => {
    console.log(data);
    const card = document.getElementById('category-3');
    for (let i = 0; i <data.length; i++) { 
      if (data[i].id) {
        card.innerHTML += `
        <div class="card-container">
          <div class="card-card">
            <div class="row">
              <div class="col-md-4">
                <div class="card position-relative">
                  <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <div class="btn"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="btn heart"><i class="fa-solid fa-heart"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
    }
    console.log('Products data:', data);
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });

    //trator//
const url3 = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*&filters[CategoryID]=4&pagination[pageSize]=6';
const apiToken3 = '0296b85241287136fd22a3dca55da1bc53cd23222b8e81b4fba63b7370a4d0ef8c959a5de21afdfa20e847c1bb2745f8cd4a814fc9e3792b833a99576615bc82bcc1a715739f30bc434f5a59291d2b0d9db871dbb426a1cbf7ad41a5f5d5a2e1059465d02c83c05bd6bca338ab8335c0a3e0a14270b7ec03384b96f9346c1c45';

async function getApi3() {
  try {
    const response = await fetch(url3, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken3}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data; // Assuming the products are under `result.data`
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

getApi3()
  .then(data => {
    console.log(data);
    const card = document.getElementById('category-4');
    for (let i = 0; i <data.length; i++) { 
      if (data[i].id) {
        card.innerHTML += `
        <div class="card-container">
          <div class="card-card">
            <div class="row">
              <div class="col-md-4">
                <div class="card position-relative">
                  <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <div class="btn"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="btn heart"><i class="fa-solid fa-heart"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
    }
    console.log('Products data:', data);
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });
