document.getElementById('ano').innerHTML = new Date().getFullYear();

const form = document.getElementById("calculo");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // exibir
    const box = document.querySelector('.resultado-container');
    box.style.display = "block";

    setTimeout(() => {
        box.classList.add("ativo");
    }, 50);

    // pegar valores
    const idade = document.getElementById("idade").value;
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);
    const atividade = Number(document.getElementById("atividade").value);

    const sexoSelec = document.querySelector('input[name="sexo"]:checked');

    if (!sexoSelec) {
        alert("Selecione o sexo");
        return;
    }

    const sexo = sexoSelec.value;

    // calcular idade
 

    // calcular TMB
    let tbm;

    if (sexo === 'masculino') {
        tbm = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tbm = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    // gasto energético
    const get = tbm * atividade;

    // metas
    const perderPeso = get - 450;
    const manterPeso = get;
    const ganharPeso = get + 450;

    // exibir
    document.querySelector('.tBasal').innerHTML = `${tbm.toFixed(0)} kcal`;
    document.querySelector('.gEnergetico').innerHTML = `${get.toFixed(0)} kcal`;

    document.querySelector('.resultado').innerHTML = perderPeso.toFixed(0);
    document.querySelector('.resultado1').innerHTML = manterPeso.toFixed(0);
    document.querySelector('.resultado2').innerHTML = ganharPeso.toFixed(0);

    // MOSTRAR RESULTADO
    document.querySelector('.resultado-container').style.display = "block";
});

