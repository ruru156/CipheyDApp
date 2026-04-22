from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route("/decrypt", methods=["GET", "POST"])
def decrypt():
    data = request.json
    text = data.get("text")

    try:
        result = subprocess.run(
            ["ciphey", "-t", text],
            capture_output=True,
            text=True,
            timeout=10
        )

        output = result.stdout.strip()

    except Exception as e:
        output = str(e)

    return jsonify({
        "input": text,
        "decrypted": output
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)