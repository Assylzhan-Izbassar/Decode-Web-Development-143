let myMap = new Map ([
  ["key1", "value1"],
  ["key2", "value2"],
]);

for(let key of myMap.keys()){
    console.log(key)
}

for(let x of myMap.entries()){
    console.log(x);
}

for(let val of myMap.values()) {
    console.log(val);
}

console.log("Pair:");

for(let pair of myMap){
    console.log(pair[1]);
}

// console.log(myMap.get("key1"));
