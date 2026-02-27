export async function POST(req: Request) {
  const body = await req.json()

  await fetch(process.env.GHL_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: body.firstName,
      email: body.email,
      phone: body.phone,
      message: body.message,
      source: 'Furious Styles Kennesaw Website',
    }),
  })

  return Response.json({ success: true })
}
