
const value = document.getElementById("value");

const plusOne = document.getElementById("increment");
const minusOne = document.getElementById("decrement");

const reset = document.getElementById("reset");

// saving textcontent of counter value into cnt identifier

let cnt = value.textContent;
// making cnt = 0 value  before the click events by default it's a string
cnt = 0;
console.log(cnt)

// event listeners on click events of btns
// plusOne +1
plusOne.addEventListener("click", () => {
    cnt = cnt + 1;
    value.textContent = cnt;
})
// minusOne -1
minusOne.addEventListener("click", () => {
    // checking if the counter if 0 already
    if (cnt > 0) {
         cnt = cnt - 1; 
    }else {
        cnt += 0;
        alert("counter is already 0.");
    }
    value.textContent = cnt;
})
// reset to 0
reset.addEventListener("click", () => {
    cnt = 0;
    value.textContent = cnt;
})