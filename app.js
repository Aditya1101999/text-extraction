const express = require('express');
const multer = require('multer');
const { extractTextFromPDF, extractTextFromImage, giveDetails } = require('./textExtraction');
require('dotenv').config();

const app = express();

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.fields([{ name: 'pdf' }, { name: 'image' }]), async (req, res) => {
    try {
        let pdfText = '';
        let imageText = '';
        
        if (req.files['pdf']) {
            const pdfPath = req.files['pdf'][0].path;
            pdfText = await extractTextFromPDF(pdfPath);
        }
        
        if (req.files['image']) {
            const imagePath = req.files['image'][0].path;
            imageText = await extractTextFromImage(imagePath);
        }
        
        let pdfDetails = {};
        let imageDetails = {};

        if (pdfText) {
            pdfDetails = await giveDetails(pdfText);
        }

        if (imageText) {
            imageDetails = await giveDetails(imageText);
        }

        res.json({
            pdfText,
            imageText,
            pdfDetails,
            imageDetails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.listen(3000)

module.exports = app