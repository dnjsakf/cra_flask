import os
from app.routes import app
from dotenv import load_dotenv

def createApp(env='dev'):
	# 환경변수
	envFile = os.path.join(os.path.dirname(__file__),'config','.env')
	envConf = load_dotenv( dotenv_path=envFile )
	app.config.from_object( envConf )
	
	# Flask Config
	pyConf = os.path.join(os.path.dirname(__file__),'config', f'config-{env}.py')
	app.config.from_pyfile( pyConf )
	
	return app