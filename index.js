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

  this.render = function () {
    return `
    <select>
      ${this.items.map(i => `<option>${i}</option>`).join('')}
    </select>
    `
  }
}
// HtmlSelectELement.prototype = Object.create(HtmlELement.prototype)//Klik Not Include
HtmlSelectELement.prototype = new HtmlELement() //Solution
HtmlSelectELement.prototype.constructor = HtmlSelectELement()

function HtmlImageElement(src) {
  this.src = src
  this.render = function () {
    return `<img src="${this.src}" />`
  }
}

HtmlImageElement.prototype = new HtmlELement()
HtmlImageElement.prototype.constructor = HtmlImageElement()
