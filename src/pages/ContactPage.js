import React, { useState } from 'react';
import styled from 'styled-components';

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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #6C5CE7;
`;

const InfoIcon = styled.span`
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

const InfoTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const InfoContent = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
    box-shadow: 0 0 5px rgba(108, 92, 231, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6C5CE7;
    box-shadow: 0 0 5px rgba(108, 92, 231, 0.2);
  }
`;

const SubmitBtn = styled.button`
  background-color: #6C5CE7;
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
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

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
  text-align: center;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <Title>📞 Contact Us</Title>

      <Content>
        <ContactInfo>
          <InfoCard>
            <InfoTitle>
              <InfoIcon>📧</InfoIcon>
              Email Support
            </InfoTitle>
            <InfoContent>
              support@primestore.com<br />
              sales@primestore.com<br />
              <small>Response time: Within 24 hours</small>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoTitle>
              <InfoIcon>📱</InfoIcon>
              Phone Support
            </InfoTitle>
            <InfoContent>
              +1 (555) 123-4567<br />
              +1 (555) 123-4568<br />
              <small>Monday - Friday: 9 AM - 6 PM EST</small>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoTitle>
              <InfoIcon>💬</InfoIcon>
              Live Chat
            </InfoTitle>
            <InfoContent>
              Available on our website<br />
              Monday - Friday: 10 AM - 5 PM EST<br />
              <small>Average response time: 2 minutes</small>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoTitle>
              <InfoIcon>📍</InfoIcon>
              Office Address
            </InfoTitle>
            <InfoContent>
              PrimeStore Inc.<br />
              123 Digital Street<br />
              San Francisco, CA 94105<br />
              United States
            </InfoContent>
          </InfoCard>
        </ContactInfo>

        <Form onSubmit={handleSubmit}>
          <h2 style={{ color: '#333', marginTop: 0 }}>Send us a Message</h2>

          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

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
            <Label htmlFor="subject">Subject *</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {submitted && (
            <SuccessMessage>
              ✓ Your message has been sent successfully! We'll get back to you soon.
            </SuccessMessage>
          )}

          <SubmitBtn type="submit">Send Message</SubmitBtn>
        </Form>
      </Content>
    </Container>
  );
};

export default ContactPage;
