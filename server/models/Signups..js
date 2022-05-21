import Sequelize from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../config/connection.js';

class Signups extends Model { }

Signups.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Students',
                key: 'id',
            },
        },
        class_id:{
            type:DataTypes.STRING,
            allowNull:false,
            references:{
                model:'Classes',
                key:'id',
            },
        },
        instructor_id:{
            type:DataTypes.STRING,
            allowNull:false,
            references:{
                model:'Instructors',
                key:'id',
            },
        },
    },

    {
        sequelize,
        timestamps: true,
        modelName: 'Signups'
    }
);

export default Signups;