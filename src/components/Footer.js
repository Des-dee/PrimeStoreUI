import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #262f2f;
  color: #fff;
  padding: 3rem 20px 1rem;
  margin-top: 5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #6C5CE7;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: #bbb;
      transition: color 0.3s ease;

      &:hover {
        color: #6C5CE7;
      }
    }
  }

  p {
    color: #bbb;
    line-height: 1.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #6C5CE7;
    border-radius: 50%;
    color: white;
    transition: background-color 0.3s ease;
    font-size: 1.2rem;

    &:hover {
      background-color: #5A4ABF;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #444;
  padding-top: 1rem;
  text-align: center;
  color: #999;

  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About PrimeStore</h3>
          <p>
            Your trusted marketplace for premium digital products. From courses to templates, we offer the best resources for your growth.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/contact">Help Center</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Connect With Us</h3>
          <p>Follow us on social media for updates and exclusive offers.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2026 PrimeStore. All rights reserved. | Made with ❤️ by PrimeStore Team</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
