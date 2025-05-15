/*
  Warnings:

  - You are about to drop the column `nome_do_produto` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `transacao` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `transacao` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `transacao` table. All the data in the column will be lost.
  - You are about to drop the column `id_produto` on the `vendas` table. All the data in the column will be lost.
  - You are about to drop the column `id_transacao` on the `vendas` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `vendas` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto_id` to the `transacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `transacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venda_id` to the `transacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `vendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `vendas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `vendas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `vendas` DROP FOREIGN KEY `vendas_id_produto_fkey`;

-- DropForeignKey
ALTER TABLE `vendas` DROP FOREIGN KEY `vendas_id_transacao_fkey`;

-- DropIndex
DROP INDEX `vendas_id_produto_fkey` ON `vendas`;

-- DropIndex
DROP INDEX `vendas_id_transacao_id_produto_key` ON `vendas`;

-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `nome_do_produto`,
    ADD COLUMN `imagem` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transacao` DROP COLUMN `data`,
    DROP COLUMN `id_usuario`,
    DROP COLUMN `preco`,
    ADD COLUMN `produto_id` INTEGER NOT NULL,
    ADD COLUMN `quantidade` DOUBLE NOT NULL,
    ADD COLUMN `venda_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `vendas` DROP COLUMN `id_produto`,
    DROP COLUMN `id_transacao`,
    DROP COLUMN `quantidade`,
    ADD COLUMN `data` DATETIME(3) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `usuario_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nota` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_produto_categoria` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_produto_categoria_AB_unique`(`A`, `B`),
    INDEX `_produto_categoria_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacao` ADD CONSTRAINT `transacao_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transacao` ADD CONSTRAINT `transacao_venda_id_fkey` FOREIGN KEY (`venda_id`) REFERENCES `vendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_produto_categoria` ADD CONSTRAINT `_produto_categoria_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_produto_categoria` ADD CONSTRAINT `_produto_categoria_B_fkey` FOREIGN KEY (`B`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
