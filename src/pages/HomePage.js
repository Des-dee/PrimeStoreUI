import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../utils/CartContext';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #667eea;
  padding: 14px 40px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturesSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const FeatureDesc = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ProductsSection = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ViewAllBtn = styled(Link)`
  display: block;
  width: 200px;
  margin: 2rem auto;
  padding: 12px;
  background-color: #6C5CE7;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5A4ABF;
    transform: translateY(-2px);
  }
`;

const HomePage = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  const handleView = (productId) => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>✨ Welcome to PrimeStore</HeroTitle>
          <HeroSubtitle>
            Discover premium digital products to enhance your skills and creativity
          </HeroSubtitle>
          <CTAButton to="/products">Browse Products</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>📥</FeatureIcon>
          <FeatureTitle>Instant Download</FeatureTitle>
          <FeatureDesc>Get your products immediately after purchase. No waiting, just download and start.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>100% Secure</FeatureTitle>
          <FeatureDesc>Your payments and data are protected with industry-leading security standards.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>💬</FeatureIcon>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <FeatureDesc>Our dedicated support team is always ready to help you with any questions.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>⭐</FeatureIcon>
          <FeatureTitle>Premium Quality</FeatureTitle>
          <FeatureDesc>All products are carefully curated and reviewed by our expert team.</FeatureDesc>
        </FeatureCard>
      </FeaturesSection>

      <ProductsSection>
        <SectionTitle>Featured Products</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleView}
              onAddToCart={addToCart}
            />
          ))}
        </ProductsGrid>
        <ViewAllBtn to="/products">View All Products</ViewAllBtn>
      </ProductsSection>
    </PageContainer>
  );
};

export default HomePage;
