
function saveDynamicDataToFile() {
    //sparar data i en Json struktur.
    var userInput = '{"userName":' + document.getElementById("myUser").value + ',' + ' "password":' + document.getElementById("myPass").value + '}';    
    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}
