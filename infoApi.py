import requests

# Configuración de la URL base de la API y el token de acceso
base_url = 'https://app.knowledgeBase.teamsupport.com/api/xml/customers'
token = '55e32b85-8a30-4533-84a0-9f5b1b81f45f'

# Configuración de los encabezados de la solicitud con el token de acceso
headers = {'Authorization': f'Bearer {token}'}

# Realizar la solicitud GET a la API de TeamSupport
response = requests.get(base_url + '/tickets', headers=headers)

# Manejar la respuesta de la API
if response.status_code == 200:
    data = response.json()
    # Trabaja con los datos obtenidos
else:
    print('Error al hacer la solicitud:', response.status_code)
