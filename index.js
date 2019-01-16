function HtmlELement() {
  this.click = function () {
    console.log('Click')
  }
}
HtmlELement.prototype.focus = function () {
  console.log('Focued')
}

function HtmlSelectELement(items = []) {
  this.items = items

  this.addItem = function (item) {
    this.items.push(item)
  }

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
// HtmlSelectELement.prototype = Object.create(HtmlELement.prototype)//Klik Not Include
HtmlSelectELement.prototype = new HtmlELement() //Solution
HtmlSelectELement.prototype.constructor = HtmlSelectELement()

//agar sama
new HtmlSelectELement()
new HtmlSelectELement.prototype.constructor