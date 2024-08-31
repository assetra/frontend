import { NextRequest, NextResponse } from "next/server";
import prisma from "@/components/lib/db";
const GET = async (req: NextRequest, res: NextResponse) => {
  const responce = await prisma.customizer.findMany();
  return res.json();
};
const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  try{
  const responce = await prisma.customizer.create({
    data: {
      user_id: body.user_id,
      x: body.x,
      y: body.y,
      z: body.z,
      widget_name: body.widget_name,
    },
  });
  return NextResponse.json({responce}, {status: 200});
}catch(e){
    console.log(e);
    return NextResponse.json({error: "error"},{status: 500});
}
};

export { GET, POST };
