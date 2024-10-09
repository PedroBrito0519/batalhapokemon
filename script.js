let placarUsuario = 0;
let placarPC = 0;

function escolherJogador() {
    const BatalhaPokemon = ["Pikachu", "Squirtle", "Bulbassaur", "Charmander"];
    let numeroAleatorio = Math.floor(Math.random() * BatalhaPokemon.length);
    return BatalhaPokemon[numeroAleatorio];
}

function escolherUsuario(botaoclicado) {
    return botaoclicado; 
}

function jogar(botaoclicado) {
    const jogadaPC = escolherJogador();
    const jogadaUsuario = escolherUsuario(botaoclicado);
    let resultado = "";
    

    const gifs = {
        empate: "unnamed.gif",
        derrota: "transparent-gifs-i-made-from-the-pokémon-anime-for-an-v0-1wxi2yjtxb7a1.gif",
        vitoria: "icegif.gif"
    };

    if (jogadaPC === jogadaUsuario) {
        resultado = "Empate!";
        gifUrl = gifs.empate;
    } else if (
        (jogadaPC === "Pikachu" && (jogadaUsuario === "Bulbassaur" || jogadaUsuario === "Squirtle")) ||
        (jogadaPC === "Squirtle" && (jogadaUsuario === "Pikachu" || jogadaUsuario === "Charmander")) ||
        (jogadaPC === "Charmander" && (jogadaUsuario === "Bulbassaur" || jogadaUsuario === "Pikachu")) ||
        (jogadaUsuario === "Pikachu" && (jogadaPC === "Bulbassaur" || jogadaPC === "Squirtle")) ||
        (jogadaUsuario === "Squirtle" && (jogadaPC === "Pikachu" || jogadaPC === "Charmander")) ||
        (jogadaUsuario === "Bulbassaur" && (jogadaPC === "Squirtle" || jogadaPC === "Charmander")) ||
        (jogadaUsuario === "Charmander" && (jogadaPC === "Bulbassaur" || jogadaPC === "Pikachu")) 
    ) {
        resultado = "Você perdeu! O PC jogou " + jogadaPC;
        placarPC++;
        gifUrl = gifs.derrota;
    } else {
        resultado = "Você ganhou! O PC jogou " + jogadaPC;
        placarUsuario++;
        gifUrl = gifs.vitoria;
    }

    document.getElementById("resultado").innerText = resultado;
    document.getElementById("placarUsuario").innerText = placarUsuario;
    document.getElementById("placarPC").innerText = placarPC;
    document.getElementById("gif").innerHTML = `<img src="${gifUrl}" alt="GIF Resultado">`;
}
