let numberAtm;
let weigthAtm;
let nameElement;
let arrElementsVisor = [];
let arrSignal = [];
const effectsSound = new Audio("../click-21156.mp3");

const ArrayOfElements = [{
    isotopes: [206],
    nameElem: 'Hg',
    numberAtm: 80,
    nameExtensive: 'Mercúrio',
    type: 'Metal de transição'
},
{
    isotopes: [206, 207, 208, 209, 210],
    nameElem: 'Ti',
    numberAtm: 81,
    nameExtensive: 'Tálio',
    type: 'Outros Metais'
},
{
    isotopes: [209, 210, 211, 212, 214],
    nameElem: 'Pb',
    numberAtm: 82,
    nameExtensive: 'Chumbo',
    type: 'Outros Metais'
},
{
    isotopes: [210, 211, 212, 213, 214, 215],
    nameElem: 'Bi',
    numberAtm: 83,
    nameExtensive: 'Bismuto',
    type: 'Outros Metais'
},
{
    isotopes: [210, 211, 212, 213, 214, 215, 216, 218],
    nameElem: 'Po',
    numberAtm: 84,
    nameExtensive: 'Polônio',
    type: 'Semimetais'
},
{
    isotopes: [215, 217, 218, 219],
    nameElem: 'At',
    numberAtm: 85,
    nameExtensive: 'Astato',
    type: 'Halogênios'
},
{
    isotopes: [219, 220, 222],
    nameElem: 'Rn',
    numberAtm: 86,
    nameExtensive: 'Radônio',
    type: 'Gás nobre'
},
{
    isotopes: [221, 223],
    nameElem: 'Fr',
    numberAtm: 87,
    nameExtensive: 'Frâncio',
    type: 'Metal alcalino'
},
{
    isotopes: [223, 224, 225, 226, 228],
    nameElem: 'Ra',
    numberAtm: 88,
    nameExtensive: 'Radônio',
    type: 'Metal alcalino-terroso'
},
{
    isotopes: [225, 227, 228],
    nameElem: 'Ac',
    numberAtm: 89,
    nameExtensive: 'Actínio',
    type: 'Actinídeo'
},
{
    isotopes: [227, 228, 229, 230, 231, 232, 234],
    nameElem: 'Th',
    numberAtm: 90,
    nameExtensive: 'Tório',
    type: 'Actinídeo'
},
{
    isotopes: [231, 233, 234],
    nameElem: 'Pa',
    numberAtm: 91,
    nameExtensive: 'Protactínio',
    type: 'Actinídeo'
},
{
    isotopes: [233, 234, 235, 237, 238],
    nameElem: 'U',
    numberAtm: 92,
    nameExtensive: 'Urânio',
    type: 'Actinídeo'
},
{
    isotopes: [237],
    nameElem: 'Np',
    numberAtm: 93,
    nameExtensive: 'Netúnio',
    type: 'Actinídeo'
},
{
    isotopes: [241],
    nameElem: 'Pu',
    numberAtm: 94,
    nameExtensive: 'Plutônio',
    type: 'Actinídeo'
},
{
    isotopes: [241],
    nameElem: 'Am',
    numberAtm: 95,
    nameExtensive: 'Amerício',
    type: 'Actinídeo'
},
{
    isotopes: [247],
    nameElem: 'Cm',
    numberAtm: 96,
    nameExtensive: 'Curírio',
    type: 'Actinídeo'
},
{
    isotopes: [247],
    nameElem: 'Bk',
    numberAtm: 97,
    nameExtensive: 'Berkélio',
    type: 'Actinídeo'
},
{
    isotopes: [251],
    nameElem: 'Cf',
    numberAtm: 98,
    nameExtensive: 'Califórnio',
    type: 'Actinídeo'
},
{
    isotopes: [252],
    nameElem: 'Es',
    numberAtm: 99,
    nameExtensive: 'Einsteinio',
    type: 'Actinídeo'
},
{
    isotopes: [257],
    nameElem: 'Fm',
    numberAtm: 100,
    nameExtensive: 'Férmio',
    type: 'Actinídeo'
},
{
    isotopes: [258],
    nameElem: 'Md',
    numberAtm: 101,
    nameExtensive: 'Mendelevio',
    type: 'Actinídeo'
},
{
    isotopes: [259],
    nameElem: 'No',
    numberAtm: 102,
    nameExtensive: 'Nobelio',
    type: 'Actinídeo'
},
{
    isotopes: [262],
    nameElem: 'Lr',
    numberAtm: 103,
    nameExtensive: 'Laurêncio',
    type: 'Actinídeo'
},
{
    isotopes: [261],
    nameElem: 'Rf',
    numberAtm: 104,
    nameExtensive: 'Rutherfórdio',
    type: 'Metal de transição'
},
{
    isotopes: [262],
    nameElem: 'Db',
    numberAtm: 105,
    nameExtensive: 'Dúbnio',
    type: 'Metal de transição'
},
{
    isotopes: [266],
    nameElem: 'Sg',
    numberAtm: 106,
    nameExtensive: 'Seabórgio',
    type: 'Metal de transição'
},
{
    isotopes: [264],
    nameElem: 'Bh',
    numberAtm: 107,
    nameExtensive: 'Bóhrio',
    type: 'Metal de transição'
},
{
    isotopes: [277],
    nameElem: 'Hs',
    numberAtm: 108,
    nameExtensive: 'Hássio',
    type: 'Metal de transição'
},
{
    isotopes: [268],
    nameElem: 'Mt',
    numberAtm: 109,
    nameExtensive: 'Meitnério',
    type: 'Metal de transição'
},
{
    isotopes: [271],
    nameElem: 'Ds',
    numberAtm: 110,
    nameExtensive: 'Darmstádio',
    type: 'Metal de transição'
},
{
    isotopes: [272],
    nameElem: 'Rg',
    numberAtm: 111,
    nameExtensive: 'Roentgênio',
    type: 'Metal de transição'
},
{
    isotopes: [277],
    nameElem: 'Cn',
    numberAtm: 112,
    nameExtensive: 'Copernício',
    type: 'Metal de transição'
},
{
    isotopes: [286],
    nameElem: 'Nh',
    numberAtm: 113,
    nameExtensive: 'Nihônio',
    type: 'Outros Metais'
},
{
    isotopes: [289],
    nameElem: 'Fl',
    numberAtm: 114,
    nameExtensive: 'Fleróvio',
    type: 'Outros Metais'
},
{
    isotopes: [288],
    nameElem: 'Mc',
    numberAtm: 115,
    nameExtensive: 'Moscóvio',
    type: 'Outros Metais'
},
{
    isotopes: [293],
    nameElem: 'Lv',
    numberAtm: 116,
    nameExtensive: 'Livermório',
    type: 'Outros Metais'
},
{
    isotopes: [294],
    nameElem: 'Ts',
    numberAtm: 117,
    nameExtensive: 'Tenessino',
    type: 'Halogênio'
},
{
    isotopes: [294],
    nameElem: 'Og',
    numberAtm: 118,
    nameExtensive: 'Oganessônio',
    type: 'Gás nobre'
}];

