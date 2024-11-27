alert('Stars Patterns')

var row = prompt('Entert how many patterns ? ')

for (let index = 0; index < row; index++) {
    for (let j = 0; j < index; j++) {
        document.write("*");
    }
    document.write("<br>");
 
}