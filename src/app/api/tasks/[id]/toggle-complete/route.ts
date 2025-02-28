/* eslint-disable @typescript-eslint/no-unused-vars */
import { db as prisma } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = auth()
    const { id } = params
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const { completed } = await request.json()
    const task = await prisma.task.update({
      where: {
        id,
        userId
      },
      data: {
        completed,
      },
    })

    return NextResponse.json({ task }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ error: "Error updating task" }, { status: 400 })
  }
}
