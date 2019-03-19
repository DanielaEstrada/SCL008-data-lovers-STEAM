//Filtro
const filterFeedlabel = (data, condition) => {
  
  const filteredFeedlabel= data.filter(element => {
    return element.feedlabel === condition
  })
  return filteredFeedlabel;
}

//Orden
const sortData = (data, condition) => {
  
  let orderData = data.sort((a,b) => (a[condition] > b[condition]) ? 1 : -1);
  return orderData;
}

//Cálculo
const computeStats = (data, condition) => {
  let result = filterFeedlabel(data, condition).length;
  return result;
};

window.filterFeedlabel = filterFeedlabel;
window.sortData = sortData;
window.computeStats = computeStats;
