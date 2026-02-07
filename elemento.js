function orgao(modelo) {
    let el = document.getElementById(modelo);
    if (!el) return;
    el.classList.remove("show");
    

    switch (modelo) {
        case 'tireoide': document.getElementById("tireoide").innerHTML = "é uma glândula do pescoço que produz hormônios que regulam o metabolismo e o funcionamento de vários órgãos. ";
            break;
        case "figado": document.getElementById("figado").innerHTML = "desempenha funções essenciais para o organismo, como a desintoxicação, a produção de proteínas e a digestão.";
            break;
        case "timo": document.getElementById("timo").innerHTML = "é uma parte importante do seu sistema imunológico. Ela ajuda a treinar os glóbulos brancos que protegem seu sistema imunológico. ";
            break;
        case "pancreas": document.getElementById("pancreas").innerHTML = "glândula situada na parte posterior do estômago, e que segrega o suco pancreático, além da insulina e do glucagon.";
            break;
        case "estomago": document.getElementById("estomago").innerHTML = "é um órgão muscular do sistema digestivo que armazena e digere alimentos. ";
            break;
        case "intestino": document.getElementById("intestino").innerHTML = "É responsável por digerir e absorver os alimentos, além de eliminar os resíduos. ";
            break;
        case "pulmao": document.getElementById("pulmao").innerHTML = "Órgãos essenciais do sistema respiratório, responsáveis pelas trocas gasosas com o sangue.";
            break;
        case "rins": document.getElementById("rins").innerHTML = "Filtros naturais do corpo, removem resíduos e controlam o equilíbrio de líquidos.";
            break;
        case "sis_excretor": document.getElementById("sis_excretor").innerHTML = "Conjunto de órgãos que eliminam substâncias tóxicas do corpo, como urina e suor.";
            break;
        case "sis_repro_masc": document.getElementById("sis_repro_masc").innerHTML = "Responsável pela produção de espermatozoides e hormônios como a testosterona.";
            break;
        case "sis_repro_fem": document.getElementById("sis_repro_fem").innerHTML = "Encarregado da ovulação, fertilização e desenvolvimento do feto.";
            break;
    }
    el.classList.add("show");

}
function limpa() {
    const ids = [
        "tireoide", "figado", "timo", "pancreas", "estomago",
        "intestino", "pulmao", "rins", "sis_excretor",
        "sis_repro_masc", "sis_repro_fem"
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = "";
            el.classList.remove("show");
        }
    });
}