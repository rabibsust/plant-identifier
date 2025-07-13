import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  console.log('API route called');
  
  try {
    const { image } = await request.json();
    console.log('Image received:', image ? 'Yes' : 'No');

    if (!image) {
      console.log('No image provided');
      return new Response(JSON.stringify({ error: 'No image provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('API key exists:', apiKey ? 'Yes' : 'No');
    console.log('API key first 10 characters:', apiKey ? apiKey.substring(0, 10) + '...' : 'undefined');

    if (!apiKey) {
      console.log('GEMINI_API_KEY not found in environment variables');
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    console.log('Sending request to Gemini API...');
    const result = await model.generateContent([
      "Identify this plant and provide important information about it including its common name, scientific name, care instructions, and interesting facts.",
      { inlineData: { data: image.split(',')[1], mimeType: "image/jpeg" } },
    ]);

    console.log('Gemini API response received');
    const responseText = result.response.text();
    
    return new Response(JSON.stringify({ result: responseText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ 
      error: 'Error identifying plant', 
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}