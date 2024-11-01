const tab = [1, 2, 3, 4, 5];

const somme = tab.reduce((num, i) => {
  return  num + i;
}, 0);

console.log(somme); 
