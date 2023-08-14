const db = require('../knexfile')['development'];

exports.createHabilidad = async (req, res) => {
    try {
        const toCreate = req.body;
        const newHabilidad = await db('habilidades').insert(toCreate);
        res.json(newHabilidad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the skill.' });
    }
};

exports.deleteHabilidad = async (req, res) => {
    try {
        const id = req.params.id;
        const numDeleted = await db('habilidades').where({ id_habilidad: id }).del();
        if (numDeleted > 0) {
            res.status(200).json({ message: `Skill with ID ${id} deleted successfully.` });
        } else {
            res.status(404).json({ error: `Skill with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the skill.' });
    }
};

exports.getAllHabilidades = async (req, res) => {
    try {
        const habilidades = await db('habilidades');
        res.json(habilidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching skills.' });
    }
};

exports.getHabilidadById = async (req, res) => {
    try {
        const id = req.params.id;
        const habilidad = await db('habilidades').where({ id_habilidad: id }).first();
        if (habilidad) {
            res.json(habilidad);
        } else {
            res.status(404).json({ error: `Skill with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the skill.' });
    }
};

exports.updateHabilidad = async (req, res) => {
    try {
        const id = req.params.id;
        const toEdit = req.body;
        const numUpdated = await db('habilidades').where({ id_habilidad: id }).update(toEdit);
        if (numUpdated > 0) {
            res.status(200).json({ message: `Skill with ID ${id} updated successfully.` });
        } else {
            res.status(404).json({ error: `Skill with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the skill.' });
    }
};
