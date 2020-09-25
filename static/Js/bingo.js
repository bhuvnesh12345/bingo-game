console.log("Connected!");
var button=document.querySelector("button");
var input=document.querySelectorAll("input");
var th=document.querySelectorAll("th");
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;
var zp;
var button2=document.querySelectorAll("button")[1];



button.addEventListener("click",function(){

for(var io=0; io<input.length; io++)
{
	input[io].textContent=input[io].value;
}
});





  
 for(var jo=0; jo<input.length;jo++)
      {
      	console.log("checking");
        input[jo].addEventListener("click", function() {
        	
        if(this.textContent!=="")
        	{

	         this.style.background="green";


	
 a=input[0].style.background;
 b=input[1].style.background;
 c=input[2].style.background;
 d=input[3].style.background;
 e=input[4].style.background;
 f=input[5].style.background;
 g=input[6].style.background;
 h=input[7].style.background;
 i=input[8].style.background;
 j=input[9].style.background;
 k=input[10].style.background;
 l=input[11].style.background;
 m=input[12].style.background;
 n=input[13].style.background;
 o=input[14].style.background;
 p=input[15].style.background;
 q=input[16].style.background;
 r=input[17].style.background;
 s=input[18].style.background;
 t=input[19].style.background;
 u=input[20].style.background;
 v=input[21].style.background;
 w=input[22].style.background;
 x=input[23].style.background;
 y=input[24].style.background;

zp=0;
if((a==b)&&(b==c)&&(c==d)&&(d==e))
{
    if(a=="green")
    {
        
        zp+=1;
    }
}

if((f==g)&&(g==h)&&(h==i)&&(i==j))
{
    if(f=="green")
    {
        
        zp+=1;
    }
}

if((k==l)&&(l==m)&&(m==n)&&(n==o))
{
    if(k=="green")
    {
        
        zp+=1;
    }
}

if((p==q)&&(q==r)&&(r==s)&&(s==t))
{
    if(p=="green")
    {
        
        zp+=1;
    }
}

if((u==v)&&(v==w)&&(w==x)&&(x==y))
{
    if(u=="green")
    {
       
        zp+=1;
    }
}

if((a==f)&&(f==k)&&(k==p)&&(p==u))
{
    if(a=="green")
    {
      
        zp+=1;
    }
}
if((b==g)&&(g==l)&&(l==q)&&(q==v))
{
    if(b=="green")
    {
        
        zp+=1;
    }
}

if((c==h)&&(h==m)&&(m==r)&&(r==w))
{
    if(c=="green")
    {
        
        zp+=1;
    }
}

if((d==i)&&(i==n)&&(n==s)&&(s==x))
{
    if(d=="green")
    {
        
        zp+=1;
    }
}

if((e==j)&&(j==o)&&(o==t)&&(t==y))
{
    if(e=="green")
    {
        
        zp+=1;
    }
}

if((a==g)&&(g==m)&&(m==s)&&(s==y))
{
    if(a=="green")
    {
        
        zp+=1;
    }
}

if((e==i)&&(i==m)&&(m==q)&&(q==u))
{
    if(e=="green")
    {
        ;
        zp+=1;
    }
}

if(zp===1)
  {
	 th[0].style.background="yellow";
  }
  if(zp===2)
  {
	 th[1].style.background="yellow";
  }
  if(zp===3)
  {
	 th[2].style.background="yellow";
  }
  if(zp===4)
  {
	 th[3].style.background="yellow";
  }
  if(zp===5)
  {
	 th[4].style.background="yellow";
  }



}

       });
     }



button2.addEventListener("click",function(){
	for(var tr=0; tr<input.length;tr++)
	{
		input[tr].textContent="";
		input[tr].style.background="";
		input[tr].value="";
		a=undefined;
		b=undefined;
		c=undefined;
		d=undefined;
		e=undefined;
		f=undefined;
		g=undefined;
		h=undefined;
		i=undefined;
		j=undefined;
		k=undefined;
		l=undefined;
		m=undefined;
		n=undefined;
		o=undefined;
		p=undefined;
		q=undefined;
		r=undefined;
		s=undefined;
		t=undefined;
		u=undefined;
		v=undefined;
		w=undefined;
		x=undefined;
		y=undefined;
		
	}
	for( var rt=0; rt<th.length;rt++)
	{
		th[rt].style.background="";
	}
});
