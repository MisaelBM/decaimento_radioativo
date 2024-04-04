let numberAtm;
let weigthAtm;
let nameElement;
let arrElementsVisor = [];
let arrSignal = [];
//Recebe os valores do elemento dados pelo user
document.getElementById("buttonStart").addEventListener('click', () => {
    let atmNumber = document.querySelector("#atmNumber").value;
    let atmWeigth = document.querySelector("#atmWeigth").value;
    //Verifica se os dados passados pelo user estao corretos
    for (let i = 0; i < ArrayOfElements.length; i++) {
        if (atmNumber == ArrayOfElements[i].numberAtm && atmWeigth == ArrayOfElements[i].weigth) {
            nameElement = ArrayOfElements[i].nameElem;
            document.getElementById("inputContent").style.display = "none";
            document.getElementById("systemContent").style.display = "flex";
            StartSystem(atmNumber, atmWeigth);      
            break;
        };
        if (i + 1 == ArrayOfElements.length) {
            document.getElementById("inputElement").style.border = "5px solid red";
        };
    };
    //funcao que inicia o sistema apos a confirmacao dos dados
    function StartSystem(AtmN, AtmW) {
        numberAtm = parseInt(AtmN);
        weigthAtm = parseInt(AtmW);
        arrElementsVisor.push({
            weigth: weigthAtm,
            nameElem: nameElement,
            numberAtm: numberAtm
        });
        AddElementsVisor();
        document.getElementById("alpha").addEventListener('click', AlphaFunc);
        document.getElementById("beta").addEventListener('click', BetaFunc);
        document.getElementById("delete").addEventListener('click', DeleteFunc);
    };
});
let indexElem;
//Funcao alfa
function AlphaFunc() {
    //Verfica se a variavel ja contem o index do ultimo elemento
    if (!indexElem) {
        ArrayOfElements.forEach(e => {
            (e.nameElem == nameElement) ? indexElem = ArrayOfElements.indexOf(e) : false;
        });
    };
    if (indexElem > 1) {
        //Realiza o decaimento alfa
        weigthAtm -= 4;
        numberAtm -= 2;
        indexElem -= 2;
        nameElement = ArrayOfElements[indexElem].nameElem;
        arrElementsVisor.push({
            weigth: weigthAtm,
            nameElem: nameElement,
            numberAtm: numberAtm
        });
        arrSignal.push("α");
        AddElementsVisor();
    };
};
//Funcao beta
function BetaFunc() {
    //Verfica se a variavel ja contem o index do ultimo elemento
    if (!indexElem) {
        ArrayOfElements.forEach(e => {
            (e.nameElem == nameElement) ? indexElem = ArrayOfElements.indexOf(e) : false;
        });
    };
    if (indexElem < 36) {
        //Realiza o decaimento beta
        ++numberAtm;
        ++indexElem;
        nameElement = ArrayOfElements[indexElem].nameElem;
        arrElementsVisor.push({
            weigth: weigthAtm,
            nameElem: nameElement,
            numberAtm: numberAtm
        });
        arrSignal.push("β");
        AddElementsVisor();
    };
};
//Funcao de deletar o ultimo elemento
function DeleteFunc() {
    arrElementsVisor.pop();
    arrSignal.pop();
    weigthAtm = arrElementsVisor[arrElementsVisor.length - 1].weigth;
    numberAtm = arrElementsVisor[arrElementsVisor.length - 1].numberAtm;
    nameElement = arrElementsVisor[arrElementsVisor.length - 1].nameElem;
    ArrayOfElements.forEach(e => {
        (e.nameElem == nameElement) ? indexElem = ArrayOfElements.indexOf(e) : false;
    });
    AddElementsVisor();
};
//Funcao que mostra os elementos no visor
function AddElementsVisor() {
    document.getElementById("visor").innerHTML = "";
    for (let i = 0; i < arrElementsVisor.length; i++) {
        document.getElementById("visor").innerHTML += `
        <div class="element-visor"> 
            <div class="weigth-visor">
                ${arrElementsVisor[i].weigth}
            </div>
            <div class="name-visor">
                ${arrElementsVisor[i].nameElem}
            </div>
            <div class="number-visor">
                ${arrElementsVisor[i].numberAtm}
            </div>               
        </div>`;
        if (arrSignal[i]) {
            document.getElementById("visor").innerHTML += `
            <div class="signal-elements">
                ${arrSignal[i]}
            </div>`;
        };
    };
};