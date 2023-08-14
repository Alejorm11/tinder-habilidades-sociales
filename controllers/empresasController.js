const db = require('../knexfile')['development'];

exports.getAllEmpresas = async (req, res) => {
    try {
        const empresas = await db('empresas');
        res.json(empresas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching companies.' });
    }
};

exports.getEmpresaById = async (req, res) => {
    try {
        const id = req.params.id;
        const empresa = await db('empresas').where({ id_empresa: id }).first();
        if (empresa) {
            res.json(empresa);
        } else {
            res.status(404).json({ error: `Company with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the company.' });
    }
};

exports.createEmpresa = async (req, res) => {
    try {
        const toCreate = req.body;
        const newEmpresa = await db('empresas').insert(toCreate);
        res.json(newEmpresa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the company.' });
    }
};

exports.updateEmpresa = async (req, res) => {
    try {
        const id = req.params.id;
        const toEdit = req.body;
        const numUpdated = await db('empresas').where({ id_empresa: id }).update(toEdit);
        if (numUpdated > 0) {
            res.status(200).json({ message: `Company with ID ${id} updated successfully.` });
        } else {
            res.status(404).json({ error: `Company with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the company.' });
    }
};

exports.deleteEmpresa = async (req, res) => {
    try {
        const id = req.params.id;
        const numDeleted = await db('empresas').where({ id_empresa: id }).del();
        if (numDeleted > 0) {
            res.status(200).json({ message: `Company with ID ${id} deleted successfully.` });
        } else {
            res.status(404).json({ error: `Company with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the company.' });
    }
};

