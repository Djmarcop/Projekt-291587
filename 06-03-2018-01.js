function sr(z,y,x)
{
var p=(z+y+x)/2;
if((x+y)>z)
	if((x+z)>y)
		if((y+z)>x)
			return Math.sqrt(p*(p-z)*(p-x)*(p-y));
		else return "HWDP POLICJI"
}


function pr(x){
	
	if((x%4==0)&&(x%100!=0)||(x%400==0))
				console.log("Tag");
}

function los()
{
	var y=10%(Math.floor(Math.random(1,10)*10));
var z=0;
while(!z)
{
x=prompt("Podaj liczbe");
if(x==y)
{
	console.log("trafiona");
	z=1;
	}
else 	
	console.log("Probuj");
}	
}