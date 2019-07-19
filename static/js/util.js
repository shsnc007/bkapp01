window.testString = 'ceshi';
window.shsncys={};
const urlUnit = [
    //获取CMDB主机列表
    '/api/c/self-service-api/snc/cmdb/getcmdbinstancelist/',
    //获取CMDB某个主机的信息
    'api/c/self-service-api/snc/cmdb/getInstanceByInstanceId/',
    // 编辑CMDB主机
    '/api/c/self-service-api/snc/cmdb/editInstance/',
    //获取监控告警列表数据
    '/api/c/self-service-api/snc/amp/alarm/getPage/',
    //获取监控性能最新数据
    'api/c/self-service-api/snc/amp/getItemLastDataList/', 
    //执行操作的基本信息
    '/api/c/self-service-api/snc/atm/job/get/',
    //执行操作日志信息
    '/api/c/self-service-api/snc/atm/job/findTaskScriptLog/'
]
const paramsUnit = [
    //获取CMDB主机列表
    {params:{"condition":{"ciId":77,"condition":""},"pagination":{"currentPage":1,"pageSize":50}}},
     //获取CMDB某个主机的信息
    {params:{"ciId":77,"instanceId":89}},
     // 编辑CMDB主机
    {params:{"ciId":77,"instanceRecord":{"attributes":[{"attributeId":1301,"attributeValue":"50167-test"},{"attributeId":1302,"attributeValue":"192.168.50.167"},{"attributeId":1303,"attributeValue":null},{"attributeId":1304,"attributeValue":"192.168.50.167"},{"attributeId":1306,"attributeValue":null},{"attributeId":1309,"attributeValue":"Linux"},{"attributeId":1307,"attributeValue":"192.168.50.1"},{"attributeId":1308,"attributeValue":"CentOS Linux release 7.6.1810 (Core)"},{"attributeId":1310,"attributeValue":"3.10.0-957.21.3.el7.x86_64"},{"attributeId":1311,"attributeValue":3790},{"attributeId":1312,"attributeValue":200},{"attributeId":1313,"attributeValue":0},{"attributeId":1305,"attributeValue":"192.168.50.167"},{"attributeId":1314,"attributeValue":null},{"attributeId":1300,"attributeValue":"host_10000059"},{"attributeId":309,"attributeValue":"yanshi1"},{"attributeId":310,"attributeValue":1562322493634},{"attributeId":311,"attributeValue":"yanshi1"},{"attributeId":312,"attributeValue":1563418366189}],"relations":[{"quoteRelation":{"quoteCiId":84,"relationId":8},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":82,"relationId":14},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":87,"relationId":8},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":86,"relationId":8},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":98,"relationId":27},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":90,"relationId":8},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":26,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":27,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":18,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":24,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":29,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":10,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":20,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":19,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":37,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":40,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":38,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":21,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":35,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":43,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":49,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":42,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":51,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":46,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":60,"relationId":20},"quoteInstances":[]},{"quoteRelation":{"quoteCiId":98,"relationId":25},"quoteInstances":[]}],"instanceId":89}}},
     //获取监控告警列表数据
    {params:{"pagination":{"pagenum":1,"pagesize":40,"sort":{}},"condition":{"alarmId":"","businessIds":[],"deviceTypeIds":[],"hostIp":"","hostName":"","alarmInfo":"","resourceGroupIds":[],"itemName":"","value":"","priorityList":[],"precise":false,"hostIds":[],"handleStatus":1,"lastClockStartTime":"","lastClockEndTime":"","maintenancesFlag":""}}},
    //获取监控性能最新数据
    {params:{"pagination":{"pagenum":1,"pagesize":"10","sort":{}},"condition":{"hostid":"717"}}},
    //执行操作的基本信息
    {params:{"id":2896}},
    //执行操作日志信息
    {params:{"condition":{"stepId":3613,"resultStatus":"","instanceName":""},"pagination":{"pagenum":1,"pagesize":5}}}
]   
const bk_app_secret ="47666134-a1c6-4ec9-916b-841c708c2050",bk_app_code="shsnc-test",bk_username='admin';
$.postJSON = function(url, data, callback) {
    return jQuery.ajax({
        'type': 'POST',
        'url': url,
        'contentType': 'application/json',
        'data': $.toJSON(data),
        'dataType': 'json',
        'success': callback
    });
};

function getData(index,dataKey) {
    let url =urlUnit[index],params =paramsUnit[index];
    params.bk_app_secret = bk_app_secret;
    params.bk_app_code = bk_app_code;
    params.bk_username = bk_username;
    $.postJSON(url, params,function(data){
        if (data&&data.msgCode===200) {
            console.log(data.data.pageBean.recordList);
            getTableCell(formatData(data.data.pageBean.recordList))
            window.shsncys[dataKey] = data.data;
        }
        console.log("Data Loaded: " + data);
    });
}
function formatData(data) {
    let rows = [];
    data.map((item)=>{
        let columns = {};
        item.columns.map((items,index) => {
            columns[items.code] = items.value;
        })
        rows.push(columns);
    })
    return rows;
}

function getTableCell(rows) {
    let cHtml = '';
    rows.map((item,index) => {
        cHtml+= ` <tr>
            <th scope="col">${item.instance_name}</th>
            <th scope="col">${item.solute_status}</th>
            <th scope="col">${item.host_name}</th>
            <th scope="col">${item.ip}</th>
            <th scope="col">${item.vip}</th>
            <th scope="col">${item.manage_ip}</th>
            <th scope="col">${item.server_type}</th>
            <th scope="col">${item.os_version}</th>
            <th scope="col">${item.use_state}</th>
            <th scope="col">${item['82_14_serial_number']}</th>
        </tr>`
    })
    document.getElementById('cmdb-table').innerHTML=cHtml;
    return cHtml;
}

