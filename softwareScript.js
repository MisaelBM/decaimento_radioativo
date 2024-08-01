let numberAtm;
let weigthAtm;
let nameElement;
let arrElementsVisor = [];
let arrSignal = [];

const ArrayOfElements = [{
    isotopes: [206],
    nameElem: "Hg",
    numberAtm: 80
}, {
    isotopes: [206, 207, 208, 209, 210],
    nameElem: "Ti",
    numberAtm: 81
}, {
    isotopes: [209, 210, 211, 212, 214],
    nameElem: "Pb",
    numberAtm: 82
}, {
    isotopes: [210, 211, 212, 213, 214, 215],
    nameElem: "Bi",
    numberAtm: 83
}, {
    isotopes: [210, 211, 212, 213, 214, 215, 216, 218],
    nameElem: "Po",
    numberAtm: 84
}, {
    isotopes: [215, 217, 218, 219],
    nameElem: "At",
    numberAtm: 85
}, { 
    isotopes: [219, 220, 222],
    nameElem: "Rn",
    numberAtm: 86
}, {
    isotopes: [221, 223],
    nameElem: "Fr",
    numberAtm: 87
}, {
    isotopes: [223, 224, 225, 226, 228],
    nameElem: "Ra",
    numberAtm: 88
}, {
    isotopes: [225, 227, 228],
    nameElem: "Ac",
    numberAtm: 89
}, {
    isotopes: [227, 228, 229, 230, 231, 232, 234],
    nameElem: "Th",
    numberAtm: 90
}, {
    isotopes: [231, 233, 234],
    nameElem: "Pa",
    numberAtm: 91
}, {
    isotopes: [233, 234, 235, 237, 238],
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
}, {
    isotopes: [247],
    nameElem: "Cm",
    numberAtm: 96
}, {
    isotopes: [247],
    nameElem: "Bk",
    numberAtm: 97
}, {
    isotopes: [251],
    nameElem: "Cf",
    numberAtm: 98
}, {
    isotopes: [252],
    nameElem: "Es",
    numberAtm: 99
}, {
    isotopes: [257],
    nameElem: "Fm",
    numberAtm: 100
}, {
    isotopes: [258],
    nameElem: "Md",
    numberAtm: 101
}, {
    isotopes: [259],
    nameElem: "No",
    numberAtm: 102
}, {
    isotopes: [262],
    nameElem: "Lr",
    numberAtm: 103
}, {
    isotopes: [261],
    nameElem: "Rf",
    numberAtm: 104
}, {
    isotopes: [262],
    nameElem: "Db",
    numberAtm: 105
}, {
    isotopes: [266],
    nameElem: "Sg",
    numberAtm: 106
}, {
    isotopes: [264],
    nameElem: "Bh",
    numberAtm: 107
}, {
    isotopes: [277],
    nameElem: "Hs",
    numberAtm: 108
}, {
    isotopes: [268],
    nameElem: "Mt",
    numberAtm: 109
}, {
    isotopes: [271],
    nameElem: "Ds",
    numberAtm: 110
}, {
    isotopes: [272],
    nameElem: "Rg",
    numberAtm: 111
}, {
    isotopes: [277],
    nameElem: "Cn",
    numberAtm: 112
}, {
    isotopes: [286],
    nameElem: "Nh",
    numberAtm: 113
}, {
    isotopes: [289],
    nameElem: "Fl",
    numberAtm: 114
}, {
    isotopes: [288],
    nameElem: "Mc",
    numberAtm: 115
}, {
    isotopes: [293],
    nameElem: "Lv",
    numberAtm: 116
}, {
    isotopes: [294],
    nameElem: "Ts",
    numberAtm: 117
}, {
    isotopes: [294],
    nameElem: "Og",
    numberAtm: 118
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

//Loop que cria as opcoes do seletor de elementos
ArrayOfElements.forEach(e => {
    document.getElementById("selectIsotope").innerHTML += `<optgroup id="${e.nameElem}Group"></optgoup>`;
    e.isotopes.forEach(elem => {
        document.getElementById(`${e.nameElem}Group`).innerHTML += `<option value="${elem}, ${e.nameElem}, ${e.numberAtm}">${e.nameElem} ${elem}</option>`;
    });
});
//Recebe os valores do elemento dados pelo user
let seriesNumber;
document.getElementById("buttonStart").addEventListener('click', () => {
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
        document.getElementById("alpha").addEventListener('click', AlphaFunc);
        document.getElementById("beta").addEventListener('click', BetaFunc);
        document.getElementById("delete").addEventListener('click', DeleteFunc);
        document.getElementById("systemContent").style.display = "flex";
        document.getElementById("inputContent").style.display = "none";
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
    //Verifica se a emissao e possivel
    let possibleDecay;
    ArrSeries[seriesNumber].isotopes.forEach(e => {
        if (e.nameElem == ArrSeries[seriesNumber].lastIsotope.split("-")[0]) possibleDecay = (numberAtm - 2) - ((((weigthAtm - 4) - parseInt(ArrSeries[seriesNumber].lastIsotope.split("-")[1])) / 4) * 2) <= e.numberAtm ? true : false;
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
    };
};
//Funcao de deletar o ultimo elemento
function DeleteFunc() {
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
        <div class="element-visor">
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
            document.getElementById("boxDescription").style.display = "flex";
            document.getElementById("boxDescription").style.left = e.getBoundingClientRect().left + 300 < screen.width ? `${e.getBoundingClientRect().left}px` : `${e.getBoundingClientRect().left - 100}px`;
            document.getElementById("boxDescription").style.top = `${e.getBoundingClientRect().top}px`;
            let elementsClass = document.getElementsByClassName("info-isotope-button");
            for (let i = 0; i < elementsClass.length; i++) {
                elementsClass[i] == e ? DescriptionElement(i) : false;
            };
        });
    });
};
//Fecha a caixa de descricao
document.getElementById("boxClose").addEventListener('click', () => document.getElementById("boxDescription").style.display = "none");
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
    textDescription += `O isótopo ${descriptionName}-${descriptionWeigth} `;
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