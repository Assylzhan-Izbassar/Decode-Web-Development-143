// camelCase - каждое отдельное слово начинается с большой буквы
// getName()

// underline - после каждого отдельного слово пишется нижнее подчеркивание
// get_name()

function sum(arr) {
    for (let x of arr) {
      if (x < 0) {
        return "The array constains negative value!";
      }
    }
  
    let sum = 0;
    for (let x of arr) {
      sum += x;
    }
    return sum;
  }
  
  let a = [2, -5, 0, 8, 10];
  let b = [2, 15, 0, 10, 10];
  
  let result = sum(a);
  let resultB = sum(b);
  
  console.log(result);
  console.log(resultB);
  