const amounts = document.getElementById("amount");
const interests = document.getElementById("interest");
const months = document.getElementById("month");
const calbtn = document.querySelector(".btn");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const clearbtn = document.querySelector("clear-btn");
const monsbtn = document.getElementById("mons");
const yearbtn = document.getElementById("yr");


const btns = document.querySelectorAll("button");
// console.log(btns);

for(let i =0;i<btns.length;i++){
    btns[i].addEventListener("click",(e)=>{
        if(e.target.matches("#mons")){
            let m = months.value*12;
            months.value = m;
        }
        else if(e.target.matches("#yr")){
            let y = months.value/12;
            months.value = y; 
        }
    })
}


    monsbtn.addEventListener("click",(e)=>{
    
        e.preventDefault();
        monsbtn.style.color = "white";
        yearbtn.style.backgroundColor="";
        yearbtn.style.color="";
        monsbtn.style.backgroundColor="#48aaff";

        
            calbtn.addEventListener("click",(e)=>{
                e.preventDefault();
                let int = interests.value / 1200;
        
                let emi = amounts.value * int * (Math.pow((1 + int), months.value) / (Math.pow((1 + int), months.value) - 1))
                let perMonEmi1 = Math.round(emi).toLocaleString();
        
        
                let total = emi * months.value;
                let totalAmouInter = Math.round(total).toLocaleString();
        
                let inter = total-amounts.value;
                let totalinter = Math.round(inter).toLocaleString();
        
                output1.innerText = "₹"+perMonEmi1;
                output2.innerText = "₹"+totalinter;
                output3.innerText = "₹"+totalAmouInter;
            })
        


})









 yearbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    yearbtn.style.backgroundColor="#48aaff";
    monsbtn.style.backgroundColor="";
    monsbtn.style.color="";
    yearbtn.style.color = "white";

        calbtn.addEventListener("click",(e)=>{
            e.preventDefault();
        let l = months.value*12;
        let int = interests.value / 1200
        // let int = l / 1200;
        let emi = amounts.value * int * (Math.pow((1 + int), l) / (Math.pow((1 + int), l) - 1))
        let perMonEmi1 = Math.round(emi).toLocaleString();
        // console.log(perMonEmi1);
        
        let total = emi * l;
        let totalAmouInter = Math.round(total).toLocaleString();
        
        // console.log(total);
        
        let inter = total-amounts.value;
        let totalinter = Math.round(inter).toLocaleString();
        // console.log(totalinter);
        
        
        output1.innerText ='₹'+perMonEmi1;
        output2.innerText ='₹'+totalinter;
        output3.innerText ='₹'+ totalAmouInter;
    })
})
   
    


    

/*clear*/

// clearbtn.addEventListener("click",clear);

// function clear(){

//         let amounts = "";
//         let interests ="";
//         let months = "";
//         let output1 = "";
//         let output2 = "";
//         let output3 = "";


// }
