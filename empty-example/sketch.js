var grafica = [];

function setup() {
    var fondo = createCanvas(900,500); //Tamaño del sketch
    fondo.position(250,100); //Posición del sketch
    noStroke(); //Sin orilla
    clear();
}

function draw() {
    background(255, 201, 191); //Fondo del canvas
    for(var i = 1; i < grafica.length; i++){ //Dibujo de la grafica
        fill(255, 89, 60); //Color  de las barras
        textSize(15); //Tamaño del texto
        text(grafica[i], 51*(i+1), 45); //Posición del texto
        rect(50*(i+1), 55, 30, grafica[i]*5, 20); //Dibuja rectangulo
    }
}

function generar(){
    grafica = [];
    var canti = prompt("Ingrese cantidad de numeros a generar: (max.15)", "");//Pide al usuario cuantas barras generar
    if(canti > 15){ //Si el numero es mayor a 15
        alert("Demasiados números.");
    }
    else if(canti != null){
        for (var i=0; i<=canti; i++) { 
            grafica.push(Math.round(Math.random()*85)+1); //Numeros aleatorios 0 a 85 max.
        }
        clear();
        console.log(grafica); //Mostrando la grafica
    }
    else{ //Si no ingreso nada
        alert("No has ingresado nada :(");
    }
}

function sleep(ms){ //Timer
    return new Promise(
        resolve=>setTimeout(resolve,ms)
    );
}

async  function descender(){
    var n, fl;
    n = grafica.length;
    for(var i = 1; i < n; i++){
        for(var e = 0; e < (n-i); e++){
            if(grafica[e] < grafica[e+1]){ //Si la barra1 es menor a barra2
                fl = grafica[e]; //Almacena barra1
                grafica[e] = grafica[e+1]; //Mover barra1 a barra 2
                grafica[e+1] = fl; //barra 2 pasa a donde estaba barra1
                clear();
                await sleep(300); //timer
                console.log(grafica); //Muestra el cambio
            }
        }
    }
    clear();
    console.log(grafica); //Muestra grafica descendentemente
}

async  function ascender(){
    var n, fl;
    n = grafica.length;
    for(var i = 1; i < n; i++){
        for(var e = 0; e < (n-i); e++){
            if(grafica[e] > grafica[e+1]){ //Si barra1 es mayor a barra2
                fl = grafica[e]; //barra1 se almacena en fl
                grafica[e] = grafica[e+1]; //barra1 sale y pasa a barra2
                grafica[e+1] = fl; //barra2 pasa a barra1
                clear();
                await sleep(300);//timer
                console.log(grafica); //Muestra el cambio
            }
        }
    }
    clear();
    console.log(grafica); //Muestra grafica ascendentemente
}

function maxNum(){
    var max = Math.max.apply(null, grafica); //Funcion que define el numero maximo
    window.alert("Max. num: " + max);
}

function minNum(){
    var min = Math.min.apply(null, grafica); //Función que define el mínimo num
    window.alert("Min. num: " + min);
}