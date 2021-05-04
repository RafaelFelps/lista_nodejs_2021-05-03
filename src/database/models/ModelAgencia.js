module.exports = (sequelize, DataTypes) => {
    const Agencia = sequelize.define('agencia', {
        ip: DataTypes.STRING,
        descricao: DataTypes.STRING,
        numero: DataTypes.STRING,
        bank_id: DataTypes.STRING,
        createdAt: DataTypes.STRING,
        updatedAt: DataTypes.DATE,
    });

    return Agencia;
};