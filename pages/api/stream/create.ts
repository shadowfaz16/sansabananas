import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = 'https://livepeer.studio/api/stream';

  const response = await fetch(url, {
    method: req.method, // Forward the method
    headers: {
      'Content-Type': 'application/json',
      // Include other necessary headers
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://sansbananas.vercel.app');
  // Include other headers as needed
  res.status(200).json(data);
}