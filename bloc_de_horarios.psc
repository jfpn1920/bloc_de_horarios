Algoritmo bloc_de_horarios
	Definir opcion Como Entero
	Definir hora Como Entero
	Definir actividad Como Cadena
	Definir nota Como Cadena
	Definir total_actividades Como Entero
	Definir actividades_completadas Como Entero
	Definir actividades_pendientes Como Entero
	Dimension actividades[24]
	Dimension notas[24]
	Dimension completadas[24]
	total_actividades <- 0
	Para hora <- 0 Hasta 23 Hacer
		actividades[hora] <- ""
		notas[hora] <- ""
		completadas[hora] <- Falso
	FinPara
	//-------------------------------------//
	//--|menu_principal_bloc_de_horarios|--//
	//-------------------------------------//
	Repetir
		Escribir "================================="
		Escribir "        BLOC DE HORARIOS"
		Escribir "================================="
		Escribir "1. Ver horario por dia"
		Escribir "2. Ver horario por semana"
		Escribir "3. Ver horario por mes"
		Escribir "4. Registrar actividad"
		Escribir "5. Agregar nota"
		Escribir "6. Marcar tarea completada"
		Escribir "7. Ver estadisticas"
		Escribir "8. Salir"
		Escribir "================================="
		Escribir "Seleccione una opcion:"
		Leer opcion
		Segun opcion Hacer
			//-------------------------//
			//--|ver_horario_por_dia|--//
			//-------------------------//
			1:
				Escribir ""
				Escribir "===== HORARIO DEL DIA ====="
				Para hora <- 0 Hasta 23 Hacer
					Si actividades[hora] <> "" Entonces
						Escribir ""
						Escribir hora, ":00"
						Escribir "Actividad: ", actividades[hora]
						Escribir "Nota: ", notas[hora]
						Si completadas[hora] Entonces
							Escribir "Estado: COMPLETADA"
						SiNo
							Escribir "Estado: PENDIENTE"
						FinSi
						Escribir "-------------------------"
					FinSi
				FinPara
			//----------------------------//
			//--|ver_horario_por_semana|--//
			//----------------------------//
			2:
				Escribir ""
				Escribir "Funcion disponible en una futura version."
				Escribir "Actualmente solo existe horario diario."
			//-------------------------//
			//--|ver_horario_por_mes|--//
			//-------------------------//
			3:
				Escribir ""
				Escribir "Funcion disponible en una futura version."
				Escribir "Actualmente solo existe horario diario."
			//-------------------------//
			//--|registrar_actividad|--//
			//-------------------------//
			4:
				Escribir ""
				Escribir "Ingrese la hora (0-23):"
				Leer hora
				Si hora >= 0 Y hora <= 23 Entonces
					Escribir "Ingrese la actividad:"
					Leer actividad
					Escribir "Ingrese una nota:"
					Leer nota
					actividades[hora] <- actividad
					notas[hora] <- nota
					completadas[hora] <- Falso
					total_actividades <- total_actividades + 1
					Escribir ""
					Escribir "Actividad registrada correctamente."
				SiNo
					Escribir "Hora invalida."
				FinSi
			//------------------------------//
			//--|agregar_o_modificar_nota|--//
			//------------------------------//
			5:
				Escribir ""
				Escribir "Ingrese la hora de la actividad:"
				Leer hora
				Si actividades[hora] <> "" Entonces
					Escribir "Ingrese la nueva nota:"
					Leer nota
					notas[hora] <- nota
					Escribir "Nota actualizada."
				SiNo
					Escribir "No existe actividad en esa hora."
				FinSi
			//-----------------------------//
			//--|marcar_tarea_completada|--//
			//-----------------------------//
			6:
				Escribir ""
				Escribir "Ingrese la hora de la actividad:"
				Leer hora
				Si actividades[hora] <> "" Entonces
					completadas[hora] <- Verdadero
					Escribir "Actividad completada correctamente."
				SiNo
					Escribir "No existe actividad registrada."
				FinSi
			//------------------//
			//--|estadisticas|--//
			//------------------//
			7:
				actividades_completadas <- 0
				actividades_pendientes <- 0
				Para hora <- 0 Hasta 23 Hacer
					Si actividades[hora] <> "" Entonces
						Si completadas[hora] Entonces
							actividades_completadas <- actividades_completadas + 1
						SiNo
							actividades_pendientes <- actividades_pendientes + 1
						FinSi
					FinSi
				FinPara
				Escribir ""
				Escribir "===== ESTADISTICAS ====="
				Escribir "Total actividades: ", total_actividades
				Escribir "Completadas: ", actividades_completadas
				Escribir "Pendientes: ", actividades_pendientes
			//------------------------------//
			//--|salir_del_menu_principal|--//
			//------------------------------//
			8:
				Escribir ""
				Escribir "Saliendo del sistema..."
			De Otro Modo:
				Escribir ""
				Escribir "Opcion no valida."
		FinSegun
	Hasta Que opcion = 8
FinAlgoritmo