import Sequelize from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../config/connection.js';

class YogaClass extends Model { }

YogaClass.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    class_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    minutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    time_offered: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    instructor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Instructor'
        }
    }

    },
    {
        sequelize,
        timestamps: false,
        modelName: 'YogaClass'
    })