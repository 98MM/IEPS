import os
import sys
import time
import string
import nltk
from bs4 import BeautifulSoup
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
nltk.download('punkt')
nltk.download('stopwords')

stop_words_slovene = set(stopwords.words("slovene")).union(set(
    ["ter", "nov", "novo", "nova", "zato", "še", "zaradi", "a", "ali", "april", "avgust", "b", "bi", "bil", "bila",
     "bile", "bili", "bilo", "biti",
     "blizu", "bo", "bodo", "bojo", "bolj", "bom", "bomo", "boste", "bova", "boš", "brez", "c", "cel", "cela",
     "celi", "celo", "d", "da", "daleč", "dan", "danes", "datum", "december", "deset", "deseta", "deseti", "deseto",
     "devet", "deveta", "deveti", "deveto", "do", "dober", "dobra", "dobri", "dobro", "dokler", "dol", "dolg",
     "dolga", "dolgi", "dovolj", "drug", "druga", "drugi", "drugo", "dva", "dve", "e", "eden", "en", "ena", "ene",
     "eni", "enkrat", "eno", "etc.", "f", "februar", "g", "g.", "ga", "ga.", "gor", "gospa", "gospod", "h", "halo",
     "i", "idr.", "ii", "iii", "in", "iv", "ix", "iz", "j", "januar", "jaz", "je", "ji", "jih", "jim", "jo",
     "julij", "junij", "jutri", "k", "kadarkoli", "kaj", "kajti", "kako", "kakor", "kamor", "kamorkoli", "kar",
     "karkoli", "katerikoli", "kdaj", "kdo", "kdorkoli", "ker", "ki", "kje", "kjer", "kjerkoli", "ko", "koder",
     "koderkoli", "koga", "komu", "kot", "kratek", "kratka", "kratke", "kratki", "l", "lahka", "lahke", "lahki",
     "lahko", "le", "lep", "lepa", "lepe", "lepi", "lepo", "leto", "m", "maj", "majhen", "majhna", "majhni",
     "malce", "malo", "manj", "marec", "me", "med", "medtem", "mene", "mesec", "mi", "midva", "midve", "mnogo",
     "moj", "moja", "moje", "mora", "morajo", "moram", "moramo", "morate", "moraš", "morem", "mu", "n", "na", "nad",
     "naj", "najina", "najino", "najmanj", "naju", "največ", "nam", "narobe", "nas", "nato", "nazaj", "naš", "naša",
     "naše", "ne", "nedavno", "nedelja", "nek", "neka", "nekaj", "nekatere", "nekateri", "nekatero", "nekdo",
     "neke", "nekega", "neki", "nekje", "neko", "nekoga", "nekoč", "ni", "nikamor", "nikdar", "nikjer", "nikoli",
     "nič", "nje", "njega", "njegov", "njegova", "njegovo", "njej", "njemu", "njen", "njena", "njeno", "nji",
     "njih", "njihov", "njihova", "njihovo", "njiju", "njim", "njo", "njun", "njuna", "njuno", "no", "nocoj",
     "november", "npr.", "o", "ob", "oba", "obe", "oboje", "od", "odprt", "odprta", "odprti", "okoli", "oktober",
     "on", "onadva", "one", "oni", "onidve", "osem", "osma", "osmi", "osmo", "oz.", "p", "pa", "pet", "peta",
     "petek", "peti", "peto", "po", "pod", "pogosto", "poleg", "poln", "polna", "polni", "polno", "ponavadi",
     "ponedeljek", "ponovno", "potem", "povsod", "pozdravljen", "pozdravljeni", "prav", "prava", "prave", "pravi",
     "pravo", "prazen", "prazna", "prazno", "prbl.", "precej", "pred", "prej", "preko", "pri", "pribl.",
     "približno", "primer", "pripravljen", "pripravljena", "pripravljeni", "proti", "prva", "prvi", "prvo", "r",
     "ravno", "redko", "res", "reč", "s", "saj", "sam", "sama", "same", "sami", "samo", "se", "sebe", "sebi",
     "sedaj", "sedem", "sedma", "sedmi", "sedmo", "sem", "september", "seveda", "si", "sicer", "skoraj", "skozi",
     "slab", "smo", "so", "sobota", "spet", "sreda", "srednja", "srednji", "sta", "ste", "stran", "stvar", "sva",
     "t", "ta", "tak", "taka", "take", "taki", "tako", "takoj", "tam", "te", "tebe", "tebi", "tega", "težak",
     "težka", "težki", "težko", "ti", "tista", "tiste", "tisti", "tisto", "tj.", "tja", "to", "toda", "torek",
     "tretja", "tretje", "tretji", "tri", "tu", "tudi", "tukaj", "tvoj", "tvoja", "tvoje", "u", "v", "vaju", "vam",
     "vas", "vaš", "vaša", "vaše", "ve", "vedno", "velik", "velika", "veliki", "veliko", "vendar", "ves", "več",
     "vi", "vidva", "vii", "viii", "visok", "visoka", "visoke", "visoki", "vsa", "vsaj", "vsak", "vsaka", "vsakdo",
     "vsake", "vsaki", "vsakomur", "vse", "vsega", "vsi", "vso", "včasih", "včeraj", "x", "z", "za", "zadaj",
     "zadnji", "zakaj", "zaprta", "zaprti", "zaprto", "zdaj", "zelo", "zunaj", "č", "če", "često", "četrta",
     "četrtek", "četrti", "četrto", "čez", "čigav", "š", "šest", "šesta", "šesti", "šesto", "štiri", "ž", "že",
     "svoj", "jesti", "imeti", "\u0161e", "iti", "kak", "www", "km", "eur", "pač", "del", "kljub", "šele", "prek",
     "preko", "znova", "morda", "kateri", "katero", "katera", "ampak", "lahek", "lahka", "lahko", "morati", "torej",
     "(", ")", "--", ";", ".", ",", "/", "-", "!", "?", "'", ":"]))

