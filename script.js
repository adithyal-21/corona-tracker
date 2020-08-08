$(document).ready(function(){
            
            var url="https://api.covid19india.org/data.json";

    $.getJSON(url,function(data)
    {
        var total_confirm=data.statewise[0].confirmed+"(⇧"+data.statewise[0].deltaconfirmed+")";
        var total_active=data.statewise[0].active;
        var  total_recovered=data.statewise[0].recovered+"(⇧"+data.statewise[0].deltarecovered+")";
        var total_deaths=data.statewise[0].deaths+"(⇧"+data.statewise[0].deltadeaths+")";;
         console.log(data.statewise);
       

        $("#co").append(total_confirm);
        $("#ac").append(total_active);
        $("#re").append(total_recovered);
        $("#de").append(total_deaths);

        var state=[];
        
        $.each(data.statewise,function(id,obj)
        {
            state.push(obj.state);
            
            var table=document.getElementById('tab');
           
           
            for(var i=1;i<=38;i++)
            {
            
                var row=table.insertRow();
            
            var cel1=row.insertCell();
            var cel2=row.insertCell();
            var cel3=row.insertCell();
            var cel4=row.insertCell();
            var cel5=row.insertCell();
            var cel6=row.insertCell();
     
         cel1.className="one";
         cel2.className="two";
         cel3.className="three";
         cel4.className="four";
         cel5.className="five";
         cel6.className="six";

            cel1.innerHTML=data.statewise[i].state;
            cel2.innerHTML=data.statewise[i].confirmed+" (⇧"+data.statewise[i].deltaconfirmed+")";
            cel3.innerHTML=data.statewise[i].active;
            cel4.innerHTML=data.statewise[i].recovered+" (⇧"+data.statewise[i].deltarecovered+")";
            cel5.innerHTML=data.statewise[i].deaths+" (⇧"+data.statewise[i].deltadeaths+")";
            cel6.innerHTML=data.statewise[i].lastupdatedtime;
           
            }
           
        })
       

      
    })
})
function refresh()
{
location.reload();
}