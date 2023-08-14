const express = require('express');
const app=express();
const connection = require('./knexfile')['development'];
const db = require('knex')(connection);
app.use(express.json())



app.get('/', (req, res)=>{
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});
app.listen(3000,()=>{
	console.log(`Server running`);
});


//habilidades

app.post('/habilidades', (req,res)=>{
    const toCreate = req.body
    db('habilidades').insert(toCreate)
    .then((habilidades)=> {
        res.json(habilidades)
    })
});

app.delete('/habilidades/:id', (req, res) => {
    const id = req.params.id; // Accede a req.params.id para obtener el valor del ID
    db('habilidades')
        .where({ id_habilidad: id })
        .del()
        .then((numDeleted) => {
            if (numDeleted > 0) {
                res.status(200).json({ message: `Skill with ID ${id} deleted successfully.` });
            } else {
                res.status(404).json({ error: `Skill with ID ${id} not found.` });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting the skill.' });
        });
});


app.get('/habilidades', (req,res)=>{
    db('habilidades').then((nombre_habilidad)=>{
        res.json(nombre_habilidad)
    })
})

app.get('/habilidades/:id', (req, res) => {
    const id = req.params.id; // Accede a req.params.id para obtener el valor del ID
    db('habilidades')
        .where({ id_habilidad: id })
        .then((nombre_habilidad) => {
            res.json(nombre_habilidad)
        })
    })


    
    app.put('/habilidades/:id', (req, res) => {
        const id = req.params.id;
        const toEdit = req.body;
        db('habilidades')
            .where({ id_habilidad: id })
            .update(toEdit)
            .then((nombre_habilidad) => {
                if (numUpdated > 0) {
                    res.status(200).json({ message: `Skill with ID ${id} updated successfully.` });
                } else {
                    res.status(404).json({ error: `Skill with ID ${id} not found.` });
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while updating the skill.' });
            });
    });

//empresas

app.get('/empresas', (req, res) => {
    db('empresas').then((empresas) => {
        res.json(empresas);
    });
});

app.get('/empresas/:id', (req, res) => {
    const id = req.params.id;
    db('empresas')
        .where({ id_empresa: id })
        .then((nombre_empresa) => {
            res.json(nombre_empresa);
        });
});

app.post('/empresas', (req, res) => {
    const toCreate = req.body;
    db('empresas')
        .insert(toCreate)
        .then((empresas) => {
            res.json(empresas);
        });
});

app.put('/empresas/:id', (req, res) => {
    const id = req.params.id;
    const toEdit = req.body;
    db('empresas')
        .where({ id_empresa: id })
        .update(toEdit)
        .then((numUpdated) => {
            if (numUpdated > 0) {
                res.status(200).json({ message: `Empresa with ID ${id} updated successfully.` });
            } else {
                res.status(404).json({ error: `Empresa with ID ${id} not found.` });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while updating the empresa.' });
        });
});

app.delete('/empresas/:id', (req, res) => {
    const id = req.params.id; // Accede a req.params.id para obtener el valor del ID
    db('empresas')
        .where({ id_habilidad: id })
        .del()
        .then((numDeleted) => {
            if (numDeleted > 0) {
                res.status(200).json({ message: `Skill with ID ${id} deleted successfully.` });
            } else {
                res.status(404).json({ error: `Skill with ID ${id} not found.` });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting the skill.' });
        });
});



//Usuarios

app.get('/usuarios', (req, res) => {
    db('usuarios').then((usuarios) => {
        res.json(usuarios);
    });
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    db('usuarios')
        .where({ id_usuario: id })
        .then((nombre_usuario) => {
            res.json(nombre_usuario);
        });
});

app.post('/usuarios', (req, res) => {
    const toCreate = req.body;
    db('usuarios')
        .insert(toCreate)
        .then((usuarios) => {
            res.json(usuarios);
        });
});

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const toEdit = req.body;
    db('usuarios')
        .where({ id_usuario: id })
        .update(toEdit)
        .then((numUpdated) => {
            if (numUpdated > 0) {
                res.status(200).json({ message: `Empresa with ID ${id} updated successfully.` });
            } else {
                res.status(404).json({ error: `Empresa with ID ${id} not found.` });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while updating the empresa.' });
        });
});

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id; // Accede a req.params.id para obtener el valor del ID
    db('usuarios')
        .where({ id_usuario: id })
        .del()
        .then((numDeleted) => {
            if (numDeleted > 0) {
                res.status(200).json({ message: `Skill with ID ${id} deleted successfully.` });
            } else {
                res.status(404).json({ error: `Skill with ID ${id} not found.` });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting the skill.' });
        });
});




//match
app.post('/getMatch', async (req, res) => {
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
});
