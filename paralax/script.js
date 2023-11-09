function onEmpy(enpy)  {
    enpy.forEach(change => {
     if (change.isIntersecting){
        change.target.classList.add('active')
     }
    });
}

let options = [0.5];
let observer = new IntersectionObserver(onEmpy);
let elements = document.querySelectorAll('.enlable');

for (let elm of elements) {
    observer.observe(elm)
}


let elementsCorzina = document.querySelector('.elements_corzina') 

let counter;

window.addEventListener('click', function (event) {

if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {
   
    const conterWraper = event.target.closest('.items_curent_wraper');

     counter = conterWraper.querySelector(' [data-counter]');
   
}
    if(event.target.dataset.action === 'plus') {
    
   
 if (event.target.dataset.action === 'plus') {
    
    counter.innerText = ++counter.innerText;
   
    pricesCurent()
    };

};



  if(event.target.dataset.action === 'minus') { 
    if (parseInt(counter.innerText) > 1) {
     counter.innerText = --counter.innerText;
     pricesCurent()
    }
   if(event.target.closest('.elements_corzina') &&  parseInt(counter.innerText) === 1) {
      event.target.closest('.elements_corzina').remove();
      pricesCurent()
   }
  }

});



const cardWraper = document.querySelector('.lin');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
    
   const card = event.target.closest('.card-mb-4')
   


const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.img_card').getAttribute('src'),
    prise: card.querySelector('.prise').innerText,
    tittle: card.querySelector('.items_tittle').innerText

};




  console.log(productInfo)


  const contents = `
  
  <div class="elements_corzina">
  <div data-ids="${productInfo.id}" class="card_item" >
  <div class="img_elem" > <img src="${productInfo.imgSrc}" data-img alt=""></div>

<div class="possition_info_elm">
  <div class="text_elem">
    <p class="text_name_burger"  data-name>${productInfo.tittle}</p>
  </div>

     <div class="price_burger">
        <div data-priceBurger class="price_curent">  ${productInfo.prise} </div>
     </div>
  </div>

     
<div class="details_wrapper">
<div class="items_curent_wraper">
 <div class="items_control" data-action="minus">-</div>
  <div class="items_cauntreS" data-counter>1</div>
  <div class="items_control" data-action="plus">+</div>
  </div>
  </div>
</div>
</div>


  `
  cardWraper.insertAdjacentHTML('beforeend', contents);
  pricesCurent()
 
}
  
  


});

function pricesCurent() {

  const tottalPriceEl = document.querySelector('.price_elm')
  const  cardItems = document.querySelectorAll('.card_item');

  let tottalPrice = 0;

  cardItems.forEach(function (item) {
   console.log(item)

   const amoutEl = item.querySelector('[data-counter]')
   const priceEl =  item.querySelector('.price_curent')
  

   const currentPrice =  parseInt(amoutEl.innerText) * parseInt(priceEl.innerText)
   tottalPrice += currentPrice
  

   console.log(currentPrice)
  });

tottalPriceEl.innerText = tottalPrice + 'p'

 
  console.log(cardItems);
 
 
 
}








 








