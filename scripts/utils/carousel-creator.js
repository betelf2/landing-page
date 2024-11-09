export function createCarouselHtml(items, enableAutoplay=true)
{
    var carouselHead = createCarouselHead(enableAutoplay);
    var carouselIndicators = createCarouselIndicators(items);
    var carouselInner = createCarouselInner(items);
    var carouselTail = createCarouselTail();
    return carouselHead + carouselIndicators + carouselInner + carouselTail;
}

function createCarouselHead(enableAutoplay)
{
    var autoplayTag = (enableAutoplay === true) ? `data-ride="carousel"` : `data-interval="false"`; 

    return `<section id="carouselSection" class="py-5 bg-light">
                <div class="container">
                    <div id="carouselExampleIndicators" class="carousel slide" ${autoplayTag}>`
}

function createCarouselIndicators(items)
{
    var carouselIndicators = `<ol class="carousel-indicators">`
    for(let i = 0; i < items.length; i++)
    {
        carouselIndicators += `<li data-target="#carouselExampleIndicators" 
                               data-slide-to="${i}" 
                               ${i === 0 ? 'class="active"' : ''}"></li>`
    }
    carouselIndicators += `</ol>`
    return carouselIndicators
}

function createCarouselInner(items)
{
    var carouselInner = `<div class="carousel-inner">`
    for(let i = 0; i < items.length; i++)
    {
        carouselInner += `<div class="carousel-item ${i === 0 ? 'active' : ''}">${items[i]}</div>`
    }
    carouselInner += `</div>`
    return carouselInner
}

function createCarouselTail()
{
    return `           
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
}