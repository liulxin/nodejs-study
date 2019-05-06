// exports.a = 1;
// exports.b = 2;
// exports 可以多个

// module.exports = {
//     a : 1,
//     b : 2
// }

// module.exports = function () {
//     console.log(1)
// }

// module.exports 多次覆盖
module.exports = class {
    constructor (name) {
        this.name = name;
    }

    show () {
        console.log(this.name)
    }
}