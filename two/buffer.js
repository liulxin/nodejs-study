let buffer = Buffer.from('sdsa\r\ndddd\r\ndaa');

let buffer2 = Buffer.from('\r\n');

// console.log(buffer.indexOf('\r\n'))
console.log(buffer.indexOf(buffer2))

function bufferSplit(buffer, delimiter) {
    let arr = [];
    let n = 0;

    while((n = buffer.indexOf(delimiter)) != -1){
        arr.push(buffer.slice(0, n));

        buffer = buffer.slice(n + delimiter.length)
    }

    arr.push(buffer);

    return arr;
}

// let a = bufferSplit(buffer, buffer2);

// console.log(a)

module.exports = bufferSplit;