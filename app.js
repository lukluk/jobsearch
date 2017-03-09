var express = require('express');
var Handlebars = require('handlebars')
const fs = require('fs')
const request = require('request')
const md5 = require('md5')
var app = express();
var templates = {}
app.use('/assets', express.static(__dirname + '/assets'));
app.get('/', function(req, res){
	res.sendFile(__dirname+'/views/home.html')
})
app.get('/img/profile/:id',function(req,res){
	let PATH = 'profiles/'+req.params.id+'.jpg'
	if(fs.existsSync(PATH)){
		res.sendFile(__dirname+'/'+PATH)
	}else{
		res.sendFile(__dirname+'/assets/default.png')
	}
})
app.get('/search',function(req,res){
	request('http://139.59.246.11:8983/solr/jobsearch/select?q='+req.query.q+'&wt=json&indent=true',function(err,resp,body){		
		var result = JSON.parse(body)					
		
		for(var item in result.response.docs){			
			result.response.docs[item].current_position = 
		}
		console.log(result.response.docs)
		if(!templates['catalog'] || debug)
		templates['catalog'] = Handlebars.compile(fs.readFileSync('views/catalog.html','utf-8'))
		res.send(templates['catalog']({result:result.response.docs}))
	})
})

app.listen(3000);