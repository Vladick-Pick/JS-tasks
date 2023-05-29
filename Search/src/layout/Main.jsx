import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('Hello');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=${value}&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search || []))
  }, [value]);


  return (
    <Layout.Content>
      <Search value={value} onChange={setValue} />
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {
              movies.length ?
                <Movies movies={movies} />
                : <h1>Loading...</h1>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;