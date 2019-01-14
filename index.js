let person = { name: 'Adi' }
let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)

Object.defineProperty(person, 'name', {
    writable: false, //tidak bisa diubah
    enumerable: false, //no show the keys
    configurable: false //Tidak bisa di Delete
})