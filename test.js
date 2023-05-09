const names = "mario"

console.log(names)

const greet = (name)=>{
    console.log("Hello, " + name)
}


greet("Brani")


// console.log(global)


setTimeout(()=>{
    console.log("in 5 I will  clear interval")
    clearInterval(int)
},5000)


const int = setInterval(()=>{
    console.log("Hello World")
}, 1000)


console.log(__dirname)
console.log(__filename)