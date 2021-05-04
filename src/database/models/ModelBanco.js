module.exports = (sequelize, Sequelize) => {
    const Banco = sequelize.define("bancos", {
        cnpj: Sequelize.STRING,
        razaoSocial: Sequelize.STRING(14),
        contato: Sequelize.STRING,
    });



    return Banco;
}