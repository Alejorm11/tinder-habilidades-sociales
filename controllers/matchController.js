const db = require('../knexfile')['development'];

exports.getMatch = async (req, res) => {
    try {
        const { nombre_empresa } = req.body;
        const empresas = await db('empresas').where({ nombre_empresa: nombre_empresa });

        const empresa = empresas[0];

        const usuarios = await db('usuarios');

        const usuariosMatch = usuarios.filter(usuario => {
            return usuario.habilidad_usuario === empresa.habilidad_empresa;
        });

        const resultadoCombinado = { empresa, usuariosMatch };
        res.json(resultadoCombinado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

