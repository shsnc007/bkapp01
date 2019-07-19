const myRequest = new XMLHttpRequest();
function getCMDB(url='/cmdb-server/ci/ci/getCiTreeWithCounts') {
    console.log(`开始请求`);
    $.get(url, function(data){
        console.log("Data Loaded: " + data);
    });
}
