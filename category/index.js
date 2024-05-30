const apiUrl = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*';
const apiToken = '98c9896be37b9f0448a29d269ebf385359d769807f0be6fa6d28094427f75a316c3d7acd3f8e4b782ee5f81ab16c1d171c6ae715ee024ecb02c7d10ddc0579412582ea9cf602a3dc9f170c7abb50b1608f38b24cf5d6186a1b2eb399919d247c09778073dc64bccb3e6ffbfbf9f94e3e5b95e352979ba082c36f4bc182089512';

async function fetchCategories() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchCategories()
.then(data =>{
    console.log(data);
})
.then(error =>{
    console.error('error geting data:',error);
});


let params = new URLSearchParams(document.location.search);
let categoryId = params.get("CategoryID");
console.log(categoryId);

const url3 = 'https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*&pagination[pageSize]=34';
const apiToken3 = '98c9896be37b9f0448a29d269ebf385359d769807f0be6fa6d28094427f75a316c3d7acd3f8e4b782ee5f81ab16c1d171c6ae715ee024ecb02c7d10ddc0579412582ea9cf602a3dc9f170c7abb50b1608f38b24cf5d6186a1b2eb399919d247c09778073dc64bccb3e6ffbfbf9f94e3e5b95e352979ba082c36f4bc182089512';

async function getApi() {
  try {
    const response = await fetch(url3, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken3}`, // Corrected formatting of the Authorization header
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.data; // Assuming the products are under result.data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

getApi()
  .then(data => {
    console.log('Products data:', data);
    const card = document.getElementById('container1');
      for (let i = 0; i < data.length; i++) {
        if(data[i].id){
        card.innerHTML += `
        
            
            
          <div class="box">
          
            <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" alt="">
            <div class="box-1">
              <div class="left">
                <h2>${data[i].attributes.Name}</h2>
                <p>Price: $${data[i].attributes.Price} per kg</p>
                <p>Quantity: ${data[i].attributes.Quantity} kg</p>
                <p>Province: ${data[i].attributes.OriginProvince}</p>
              </div>
              <button class="btn-b"><a href="">Read more</a></button>
            </div>
          </div>
        
        `;
      }
    }
  })
  .catch(error => {
    console.error('Error getting products data:', error);
  });


