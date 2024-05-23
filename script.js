let container =document.querySelector('.text-text-1');

function groupFruit (){
    for (let i=0 ; i<6;i++){
        console.log(i)
        container.innerHTML += `
        <div class="card-card">
      <div class="row">
        <!-- Fruit Cards -->
        <div class="col-md-4">
          <div class="card position-relative">
            <img src="images/apple.png" class="card-img-top" alt="Apple">
            <div class="card-body">
              <h5 class="card-title">Apple</h5>
              <p class="card-text">Quantity: 10 kg</p>
              <p class="card-text">Price: $5 per kg</p>
              <p class="card-text">Province: Kompot</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    `
}
}
groupFruit();