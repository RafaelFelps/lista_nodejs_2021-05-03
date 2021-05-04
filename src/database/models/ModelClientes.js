module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('clientes', {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        sexo: DataTypes.STRING,
        salario: DataTypes.DOUBLE,
        contato: DataTypes.STRING,
    });

    return Clientes;
};