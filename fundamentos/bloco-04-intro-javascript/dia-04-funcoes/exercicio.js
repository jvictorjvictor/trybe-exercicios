let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim'

/* console.log('Bem-vinda', info.personagem)              exercício 1 */

//___________________________________________________________________________________________

/* console.log(info)                                      exercício 2 */

//___________________________________________________________________________________________

/* for (key in info) {
    console.log(key)
}                                                        //exercício 3 */

//___________________________________________________________________________________________

/* for (key in info) {
    console.log(info[key])
}                                                        //exercício 4 */

//____________________________________________________________________________________________

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
};

info2.recorrente = 'Sim'

for (key in info, info2) {
    console.log(info[key], 'e', info2[key])
}                                                          //exercício 5