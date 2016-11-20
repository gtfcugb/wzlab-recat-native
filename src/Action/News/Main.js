//export const newsListGet = () => ({ type: "NEWS_LIST_GET" })
import fetch        from 'isomorphic-fetch'
import NewsServ     from 'src/Serv/News/Agent';

function newsListRequest(){
    debugLog("newsListRequest");
    return {
        type: "NEWS_LIST_REQUEST"
    };
}

function newsListReceive(tid,json){
    debugLog("newsListReceive",json);
    return {
        type: "NEWS_LIST_RECEIVE",
        json: json,
        tid : tid
    };
}

function newsTabListReceive(json){
    debugLog("newsTabListReceive",json);
    return {
        type: "NEWS_TABLIST_RECEIVE",
        json: json
    };
}

export function newsListGet(tid){
    return function(dispatch){
        dispatch(newsListRequest());

        return fetch('https://api-mcms.iwangzhe.com/base/news/list?pid='+tid)
          .then(response => response.json())
          .then(json =>
                dispatch(newsListReceive(tid,json))
          );
    }
}

export function newsTabListGet(){
    return function(dispatch){

        return fetch('https://api-mcms.iwangzhe.com/category/detail')
          .then(response => response.json())
          .then(json =>
                dispatch(newsTabListReceive(json))
          );
    }
}

export function newsContentGet(newsId){
            debugLog("NewsServ",NewsServ);

    return async function(dispatch){
        var json    =   await NewsServ.newsContentGet(newsId);

        return dispatch({
            type: "NEWS_CONTENT_RECEIVE",
            json: json
        });
    }
}

export function newsContentBack(){
    return {
        type: "NEWS_CONTENT_BACK",
    };
}

