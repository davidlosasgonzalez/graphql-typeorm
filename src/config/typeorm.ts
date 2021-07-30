import { getConnectionOptions, createConnection } from 'typeorm';

export async function connectDB() {
    const connectionOptions = await getConnectionOptions();

    const connection = await createConnection({
        ...connectionOptions,
        entities: ['src/api/**/model.ts'],
        synchronize: true,
    });

    console.log('Database connected!');

    return connection;
}
