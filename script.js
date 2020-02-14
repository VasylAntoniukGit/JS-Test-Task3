/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    
var index = document.getElementById('tab');

function addR(){
    
    var regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    
    if(regular.test(String(email).toLowerCase()))
    {
        
        var tab = document.getElementById('tab');
        var row = tab.insertRow(tab.lenght);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        col1.innerHTML = firstname;
        col2.innerHTML = lastname;
        col3.innerHTML = email;
        var date = new Date();
        //alert(date);
        selectedRow();
    
    }else alert("Неправильна електронна адреса");
       
}

function selectedRow(){
    
    
    var tab = document.getElementById('tab');
    for( var i = 1; i < tab.rows.length; i++)
    {
        tab.rows[i].onclick = function()
        {
          index = this.rowIndex;
          document.getElementById('firstname').value = this.cells[0].innerHTML;
          document.getElementById('lastname').value = this.cells[1].innerHTML;
          document.getElementById('email').value = this.cells[2].innerHTML;
        };
    }
    
    
}

function editR(){

    var tab = document.getElementById('tab');
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    tab.rows[index].cells[0].innerHTML = firstname;
    tab.rows[index].cells[1].innerHTML = lastname;
    tab.rows[index].cells[2].innerHTML = email;
    
    
}

function removeR(){
    
    var tab = document.getElementById('tab');
    tab.deleteRow(index);
    
}