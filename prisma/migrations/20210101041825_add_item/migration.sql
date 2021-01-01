-- CreateTable
CREATE TABLE "Item" (
    "url" TEXT NOT NULL,
    "scrapedAt" INTEGER NOT NULL,

    PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "_ItemToWishList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToWishList_AB_unique" ON "_ItemToWishList"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToWishList_B_index" ON "_ItemToWishList"("B");

-- AddForeignKey
ALTER TABLE "_ItemToWishList" ADD FOREIGN KEY("A")REFERENCES "Item"("url") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToWishList" ADD FOREIGN KEY("B")REFERENCES "WishList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
