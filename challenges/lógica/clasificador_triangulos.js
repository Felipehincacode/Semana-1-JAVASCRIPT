let lado1 = null
let lado2 = null
let lado3 = null

function pedirdatos() {
 lado1 = Number(prompt("Ingrese la longitud del primer lado "));
 lado2 = Number(prompt("Ingrese la longitud del segundo lado "));
 lado3 = Number(prompt("Ingrese la longitud del tercer lado "));

}

function verificar(a,b,c){
if (a>0 && b>0 && c>0){

    if ((a + b)>c && (b+c)>a && (c+a)>b)
        {
        console.log(`los valores ${a} ${b} ${c} son correctos`) 
        clasificar();
        }  
}
else {
    console.info("hay un error en los datos ingresado, por favor intentelo de nuevo")
    pedirdatos();
    }
}

function clasificar(a,b,c){
    if ((a == b) && (b== c)){
            
            console.log("El triangulo es Equilatero");
            }
        else if (a == b || b == c || c == a){
            console.log("El Triangulo es Isósceles ");
            }
        else {
        console.log("El Triangulo es Escaleno"); 
            }
}


console.info("Hola  bienvenido al sistema clasificador de triangulos");

pedirdatos();
verificar(lado1,lado2,lado3);
clasificar(lado1,lado2,lado3);
