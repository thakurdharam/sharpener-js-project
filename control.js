for(let ob in localStorage){
    if(ob.startsWith("expense")){
        addNewLineElement(JSON.parse(localStorage[ob]));
    }
}

function addExp(){
    var expense = document.getElementById('expense').value;
    var dsc = document.getElementById('description').value;
    var catogery = document.getElementById('category').value;
    if (expense.length > 0 && dsc.length > 0 && catogery.length > 0) {
        var object = {
          expense : expense,
          dsc : dsc,
          catogery : catogery 
    
        };
        localStorage.setItem("expense"+ expense+" "+dsc+" "+catogery, JSON.stringify(object));
        addNewLineElement(object);
      }
}


function addNewLineElement(object) {
    var ul = document.getElementById("listOfExpense");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(object.expense + " " + object.dsc + " " + object.catogery)); 
  
    var a1 = document.createElement("input");
    a1.id = "yash";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", function () {
      var delete_value = Object.values(object);
      localStorage.removeItem("expense"+object.expense+" "+object.dsc+" "+object.catogery);   
      document.getElementById("expense").value = delete_value[0];
      document.getElementById("description").value = delete_value[1];
      document.getElementById("category").value = delete_value[2];
      li.remove();
    });

    a1.className = "edit";
    a1.style.border = "2px solid green";
    a1.style.backgroundColor = "green";
    a1.style.color = "white";
    a1.style.textDecoration = "none";
    li.appendChild(a1);
    
    
    
    
    var a = document.createElement("input");
    a.type = "button";
    a.value = "delete";
    a.addEventListener("click", function () {
      localStorage.removeItem("expense"+object.expense+" "+object.dsc+" "+object.catogery);   
      li.remove();
    });
    a.className = "delete";
    a.style.border = "2px solid red";
    a.style.backgroundColor = "red";
    a.style.color = "white";
    a.style.textDecoration = "none";
    li.appendChild(a);
    console.log(li);
    ul.appendChild(li);
  }



