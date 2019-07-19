function getCMDB(url='/api/c/self-service-api/snc/cmdb/?bk_app_secret=39cdcc5b-faf7-47d5-a264-aba5fdedf208&bk_app_code=wuzhiwei-test01&bk_token=VsMNrjr-NxIdias5_5sRDk_i9sokEwXLYEYyHyyQDF0') {
    console.log(`开始请求`);
    $.get(url, function(data){
        console.log("Data Loaded: " + data);
    });
}
