opcion = 0
hora = 0
actividad = ""
nota = ""
total_actividades = 0
actividades_completadas = 0
actividades_pendientes = 0
actividades = [""] * 24
notas = [""] * 24
completadas = [False] * 24
#-------------------------------------#
#--|menu_principal_bloc_de_horarios|--#
#-------------------------------------#
while True:
    print("=================================")
    print("        BLOC DE HORARIOS")
    print("=================================")
    print("1. Ver horario por dia")
    print("2. Ver horario por semana")
    print("3. Ver horario por mes")
    print("4. Registrar actividad")
    print("5. Agregar nota")
    print("6. Marcar tarea completada")
    print("7. Ver estadisticas")
    print("8. Salir")
    print("=================================")
    opcion = int(input("Seleccione una opcion: "))
    #-------------------------#
    #--|ver_horario_por_dia|--#
    #-------------------------#
    if opcion == 1:
        print("\n===== HORARIO DEL DIA =====")
        hay_actividades = False
        for hora in range(24):
            if actividades[hora] != "":
                hay_actividades = True
                print(f"\n{hora}:00")
                print(f"Actividad: {actividades[hora]}")
                print(f"Nota: {notas[hora]}")
                if completadas[hora]:
                    print("Estado: COMPLETADA")
                else:
                    print("Estado: PENDIENTE")
                print("-------------------------")
        if not hay_actividades:
            print("No hay actividades registradas.")
    #----------------------------#
    #--|ver_horario_por_semana|--#
    #----------------------------#
    elif opcion == 2:
        print("\nFuncion disponible en una futura version.")
        print("Actualmente solo existe horario diario.")
    # ------------------------- #
    # --|ver_horario_por_mes|-- #
    # ------------------------- #
    elif opcion == 3:
        print("\nFuncion disponible en una futura version.")
        print("Actualmente solo existe horario diario.")
    #-------------------------#
    #--|registrar_actividad|--#
    #-------------------------#
    elif opcion == 4:
        try:
            hora = int(input("\nIngrese la hora (0-23): "))
            if 0 <= hora <= 23:
                actividad = input("Ingrese la actividad: ")
                nota = input("Ingrese una nota: ")
                if actividades[hora] == "":
                    total_actividades += 1
                actividades[hora] = actividad
                notas[hora] = nota
                completadas[hora] = False
                print("\nActividad registrada correctamente.")
            else:
                print("Hora invalida.")
        except ValueError:
            print("Debe ingresar un numero.")
    #------------------------------#
    #--|agregar_o_modificar_nota|--#
    #------------------------------#
    elif opcion == 5:
        try:
            hora = int(input("\nIngrese la hora de la actividad: "))
            if 0 <= hora <= 23 and actividades[hora] != "":
                nota = input("Ingrese la nueva nota: ")
                notas[hora] = nota
                print("Nota actualizada.")
            else:
                print("No existe actividad en esa hora.")
        except ValueError:
            print("Debe ingresar un numero.")
    #-----------------------------#
    #--|marcar_tarea_completada|--#
    #-----------------------------#
    elif opcion == 6:
        try:
            hora = int(input("\nIngrese la hora de la actividad: "))
            if 0 <= hora <= 23 and actividades[hora] != "":
                completadas[hora] = True
                print("Actividad completada correctamente.")
            else:
                print("No existe actividad registrada.")
        except ValueError:
            print("Debe ingresar un numero.")
    #------------------#
    #--|estadisticas|--#
    #------------------#
    elif opcion == 7:
        actividades_completadas = 0
        actividades_pendientes = 0
        for hora in range(24):
            if actividades[hora] != "":
                if completadas[hora]:
                    actividades_completadas += 1
                else:
                    actividades_pendientes += 1
        print("\n===== ESTADISTICAS =====")
        print(f"Total actividades: {total_actividades}")
        print(f"Completadas: {actividades_completadas}")
        print(f"Pendientes: {actividades_pendientes}")
    #------------------------------#
    #--|salir_del_menu_principal|--#
    #------------------------------#
    elif opcion == 8:
        print("\nSaliendo del sistema...")
        break
    else:
        print("\nOpcion no valida.")