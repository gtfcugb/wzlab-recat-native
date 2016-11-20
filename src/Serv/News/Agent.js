'use strict';
import WZServBase from 'src/Serv/Base';

export default class NewsServ extends WZServBase{
    /**
     *@detail 获取新闻列表
     */
    static async  newsListGet(tid){
        try {
            var url             =    API_MCMS_HOST+'/base/news/list?pid='+tid;
            let response        =    await fetch(url);
            let responseJson    =    await response.json();
            return responseJson;
        } 
        catch(error) {
          
        }
        return null;
    }

    /**
     *@detail 新闻页导航栏列表
     */
    static async  newsTabListGet(){
        try {
            var url             =    API_MCMS_HOST+'/category/detail';
            let response        =    await fetch(url);
            let responseJson    =    await response.json();
            return responseJson;
        } 
        catch(error) {
          
        }
        return null;
    }

    /**
     *@detail 获取新闻正文
     */
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
            var url             =   API_MCMS_HOST+'/base/news/detail?newsId='+newsId;
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
