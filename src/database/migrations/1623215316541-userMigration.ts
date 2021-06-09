import {MigrationInterface, QueryRunner} from "typeorm";

export class userMigration1623215316541 implements MigrationInterface {
    name = 'userMigration1623215316541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`createdBy` varchar(255) NOT NULL, `updatedBy` varchar(255) NOT NULL, `createdOn` datetime NOT NULL, `updatedOn` datetime NOT NULL, `id` varchar(36) NOT NULL, `username` varchar(30) NOT NULL, `email` varchar(30) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
