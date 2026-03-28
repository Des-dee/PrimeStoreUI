import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
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
  grid-template-columns: 250px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FilterSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  border-bottom: 2px solid #6C5CE7;
  padding-bottom: 0.5rem;
`;

const CategoryList = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.8rem;

  button {
    background: none;
    border: none;
    color: ${props => props.active ? '#6C5CE7' : '#666'};
    font-weight: ${props => props.active ? '600' : '500'};
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;

    &:hover {
      color: #6C5CE7;
      padding-left: 5px;
    }
  }
`;

const PriceFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: #6C5CE7;
      box-shadow: 0 0 5px rgba(108, 92, 231, 0.2);
    }
  }
`;

const MainContent = styled.div``;

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SortSelect = styled.select`
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
  }
`;

const ProductCount = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const ClearFiltersBtn = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ProductsPage = () => {
  const history = useHistory();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('newest');

  let filteredProducts = products;

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      p => p.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.toLowerCase()
    );
  }

  // Filter by price
  filteredProducts = filteredProducts.filter(
    p => p.price >= priceRange.min && p.price <= priceRange.max
  );

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'popular') {
    filteredProducts.sort((a, b) => b.reviews - a.reviews);
  }

  const handleView = (productId) => {
    history.push(`/product/${productId}`);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange({ min: 0, max: 1000 });
    setSortBy('newest');
  };

  return (
    <Container>
      <Title>🛍️ Our Products</Title>

      <Content>
        <Sidebar>
          <FilterSection>
            <FilterTitle>Categories</FilterTitle>
            <CategoryList>
              {categories.map(cat => (
                <CategoryItem key={cat.id} active={selectedCategory === cat.slug}>
                  <button onClick={() => setSelectedCategory(cat.slug)}>
                    {cat.name}
                  </button>
                </CategoryItem>
              ))}
            </CategoryList>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Price Range</FilterTitle>
            <PriceFilter>
              <label>
                Min: ${priceRange.min}
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({
                    ...priceRange,
                    min: parseInt(e.target.value)
                  })}
                />
              </label>
              <label>
                Max: ${priceRange.max}
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value)
                  })}
                />
              </label>
            </PriceFilter>
          </FilterSection>

          {(selectedCategory !== 'all' || priceRange.min > 0 || priceRange.max < 1000) && (
            <ClearFiltersBtn onClick={handleClearFilters}>
              Clear Filters
            </ClearFiltersBtn>
          )}
        </Sidebar>

        <MainContent>
          <SortContainer>
            <ProductCount>
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </ProductCount>
            <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </SortSelect>
          </SortContainer>

          {filteredProducts.length > 0 ? (
            <ProductsGrid>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={handleView}
                  onAddToCart={addToCart}
                />
              ))}
            </ProductsGrid>
          ) : (
            <NoProducts>
              <h3>No Products Found</h3>
              <p>Try adjusting your filters or browsing all products.</p>
            </NoProducts>
          )}
        </MainContent>
      </Content>
    </Container>
  );
};

export default ProductsPage;
