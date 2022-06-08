let musicas = [
    {titulo:'Lugar ao Sol', artista:'Charlie Brown JR', src:'musicas/Lugar Ao Sol - Charlie Brown Jr..mp3',img:'imagens/CBJ.jpeg'},
    {titulo:'Sweater Weather', artista:'The Neighbourhod', src:'musicas/The Neighbourhood - Sweater Weather (Official Video).mp3',img:'imagens/the-neighborhood.webp'}

]

let  musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// eventos
document.querySelector('.botao-play'),addEventListener('click', tocarMusica);

document.querySelector('.botao-pause'),addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior'),addEventListener('click', () => {
    renderizarMusica();
});

// funçoes
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
};

function pausarMusica(){
//    musica.pause();
//    document.querySelector('.botao-pause').style.display = 'none';
//    document.querySelector('.botao-play').style.display = 'block';
};

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
};

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    };
    
    return campoMinutos+':'+campoSegundos;
};