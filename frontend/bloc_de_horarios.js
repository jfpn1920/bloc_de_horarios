//------------------------------------//
//--|funcionalidad_bloc_de_horarios|--//
//------------------------------------//
const fecha_bloc_de_horarios =
document.getElementById(
    "fecha_bloc_de_horarios"
);
const hora_bloc_de_horarios =
document.getElementById(
    "hora_bloc_de_horarios"
);
const estado_bloc_de_horarios =
document.getElementById(
    "estado_bloc_de_horarios"
);
const nota_bloc_de_horarios =
document.getElementById(
    "nota_bloc_de_horarios"
);
const boton_agregar_meta_bloc_de_horarios =
document.getElementById(
    "boton_agregar_meta_bloc_de_horarios"
);
function validar_datos_bloc_de_horarios() {
    const fecha_ingresada_bloc_de_horarios =
    fecha_bloc_de_horarios.value.trim();
    const hora_ingresada_bloc_de_horarios =
    hora_bloc_de_horarios.value.trim();
    const estado_seleccionado_bloc_de_horarios =
    estado_bloc_de_horarios.value;
    const nota_ingresada_bloc_de_horarios =
    nota_bloc_de_horarios.value.trim();
    if (
        fecha_ingresada_bloc_de_horarios !== "" &&
        hora_ingresada_bloc_de_horarios !== "" &&
        estado_seleccionado_bloc_de_horarios !==
        "Ninguna estado..." &&
        nota_ingresada_bloc_de_horarios !== ""
    ) {
        const total_horarios_tablero_de_horarios =
        document
        .querySelectorAll(
            "#tbody_tablero_de_horarios tr"
        )
        .length;
        if(
            total_horarios_tablero_de_horarios >=
            30
        ){
            alert(
                "Solo se permiten 30 horarios en el tablero."
            );
            return;
        }
        alert(
            "Se ha creado la hora correctamente"
        );
        agregar_hora_tablero_de_horarios(
            fecha_ingresada_bloc_de_horarios,
            hora_ingresada_bloc_de_horarios,
            nota_ingresada_bloc_de_horarios,
            estado_seleccionado_bloc_de_horarios
        );
    } else {
        alert(
            "No se ha agregado ninguna hora"
        );
    }
}
boton_agregar_meta_bloc_de_horarios
.addEventListener(
    "click",
    validar_datos_bloc_de_horarios
);
//---------------------------------------//
//--|funcionalidad_resumen_de_horarios|--//
//---------------------------------------//
const total_resumen_de_horarios =
document.getElementById(
    "total_resumen_de_horarios"
);
const completados_resumen_de_horarios =
document.getElementById(
    "completados_resumen_de_horarios"
);
const pendientes_resumen_de_horarios =
document.getElementById(
    "pendientes_resumen_de_horarios"
);
const en_progreso_resumen_de_horarios =
document.getElementById(
    "en_progreso_resumen_de_horarios"
);
function actualizar_resumen_de_horarios(){
    const horarios_tablero_de_horarios =
    JSON.parse(
        localStorage.getItem(
            "horarios_tablero_de_horarios"
        )
    ) || [];
    let total =
    horarios_tablero_de_horarios.length;
    let completados = 0;
    let pendientes = 0;
    let en_progreso = 0;
    horarios_tablero_de_horarios
    .forEach(
        function(horario){
            const estado =
            horario.estado
            .toLowerCase()
            .trim();
            if(
                estado === "completado"
            ){
                completados++;
            }
            else if(
                estado === "pendiente"
            ){
                pendientes++;
            }
            else if(
                estado === "en progreso"
            ){
                en_progreso++;
            }
        }
    );
    total_resumen_de_horarios
    .textContent = total;
    completados_resumen_de_horarios
    .textContent = completados;
    pendientes_resumen_de_horarios
    .textContent = pendientes;
    en_progreso_resumen_de_horarios
    .textContent = en_progreso;
}
window.addEventListener(
    "load",
    actualizar_resumen_de_horarios
);
//---------------------------------------//
//--|funcionalidad_tablero_de_horarios|--//
//---------------------------------------//
const tbody_tablero_de_horarios =
document.getElementById(
    "tbody_tablero_de_horarios"
);
let contador_filas_tablero_de_horarios = 0;
function guardar_horarios_tablero_de_horarios(
    fecha_tablero_de_horarios,
    hora_tablero_de_horarios,
    nota_tablero_de_horarios,
    estado_tablero_de_horarios
){
    let horarios_tablero_de_horarios =
    JSON.parse(
        localStorage.getItem(
            "horarios_tablero_de_horarios"
        )
    ) || [];
    horarios_tablero_de_horarios.push({
        fecha:
        fecha_tablero_de_horarios,
        hora:
        hora_tablero_de_horarios,
        nota:
        nota_tablero_de_horarios,
        estado:
        estado_tablero_de_horarios
    });
    localStorage.setItem(
        "horarios_tablero_de_horarios",
        JSON.stringify(
            horarios_tablero_de_horarios
        )
    );
}
function actualizar_localstorage_tablero_de_horarios(){
    const horarios_tablero_de_horarios =
    [];
    const filas_tablero_de_horarios =
    tbody_tablero_de_horarios
    .querySelectorAll("tr");
    filas_tablero_de_horarios
    .forEach(
        function(
            fila_tablero_de_horarios
        ){
            horarios_tablero_de_horarios.push({
                fecha:
                fila_tablero_de_horarios
                .children[1].textContent,
                hora:
                fila_tablero_de_horarios
                .children[2].textContent,
                nota:
                fila_tablero_de_horarios
                .children[3].textContent,
                estado:
                fila_tablero_de_horarios
                .children[4].textContent
            });
        }
    );
    localStorage.setItem(
        "horarios_tablero_de_horarios",
        JSON.stringify(
            horarios_tablero_de_horarios
        )
    );
}
function agregar_hora_tablero_de_horarios(
    fecha_tablero_de_horarios,
    hora_tablero_de_horarios,
    nota_tablero_de_horarios,
    estado_tablero_de_horarios,
    guardar_localstorage_tablero_de_horarios =
    true
){
    const fila_vacia_tablero_de_horarios =
    document.getElementById(
        "fila_vacia_tablero_de_horarios"
    );
    if(
        fila_vacia_tablero_de_horarios
    ){
        fila_vacia_tablero_de_horarios.remove();
    }
    contador_filas_tablero_de_horarios++;
    const fila_tablero_de_horarios =
    document.createElement("tr");
    fila_tablero_de_horarios.innerHTML = `
        <td>
            ${contador_filas_tablero_de_horarios}
        </td>
        <td>
            ${fecha_tablero_de_horarios}
        </td>
        <td>
            ${hora_tablero_de_horarios}
        </td>
        <td>
            ${nota_tablero_de_horarios}
        </td>
        <td>
            ${estado_tablero_de_horarios}
        </td>
        <td>
            <div
                class="acciones_tablero_de_horarios"
            >
                <i
                    class="fa-solid fa-eye boton_ver_tablero_de_horarios"
                    title="Vista previa"
                ></i>
                <i
                    class="fa-solid fa-pen-to-square boton_editar_tablero_de_horarios"
                    title="Editar"
                ></i>
                <i
                    class="fa-solid fa-trash boton_eliminar_tablero_de_horarios"
                    title="Eliminar"
                ></i>
            </div>
        </td>
    `;
    tbody_tablero_de_horarios.appendChild(
        fila_tablero_de_horarios
    );
    if(
        guardar_localstorage_tablero_de_horarios
    ){
        guardar_horarios_tablero_de_horarios(
            fecha_tablero_de_horarios,
            hora_tablero_de_horarios,
            nota_tablero_de_horarios,
            estado_tablero_de_horarios
        );
    }
    //------------------------//
    //--|boton_vista_previa|--//
    //------------------------//
    const boton_ver_tablero_de_horarios =
    fila_tablero_de_horarios.querySelector(
        ".boton_ver_tablero_de_horarios"
    );
    boton_ver_tablero_de_horarios
    .addEventListener(
        "click",
        function(){
            alert(
                "Fecha: " +
                fila_tablero_de_horarios
                .children[1].textContent +
                "\nHora: " +
                fila_tablero_de_horarios
                .children[2].textContent +
                "\nNota: " +
                fila_tablero_de_horarios
                .children[3].textContent +
                "\nEstado: " +
                fila_tablero_de_horarios
                .children[4].textContent
            );
        }
    );
    //------------------//
    //--|boton_editar|--//
    //------------------//
    const boton_editar_tablero_de_horarios =
    fila_tablero_de_horarios.querySelector(
        ".boton_editar_tablero_de_horarios"
    );
    boton_editar_tablero_de_horarios
    .addEventListener(
        "click",
        function(){
            const nueva_fecha =
            prompt(
                "Editar fecha:",
                fila_tablero_de_horarios
                .children[1].textContent
            );
            const nueva_hora =
            prompt(
                "Editar hora:",
                fila_tablero_de_horarios
                .children[2].textContent
            );
            const nueva_nota =
            prompt(
                "Editar nota:",
                fila_tablero_de_horarios
                .children[3].textContent
            );
            const nuevo_estado =
            prompt(
                "Editar estado:",
                fila_tablero_de_horarios
                .children[4].textContent
            );
            if(
                nueva_fecha !== null &&
                nueva_hora !== null &&
                nueva_nota !== null &&
                nuevo_estado !== null
            ){
                fila_tablero_de_horarios
                .children[1].textContent =
                nueva_fecha;
                fila_tablero_de_horarios
                .children[2].textContent =
                nueva_hora;
                fila_tablero_de_horarios
                .children[3].textContent =
                nueva_nota;
                fila_tablero_de_horarios
                .children[4].textContent =
                nuevo_estado;
                actualizar_localstorage_tablero_de_horarios();
            }
        }
    );
    //--------------------//
    //--|boton_eliminar|--//
    //--------------------//
    const boton_eliminar_tablero_de_horarios =
    fila_tablero_de_horarios.querySelector(
        ".boton_eliminar_tablero_de_horarios"
    );
    boton_eliminar_tablero_de_horarios
    .addEventListener(
        "click",
        function(){
            const confirmar_tablero_de_horarios =
            confirm(
                "¿Desea eliminar este horario?"
            );
            if(
                confirmar_tablero_de_horarios
            ){
                fila_tablero_de_horarios.remove();
                actualizar_localstorage_tablero_de_horarios();
            }
        }
    );
}
function cargar_horarios_tablero_de_horarios(){
    const horarios_tablero_de_horarios =
    JSON.parse(
        localStorage.getItem(
            "horarios_tablero_de_horarios"
        )
    ) || [];
    horarios_tablero_de_horarios
    .forEach(
        function(
            horario_tablero_de_horarios
        ){
            agregar_hora_tablero_de_horarios(
                horario_tablero_de_horarios.fecha,
                horario_tablero_de_horarios.hora,
                horario_tablero_de_horarios.nota,
                horario_tablero_de_horarios.estado,
                false
            );
        }
    );
}
window.addEventListener(
    "load",
    cargar_horarios_tablero_de_horarios
);