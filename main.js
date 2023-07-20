const format = () => {
    input = document.getElementById("input-area").value;
    output = document.getElementById("output-area");
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    if (input == "") {
        return;
    }
    result = input.replace(/^Question \d*/gm, "");
    result = result.replace("1 point", "");
    array = result.split("\n");
    filterArray = array.filter((item) => item != "");
    if (filterArray.includes("Question")) {

    }
    stringResult = filterArray[0];
    for (let i = 1; i < filterArray.length; i++) {
        stringResult += "\n" + alphabet[i-1] + ". " + filterArray[i];
    }
    output.innerHTML = stringResult;
}

const copy = () => {
    output = document.getElementById("output-area");
    output.select();
    if (output.value == "") {
        return;
    }
    navigator.clipboard.writeText(output.value);
    showSnakeBar("Copied to clipboard")
}

function showSnakeBar(mess) {
  var x = document.getElementById("snackbar");
  x.innerHTML = mess;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}