def find_snippets(txt, indices):
    ending_punct = ['.', '!', '?']
    snips = []


    if len(indices) > 3:
        ixs = [int(indices[0]), int(indices[int(len(indices)/2)]), int(indices[-1])]

        for ix in ixs:
            front = ix+1
            back = ix-1
            n_front = 0
            n_back = 0
            snip = txt[ix]
            """while n_front < 3 or n_back < 3:

                if text[back] == ' ':
                    n_back += 1
                if text[front] == ' ':
                    n_front += 1

                if snip[-1] in ending_punct:
                    n_front = 3
                if snip[0] != ' ' and snip[0].isupper():
                    n_back = 3

                if n_front < 3:
                    snip += text[front]
                    front += 1
                if n_back < 3:
                    snip = text[back] + snip
                    back -= 1"""

            while n_front < 3:
                if txt[front] == ' ':
                    n_front += 1
                if snip[-1] in ending_punct:
                    break
                snip += txt[front]
                front += 1

            while n_back < 3:
                if snip[0].isupper():
                    break
                if txt[back] == ' ':
                    n_back += 1
                snip = txt[back] + snip
                back -= 1

            if snip[-1] == ' ':
                snip = snip[:-1:]
            if snip[0] == ' ':
                snip = snip[1 : : ]

            if snip[0].islower():
                snip = '... ' + snip
            snips.append(snip)
            tmp = snips.index(snip)
            if tmp > 0 and snips[tmp][0] != '.':
                snips[tmp] = '... ' + snips[tmp]

        snips[-1] += ' ...'
    else:
        for ix in indices:
            ix = int(ix)
            front = ix + 1
            back = ix - 1
            n_front = 0
            n_back = 0
            snip = txt[ix]
            while n_front < 3:
                if text[front] == ' ':
                    n_front += 1
                if snip[-1] in ending_punct:
                    break
                snip += text[front]
                front += 1

            while n_back < 3:
                if snip[0].isupper():
                    break
                if text[back] == ' ':
                    n_back += 1
                snip = text[back] + snip
                back -= 1

            if snip[-1] == ' ':
                snip = snip[:-1:]
            if snip[0] == ' ':
                snip = snip[1 : : ]

            if snip[0].islower():
                snip = '... ' + snip
            snips.append(snip)
            tmp = snips.index(snip)
            if tmp > 0 and snips[tmp][0] != '.':
                snips[tmp] = '... ' + snips[tmp]
            snips[-1] += ' ...'
    return snips


