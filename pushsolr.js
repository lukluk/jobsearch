var solr = require('solr-client');
var client = solr.createClient({
path:'/solr/product'
});
const fs = require('fs');
var n = 0
client.autoCommit = true;
var files = []
function add(file){
	var obj = JSON.parse(fs.readFileSync('./data/candidates/'+file,'utf-8'))     
	client.add(item,function(err,robj){
   	   n++
	   if(err){
	      console.log(err);
	   }else{
	      console.log('Solr response:', robj);

	      add(files[n])
	   }
	});
}

fs.readdir('./data/candidates', (err, result) => {  
  files = result
  add(files[n])
})
