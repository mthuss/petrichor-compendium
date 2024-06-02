import json
import re

f = open("RORR_items.json","r+")
RORRjson = json.load(f)
myfile = open("items_with_names.json","r+")
my_json = json.load(myfile)

items = RORRjson

matches = 0

for my_item in my_json:
    name = my_item["itemName"]
    for i in items.keys():
        if name in items[i]["name"]:
            if "story" in items[i]:
                my_item["lore"] = re.sub("<.*?>","",items[i]["story"])
                matches += 1
            if "date" in items[i]:
                my_item["date"] = re.sub("<.*?>","",items[i]["date"])
            if "destination" in items[i]:
                my_item["destination"] = re.sub("<.*?>","",items[i]["destination"])

print(f"Matches: {matches}/{len(my_json)}")

with open("with_lore.json","w") as output:
    json.dump(my_json, output, indent=4)
