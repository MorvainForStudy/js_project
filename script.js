let color = ["#000000", "#BF952A", "#6F9B02", "#7A9297", "#10C62D", "#2A46F6", "#B7628F", "#BD2928", "#874675", "#00B84C", "#D35A7E"];

function gerador() {
    var numerogen = Math.floor(Math.random() * color.length);
    var coraleatoria = color[numerogen];
    return coraleatoria
}

function texto() {
    var ctexto = document.getElementById('ctexto');
    var textosl = document.getElementsByClassName("porra");
    var cor = gerador();
    ctexto.style.color = cor;
    ctexto.innerHTML = cor;
    for (var i = 0; i < textosl.length; i++) {
        textosl[i].style.color = cor;

    }


}
function background() {
    var cfundo = document.getElementById('cfundo');
    var backcorsec = document.getElementById('fundo');
    let backcor = document.body;
    var cor = gerador();
    cfundo.innerHTML = cor;
    backcor.style.backgroundColor = cor;
    backcorsec.style.backgroundColor = cor;

}