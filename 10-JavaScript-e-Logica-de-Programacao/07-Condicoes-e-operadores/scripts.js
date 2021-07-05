window.onload = function(){

    /*
    = - Recebe
    == - Igual
    === - idêntico (Mesmo valor e mesmo tipo de variável)
    != - Diferente
    !== - Diferente (Diferente valor e diferente tipo de variável)
    > - Maior
    < - Menor
    >= - Maior e igual
    <= - Menor e igual
    */

    /* VERIFICAÇÃO 1 */
    var nome = "Diego";

    if(nome == "João"){
        alert("VERDADEIRO!");
    }
    else if(nome == "Diego"){
        alert("VERDADEIRO!!");
    }
    else if(nome != "Marcos"){
        alert(nome + " é diferente de Marcos");
    }
    else if(nome == "Marcos"){
        alert(nome +" é igual a " + nome)
    }
    else{
        alert("FALSO");
    }


    /* VERIFICAÇÃO 3 */
    var idade = 2020 - 1950;

    if(idade >= 18){
        alert("PASSOU NO SISTEMA!");
    }
    else if(idade >= 60){
        alert("Senhor, você passou no sistema!");
    }
    else{
        alert("SISTEMA BLOQUEADO! MENOR DE IDADE");
    }


    /* VERIFICAÇÃO 4 */
    var idade_01 = "23";

    if(idade_01 === 23){
        alert("Número 23");
    }


    /* VERIFICAÇÃO 5 */
    var idade_02 = 10;

    if(idade_02 !== "11"){
        alert("É DIFERENTE EM VALOR E TIPO DE VARIÁVEL");
    }

}