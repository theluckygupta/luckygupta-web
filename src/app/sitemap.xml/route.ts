import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml.txt')
  const xml = fs.readFileSync(filePath, 'utf8')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}