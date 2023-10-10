const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["batman","superman","flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHero=marvel_heros.concat(dc_heros);
// console.log(allHero);

const allNewHero=[...marvel_heros,...dc_heros];
// console.log(allNewHero);

const anotherArray= [1,2,3, [4,5],[6,[7,8]]]
// console.log(anotherArray.flat(Infinity));

// console.log(Array.isArray("Rajan"));
// console.log(Array.from("Rajan"));
const score1=100;
const score2=200;
const score3=300;
console.log(Array.from({name:"Rajan"}));
console.log(Array.of(score1,score2,score3))