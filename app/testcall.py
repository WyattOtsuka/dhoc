import requests
import time
s = requests.Session() 



response = s.get('http://localhost:3100/test')
print(str(response.content))