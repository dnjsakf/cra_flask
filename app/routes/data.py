from flask import Blueprint, request, make_response

blueprint = Blueprint('/data', __name__)
	
@blueprint.route('')
def getData():
	count = request.args.get('count')

	resp = make_response({ "receive": count })
	#resp.headers.set("Access-Control-Allow-Origin", "*")

	return resp