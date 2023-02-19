let playerArray =[];

function myFunction() {
    window.open("blog.html");
  }
function myFunctions() {
    window.open("index.html");
  }
function addToCart(element){
    const name = element.parentNode.parentNode.parentNode.children[1].children[0].innerText ;
    playerArray.push(name);    
    display(playerArray);
}


document.getElementById('Triangle').addEventListener('click' , function(){

    const manager = document.getElementById('b');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('h');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal = 0.5 * managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

document.getElementById('Rectangle').addEventListener('click' , function(){

    const manager = document.getElementById('w');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('i');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal =  managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

document.getElementById('Parallelogram').addEventListener('click' , function(){

    const manager = document.getElementById('c');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('d');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal =  managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

document.getElementById('Rhombus').addEventListener('click' , function(){

    const manager = document.getElementById('e');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('f');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal = 0.5 * managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

document.getElementById('Pentagon').addEventListener('click' , function(){

    const manager = document.getElementById('m');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('n');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal = 0.5 * managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

document.getElementById('Ellipse').addEventListener('click' , function(){

    const manager = document.getElementById('o');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('p');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('tra');

    const CalculateTotal =3.14 *  managerCost * CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const Triangle =document.getElementById('color').style.backgroundColor = "#" + randomColor;
  }
  const Triangle =document.getElementById('Triangle');
  Triangle.addEventListener("click", setBg);
  setBg();
const setBgs = () => {
    const randomColors = Math.floor(Math.random()*16777215).toString(16);
    const Triangle =document.getElementById('colors').style.backgroundColor = "#" + randomColors;
  }
  const Rhombus =document.getElementById('Rhombus');
  Rhombus.addEventListener("click", setBgs);
  setBgs();


function display(playerArray) {
    
    const ol =document.getElementById('olList');
    const li =document.createElement("li");
    for(let i = 0; i<playerArray.length ; i++){
        const playerName =playerArray[i] ;
        
        
    li.innerHTML = `
    
    <div class="d-flex my-2">
    <ol>${playerName}</ol>
    <p class="mx-3"><span id="tra"> 00</span><span>cm</span><sup>2</sup></p>
    <button class="btn btn-primary btn-sm mx-2" type="button">Covert to m<sup>2</sup></button>
    </div>
    
    `
    }
    ol.appendChild(li);

    
}

