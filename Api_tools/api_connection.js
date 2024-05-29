// Bibliotecas de conexión y de lectura de archivos
const https = require('https');
const fs = require('fs');

// Variariables de conexión
const organizationID = '748448';
const apiToken = '55e32b85-8a30-4533-84a0-9f5b1b81f45f';
const credentials = `${organizationID}:${apiToken}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

// Ruta de petición de la Api
const endpoint = 'Tickets/993/Actions';
const directory = 'actions_ticket'

// Opciones de nuestra petición
const options = {
  hostname: 'app.teamsupport.com',
  path: `/api/json/${endpoint}`,
  method: 'GET',
  headers: {
    'Authorization': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/json',
    'User-Agent': 'Iditic',
  },
};


// Petición y escritura de la info obtenida en nuestro archivo json definido
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const parsedData = data;
      fs.writeFile(`./apiJSON/${directory}.json`, parsedData, (err) => {
        if (err) throw err;
        console.log("Nuevos datos agregados");
      });
      console.log('Parsed Response:', parsedData);
      // Now you can access the data as a JavaScript object
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();


