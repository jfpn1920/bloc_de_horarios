Imports System
Module bloc_de_horarios
    Sub Main()
        Dim opcion As Integer = 0
        Dim hora As Integer = 0
        Dim actividad As String = ""
        Dim nota As String = ""
        Dim total_actividades As Integer = 0
        Dim actividades_completadas As Integer = 0
        Dim actividades_pendientes As Integer = 0
        Dim actividades(23) As String
        Dim notas(23) As String
        Dim completadas(23) As Boolean
        For i As Integer = 0 To 23
            actividades(i) = ""
            notas(i) = ""
            completadas(i) = False
        Next
        '-------------------------------------'
        '--|menu_principal_bloc_de_horarios|--'
        '-------------------------------------'
        While True
            Console.WriteLine("=================================")
            Console.WriteLine("        BLOC DE HORARIOS")
            Console.WriteLine("=================================")
            Console.WriteLine("1. Ver horario por dia")
            Console.WriteLine("2. Ver horario por semana")
            Console.WriteLine("3. Ver horario por mes")
            Console.WriteLine("4. Registrar actividad")
            Console.WriteLine("5. Agregar nota")
            Console.WriteLine("6. Marcar tarea completada")
            Console.WriteLine("7. Ver estadisticas")
            Console.WriteLine("8. Salir")
            Console.WriteLine("=================================")
            Console.Write("Seleccione una opcion: ")
            opcion = Convert.ToInt32(Console.ReadLine())
            '-------------------------'
            '--|ver_horario_por_dia|--'
            '-------------------------'
            If opcion = 1 Then
                Console.WriteLine(vbCrLf & "===== HORARIO DEL DIA =====")
                Dim hayActividades As Boolean = False
                For hora = 0 To 23
                    If actividades(hora) <> "" Then
                        hayActividades = True
                        Console.WriteLine("")
                        Console.WriteLine(hora & ":00")
                        Console.WriteLine("Actividad: " & actividades(hora))
                        Console.WriteLine("Nota: " & notas(hora))
                        If completadas(hora) Then
                            Console.WriteLine("Estado: COMPLETADA")
                        Else
                            Console.WriteLine("Estado: PENDIENTE")
                        End If
                        Console.WriteLine("-------------------------")

                    End If
                Next
                If Not hayActividades Then
                    Console.WriteLine("No hay actividades registradas.")
                End If
                '----------------------------'
                '--|ver_horario_por_semana|--'
                '----------------------------'
            ElseIf opcion = 2 Then
                Console.WriteLine(vbCrLf & "Funcion disponible en una futura version.")
                Console.WriteLine("Actualmente solo existe horario diario.")
                '-------------------------'
                '--|ver_horario_por_mes|--'
                '-------------------------'
            ElseIf opcion = 3 Then
                Console.WriteLine(vbCrLf & "Funcion disponible en una futura version.")
                Console.WriteLine("Actualmente solo existe horario diario.")
                '-------------------------'
                '--|registrar_actividad|--'
                '-------------------------'
            ElseIf opcion = 4 Then
                Console.Write(vbCrLf & "Ingrese la hora (0-23): ")
                hora = Convert.ToInt32(Console.ReadLine())
                If hora >= 0 And hora <= 23 Then
                    Console.Write("Ingrese la actividad: ")
                    actividad = Console.ReadLine()
                    Console.Write("Ingrese una nota: ")
                    nota = Console.ReadLine()
                    If actividades(hora) = "" Then
                        total_actividades += 1
                    End If
                    actividades(hora) = actividad
                    notas(hora) = nota
                    completadas(hora) = False
                    Console.WriteLine(vbCrLf & "Actividad registrada correctamente.")
                Else
                    Console.WriteLine("Hora invalida.")
                End If
                '------------------------------'
                '--|agregar_o_modificar_nota|--'
                '------------------------------'
            ElseIf opcion = 5 Then
                Console.Write(vbCrLf & "Ingrese la hora de la actividad: ")
                hora = Convert.ToInt32(Console.ReadLine())
                If hora >= 0 And hora <= 23 And actividades(hora) <> "" Then
                    Console.Write("Ingrese la nueva nota: ")
                    nota = Console.ReadLine()
                    notas(hora) = nota
                    Console.WriteLine("Nota actualizada.")
                Else
                    Console.WriteLine("No existe actividad en esa hora.")
                End If
                '-----------------------------'
                '--|marcar_tarea_completada|--'
                '-----------------------------'
            ElseIf opcion = 6 Then
                Console.Write(vbCrLf & "Ingrese la hora de la actividad: ")
                hora = Convert.ToInt32(Console.ReadLine())
                If hora >= 0 And hora <= 23 And actividades(hora) <> "" Then
                    completadas(hora) = True
                    Console.WriteLine("Actividad completada correctamente.")
                Else
                    Console.WriteLine("No existe actividad registrada.")
                End If
                '------------------'
                '--|estadisticas|--'
                '------------------'
            ElseIf opcion = 7 Then
                actividades_completadas = 0
                actividades_pendientes = 0
                For hora = 0 To 23
                    If actividades(hora) <> "" Then
                        If completadas(hora) Then
                            actividades_completadas += 1
                        Else
                            actividades_pendientes += 1
                        End If
                    End If
                Next
                Console.WriteLine(vbCrLf & "===== ESTADISTICAS =====")
                Console.WriteLine("Total actividades: " & total_actividades)
                Console.WriteLine("Completadas: " & actividades_completadas)
                Console.WriteLine("Pendientes: " & actividades_pendientes)
                '------------------------------'
                '--|salir_del_menu_principal|--'
                '------------------------------'
            ElseIf opcion = 8 Then
                Console.WriteLine(vbCrLf & "Saliendo del sistema...")
                Exit While
            Else
                Console.WriteLine(vbCrLf & "Opcion no valida.")
            End If
        End While
    End Sub
End Module