root = os.path.join(os.path.dirname(__file__), 'PA3-data') # "C:\\Work\\Magisterij_1_leto\\2.semester\\ekstrakcijaSplet\\nal3\\PA3-data"
stop_words_english = stopwords.words('english')
query = sys.argv
query.pop(0)
query_string = ' '.join(query)
print(f'Results  for a query: "{query_string}"\n')
for i in range(len(query)):
    query[i] = query[i].lower()
    query[i] = query[i].translate(str.maketrans('', '', string.punctuation))

#query=["sistem","spot"]
#query[0].lower()
#query[1].lower()

print(f'Results  for a query: "{query}"\n')

candidates=[]
start_time = time.time()
stej=0
for subdir, dirs, files in os.walk(root):
    for file in files:
        stej+=1
        path = os.path.join(subdir, file)
        domain = os.path.basename(os.path.normpath(subdir))
        docName=path.split("\\")[-1] #names of documents
        frequency=0
        snippets = []
        with open(path, encoding='utf8') as fp:
            soup = BeautifulSoup(fp, 'html.parser')
            for script in soup(["script", "style"]):
                script.extract()  # remove script tags, style tags
            # get text, tokenize text, and remove stop words
            text = soup.get_text()
            textOG = ' '.join(text.split())
            tokensOG=word_tokenize(textOG)

            tokens = [(idx,token.lower()) for idx,token in enumerate(tokensOG) if not token in (stop_words_slovene or stop_words_english)]
            tokensQuery= [t for t in tokens if t[1] in query]
            frequency=len(tokensQuery)
            indices= [i for i,t in tokensQuery]

            if len(indices) > 3:
                ixs3 = [int(indices[0]), int(indices[int(len(indices) / 2)]), int(indices[-1])]
            else:
                ixs3=indices
            for iter,i in enumerate(ixs3):
                begin = max(i - 3,0)
                end = i + 3
                dolz=len(tokensOG)
                if end >= dolz:
                    end = dolz - 1
                snipp = tokensOG[begin:end]
                if(iter==0):
                    snipp = " ".join(snipp)
                    snipp = f"{snipp}..."
                elif iter==len(ixs3)-1:
                    snipp = " ".join(snipp)
                    snipp = f"..{snipp}"
                else:
                    snipp = " ".join(snipp)
                    snipp = f"..{snipp}..."
                snippets.append(snipp)
            if(frequency>0):
                candidates.append([frequency,docName,snippets])
            fp.close()


endTime=time.time()-start_time
print(stej)
print(f"Found query in {len(candidates)} pages")
print("Result found in {:0.2f} s\n".format(endTime))
nsnipets=3
Fspace=13
Dspace=40
Sspace=50
begin = f"{'Frequencies':<{Fspace}}{'Document':<{Dspace}}"
for i in range(nsnipets):
    snipp = f"Snippet {i}"
    begin += f"{snipp:<{Sspace}}"
print(begin,"\n","-" * (Fspace + Dspace * nsnipets +Sspace))

#labels = f"{'Frequencies':<{Fspace}}{'Document':<{Dspace}}{'Snippet':<{Sspace}}\n{'-----------':<{Fspace}}{'-'*41} {'-'*59}"
#print(labels)
candidates.sort(key=lambda x: x[0],reverse=True)

#print("here",candidates[0][2])


#with open('somefile2.txt', 'a',encoding="utf-8") as the_file:

for i in range(len(candidates)):
    line=str(candidates[i][0])+" "+str(candidates[i][1]) + str(candidates[i][2])
    #line = f"{candidates[i][0]:<{Fspace}}{candidates[i][1]:{Dspace}}"
    # for j in range(len(candidates[i][2])):
    #     line += f"{candidates[i][2][j]:<{Sspace}}"
    # print(line)
    #the_file.write(line+"\n")
    print("to",line)