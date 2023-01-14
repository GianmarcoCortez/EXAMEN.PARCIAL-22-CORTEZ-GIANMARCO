respuesta=input("¿Desea saber la información de un estudiante (si o no):")
while respuesta=="si":
    nombre=input("Ingrese el nombre del alumno:")
    print("El alumno es:",nombre)
    n=input("Ingrese la cantidad de notas:")
    n=int(n)
    suma=0
    for i in range(n):
        nota=input("Ingrese la nota:")
        nota=int(nota)
        suma=suma+nota
    prom=suma/n
    print("El promedio es:",prom)
    if prom<11:
        print("El alumno esta desaprobado:")
    else:
        print("El alumno esta aprobado:")
    respuesta=input("¿Desea saber la información de un estudiante (si o no):")
