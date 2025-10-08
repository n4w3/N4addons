let enabled = true;
let partyChat = true;
let guildChat = false;

export function toggleDungeonDropDetector(state) {
    enabled = state;
}

export function togglePartyChat(state) {
    partyChat = state;
}

export function toggleGuildChat(state) {
    guildChat = state;
}

import { request } from "axios"

import DungeonItems from "../../data/dungeonitems.json";

const items = DungeonItems;

let AHdata, BZdata

request({
    url: "https://moulberry.codes/lowestbin.json",
    method: "GET",
    json: true
  })
    .then(response => {
      AHdata = response.data;
      prefix("got AH Data")
    }).catch(error => {
      if (error.isAxiosError) {
        prefix(error.code + ": " + error.response.data);
      } else {
        prefix(error.code);
      }
})

request({
    url: "https://sky.shiiyu.moe/api/v2/bazaar/",
    method: "GET",
    json: true
  })
    .then(response => {
      BZdata = response.data;
      prefix("got BZ Data!")
    }).catch(error => {
      if (error.isAxiosError) {
        prefix(error.code);
      }
})

register("guiOpened", () => {
    if (!enabled) return;

    Client.scheduleTask(2, () => {
    const itemsInContainer = Player.getContainer().getItems();
    if (!ChestNames.includes(Player.getContainer().getName().removeFormatting())) return;

    itemsInContainer.slice(0, 28).forEach((item) => {
        if (item) {
        const itemName = item.getName().removeFormatting();
        const matchedKey = Object.keys(items).find(key => items[key].name.toLowerCase() === itemName.toLowerCase());

        if (matchedKey) {
            const matchedItem = items[matchedKey];
            const itemLocation = matchedItem.location;
            let price;

          
            if (itemLocation === "bz" && BZdata) price = BZdata[matchedKey]?.buyPrice || "Price not found";
            else if (itemLocation === "ah" && AHdata) price = AHdata[matchedKey] || "Price not found";

            const chestPrice = Number(matchedItem.chestprice);
            const profit = Number(price) - chestPrice;

            const message = `Found ${matchedItem.name}, +(${formatNumber(profit, true)} coins)`;

            ChatLib.chat(`${matchedItem.ccode}${message}`);

            if (partyChat) {
                ChatLib.say(`/pc ${message}`);
            }

            if (guildChat) {
                ChatLib.say(`/gc ${message}`);
            }
        }
      }
    });
  });
}); 