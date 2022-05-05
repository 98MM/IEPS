from pathlib import Path
from selenium import webdriver
import time
from os import listdir
from selenium.common.exceptions import WebDriverException
import re
import json
from bs4 import BeautifulSoup
import unicodedata
import os
from lxml import html as ht
import os
import json
import re
from pathlib import Path
import requests
def novice(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])
    driver = webdriver.Firefox(executable_path= dirname + '\\input-extraction\\geckodriver.exe')

    try:
        file_name = 'file://' + os.path.join(dirname, path)
        driver.get(file_name)
    except Exception as e:
        print(e)
        print('eror')

    html = driver.page_source
    driver.close()



    headerreg = '<h1>([\s\S]*?)<\/h1>'
    authorreg = '<div class=\"author-name\">([\s\S]*?)<\/div>'
    datetimereg = '<div class=\"publish-meta\">([\s\S]*?)<br>'
    subtitlereg = '<div class=\"subtitle\">([\s\S]*?)<\/div>'
    leadreg = '<p class=\"lead\">([\s\S]*?)<\/p>'
    contentreg = '<div class=\"article-body\">([\s\S]*?)<div class=\"article-column\">'

    header = re.search(headerreg, html).group(0)
    author = re.search(authorreg, html).group(0)
    datetime = re.search(datetimereg,html).group(0)
    subtitle = re.search(subtitlereg,html).group(0)
    leader = re.search(leadreg,html).group(0)
    content = re.search(contentreg,html).group(0)
    unvanted = "<([\s\S]*?)>"

    content = re.sub('<script([\s\S]*?)>([\s\S]*?)<\/script>', '', content )


    header = re.sub(unvanted, '', header )
    author = re.sub(unvanted, '', author )
    datetime = re.sub(unvanted, '', datetime )
    subtitle = re.sub(unvanted, '', subtitle )
    leader = re.sub(unvanted, '', leader )
    content = re.sub(unvanted, '', content )

    #print(unicodedata.normalize('NFKD', leader).encode('ascii', 'ignore').decode("utf-8") )
    #print(type(unicodedata.normalize('NFKD', leader).encode('utf-8', 'ignore')))

    siteobject = {
        "head": unicodedata.normalize('NFKD', header).encode('ascii', 'ignore').decode("utf-8") ,
        "author": unicodedata.normalize('NFKD', author).encode('ascii', 'ignore').decode("utf-8") ,
        "datetime":unicodedata.normalize('NFKD', datetime).encode('ascii', 'ignore').decode("utf-8") ,
        "subtitle":unicodedata.normalize('NFKD', subtitle).encode('ascii', 'ignore').decode("utf-8") ,
        "leader":unicodedata.normalize('NFKD', leader).encode('ascii', 'ignore').decode("utf-8") ,
        "content": unicodedata.normalize('NFKD', content).encode('ascii', 'ignore').decode("utf-8") ,
    }

    sitejson = (siteobject)
    
    return(sitejson)

def nakit(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])
    driver = webdriver.Firefox(executable_path= dirname + '\\input-extraction\\geckodriver.exe')

    try:
        file_name = 'file://' + os.path.join(dirname, path)
        driver.get(file_name)
    except Exception as e:
        print(e)
        print('eror')

    html = driver.page_source
    driver.close()


    listPricereg = '(?<=(<b>List Price:<\/b><\/td><td nowrap=\"nowrap\" align=\"left\"><s>))([\s\S]*?)(?=(<\/s><\/td><\/tr>))'
    Pricereg = '(?<=(<b>Price:<\/b><\/td><td nowrap=\"nowrap\" align=\"left\"><span class=\"bigred\"><b>))([\s\S]*?)(?=<\/b><\/span><\/td><\/tr>)'
    Savingreg = '(?<=(<b>You Save:<\/b><\/td><td nowrap=\"nowrap\" align=\"left\"><span class=\"littleorange\">))([\s\S]*?)(?=\()'
    savingpercentreg = '((<b>You Save:<\/b><\/td><td nowrap=\"nowrap\" align=\"left\"><span class=\"littleorange\">([\s\S]*?)\())([\s\S]*?)(?=(\)<\/span><\/td><\/tr>))'
    titlereg = "(</tbody></table></td><td valign=\"top\"> \n<a href=\"(.*?)\"><b>)([\s\S]*?)(?=</b></a><br> )"
    contentreg = '(?<=(<td valign=\"top\"><span class=\"normal\">))([\s\S]*?)(?=<br><a href=)'

    siteobjectobject = {}
    #print(re.findall(titlereg,html)[0])
    #print(len(re.findall(titlereg,html)[0]))

    #print(type(re.search(listPricereg, html).lastindex))
    for x in range(len(re.findall(listPricereg, html))):
        
        listPrice = re.findall(listPricereg, html)[x][1]
        price = re.findall(Pricereg, html)[x][1]
        saving = re.findall(Savingreg,html)[x][1]
        savingpercent = re.findall(savingpercentreg,html)[x][3]
        title = re.findall(titlereg,html)[x][2]
        content = re.findall(contentreg,html)[x][1]
        unvanted = "<([\s\S]*?)>"

        
        content = re.sub('<script([\s\S]*?)>([\s\S]*?)<\/script>', '', content )

        #savingpercent=savingpercent.split('(')[1]

        listPrice = re.sub(unvanted, '', listPrice )
        price = re.sub(unvanted, '', price )
        saving = re.sub(unvanted, '', saving )
        savingpercent = re.sub(unvanted, '', savingpercent )
        title = re.sub(unvanted, '', title )
        content = re.sub(unvanted, '', content )



        siteobject = {
            "listPrice": unicodedata.normalize('NFKD', listPrice).encode('ascii', 'ignore').decode("utf-8") ,
            "price": unicodedata.normalize('NFKD', price).encode('ascii', 'ignore').decode("utf-8") ,
            "saving":unicodedata.normalize('NFKD', saving).encode('ascii', 'ignore').decode("utf-8") ,
            "savingpercent":unicodedata.normalize('NFKD', savingpercent).encode('ascii', 'ignore').decode("utf-8") ,
            "title":unicodedata.normalize('NFKD', title).encode('ascii', 'ignore').decode("utf-8") ,
            "content": unicodedata.normalize('NFKD', content).encode('ascii', 'ignore').decode("utf-8") ,
        }

        siteobjectobject[x]=siteobject

    sitejson = (siteobjectobject)
    
    return(sitejson)

