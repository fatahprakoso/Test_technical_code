from flask import Flask

app = Flask (__name__)

@app.get('/')
def debug():
  return "Hello World"

@app.post('/triangle/<int:n>')
def generateTriangle(n:int):
  string_n = str(n)
  triangle = []
  
  for i in range(len(string_n)):
    triangle.append(string_n[i] + ("" if i==0 else f'{0:0>{i}}'))
  
  return triangle
