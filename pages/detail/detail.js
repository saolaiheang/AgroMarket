
// Get URL parameters
const params = window.location.search;
const urlParams = new URLSearchParams(params);
const catID = Number(urlParams.get("id"));

const url = 'http://localhost:1338/api/products/' + catID + '?populate=*';
let baseUrl = 'http://localhost:1338';


function feta() {

    const api_key = '88ecd654e73224296d3d605cd4a4136d863d8fe05b3be59a158a806b9666a40ec43d482042ad17d4b8dab66da1b15da9657938de1dc557d5b326e68e0569e33e6079e3ec02ab2af40f89338241fd3a01844ab8e3047f443dd6dc250a4c79a33c2ee49e29a40419ba71bb0d19cd843a7e2bf3bdb6f3f48d8c074ca313b0ecdf48';

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${api_key}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            displayProduct(data.data);

        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

feta();

function displayProduct(product) {
    let organic = product.attributes.Organic ? 'Yes' : 'No';
    let container = document.querySelector('.row');
    container.innerHTML += `
                <div class="col-md-6">
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${baseUrl}${product.attributes.images.data[0].attributes.url}" class="d-block w-100 " alt="${product.attributes.Name}">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 paragrab">

                    <h1>${product.attributes.Name}</h1>
                    <p class="lead">${product.attributes.CategoryID.data.attributes.Name}</p>
                    <p><strong>Price:</strong> $${product.attributes.Price}</p>
                    <p><strong>Quantity:</strong> ${product.attributes.Quantity}</p>
                    <p><strong>Organic:</strong> ${organic}</p>
                    <h1 class="mt-4">Contact Information</h1>
                    <div class="contact">
                      <p><i class="fa fa-user"></i> Tra Jit</p>
                      <p><i class="fa fa-envelope"></i> tra.jit@institute.pse.ngo</p>
                      <p><i class="fa fa-phone"></i> +855 90 53 9676</p>

                    </div>
                </div>
                `;
}
