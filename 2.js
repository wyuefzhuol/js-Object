var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var count = 0;
for(let key  in fruit){
	count += fruit[key];
}
console.log(count);