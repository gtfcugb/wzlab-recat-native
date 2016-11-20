//export const newsListGet = () => ({ type: "NEWS_LIST_GET" })
import fetch        from 'isomorphic-fetch'
import NewsServ     from 'src/Serv/News/Agent';

function newsListRequest(){
    return {
        type: "NEWS_LIST_REQUEST"
    };
}

function newsListReceive(tid,json){
    return {
        type: "NEWS_LIST_RECEIVE",
        json: json,
        tid : tid
    };
}

function newsTabListReceive(json){
    return {
        type: "NEWS_TABLIST_RECEIVE",
        json: json
    };
}

export function newsListGet(tid){
    return async function(dispatch){
        var json    =   await NewsServ.newsListGet(tid);

        return dispatch(newsListReceive(tid,json));
    }
}

export function newsTabListGet(){
    return async function(dispatch){
        var json    =   await NewsServ.newsTabListGet();

        return dispatch(newsTabListReceive(json));
    }
}

export function newsContentGet(newsId){
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

