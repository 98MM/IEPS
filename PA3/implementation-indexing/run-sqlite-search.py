import sqlite3
import sys
import time
import os
from _ast import Is

from bs4 import BeautifulSoup

root = os.path.join(os.path.dirname(__file__), 'PA3-data')
ending_punct = ['.','!','?']

#print(root)
st = time.time()
query = sys.argv
query.pop(0)
query_string = ' '.join(query)
print(f'Results  for a query: "{query_string}"\n')
for i in range(len(query)):
    query[i] = query[i].lower()
#print('Query list:', query)
conn = sqlite3.connect('inverted-index.db')
c = conn.cursor()

seq = ','.join(['?']*len(query))
sqlite_query = '''
    SELECT p.documentName AS docName, SUM(frequency) AS freq, GROUP_CONCAT(indexes) AS idxs
    FROM Posting p
    WHERE
        p.word IN (''' + seq + ''')
    GROUP BY p.documentName
    ORDER BY freq DESC;
    '''

cursor = c.execute(sqlite_query, query)
et = time.time()
endTime = et - st
print("Result found in {:0.2f} ms\n".format(endTime*1000))

Fspace=12
Dspace=42
Sspace=59
labels = f"{'Frequencies':<{Fspace}}{'Document':<{Dspace}}{'Snippet':<{Sspace}}\n{'-----------':<{Fspace}}{'-'*41} {'-'*59}"
print(labels)

def find_snippets(file, indices):

    file = file.split('/')
    path = os.path.join(root, file[0])
    path = os.path.join(path, file[1])
    indices = indices.split(',')
    snips = []

    with open(path, encoding="utf8") as f:
        soup = BeautifulSoup(f, 'html.parser')

        for script in soup(["script", "style"]):
            script.extract()

        text = soup.get_text()
        text = ' '.join(text.split())
        length = len(text)

        if len(indices) > 3:
            ixs = [int(indices[0]), int(indices[int(len(indices)/2)]), int(indices[-1])]

            for ix in ixs:
                front = ix+1
                back = ix-1
                n_front = 0
                n_back = 0
                snip = text[ix]
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
        else:
            for ix in indices:
                ix = int(ix)
                front = ix + 1
                back = ix - 1
                n_front = 0
                n_back = 0
                snip = text[ix]
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
    f.close()
    return snips


for row in cursor:
    snips = find_snippets(row[0], row[2])
    snips = ' '.join(snips)
    print(f"{row[1]:<{Fspace}}{row[0]:<{Dspace}}{snips}")

conn.close()