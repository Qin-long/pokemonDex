const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;
// gen1 0-150
// gen2 151-250
// gen3 251-385
// gen4 386-493
// gen5 494-648
// gen6 649-720
// gen7 721-808
// gen8 809-897
const responseData = {
    status: true,
    code: 200,
    message: 'OK',

    // 其他数据字段...
};


router.get('/list', (req, res) => {
    let { generation = '', name_zh = '', page = '', size = '' } = req.query;
    // 设置默认 size 为 50
    size = size || 50;
    // 构建 SQL 查询语句
    let sql = 'SELECT * FROM t_pokemon';
    // 如果提供了 generation 参数，则添加到查询条件中
    if (generation) {
        sql += ` WHERE generation = ${generation}`;
    }
    // 如果提供了 index 参数，则添加到查询条件中
    if (name_zh !== '') {
        if (generation) {
            sql += ` AND name_zh LIKE '%${name_zh}%' `;
        } else {
            sql += ` WHERE name_zh LIKE '%${name_zh}%' `;
        }
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
    let { idx, name_zh } = req.query;
    if (!idx) {
        const detail = await getPokemonDetailname(name_zh)
        idx = detail[0].id
    }
    try {
        const [pokemonDetail, baseStat, learnSetLevelingUp, learnSetEgg, learnSetMachine] = await Promise.all([
            getPokemonDetail(idx),
            getPokemonBaseStat(idx),
            getPokemonLearnSetByLevelingUp(idx),
            getPokemonLearnSetByBreeding(idx),
            getPokemonLearnSetByMachine(idx),
        ]);
        res.json({
            status: true,
            code: 200,
            message: 'OK',
            data: { pokemonDetail, baseStat, learnSetLevelingUp, learnSetEgg, learnSetMachine }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
});

// 查询宝可梦详情
function getPokemonDetail(idx) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM t_pokemon_detail WHERE idx = ?`;
        global.db.all(sql, [idx], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
// 查询宝可梦详情
function getPokemonDetailname(name) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM t_pokemon WHERE name_zh = ?';
        global.db.all(sql, [name], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
// 查询宝可梦基础属性
function getPokemonBaseStat(idx) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM t_pokemon_detail_base_stat WHERE idx =?`;
        global.db.all(sql, [idx], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// 查询宝可梦升级可学招式
function getPokemonLearnSetByLevelingUp(idx) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM t_pokemon_detail_learn_set_by_leveling_up WHERE idx =?`;
        global.db.all(sql, [idx], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
//查询宝可梦遗传招式
function getPokemonLearnSetByBreeding(idx) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM t_pokemon_detail_learn_set_by_breeding WHERE idx =?`;
        global.db.all(sql, [idx], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
// 查询宝可梦可使用的学习技能机器
function getPokemonLearnSetByMachine(idx) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM t_pokemon_detail_learn_set_by_technical_machine WHERE idx =?`;
        global.db.all(sql, [idx], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
module.exports = router;