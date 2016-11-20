global.rootRequire  =   function(path){
    return require(path);
}

global.debugLog      =   (...args)  =>{
    console.log("DEBUG:");
    console.log(...args);
}

global.warningLog     =   (...args) =>{
    console.warn("WARNING:");
    console.warn(...args);
}

global.noticeLog     =   (...args)  =>{
    console.log("NOTICE:");
    console.log(...args);
}

global.errorLog     =   (...args)   =>{
    console.error("ERROR:");
    console.error(...args);
}