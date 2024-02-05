-- CreateTable
CREATE TABLE "pedidoL" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "pedidoL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidoL_Name_key" ON "pedidoL"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "pedidoL_code_key" ON "pedidoL"("code");
