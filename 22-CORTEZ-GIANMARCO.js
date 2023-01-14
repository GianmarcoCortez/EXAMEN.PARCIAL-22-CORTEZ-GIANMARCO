var respuesta, nombre, suma, i, nota, prom;
respuesta=Number(prompt("¿Desea saber la información de un estudiante (si=1 o no=2):"));
while (respuesta=1)
{
    nombre=prompt("Ingrese el nombre del alumno:");
    n=Number(prompt("Ingrese la cantidad de notas:"));
    suma=0;
    for (i=1; i<=n; i++)
        nota=Number(input("Ingrese la nota:"));
        document.write("La nota es:",nota,"<br>");   
        suma=suma+nota;
    prom=suma/n; 
    document.write("El alumno es:",nombre,"<br>");
    document.write("El promedio es:",prom,"<br>");
    if (prom<11)
    {
        document.write("El alumno esta desaprobado:","<br>");
    }   
    else
    {
        document.write("El alumno esta aprobado:","<br>");
    }    
}
