import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const inquiry = {
      name: body.name,
      email: body.email,
      destination: body.destination,
      travelDates: body.travelDates,
      message: body.message,
      createdAt: new Date().toISOString(),
    }

    console.log('New CampFly Inquiry:', inquiry)

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    )
  }
}
