import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

//components
import Topics from '../components/Topics';
import Date from "../components/Date"
import News from "../components/News";
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

//context
import { DateContext } from '../context/DateContext';



const Container = styled.div`
  display: flex;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const Main = styled.div`
  display: flex;
  padding: 0px 100px;
  flex-direction: column;
  width: 60%;
  gap: 30px;
`

const Home = () => {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { selectedDate } = useContext(DateContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://upscnews.onrender.com/api/news/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date: selectedDate.toISOString() }),
        });

        const data = await response.json()
        setNewsData(data)

      } catch (error) {
        console.error('Error fetching news data:', error);
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [selectedDate]);

  return (
    <Container>
      <Topics />
      <Main>
        <Date />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : newsData.length > 0 ? (
          newsData.map((article) => (
            <News key={article._id} newsData={article} />
          ))
        ) : (
          <ErrorMessage message="No articles found for this date." />
        )}

      </Main>
    </Container>
  )
}

export default Home