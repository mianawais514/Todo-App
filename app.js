function a()
{
    var b=document.getElementById('one');
    var c=document.createElement('li');
    var d=document.createTextNode(input.value);
    c.appendChild(d)
    b.appendChild(c);
    
    var e=document.createElement('button');
    e.setAttribute("onclick","dlete(this)");
    e.setAttribute("id","dlete");
    var d=document.createTextNode("Dlete");
    e.appendChild(d);
    c.appendChild(e);

    var x=document.createElement('button');
    x.setAttribute("onclick","edit(this)");
    x.setAttribute("id","edit");
    var y=document.createTextNode("Edit");
    x.appendChild(y);
    c.appendChild(x);
    document.getElementById("input").value="";
}
function dlete(x)
{ 
     
  x.parentNode.remove();
}
function edit(x)
{
    var a=x.parentNode.firstChild.nodeValue;
    var b=prompt("Enter Name",a);
    x.parentNode.firstChild.nodeValue=b;
}