const elementoH1 = document.createElement('h1');
elementoH1.innerText = 'Exercício 5.2 - JavaScript Dom';
document.body.appendChild(elementoH1);

const myMain = document.createElement('main');
myMain.className = 'main-content';
document.body.appendChild(myMain);

const mySection = document.createElement('section');
mySection.className = 'center-content';
myMain.appendChild(mySection);

const myParagraph = document.createElement('p');
myParagraph.innerText = 'Daqui a 1 ano eu quero revisitar esse código para checar se avancei e venci como dev!'
mySection.appendChild(myParagraph);

const leftSection = document.createElement('section');
leftSection.className = 'left-content'
myMain.appendChild(leftSection);

const rightSection = document.createElement('section');
rightSection.className = 'right-content'
myMain.appendChild(rightSection)

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
leftSection.appendChild(elementImg);

const myList = document.createElement('ul');
rightSection.appendChild(myList);
const myListItems = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez']
for (let num in myListItems) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = myListItems[num];
    myList.appendChild(elementLi);
}

for (let index = 0; index <= 2; index += 1) {
const someH3 = document.createElement('h3');
someH3.innerHTML = 'Oi, eu sou o h3 ' + index;
myMain.appendChild(someH3);
}


const myTitle = document.querySelector('h1');
myTitle.className = 'title'

const againSomeH3 = document.getElementsByTagName('h3');
for (let index =0; index < 3; index += 1) {
    againSomeH3[index].className = 'description';
}

const removingLeftContent = document.getElementsByClassName('left-content')[0];
myMain.removeChild(removingLeftContent)

const centralizingRightContent = document.getElementsByClassName('right-content')[0];
centralizingRightContent.style.marginRight = 'auto';

const changeCenterColor = document.getElementsByClassName('center-content')[0];
changeCenterColor.parentNode.style.backgroundColor = 'green';

