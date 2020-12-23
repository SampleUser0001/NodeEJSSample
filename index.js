const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

// テンプレートファイルの読み込み
const index_page = fs.readFileSync('./index.ejs','utf8');

function getFromClient(request, response){
    let hogelist = ['hoge','piyo','fuga'];
    let content = ejs.render(
        index_page, 
        {
            title: "Main Page",
            content: "これはメインとなるページです。<br>This is Main Page!!",
            foot: "Sample page",
            listitem: hogelist
        });
    
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(content);
    response.end();
}

// サーバ生成
let server = http.createServer(getFromClient).listen(8080);
console.log('Server start.');