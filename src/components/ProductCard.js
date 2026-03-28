import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductCategory = styled.span`
  color: #6C5CE7;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.5;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Stars = styled.span`
  color: #f39c12;
`;

const Reviews = styled.span`
  color: #999;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6C5CE7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  flex: 1;
`;

const ViewBtn = styled(Button)`
  background-color: #6C5CE7;
  color: white;

  &:hover {
    background-color: #5A4ABF;
  }
`;

const AddCartBtn = styled(Button)`
  background-color: #fff;
  color: #6C5CE7;
  border: 2px solid #6C5CE7;

  &:hover {
    background-color: #6C5CE7;
    color: white;
  }
`;

const ProductCard = ({ product, onView, onAddToCart }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductContent>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <RatingContainer>
          <Stars>⭐ {product.rating}</Stars>
          <Reviews>({product.reviews} reviews)</Reviews>
        </RatingContainer>
        <PriceContainer>
          <Price>${product.price.toFixed(2)}</Price>
        </PriceContainer>
        <ButtonGroup>
          <ViewBtn onClick={() => onView(product.id)}>View</ViewBtn>
          <AddCartBtn onClick={() => onAddToCart(product)}>Add to Cart</AddCartBtn>
        </ButtonGroup>
      </ProductContent>
    </ProductCardContainer>
  );
};

export default ProductCard;
