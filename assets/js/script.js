// // 1
// let text = document.getElementById('text')

// function js_style(){
//     text.style.fontSize = 'large'
//     text.style.color = 'red'
//     text.style.backgroundColor = 'green'
//     text.style.border = 'solid black 2px'
//     alert(document.documentElement.clientHeight + 'px и ' + document.documentElement.clientWidth + 'px')
// }

// // 2
// fname = document.querySelector("input[name='fname']").value
// lname = document.querySelector("input[name='lname']").value

// let form = document.getElementById('form1')
// let par = document.createElement('p')
// let par2 = document.createElement('p')
// par.innerHTML = fname
// par2.innerHTML = lname

// form.append(par)
// form.append(par2)

// // 3
// function getAttributes(){
// let el = document.getElementById("w3r");

// let weer = document.createElement('p');
// weer.append('1) ' +el.type + '2) ' + el.hreflang + '3) ' + el.rel + '4) ' + el.target + '5) ' + el.href) 
// document.body.append(weer)
// }

// // 4
// function insert_Row()
// {
// var tablica=document.getElementById('sampleTable').insertRow(0);
// var dobav1 = tablica.insertCell(0);
// var dobav = tablica.insertCell(1);
// dobav1.innerHTML="Новая строка 1";
// dobav.innerHTML="новая строка 2";
// }

// // 5

// function changeContent()
// {
// rn = window.prompt("Input the Row number(0,1,2)", "0");
// cn = window.prompt("Input the Column number(0,1)","0");
// content = window.prompt("Input the Cell content");  
// var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
// x[parseInt(cn,10)].innerHTML=content;
// }

// // 6
// function createTable()
// {
// rn = window.prompt("Input number of rows", 1);
// cn = window.prompt("Input number of columns",1);
  
//  for(var r=0;r<parseInt(rn,10);r++)
//   {
//    var x=document.getElementById('myTable').insertRow(r);
//    for(var c=0;c<parseInt(cn,10);c++)  
//     {
//      var y=  x.insertCell(c);
//      y.innerHTML="Row-"+r+" Column-"+c; 
//     }
//    }
// }

// // 7

// function removecolor(){
// var x=document.getElementById("colorSelect");
// let p = document.createElement('p')
// p.innerHTML = `элемент ${x.options[x.selectedIndex].text} был удалён`
// document.body.append(p)
// x.remove(x.selectedIndex);
// }

// 8
// function getOptions()
// {
// var x=document.getElementById("mySelect");
// var txt1 = "items : ";
// var i;

// for (i=0;i<x.length;i++)
//   {
//     txt1 = txt1 + "\n" + x.options[i].text;
//   }
// alert(txt1);
// }

// 10
const getForm2 = document.querySelector('.form2');
const getTable2 = document.querySelector('.task2');


getForm2.submit.addEventListener('click', func2);
getTable2.addEventListener('click', func22);

function func22(event) {
    const newValue = prompt("Исправить " + event.target.innerHTML, '');
    event.target.innerHTML = newValue;
};

function func2(event) {
    event.preventDefault();

    const createTdFirst = document.createElement('td');
    createTdFirst.innerHTML = getForm2.firstname.value;

    const createTdLast = document.createElement('td');
    createTdLast.innerHTML = getForm2.lastname.value;

    const createTr = document.createElement('tr');
    createTr.appendChild(createTdFirst);
    createTr.appendChild(createTdLast);

    getTable2.appendChild(createTr);
};
