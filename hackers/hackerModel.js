const db = require('../data/db-config.js');

module.exports = {
    find,
    add,
    //findBy,
    destroy,
    //update
}


function find() {
    return db('hackers');
}

function destroy(id) {
    return db('hackers').where({id}).del();
}

async function add(hacker) {
    const [ id ] = await db('hackers').insert(hacker, 'id');
    return db('hackers').where({id}).first();
}