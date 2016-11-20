'use strict';

const initialState = 
{
    tabs:[
        
    ],
    help:{status:0,state:0,curNews:{html:""}}
}

function newsReduce(state=initialState,action){
    switch (action.type) {
        case "NEWS_TABLIST_RECEIVE":
            debugLog("newDataSource1",action.json.news);
            var newTabs   =   action.json.category.map(
                function(item){ 
                   return {name:item.categoryName , tid:item.paramId,dataSource:[] } ;
                }
            );
            
            return {
                ...state,
                tabs:newTabs.slice(0,5)
            }
        case "NEWS_LIST_REQUEST":
            return state;
        case "NEWS_LIST_RECEIVE":
            debugLog("newDataSource1",action.json.news);
            var newDataSource   =   action.json.news.map(
                function(item){ 
                    var img="https://imgcdn-mcms-prd.pydp888.com/mcms/20161028/20161028114422_621.jpg@!w318";

                    if(item.img && item.img!=""){
                        img= item.img.replace("http://imgcdn.mcms","https://imgcdn-mcms-prd");
                    }
                   return {title:item.title , img:img,newsId:item.id } ;
                }
            );
            debugLog("newDataSource",newDataSource);
            var newTabs         =   state.tabs.map(item =>
                item.tid === action.tid ?
                  Object.assign({}, item, { 
                    ...item,
                    dataSource:newDataSource
                }) :
                item
              );
            return {
                ...state,
                tabs:newTabs
        };
        case "NEWS_CONTENT_RECEIVE":
            debugLog("NEWS_CONTENT_RECEIVE",action);
            return {
                ...state,
                help:{
                    ...state.help,
                    state:1,
                    curNews:{
                        html:action.json.content
                    }
                }
            }

        case "NEWS_CONTENT_BACK":
            return {
                ...state,
                help:{
                    ...state.help,
                    state:0,
                    curNews:{
                        html:""
                    }
                }
            }
        default:
            return state
  }
}

module.exports = newsReduce;
