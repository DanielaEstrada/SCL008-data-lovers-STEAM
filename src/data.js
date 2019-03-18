//Filtro
const filterFeedlabel = (data, condition) => {
  
  const filteredFeedlabel= data.filter(element => {
      return element.feedlabel === condition
  })
  return filteredFeedlabel;
};

window.filterFeedlabel = filterFeedlabel;

//Orden
const sortData = (data, sortBy, sortOrder) => {
  
  let orderData = data.sort((a,b) => {
    return a [sortBy].localeCompare(b[sortBy]);
  });
  if (sortOrder === "za"){
    orderData.reverse();
  }
  return orderData
};

window.sortData = sortData;

//Cálculo.
  computeStats: (data) => {
    return data.length;
  }