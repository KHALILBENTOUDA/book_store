const http=require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('context-type','text-html')


    // if(req.url==='/'){
    //     res.statusCode=200;
    //     res.write('wolcome in home')
    // }else if(req.url==='/contact'){
    //     res.statusCode=200;
    //     res.write('contact')
    // }else if(req.url==='/about'){
    //     res.statusCode=200;
    //     res.write('about')
    // }else{
    //     res.statusCode=404;
    //     res.write(`<p>404 page not fount </p>`)
    // }
    

    switch(req.url){
        case '/':
            res.statusCode=200;
            res.write('wolcome in home')
            break;

            case '/contact':
                res.statusCode=200;
                res.write('contact')
                break;
                
                case '/about':
                    res.statusCode=200;
                    res.write('about')
                    break;

                    default:
                        res.statusCode=404;
                        res.write(`<p>404 page not fount </p>`)
    }
    res.end()

})

server.listen(5000,()=>console.log('server is runing...'))



