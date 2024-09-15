-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT,
    "username" TEXT NOT NULL,
    "country" TEXT,
    "created_date" TIMESTAMP(3),
    "dob" TIMESTAMP(3),
    "is_verified" BOOLEAN,
    "last_name" TEXT,
    "mobile_number" TEXT,
    "profile_picture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customizer" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "x" INTEGER,
    "y" INTEGER,
    "z" INTEGER,
    "widget_name" TEXT,

    CONSTRAINT "customizer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "customizer" ADD CONSTRAINT "customizer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
