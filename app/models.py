from app import db
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy import func 
# db.Numeric de conexão com o banco de dados

class TableVendas(db.Model):
    __tablename__ = 'tabela_vendas'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(255), nullable=False)
    vendedor = db.Column(db.String(255), nullable=False)
    data = db.Column(db.String(100), nullable=False)
    plano = db.Column(db.String(100), nullable=False)
    tipodecarro = db.Column(db.String(100), nullable=False)
    comissao = db.Column(db.Numeric(10, 2), nullable=False)

    def __init__(self, nome, vendedor, data, plano, tipodecarro, comissao):
        self.nome = nome
        self.vendedor = vendedor
        self.data = data
        self.plano = plano
        self.tipodecarro = tipodecarro
        self.comissao = comissao


class TableInvestimentos(db.Model):
    __tablename__ = 'tabela_investimento'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tipo = db.Column(db.String(255), nullable=False)
    valor = db.Column(db.Numeric(10, 2), nullable=False)
    data = db.Column(db.String(255), nullable=False)
    descricao = db.Column(db.String(100), nullable=False)

    def __init__(self, tipo, valor, data, descricao):
        self.tipo = tipo
        self.valor = valor
        self.data = data
        self.descricao = descricao


class Config(db.Model):
    __tablename__ = 'tabela_config'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    plano_flex = db.Column(db.String(255), nullable=False)
    plano_essencial = db.Column(db.String(255), nullable=False)



def calcular_ivestimentos():
    soma = db.session.query(func.sum(TableInvestimentos.valor)).scalar()
    return soma

def calcular_comicao():
    finish_dado = db.session.query(func.sum(TableVendas.comissao)).scalar()
    return finish_dado

