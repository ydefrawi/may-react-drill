import Sequelize from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../config/connection.js';

class Signup extends Model { }

Signup.init(
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
                model: 'Student',
                key: 'id',
            },
        },
        class_id:{
            type:DataTypes.STRING,
            allowNull:false,
            references:{
                model:'YogaClass',
                key:'id',
            },
        },
        instructor_id:{
            type:DataTypes.STRING,
            allowNull:false,
            references:{
                model:'Instructor',
                key:'id',
            },
        },
    },

    {
        sequelize,
        timestamps: true,
        modelName: 'Signup'
    }
);

export default Signup;