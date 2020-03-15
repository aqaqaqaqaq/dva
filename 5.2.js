const io = require('console-read-write');

async function main()
{
    let a=0,b=8,x=[];
    io.write('Введите 8 чисел x');
    for (let i = a;i<b;i++)
    {
       x[i] = parseFloat(await io.read());
    }
    let A=[];
    for(let i =a;i<b;i++)
    {
        A[i]=[];
        for(let j =a;j<b;j++)
        {
            A[i][j]=Math.pow(x[j],i+1);
        }
    }
    io.write(A);
}

main();