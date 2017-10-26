const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = '123klk';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pass, salt, (err, hash) => {
        console.log(hash);
    });
})

var hashedPass = '$2a$10$kq72wXk8aF5xHJvpWq9nyeeT2PK/WRr2YNUisEQ5O8ekhzloOGXJK';

bcrypt.compare(pass, hashedPass, (err, res) => {
    console.log(res);
})
// var data = {
//     id: 11
// }

// var token = jwt.sign(data, 'retsec');
// console.log(token);

// var decoded = jwt.verify(token, 'retsec');
// console.log(decoded);
// var message = "User num 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }


// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if(resultHash === token.hash) {
//     console.log("Data not changed");
// } else {
//     console.log("Data changed!");
// }