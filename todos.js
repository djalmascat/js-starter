var btnElement = document.querySelector('#app button');
btnElement.setAttribute('onclick', 'newBox()');

var newBox = function () {
    var boxElement = document.createElement('div');
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#f00';
    boxElement.setAttribute('onmouseover', 'style.backgroundColor=newColor()');

    var containerApp = document.querySelector('#app');
    containerApp.appendChild(boxElement);

}

var newColor = function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var containerLista = document.querySelector('#lista');
var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('#lista input');
inputElement.setAttribute('placeholder', 'Digite um nome');
var btnLista = document.querySelector('#lista button');
btnLista.setAttribute('onclick', 'adicionar()');

var names = [
    'Diego',
    'Gabriel',
    'Lucas'
]

function nameList() {
listElement.innerHTML = '';    
    for (name of names) {
        var listItem = document.createElement('li');
        var listText = document.createTextNode(name);
        listItem.appendChild(listText);
        listElement.appendChild(listItem);
        containerLista.appendChild(listElement);

    }
}

nameList();

function adicionar(){
    var name = inputElement.value;
    names.push(name);
    inputElement.value = '';
    nameList();
}


//###

//listElement = document.querySelector('#app ul');
//inputElement = document.querySelector('#app input');
//buttonElement = document.querySelector('#app button');

//var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//[   
// 'Fazer café',
//'Estudar Javascript',
//'Acessar comunidade freecodecamp'
//];

//function renderTodos() {
//   listElement.innerHTML = '';
//  for (todo of todos) {
//     var todoElement = document.createElement('li');
//    var todoText = document.createTextNode(todo);
//   var linkElement = document.createElement('a');
//  linkElement.setAttribute('href', '#');
// var pos = todos.indexOf(todo);
//linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
//var linkText = document.createTextNode('Excluir');

//linkElement.appendChild(linkText);

//todoElement.appendChild(todoText);
//todoElement.appendChild(linkElement);
//listElement.appendChild(todoElement);
//}
//}

//renderTodos();

//function addTodo() {
//   var todoText = inputElement.value;
//  todos.push(todoText);
// inputElement.value = '';
//renderTodos();
//saveToStorage();
//}

//buttonElement.onclick = addTodo;

//function deleteTodo(pos){
//   todos.splice(pos, 1);
//  renderTodos();
//  saveToStorage();
//}

//function saveToStorage(){
//localStorage.setItem('list_todos', JSON.stringify(todos));
//}