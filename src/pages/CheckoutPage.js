import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../utils/CartContext';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #6C5CE7;
    padding-bottom: 0.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
    box-shadow: 0 0 5px rgba(108, 92, 231, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? '#f8f9fa' : 'transparent'};
  border-color: ${props => props.selected ? '#6C5CE7' : '#ddd'};

  &:hover {
    border-color: #6C5CE7;
  }

  input {
    margin-right: 1rem;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
  }
`;

const PaymentIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Summary = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: 968px) {
    position: static;
    top: auto;
  }
`;

const SummaryTitle = styled.h3`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  border-bottom: 2px solid #6C5CE7;
  padding-bottom: 0.5rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  color: #666;

  &:last-child {
    border-bottom: none;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  color: #666;

  strong {
    color: #333;
  }
`;

const TotalRow = styled(SummaryRow)`
  border-top: 2px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #6C5CE7;

  strong {
    color: #6C5CE7;
  }
`;

const CompleteBtn = styled.button`
  width: 100%;
  background-color: #6C5CE7;
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5A4ABF;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const CheckoutPage = () => {
  const history = useHistory();
  const { cartItems, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate payment processing
    clearCart();
    history.push('/order-confirmation');
  };

  const total = totalPrice + (totalPrice * 0.08);

  if (cartItems.length === 0) {
    return (
      <Container>
        <Title>Checkout</Title>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>Your cart is empty. Please add items before checking out.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Title>🛍️ Checkout</Title>

      <Content>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <h3>Billing Information</h3>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="address">Street Address *</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="city">City *</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
          </FormSection>

          <FormSection>
            <h3>Payment Method</h3>
            <PaymentMethods>
              <PaymentOption selected={paymentMethod === 'card'}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <PaymentIcon>💳</PaymentIcon>
                <span>Credit/Debit Card</span>
              </PaymentOption>

              <PaymentOption selected={paymentMethod === 'paypal'}>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <PaymentIcon>🅿️</PaymentIcon>
                <span>PayPal</span>
              </PaymentOption>

              <PaymentOption selected={paymentMethod === 'apple'}>
                <input
                  type="radio"
                  name="payment"
                  value="apple"
                  checked={paymentMethod === 'apple'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <PaymentIcon>🍎</PaymentIcon>
                <span>Apple Pay</span>
              </PaymentOption>

              <PaymentOption selected={paymentMethod === 'google'}>
                <input
                  type="radio"
                  name="payment"
                  value="google"
                  checked={paymentMethod === 'google'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <PaymentIcon>🔵</PaymentIcon>
                <span>Google Pay</span>
              </PaymentOption>
            </PaymentMethods>
          </FormSection>

          {paymentMethod === 'card' && (
            <FormSection>
              <h3>Card Details</h3>
              <FormGroup>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </FormGroup>
              </FormRow>
            </FormSection>
          )}
        </Form>

        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          {cartItems.map(item => (
            <OrderItem key={item.id}>
              <span>{item.name} x{item.quantity || 1}</span>
              <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </OrderItem>
          ))}
          <SummaryRow style={{ marginTop: '1rem' }}>
            <strong>Subtotal:</strong>
            <span>${totalPrice.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <strong>Tax:</strong>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </SummaryRow>
          <TotalRow>
            <strong>Total:</strong>
            <span>${total.toFixed(2)}</span>
          </TotalRow>
          <CompleteBtn onClick={handleSubmit}>Complete Purchase 🎉</CompleteBtn>
        </Summary>
      </Content>
    </Container>
  );
};

export default CheckoutPage;
