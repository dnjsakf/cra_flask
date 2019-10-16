from flask import Blueprint, request, make_response, jsonify

blueprint = Blueprint('/data', __name__)
	
@blueprint.route('')
def getData():
	count = request.args.get('count')

	resp = make_response({ "receive": count })
	#resp.headers.set("Access-Control-Allow-Origin", "*")

	return resp

@blueprint.route('/list', methods= [ 'GET' ])	
def getList():

	page = int(request.args.get('page'))
	rowsPerPage = int(request.args.get('rowsPerPage'))


	start = ( page * rowsPerPage )
	end = ( start + rowsPerPage )

	data = {
		"list": articleList[start:end]
		, 'maxLength': len(articleList) 
	}

	# resp.headers.set("Access-Control-Allow-Origin", "*")
	# resp.headers.set("content-type", "json")
	
	return jsonify(data)


articleList = [
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
	},
	{
		"no": 4
		, "title": "hi"
		, "article": "hello, World!!!"
		, "cdate": "2019-10-16"
	}	,
	{
		"no": 5
		, "title": "hi"
		, "article": "hello, World!!!"
		, "cdate": "2019-10-16"
	}	,
	{
		"no": 6
		, "title": "hi"
		, "article": "hello, World!!!"
		, "cdate": "2019-10-16"
	}	
]
