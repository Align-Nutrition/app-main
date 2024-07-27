import { stripe } from "@/lib/utils/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { business_id, customer_email, origin, price_id } = await req.json();

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    billing_address_collection: "auto",
    customer_email,
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    mode: "subscription",
    return_url: `${origin}/business-onboarding/confirmation?session_id={CHECKOUT_SESSION_ID}&business_id=${business_id}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
