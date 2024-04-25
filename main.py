from app import app, db
from app.models import table_vendas , table_investimentos , calcular_ivestimentos,calcular_comicao
from flask import render_template, redirect


@app.route('/', methods=['GET', 'POST'])
def home():
    # calculo de pessoas alcançadas --------------------------
    indexDeMultiplicacao = table_vendas.query.filter().all() 
    valor_de_vendas = len(indexDeMultiplicacao)
    # --------------------------------------------------------
    # calculo de soma de comissão ----------------------------
    soma_comicao = calcular_comicao() 
    # --------------------------------------------------------
    soma_investimento = calcular_ivestimentos()
    lista_dados = [valor_de_vendas,soma_investimento,soma_comicao]
    return render_template('homepage.html',lista_dados=lista_dados)

@app.route('/vendaslp', methods=['GET', 'POST'])
def vendaslp():
    vendas = table_vendas.query.limit(4).all()
    investimentos = table_investimentos.query.limit(4).all()
    return render_template('vendaslp.html',vendas=vendas,investimentos=investimentos)

@app.route('/historico', methods=['GET', 'POST'])
def historico():
    vendas_Historico = table_vendas.query.limit(10).all()
    return render_template('historico.html',vendas_Historico=vendas_Historico)


@app.route('/config',methods=['GET', 'POST'])
def config():
    return render_template('config.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)