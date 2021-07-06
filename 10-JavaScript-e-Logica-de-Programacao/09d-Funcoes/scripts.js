window.onload = function(){

    var obj = {};
    obj.nome = "Diego";
    obj.func = function(n1){
        return "Olá! Sou uma função dentro do objeto " + n1;
    }

    console.log(obj.nome);
    console.log(obj.func(10));
}