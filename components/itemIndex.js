const ROR_dir = "../data/ROR/items/"
const ROR2_dir = "../data/ROR2/items/"
const RORR_dir = "../data/RORR/items/"
export const itemIndex = {
    "ROR": {
        "common": require(ROR_dir + 'common_items.json'),
        "uncommon": require(ROR_dir + 'uncommon_items.json'),
        "legendary": require(ROR_dir + 'legendary_items.json'),
        "boss": require(ROR_dir + 'boss_items.json'),
        "equipment": require(ROR_dir + 'equipment_items.json')
    },
    "ROR2": {
        "common": require(ROR2_dir + 'common_items.json'),
        "uncommon": require(ROR2_dir + 'uncommon_items.json'),
        "legendary": require(ROR2_dir + 'legendary_items.json'),
        "void": require(ROR2_dir + 'void_items.json'),
        "lunar": require(ROR2_dir + 'lunar_items.json'),
        "boss": require(ROR2_dir + 'boss_items.json'),
        "equipment": require(ROR2_dir + 'equipment_items.json')
    },
    "RORR": {
        "common": require(RORR_dir + 'common_items.json'),
        "uncommon": require(RORR_dir + 'uncommon_items.json'),
        "legendary": require(RORR_dir + 'legendary_items.json'),
        "boss": require(RORR_dir + 'boss_items.json'),
        "equipment": require(RORR_dir + 'equipment_items.json'),
        "special": require(RORR_dir + 'special_items.json'),
    }
}

export const completeList = [...itemIndex["ROR"]["common"], ...itemIndex["ROR"]["uncommon"], ...itemIndex["ROR"]["legendary"], ...itemIndex["ROR"]["boss"], ...itemIndex["ROR"]["equipment"],
...itemIndex["ROR2"]["common"], ...itemIndex["ROR2"]["uncommon"], ...itemIndex["ROR2"]["legendary"], ...itemIndex["ROR2"]["void"], ...itemIndex["ROR2"]["lunar"], ...itemIndex["ROR2"]["boss"], ...itemIndex["ROR2"]["equipment"],
...itemIndex["RORR"]["common"], ...itemIndex["RORR"]["uncommon"], ...itemIndex["RORR"]["legendary"], ...itemIndex["RORR"]["boss"], ...itemIndex["RORR"]["equipment"], ...itemIndex["RORR"]["special"]
]