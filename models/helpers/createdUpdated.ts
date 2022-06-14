import { DataTypes } from 'sequelize';

export const createdUpdated = {
    created_by: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updated_by: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
};
