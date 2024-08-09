# Invoice Details Extractor

This project is a Python-based tool that extracts key information from invoice PDFs using Google Gemini API. It extracts customer details, product information, and the total amount from the invoice.

## Features

- **PDF Text Extraction:** Extracts text from PDF files using pdfplumber.
- **Google Gemini API Integration:** Processes the extracted text to extract specific details such as customer information, product details, and total amount.
- **JSON Output:** The tool provides the extracted details in both text and JSON formats.

## Requirements

- Python 3.7+
- The following Python packages:
  - `pdfplumber`
  - `google-generativeai`
  - `python-dotenv`

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine and navigate into the project directory:

```bash
git https://github.com/Aditya1101999/text-extraction.git
```

### 2. Install Dependencies

Ensure you have Python installed on your system. Then, install the required Python packages by running:

```bash
pip install -r requirements.txt
```

This command will install all the necessary dependencies listed in the `requirements.txt` file.

### 3. Set Up Environment Variables

Next, create a `.env` file in the root directory of the project and add your Google Gemini API key:

```bash
echo "GEMNAI_API_KEY=your-google-gemini-api-key" > .env
```

Make sure to replace `your-google-gemini-api-key` with your actual API key. This file will store your sensitive environment variables.

Refer to the `.env.example` file for an example of how to structure your environment variables.

### 4. Running the Script

Place the invoice PDF you want to process in the project directory. Then, run the script using the following command:

```bash
python main.py
```

This script will extract text from the PDF and use the Google Gemini API to retrieve the desired details, such as customer information, products, and the total amount.
