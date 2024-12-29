-- CreateTable
CREATE TABLE "Navlink" (
    "id" SERIAL NOT NULL,
    "spanishTitle" TEXT NOT NULL,
    "englishtitle" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Navlink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkData" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "LinkData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "spanishTitle" TEXT NOT NULL,
    "englishtitle" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "spanishTitle" TEXT NOT NULL,
    "englishTitle" TEXT,
    "price" INTEGER NOT NULL,
    "spanishIngredients" TEXT,
    "englishIngredients" TEXT,
    "spanishDescription" TEXT NOT NULL,
    "englishDescription" TEXT,
    "image" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Navlink_spanishTitle_key" ON "Navlink"("spanishTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Navlink_englishtitle_key" ON "Navlink"("englishtitle");

-- CreateIndex
CREATE UNIQUE INDEX "Category_spanishTitle_key" ON "Category"("spanishTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Category_englishtitle_key" ON "Category"("englishtitle");

-- CreateIndex
CREATE UNIQUE INDEX "Product_spanishTitle_key" ON "Product"("spanishTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Product_englishTitle_key" ON "Product"("englishTitle");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
