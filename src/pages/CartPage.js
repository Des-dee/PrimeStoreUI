import React from 'react';
import { Link } from 'react-router-dom';
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

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  color: #333;
  font-size: 1.1rem;
`;

const ItemCategory = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

const ItemPrice = styled.span`
  color: #6C5CE7;
  font-weight: 700;
  font-size: 1.1rem;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 4px;

  button {
    background: none;
    cursor: pointer;
    color: #6C5CE7;
    font-weight: bold;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e8e8e8;
      border-radius: 2px;
    }
  }

  span {
    min-width: 30px;
    text-align: center;
  }
`;

const RemoveBtn = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
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

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;

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

const CheckoutBtn = styled(Link)`
  display: block;
  width: 100%;
  background-color: #6C5CE7;
  color: white;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5A4ABF;
    transform: translateY(-2px);
  }
`;

const ContinueShoppingBtn = styled(Link)`
  display: block;
  width: 100%;
  background-color: white;
  color: #6C5CE7;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: 700;
  border: 2px solid #6C5CE7;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <Title>🛒 Shopping Cart</Title>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Start shopping by browsing our products!</p>
          <Link to="/products" style={{ color: '#6C5CE7', fontWeight: '600' }}>
            Continue Shopping
          </Link>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <Title>🛒 Shopping Cart</Title>

      <Content>
        <CartItems>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              </ItemDetails>
              <ItemActions>
                <QuantityControl>
                  <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>−</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                </QuantityControl>
                <RemoveBtn onClick={() => removeFromCart(item.id)}>Remove</RemoveBtn>
              </ItemActions>
            </CartItem>
          ))}
        </CartItems>

        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryRow>
            <strong>Subtotal:</strong>
            <span>${totalPrice.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <strong>Discount:</strong>
            <span>-$0.00</span>
          </SummaryRow>
          <SummaryRow>
            <strong>Tax:</strong>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </SummaryRow>
          <TotalRow>
            <strong>Total:</strong>
            <span>${(totalPrice + totalPrice * 0.08).toFixed(2)}</span>
          </TotalRow>
          <CheckoutBtn to="/checkout">Proceed to Checkout</CheckoutBtn>
          <ContinueShoppingBtn to="/products">Continue Shopping</ContinueShoppingBtn>
        </Summary>
      </Content>
    </Container>
  );
};

export default CartPage;
