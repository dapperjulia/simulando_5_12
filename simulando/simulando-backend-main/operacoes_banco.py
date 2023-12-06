import mysql.connector

# Conexão com o banco de dados
def obterConexao():
    conexao = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="simulando"
    )
    return conexao

#Obtém todos os usuários disponíveis
def obterUsuariosExistentes():
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("SELECT * FROM usuario")
    usuarios = cursor.fetchall()
    conexao.close()
    return usuarios

#Obtém um usuário específico
def obterUsuario(id):
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("SELECT * FROM usuario WHERE id = %s", (id,))
    usuario = cursor.fetchone()
    conexao.close()
    return usuario

#Insere um novo usuário
def inserirUsuario(usuario):
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("INSERT INTO usuario (nome, sobrenome, email, senha) VALUES (%s,%s, %s, %s)", (usuario["nome"],usuario["sobrenome"], usuario["email"], usuario["senha"]))
    conexao.commit()
    conexao.close()

#Atualiza um usuário
def atualizarUsuario(usuario, id):
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    sql = "UPDATE usuario SET nome = %s, sobrenome = %s, email = %s, senha = %s WHERE id = %s"
    cursor.execute(sql, [usuario['nome'], usuario['sobrenome'], usuario['email'], usuario['senha'],  id])
    conexao.commit()
    conexao.close()

#Remove um usuário
def removerUsuario(id):
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("DELETE FROM usuario WHERE id = %s", (id,))
    conexao.commit()
    conexao.close()

#Obtem todas as questões
def obterQuestoes():
    conexao = obterConexao()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("SELECT * FROM questao WHERE materia = 'Matemática' ORDER BY RAND() LIMIT 3")
    questoes = cursor.fetchall()
    cursor.execute("SELECT * FROM questao WHERE materia = 'Português e Literatura' ORDER BY RAND() LIMIT 3")
    questoes += cursor.fetchall()
    cursor.execute("SELECT * FROM questao WHERE materia = 'História' ORDER BY RAND() LIMIT 3")
    questoes += cursor.fetchall()
    cursor.execute("SELECT * FROM questao WHERE materia = 'Geografia' ORDER BY RAND() LIMIT 3")
    questoes += cursor.fetchall()
    conexao.close()
    return questoes