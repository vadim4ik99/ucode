//coinCollection
const coinCollection = new Set(['coin1', 'coin2'])

coinCollection.add('coin1')

console.log('');
console.log('coinCollection \n: Set')
console.log('show all coins:');
console.log(coinCollection.entries());



//menu
const menu = new Map()

menu.set('hamburger', 20)
menu.set('beer', 200)
menu.set('navbar', 50)

console.log('');
console.log('menu \n: Map')

for (let [key, value] of menu) {
    console.log(key + ': $' + value);
}



//guestList
const guestList = new WeakSet()

const name1 = {name: 'name1'},
      name2 = function() {},
      name3 = window;

guestList.add(name1);
guestList.add(name2);
guestList.add(name3);

console.log('');
console.log('guestList \n: WeakSet')
console.log('Is variable named `name1` invited: ' + guestList.has(name1) );

console.log('Can you delete it: ' + guestList.delete(name1));
console.log('Is variable named `name1` invited: ' + guestList.has(name1) );

console.log('WeakSet.clear is a function: ' + (typeof guestList.clear == 'function'));



//bankVault
const bankVault = new WeakMap()

bankVault.set(key = {}, 'VALUE')

console.log('');
console.log('bankVault \n: WeakMap');
console.log('can you access value without the key? '+ bankVault.has({}));
console.log('can you access value with the key? '+ bankVault.has(key));









