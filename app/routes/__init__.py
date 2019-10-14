import os
from flask import Flask, render_template

from app.routes.data import blueprint as DataRoute

app = Flask(__name__, root_path='app/', template_folder='templates')
app.register_blueprint(DataRoute, url_prefix='/data')


@app.route('/')
def index():
	return render_template('index.html')