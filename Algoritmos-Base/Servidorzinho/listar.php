<html>
    <head>
        <title>Listagem</title> 
    </head>
    <body>
        <?php
            $servidor = 'localhost';
            $usuario = 'root';
            $senha = 'root';
            $banco = 'Dados';
            // Conecta-se ao banco de dados MySQL
            $conexao = new mysqli($servidor, $usuario, $senha, $banco);
            // Caso algo tenha dado errado, exibe uma mensagem de erro
            if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
            $seletor = 'SELECT nome FROM Dados';
            $resultado = $conexao->query($seletor);
            if ($resultado){
                while($nomes = $resultado->fetch_assoc()){
                    echo '<h1> '.$nomes['nome'].' </h1>';

                }
            }else{
                echo '<h1> ERRO </h1>';
            }
        ?>
    </body>


</html>


