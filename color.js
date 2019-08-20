var arr=[]
for(var i=0;i<6;i++)
{
   var store=a()
   arr.push(store)
}
var color=arr
var colorpicker=document.querySelectorAll(".color")
var pickcolor=pickColor()
var colorDisplay=document.querySelector("#colorDisplay")
var message=document.querySelector("#message")
var reset=document.querySelector("#reset")
var easy=document.querySelector("#easy")
var hard=document.querySelector("#hard")
var h1=document.querySelector("h1")
var last=document.querySelectorAll(".co")
var restart=document.querySelector("#restart")
var on=false
var point=0
var firstTime=true
var tops=0
var lead=true
 hard.classList.add("default")

restart.addEventListener("click",function(){
	  point=0
	  message.style.color="black"
	  message.textContent="POINTS:"+String(point)+"/"+"10"
	  reset.textContent="New color"
	   reset.classList.remove("none")
		 easy.classList.remove("none")
		 	firstTime=true
	on=false
    hard.classList.add("default")
    easy.classList.remove("default")
	for(var i=0;i<colorpicker.length;i++)
	{
		colorpicker[i].classList.add("none")
	}
	pickcolor=pickColor()
	colorDisplay.textContent=pickcolor
	h1.style.backgroundColor="#1e1f1e"
	message.style.color="white"
	tops=0
	restart.classList.add("none")
	colorDisplay.textContent="CLICK ON NEW COLOR"
})
easy.addEventListener("click",function(){
	hard.classList.remove("default")
	easy.classList.add("default")
		for(var i=0;i<colorpicker.length;i++)
	{
		colorpicker[i].classList.remove("none")
	}
	lead=true
	on=true
	firstTime=true
  for(var i=0;i<3;i++)
   {
   color[i]=a()
   }
   pickcolor=pickColor3()
   for(var i=0;i<3;i++)
   {
   	colorpicker[i].style.backgroundColor=color[i]
   }
   colorDisplay.textContent=pickcolor
   h1.style.backgroundColor="#1e1f1e"
  for(var i=0;i<3;i++)
  {
   last[i].classList.add("hidden")
  }
  	message.style.color="white"
  	colorDisplay.classList.remove("none")

})
reset.addEventListener("click",function(){

  for(var i=0;i<3;i++)
  {
   last[i].classList.remove("hidden")
  }

		for(var i=0;i<colorpicker.length;i++)
	{
		colorpicker[i].classList.remove("none")
	}
	lead=true
	firstTime=true
	on=false
    hard.classList.add("default")
    easy.classList.remove("default")
	for(var i=0;i<colorpicker.length;i++)
	{
		color[i]=a()
		colorpicker[i].style.backgroundColor=color[i]
	}
	pickcolor=pickColor()
	colorDisplay.textContent=pickcolor
	h1.style.backgroundColor="#1e1f1e"
	message.style.color="white"
})
colorDisplay.textContent=pickcolor
for(var i=0;i<colorpicker.length;i++)
{
	colorpicker[i].style.backgroundColor=color[i]
	colorpicker[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		reset.classList.add("none")
		easy.classList.add("none")
		if(clickedcolor===pickcolor)
	    {
	      if(lead)
	      {
	      	tops++
	      }
	      console.log(tops)
	      lead=false
	      message.style.color="black"
	      if(firstTime)
	      {
	        point++
	      }
		    message.textContent="POINTS:"+String(point)+"/"+"10"
		    firstTime=false
		 if(on)
		 { 
		  for(var i=0;i<3;i++)
		  {
		  	colorpicker[i].style.backgroundColor=pickcolor
		  	h1.style.backgroundColor=pickcolor
		  }
		 }
		 else
		 {
		 	 for(var i=0;i<6;i++)
		     {
		  	  colorpicker[i].style.backgroundColor=pickcolor
		  	  h1.style.backgroundColor=pickcolor
		     }
		 }
		 reset.classList.remove("none")
		 easy.classList.remove("none")
         reset.textContent="Tryagain!"
         if(tops==10)
         {
         	reset.classList.add("none")
		    easy.classList.add("none")
		    restart.classList.remove("none")
		    message.textContent="TOTAL"+point+"/10"
         }		  
	    }
	    else
	    {
	    	this.style.backgroundColor= "rgb(28, 29, 31)"
	    	message.style.color="black"

	    	message.textContent="TRY-AGAIN"
	    	firstTime=false
	    }
	})
}
function pickColor()
{
	var random=Math.floor(Math.random()*(color.length))
	return color[random]
}
function pickColor3()
{
	var random=Math.floor(Math.random()*(3))
	return color[random]
}
function a()
{
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb(" +r+", "+g+", "+b+")";        
}

