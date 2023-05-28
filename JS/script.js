
function ConvertC() {

    var C = parseFloat(document.getElementById('valorC').value);
    Quoc = C * 1.8 + 32;

    document.getElementById('resultF').innerHTML = ("A temperatura em °F é " + Quoc.toFixed(2));
}

function ConvertF() {
    var F = document.getElementById('valorF').value;
    QuocF = (F - 32) / 1.8;

    document.getElementById('resultC').innerHTML = ("A temperatura em ºC é " + QuocF.toFixed(2));
}

function valorTotal() {

    //Pegando nome, valor e quantidade do produto 1:
    var NomeProd1 = document.getElementById('produto1').value;
    var ValorProd1 = document.getElementById('ValorProd1').value;
    var QtdProd1 = document.getElementById('QtdProd1').value;

    //Pegando nome, valor e quantidade do produto 2:
    var NomeProd2 = document.getElementById('produto2').value;
    var ValorProd2 = document.getElementById('ValorProd2').value;
    var QtdProd2 = document.getElementById('QtdProd2').value;

    //Pegando nome, valor e quantidade do produto 3:
    var NomeProd3 = document.getElementById('produto3').value;
    var ValorProd3 = document.getElementById('ValorProd3').value;
    var QtdProd3 = document.getElementById('QtdProd3').value;

    //Somando o preço dos produtos
    QuocProd = (QtdProd1 * ValorProd1) + (QtdProd2 * ValorProd2) + (QtdProd3 * ValorProd3);

    //Exibindo o nome dos produtos na tabela:
    document.getElementById('Col1x1').innerHTML = (NomeProd1);
    document.getElementById('Col2x1').innerHTML = (NomeProd2);
    document.getElementById('Col3x1').innerHTML = (NomeProd3);

    //Exibindo o preço dos produtos na tabela:
    document.getElementById('Col1x2').innerHTML = ("R$ " + ValorProd1);
    document.getElementById('Col2x2').innerHTML = ("R$ " + ValorProd2);
    document.getElementById('Col3x2').innerHTML = ("R$ " + ValorProd3);

    //Exibindo a quantidade dos produtos na tabela:
    document.getElementById('Col1x3').innerHTML = (QtdProd1);
    document.getElementById('Col2x3').innerHTML = (QtdProd2);
    document.getElementById('Col3x3').innerHTML = (QtdProd3);

    //Exibindo o valor total da compra:
    document.getElementById('totalValor').innerHTML = ("O valor total da compra é de R$ " + QuocProd.toFixed(2));

}

function KmLitro() {
    var Km = document.getElementById('Kmtragem').value;
    var Preco = document.getElementById('Preco').value;

    Gasto = Preco / Km

    document.getElementById('ResultKM').innerHTML = ("O gasto total, por quilômetro, em reais, é de R$" + Gasto.toFixed(2))
}

function PesoIdealMasc() {
    var HMasc = document.getElementById('valorMasc').value;
    QuocMasc = (72 * HMasc) - 58;

    document.getElementById('resultMasc').innerHTML = ('O peso ideal desta pessoa é ' + QuocMasc.toFixed(2));
}

function PesoIdealFem() {
    var HFem = document.getElementById('valorFem').value;
    QuocFem = (62 * HFem) - 44.7;

    document.getElementById('resultFem').innerHTML = ('O peso ideal desta pessoa é ' + QuocFem.toFixed(2));
}

function assentamentoCalc() {
    var Largura = document.getElementById('Largura').value;
    var Comprimento = document.getElementById('Comprimento').value;

    var MetroQuad = Largura * Comprimento;
    var PrecoAssent = MetroQuad * 36;

    document.getElementById('MQuadrado').innerHTML = ("Resultado: Metro quadrado: " + MetroQuad.toFixed(2) + "m²");
    document.getElementById('resultAssent').innerHTML = (
        "O preço total para o assentamento do piso é de R$" + PrecoAssent.toFixed(2));

}

function maiorMenor() {

    var Numeros1 = document.getElementById('ListaNumeros').value;
    Numeros1 = Numeros1.split(",");

    var maior = parseInt(Numeros1[0]);
    var menor = parseInt(Numeros1[0]);

    for (i = 1; i <= Numeros1.length; i++) {
        if (parseInt(Numeros1[i]) > maior) {
            maior = parseInt(Numeros1[i]);
        }

        if (parseInt(Numeros1[i]) < menor) {
            menor = parseInt(Numeros1[i]);
        }
    }

    document.getElementById('ResultMaior').innerHTML = ("O maior valor da lista é " + maior)
    document.getElementById('ResultMenor').innerHTML = ("O menor valor da lista é " + menor)

}
