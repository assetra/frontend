import { NextRequest, NextResponse } from "next/server";
import prisma from "@/components/lib/db";

// Fetch layout
export async function GET(req: Request) {
  const userId = 50; // Example: You would fetch this dynamically from the session or request
  const layouts = await prisma.widgetLayout.findMany({
    where: { userId },
  });

  return NextResponse.json(layouts);
}

// Save layout
export async function POST(req: Request) {
  const userId = 50; // Example: Dynamically set this based on user authentication
  const { layout } = await req.json();

  // Check for existing widgets and upsert (insert or update)
  const savedLayout = await Promise.all(
    layout.map(async (item: any) => {
      return await prisma.widgetLayout.upsert({
        where: {
          id:userId,
          name: item.name,
        },
        update: {
          x: item.x,
          y: item.y,
          w: item.w,
          h: item.h,
        },
        create: {
          name: item.name,
          x: item.x,
          y: item.y,
          w: item.w,
          h: item.h,
          userId,
        },
      });
    })
  );

  return NextResponse.json({ success: true, layout: savedLayout });
}

// Delete widget(s)
export async function DELETE(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id");
  const widgetName = req.nextUrl.searchParams.get("widget_name");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    if (widgetName) {
      // Delete a specific widget
      const response = await prisma.widgetLayout.deleteMany({
        where: {
          userId: parseInt(userId, 10),
          name: widgetName,
        },
      });
      return NextResponse.json({ response, message: "Widget deleted successfully" }, { status: 200 });
    } else {
      // Delete all widgets for the user
      const response = await prisma.widgetLayout.deleteMany({
        where: {
          userId: parseInt(userId, 10),
        },
      });
      return NextResponse.json({ response, message: "All widgets deleted successfully" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error deleting customizer data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
