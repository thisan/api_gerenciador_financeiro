module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            hots: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'gerenciador_financeiro'
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};