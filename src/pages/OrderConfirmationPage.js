import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 20px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const OrderNumber = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  border-left: 4px solid #6C5CE7;

  p {
    color: #999;
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
  }

  .order-id {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6C5CE7;
    margin: 0;
  }
`;

const Details = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  text-align: left;

  h3 {
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #6C5CE7;
    padding-bottom: 0.5rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  color: #666;

  strong {
    color: #333;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
`;

const PrimaryBtn = styled(Button)`
  background-color: #6C5CE7;
  color: white;

  &:hover {
    background-color: #5A4ABF;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled(Button)`
  background-color: white;
  color: #6C5CE7;
  border: 2px solid #6C5CE7;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const OrderConfirmationPage = () => {
  const orderNumber = `ORD-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString();

  return (
    <Container>
      <Content>
        <Icon>🎉</Icon>
        <Title>Order Confirmed!</Title>
        <Message>
          Thank you for your purchase! Your digital products are ready to download.
        </Message>

        <OrderNumber>
          <p>Order Number</p>
          <div className="order-id">{orderNumber}</div>
          <p>A confirmation email has been sent to your inbox</p>
        </OrderNumber>

        <Details>
          <h3>Order Details</h3>
          <DetailItem>
            <strong>Order Date:</strong>
            <span>{currentDate}</span>
          </DetailItem>
          <DetailItem>
            <strong>Status:</strong>
            <span style={{ color: '#27ae60', fontWeight: '600' }}>✓ Completed</span>
          </DetailItem>
          <DetailItem>
            <strong>Downloads:</strong>
            <span>Available for 1 year</span>
          </DetailItem>
          <DetailItem>
            <strong>Support:</strong>
            <span>30 days included</span>
          </DetailItem>
        </Details>

        <Details>
          <h3>What's Next?</h3>
          <DetailItem style={{ flexDirection: 'column', border: 'none', padding: '0.5rem 0' }}>
            <span>✓ Check your email for download links</span>
          </DetailItem>
          <DetailItem style={{ flexDirection: 'column', border: 'none', padding: '0.5rem 0' }}>
            <span>✓ Log in to your account to access downloads anytime</span>
          </DetailItem>
          <DetailItem style={{ flexDirection: 'column', border: 'none', padding: '0.5rem 0' }}>
            <span>✓ You can also request a refund within 30 days if needed</span>
          </DetailItem>
        </Details>

        <ButtonGroup>
          <PrimaryBtn to="/products">Browse More Products</PrimaryBtn>
          <SecondaryBtn to="/">Return to Home</SecondaryBtn>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default OrderConfirmationPage;
