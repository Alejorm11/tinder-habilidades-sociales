const db = require('../knexfile')['development'];

exports.createEmpresa = async (empresaData) => {
    return await db('empresas').insert(empresaData);
};

exports.deleteEmpresa = async (empresaId) => {
    return await db('empresas').where({ id_empresa: empresaId }).del();
};

exports.getAllEmpresas = async () => {
    return await db('empresas');
};

exports.getEmpresaById = async (empresaId) => {
    return await db('empresas').where({ id_empresa: empresaId }).first();
};

exports.updateEmpresa = async (empresaId, empresaData) => {
    return await db('empresas').where({ id_empresa: empresaId }).update(empresaData);
};
