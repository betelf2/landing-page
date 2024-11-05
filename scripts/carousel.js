let carouselContainer = document.getElementById("carousel");

var carouselHead =
`<section id="carouselSection" class="py-5 bg-light">
<div class="container">
  <!--<h2 class="text-center mb-4">Galeria de Imagens</h2>-->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`


var carouselIndicators = `<ol class="carousel-indicators">`
for(let i = 0; i <= 2; i++)
{
    carouselIndicators += `<li data-target="#carouselExampleIndicators" 
                           data-slide-to="${i}" 
                           ${i === 0 ? 'class="active"' : ''}"></li>`
}
carouselIndicators += `</ol>`

var carouselInner = `<div class="carousel-inner">`
for(let i = 0; i <= 2; i++)
{
    carouselInner += `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <img src="images/slider/${i}.jpg" class="d-block w-100" alt="Imagem ${i+1}"></img>
                      </div>`
}
carouselInner += `</div>`

var carouselTail =  
`           
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div><!-- carouselExampleIndicators -->
    </div><!-- container -->
</section>`

carouselContainer.innerHTML += carouselHead + carouselIndicators + carouselInner + carouselTail;