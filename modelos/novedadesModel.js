var pool = require('./bd');

/* Para ver las novedades */

async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

/* DELETE */

async function deleteNovedades(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports =  {getNovedades, deleteNovedades}