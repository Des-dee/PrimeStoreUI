import React, { useState } from 'react';
import styled from 'styled-components';
import { faqItems } from '../data/products';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 20px;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const SearchBox = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
    box-shadow: 0 0 10px rgba(108, 92, 231, 0.2);
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
    color: #6C5CE7;
  }

  &:active {
    transform: scale(0.99);
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0)'};
`;

const FAQAnswer = styled.div`
  max-height: ${props => props.open ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #f8f9fa;
`;

const AnswerContent = styled.p`
  padding: 1.5rem;
  color: #666;
  line-height: 1.8;
  margin: 0;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #999;

  h3 {
    margin-bottom: 0.5rem;
    color: #666;
  }
`;

const FAQPage = () => {
  const [openNumber, setOpenNumber] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>❓ Frequently Asked Questions</Title>
      <Subtitle>Find answers to common questions about PrimeStore</Subtitle>

      <SearchBox>
        <SearchInput
          type="text"
          placeholder="Search FAQ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBox>

      {filteredFAQs.length > 0 ? (
        <FAQList>
          {filteredFAQs.map((item) => (
            <FAQItem key={item.id}>
              <FAQQuestion onClick={() => setOpenNumber(openNumber === item.id ? null : item.id)}>
                <span>{item.question}</span>
                <Icon open={openNumber === item.id}>▼</Icon>
              </FAQQuestion>
              <FAQAnswer open={openNumber === item.id}>
                <AnswerContent>{item.answer}</AnswerContent>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      ) : (
        <NoResults>
          <h3>No Results Found</h3>
          <p>Try searching with different keywords</p>
        </NoResults>
      )}
    </Container>
  );
};

export default FAQPage;
