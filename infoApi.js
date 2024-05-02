// const axios = require('axios');

// const token = '55e32b85-8a30-4533-84a0-9f5b1b81f45f';
// const apiUrl = 'https://app.na5.teamsupport.com/api/json/customers';

// const config = {
//   headers: {
//     'Authorization': `Bearer ${token}`
//   }
// };

// axios.get(apiUrl, config)
//   .then(response => {
//     console.log('Datos de la respuesta:', response.data);
//   })
//   .catch(error => {
//     console.error('Error al hacer la solicitud:', error);
//   });

//

const axios = require('axios');

const apiUrl = 'https://app.na5.teamsupport.com/api/json/customers';
const username = 'publi01@iditic.com';
const password = 'Z1yXseUE0P';
const credentials = Buffer.from(`${username}:${password}`).toString('base64');
const token = '55e32b85-8a30-4533-84a0-9f5b1b81f45f';

const config = {
  headers: {
    'Authorization': `Basic ${credentials}`, // Autenticación básica con las credenciales
    'X-Token': token // Token adicional
  }
};

axios.get(apiUrl, config)
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
