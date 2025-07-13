// app/page.js
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const identifyPlant = async () => {
    setLoading(true)
    try {
      console.log('Sending request to API...');
      const response = await fetch('/api/identify-plant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setResult(data.result);
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult(`Error identifying plant: ${error.message}. Please try again.`)
    }
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-green-50">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Plant Identifier</h1>
      <div className="w-full max-w-md">
        <label className="block mb-4">
          <span className="sr-only">Choose plant image</span>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100
          "/>
        </label>
        {image && (
          <div className="mb-4">
            <Image src={image} alt="Uploaded plant" width={300} height={300} className="rounded-lg" />
          </div>
        )}
        <button
          onClick={identifyPlant}
          disabled={!image || loading}
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 disabled:opacity-50"
        >
          {loading ? 'Identifying...' : 'Identify Plant'}
        </button>
        {result && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-green-800">Plant Information:</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </main>
  )
}