const ArrSeries = [{
    nameSeries: "Tório",
    firstIsotope: "Th-232",
    lastIsotope: "Pb-208",
    isotopes: [{
        isotopes: [208],
        nameElem: "Ti",
        numberAtm: 81
    }, {
        isotopes: [208, 212],
        nameElem: "Pb",
        numberAtm: 82
    }, {
        isotopes: [212],
        nameElem: "Bi",
        numberAtm: 83
    }, {
        isotopes: [212, 216],
        nameElem: "Po",
        numberAtm: 84
    }, {
        isotopes: [220],
        nameElem: "Rn",
        numberAtm: 86
    }, {
        isotopes: [224, 228],
        nameElem: "Ra",
        numberAtm: 88
    }, {
        isotopes: [228],
        nameElem: "Ac",
        numberAtm: 89
    }, {
        isotopes: [228, 232],
        nameElem: "Th",
        numberAtm: 90
    }]
}, {
    nameSeries: "Netúnio",
    firstIsotope: "Np-237",
    lastIsotope: "Bi-209",
    isotopes: [{
        isotopes: [209],
        nameElem: "Ti",
        numberAtm: 81
    }, {
        isotopes: [209],
        nameElem: "Pb",
        numberAtm: 82
    }, {
        isotopes: [209, 213],
        nameElem: "Bi",
        numberAtm: 83
    }, {
        isotopes: [213],
        nameElem: "Po",
        numberAtm: 84
    }, {
        isotopes: [217],
        nameElem: "At",
        numberAtm: 85
    }, {
        isotopes: [221],
        nameElem: "Fr",
        numberAtm: 87
    }, {
        isotopes: [225],
        nameElem: "Ra",
        numberAtm: 88
    }, {
        isotopes: [225],
        nameElem: "Ac",
        numberAtm: 89
    }, {
        isotopes: [229],
        nameElem: "Th",
        numberAtm: 90
    }, {
        isotopes: [233],
        nameElem: "Pa",
        numberAtm: 91
    }, {
        isotopes: [233, 237],
        nameElem: "U",
        numberAtm: 92
    }, {
        isotopes: [237],
        nameElem: "Np",
        numberAtm: 93
    }, {
        isotopes: [241],
        nameElem: "Pu",
        numberAtm: 94
    }, {
        isotopes: [241],
        nameElem: "Am",
        numberAtm: 95
    }]
}, {
    nameSeries: "Urânio",
    firstIsotope: "U-238",
    lastIsotope: "Pb-206",
    isotopes: [{
        isotopes: [206],
        nameElem: "Hg",
        numberAtm: 80
    }, {
        isotopes: [206, 210],
        nameElem: "Ti",
        numberAtm: 81
    }, {
        isotopes: [206, 210, 214],
        nameElem: "Pb",
        numberAtm: 82
    }, {
        isotopes: [210, 214],
        nameElem: "Bi",
        numberAtm: 83
    }, {
        isotopes: [210, 214, 218],
        nameElem: "Po",
        numberAtm: 84
    }, {
        isotopes: [218],
        nameElem: "At",
        numberAtm: 85
    }, {
        isotopes: [222],
        nameElem: "Rn",
        numberAtm: 86
    }, {
        isotopes: [226],
        nameElem: "Ra",
        numberAtm: 88
    }, {
        isotopes: [230, 234],
        nameElem: "Th",
        numberAtm: 90
    }, {
        isotopes: [234],
        nameElem: "Pa",
        numberAtm: 91
    }, {
        isotopes: [234, 238],
        nameElem: "U",
        numberAtm: 92
    }]
}, {
    nameSeries: "Actínio",
    firstIsotope: "U-235",
    lastIsotope: "Pb-207",
    isotopes: [{
        isotopes: [207],
        nameElem: "Ti",
        numberAtm: 81
    }, {
        isotopes: [207, 211],
        nameElem: "Pb",
        numberAtm: 82
    }, {
        isotopes: [211, 215],
        nameElem: "Bi",
        numberAtm: 83
    }, {
        isotopes: [211, 215],
        nameElem: "Po",
        numberAtm: 84
    }, {
        isotopes: [215, 219],
        nameElem: "At",
        numberAtm: 85
    }, {
        isotopes: [219],
        nameElem: "Rn",
        numberAtm: 86
    }, {
        isotopes: [223],
        nameElem: "Fr",
        numberAtm: 87
    }, {
        isotopes: [223],
        nameElem: "Ra",
        numberAtm: 88
    }, {
        isotopes: [227],
        nameElem: "Ac",
        numberAtm: 89
    }, {
        isotopes: [227, 231],
        nameElem: "Th",
        numberAtm: 90
    }, {
        isotopes: [231],
        nameElem: "Pa",
        numberAtm: 91
    }, {
        isotopes: [235],
        nameElem: "U",
        numberAtm: 92
    }]
}];

