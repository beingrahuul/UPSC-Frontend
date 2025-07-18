import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

// Components

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 36px;
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

const HTMLContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ddd;
  line-height: 1.6;

  h3, h2 {
    color: #fff;
    font-weight: 600;
    margin: 20px 0;
  }

  ol, ul {
    padding-left: 20px;
    margin: 12px 0;
  }

  li {
    margin-bottom: 12px;
  }

  strong {
    color: #fff;
  }

  br {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: #4A7AFF;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

const ExpandableSection = styled.div`
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? 'auto' : '0')};
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  transition: all 0.5s ease;
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid #4A7AFF;
  color: #4A7AFF;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
  margin-top: 8px;

  &:hover {
    background-color: #4A7AFF;
    color: #fff;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 16px;
  padding: 16px;
  margin-top: -16px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 225, 255, 0.2);
    border-radius: 4px;
  }

  img {
    flex-shrink: 0;
    border-radius: 12px;
    height: auto;
    max-width: 400px;
    height: auto;
    object-fit: cover;
    max-height: 300px;
    width: auto;
    object-fit: contain;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const TagSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: -8px;
`;

const Button = styled.div`
  display: flex;
  background-color: rgba(25, 90, 255, 0.16);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 8px;
`;

const ButtonText = styled.h1`
  font-size: 13px;
  font-weight: 500;
  color: #6A94FF;
  margin: 0;
`;



const News = ({ newsData }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  console.log(newsData);

  const { section1, section2, section3 } = useMemo(() => {
    const parts = newsData.content.split(/(?=<h2.*?>)/g);
    return {
      section1: parts[0] || '',
      section2: parts[1] || '',
      section3: parts.slice(2).join('') || '',
    };
  }, [newsData.content]);

  const images = Array.isArray(newsData.image)
    ? newsData.image
    : newsData.image
      ? [newsData.image]
      : [];

  return (
    <NewsContainer>
      <Title>{newsData.title}, Pg6</Title>

      {newsData.tags && newsData.tags.length > 0 && (
        <TagSection>
          {newsData.tags.map((tag, index) => (
            <Button key={index}>
              <ButtonText>{tag}</ButtonText>
            </Button>
          ))}
        </TagSection>
      )}

      <Section>
        <Heading>Context</Heading>
        <ContextContent>
          {newsData.context || 'No context available for this article.'}
        </ContextContent>
      </Section>



      <Section style={{ marginTop: '-16px' }}>
        {showFullContent && (
          <ExpandableSection expanded={showFullContent}>
            <HTMLContent dangerouslySetInnerHTML={{ __html: section1 }} />
            <HTMLContent dangerouslySetInnerHTML={{ __html: section2 }} />
            <HTMLContent dangerouslySetInnerHTML={{ __html: section3 }} />
            {images.length > 0 && (
              <ImageWrapper>
                {images.map((src, idx) => (
                  <img key={idx} src={src} alt={`News image ${idx + 1}`} />
                ))}
              </ImageWrapper>
            )}
          </ExpandableSection>

        )}

        {(section2 || section3) && (
          <ReadMoreButton onClick={() => setShowFullContent(!showFullContent)}>
            {showFullContent ? 'Show Less' : 'Read More'}
          </ReadMoreButton>
        )}
      </Section>
    </NewsContainer>
  );
};

export default News;
