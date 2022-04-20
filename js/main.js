// 1
let arr = ["I", "study", "JavaScript", "right", "now"]
let cutter = arr.splice(-3, 1)
console.log(arr);




// 2---

function reversing(sum) {
    let splitting = sum.split("");
    let reverser = splitting.reverse();
    let joining = reverser.join("");
    return joining;
}
console.log(reversing("salom dunyo"));


// 3---

let number = 4;

function test(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false
}

console.log(test(number));