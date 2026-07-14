const prompt = require ("prompt-sync")();

// === ETAPA 1 ===
// 1. Crie um array com pelo menos 5 titulos de musicas
// const playlist = [];

console.log("Playlist Atual:");
const playlist =["Moon River", "Fashion Killa", "Shake It Off", "White Ferrari","Ivy"];

// 2. Adicione pelo menos 3 musicas com push()

playlist.push("Swim Good", "No Role Modelz", "Hero");

// 3. Exiba todas as musicas com um loop for...of
for (const musica of playlist) {
    console.log(musica);
}

// 4. Verifique se "Bohemian Rhapsody" esta na lista com includes()
// -> Se estiver: console.log("Musica encontrada!")
// -> Se nao: console.log("Musica nao encontrada.")

if (playlist.includes("Bohemian Rhapsody")) {
    console.log("Musica encontrada!");
} else {
    console.log("Musica nao encontrada.");
}
console.log("------------------");

// 5. Remova a ultima musica com pop() e exiba qual foi removida
const ultimaMusica = playlist.pop();
console.log(`A musica removida foi: ${ultimaMusica}`);

console.log("------------------");

// 6. Adicione uma nova musica no INICIO da lista com unshift()
playlist.unshift("Like a Tattoo");

// 7. Exiba a playlist atualizada com for...of
console.log("Playlist Atualizada:");
for (const musica of playlist) {
    console.log(musica);
}
console.log("------------------");

// === ETAPA 2 ===
console.log("Playlist Detalhada:");

// Cada musica deve ter: { titulo, artista, duracao, curtida }
// Exemplo:
// { titulo: "Blinding Lights", artista: "The Weeknd", duracao: "3:20", curtida: true }
// const playlistDetalhada = [
// adicione pelo menos 5 musicas aqui
// ];
// 1. Liste todas as musicas exibindo:
// "[titulo] - [artista] ([duracao])"

const playlistDetalhada = [
    { titulo: "Pyramids",
         artista: "Frank Ocean",
          duracao: "9:53",
           curtida: true 
        },
    { titulo: "Snooze",
         artista: "SZA",
          duracao: "3:57",
           curtida: false
         },
    { titulo: "Location",
         artista: "Playboi Carti",
          duracao: "2:37",
           curtida: true 
        },
    { titulo: "Too Fast",
         artista: "Sonder",
          duracao: "3:30",
           curtida: true 
        },
    { titulo: "WUSYANAME",
         artista: "Tyler, The Creator",
          duracao: "3:51",
           curtida: false 
        }
];

// 1. Liste todas as musicas exibindo:
// "[titulo] - [artista] ([duracao])"
for (const musica of playlistDetalhada) {
    console.log(`${musica.titulo} - ${musica.artista} (${musica.duracao})`);
}

console.log("------------------");
// 2. Procure uma musica pelo titulo usando for...of + if
// -> Se encontrar: exiba todos os dados dela
// -> Se nao encontrar: exiba "Musica nao encontrada."
const musicaProcurada = prompt("Digite o nome da musica que deseja procurar: ");
let encontrada = false;
for (const musica of playlistDetalhada) {
    if (musica.titulo === musicaProcurada) {
        console.log("Musica encontrada!");
        console.log(musica);
        encontrada = true;
        break;
    }
}
if (!encontrada) {
    console.log("Musica nao encontrada.");
}

console.log("------------------");
// 3. Liste APENAS as musicas curtidas (curtida === true) usando for...of + if
// -> Exiba "[titulo] - [artista]" para cada uma
console.log("Musicas Curtidas:");
for (const musica of playlistDetalhada) {
    if (musica.curtida) {
        console.log(`${musica.titulo} - ${musica.artista}`);
    }
}

console.log("------------------");
// 4. Conte quantas musicas foram curtidas usando for...of + if
// -> Use uma variavel contadora que começa em 0
// -> Exiba: "Total de musicas curtidas: X"
let totalCurtidas = 0;
for (const musica of playlistDetalhada) {
    if (musica.curtida) {
        totalCurtidas++;
    }
}
console.log(`Total de musicas curtidas: ${totalCurtidas}`);

// === ETAPA 3 ===
// const filaDeReproducao = [];
// 1. Adicione 3 musicas na fila com push()
// (pode usar strings simples com o titulo)

const filaDeReproducao = ["Pyramids", "Snooze", "Location"];

// 2. Exiba a fila atual com for...of
console.log("------------------");
console.log("Fila de Reprodução:");
for (const musica of filaDeReproducao) {
    console.log(musica);
}

// 3. "Reproduza" a proxima musica da fila com shift()
// -> Exiba: "Reproduzindo: [titulo]"
// -> Faca isso 2 vezes

console.log("------------------");

const musica1 = filaDeReproducao.shift();
console.log(`Reproduzindo: ${musica1}`);

const musica2 = filaDeReproducao.shift();
console.log(`Reproduzindo: ${musica2}`);

// 4. Exiba a fila apos as reproducoes
console.log("------------------");

console.log("Fila restante:");
for (const musica of filaDeReproducao) {
    console.log(musica);
}

// 5. DESAFIO: encontre a musica com MAIS curtidas da playlistDetalhada...
// espera, todas tem true ou false. Entao: encontre a primeira musica
console.log("------------------");

let primeiraCurtida = null;
for (const musica of playlistDetalhada) {
    if (musica.curtida) {
        primeiraCurtida = musica;
        break;
    }
}
if (primeiraCurtida) {
    console.log("Primeira musica curtida:");
    console.log(primeiraCurtida);
} else {
    console.log("Nenhuma musica encontrada.");
}