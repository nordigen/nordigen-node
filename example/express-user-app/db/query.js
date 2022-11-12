import knex from 'knex';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'app.sqlite3'
    },
    useNullAsDefault: true
});

export const getUser = (email, password) => {
    return db('users')
        .where('email', email)
        .andWhere('password', password)
        .first();
};

export const createUser = async (userData) => {
    return db('users').insert(userData);
};

export const createRequisition = (requisitionData) => {
    return db('requisitions').insert(requisitionData);
};

export const insertAccountMeta = (data) => {
    return db('accounts').insert(data);
};

export const insertAccountData = async (trxData, userId) => {
    const data = {
        userId: userId,
        transactionData: trxData
    };

    const findData = await db('transactions').where('userId', userId).count();
    const count = Object.values(findData[0])[0];

    if (count > 0) {
        return db('transactions')
            .where('userId', userId)
            .update('transactionData', trxData);
    }

    return db('transactions').insert(data);
};

export const getAccountData = (userId) => {
    return db('transactions').where('userId', userId);
};
