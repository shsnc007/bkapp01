function getCMDB(url='/api/c/self-service-api/snc/cmdb/getcmdbinstancelist') {
    let params = {"params":{"condition":{"ciId":77,"condition":""},"pagination":{"currentPage":1,"pageSize":50}}}
    $.post(url, params,function(data){
        if (data.recordList) {
            console.log(data.recordList);
        }
        console.log("Data Loaded: " + data);
    });
    
}
