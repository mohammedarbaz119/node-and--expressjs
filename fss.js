const { readFileSync, writeFileSync } = require('fs')
const path = require('path')
let path1 = path.join('./content', 'subfolder', 'test.txt')
const first = readFileSync(path1, 'utf-8')
console.log(first)
writeFileSync(path1, `hello thuis is `, {
    flag: 'a'
})
// let secodn = readFileSync('./node and expressjs/content/subfolder/test.txt', 'utf-8')
// console.log(secodn)