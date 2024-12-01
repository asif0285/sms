import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/messages', (req, res) => {
  const { phoneNumber, text } = req.body;
  
  // Here you would typically integrate with an SMS service
  // For now, we'll just log the message
  console.log('Message received:', { phoneNumber, text });
  
  // Simulate processing time
  setTimeout(() => {
    res.status(200).json({ message: 'Message sent successfully' });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});