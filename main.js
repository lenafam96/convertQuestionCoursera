const format = () => {
    input = document.getElementById("input-area").value;
    output = document.getElementById("output-area");
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    if (input == "") {
        return;
    }
    result = input.replace(/^Question \d*/gm, "");
    // result = result.replace("1 point", "");
    result = result.split("1 point");
    question = result[0].split("\n");
    question = question.filter((item) => item != "");
    answer = result[1];
    array = answer.split("\n");
    filterArray = array.filter((item) => item != "");
    
    stringResult = question.join("\n");
    for (let i = 0; i < filterArray.length; i++) {
        stringResult += "\n" + alphabet[i] + ". " + filterArray[i];
    }
    output.innerHTML = stringResult;
}

const copy = () => {
    input = document.getElementById("input-area")
    input.value = "";
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