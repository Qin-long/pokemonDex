const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://files.cnblogs.com/files/blogs/769618/moves.json?t=1713456303&download=true"

router.get('/list', (req, res) => {
    let { name_zh = '', page = '', size = '' } = req.query;
    // 设置默认 size 为 50
    size = size || 50;
    // 构建 SQL 查询语句
    let sql = 'SELECT * FROM t_move';
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
router.get('/detail', async (req, res) => {
    let { id = '' } = req.query;
    console.log(id);
    try {
        const [moves, details] = await Promise.all([
            getMoves(id),
            getMovesDetail(id),
        ]);

        res.json({
            status: true,
            code: 200,
            message: 'OK',
            data: { moves, details }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});
// 查询特性
function getMoves(id) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM t_move WHERE id = ?'
        global.db.all(sql, [id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// 查询特性详情
function getMovesDetail(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM t_move_detail WHERE id = ?'
        global.db.all(sql, [id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
module.exports = router;