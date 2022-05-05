from lxml import html
import os
import json
import re
from pathlib import Path

def rtvslo_xpath(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])

    tree = html.parse(os.path.join(dirname, path))

    author = tree.xpath('//div[@class="author-name"]/text()')[0]
    published_time = tree.xpath('//div[@class="publish-meta"]/text()')[0].strip()
    title = tree.xpath('//header[@class="article-header"]/h1/text()')[0]
    subtitle = tree.xpath('//div[@class="subtitle"]/text()')[0]
    lead = tree.xpath('//p[@class="lead"]/text()')[0]
    content = tree.xpath('//div[@class="article-body"]/article/p/text()')

    cleaned_content = []
    for el in content:
        if el.strip():
            cleaned_content.append((el.strip()))

    output_dict = {
        'Author': author,
        'PublishedTime': published_time,
        'Title': title,
        'SubTitle': subtitle,
        'Lead': lead,
        'Content': cleaned_content
    }
    #print(output_dict)

    return output_dict

def overstock_xpath(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])

    tree = html.parse(os.path.join(dirname, path))

    xpath_to_elements = '//body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[@*]/td[2]'
    list_of_titles = tree.xpath(xpath_to_elements + '/a/b/text()')
    list_of_list_prices = tree.xpath(xpath_to_elements + '/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/s/text()')
    list_of_prices = tree.xpath(xpath_to_elements + '/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/span/b/text()')

    xpath_to_element = '//body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr'
    list_of_saving = []
    list_of_saving_percent = []
    for i in range(0, len(list_of_titles)+1):
        saving = tree.xpath('substring-before(' + xpath_to_element + '[@*][' + str(i+1) + ']/td[2]/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " ")')
        saving_percent = tree.xpath('substring-after(' + xpath_to_element + '[@*][' + str(i+1) + ']/td[2]/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " ")')
        if saving != "":
            list_of_saving.append(saving)

        if saving_percent != "":
            list_of_saving_percent.append(saving_percent)
    #list_of_saving_all = tree.xpath(xpath_to_elements + '/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span[@class="littleorange"]/text()')

    list_of_content = tree.xpath(xpath_to_elements + '/table/tbody/tr/td[2]/span/text()')

    output = []
    for i in range(0, len(list_of_titles)):
        output_element = {
            'Title': list_of_titles[i],
            'ListPrice': list_of_list_prices[i],
            'Price': list_of_prices[i],
            'Saving': list_of_saving[i],
            'SavingPercent': list_of_saving_percent[i],
            'Content': list_of_content[i].replace("\n", " ")
        }
        output.append(output_element)

    return output

def zurnal24_xpath(path):

    dirname = os.path.dirname(__file__)
    dirname = str(Path(dirname).parents[0])

    tree = html.parse(os.path.join(dirname, path))

    topics = tree.xpath('//div[@class="article__sections"]/a/text()')
    views = tree.xpath('//span[@class="article__views"]/strong/text()')
    title = tree.xpath('//h1[@class="article__title"]/text()')
    author = tree.xpath('//div[@class="article__authors"]/a/text()')
    published_time = tree.xpath('//time[@class="article__time_small"]/text()')
    lead = tree.xpath('//div[@class="article__leadtext"]/text()')
    content = tree.xpath('//div[@class="article__content no_page_break cf"]/p/text() | //div[@class="article__content no_page_break cf"]/h2/text()')

    clean_content = []
    for c in content:
        c = re.sub(r'\r\n', '', c)
        if c != "":
            clean_content.append(c)

    output = {
        'Topics': topics,
        'Views': views,
        'Title': title,
        'Author': author,
        'PublishedTime': published_time,
        'Lead': lead,
        'Content': clean_content
    }
    return output

def run_xpath():
    path = 'input-extraction\\rtvslo.si\Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
    rtvslo1 = rtvslo_xpath(path)
    path = 'input-extraction\\rtvslo.si\Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
    rtvslo2 = rtvslo_xpath(path)
    path = 'input-extraction\\overstock.com\jewelry01.html'
    overstock1 = overstock_xpath(path)
    path = 'input-extraction\\overstock.com\jewelry02.html'
    overstock2 = overstock_xpath(path)
    path = 'input-extraction\\zurnal24.si\Bliža se konec subvencij za električne avtomobile Žurnal24.htm'
    zurnal1 = zurnal24_xpath(path)
    path = 'input-extraction\\zurnal24.si\Dars Vse po starem ali celo huje Žurnal24.htm'
    zurnal2 = zurnal24_xpath(path)

    dirname = os.path.dirname(__file__)
    out = os.path.join(dirname, 'output-extraction')

    f = open(os.path.join(out, f"rtvslo.txt"), "w", encoding='utf8')
    f.write(json.dumps(rtvslo1, ensure_ascii=False) + '\n' + json.dumps(rtvslo2, ensure_ascii=False))
    f.close()

    f = open(os.path.join(out, f"overstock.txt"), "w", encoding='utf8')
    f.write(json.dumps(overstock1, ensure_ascii=False) + '\n' + json.dumps(overstock2, ensure_ascii=False))
    f.close()

    f = open(os.path.join(out, f"zurnal24.txt"), "w", encoding='utf8')
    f.write(json.dumps(zurnal1, ensure_ascii=False) + '\n' + json.dumps(zurnal2, ensure_ascii=False))
    f.close()

    return

"""print('\n####### AUDI A6 RTV SLO #######\n')
path = 'input-extraction\\rtvslo.si\Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
rtvslo1 = rtvslo_xpath(path)
print(rtvslo1)
print('\n############################################################\n')

print('\n####### Volvo XC 40 D4 AWD RTV SLO #######\n')
path = 'input-extraction\\rtvslo.si\Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
rtvslo2 = rtvslo_xpath(path)
print(rtvslo2)
print('\n############################################################\n')

f = open("rtvslo.txt", "w", encoding='utf8')
f.write(json.dumps(rtvslo1, ensure_ascii=False) + '\n' + json.dumps(rtvslo2, ensure_ascii=False))
f.close()"""

"""print('\n####### JEWELERY01 OVERSTOCK #######\n')
path = 'input-extraction\\overstock.com\jewelry01.html'
overstock1 = overstock_xpath(path)
for i in overstock1:
    print(i, '\n')
print('\n############################################################\n')

print('\n####### JEWELERY02 OVERSTOCK #######\n')
path = 'input-extraction\\overstock.com\jewelry02.html'
overstock2 = overstock_xpath(path)
for i in overstock2:
    print(i, '\n')
print('\n############################################################\n')

f = open("overstock.txt", "w", encoding='utf8')
f.write(json.dumps(overstock1, ensure_ascii=False) + '\n' + json.dumps(overstock2, ensure_ascii=False))
f.close()"""

"""print('\n####### EL. VOZILA ŽURNAL #######\n')
path='input-extraction\\zurnal24.si\Bliža se konec subvencij za električne avtomobile Žurnal24.htm'
zurnal1 = zurnal24_xpath(path)
print(zurnal1)
print('\n############################################################\n')

print('\n####### DARS ŽURNAL #######\n')
path='input-extraction\\zurnal24.si\Dars Vse po starem ali celo huje Žurnal24.htm'
zurnal2 = zurnal24_xpath(path)
print(zurnal2)

f = open("zurnal24.txt", "w", encoding='utf8')
f.write(json.dumps(zurnal1, ensure_ascii=False) + '\n' + json.dumps(zurnal2, ensure_ascii=False))
f.close()"""