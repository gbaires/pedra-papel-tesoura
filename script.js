class Jogador {
	constructor(id) {
		this.id = id;
		this.pontuacao = 0;
		this.movimento = '';
	}
}

var jog1;
var jog2;

var qtdeMvts;

var btNovoJogo = document.querySelector('#novo-jogo');
btNovoJogo.onclick = () => novoJogo();
var btNovaRodada = document.querySelector('#nova-rodada');
btNovaRodada.disabled = true;
btNovaRodada.onclick = () => novaRodada();

var jog1IdEl = document.querySelector('#jog1 #id');
jog1IdEl.innerText = '---';
var jog1PontEl = document.querySelector('#jog1 #pontuacao');
jog1PontEl.innerText = 'Pontos: -';
var jog1MvtsEl = document.querySelector('#jog1 #movimentos');
jog1MvtsEl.disabled = true;
var arrBts = [...jog1MvtsEl.children];
arrBts.forEach(bt => bt.onclick = () => {
	jog1.movimento = bt.value;
	qtdeMvtsEl.innerText = `Movimentos: ${++qtdeMvts}`;
	jog1MvtsEl.disabled = true;
	lerMvtJog2();
});

var jog2IdEl = document.querySelector('#jog2 #id');
jog2IdEl.innerText = '---';
var jog2PontEl = document.querySelector('#jog2 #pontuacao');
jog2PontEl.innerText = 'Pontos: -';
var jog2MvtsEl = document.querySelector('#jog2 #movimentos');
jog2MvtsEl.disabled = true;
var arrBts = [...jog2MvtsEl.children];
arrBts.forEach(bt => bt.onclick = () => {
	jog2.movimento = bt.value;
	qtdeMvtsEl.innerText = `Movimentos: ${++qtdeMvts}`;
	jog2MvtsEl.disabled = true;
	definirResultado();
});

var qtdeMvtsEl = document.querySelector('#qtde-movimentos');
qtdeMvtsEl.innerText = 'Movimentos: -';
var msgsEl = document.querySelector('#mensagens');
msgsEl.innerText = 'Clique em Novo Jogo para começar';

function novoJogo() {
	msgsEl.innerText = '';
	jog1 = new Jogador(prompt('ID do 1º jogador', 'Jogador 1'));
	jog2 = new Jogador(prompt('ID do 2º jogador', 'Jogador 2'));
	jog1IdEl.innerText = jog1.id;
	jog2IdEl.innerText = jog2.id;
	jog1PontEl.innerText = `Pontos: ${jog1.pontuacao}`;
	jog2PontEl.innerText = `Pontos: ${jog2.pontuacao}`;
	qtdeMvts = 0;
	qtdeMvtsEl.innerText = `Movimentos: ${qtdeMvts}`;
	novaRodada();
}

function novaRodada() {
	jog1MvtsEl.disabled = false;
	msgsEl.innerText = `Esperando o movimento de ${jog1.id}`;
}

function lerMvtJog2() {
	jog2MvtsEl.disabled = false;
	msgsEl.innerText = `Esperando o movimento de ${jog2.id}`;
}

function definirResultado() {
	if(jog1.movimento === jog2.movimento) {
		msgsEl.innerText = 'Deu empate!';
	} else {
		var mvtVencedor = maisForte(jog1.movimento, jog2.movimento);
		if(jog1.movimento === mvtVencedor) {
			jog1.pontuacao++;
			jog1PontEl.innerText = `Pontos: ${jog1.pontuacao}`;
			msgsEl.innerText = `${jog1.id} venceu!`;
		} else {
			jog2.pontuacao++;
			jog2PontEl.innerText = `Pontos: ${jog2.pontuacao}`;
			msgsEl.innerText = `${jog2.id} venceu!`;
		}
		qtdeMvts = 0;
		qtdeMvtsEl.innerText = `Movimentos: ${qtdeMvts}`;
	}
	btNovaRodada.disabled = false;
}

function maisForte(mvt1, mvt2) {
	var maisForte = mvt1;
	if((mvt2 === 'pedra' && mvt1 === 'tesoura') || 
		(mvt2 === 'papel' && mvt1 === 'pedra') || 
		(mvt2 === 'tesoura' && mvt1 === 'papel')) {
		maisForte = mvt2;
	}
	return maisForte;
}