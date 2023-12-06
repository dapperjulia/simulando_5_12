from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from operacoes_banco import *
# from models import *

app = Flask(__name__)
CORS(app)

#endpoint para obter todos os usuarios existentes
@app.route("/usuariosExistentes", methods=["GET"])
def obter_UsuariosExistentes():
    usuarios = obterUsuariosExistentes()
    return jsonify(usuarios)

#endpoint para obter um usuario especifico
@app.route("/usuario/<int:id>", methods=["GET"])
def obter_Usuario(id):
    usuario = obterUsuario(id)
    return jsonify(usuario)

#endpoint para inserir um novo usuario
@app.route("/usuario", methods=["POST"])
def inserir_usuario():
    usuario = request.json
    inserirUsuario(usuario)
    return (jsonify({"mensagem":"Usuário adicionado com sucesso"})) 

#endpoint para atualizar um usuario
@app.route("/usuario/<int:id>", methods=["PUT"])
def atualizar_usuario(id):
    usuario = request.json
    atualizarUsuario(usuario,id)
    return (jsonify({"mensagem":"Usuário atualizado com sucesso"}))

#endpoint para remover um usuario
@app.route("/usuario/<int:id>", methods=["DELETE"])
def remover_Usuario(id):
    removerUsuario(id)
    return jsonify({"mensagem": "Usuario removido com sucesso"})

#endpoint para obter todas as questoes
@app.route("/questoes", methods=["GET"])
def obter_Questoes():
    questoes = obterQuestoes()
    return jsonify(questoes)

app.run()


# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/questions')
# def get_questions():
#     questao = Question.select()
#     choices = Choice.select()
#     data = []
#     for q in questions:
#         choices_data = [c for c in choices if c.question == q.question_text]
#         data.append({
#             'question': q.question_text,
#             'choices': [{'text': c.is_correct, 'correct': c.is_correct == 'true'} for c in choices_data]
#         })
#     return jsonify({'questions': data})

if __name__ == '__main__':
    app.run(debug=True)