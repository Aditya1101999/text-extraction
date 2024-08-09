const fs = require('fs');
const pdf = require('pdf-parse');
const Tesseract = require('tesseract.js');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const giveDetails = async (text) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMNAI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        You are an expert in extracting information from invoices.
        Here is the invoice text:

        ${text}

        Please extract the following details:
        - Customer Details
        - Products
        - Total Amount
        - Provide the details in JSON format only.
        `;

        const result = await model.generateContent(prompt);
        const extractedText = result.response.text();

        const formattedText = extractedText.replace(/## Extracted Information:\n\n/, '')
            .replace(/\*\*Text Format:\*\*\n\n/, '')
            .replace(/\*\*Customer Details:\*\*\n\n/, 'Customer Details:\n')
            .replace(/\*\*Products:\*\*\n\n/, 'Products:\n')
            .replace(/\*\*Total Amount:\*\*\n\n/, 'Total Amount:\n')
            .replace(/\*\*JSON Format:\*\*\n\n```json\n/, '')
            .replace(/```$/, '')
            .trim();

        return formattedText;
    } catch (error) {
        console.error('Error extracting details from text:', error.message);
        throw error;
    }
};


const extractTextFromPDF = async (pdfPath) => {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return data.text;
}

const extractTextFromImage = async (imagePath) => {
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
    return text;
}

module.exports = { extractTextFromPDF, extractTextFromImage, giveDetails };
