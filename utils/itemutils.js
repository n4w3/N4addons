export class Itemutils {
    
    /**
     * Used to find the index of a certain item
     * @param {string} name
     * @returns {number}
     */
    static GetIndexOf(name) {
        return Player.getInventory().getItems().findIndex(a => a?.getName()?.removeFormatting()?.includes(name))
    }

    /**
     * Used to get the stack size of a certain item
     * @param {string} name
     * @returns {number}
     */
    static GetStackSizeOf(name) {
        return Player.getInventory().getItems().find(a => a?.getName()?.removeFormatting() == name)?.getStackSize() ?? 0
    }

    /**
     * Used to check if the held item is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static HeldItemCheck(name) {
        return Player.getHeldItem()?.getName()?.includes(name)
    }

    /**
     * Used to check if the inventory contains a certain item
     * @param {string} name
     * @return {boolean}
     */
    static InvCheck(name) {
        return Player.getInventory()?.getItems()?.find(a => a?.getName()?.includes(name))
    }

    /**
     * Used to check if the lore of a certain item contains a certain string
     * @param {string} name
     * @param {string} lorestring
     * @return {boolean}
     */
    static IsInLore(name, lorestring) {
        const lore = Player.getInventory().getItems().find(a => a?.getName()?.removeFormatting()?.includes(name))?.getLore()
        lore.forEach(line => {
            if(line.includes(lorestring)) return true
        })
        return false
    }

    /**
     * Used to check if the helmet is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static helmetCheck(name) {
        return Player.armor.getHelmet()?.getName()?.includes(name)
    }

    /**
     * Used to check if the chestplate is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static chestCheck(name) {
        return Player.armor.getChestplate()?.getName()?.includes(name)
    }

    /**
     * Used to check if the leggings are a certain name
     * @param {string} name
     * @return {boolean}
     */
    static legginsCheck(name) {
        return Player.armor.getLeggings()?.getName()?.includes(name)
    }   

    /**
     * Used to check if the boots are a certain name
     * @param {string} name
     * @return {boolean}
     */
    static bootsCheck(name) {
        return Player.armor.getBoots()?.getName()?.includes(name)
    }
}