//Verificacao de opcoes de audio
effectsSound.volume = JSON.parse(localStorage.getItem("effectsSoundsRes")) ? 1 : 0;
//Loop que cria as opcoes do seletor de elementos
ArrayOfElements.forEach(e => {
    document.getElementById("selectIsotope").innerHTML += `<optgroup id="${e.nameElem}Group"></optgoup>`;
    e.isotopes.forEach(elem => {
        document.getElementById(`${e.nameElem}Group`).innerHTML += `<option value="${elem}, ${e.nameElem}, ${e.numberAtm}">${e.nameElem} ${elem}</option>`;
    });
});
//Sistema de pesquisa dos elementos
document.getElementById("searchButton").addEventListener('click', () => {
    effectsSound.play();
    document.getElementById("resultsSearch").innerHTML = "";
    document.getElementById("resultsSearch").style.display = "flex";
    ArrayOfElements.forEach(e => {
        let nameElement = e.nameElem.toLowerCase();
        let resElement = document.querySelector("#searchElement").value;
        resElement = resElement.toLowerCase();
        e.isotopes.forEach(n => {
            n = n.toString();
            let extensiveElement = e.nameExtensive.toLowerCase();
            document.getElementById("resultsSearch").innerHTML += nameElement.includes(resElement) || e.numberAtm == parseInt(document.querySelector("#searchElement").value) || n.includes(document.querySelector("#searchElement").value) || `${nameElement} ${n}`.includes(resElement) || extensiveElement.includes(resElement) ? `<div class="elements-results" value="${e.numberAtm}">${e.nameElem} ${n}<hr></div>` : ``;
        });
    });
    document.querySelectorAll(".elements-results").forEach(e => e.addEventListener('click', () => {
        let textElement = e.textContent.split(" ");
        document.getElementById("selectIsotope").value = `${textElement[1]}, ${textElement[0]}, ${e.getAttribute("value")}`;
        document.querySelector("#searchElement").value = `${textElement[0]} ${textElement[1]}`;
        document.getElementById("resultsSearch").style.display = "none";
    }));
});
//Recebe os valores do elemento dados pelo user
let seriesNumber;
document.getElementById("buttonStart").addEventListener('click', () => {
    effectsSound.play();
    //Recebe os dados do usuario
    let arrData = document.getElementById("selectIsotope").value;
    arrData = arrData.toString();
    arrData = arrData.split(",");
    StartSystem(arrData[0], arrData[1].trim(), arrData[2]);
    //Funcao que inicia o sistema apos a confirmacao dos dados
    function StartSystem(AtmW, AtmName, AtmN) {
        numberAtm = parseInt(AtmN);
        weigthAtm = parseInt(AtmW);
        nameElement = AtmName.toString();
        arrElementsVisor.push({
            weigth: weigthAtm,
            nameElem: nameElement,
            numberAtm: numberAtm
        });
        document.getElementById("decayType").innerHTML = `<b>${ArrSeries[weigthAtm % 4].lastIsotope}</b>`;
        seriesNumber = weigthAtm % 4;
        AddElementsVisor();
        document.getElementById("systemContent").style.display = "flex";
        document.getElementById("inputContent").style.display = "none";
    };
});
let indexElem;
//Funcao alfa
function AlphaFunc() {
    effectsSound.play();
    //Verfica se a variavel ja contem o index do ultimo elemento
    if (!indexElem) {
        ArrayOfElements.forEach(e => {
            (e.nameElem == nameElement) ? indexElem = ArrayOfElements.indexOf(e) : false;
        });
    };
    //Verifica se a emissao e possivel
    let possibleDecay;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.nameElem == ArrSeries[seriesNumber].lastIsotope.split("-")[0]) possibleDecay = weigthAtm - 4 >= parseInt(ArrSeries[seriesNumber].lastIsotope.split("-")[1]) ? true : false;
    });
    let lastElement = ArrSeries[seriesNumber].lastIsotope.split("-");
    if (indexElem > 1 && !(nameElement == lastElement[0] && weigthAtm == parseInt(lastElement[1])) && possibleDecay) {
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
    } else {
        document.getElementById("alpha").style.backgroundColor = "brown";
        setTimeout(
            () => {
                document.getElementById("alpha").style.backgroundColor = "white";
            }
        , 500);
    };
};
//Funcao beta
function BetaFunc() {
    effectsSound.play();
    //Verfica se a variavel ja contem o index do ultimo elemento
    if (!indexElem) {
        ArrayOfElements.forEach(e => {
            (e.nameElem == nameElement) ? indexElem = ArrayOfElements.indexOf(e) : false;
        });
    };
    //Verifica se a emissao e possivel
    let possibleDecay;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.nameElem == ArrSeries[seriesNumber].lastIsotope.split("-")[0]) possibleDecay = (numberAtm + 1) - (((weigthAtm - parseInt(ArrSeries[seriesNumber].lastIsotope.split("-")[1])) / 4) * 2) <= e.numberAtm ? true : false;
    });
    let lastElement = ArrSeries[seriesNumber].lastIsotope.split("-");
    if (indexElem < ArrayOfElements.length - 1 && !(nameElement == lastElement[0] && weigthAtm == parseInt(lastElement[1])) && possibleDecay) {
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
    } else {
        document.getElementById("beta").style.backgroundColor = "brown";
        setTimeout(
            () => {
                document.getElementById("beta").style.backgroundColor = "white";
            }
        , 500);
    };
};
//Funcao de deletar o ultimo elemento
function DeleteFunc() {
    effectsSound.play();
    if (arrSignal.length != 0) {
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
};
//Funcao que mostra os elementos no visor
function AddElementsVisor() {
    document.getElementById("visor").innerHTML = "";
    for (let i = 0; i < arrElementsVisor.length; i++) {
        document.getElementById("visor").innerHTML += `
        <div class="element-visor" ${JSON.parse(localStorage.getItem("elementsColor")) ? `style="background-color:${ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Metal de transição" ? `rgb(242,176,177)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Outros Metais" ? `rgb(163,199,212)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Semimetais" ? `rgb(109,197,188)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Halogênios" ? `rgb(168,224,244)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Gás nobre" ? `rgb(102,177,222)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Metal alcalino" ? `rgb(246,201,96)` : ArrayOfElements[arrElementsVisor[i].numberAtm - 80].type == "Metal alcalino-terroso" ? `rgb(239,229,91)` : `rgb(228,189,218)`};"` : ``}>
            ${`${arrElementsVisor[i].nameElem}-${arrElementsVisor[i].weigth}` == ArrSeries[seriesNumber].lastIsotope ? `` : `<button class="info-isotope-button" style="background-color: ${VerificationSeriesColor(arrElementsVisor[i].weigth, arrElementsVisor[i].numberAtm)};"><i class="fa-sharp fa-solid fa-circle-question"></i></button>`}
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
        arrSignal[i] ? document.getElementById("visor").innerHTML += `
            <div class="signal-elements">
                ${arrSignal[i]} <i class="fa-solid fa-angles-right"></i>
            </div>` : false;
        document.getElementById("visor").scrollTop = document.getElementById("visor").scrollHeight;
    };
    //Adiciona o clique do botao de descricao do elemento
    document.querySelectorAll(".info-isotope-button").forEach(e => {
        e.addEventListener('click', () => {
            effectsSound.play();
            document.getElementById("boxDescription").style.display = "flex";
            document.getElementById("boxDescription").style.left = e.getBoundingClientRect().left + 300 < innerWidth ? `${e.getBoundingClientRect().left}px` : `${e.getBoundingClientRect().left - 100}px`;
            document.getElementById("boxDescription").style.top = `${e.getBoundingClientRect().top}px`;
            let elementsClass = document.getElementsByClassName("info-isotope-button");
            for (let i = 0; i < elementsClass.length; i++) {
                elementsClass[i] == e ? DescriptionElement(i) : false;
            };
        });
    });
    //Troca os botoes do visor caso tenha sido concluido o decaimento
    if (`${arrElementsVisor[arrElementsVisor.length - 1].nameElem}-${arrElementsVisor[arrElementsVisor.length - 1].weigth}` == ArrSeries[seriesNumber].lastIsotope) { 
        document.getElementById("buttonsActionContent").innerHTML = `<div class="button-action-div">
                <button class="button-finish-decay" id="finishDecay">Finalizar</button>
            </div>
            <div class="button-action-div">
                <button class="button-action" id="delete"><i class="fa-solid fa-delete-left"></i></button>
        </div>`;
        document.getElementById("finishDecay").addEventListener('click', FinishDecayDescription);
        document.getElementById("delete").addEventListener('click', DeleteFunc);
    } else {
        document.getElementById("buttonsActionContent").innerHTML = `<div class="button-action-div">
                <button class="button-action" id="alpha">α</button>
            </div>
            <div class="button-action-div">
                <button class="button-action" id="beta">β</button>
            </div>
            <div class="button-action-div">
                <button class="button-action" id="delete"><i class="fa-solid fa-delete-left"></i></button>
        </div>`;
        document.getElementById("alpha").addEventListener('click', AlphaFunc);
        document.getElementById("beta").addEventListener('click', BetaFunc);
        document.getElementById("delete").addEventListener('click', DeleteFunc);
    };
};
//Fecha a caixa de descricao
document.getElementById("boxClose").addEventListener('click', () => {
    effectsSound.play();
    document.getElementById("boxDescription").style.display = "none";
});
//Funcao que verifica se esta seguindo a serie radioativa 
function VerificationSeriesColor(elemWe, elemNu) {
    let haveElement = false;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.isotopes.includes(elemWe) && e.numberAtm == elemNu) return haveElement = true;
    });
    return haveElement ? "rgb(0, 255, 149)" : "rgb(229, 255, 0)";
};
//Funcao que cria a descricao do elemento selecionado
function DescriptionElement(index) {
    //Realizando o tratamento dos dados
    let descriptionWeigth = parseInt(arrElementsVisor[index].weigth);
    let descriptionName = arrElementsVisor[index].nameElem;
    let descriptionNumber = parseInt(arrElementsVisor[index].numberAtm);
    //Processo de estruturacao do texto
    document.getElementById("descriptionTitle").innerHTML = `${descriptionName}-${descriptionWeigth}`;
    let textDescription = ``;
    textDescription += `O isótopo ${descriptionName}-${descriptionWeigth} possui ${descriptionNumber} prótons e ${descriptionWeigth - descriptionNumber} nêutrons, `;
    let haveElement = false;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.isotopes.includes(descriptionWeigth) && e.numberAtm == descriptionNumber) return haveElement = true;
    });
    textDescription += haveElement ? `faz parte da série do ${ArrSeries[seriesNumber].nameSeries} que tem como objetivo final o ${ArrSeries[seriesNumber].lastIsotope}. ` : `não faz parte da série do ${ArrSeries[seriesNumber].nameSeries}, mas é possível chegar nos elementos da série que tem como objetivo final o ${ArrSeries[seriesNumber].lastIsotope}. `;
    //Identifica o tipo de conexao para a proxima emissao
    let typeConnection = 0;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.isotopes.includes(descriptionWeigth - 4) && e.numberAtm == descriptionNumber - 2) {
            typeConnection += 1;
        } else if (e.isotopes.includes(descriptionWeigth) && e.numberAtm == descriptionNumber + 1) {
            typeConnection += 2;
        };
    });
    if (typeConnection) {
        if (typeConnection == 1) {
            //Emissao Alfa
            let res;
            ArrayOfElements.forEach(e => {
                e.nameElem == descriptionName ? res = ArrayOfElements[ArrayOfElements.indexOf(e) - 2].nameElem : false;
            });
            textDescription += `A proxima emissão deve ser Alfa (α) que resultará no isótopo ${res}-${descriptionWeigth - 4}`; 
        } else if (typeConnection == 2) {
            //Emissao Beta
            let res;
            ArrayOfElements.forEach(e => {
                e.nameElem == descriptionName ? res = ArrayOfElements[ArrayOfElements.indexOf(e) + 1].nameElem : false;
            });
            textDescription += `A proxima emissão deve ser Beta (β) que resultará no isótopo ${res}-${descriptionWeigth}`;
        } else {
            //Emissao Alfa e Beta
            let res1;
            let res2;
            ArrayOfElements.forEach(e => {
                e.nameElem == descriptionName ? res1 = ArrayOfElements[ArrayOfElements.indexOf(e) + 1].nameElem : false;
                e.nameElem == descriptionName ? res2 = ArrayOfElements[ArrayOfElements.indexOf(e) - 2].nameElem : false;
            });
            textDescription += `A proxima emissão pode ser Beta (β) que resultará no isótopo ${res1}-${descriptionWeigth} ou Alfa (α) que resulta no isótopo ${res2}-${descriptionWeigth - 4}`;
        };
        textDescription += haveElement ? `.` : `, dessa forma o decaimento retorna a linha dos isótopos da série do ${ArrSeries[seriesNumber].nameSeries}.`;
    } else {
        //Caso nao seja possivel realizar apenas 1 emissao esse codigo e executado
        let nearWeigth = 0;
        let nearIndex;
        let nearNumberAtm = 0;
        let numberEmission = 0;
        ArrSeries[seriesNumber].isotopes.forEach(e => {
            e.isotopes.forEach(el => {
                //Possivel emissao Beta
                //Verifica sua proximidade e se e compativel com o elemento atual
                if (el == descriptionWeigth) {
                    //Verifica se o elemento encontrado fica com o numero atomico compativel apos as emissoes
                    if (e.numberAtm > descriptionNumber) {
                        //Verifica se outro caminho mais curto ja foi encontrado
                        if (!numberEmission || (((descriptionWeigth - el) / 4) + (e.numberAtm - (descriptionNumber - (((descriptionWeigth - el) / 4) * 2)))) < numberEmission) {
                            nearWeigth = el;
                            nearIndex = ArrSeries[seriesNumber].isotopes.indexOf(e);
                            nearNumberAtm = e.numberAtm;
                            numberEmission = ((descriptionWeigth - el) / 4) + (e.numberAtm - (descriptionNumber - (((descriptionWeigth - el) / 4) * 2)));
                        };
                    };
                //Possivel emissao Alfa
                //Verifica se e compativel com o elemento atual
                } else if (el < descriptionWeigth) {
                    //Verifica se o elemento encontrado fica com o numero atomico compativel apos as emissoes
                    if (descriptionNumber - (((descriptionWeigth - el) / 4) * 2) <= e.numberAtm) {
                        //Verifica se outro caminho mais curto ja foi encontrado
                        if (!numberEmission || (((descriptionWeigth - el) / 4) + (e.numberAtm - (descriptionNumber - (((descriptionWeigth - el) / 4) * 2)))) < numberEmission) {
                            nearWeigth = el;
                            nearIndex = ArrSeries[seriesNumber].isotopes.indexOf(e);
                            nearNumberAtm = e.numberAtm;
                            numberEmission = ((descriptionWeigth - el) / 4) + (e.numberAtm - (descriptionNumber - (((descriptionWeigth - el) / 4) * 2)));
                        };
                    };
                };
            });
        });
        textDescription += `Para retornar a série do ${ArrSeries[seriesNumber].nameSeries} é preciso realizar `;
        textDescription += descriptionWeigth > nearWeigth ? `${(descriptionWeigth - nearWeigth) / 4} emissões Alfa (α)` : ``;
        textDescription += descriptionWeigth > nearWeigth && (descriptionNumber - (((descriptionWeigth - nearWeigth) / 4) * 2)) < nearNumberAtm ? ` e ` : ``;
        textDescription += (descriptionNumber - (((descriptionWeigth - nearWeigth) / 4) * 2)) < nearNumberAtm ? `${nearNumberAtm - (descriptionNumber - (((descriptionWeigth - nearWeigth) / 4) * 2))} emissões Beta (β)` : ``;
        textDescription += ` resultando no ${ArrSeries[seriesNumber].isotopes[nearIndex].nameElem}-${nearWeigth}.`;
    };
    document.getElementById("textDescription").innerHTML = textDescription;
};
//Funcao que faz a descricao final do decaimento
function FinishDecayDescription() {
    effectsSound.play();
    document.getElementById("finishDescription").style.display = "flex";
    document.getElementById("buttonExitFinishDescription").addEventListener('click', () => {
        effectsSound.play();
        document.getElementById("finishDescription").style.display = "none";
    });
    let textFinishDesciption = ``;
    textFinishDesciption += `Essa é a série radioativa do <b>${ArrSeries[weigthAtm % 4].nameSeries}</b> e ela acontece de forma ${weigthAtm % 4 == 3 ? `<b>artificial</b>` : `<b>natural</b>`}`;
    let arrRes = arrElementsVisor.map(e => {
        let haveElement = false;
        ArrSeries[seriesNumber].isotopes.forEach(el => {
            if (el.isotopes.includes(e.weigth) && el.numberAtm == e.numberAtm) haveElement = true;
        });
        return haveElement;
    });
    let listElementsFalse = [];
    for (let i in arrRes) if (!arrRes[i]) listElementsFalse.push(`<strong class="element-description">${arrElementsVisor[i].nameElem}-${arrElementsVisor[i].weigth}</strong>`);
    let textElementsFalse = "";
    if (listElementsFalse.length > 1) {
        for (let i in listElementsFalse) textElementsFalse += i == listElementsFalse.length - 1 ? `e ${listElementsFalse[i]}` : i == listElementsFalse.length - 2 ? `${listElementsFalse[i]} ` : `${listElementsFalse[i]}, `;
    } else {
        textElementsFalse = listElementsFalse.toString();
    };
    textFinishDesciption += arrRes.includes(false) && weigthAtm % 4 != 3 ? `, mas do jeito como foi realizada é somente possível fazer o decaimento de forma <b>artificial</b>, pois o${listElementsFalse.length > 1 ? `s elementos ${textElementsFalse} não estão presentes na série radioativa do ${ArrSeries[weigthAtm % 4].nameSeries}. ` : ` elemento ${textElementsFalse} não está presente na série radioativa do ${ArrSeries[weigthAtm % 4].nameSeries}. `}` : `. `;
    if (arrRes.includes(false)) for (let i in arrRes) textFinishDesciption += !arrRes[parseInt(i)] && (arrRes[parseInt(i) - 1] || parseInt(i) - 1 < 0) && arrRes[parseInt(i) + 1] ? `Acontece um pequeno desvio no decaimento onde é utilizado o elemento <strong class="element-description">${arrElementsVisor[parseInt(i)].nameElem}-${arrElementsVisor[parseInt(i)].weigth}</strong> que não se encontra na série radioativa original, mas já é rapidamente corrigido com uma emissão ${arrElementsVisor[parseInt(i)].weigth > arrElementsVisor[parseInt(i) + 1].weigth ? `<b>Alfa (α)</b>` : `<b>Beta (β)</b>`} virando o elemento <strong class="element-description">${arrElementsVisor[parseInt(i) + 1].nameElem}-${arrElementsVisor[parseInt(i) + 1].weigth}</strong>. ` : !arrRes[parseInt(i)] && (arrRes[parseInt(i) - 1] || parseInt(i) - 1 < 0) && !arrRes[parseInt(i) + 1] ? `Existe um desvio no decaimento que começa no elemento <strong class="element-description">${arrElementsVisor[parseInt(i)].nameElem}-${arrElementsVisor[parseInt(i)].weigth}</strong> ` : !arrRes[parseInt(i)] && (!arrRes[parseInt(i) - 1] || parseInt(i) - 1 < 0) && arrRes[parseInt(i) + 1] ? `e termina no elemento <strong class="element-description">${arrElementsVisor[parseInt(i)].nameElem}-${arrElementsVisor[parseInt(i)].weigth}</strong> que corrige o desvio com uma emissão ${arrElementsVisor[parseInt(i)].weigth > arrElementsVisor[parseInt(i) + 1].weigth ? `<b>Alfa (α)</b>` : `<b>Beta (β)</b>`} virando o elemento <strong class="element-description">${arrElementsVisor[parseInt(i) + 1].nameElem}-${arrElementsVisor[parseInt(i) + 1].weigth}</strong>. ` : ``;
    textFinishDesciption += `O decaimento realizado é composto por ${arrElementsVisor.length} elementos, que começa no elemento <strong class="element-description">${arrElementsVisor[0].nameElem}-${arrElementsVisor[0].weigth}</strong> e termina com o elemento <strong class="element-description">${arrElementsVisor[arrElementsVisor.length - 1].nameElem}-${arrElementsVisor[arrElementsVisor.length - 1].weigth}</strong>, assim finalizando o decaimento. `;
    let emissionAlpha = 0;
    let emissionBeta = 0;
    arrSignal.forEach(e => {
        if (e == "α") {
            emissionAlpha++
        } else {
            emissionBeta++
        }; 
    });
    textFinishDesciption += !(arrRes.includes(false)) ? `Nesse decaimento ${arrSignal.length > 1 ? `foram realizadas ${arrSignal.length} emissões que são ${emissionAlpha} <b>Alfa (α)</b> e ${emissionBeta} <b>Beta (β)</b>. ` : `foi realizado ${arrSignal.length} emissão que é ${arrSignal[0] == "α" ? `<b>Alfa (α)</b>` : `<b>Beta (β)</b>`}`}` : ``;
    document.getElementById("finishDescriptionVisor").innerHTML = textFinishDesciption;
    //Coloca o escutador de eventos nos elementos citados
    document.querySelectorAll(".element-description").forEach(e => {
        e.addEventListener('mouseenter', () => {  
            document.getElementById("descriptionElement").style.display = "flex";
            document.getElementById("descriptionElement").style.left = e.getBoundingClientRect().left + 300 < innerWidth ? `${e.getBoundingClientRect().left}px` : `${e.getBoundingClientRect().left - 130}px`;
            document.getElementById("descriptionElement").style.top = `${e.getBoundingClientRect().top < innerHeight - 180 ? e.getBoundingClientRect().top + 25 : e.getBoundingClientRect().top - 175}px`;
            CreatElementDescription(e.textContent);
        });
        e.addEventListener('mouseleave', () => {
            document.getElementById("descriptionElement").style.display = "none";
        });
    });
    function CreatElementDescription(element) {
        let elementProps = element.split("-");
        let numberElement;
        let elementExtensive;
        arrElementsVisor.forEach(e => {
            if (e.nameElem == elementProps[0]) {
                numberElement = e.numberAtm;
                elementExtensive = ArrayOfElements[numberElement - 80].nameExtensive;
            };
        });
        document.getElementById("descriptionElementText").innerHTML = `O ${elementExtensive} (${element}) é o ${numberElement}° elemento da tabela periódica e sua massa atômica vale ${elementProps[1]}, o elemento também possui ${numberElement} prótons e ${parseInt(elementProps[1]) - numberElement} nêutrons.`;
    };
};