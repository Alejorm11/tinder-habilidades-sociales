const db = require('../knexfile')['development'];

exports.createHabilidad = async (habilidadData) => {
    return await db('habilidades').insert(habilidadData);
};

exports.deleteHabilidad = async (habilidadId) => {
    return await db('habilidades').where({ id_habilidad: habilidadId }).del();
};

exports.getAllHabilidades = async () => {
    return await db('habilidades');
};

exports.getHabilidadById = async (habilidadId) => {
    return await db('habilidades').where({ id_habilidad: habilidadId }).first();
};

exports.updateHabilidad = async (habilidadId, habilidadData) => {
    return await db('habilidades').where({ id_habilidad: habilidadId }).update(habilidadData);
};
