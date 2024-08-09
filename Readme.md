# Invoice Details Extractor

This project is a Node.js-based tool that extracts key information from invoice PDFs and images. It uses the Google Gemini API to extract customer details, product information, and the total amount from the invoice.

## Features

- **PDF Text Extraction:** Extracts text from PDF files using the `pdf-parse` library.
- **Image Text Extraction:** Extracts text from images using the `tesseract.js` library.
- **Google Gemini API Integration:** Processes the extracted text to extract specific details such as customer information, product details, and total amount.
- **JSON Output:** Provides the extracted details in a structured JSON format.

## Requirements

- Node.js 16+
- The following Node.js packages:
  - `pdf-parse`
  - `tesseract.js`
  - `@google/generative-ai`
  - `dotenv`
  - `express`
  - `multer`
  - `fs`

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/Aditya1101999/text-extraction.git
cd text-extraction
```

### 2. Install Dependencies

Ensure you have Node.js installed on your system. Then, install the required Node.js packages by running:

```bash
npm install
```

This command will install all the necessary dependencies listed in the `package.json` file.

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add your Google Gemini API key:

```bash
echo "GEMNAI_API_KEY=your-google-gemini-api-key" > .env
```

Make sure to replace `your-google-gemini-api-key` with your actual API key. This file will store your sensitive environment variables.

Refer to the `.env.example` file for an example of how to structure your environment variables.

### 4. Running the Application

To start the server, run the following command:

```bash
node app.js
```

This will start the server on `http://localhost:3000`. You can then open your browser and navigate to this URL to interact with the application.

### 5. Using the Application

1. Open your browser and go to `http://localhost:3000`.
2. Use the form to upload a PDF or image file containing invoice information.
3. Click "Upload and Extract" to process the file.
4. The extracted details will be displayed on the page in both text and JSON formats.

### 6. Styling

The project includes a `styles.css` file for styling the HTML interface. Ensure this file is located in the `public` directory.