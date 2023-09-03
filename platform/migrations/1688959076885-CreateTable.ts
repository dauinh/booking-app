import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTable1688959076885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            // Enable the UUID extension if not already enabled
            `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        )

        await queryRunner.query(
            `CREATE TABLE hosts (
                -- generate randomized id
                id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
                -- more accessible and orderly
                _id SERIAL NOT NULL,
                -- soft delete: keep in db, not on user's gui
                _active BOOLEAN NOT NULL DEFAULT TRUE,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(15) NOT NULL,
                email VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                -- good to have for analytics
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
              )`
        )

        await queryRunner.query(
            `CREATE TABLE guests (
                -- generate randomized id
                id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
                _id SERIAL NOT NULL,
                -- soft delete: keep in db, not on user's gui
                _active BOOLEAN NOT NULL DEFAULT TRUE,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(15) NOT NULL,
                email VARCHAR(255) NOT NULL,
                -- good to have for analytics
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
              )`
        )

        await queryRunner.query(
            `CREATE TABLE properties (
                -- generate randomized id
                id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
                -- more accessible and orderly
                _id SERIAL NOT NULL,
                -- soft delete: keep in db, not on user's gui
                _active BOOLEAN NOT NULL DEFAULT TRUE,
                host_id UUID NOT NULL REFERENCES hosts(id),
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                -- good to have for analytics
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
              )`
        )

        await queryRunner.query(
            `CREATE TABLE bookings (
                id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
                -- for UX
                _id SERIAL NOT NULL,
                host_id UUID NOT NULL REFERENCES hosts(id),
                guest_id UUID NOT NULL REFERENCES guests(id),
                check_in_date TIMESTAMP WITH TIME ZONE NOT NULL,
                check_out_date TIMESTAMP WITH TIME ZONE NOT NULL,
                total_price INT NOT NULL,
                -- good to have for analytics
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
              )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE IF EXISTS bookings;
            DROP TABLE IF EXISTS guests;
            DROP TABLE IF EXISTS hosts;
            DROP TABLE IF EXISTS properties;`
        )
    }

}
