import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const source = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  synchronize: false,
  logging: false,
  migrations: ['src/database/migrations/*.ts'],
  //migrations: ["dist/database/migrations/**/*{.js,.ts}"],
  migrationsTableName: 'migrations',
  entities: ['dist/**/*.entity{.ts,.js}'],
  //entities: ["dist/modules/entities/**/*{.js,.ts}"],
});

export default source;