import java.util.Scanner;
public class bloc_de_horarios {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int opcion = 0;
        int hora = 0;
        String actividad = "";
        String nota = "";
        int total_actividades = 0;
        int actividades_completadas = 0;
        int actividades_pendientes = 0;
        String[] actividades = new String[24];
        String[] notas = new String[24];
        boolean[] completadas = new boolean[24];
        for (int i = 0; i < 24; i++) {
            actividades[i] = "";
            notas[i] = "";
            completadas[i] = false;
        }
        //-------------------------------------//
        //--|menu_principal_bloc_de_horarios|--//
        //-------------------------------------//
        while (true) {
            System.out.println("=================================");
            System.out.println("        BLOC DE HORARIOS");
            System.out.println("=================================");
            System.out.println("1. Ver horario por dia");
            System.out.println("2. Ver horario por semana");
            System.out.println("3. Ver horario por mes");
            System.out.println("4. Registrar actividad");
            System.out.println("5. Agregar nota");
            System.out.println("6. Marcar tarea completada");
            System.out.println("7. Ver estadisticas");
            System.out.println("8. Salir");
            System.out.println("=================================");
            System.out.print("Seleccione una opcion: ");
            opcion = teclado.nextInt();
            teclado.nextLine();
            switch (opcion) {
                //-------------------------//
                //--|ver_horario_por_dia|--//
                //-------------------------//
                case 1:
                    System.out.println("\n===== HORARIO DEL DIA =====");
                    boolean hayActividades = false;
                    for (hora = 0; hora < 24; hora++) {
                        if (!actividades[hora].equals("")) {
                            hayActividades = true;
                            System.out.println("\n" + hora + ":00");
                            System.out.println("Actividad: " + actividades[hora]);
                            System.out.println("Nota: " + notas[hora]);
                            if (completadas[hora]) {
                                System.out.println("Estado: COMPLETADA");
                            } else {
                                System.out.println("Estado: PENDIENTE");
                            }
                            System.out.println("-------------------------");
                        }
                    }
                    if (!hayActividades) {
                        System.out.println("No hay actividades registradas.");
                    }
                    break;
                //----------------------------//
                //--|ver_horario_por_semana|--//
                //----------------------------//
                case 2:
                    System.out.println("\nFuncion disponible en una futura version.");
                    System.out.println("Actualmente solo existe horario diario.");
                    break;
                //-------------------------//
                //--|ver_horario_por_mes|--//
                //-------------------------//
                case 3:
                    System.out.println("\nFuncion disponible en una futura version.");
                    System.out.println("Actualmente solo existe horario diario.");
                    break;
                //-------------------------//
                //--|registrar_actividad|--//
                //-------------------------//
                case 4:
                    System.out.print("\nIngrese la hora (0-23): ");
                    hora = teclado.nextInt();
                    teclado.nextLine();
                    if (hora >= 0 && hora <= 23) {
                        System.out.print("Ingrese la actividad: ");
                        actividad = teclado.nextLine();
                        System.out.print("Ingrese una nota: ");
                        nota = teclado.nextLine();
                        if (actividades[hora].equals("")) {
                            total_actividades++;
                        }
                        actividades[hora] = actividad;
                        notas[hora] = nota;
                        completadas[hora] = false;
                        System.out.println("\nActividad registrada correctamente.");
                    } else {
                        System.out.println("Hora invalida.");
                    }
                    break;
                //------------------------------//
                //--|agregar_o_modificar_nota|--//
                //------------------------------//
                case 5:
                    System.out.print("\nIngrese la hora de la actividad: ");
                    hora = teclado.nextInt();
                    teclado.nextLine();
                    if (hora >= 0 && hora <= 23 &&
                            !actividades[hora].equals("")) {
                        System.out.print("Ingrese la nueva nota: ");
                        nota = teclado.nextLine();
                        notas[hora] = nota;
                        System.out.println("Nota actualizada.");
                    } else {
                        System.out.println("No existe actividad en esa hora.");
                    }
                    break;
                //-----------------------------//
                //--|marcar_tarea_completada|--//
                //-----------------------------//
                case 6:
                    System.out.print("\nIngrese la hora de la actividad: ");
                    hora = teclado.nextInt();
                    teclado.nextLine();
                    if (hora >= 0 && hora <= 23 &&
                            !actividades[hora].equals("")) {
                        completadas[hora] = true;
                        System.out.println(
                                "Actividad completada correctamente.");
                    } else {
                        System.out.println(
                                "No existe actividad registrada.");
                    }
                    break;
                //------------------//
                //--|estadisticas|--//
                //------------------//
                case 7:
                    actividades_completadas = 0;
                    actividades_pendientes = 0;
                    for (hora = 0; hora < 24; hora++) {
                        if (!actividades[hora].equals("")) {
                            if (completadas[hora]) {
                                actividades_completadas++;
                            } else {
                                actividades_pendientes++;
                            }
                        }
                    }
                    System.out.println("\n===== ESTADISTICAS =====");
                    System.out.println(
                            "Total actividades: "
                                    + total_actividades);
                    System.out.println(
                            "Completadas: "
                                    + actividades_completadas);
                    System.out.println(
                            "Pendientes: "
                                    + actividades_pendientes);
                    break;
                //------------------------------//
                //--|salir_del_menu_principal|--//
                //------------------------------//
                case 8:
                    System.out.println(
                            "\nSaliendo del sistema...");
                    teclado.close();
                    return;
                default:
                    System.out.println(
                            "\nOpcion no valida.");
            }
        }
    }
}