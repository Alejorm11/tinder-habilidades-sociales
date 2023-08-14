const db = require('../knexfile')['development'];

exports.createUsuario = async (usuarioData) => {
    return await db('usuarios').insert(usuarioData);
};

exports.deleteUsuario = async (usuarioId) => {
    return await db('usuarios').where({ id_usuario: usuarioId }).del();
};

exports.getAllUsuarios = async () => {
    return await db('usuarios');
};

exports.getUsuarioById = async (usuarioId) => {
    return await db('usuarios').where({ id_usuario: usuarioId }).first();
};

exports.updateUsuario = async (usuarioId, usuarioData) => {
    return await db('usuarios').where({ id_usuario: usuarioId }).update(usuarioData);
};
