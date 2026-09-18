'use strict'

const btnCalcular = document.getElementById('btnCalcular')
const btnTema = document.getElementById('btnTema')

btnCalcular.addEventListener('click', calcularIdade)

function calcularIdade() {

    // Dados do nascimento

    let diaNas = document.getElementById('diaNas').value
    let mesNas = document.getElementById('mesNas').value
    let anoNas = document.getElementById('anoNas').value

    let dNas = Number(diaNas)
    let mNas = Number(mesNas)
    let aNas = Number(anoNas)

    // Data atual

    let data = new Date()

    let diaAtual = data.getDate()
    let mesAtual = data.getMonth() + 1
    let anoAtual = data.getFullYear()

    // Cálculo inicial

    let idadeDiaPessoa = diaAtual - dNas
    let idadeMesPessoa = mesAtual - mNas
    let idadeAnoPessoa = anoAtual - aNas



    // Se os dias forem negativos,
    // pega emprestado dias do mês anterior

    if (idadeDiaPessoa < 0) {

        idadeMesPessoa--

        let diasMesAnterior = new Date(anoAtual, mesAtual - 1,0).getDate()

        idadeDiaPessoa += diasMesAnterior
    }

    // Se os meses forem negativos,
    // pega emprestado 1 ano

    if (idadeMesPessoa < 0) {

        idadeAnoPessoa--
        idadeMesPessoa += 12
    }



    // Resultado

    let res = document.getElementById('res')
    res.style.fontSize = '1.5rem'
    res.innerHTML = `Você tem ${idadeAnoPessoa} anos, ${idadeMesPessoa} meses e ${idadeDiaPessoa} dias.`
}



btnTema.addEventListener('click', alterarTema)

function alterarTema() {

    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {

        btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>'

    } else {

        btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
}