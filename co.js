var btn=document.getElementById("get");
var table=document.getElementById('tab');
window.onload=function update()
{
    fetch('https://api.covid19india.org/data.json')
    .then((response)=>
    {
  return(response.json());
    }).then((data)=>{
     
      console.log(data);
   data.statewise.forEach((element) => {
    
    var table=document.getElementById('tab');
    var row=table.insertRow()
    var cel1=row.insertCell()
    var cel2=row.insertCell()
    var cel3=row.insertCell()
    cel1.innerHTML=element.state
    cel2.innerHTML=element.deaths
    cel3.innerHTML=element.confirmed
    
   });
  });
       
    }
  
