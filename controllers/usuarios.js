const db = require('../knexfile')['development'];

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await db('usuarios');
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await db('usuarios').where({ id_usuario: id }).first();
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: `User with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const toCreate = req.body;
        const newUsuario = await db('usuarios').insert(toCreate);
        res.json(newUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const toEdit = req.body;
        const numUpdated = await db('usuarios').where({ id_usuario: id }).update(toEdit);
        if (numUpdated > 0) {
            res.status(200).json({ message: `User with ID ${id} updated successfully.` });
        } else {
            res.status(404).json({ error: `User with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const numDeleted = await db('usuarios').where({ id_usuario: id }).del();
        if (numDeleted > 0) {
            res.status(200).json({ message: `User with ID ${id} deleted successfully.` });
        } else {
            res.status(404).json({ error: `User with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
};
