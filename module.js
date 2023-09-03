const os=require('os')
console.log(os.uptime())

const osInfo={
    
    os:os.version(),
    release:os.release(),
    hostname:os.hostname(),
    totalMemory:`${(os.totalmem()/1000000000).toFixed(2)} Gb`,
    freeMemory:`${(os.freemem()/1000000000).toFixed(2)} Gb`
}

console.log(osInfo);

