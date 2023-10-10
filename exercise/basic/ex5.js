// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

const firstJan = (year)=>{
    for(let i=2014;i<=year;i++){
        let date = new Date(i,0,1);
        if(date.getDay()===0){
            console.log(`1st January ${i} is a Sunday`);
        }
    }
}

console.log(firstJan(2050));