window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla");  //elemento pantalla de salida 
    document.onkeydown = teclado; //función teclado disponible
}

x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0;//número oculto o en espera.
op="no";//operación en curso; "no" =  sinoperación.
function numero(xx) { 
    if (x=="0" || xi==1 ) { pantalla.innerHTML=xx; x=xx; 
    if (xx==".") { pantalla.innerHTML="0."; x=xx; coma=1; } } 
else { 
    if (xx=="." && coma==0) { pantalla.innerHTML+=xx; 
    x+=xx; coma=1; 
} 
else if (xx=="." && coma==1) { } 
else { pantalla.innerHTML+=xx; 
    x+=xx 
} 
} 
xi=0; 
}
function operar(s) { igualar(); 
    ni=x; 
    op=s; 
    xi=1; 
}
function igualar() { 
    if (op=="no") { pantalla.innerHTML=x; } 
else { sl=ni+op+x; 
    sol=eval(sl); pantalla.innerHTML=sol; 
    x=sol; 
    op="no"; 
xi=1; 
} 
}
function raizc() {
x=Math.sqrt(x); pantalla.innerHTML=x; 
op="no"; 
xi=1;
}
function porcent() { 
    x=x/100; pantalla.innerHTML=x; igualar(); 
    xi=1; }
function opuest() { 
    nx=Number(x); nx=-nx; 
    x=String(nx); pantalla.innerHTML=x; }
function inve(){ 
    nx=Number(x); nx=(1/nx); 
    x=String(nx); pantalla.innerHTML=x; xi=1; }
function retro() { 
    cifras=x.length; br=x.substr(cifras-1,cifras); 
    x=x.substr(0,cifras-1); pantalla.innerHTML=x; 
    if (x=="") { 
    x="0"; pantalla.innerHTML=x; } 
if (br==".") { coma=0; } }
function borradoParcial() { 
    pantalla.innerHTML=0; 
    x=0; 
    coma=0; }
function borradoTotal() { 
    pantalla.innerHTML=0; x="0"; coma=0; ni=0; op="no"; }
function teclado (elEvento) { evento = elEvento || window.event; k=evento.keyCode; 
    if (k>47 && k<58) { p=k-48; p=String(p); numero(p); } 
if (k>95 && k<106) { p=k-96; p=String(p); numero(p); } 
if (k==110 || k==190) { numero(".") } 
if (k==106) { operar('*') } 
if (k==107) { operar('+') } 
if (k==109) { operar('-') } 
if (k==111) { operar('/') } 
if (k==32 || k==13) { igualar() } 
if (k==46) { borradoTotal() } 
if (k==8) { retro() } 
if (k==36) { borradoParcial() }
}