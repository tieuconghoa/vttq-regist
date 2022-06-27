var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'remotemysql.com',
 user:'VkQ1Z6qK2n',
 password:'VUlwzCFRG8',
 database:'VkQ1Z6qK2n'
 
});
module.exports=connection;