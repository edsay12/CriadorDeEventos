/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `eventos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "eventos_alias_key" ON "eventos"("alias");
