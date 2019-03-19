
const data = window.STEAM.appnews.newsitems;
const containerRoot = document.getElementById("root");
const selectFeedlabel = document.getElementById("feedlabel");
const selectOrderdata = document.getElementById("orderdata");


//Mostrando la Data
const showData = (data) => {
  let result = '';

  cardSteam(data);
  return result;
}


   //Filtrando
   selectFeedlabel.addEventListener('change', () => {
    let condition = selectFeedlabel.value
    let filtered = window.filterFeedlabel(data, condition);
    //Limpiando el div
    containerRoot.innerHTML = '';
    cardSteam(filtered);
  })

    //Función para todas las tarjetas
    function cardSteam(dataSteam){
    // limpio div
    containerRoot.innerHTML = '';
    
    dataSteam.forEach(element => {
      if (element.author === '' && element.feedlabel !== '') {
        containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="ahref">
        <a href="${element.url}">
        </div>
        <h2>
        ${element.title}
        <br>
        <span>
        Autor: Desconocido
        </span>
        </h2>
        <p>
        ${element.contents}
        </p>
        <p>
        FeedLabel: ${element.feedlabel}
        </p>
        </div>
        </div>
        </div>`
      } 
      else {
        containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <img src="${element.url}">
        </div>
        <h2>
        ${element.title}
        <br>
        <span>
        ${element.author}
        </span>
        </h2>
        <p>
        ${element.contents}
        </p>
        <p>
        FeedLabel: ${element.feedlabel}
        </p>
        </div>
        </div>
        </div>` 
      }
    });
  }

  //orden
selectOrderdata.addEventListener('change', () => {
 let condition = selectOrderdata.value
 let ordered = window.sortData(data, condition);
 //Limpiando el div
 containerRoot.innerHTML = '';
 cardSteam(ordered);
})

  //Función para todas las tarjetas
  function cardSteam(dataSteam){
    // limpio div
    containerRoot.innerHTML = '';

    dataSteam.forEach(element => {
      if (element.author === '' && element.feedlabel !== '') {
        containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="ahref">
        <a href="${element.url}">
        </div>
        <h2>
        ${element.title}
        <br>
        <span>
        Autor: Desconocido
        </span>
        </h2>
        <p>
        ${element.contents}
        </p>
        <p>
        FeedLabel: ${element.feedlabel}
        </p>
        </div>
        </div>
        </div>`
      } 
      else {
        containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <img src="${element.url}">
        </div>
        <h2>
        ${element.title}
        <br>
        <span>
        ${element.author}
        </span>
        </h2>
        <p>
        ${element.contents}
        </p>
        <p>
        FeedLabel: ${element.feedlabel}
        </p>
        </div>
        </div>
        </div>` 
      }
    });
  }

//Cálculo

const calcule = selectFeedlabel;
calcule.addEventListener('click', () =>{
let condition = calcule.value;
let result = window.computeStats(data,condition);
containerRoot.innerHTML+=`
<h3>Total</h3>
<h3>${result}</h3>`
})

  window.onload = showData(data);