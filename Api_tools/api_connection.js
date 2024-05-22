const https = require('https');
const fs = require('fs');

const organizationID = '748448';
const apiToken = '55e32b85-8a30-4533-84a0-9f5b1b81f45f';
const credentials = `${organizationID}:${apiToken}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

const endpoint = 'Tickets/993/Actions';
const directory= 'actions_ticket'

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

// const array = [994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013] ACTIONS

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


