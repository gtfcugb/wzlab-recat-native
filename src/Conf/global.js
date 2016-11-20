if(global.ENV_MODE  == "DEV"){
    global.WEB_HOST         =   "https://dev.pydp888.com"
    global.API_WEB_HOST     =   "https://api-dev.pydp888.com"
    global.WWW_WEB_HOST     =   "https://www-dev.pydp888.com"
    global.API_MCMS_HOST    =   "https://api-mcms-dev.pydp888.com"
    global.BBS_WEB_HOST     =   "https://bbs-dev.pydp888.com"
}
else if(global.ENV_MODE  == "TEST"){
    global.WEB_HOST         =   "https://test.iwangzhe.com"
    global.API_WEB_HOST     =   "https://api-test.iwangzhe.com"
    global.WWW_WEB_HOST     =   "https://www-test.iwangzhe.com"
    global.API_MCMS_HOST    =   "https://api-mcms.iwangzhe.com"
    global.BBS_WEB_HOST     =   "https://bbs-test.iwangzhe.com"
}
else if(global.ENV_MODE  == "PRODUCT"){
    global.WEB_HOST         =   "https://iwangzhe.com"
    global.API_WEB_HOST     =   "https://api.iwangzhe.com"
    global.WWW_WEB_HOST     =   "https://www.iwangzhe.com"
    global.API_MCMS_HOST    =   "https://api-mcms.iwangzhe.com"
    global.BBS_WEB_HOST     =   "https://bbs.iwangzhe.com"
}
else{
    //fatal error
}