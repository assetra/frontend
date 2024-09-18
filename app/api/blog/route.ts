import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No files received or invalid file." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + "_" + file.name.replace(/\s+/g, "_");

    // Save file to public/assets/blog
    const filePath = path.join("public/assets/blog/", filename);
    await writeFile(filePath, buffer);

    // Return the URL path instead of the full file system path
    const publicUrlPath = `/assets/blog/${filename}`;

    return NextResponse.json(
      { message: "File uploaded successfully.", filePath: publicUrlPath },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred during file upload:", error);
    return NextResponse.json(
      { error: "File upload failed.", details: error },
      { status: 500 }
    );
  }
}
