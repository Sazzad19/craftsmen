const axios = require('axios')

async function callApi(){
    try{
        let urlObject = JSON.parse('{"accessMethod": "GET", "protocol": "https", "domain": "todn22mvx9.execute-api.ap-south-1.amazonaws.com", "path": "dev", "resource": "screeningForm"}')
        let url = urlObject.protocol+'://'+urlObject.domain+'/'+urlObject.path+'/'+ urlObject.resource + '?email=shakilahmedzx@gmail.com'
        let res = await axios[urlObject.accessMethod.toLowerCase()](url,
         {
       headers: {
           'Content-Type': 'application/json',
           "x-api-key": "JU9eKYSwUW6lVlvGKrUkF71P1aybSR9y73jZ00y0",
           "accesstoken": "Mk2hvNzCG7Ucidts-shakilahmedzx%40gmail.com-IIqigbj1fNj3gSpY"
       }
        }
        )
        console.log('res', res)
    }
    catch(e){
        console.log('errr', e);
    }

}

callApi()