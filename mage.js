function Mage(health, damage, distance) {
    Unit.call(this, 'Mage', health || 200, damage || 800, distance || 1000);
}

Mage.prototype = Object.create(Unit.prototype);
Mage.prototype.constructor = Mage;