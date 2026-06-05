from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

CASES = [
    {"id": "demo-1", "nombre": "Caso de ejemplo", "estado": "En expansión"},
]

@app.get('/api/casos')
def get_cases():
    return jsonify(CASES)

@app.post('/api/contacto')
def contacto():
    data = request.get_json(silent=True) or {}
    # Aquí después guardarías en una base de datos o enviarías correo.
    return jsonify({"ok": True, "mensaje": "Solicitud recibida", "data": data}), 201

if __name__ == '__main__':
    app.run(debug=True)
