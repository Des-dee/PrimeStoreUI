import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../utils/CartContext';

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #6C5CE7;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #5A4ABF;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #6C5CE7;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #6C5CE7;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const CartIcon = styled(Link)`
  position: relative;
  color: #6C5CE7;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${props => props.active && `display: flex;`}

  @media (max-width: 768px) {
    display: ${props => props.active ? 'flex' : 'none'};
  }
`;

const Navigation = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          ✨ PrimeStore
        </Logo>

        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <CartIcon to="/cart">
            🛒
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </CartIcon>
        </NavMenu>

        <MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuBtn>

        <MobileMenu active={mobileMenuOpen}>
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMobileMenuOpen(false)}>Products</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          <CartIcon to="/cart" onClick={() => setMobileMenuOpen(false)}>
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </CartIcon>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
