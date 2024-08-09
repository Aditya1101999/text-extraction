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

    Please extract the following details:
    - Customer Details
    - Products
    - Total Amount

    Provide the data in JSON format.
    """
    
    # Use the appropriate method to generate content
    response = genai.generate_text(model="gemini-1.5-flash", prompt=prompt)
    
    # Extract the text response
    details_json = response.result
    print(details_json)

def main():
    # Load the PDF file and extract text
    with pdfplumber.open("invoice.pdf") as pdf:
        first_page = pdf.pages[0]
        invoice_text = first_page.extract_text()

    print("Extracted Text:", invoice_text)

    # Pass the extracted text to the function to get the details
    give_details(invoice_text)

if __name__ == "__main__":
    main()
