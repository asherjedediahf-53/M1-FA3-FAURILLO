function removeSpaces() {
    let text = document.getElementById("input").value;
    let noSpaces = text.replaceAll(" ", "");
    document.getElementById("result").innerText = noSpaces;
}