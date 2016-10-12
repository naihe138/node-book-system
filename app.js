/**
 * @file
 * @author 何文林
 * @date 16/10/9
 */
var express = require('express');
var app = express();
var router = require('./router/router');
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'ejs');
// 显示首页
app.get('/', router.showIndex);
// 显示添加页面
app.get('/add', router.showAdd);
// 添加图书
app.post('/doAdd', router.doAdd);
// 现实修改
app.get('/edit', router.showEdit);
// 修改动作
app.post('/doedit', router.doEdit);
// 删除动作
app.post('/dodelete', router.doDelete);

app.listen(3000);