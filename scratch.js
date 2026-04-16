const https = require('https');
const GSHEET_JSONP_URL = 'https://docs.google.com/spreadsheets/d/13E8H4qd3JFf7CPTc7hA0MUVwQACGNV-iVF_WV9FW39c/gviz/tq?tqx=out:json;responseHandler:gvizCallback&gid=0';

https.get(GSHEET_JSONP_URL, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        let jsonStr = data.replace('/*O_o*/\n', '').replace(/^gvizCallback\(/, '').replace(/\);?$/, '');
        let obj = JSON.parse(jsonStr);
        let cols = obj.table.cols.map(c => c.label);
        console.log("COLUMNS:", cols);
        console.log("FIRST ROW:", JSON.stringify(obj.table.rows[0].c.map(c => c ? c.v : null)));
    });
});
