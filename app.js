const PropertiesReader = require('properties-reader');
const axios = require('axios');
const fs = require('fs');

// Load the .properties file
const properties = PropertiesReader('app.properties');

// Read a specific property
const token = properties.get('token');
const url   = properties.get('url');
const filePath = properties.get('filename');

let getLocation = function(nodes) {
  let locations = new Promise((resolve, reject) => {

    nodes.then((nodenames=>{
      nodenames.forEach(node=>{
        axios.get(`${url}/api/v1/devices/name/${node}/status/info`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(response=>{
	  let location = response.data.netStatusList[0].location;
	    fs.writeFile(filePath, `${location.underlayIP},${location.hostname},${location.city},${location.region},${location.country},${location.loc},${location.org},${location.postal},${location.latlong},${location.freeloc}`, 'utf8', (err) => {
	      if (err) {
	        console.error('Error writing file:', err);
		  return;
		}
	      console.log('File written successfully!');
	    });
        }).catch(e2=>{
          console.error(e2);
        })
      })
    })).catch(e1=>{
      console.error(e1);
    });
    
  }).catch(error=>{
    console.error(error);
  });

  return locations;
}


let getNodes = function() {
  let nodes = new Promise((resolve, reject)=>{
    axios.get(url+'/api/v1/devices', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      let nodenames = [];

      response.data.list.forEach((node=>{
        nodenames.push(node.name);
        console.log(node.name)
      }))
      resolve(nodenames);
    })
    .catch(error => {
      reject(error);
      //console.error('Error:', error.response ? error.response.data : error.message);
    });
  });

  return nodes;
}


getLocation(getNodes());;
