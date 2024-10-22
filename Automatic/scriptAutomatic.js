const ArrayAllElements = [
    "H",  "He", "Li", "Be", "B",  "C",  "N",  "O",  "F",  "Ne",
    "Na", "Mg", "Al", "Si", "P",  "S",  "Cl", "Ar", "K",  "Ca",
    "Sc", "Ti", "V",  "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y",  "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I",  "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W",  "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "U",  "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const ArrSeries = [{
    nameSeries: "Tório",
    firstIsotope: "Th-232",
    lastIsotope: "Pb-208",
    isotopes: [{
        isotopes: [208],
        nameElem: "Tl",
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
        nameElem: "Tl",
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
        nameElem: "Tl",
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
        nameElem: "Tl",
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
const effectsSound = new Audio("../click-21156.mp3");
effectsSound.volume = JSON.parse(localStorage.getItem("effectsSoundsRes")) ? 1 : 0;

document.getElementById("buttonConfirm").addEventListener('click', () => {
    effectsSound.play();
    let firstElementWeight = document.querySelector("#firstElementWeight").value;
    let firstElementNumber = document.querySelector("#firstElementNumber").value;
    let lastElementWeight = document.querySelector("#lastElementWeight").value;
    let lastElementNumber = document.querySelector("#lastElementNumber").value;
    //Verifica se e possivel fazer o decaimento
    if (firstElementWeight && firstElementNumber && lastElementWeight && lastElementNumber) {
        if (((firstElementNumber - ((firstElementWeight - lastElementWeight) / 2)) <= lastElementNumber) && (firstElementWeight >= lastElementWeight) && (firstElementWeight > 0 && firstElementNumber > 0 && lastElementWeight > 0 && lastElementNumber > 0 && firstElementNumber < 119 && lastElementNumber < 119)) {
            DecaySystem(firstElementWeight, firstElementNumber, lastElementWeight, lastElementNumber);
        } else {
            document.getElementById("errorMessage").style.visibility = "visible";
            document.getElementById("errorMessage").innerHTML = "Não é possível realizar o decaimento com esses elementos";
        };
    } else {
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("errorMessage").innerHTML = "Preencha todos os campos";
    };
});
//Funcao que realiza o decaimento
function DecaySystem(firstElementWeight, firstElementNumber, lastElementWeight, lastElementNumber) {
    let elementWeight = parseInt(firstElementWeight);
    let elementNumber = parseInt(firstElementNumber);
    AddElementsVisor(elementWeight, elementNumber);
    //Verifica se o elemento faz parte de alguma serie radioativa
    let haveElement = false;
    ArrSeries.forEach(e => {
        e.isotopes.forEach(elem => {
            elem.isotopes.forEach(iso => {
                if (elem.numberAtm == lastElementNumber && iso == lastElementWeight) haveElement = true;
            });
        });
        if (e.lastIsotope.split("-")[0] == ArrayAllElements[lastElementNumber - 1] && parseInt(e.lastIsotope.split("-")[1]) == lastElementWeight) haveElement = true;
    });
    //Decaimento se os elementos fizerem parte de uma serie radioativa
    if (haveElement) {
        while (!(elementWeight == lastElementWeight && elementNumber == lastElementNumber)) {
            let possibleDecayAlpha = false;
            let possibleDecayBeta = false;
            ArrSeries[elementWeight % 4].isotopes.forEach(e => {
                e.isotopes.forEach(elem => {
                    if (e.numberAtm == elementNumber - 2 && elem == elementWeight - 4) possibleDecayAlpha = true;
                    if (e.numberAtm == elementNumber + 1 && elem == elementWeight) possibleDecayBeta = true;
                });
            });
            if (elementNumber - 2 == lastElementNumber && elementWeight - 4 == lastElementWeight) possibleDecayAlpha = true;
            if (elementNumber + 1 == lastElementNumber && elementWeight == lastElementWeight) possibleDecayBeta = true;
            if (possibleDecayAlpha && elementWeight - 4 >= lastElementWeight) {
                elementWeight -= 4;
                elementNumber -= 2;
            } else if (possibleDecayBeta) {
                elementNumber++
            } else {
                if (elementWeight > lastElementWeight) {
                    elementWeight -= 4;
                    elementNumber -= 2;
                } else {
                    elementNumber++;
                };
            };
            AddElementsVisor(elementWeight, elementNumber);
        };
    //Decaimento se os elementos nao fizerem parte de uma serie radioativa
    } else {
        while (!(elementWeight == lastElementWeight && elementNumber == lastElementNumber)) {
            if (elementWeight - 4 >= lastElementWeight) {
                elementWeight -= 4;
                elementNumber -= 2;
            } else {
                elementNumber++;
            };
            AddElementsVisor(elementWeight, elementNumber);
        };
    };
};

let ArrayElementsVisor = [];
//Funcao que adiciona os elementos na tela
function AddElementsVisor(elementWeight, elementNumber) {
    document.getElementById("elementsVisorContent").style.display = "flex";
    ArrayElementsVisor.push({
        weightAtm: elementWeight,
        numberAtm: elementNumber
    });
    document.getElementById("elementsVisorSpan").innerHTML = "";
    for (let i = 0; i < ArrayElementsVisor.length; i++) {
        document.getElementById("elementsVisorSpan").innerHTML += `
        <div class="element-visor">
            <div class="weigth-visor">
                ${ArrayElementsVisor[i].weightAtm}
            </div>
            <div class="name-visor">
                ${ArrayAllElements[ArrayElementsVisor[i].numberAtm - 1]}
            </div>
            <div class="number-visor">
                ${ArrayElementsVisor[i].numberAtm}
            </div>               
        </div>`;
        i + 1 < ArrayElementsVisor.length ? document.getElementById("elementsVisorSpan").innerHTML += `
        <div class="signal-elements">
            ${ArrayElementsVisor[i].weightAtm > ArrayElementsVisor[i + 1].weightAtm ? "α" : "β"} <i class="fa-solid fa-angles-right"></i>
        </div>` : false;
    };
};
//Botao de sair do decaimento
document.getElementById("exitButton").addEventListener('click', () => {
    effectsSound.play();
    ArrayElementsVisor = [];
    document.getElementById("elementsVisorContent").style.display = "none";
});