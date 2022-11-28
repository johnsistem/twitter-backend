import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersTweetsFollowersRetweets1669607836536 implements MigrationInterface {
    name = 'createUsersTweetsFollowersRetweets1669607836536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "followers" ("id" SERIAL NOT NULL, "follower_id" integer, "following_id" integer, CONSTRAINT "PK_c90cfc5b18edd29bd15ba95c1a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "CreatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "content" character varying(150) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "retweet" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, "tweet_id" integer, CONSTRAINT "PK_25e63c358b205b585b3fa30312b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_e11d02e2a1197cfb61759da5a87" FOREIGN KEY ("follower_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_95627c64d9f57814010a003032e" FOREIGN KEY ("following_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_a9703cf826200a2d155c22eda96" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "retweet" ADD CONSTRAINT "FK_10932d8e8725610249b65eeeb89" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "retweet" ADD CONSTRAINT "FK_b0e512bf491e53090febcf10bd3" FOREIGN KEY ("tweet_id") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "retweet" DROP CONSTRAINT "FK_b0e512bf491e53090febcf10bd3"`);
        await queryRunner.query(`ALTER TABLE "retweet" DROP CONSTRAINT "FK_10932d8e8725610249b65eeeb89"`);
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_a9703cf826200a2d155c22eda96"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_95627c64d9f57814010a003032e"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_e11d02e2a1197cfb61759da5a87"`);
        await queryRunner.query(`DROP TABLE "retweet"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "followers"`);
    }

}
