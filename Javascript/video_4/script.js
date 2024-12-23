console.log("I am a tutorial on loops")

let a=1;
//console.log(a)
//console.log(a+1)
//console.log(a+2)

for(let i=0;i<100;i++){
console.log(a+i)
}

for(let j=0;j<5;j++){
    console.log(a+j)
}

let obj={
    name:"Jiya",
    role:"Programmer",
    company:"CodeWithHarry AI"
}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element)

}

for(const c of "Jiya"){
    console.log(c)
}

let i=0;
while(i<6){
    console.log(i)
    i++;
}


//function use...............
function nice(name){
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are intelligent")
    console.log("Hey " + name + " you are a good dancer")
}
nice("Jiya")

function sum(a,b){
//console.log(a+b)
return a+b
}
total=sum(2,13)
console.log("the sum of these numbers is: " + total)