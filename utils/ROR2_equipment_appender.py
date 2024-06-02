import os
import json
import re
import sys

filename = sys.argv[1]

common_file = open(filename,"r+")
common_json = json.load(common_file)
items_file = open("Equipment.txt","r")
items_lines = items_file.readlines()
internal_names = list()
internal_name = ''
item_dict = list()
for i in common_json:
    for line in items_lines:
        if i["itemName"] in line and "_NAME" in line:
            internal_name = re.search("EQUIPMENT_(.+?)_NAME",line).group(1)
            internal_names.append(internal_name)
        if "EQUIPMENT_"+internal_name+"_PICKUP" in line:
            #this is the worst line of code i've ever written
            i["pickup"] = re.sub("\"EQUIPMENT_"+internal_name+"_PICKUP\"[\t ]*:[\t ]*","",line).replace("\t","").replace(",\n","").replace("\"","")
            item_dict.append({"name": i["itemName"], "desc": line.replace("\"EQUIPMENT_"+internal_name+"_PICKUP\":","")})


print(internal_names)
#print(common_json[0])
#for item in common_json:
#    print(item["itemName"]+": " + item["pickup"])

output = open("with_pickup_text/"+filename,"w")
json.dump(common_json, output, indent=4)

#for item in item_dict:
#    print(item["desc"])
