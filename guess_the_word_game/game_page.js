//AULA 91 

//localStorage nos permitirá buscar dados do armazenamento local.
//getItem(“player1Name”): getItem() é o método usado para obter o valor do armazenamento local.
//player1Name é a chave a ser passada para getItem(). Isso significa que ele obterá apenas o valor cuja chave é player1Name.
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	//variáveis criadas para armazenar a pontuação do jogador
	player1Score = 0;
	player2Score = 0;

	//atualização do nome do player nos respectivos elementos HTML usando seu id
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

// atualização sa pontuação do player1 nos elementos HTML usando o id “player1_score”
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

//atualização do elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de fazer a pergunta, que é player1.
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

//função do botão enviar
function send() {
	//Pegaremos a palavra da caixa de entrada usando o id da caixa de entrada e a armazenaremos dentro de uma variável.
	getWord = document.getElementById("word").value;
	//altera letra caso esteja maiúscula em minúscula
	word = getWord.toLowerCase();
	//console para testar se está certo
	console.log("palavra em caixa baixa = " + word);

	//o charAt1 - obstém uma letra
    charAt1 = word.charAt(1);
	console.log(charAt1);

	//obtém a letra do meio
	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

	//o replace substitui a palavra por "_"
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

	// tag h4 com um id para armazenar a palavra dentro dessa tag, e colocar tudo isso dentro de uma variável;
    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";

	// tag br, “Resposta:” é uma caixa de entrada com um id,coloque tudo isso dentro de uma variável;
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";

	// adicionando 2 tags br, um botão com a classe bootstrap 'btn btn-info' 
	//e uma função onclick check(), e colocando tudo isso dentro de uma variável que definiremos na próxima aula.
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
	
	// variável que contém a palavra, a caixa de entrada e o botão Checar dentro de uma única variável;
    row =  question_word + inputBox + checkButton ; 

	//atualizando a div que tem a saída id com a variável de linha;
    document.getElementById("output").innerHTML = row;

	//atualizando o valor da caixa de entrada do questionador com um valor nulo;
	document.getElementById("word").value = "";
}
//FIM DA AULA 91

//AULA 92 - INICIO
//Turnos dos jogadores
questionTurn = "player1";
answerTurn = "player2";

//função checar
function check()
{
	//obter a palavra da caixa de inserção da resposta com a id, e a armazenar em uma variável.
	getAnswer = document.getElementById("inputCheckBox").value;

	//converter as respostas em letras minúsculas
	answer = getAnswer.toLowerCase();

	//apresentar no console log
	console.log("resposta em caixa baixa - " + answer);

	//comparação com a palavra da pergunta e a da resposta
	if(answer == word)	
	{
		//se o turno da resposta for igual player 1 então...
		if(answerTurn == "player1")
		{
			//player um aumentará sua pontuação
			player1Score = player1Score + 1;
			//mostrará na página html
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			//se o player com a resposta for o player2, então aumentará a pontuação
			player2Score = player2Score + 1;
			//mostrará na página html
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}

	//Trocas de turno

	//se o turno da questão for igual ao player1
	if(questionTurn == "player1")
	{
		//ele trocará o turno por player2
		questionTurn = "player2"
		//mostrará na página web
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		//senão ele deve trocar para o que estava antes
		questionTurn = "player1"
		//mostrará na página web
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	//se a o turno da resposta for player 1
	if(answerTurn == "player1")
	{
		//trocará para o player2
		answerTurn = "player2"
		//mostrará na página web
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		//deverá trocar para o player 1 e...
		answerTurn = "player1"

		//mostrará na página web
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}
	//deixa a div vazia
    document.getElementById("output").innerHTML = "";
}

