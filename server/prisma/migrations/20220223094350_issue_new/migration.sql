/*
  Warnings:

  - You are about to drop the column `priorty` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `priority` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IssuePriority" AS ENUM ('NONE', 'URGENT', 'HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "priorty",
ADD COLUMN     "priority" "IssuePriority" NOT NULL;

-- DropEnum
DROP TYPE "IssuePriorty";
