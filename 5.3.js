const io = require('console-read-write');

async function main()
{
    let a=0,b=5;
    let A=[[24,1,19,4,17],[5,2,22,20,16],[18,23,8,9,7],[12,14,3,21,15],[6,25,13,11,10]];
    io.write(A);
    io.write(magic(A,a,b));
}
function magic(A,a,b)
{
    let sum=0;
    for(let i=a;i<b;i++)
    {
        sum=sum+A[0][i]
    }
    for(let i =a;i<b;i++)
    {
        let tempsum=0;
        for(let j =a;j<b;j++)
        {
            tempsum=tempsum+A[i][j];
        }
        if(tempsum!=sum)
            return false;
    }
    for(let j =a;j<b;j++)
    {
        let tempsum=0;
        for(let i =a;i<b;i++)
        {
            tempsum=tempsum+A[i][j];
        }
        if(tempsum!=sum)
            return false;
    }
    let tempsum=0;
    for(let i =a;i<b;i++)
    {
        tempsum=tempsum+A[i][i];
    }
    if(tempsum!=sum)
        return false;
    tempsum=0;
    for(let i =a;i<b;i++)
    {
        tempsum=tempsum+A[i][b-1-i];
    }
    if(tempsum!=sum)
        return false;
    return true;
}
main();