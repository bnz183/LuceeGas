import { NextRequest, NextResponse } from "next/server";

// This endpoint can be replaced with:
// 1. Google Sheets webhook (see README)
// 2. Firebase Cloud Functions
// 3. Your own backend

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.nome || !body.cognome || !body.telefono) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.honeypot) {
      // Silent success for bots
      return NextResponse.json({ success: true });
    }

    // Log the lead (in production, send to your storage/notification system)
    console.log("New lead received:", {
      nome: body.nome,
      cognome: body.cognome,
      telefono: body.telefono,
      richiesta: body.richiesta,
      attribution: body.attribution,
      timestamp: body.timestamp,
    });

    // TODO: Replace with actual storage/notification
    // Examples:
    // - Send to Google Sheets via webhook
    // - Send email notification
    // - Save to Firebase Firestore
    // - Send to CRM

    // For now, return success
    return NextResponse.json(
      {
        success: true,
        message: "Lead received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

