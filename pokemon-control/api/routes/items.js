const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

router.get('/list', (req, res) => {
    let { name_zh = '', page = '', size = '' } = req.query;
    // 设置默认 size 为 50
    size = size || 50;
    // 构建 SQL 查询语句
    let sql = 'SELECT * FROM t_item';
    // 如果提供了 index 参数，则添加到查询条件中
    if (!page) {
        console.log(1);
        sql += ` WHERE name_zh LIKE '%${name_zh}%' `;
    }
    // 如果提供了分页参数，则添加 LIMIT 和 OFFSET 子句
    if (page && size) {
        const offset = (page - 1) * size;
        sql += ` LIMIT ${size} OFFSET ${offset}`;
    }
    // 执行查询
    global.db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            status: true,
            code: 200,
            message: 'OK',
            data: rows
        });
    });
});

module.exports = router;