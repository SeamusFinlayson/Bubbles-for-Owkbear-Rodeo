import OBR, { Item } from "@owlbear-rodeo/sdk";

export class Token {
    item: Item;
    health: Number;
    maxHealth: Number;
    tempHealth: Number;

    constructor(item: Item, health: Number, maxHealth: Number, tempHealth: Number) {
        this.item = item;
        this.health = health;
        this.maxHealth = maxHealth;
        this.tempHealth = tempHealth;
    }
}