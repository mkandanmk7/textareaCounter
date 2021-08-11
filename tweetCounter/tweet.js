const colors = ["red", "blue", "green", "pink"];
let index = 0;
const colorCycle = () => {
  if (index === colors.length) {
    index = 0;
  }
  // console.log('cycle');
  document.body.style.backgroundColor = colors[index];
  index++;
};

let colorInterval;
// setTimeout(()=>clearInterval(colorInterval),1000*10);

function start() {
  colorInterval = setInterval(colorCycle, 2000);
}
function stop() {
  colorInterval = clearInterval(colorInterval);
}

function count(event) {
  const tweet = event.target.value;
  const count = document.querySelector(".count");
  count.innerText = `${tweet.length}/40`;

  console.log("type", tweet.length);
}
// setTimeout(()=>
//           console.log("mani"),4000);
// setInterval(()=> console.log("muthu"),2000);
