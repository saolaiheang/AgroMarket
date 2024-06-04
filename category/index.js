
  

const params = window.location.search;
const paramString = new URLSearchParams(params);
const categoryID = paramString.get('category_id');
console.log(categoryID);

if (categoryID) {
  getProductByCategory(categoryID);
} else {
  getAllproduct();
}

// keep
const url3 = `http://localhost:1338/api/products?filters[CategoryID][id][$eq]=${categoryID}&populate=*`;
const apiToken3 = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

// async function getApi() {
  
//   try {
//     const response = await fetch(url3, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${apiToken3}`, 
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const result = await response.json();
//     return result.data; 
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }
// getApi()
//   .then(data => {
//     console.log('Products data:', data);
//     const card = document.getElementById('container1');
//       for (let i = 0; i < data.length; i++) {
//         if(data[i].id){
//         card.innerHTML += `
//           <div class="box">
          
//             <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" alt="">
//             <div class="box-1">
//               <div class="left">
//                 <h2>${data[i].attributes.Name}</h2>
//                 <p>Price: $${data[i].attributes.Price} per kg</p>
//                 <p>Quantity: ${data[i].attributes.Quantity} kg</p>
//                 <p>Province: ${data[i].attributes.OriginProvince}</p>
//               </div>
//               <button class="btn-b"><a href="">Read more</a></button>
//             </div>
//           </div>
        
//         `;
//       }
//     }
//   })
//   .catch(error => {
//     console.error('Error getting products data:', error);
//   });




let all = document.getElementById('1');

async function getAllproduct(){
  const url3 = `http://localhost:1338/api/products?pagination[pageSize]=34&populate=*`;
const apiToken3 = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';
try {
  const response = await fetch(url3, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken3}`, 
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




// getAllproduct()
//   .then(data => {
//     console.log('Products data:', data);
//     const card = document.getElementById('container1');
//       for (let i = 0; i < data.length; i++) {
//         if(categoryID === 'all'){
//         card.innerHTML += `
//           <div class="box">
          
//             <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" alt="">
//             ${data[i].attributes.Organic?'<span class="badge organic-badge">Organic</span>' :""}
//             <div class="box-1">
//               <div class="left">
//                 <h2>${data[i].attributes.Name}</h2>
//                 <p>Price: $${data[i].attributes.Price} per kg</p>
//                 <p>Quantity: ${data[i].attributes.Quantity} kg</p>
//                 <p>Province: ${data[i].attributes.OriginProvince}</p>
//               </div>
//               <button class="btn-b"><a href="">Add to card</a></button>
//             </div>
//           </div>
        
//         `;
//       }
//     }
//   })
//   .catch(error => {
//     console.error('Error getting products data:', error);
//   });

// keep
  function displayProduct(data) {
    console.log('Products data:', data);
    const card = document.getElementById('container1');
      for (let i = 0; i < data.length; i++) {
        if(categoryID === 'all'){
        card.innerHTML += `
          <div class="box">
          
            <img src="${data[i].attributes.images.data[0].attributes.formats.thumbnail.url}" alt="">
            ${data[i].attributes.Organic?'<span class="badge organic-badge">Organic</span>' :""}
            <div class="box-1">
              <div class="left">
                <h2>${data[i].attributes.Name}</h2>
                <p>Price: $${data[i].attributes.Price} per kg</p>
                <p>Quantity: ${data[i].attributes.Quantity} kg</p>
                <p>Province: ${data[i].attributes.OriginProvince}</p>
              </div>
              <button class="btn-b"><a href="/pages/detail/detail.html?id=1">Add to card</a></button>
            </div>
          </div>
        
        `;
      }
    }
  }


  function onClickCategory(catID) {
    let data = [];
    if (catID === 0) {
      // / update url parameter
      data = getAllproduct();
    } else {
      data = getProductByCategory(catID);
      
      // update url parameter
    }
    
    displayProduct(data);
    // 

    
  }


  




  async function getProductByCategory(catID) {
    // fetch api
    try {
      const response = await fetch(url3, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken3}`, 
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


   