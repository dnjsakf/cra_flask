from flask import Blueprint, request, make_response, jsonify

blueprint = Blueprint('/data', __name__)
	
@blueprint.route('')
def getData():
	count = request.args.get('count')

	resp = make_response({ "receive": count })
	#resp.headers.set("Access-Control-Allow-Origin", "*")

	return resp

@blueprint.route('/list', methods= [ 'GET' ])	
@blueprint.route('/list/<int:page>', methods= [ 'GET' ])
def getList(page):
	data = jsonify({
		"list": [
			{
				"no": 1
				, "title": "hi"
				, "article": "hello, World!!!"
				, "cdate": "2019-10-16"
			},
			{
				"no": 2
				, "title": "hi"
				, "article": "hello, World!!!"
				, "cdate": "2019-10-16"
			},
			{
				"no": 3
				, "title": "hi"
				, "article": "hello, World!!!"
				, "cdate": "2019-10-16"
			}		
		]
	})
	resp = make_response(data)
	resp.headers.set("Access-Control-Allow-Origin", "*")
	#resp.headers.set("content-type", "json")
	
	return resp