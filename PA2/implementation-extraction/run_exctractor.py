import sys
from webStemmer import start_stemmer
from xpath import run_xpath
from regexi import run_regex

type = sys.argv[1]

if type == "A":
    print(f"Selected exctractor is {type}")
    run_regex()
elif type == "B":
    print(f"Selected exctractor is {type}")
    run_xpath()
elif type == "C":
    print(f"Selected exctractor is {type}")
    start_stemmer()

else:
    raise ValueError("Wrong program parameters. Possible modes are A-regex,B-xPath,C-webStemmer")