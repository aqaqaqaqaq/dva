const io = require('console-read-write');

async function main()
{
    let n,a=[];
    io.write('Введите число n');
    n = parseFloat(await io.read());
    for(let i=0;i<n;i++)
    {
        a[i]=Math.random() *100-(Math.random() *100);

    }
    io.write(a);
    for(let i=0;i<n;i++)
    {
        let sumabs=0;
        for(let j=0;j<=i;j++)
        {
            sumabs+=Math.abs(a[j]);
        }
        io.write(sumabs);
    }
}

main();