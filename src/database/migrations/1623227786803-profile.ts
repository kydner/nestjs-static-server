import {MigrationInterface, QueryRunner} from "typeorm";

export class profile1623227786803 implements MigrationInterface {
    name = 'profile1623227786803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `profiles` (`id` varchar(36) NOT NULL, `name` varchar(30) NOT NULL, `pictureId` varchar(255) NOT NULL, `default` tinyint NOT NULL, `createdBy` varchar(255) NOT NULL, `updatedBy` varchar(255) NOT NULL, `createdOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_4e9da7cade0e9edd393329bb32` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `username` varchar(30) NOT NULL, `email` varchar(30) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, INDEX `username-idx` (`username`), INDEX `email-idx` (`email`), INDEX `first-name-idx` (`firstName`), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP INDEX `first-name-idx` ON `users`");
        await queryRunner.query("DROP INDEX `email-idx` ON `users`");
        await queryRunner.query("DROP INDEX `username-idx` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP INDEX `IDX_4e9da7cade0e9edd393329bb32` ON `profiles`");
        await queryRunner.query("DROP TABLE `profiles`");
    }

}
