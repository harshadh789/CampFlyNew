import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { error } = await supabase.from('inquiries').insert([
      {
        name: body.name,
        email: body.email,
        destination: body.destination,
        travel_dates: body.travelDates,
        message: body.message,
      },
    ])

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry stored successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to save inquiry',
      },
      { status: 500 }
    )
  }
}
