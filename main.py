import os
import google.generativeai as genai
import pdfplumber

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()

# Set the Google Gemini API key
genai.configure(api_key=os.getenv("GEMNAI_API_KEY"))

def give_details(text):
    prompt = f"""
    You are an expert in extracting information from invoices.
    Here is the invoice text:

    {text}

    Please extract the following details only:
    - Customer Details
    - Products
    - Total Amount

    """
    
    # Use the appropriate method to generate content
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt).text

    # Extract the text response
    print(response)

def main():
    # Load the PDF file and extract text
    with pdfplumber.open("Invoice.pdf") as pdf:
        first_page = pdf.pages[0]
        invoice_text = first_page.extract_text()

    # Pass the extracted text to the function to get the details
    give_details(invoice_text)

if __name__ == "__main__":
    main()