const judgeVegetable = function (vegetables, metric) {
  function compareTrait(a,b) {
    if (a[metric] < b[metric]) {
      return 1;
    }
    if (a[metric] > b[metric]) {
      return -1;
    }
    return 0;
  }
  vegetables.sort(compareTrait);
  return vegetables[0].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

