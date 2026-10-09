import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as apiRouter } from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Log incoming API requests
app.use((req, _res, next) => {
  console.log(`[CAREERSAATHI API] ${req.method} ${req.path}`);
  next();
});

// Root API Status Endpoint
app.get('/', (_req, res) => {
  res.json({
    brand: 'CAREERSAATHI',
    tagline: 'Sahi Career, Saath Parivaar Ka.',
    description: 'AI-Powered Family Career Counselling Platform for Vocational Education',
    status: 'ONLINE',
    version: '1.0.0',
    demoDataset: 'NCVET & NSDC Aligned',
    docs: '/api/admin/analytics'
  });
});

// Mount unified REST Router under /api
app.use('/api', apiRouter);

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'HEALTHY', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 CAREERSAATHI BACKEND RUNNING ON http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
