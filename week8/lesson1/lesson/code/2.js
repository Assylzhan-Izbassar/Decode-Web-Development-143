function y(x) {
  return x*x - x;
};

function y2(x) {
    return x;
  };

console.log(y(5));

const plane = document.getElementsByClassName("coordinates__inner")[0];

function addDot(x, y, className) {
    const dot = document.createElement("div");
    dot.className = className;
    dot.style.gridColumnStart = x;
    dot.style.gridRowStart = y;
    plane.append(dot);
}

for (let i = 1; i <= 30; i+=1) {
    addDot(i, y(i), 'dot');
}

for (let i = 2; i <= 30; i+=1) {
    addDot(i, y2(i), 'red-dot');
}