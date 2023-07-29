function calcularValor(){
    let selectConverter = document.getElementById("moeda1").value;
    let selectConvertido = document.getElementById("moeda2").value;
    let valorInserido = document.getElementById("valor-inserido").value;
    let valorConvertido;

    if(selectConverter == "real"){
        switch (selectConvertido){
            case "real":
                valorConvertido = valorInserido;
                document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                break;
            case "dolar":
                valorConvertido = valorInserido/4.73;
                document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                break;
            case "euro":
                valorConvertido = valorInserido/5.22;
                document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                break;
            case "libra":
                valorConvertido = valorInserido/6.08;
                document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                break;
            default:
                break;
        }
    } else {
        if(selectConverter == "dolar"){
            switch (selectConvertido){
                case "real":
                    valorConvertido = valorInserido*4.73;
                    document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                    break;
                case "dolar":
                    valorConvertido = valorInserido;
                    document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                    break;
                case "euro":
                    valorConvertido = valorInserido*0.91;
                    document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                    break;
                case "libra":
                    valorConvertido = valorInserido*0.78;
                    document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                    break;
                default:
                    break;
            }
        } else {
            if(selectConverter == "euro"){
                switch (selectConvertido){
                    case "real":
                        valorConvertido = valorInserido*5.22;
                        document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                        break;
                    case "dolar":
                        valorConvertido = valorInserido*1.10;
                        document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                        break;
                    case "euro":
                        valorConvertido = valorInserido;
                        document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                        break;
                    case "libra":
                        valorConvertido = valorInserido*0.86;
                        document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                        break;
                    default:
                        break;
                }
            } else {
                if(selectConverter == "libra"){
                    switch (selectConvertido){
                        case "real":
                            valorConvertido = valorInserido*6.08;
                            document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                            break;
                        case "dolar":
                            valorConvertido = valorInserido*1.28;
                            document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                            break;
                        case "euro":
                            valorConvertido = valorInserido*1.16;
                            document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                            break;
                        case "libra":
                            valorConvertido = valorInserido;
                            document.getElementById("valor-convertido").value = valorConvertido.toFixed(2);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
}


/*function calcularValor(){
    let valorReal = document.getElementById("valor-real").value;
    let select = document.getElementById("moeda").value;
    let valorConvertido;

    switch (select){
        case "dolar":
            valorConvertido = valorReal*4.73;
            document.getElementById("valor-convertido").value = valorConvertido;
            break;
        case "euro":
            valorConvertido = valorReal*5.22;
            document.getElementById("valor-convertido").value = valorConvertido;
            break;
        case "libra":
            valorConvertido = valorReal*6.08;
            document.getElementById("valor-convertido").value = valorConvertido;
            break;
        default:
    }
}*/

document.getElementById("valor-inserido").onkeydown = function(e){
    if(e.keyCode == 13){
        calcularValor();
        e.preventDefault();
    }
}

document.getElementById("submit").onclick = function(e){
    calcularValor();
    e.preventDefault();
}