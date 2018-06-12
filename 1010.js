
//tworzenie planszy
var dif=[100];
let diw=document.getElementById('d');
let bry=document.createElement('br');
for(var i=0;i<100;i++){
dif[i]=document.createElement('div');
dif[i].style.backgroundColor="grey";
dif[i].style.width="50px";
dif[i].style.height="50px";
dif[i].style.float="left";
dif[i].style.border="1px solid black";
dif[i].id=i;
diw.appendChild(dif[i]);
}

//budowanie difow do wyswietlania nastepnego klocka oraz do wyslwietlania aktualnego wyniku
let dlicz=document.createElement('div');
let alicz=document.createElement('a');
alicz.style.background="yellow";
alicz.id="alicz";
alicz.innerHTML=0;
dlicz.id="dlicz";
dlicz.style.width="55px";
dlicz.style.float="right";
dlicz.style.backgroundColor="green";
diw.appendChild(dlicz);
let difm=[50];
for(var i=0;i<49;i++){
difm[i]=document.createElement('div');
difm[i].style.backgroundColor="lightgrey";
difm[i].style.width="5px";
difm[i].style.height="5px";
difm[i].style.float="left";
difm[i].style.border="1px solid black";
difm[i].id=i;
dlicz.appendChild(difm[i]);
}
dlicz.appendChild(alicz);

//losowe wybieranie liczby -> figury
function randd(){
return Math.floor(Math.random()*5);
}
let fig=[];

//w tablicy fig mamy rozmiar w 4 kierunkach od srodka kolejno w lewo, w prawo, w gore, w dol
function los(){
let figura=randd();
switch(figura){
case 0:
fig[0]=1;
fig[1]=1;
fig[2]=1;
fig[3]=2;
break;
case 1:
fig[0]=3;
fig[1]=2;
fig[2]=0;
fig[3]=0;
break;
case 2:
fig[0]=0;
fig[1]=0;
fig[2]=3;
fig[3]=2;
break;
case 3:
fig[0]=1;
fig[1]=1;
fig[2]=0;
fig[3]=0;
break;
case 4:
fig[0]=0;
fig[1]=0;
fig[2]=1;
fig[3]=1;
break;
case 5:
fig[0]=1;
fig[1]=0;
fig[2]=1;
fig[3]=0;
break;
} 
}







//funkcja sprawdzajace, czy bloki sa wolne czyli czy sie zmieszcza
function funspr(e){
let id=parseInt(e.target.id);
var x;
if(dif[id].style.backgroundColor!="blue"){
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		for(var j=0;j<=x;j++){
			if(i==0) if(id-j>=0) {if(dif[id-j].style.backgroundColor=="blue") return 1;} else return 1;
			if(i==1) if(id+j<100) {if(dif[id+j].style.backgroundColor=="blue") return 1;}	else return 1;
			if(i==2) if(id+10*j<100) {if(dif[id+10*j].style.backgroundColor=="blue") return 1;}	else return 1;
			if(i==3) if(id-10*j>-1) {if(dif[id-10*j].style.backgroundColor=="blue") return 1;}else return 1;
		}
	}
	return 0;
}
else return 1;
}

function funkspr(e){
let id=parseInt(e.id);
var x;
if(dif[id].style.backgroundColor!="blue"){
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		for(var j=0;j<=x;j++){
			if(i==0) if(id-j>=0) {if(dif[id-j].style.backgroundColor=="blue") return 1;} else return 1;
			if(i==1) if(id+j<100) {if(dif[id+j].style.backgroundColor=="blue") return 1;}	else return 1;
			if(i==2) if(id+10*j<100) {if(dif[id+10*j].style.backgroundColor=="blue") return 1;}	else return 1;
			if(i==3) if(id-10*j>-1) {if(dif[id-10*j].style.backgroundColor=="blue") return 1;}else return 1;
		}
	}
	return 0;
}
else return 1;
}



//funkcje podswietlajace po najechaniu
//zmienia kolor
function funk(e){
let spr=funkspr(e);
if(!spr){
let id=parseInt(e.id);
var x;
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		dif[id].style.backgroundColor="lightgreen";
		for(var j=0;j<=x;j++){
			if(i==0&&id-j>=0) dif[id-j].style.backgroundColor="lightgreen";
			if(i==1&&id+j<100) dif[id+j].style.backgroundColor="lightgreen";
			if(i==2&&id+10*j<100) dif[id+10*j].style.backgroundColor="lightgreen";
			if(i==3&&id-10*j>-1) dif[id-10*j].style.backgroundColor="lightgreen";
		}
	}
}
}
//przywraca kolor
function funkk(e){
let spr=funkspr(e);
if(!spr){
let id=parseInt(e.id);
var x;
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		dif[id].style.backgroundColor="grey";
		for(var j=0;j<=x;j++){
			if(i==0&&id-j>=0) dif[id-j].style.backgroundColor="grey";
			if(i==1&&id+j<100) dif[id+j].style.backgroundColor="grey";
			if(i==2&&id+10*j<100) dif[id+10*j].style.backgroundColor="grey";
			if(i==3&&id-10*j>-1) dif[id-10*j].style.backgroundColor="grey";
		}
	}
}
}

for(let x=0;x<100;x++){
dif[x].onmouseover=()=>{
funk(dif[x]);
}
dif[x].onmouseleave=()=>{
funkk(dif[x]);
}
}



//funkcja do wyswietlania nastepnej figury
function funmala(){
for(let i=0;i<49;i++)
difm[i].style.backgroundColor="lightblue";
let id=24;
var x;
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		difm[id].style.backgroundColor="blue";
		for(var j=0;j<=x;j++){	
			if(i==0) difm[id-j].style.backgroundColor="blue";
			if(i==1) difm[id+j].style.backgroundColor="blue";
			if(i==2) difm[id+(7*j)].style.backgroundColor="blue";
			if(i==3) difm[id-(7*j)].style.backgroundColor="blue";
		}
	}
}



//glowna funkcja wywolywana przez klikniecie
let licznik=0;
let bul=[100];
function fun(e){
if((e.target.id<0||e.target.id>99)&&e.target.id!=""){
console.log("Poza plansza");
return 1;
}
else{
let spr=funspr(e);
if(!spr){
let id=parseInt(e.target.id);
var x;
	for(let i=0;i<4;i++)
	{
		x=fig[i];
		dif[id].style.backgroundColor="blue";
		for(var j=0;j<=x;j++){
			if(i==0) {dif[id-j].style.backgroundColor="blue"; bul[id-j]=1}
			if(i==1) {dif[id+j].style.backgroundColor="blue"; bul[id+j]=1}
			if(i==2) {dif[id+10*j].style.backgroundColor="blue";bul[id+10*j]=1}
			if(i==3) {dif[id-10*j].style.backgroundColor="blue"; bul[id-10*j]=1}
		}
	}
	licznik++;
	alicz.innerHTML=licznik;
	let d=0,s=0;
	for(let h=0; h<10; h++){
		d=0;
		for(let g=0; g<10; g++){
			d+=bul[10*h+g];
		}
		if(d==10)(console.log("Poziomo 10"));
	}
	
	for(let h=0; h<10; h++){
		d=0;
		for(let g=0; g<10; g++){
			d+=bul[h+10*g];
		}
		if(d==10)(console.log("Pionowo 10"));
	}
	los();
    funmala();
}
else{
console.log("Nie miesci sie");
}
}
}



//wywolywania funkcji
los();
funmala();
document.addEventListener('click',fun);
document.addEventListener('onmouseover',funk);
