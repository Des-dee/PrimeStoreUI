import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';
import { useCart } from '../utils/CartContext';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
  min-height: 80vh;
`;

const BackLink = styled(Link)`
  color: #6C5CE7;
  font-weight: 600;
  margin-bottom: 2rem;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: #5A4ABF;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding-bottom: 60%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Category = styled.span`
  color: #6C5CE7;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #333;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  .stars {
    color: #f39c12;
    font-size: 1.3rem;
  }

  .reviews {
    color: #666;
  }
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6C5CE7;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
`;

const SpecsContainer = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #6C5CE7;
`;

const SpecsTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const Spec = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid #ddd;
  color: #666;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddCartButton = styled.button`
  flex: 1;
  background-color: #6C5CE7;
  color: white;
  padding: 15px 30px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #5A4ABF;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const WishlistButton = styled.button`
  padding: 15px 30px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: white;
  color: #6C5CE7;
  border: 2px solid #6C5CE7;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #6C5CE7;
    color: white;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;

  h2 {
    margin-bottom: 1rem;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
  margin-top: 1rem;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(false);

  if (!product) {
    return (
      <Container>
        <BackLink to="/products">← Back to Products</BackLink>
        <NotFound>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" style={{ color: '#6C5CE7', fontWeight: '600' }}>
            Browse all products
          </Link>
        </NotFound>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <Container>
      <BackLink to="/products">← Back to Products</BackLink>

      <Content>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ImageContainer>

        <Details>
          <Category>{product.category}</Category>
          <Title>{product.name}</Title>

          <Rating>
            <span className="stars">⭐ {product.rating}</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </Rating>

          <Price>${product.price.toFixed(2)}</Price>

          <Description>{product.longDescription}</Description>

          <SpecsContainer>
            <SpecsTitle>📋 Specifications</SpecsTitle>
            <Spec>
              <strong>Format:</strong>
              <span>{product.format}</span>
            </Spec>
            <Spec>
              <strong>Download Size:</strong>
              <span>{product.downloadSize}</span>
            </Spec>
            <Spec>
              <strong>Instant Download:</strong>
              <span>✓ Yes</span>
            </Spec>
            <Spec>
              <strong>Support:</strong>
              <span>30 days</span>
            </Spec>
          </SpecsContainer>

          <ButtonContainer>
            <AddCartButton onClick={handleAddToCart}>
              🛒 Add to Cart
            </AddCartButton>
            <WishlistButton>❤️ Wishlist</WishlistButton>
          </ButtonContainer>

          {addedToCart && (
            <SuccessMessage>
              ✓ Product added to cart successfully!
            </SuccessMessage>
          )}
        </Details>
      </Content>
    </Container>
  );
};

export default ProductDetailPage;
