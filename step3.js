
const axios = require('axios')
let jsonOutput = JSON.parse("[\"aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQU\",\"b2xHcGxablNvLUw2akFBL3ZpZXdmb3JtP3VzcD1wcF91cmwmZW\",\"lwUUxTZS1nQUx1eFBKanJPVEZ2MnpCX0FSQVFBbEtGRHlYdTVS\",\"YWhtZWR6eCU0MGdtYWlsLmNvbS1JSXFpZ2JqMWZOajNnU3BZJm\",\"VudHJ5LjE5NTQwNTAzMDQ9c2hha2lsYWhtZWR6eEBnbWFpbC5j\",\"50cnkuMTAxMzkwOTE1PU1rMmh2TnpDRzdVY2lkdHMtc2hha2ls\",\"b20=\"]")
let urlArray =[]
for(let i=0; i<=5000; i++){
    jsonOutput=jsonOutput.sort(()=>Math.random() - .5)
urlArray.push(Buffer.from(jsonOutput.join(''), 'base64').toString('ascii'))
}

let validArray = urlArray.filter(url=> url.includes('https://docs.google.com/forms/d/e/1FA') && url.indexOf('https://docs.google.com/forms/d/e/1FA') == 0);
(async ()=>{
    for (let url of validArray){
        try{
            let res = await axios.get(url)
            console.log('res', res);
            console.log('url', url);
            return
        }
        catch(e){
            console.log('e',e);
        }
 }
})()
        

// correct url = https://docs.google.com/forms/d/e/1FAIpQLSe-gALuxPJjrOTFv2zB_ARAQAlKFDyXu5RolGplZnSo-L6jAA/closedform