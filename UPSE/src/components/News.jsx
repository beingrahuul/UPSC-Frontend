import {useState} from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const ContextContent = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ddd;
  line-height: 1.6;
`;

const HighlightsList = styled.ul`
  font-size: 16px;
  font-weight: 400;
  color: #ddd;
  padding-left: 20px;
  margin: 0;

  li {
    margin-bottom: 12px;
    line-height: 1.6;

    a {
      color: #4A7AFF;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const News = ({news}) => {


  return (
    <NewsContainer>
      <Title>
        Practising Equality in Constitutional Courts, Pg 8
      </Title>

      <Section>
        <Heading>Context</Heading>
        <ContextContent>
          The Supreme Court’s recent ruling in <strong>Jitender @ Kalla vs State (Govt.) of NCT Of Delhi (2025)</strong> revisited the criteria for designating senior advocates — a long-debated system that continues to raise concerns about systemic elitism in India’s legal fraternity.
        </ContextContent>
      </Section>

      <Section>
        <Heading>Key Highlights</Heading>
        <HighlightsList>
          <li>
            The Supreme Court upheld <a href="#">Section 16 of the Advocates Act, 1961</a>, maintaining the classification between senior advocates and advocates.
          </li>
          <li>
            While acknowledging subjectivity in the point-based designation system, the Court opted to retain the current application process with minor procedural reforms.
          </li>
        </HighlightsList>
      </Section>
    </NewsContainer>
  );
};

export default News;
