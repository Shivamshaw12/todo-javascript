
let a=document.getElementById('add-btn');
a.addEventListener("click",getAndupdate);
    


function getAndupdate()
{
    let title=document.getElementById('title').value;
    let task=document.getElementById('newTask').value;
    if (localStorage.getItem('itemJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([title,task]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr=localStorage.getItem('itemJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title,task]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }

    update(); 
}
function update() 
{
    


    let tableBody=document.getElementById('tableBody');
    let str="";
    itemJsonArray.forEach((element,index )=> {
        str = str +`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick="remove(${index})">Delete</button></td>
        </tr>
        `
    });

    tableBody.innerHTML=str;
    
}

update();

function remove(item)
{
    console.log("delete",item)
    itemJsonArrayStr=localStorage.getItem('itemJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);

    itemJsonArray.splice(item,1);


    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));

    update();
}