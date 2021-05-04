module.exports = (sequelize, DataTypes) => {
    const Agencia = sequelize.define('agencia', {
        descricao: DataTypes.STRING,
        numero: DataTypes.STRING,
    });


    return Agencia
};