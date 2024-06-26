import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

// Hablamos de 1 sola nota

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const note = await prisma.note.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (!note) {
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }
    console.log(params.id);
    return NextResponse.json(note);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedNote = await prisma.note.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedNote) {
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(deletedNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }
  }
}
export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, content } = await request.json();
    const updateNote = await prisma.note.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        content,
      },
    });
    if (!updateNote) {
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(updateNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }
  }
}
