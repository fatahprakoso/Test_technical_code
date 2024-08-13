from flask import Flask
from flask_cors import CORS
from sympy import primerange

app = Flask (__name__)
CORS(app, resources={r"/*": {"origin": "http://localhost:5173"}})

@app.get('/')
def debug():
  return "Hello World"

@app.post('/triangle/<int:n>')
def generateTriangle(n:int):
  string_n = str(n)
  triangle = []
  
  for i in range(len(string_n)):
    triangle.append(string_n[i] + ("" if i==0 else f'{0:0>{i}}'))
  
  print(triangle)
  return triangle

@app.post('/ganjil/<int:n>')
def generateGanjil(n:int):
  odd_numbers = [i for i in range(1, n+1, 2)]
  return odd_numbers
  
@app.post('/prima/<int:n>')
def generatePrima(n:int):
  return list(primerange(0, n+1))
