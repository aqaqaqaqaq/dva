const io = require('console-read-write');

async function main() {
    let a=1,b=10000,summax=0,t;
    for(let i =a;i<=b;i++)
    {
        let sum=0;
        for(let j=1;j<=i;j++)
        {
            let c=i%j;
            if(c==0)
            {
                sum+=j;
            }
        }
        if(sum>summax)
        {
            summax=sum;
            t=i;
        }
    }
    io.write(t);
}

main();