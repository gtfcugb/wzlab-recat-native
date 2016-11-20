'use strict';
import WZServBase from 'src/Serv/Base';

export default class NewsServ extends WZServBase{
   
    static async  newsContentGet(newsId){

        /*
        try {
            var url             =   'https://api-dev.pydp888.com/server/sleep/';
            let response        =   await fetch(url);
            let responseJson    =   await response.json();
            return responseJson;
        } 
        catch(error) {
          
        }*/
        try {
            var url             =   'https://api-mcms.iwangzhe.com/base/news/detail?newsId='+newsId;
            debugLog("newsContentGet-serv",url);
            let response      = await fetch(url);
            let responseJson  = await response.json();
            return responseJson;
        } 
        catch(error) {
          
        }
        return null;
    }
}
