
const url = 'http://localhost:1338/api/products?populate=*&filters[CategoryID]=1&pagination[pageSize]=6';
const apiToken = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

let baseUrl = 'http://localhost:1338';

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
                  <img src="${baseUrl}${data[i].attributes.images.data[0].attributes.url}" class="card-img-top" alt="">
                  ${data[i].attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <hr>
                    <div class="btn"><a href="/pages/detail/detail.html?id=${data[i].id}"><i class="fa-solid fa-cart-shopping"></i></a></div>
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
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });

//vegatables//
const url1 = 'http://localhost:1338/api/products?populate=*&filters[CategoryID]=2&pagination[pageSize]=6';
const apiToken1 = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

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
                  <img src="${baseUrl}${data[i].attributes.images.data[0].attributes.url}" class="card-img-top" alt="">
                  ${data[i].attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} per kg</p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <hr>
                    <div class="btn"><a href="/pages/detail/detail.html?id=${data[i].id}"><i class="fa-solid fa-cart-shopping"></i></a></div>
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
const url2 = 'http://localhost:1338/api/products?populate=*&filters[CategoryID]=3&pagination[pageSize]=6';
const apiToken2 = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

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
                  <img src="${baseUrl}${data[i].attributes.images.data[0].attributes.url}" class="card-img-top" alt="">
                  ${data[i].attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} </p>
                    <p class="card-text">Price: $${data[i].attributes.Price}<span style="color:red;"> ១គ្រឿង</span></p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <hr>
                    <div class="btn"><a href="/pages/detail/detail.html?id=${data[i].id}"><i class="fa-solid fa-cart-shopping"></i></a></div>
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
const url3 = 'http://localhost:1338/api/products?populate=*&filters[CategoryID]=4&pagination[pageSize]=6';
const apiToken3 = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

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
    console.log("===========================")
    const card = document.getElementById('category-4');
    for (let i = 0; i <data.length; i++) { 
      console.log("=====", data[i].attributes.images.data[0].attributes.url);
      if (data[i].id) {
        card.innerHTML += `
        <div class="card-container">
          <div class="card-card">
            <div class="row">
              <div class="col-md-4">
                <div class="card position-relative">
                  <img src="${baseUrl}${data[i].attributes.images.data[0].attributes.url}" class="card-img-top" alt="">
                  ${data[i].attributes.Organic ? '<span class="badge organic-badge">Organic</span>' : ''}
                  <div class="card-body">
                    <h5 class="card-title">${data[i].attributes.Name}</h5>
                    <p class="card-text">Quantity: ${data[i].attributes.Quantity} kg</p>
                    <p class="card-text">Price: $${data[i].attributes.Price} <span style="color:red;">១ការ៉ុង​​​</span>​ </p>
                    <p class="card-text">Province: ${data[i].attributes.OriginProvince}</p>
                    <hr>
                    <div class="btn"><a href="/pages/detail/detail.html?id=${data[i].id}"><i class="fa-solid fa-cart-shopping"></i></a></div>
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

