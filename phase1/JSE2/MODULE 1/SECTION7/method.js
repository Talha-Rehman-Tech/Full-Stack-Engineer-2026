let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() {
        return "circle";
    }
};

console.log(circle.getType());

let circle = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circle.center.show();

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
