window.onload = () => {
    //Establecer variables
    const cuadricula = document.getElementById("cuadricula");
    const inputRow = document.getElementsByName("gridRowGap");
    const inputColumn = document.getElementsByName("gridColumnGap");
    const visualizadores = document.getElementsByTagName("span");
    const estilo = "--distanciaRow: %1px; --distanciaColumn: %2px;";

    //Establecer valores iniciales.
    cuadricula.style = estilo.replaceAll("%1", inputRow[0].value).replaceAll("%2", inputColumn[0].value);
    visualizadores[0].innerHTML = inputRow[0].value;
    visualizadores[2].innerHTML = inputRow[0].value;
    visualizadores[1].innerHTML = inputColumn[0].value;
    visualizadores[3].innerHTML = inputColumn[0].value;

    //Cuando cambie el valor de un input, se actualizarán las etiquetas que lo muestran así como la variable en la propiedad style de la cuadrícula.
    inputRow[0].addEventListener("input", (e) => {
        visualizadores[0].innerHTML = e.target.value;
        visualizadores[2].innerHTML = e.target.value;
        cuadricula.style = estilo.replaceAll("%1", e.target.value).replaceAll("%2", inputColumn[0].value);
    });
    inputColumn[0].addEventListener("input", (e) => {
        visualizadores[1].innerHTML = e.target.value;
        visualizadores[3].innerHTML = e.target.value;
        cuadricula.style = estilo.replaceAll("%1", inputRow[0].value).replaceAll("%2", e.target.value);
    });
}