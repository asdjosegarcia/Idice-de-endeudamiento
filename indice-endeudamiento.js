function calcularEndeudamiento() {
    const totalActivos = document.getElementById("input-activo").value;
    const totalPasivos = document.getElementById("input-pasivo").value;
    /* totalActivos = 3597000
    totalPasivos = 1643000 */
    indiceEndeudamiento = ((totalPasivos / totalActivos) * 100).toFixed(2)
    resultado.innerText = indiceEndeudamiento +" %";
}
