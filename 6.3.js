const io = require('console-read-write');

async function main()
{
    io.write('введите год');
    let n;
    n=await io.read();
    let d=new Date(n,0),currentt,lastmounth;
    lastmounth=d.getMonth();
    while( d.getFullYear()<Number(n)+Number(1))
    {
        d.setDate((d.getDate()+1));
        if(d.getMonth()>lastmounth)
        {
            io.write(currentt.getDate());
            lastmounth++;
        }
        if(d.getDay()==4)
        {
            currentt=new Date(d);
        }
    }
    io.write(currentt);
}

main();