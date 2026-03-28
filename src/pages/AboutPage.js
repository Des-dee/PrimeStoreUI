import React from 'react';
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #6C5CE7;
  padding-bottom: 0.5rem;
`;

const Content = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const MemberName = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #6C5CE7;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const MemberDesc = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #6C5CE7;
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ValueTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
`;

const ValueDesc = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const AboutPage = () => {
  return (
    <Container>
      <Title>📖 About PrimeStore</Title>

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <Content>
          PrimeStore was founded in 2020 with a simple mission: to make quality digital products accessible to everyone. We started as a small team of digital enthusiasts who believed that great content shouldn't be locked behind expensive paywalls or complicated processes.
        </Content>
        <Content>
          Today, we've grown to serve thousands of customers worldwide. Our platform hosts premium courses, design templates, plugins, e-books, and other digital products from talented creators and professionals. We're committed to maintaining the highest standards of quality while keeping our platform user-friendly and accessible.
        </Content>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Content>
          We believe in democratizing digital education and resources. Our mission is to:
        </Content>
        <ul style={{ marginLeft: '2rem', color: '#666', lineHeight: '1.8' }}>
          <li>Provide access to high-quality digital products at fair prices</li>
          <li>Support creators by offering them a platform to share their work</li>
          <li>Create a community where learning and growth are celebrated</li>
          <li>Ensure every transaction is secure, transparent, and hassle-free</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <Values>
          <ValueCard>
            <ValueIcon>🌟</ValueIcon>
            <ValueTitle>Quality</ValueTitle>
            <ValueDesc>We only feature products that meet our high quality standards.</ValueDesc>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Trust</ValueTitle>
            <ValueDesc>Your data security and satisfaction are our top priorities.</ValueDesc>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🚀</ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDesc>We continuously improve our platform and services.</ValueDesc>
          </ValueCard>
          <ValueCard>
            <ValueIcon>💡</ValueIcon>
            <ValueTitle>Empowerment</ValueTitle>
            <ValueDesc>We empower creators and learners to achieve their goals.</ValueDesc>
          </ValueCard>
        </Values>
      </Section>

      <Section>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <Avatar>👨‍💼</Avatar>
            <MemberName>John Smith</MemberName>
            <MemberRole>Founder & CEO</MemberRole>
            <MemberDesc>Visionary leader with 15 years of experience in digital business.</MemberDesc>
          </TeamMember>
          <TeamMember>
            <Avatar>👩‍💻</Avatar>
            <MemberName>Sarah Johnson</MemberName>
            <MemberRole>Head of Technology</MemberRole>
            <MemberDesc>Tech expert ensuring our platform is fast, secure, and scalable.</MemberDesc>
          </TeamMember>
          <TeamMember>
            <Avatar>👩‍📊</Avatar>
            <MemberName>Emily Chen</MemberName>
            <MemberRole>Community Manager</MemberRole>
            <MemberDesc>Passionate about building connections between creators and learners.</MemberDesc>
          </TeamMember>
          <TeamMember>
            <Avatar>👨‍🎨</Avatar>
            <MemberName>Michael Rodriguez</MemberName>
            <MemberRole>Lead Designer</MemberRole>
            <MemberDesc>Creating beautiful experiences that users love to interact with.</MemberDesc>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section>
        <SectionTitle>Why Choose PrimeStore?</SectionTitle>
        <Content>
          ✅ Instant Downloads - Get your products right away<br />
          ✅ Secure Payments - Industry-leading security standards<br />
          ✅ Lifetime Access - Permanent access to your purchases<br />
          ✅ 30-Day Refund - Full refund guarantee if unsatisfied<br />
          ✅ Expert Support - Our team is here to help<br />
          ✅ Curated Products - Only the best content makes it to our store
        </Content>
      </Section>
    </Container>
  );
};

export default AboutPage;
