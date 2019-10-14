import os
from flask import Flask, render_template, url_for

from app.routes.data import blueprint as DataRoute

app = Flask(__name__, root_path='', static_url_path="/dist/static", static_folder='static', template_folder='app/templates')
app.register_blueprint(DataRoute, url_prefix='/data')


@app.route('/')
def index():
	return render_template('index.html')