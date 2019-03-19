//Filtro
const filterFeedlabel = (data, condition) => {
  
  const filteredFeedlabel= data.filter(element => {
      return element.feedlabel === condition
  })
  return filteredFeedlabel;
}

//Cálculo
const computeStats = (data, condition) => {
  let result = filterFeedlabel(data, condition).length;
  return result;
};

window.filterFeedlabel = filterFeedlabel;
window.computeStats = computeStats;
