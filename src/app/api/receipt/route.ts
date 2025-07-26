import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { renderReceiptHTML } from "@/app/api/receipt/pdfGenerator";

export async function GET() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const html = renderReceiptHTML({ name: "山田太郎", price: 1200, seller: "電気屋" });

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="receipt.pdf"',
    },
  });
}
