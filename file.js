const fs = require('fs')


// reading files .. Its aychronous
fs.readFile('./docs/blogex.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})


 console.log("last line")

//  writing files

fs.writeFile('./docs/blogex2.txt', 'Now this is a replacemant', ()=>{
    console.log('file was written')
})



//  directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
if(err){
    console.log(err)
}
console.log('folderr created')
})
} 
else {
    fs.rmdir('./assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder deleted');
    });
  }

//  deleting files


if( fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt',(err) => {
        if (err) {
            console.log(err)
        }

        console.log('file removed')
    })
}