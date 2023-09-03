const http=require("http")

try{
const server=http.createServer((req,res)=>{

if(req.url==='/')
{   
    res.write("This is homepage")
    res.end()
    
}
else if(req.url==='/about')
{
    res.write("I am learning http:")
    res.end()
    
}
else{
res.write('<p>Oops! Something went wrong</p>')
res.end()
}
})

server.listen(4000)
}
catch(error)
{
    console.log("Erro");
}

