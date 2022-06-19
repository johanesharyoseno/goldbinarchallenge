const {User} = require ('./models')
User.create({
    nama:"budi",
    tanggalLahir:"12-12-1999",
    username:"budibudz",
    email:"budibudi@gmail.com",
    password:"budizzzz",
    orderId:1
})
.then(user=>{
    console.log(user)
});

const {Item} = require ('./models')
Item.create({
    barang:"ruby",
    harga:1000000
})
.then(item=>{
    console.log(item)
});

const {Order} = require ('./models')
Order.create({
    jumlah:10,
    tipe:"paket"
})
.then(order=>{
    console.log(order)
});