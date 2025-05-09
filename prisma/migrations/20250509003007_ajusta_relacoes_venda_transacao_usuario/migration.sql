/*
  Warnings:

  - The primary key for the `vendas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id_transacao,id_produto]` on the table `vendas` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `vendas` DROP PRIMARY KEY;

-- CreateIndex
CREATE UNIQUE INDEX `vendas_id_transacao_id_produto_key` ON `vendas`(`id_transacao`, `id_produto`);

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_transacao_fkey` FOREIGN KEY (`id_transacao`) REFERENCES `transacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
