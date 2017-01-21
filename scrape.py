from bs4 import BeautifulSoup

import requests

r  = requests.get("http://www.alexa.com/topsites/category/Top/Shopping")

data = r.text

soup = BeautifulSoup(data,"lxml")
descs = soup.find_all('p', attrs={'class' : 'desc-paragraph'})
#print descs
for link in descs:
    print link.text,