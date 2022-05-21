import Sequelize from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../config/connection.js';

class Students extends Model { }

Students.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: False,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        validate:{
            isEmail:true,
        }
    },
    password: {
        type:DataTypes.STRING
    }

},
{
    sequelize,
    timestamps:false,
    modelName:'Student'
}
);

export default User;