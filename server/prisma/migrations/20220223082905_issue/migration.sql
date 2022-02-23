/*
  Warnings:

  - You are about to drop the column `issueId` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimate` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Issue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `priorty` on the `Issue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "IssueStatus" AS ENUM ('BACKLOG', 'TODO', 'INPROGRESS', 'INREVIEW', 'DONE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "IssuePriorty" AS ENUM ('NONE', 'URGENT', 'HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "IssueEstimate" AS ENUM ('NONE', 'XS', 'S', 'M', 'L', 'XL');

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_issueId_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "issueId",
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "estimate" "IssueEstimate" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "IssueStatus" NOT NULL,
DROP COLUMN "priorty",
ADD COLUMN     "priorty" "IssuePriorty" NOT NULL;

-- DropEnum
DROP TYPE "Priorty";

-- DropEnum
DROP TYPE "Status";

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
