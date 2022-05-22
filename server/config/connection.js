import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config();

// let sequelize;

export const sequelize =
    process.env.JAWSDB_URL
        ? new Sequelize(process.env.JAWSDB_URL)
        : new Sequelize('yoga_db','root','Register1',
            {
                host: 'localhost',
                dialect: 'mysql',
                port:3306,
                dialectOptions: {
                    decimalNumbers: true,
                },
            });
