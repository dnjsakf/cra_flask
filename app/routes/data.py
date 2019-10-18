from flask import Blueprint, request, make_response, jsonify

import os
import codecs
import json
contentList = json.load( codecs.open(os.path.join(os.path.dirname(__file__),'../data/dump.json'), 'r') )

blueprint = Blueprint('/data', __name__)
	
@blueprint.route('')
def getData():
	count = request.args.get('count')

	resp = make_response({ "receive": count })
	#resp.headers.set("Access-Control-Allow-Origin", "*")

	return resp

@blueprint.route('/list', methods= [ 'GET' ])
@blueprint.route('/list/<int:page>', methods= [ 'GET' ])
def getList( page ):

	page = page if page else 0
	rowsPerPage = int(request.args.get('rowsPerPage') if 'rowsPerPage' in request.args else 0 )

	start = ( page * rowsPerPage )
	end = ( start + rowsPerPage )

	data = {
		"list": contentList[start:end]
		, 'maxLength': len(contentList) 
	}
	
	return jsonify(data)
	