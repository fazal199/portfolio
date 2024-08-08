import dbConnect from "@/lib/database/dbConnect";
import { clientModel } from "@/lib/database/models/userData.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const userData = await request.json();

    await dbConnect();
    await clientModel.create(userData);
    return NextResponse.json({
      success: true,
      data: "",
      statusCode: 200,
      message: "Message Sent Successfully!",
    });
  } catch (error: any) {
    console.log(
      "something went wrong while creating client message to db! place:srcappapimessage\route.ts " +
        error.message
    );
    return NextResponse.json({
      success: false,
      data: "",
      status: 500,
      message: error.message,
    });
  }
};
