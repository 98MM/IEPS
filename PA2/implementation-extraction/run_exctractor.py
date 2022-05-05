import sys
from webStemmer import start_stemmer
#TODO SE VAJINA EKSTRAKTORJA

type = sys.argv[1]

if type == "A":
    print(f"Selected exctractor is {type}")
elif type == "B":
    print(f"Selected exctractor is {type}")
elif type == "C":
    print(f"Selected exctractor is {type}")
    start_stemmer()

else:
    raise ValueError("Wrong program parameters. Possible modes are A-regex,B-xPath,C-webStemmer")