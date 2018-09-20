/**
 * Created by hxh on 2017/9/16.
 */

import * as http from 'http';

const server = http.createServer((req, res) => {
    res.write('serve begin....');
    res.end('server begin ok');
});

server.listen( 8000 );













