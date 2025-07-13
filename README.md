# 🌱 Plant Identifier

A modern web application that uses AI to identify plants from uploaded images. Built with Next.js 14 and powered by Google's Gemini 1.5 Flash model.

## ✨ Features

- **Instant Plant Identification**: Upload any plant image and get detailed information
- **AI-Powered Analysis**: Uses Google Gemini 1.5 Flash for accurate plant recognition
- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **Secure API Handling**: Server-side API routes protect sensitive keys
- **Error Handling**: Comprehensive error handling and loading states
- **Mobile Responsive**: Works seamlessly on all device sizes

## 🚀 Demo

Upload an image of any plant and get:
- Common and scientific names
- Care instructions
- Interesting botanical facts
- Growing conditions
- And much more!

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **AI Model**: Google Gemini 1.5 Flash
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **API**: Google Generative AI SDK

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18.0 or higher
- npm or yarn package manager
- Google AI Studio API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rabibsust/plant-identifier.git
   cd plant-identifier
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_google_ai_studio_api_key_here
   ```

4. **Get your Google AI Studio API key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API key"
   - Copy the generated key to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
plant-identifier/
├── app/
│   ├── api/
│   │   └── identify-plant/
│   │       └── route.js          # API route for plant identification
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Main page component
├── .env.local                    # Environment variables (create this)
├── .gitignore
├── next.config.js                # Next.js configuration
├── package.json
├── README.md
└── tailwind.config.js            # Tailwind CSS configuration
```

## 🔑 API Configuration

The application uses Google's Gemini 1.5 Flash model for plant identification. The API key is securely handled on the server-side through Next.js API routes.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google AI Studio API key | Yes |

## 🎯 Usage

1. **Upload Image**: Click the file input to select a plant image
2. **Identify**: Click the "Identify Plant" button
3. **View Results**: Get detailed information about the identified plant

### Supported Image Formats
- JPEG
- PNG
- WebP
- GIF

## 🔍 How It Works

1. **Image Upload**: User selects an image file
2. **Frontend Processing**: Image is converted to base64 format
3. **API Call**: Secure POST request to `/api/identify-plant`
4. **AI Analysis**: Google Gemini 1.5 Flash analyzes the image
5. **Response**: Detailed plant information is returned and displayed

## 🛡️ Security Features

- API keys are stored server-side only
- Input validation for image uploads
- Error handling for malformed requests
- Secure API route implementation

## 🐛 Troubleshooting

### Common Issues

**"API key not configured" error**
- Ensure `.env.local` file is in the root directory
- Verify your API key is correct
- Restart the development server after adding environment variables

**"Failed to identify plant" error**
- Check your internet connection
- Verify the uploaded image is a valid format
- Ensure your API key has sufficient quota

**Model deprecation errors**
- The app uses `gemini-1.5-flash` (current model)
- If you encounter deprecation errors, check the code uses the latest model

### Debug Mode

Enable detailed logging by checking the browser console and server terminal for:
- API request/response details
- Error messages and stack traces
- Network request information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `GEMINI_API_KEY` to environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- Docker

Remember to set the `GEMINI_API_KEY` environment variable in your deployment platform.

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components
- Customize the color scheme in `tailwind.config.js`

### AI Prompts
- Edit the prompt in `app/api/identify-plant/route.js`
- Adjust the model parameters for different responses
- Add additional context or formatting instructions

## 📈 Future Enhancements

- [ ] Plant identification history
- [ ] Favorite plants feature
- [ ] Detailed care guides
- [ ] Plant health assessment
- [ ] Social sharing capabilities
- [ ] Multiple language support
- [ ] Plant disease identification
- [ ] Offline mode with cached results

## 🤖 Development Prompt

This project was built using AI assistance. Here's the prompt used:

```
Create a plant identifier website in next js 14 using the app directory and no src folder. As soon as the website loads, the user should be given the option to upload an image of a plant. And the website should show the name and other improtant informations on the screen. As for identifying the plants, you can use the Google gemini API. Also make sure to style the website in a modern way using tailwind css

Key Requirements:
Next.js 14 with App Router (no src folder)
Google Gemini for plant identification
Secure API routes for handling API keys
Modern UI with Tailwind CSS
Image upload with real-time results
Comprehensive error handling

Environment:
GEMINI_API_KEY=your_api_key_here

Features:
Upload plant images
AI-powered identification
Display plant names, care instructions, and facts
Mobile-responsive design
Professional error handling
```

Feel free to use this as a template for similar projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google AI Studio for providing the Gemini API
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and support

## 📞 Contact

Rabib Ahmad - [@rabibsust](https://twitter.com/rabibsust)

Project Link: [https://github.com/rabibsust/plant-identifier](https://github.com/rabibsust/plant-identifier)

---

⭐ If you found this project helpful, please give it a star!
