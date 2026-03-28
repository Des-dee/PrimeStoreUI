const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes

// Payment Processing Endpoint
app.post('/api/process-payment', (req, res) => {
  const { paymentMethod, amount, email } = req.body;

  // Simulate payment processing
  console.log(`Processing ${paymentMethod} payment for $${amount} from ${email}`);

  // In production, you would integrate with actual payment processors
  // like Stripe, PayPal, etc.

  res.json({
    success: true,
    message: 'Payment processed successfully',
    transactionId: `TXN-${Date.now()}`,
    amount: amount,
    paymentMethod: paymentMethod
  });
});

// Order Endpoint
app.post('/api/orders', (req, res) => {
  const { items, customerEmail, totalAmount } = req.body;

  console.log('Creating order for:', customerEmail);
  console.log('Items:', items);

  res.json({
    success: true,
    orderId: `ORD-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
    status: 'completed',
    customerEmail: customerEmail,
    totalAmount: totalAmount,
    downloadLinks: items.map(item => ({
      productId: item.id,
      productName: item.name,
      downloadUrl: `/downloads/${item.id}`
    }))
  });
});

// Products Endpoint (for future API integration with database)
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    message: 'Products fetched successfully'
  });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Catch-all for frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
