import json
import sys
import os
from bs4 import BeautifulSoup as bs
import requests

f = open("items_pretty.json","r+")
original_RORR_json = open("RORR_Better_Descriptions.json","r")

items_json = json.load(f)
RORR_json = json.load(original_RORR_json)
new_json = []

for i in items_json.keys():
    items_json[i]["itemName"] = i.replace("_"," ")

    # Translating game item names to wiki filenames
    splitname = i.split("_")
    urlname = splitname[0].capitalize()
    splitname.pop(0)
    for w in splitname:
        urlname += w.lower()
    urlname = urlname.replace("'","").replace("-","").replace("(","").replace(")","").replace(".","").replace(",","")

    #######################################
    ## Accounting for non-standard names ##
    if "Theollopper" in urlname:
        urlname = "Ollopper"
    if "Unstablewatch" in urlname:
        urlname = "Unstable Watch"
    if "Marinatedlizardloaf" in urlname:
        urlname = "Marinatedlizardload"
    #######################################

    wikiUrl = "https://riskofrainreturns.wiki.gg/wiki/" + i
    altName = urlname + ".png"

    chef_items = ["Big Bison Steak", "Marinated Lizard Loaf", "Golem Essence on the Rocks", "Jelly Brain Salad", "Fried Eyeball"] 
    if items_json[i]["itemName"] in chef_items:
        wikiUrl = "https://riskofrainreturns.wiki.gg/wiki/File:" + urlname + ".png"
        altName = "File:" + urlname + ".png"

    htmlSource = requests.get(wikiUrl).content

    soup = bs(htmlSource)
    imgDivs = imgDivs = soup.find_all("img",alt=altName)

    imgUrl = "https://riskofrainreturns.wiki.gg"+imgDivs[0]["src"]
    print(imgUrl)


    new_json.append({
        "_id": os.urandom(15).hex(),
        "itemName": items_json[i]["itemName"],
        "pickup": items_json[i]["pickup"],
        "description": items_json[i]["description"],
        "rarity": items_json[i]["rarity"],
        "aquisition": items_json[i]["aquisition"],
        "drop": items_json[i]["drop"],
        "category": items_json[i]["category"],
        "itemImage": imgUrl,
    })


with open("items_with_names.json","w") as output:
    json.dump(new_json,output,indent=4)
