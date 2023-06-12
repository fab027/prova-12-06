function nprimo(p)
{
    
    if (p < 2) {
    return false;
 } 
    var n = parseInt(Math.sqrt(p))
    for (var k = 2; k<= n; k++)
   {
    if (p % k === 0)
    {
        return false;
    }
   }
 return true;  
}

for (var k = 1; k <= 1000; k++){

    if (nprimo(k)) {

        console.log(k);
    }
}
