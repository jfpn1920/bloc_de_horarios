<?php
require_once "conexion.php";
$accion = $_POST["accion"] ?? "";
if($accion == "guardar"){
    $fecha = $_POST["fecha"];
    $hora = $_POST["hora"];
    $nota = $_POST["nota"];
    $estado = $_POST["estado"];
    $sql = "
        INSERT INTO bloc_horario(
            fecha,
            hora,
            nota,
            estado
        )
        VALUES(
            ?,
            ?,
            ?,
            ?
        )
    ";
    $sentencia =
    $conexion->prepare($sql);
    $sentencia->bind_param(
        "ssss",
        $fecha,
        $hora,
        $nota,
        $estado
    );
    if(
        $sentencia->execute()
    ){
        echo json_encode([
            "estado" => true,
            "mensaje" =>
            "Horario guardado correctamente"
        ]);
    }else{
        echo json_encode([
            "estado" => false,
            "mensaje" =>
            "Error al guardar horario"
        ]);
    }
    exit;
}
if($accion == "consultar"){
    $sql =
    "SELECT * FROM bloc_horario
    ORDER BY id DESC";
    $resultado =
    $conexion->query($sql);
    $horarios = [];
    while(
        $fila =
        $resultado->fetch_assoc()
    ){
        $horarios[] = $fila;
    }
    echo json_encode(
        $horarios
    );
    exit;
}
//------------//
//--|editar|--//
//------------//
if($accion == "editar"){
    $id = $_POST["id"];
    $fecha = $_POST["fecha"];
    $hora = $_POST["hora"];
    $nota = $_POST["nota"];
    $estado = $_POST["estado"];
    $sql = "
        UPDATE bloc_horario
        SET
            fecha = ?,
            hora = ?,
            nota = ?,
            estado = ?
        WHERE id = ?
    ";
    $sentencia =
    $conexion->prepare($sql);
    $sentencia->bind_param(
        "ssssi",
        $fecha,
        $hora,
        $nota,
        $estado,
        $id
    );
    if(
        $sentencia->execute()
    ){
        echo json_encode([
            "estado" => true,
            "mensaje" =>
            "Horario actualizado correctamente"
        ]);
    }else{
        echo json_encode([
            "estado" => false,
            "mensaje" =>
            "Error al actualizar horario"
        ]);
    }
    exit;
}
//--------------//
//--|eliminar|--//
//--------------//
if($accion == "eliminar"){
    $id = $_POST["id"];
    $sql =
    "DELETE FROM bloc_horario
        WHERE id = ?";
    $sentencia =
    $conexion->prepare($sql);
    $sentencia->bind_param(
        "i",
        $id
    );
    if(
        $sentencia->execute()
    ){
        echo json_encode([
            "estado" => true,
            "mensaje" =>
            "Horario eliminado correctamente"
        ]);
    }else{
        echo json_encode([
            "estado" => false,
            "mensaje" =>
            "Error al eliminar horario"
        ]);
    }
    exit;
}
?>