def zurnal(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])
    driver = webdriver.Firefox(executable_path= dirname + '\\input-extraction\\geckodriver.exe')


    try:
        file_name = 'file://' + os.path.join(dirname, path)
        driver.get(file_name)
    except Exception as e:
        print(e)
        print('eror')

    html = driver.page_source
    driver.close()


    headerreg = '<h1 class="article__title">([\s\S]*?)<\/h1>'
    authorreg = '<div class="article__authors">([\s\S]*?)<a href="([\s\S]*?)">([\s\S]*?)<\/a>'
    datetimereg = '<time class="article__time">([\s\S]*?)<\/time>'
    ogledireg = '<span class="article__views">(\s*)<i class="icon-eye-outline"><\/i>(\s*)<strong>([\s\S]*?)<\/strong>'
    leadreg = '<div class="article__leadtext">([\s\S]*?)<\/div>'
    contentreg = '<div class="article__content ([\s\S]*?)>([\s\S]*?)<div class="article__aditionl_content">'

    header = re.search(headerreg, html).group(0)
    author = re.search(authorreg, html).group(3)
    datetime = re.search(datetimereg,html).group(0)
    ogledi = re.search(ogledireg,html).group(3)
    leader = re.search(leadreg,html).group(0)
    content = re.search(contentreg,html).group(2)
    unvanted = "<([\s\S]*?)>"

    content = re.sub('<script([\s\S]*?)>([\s\S]*?)<\/script>', '', content )
    content = re.sub('<span([\s\S]*?)>([\s\S]*?)<\/span>', '', content )


    header = re.sub(unvanted, '', header )
    author = re.sub(unvanted, '', author )
    datetime = re.sub(unvanted, '', datetime )
    ogledi = re.sub(unvanted, '', ogledi )
    leader = re.sub(unvanted, '', leader )
    content = re.sub(unvanted, '', content )

    #print(unicodedata.normalize('NFKD', leader).encode('ascii', 'ignore').decode("utf-8") )
    #print(type(unicodedata.normalize('NFKD', leader).encode('utf-8', 'ignore')))

    siteobject = {
        "head": unicodedata.normalize('NFKD', header).encode('ascii', 'ignore').decode("utf-8") ,
        "author": unicodedata.normalize('NFKD', author).encode('ascii', 'ignore').decode("utf-8") ,
        "datetime":unicodedata.normalize('NFKD', datetime).encode('ascii', 'ignore').decode("utf-8") ,
        "ogledi":unicodedata.normalize('NFKD', ogledi).encode('ascii', 'ignore').decode("utf-8") ,
        "leader":unicodedata.normalize('NFKD', leader).encode('ascii', 'ignore').decode("utf-8") ,
        "content": unicodedata.normalize('NFKD', content).encode('ascii', 'ignore').decode("utf-8") ,
    }

    sitejson = (siteobject)
    
    return(sitejson)

def run_regex():
    path = 'input-extraction\\rtvslo.si\Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
    rtvslo1 = novice(path)
    path = 'input-extraction\\rtvslo.si\Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
    rtvslo2 = novice(path)
    path = 'input-extraction\\overstock.com\jewelry01.html'
    overstock1 = nakit(path)
    path = 'input-extraction\\overstock.com\jewelry02.html'
    overstock2 = nakit(path)
    path = 'input-extraction\\zurnal24.si\Bliža se konec subvencij za električne avtomobile Žurnal24.htm'
    zurnal1 = zurnal(path)
    path = 'input-extraction\\zurnal24.si\Dars Vse po starem ali celo huje Žurnal24.htm'
    zurnal2 = zurnal(path)

    dirname = os.path.dirname(__file__)
    out = os.path.join(dirname, 'output-extraction')

    f = open(os.path.join(out, f"rtvslo_regex.json"), "w", encoding='utf8')
    rtv_out = {
        "Audi": rtvslo1,
        "Volvo": rtvslo2
    }
    f.write(json.dumps(rtv_out, ensure_ascii=False))
    f.close()

    f = open(os.path.join(out, f"overstock_regex.json"), "w", encoding='utf8')
    overstock_out = {
        "jewelry01": overstock1,
        "jewelry02": overstock2
    }
    f.write(json.dumps(overstock_out, ensure_ascii=False))
    f.close()

    f = open(os.path.join(out, f"zurnal24_regex.json"), "w", encoding='utf8')
    zurnal_out = {
        "Subvencije": zurnal1,
        "Dars": zurnal2
    }
    f.write(json.dumps(zurnal_out, ensure_ascii=False))
    f.close()

    return

