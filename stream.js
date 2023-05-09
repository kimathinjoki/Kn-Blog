const fs = require('fs')



const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'})
const writeFile = fs.createWriteStream('./docs/blog4.txt')


// readStream.on('data', (chunk) => {
//     console.log('-----new chunk incoming-----')
//     console.log(chunk)
//     writeFile.write('\nNEW CHUNK----\n')
//     writeFile.write(chunk)
// })


// pipping

readStream.pipe(writeFile)