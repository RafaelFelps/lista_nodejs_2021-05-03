const { clientes } = require('../../database/models');
class ClientesController {

    async Get(req, res) {
        try {
            const response = await clientes.findAll();
            return res.json(response);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async GetByPk(req, res) {
        try {

            const response = await clientes.findByPk(req.params.id);

            if (!response) {
                throw new Error('Cliente não encontrado!')
            } else {
                return res.json(response);
            }

        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async Create(req, res) {
        try {
            console.log(req.body);
            const cliente = {
                "nome": req.body.nome,
                "cpf": req.body.cpf,
                "sexo": req.body.sexo,
                "salario": Number(req.body.salario),
                "contato": req.body.contato,
            }

            const response = await clientes.create(cliente);
            return res.json(response);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async Delete(req, res) {
        try {
            const response = await clientes.findByPk(req.params.id);

            await response.destroy();

            return res.json({ "message": "Operação concluída com sucesso!" });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async Update(req, res) {
        try {

            let cliente_id = await clientes.findByPk(req.params.id);
            cliente_id = cliente_id.id;

            if (cliente_id) {
                const operation = await clientes.update(req.body, {
                    where: {
                        id: cliente_id
                    }
                });

                let response = "";
                operation == 1 ? response = { message: "success" } : response = { message: "error" }

                return res.status(200).json(response);
            } else {
                return res.status(200).json({ error: "Cliente não encontrado." });
            }

        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new ClientesController();