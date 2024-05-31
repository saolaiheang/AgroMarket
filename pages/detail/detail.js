

function feta (){
   

    const url ='https://jolly-angel-aabddcd512.strapiapp.com/api/products?populate=*';
    const api_key='d72da5635bb361e3e7fb3ec942daf980fc60ae992d5a32caa7d239a949e73655e6d33ab7ab1e2caa2c9b4b4ae12d1141225e16fd3de0a3c6598dfa45fc8bce53083c2f26febc041bb1545f646fdd2113cc3cb306581cc2238c101409823c880f969172dec98da293c71a096821b7987e7e6855bcf71711b71e5bbae7e22137e7';

    fetch(url,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${api_key}`,
          'Content-Type': 'application/json'

          
    }}
     )
    .then((Response)=> {
        return Response.json();
    })
    .then((data)=>{
        console.log(data);

        //url parameter
        const Params = window.location.search;

        const UrlParam = new URLSearchParams(Params);

        const articleId =Number(UrlParam.get("id"));

        let container = document.querySelector('.row');

        for(let i=0; i<data.data.length;i++){
            if(data.data[i].id===articleId){
                let organic ;
                if(data.data[i].attributes.Organic===true){
                    organic='Yes'
                }else{
                    organic='No'
                }
                // console.log(data.data[i].attributes.images.data[i].attributes.url);
            container.innerHTML += `
            <div class="col-md-6">
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${data.data[i].attributes.images.data[0].attributes.url}" class="d-block w-100" alt="Apple">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 paragrab">
                    <h1 class="">${data.data[i].attributes.Name}</h1>
                    <p class="lead">${data.data[i].attributes.CategoryID.data.attributes.Name}</p>
                    <p><strong>Price:</strong> $${data.data[i].attributes.Price}</p>
                    <p><strong>Quantity:</strong> ${data.data[i].attributes.Quantity}</p>
                    <p><strong>Organic:</strong> ${organic}</p>
                    <h1 class="mt-4">Contact Information</h1>
                    <div class="contact">
                      <p><i class="fa fa-user"></i> Tra Jit</p>
                      <p><i class="fa fa-envelope"></i> tra.jit@institute.pse.ngo</p>
                      <p><i class="fa fa-phone"></i> +855 969 668 568</p>
                  </div>
                </div>

            `
            console.log(data.data[i].id);
            }
            
            
            
        }

    
    })
    .catch((error)=>{
        console.error('error',error);
    })
}
feta();
