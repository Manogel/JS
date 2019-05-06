<?php
$servidor = 'localhost';
$usuario = 'root';
$senha = 'root';
$banco = 'Dados';
// Conecta-se ao banco de dados MySQL
$conexao = new mysqli($servidor, $usuario, $senha, $banco);
// Caso algo tenha dado errado, exibe uma mensagem de erro
if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());

$nome = $_POST['nome']; //armazenando os argumentos identificados pelo name passado pelo metodo post 
$idade = $_POST['idade'];
$peso = $_POST['peso'];


$insere = $conexao->query("INSERT INTO Dados(nome, idade, peso) values ('$nome', '$idade', '$peso')"); 
//inserindo no BD os dados adquiridos
if($insere){
    $conexao->close();
    echo '<meta http-equiv="refresh" content="2; URL=index.html" />'; 
    echo "Inserido";
}else{
    echo "Erro", $insere->error;
}





