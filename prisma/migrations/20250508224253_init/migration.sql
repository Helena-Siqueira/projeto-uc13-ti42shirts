-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_do_produto` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `data_nascimento` VARCHAR(191) NOT NULL,
    `sexo` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendas` (
    `id_transacao` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id_transacao`, `id_produto`, `quantidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
