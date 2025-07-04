// Taş Kağıt Makas Oyunu

let scissor = document.getElementById("scissor");
let rock = document.getElementById("rock");
let papper = document.getElementById("papper");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let btn1 = document.getElementById("btn1");
let i = 0;
let k = 0;

let secenek = ["tas", "kagit", "makas"];

let random = Math.floor(Math.random() * secenek.length);

let bot = (secenek[random]);
//console.log(bot);

function game1(){

    
    if(!scissor.classList.contains("aaa")){ 

            let random = Math.floor(Math.random() * secenek.length);
            let bot = (secenek[random]);
            console.log(bot);
            
            scissor.classList.add("aaa");


            if(bot === "makas"){
                c1.innerHTML = `<div id="m" class="s 3">✂️</div>`;
                c2.innerHTML = `<div id="m" class="s 3">✂️</div>`;
                result1.textContent = "Berabere";
            }
    
            else if(bot === "kagit"){
                i++;
                c1.innerHTML = `<div id="s" class="s 2">📄</div>`;
                c2.innerHTML = `<div id="m" class="s 3">✂️</div>`;
                result1.textContent = "Kazandınız!";
                result2.textContent = `${i} - ${k}`;

            }
    
            else if(bot === "tas"){
                k++;
                c1.innerHTML = `<div class="s 1">🪨</div>`;
                c2.innerHTML = `<div id="m" class="s 3">✂️</div>`;
                result1.textContent = "Kaybettiniz";
                result2.textContent = `${i} - ${k}`;
            }

            
            setTimeout(() => {
                
                scissor.classList.remove("aaa");
                result1.textContent = "Taş - Kağıt - Makas"

                c1.innerHTML = `
                    <div class="s 1">🪨</div>
                    <div id="s" class="s 2">📄</div>
                    <div id="m" class="s 3">✂️</div>
                `;

                c2.innerHTML = `
                    <div id="rock" onclick="game3()" class="s 4">🪨</div>
                    <div id="papper" onclick="game2()" class="s 5">📄</div>
                    <div id="scissor" onclick="game1()" class="s 6">✂️</div>
                `;

            }, 2000);


    
    }
}
    //Kağıt bölümü

function game2(){

    if(!papper.classList.contains("aaa")){ 

            let random = Math.floor(Math.random() * secenek.length);
            let bot = (secenek[random]);
            console.log(bot);
            
            papper.classList.add("aaa");


            if(bot === "makas"){
                k++;
                c1.innerHTML = `<div id="m"  class="s 3">✂️</div>`;
                c2.innerHTML = `<div id="s" class="s 2">📄</div>`;
                result1.textContent = "Kaybettiniz";
                result2.textContent = `${i} - ${k}`;
            }
    
            else if(bot === "kagit"){
                c1.innerHTML = `<div id="s" class="s 2">📄</div>`;
                c2.innerHTML = `<div id="s" class="s 2">📄</div>`;
                result1.textContent = "Berabere"; 
                result2.textContent = `${i} - ${k}`;
            }
    
            else if(bot === "tas"){
                i++;
                c1.innerHTML = `<div class="s 1">🪨</div>`;
                c2.innerHTML = `<div id="s" class="s 2">📄</div>`;
                result1.textContent = "Kazandınız!";
                result2.textContent = `${i} - ${k}`;
            }

            
            setTimeout(() => {
                
                papper.classList.remove("aaa");
                result1.textContent = "Taş - Kağıt - Makas";

                c1.innerHTML = `
                    <div class="s 1">🪨</div>
                    <div id="s" class="s 2">📄</div>
                    <div id="m" class="s 3">✂️</div>
                `;

                c2.innerHTML = `
                    <div id="rock" onclick="game3()" class="s 4">🪨</div>
                    <div id="papper" onclick="game2()" class="s 5">📄</div>
                    <div id="scissor" onclick="game1()" class="s 6">✂️</div>
                `;

            }, 2000);


        
    }
}
    //Taş Bölümü

function game3(){

    if(!rock.classList.contains("aaa")){ 

            let random = Math.floor(Math.random() * secenek.length);
            let bot = (secenek[random]);
            console.log(bot);
            
            rock.classList.add("aaa");


            if(bot === "makas"){
                i++;
                c1.innerHTML = `<div id="m" class="s 3">✂️</div>`;
                c2.innerHTML = `<div class="s 1">🪨</div>`;
                result1.textContent = "Kazandınız!";
                result2.textContent = `${i} - ${k}`;
            }
    
            else if(bot === "kagit"){
                k++;
                c1.innerHTML = `<div id="s" class="s 2">📄</div>`;
                c2.innerHTML = `<div class="s 1">🪨</div>`;
                result1.textContent = "Kaybettiniz";
                result2.textContent = `${i} - ${k}`;
            }
    
            else if(bot === "tas"){
                c1.innerHTML = `<div class="s 1">🪨</div>`;
                c2.innerHTML = `<div class="s 1">🪨</div>`;
                result1.textContent = "Berabere";
                result2.textContent = `${i} - ${k}`;
            }

            
            setTimeout(() => {
                
                rock.classList.remove("aaa");
                result1.textContent = "Taş - Kağıt - Makas";

                c1.innerHTML = `
                    <div class="s 1">🪨</div>
                    <div id="s" class="s 2">📄</div>
                    <div id="m" class="s 3">✂️</div>
                `;

                c2.innerHTML = `
                    
                    <div id="rock" onclick="game3()" class="s 4">🪨</div>
                    <div id="papper" onclick="game2()" class="s 5">📄</div>
                    <div id="scissor" onclick="game1()" class="s 6">✂️</div>
                
                `;


            }, 1000);


        
    }
}    



scissor.addEventListener("click", () => {
    game1();
})

papper.addEventListener("click", () => {
    game2();
})

rock.addEventListener("click", () => {
    game3();
})

btn1.addEventListener("click", () =>{
    i = 0;
    k = 0;
    result2.textContent = `${i} - ${k}`;
    result1.textContent = "Oyun Sıfırlandı";
})