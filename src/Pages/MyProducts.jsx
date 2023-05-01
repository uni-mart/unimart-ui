import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/ProfilePage.css'; // Import custom styles for the profile page
import Sidebar from 'components/Sidebar';
import SearchField from 'components/SearchField';
import MyCard from 'components/MyCard';


const MyProducts = (props) => {
    const [username, setUsername] = useState('John Doe');
    const [searchText, setSearchText] = useState('');
    const cards = [
        {
            title:'Card 1',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        {
            title:'Card 2',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        {
            title:'Card 3',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        {
            title:'Card 4',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        {
            title:'Card 5',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        {
            title:'Card 6',
            imageSrc: 'https://via.placeholder.com/150',
            text:"Some Example of the Books over here"
        },
        

    ]

    const handleSearchTextChange = (newSearchText) => {
        setSearchText(newSearchText);
        //Perform the search with the new search text
    }

    const handleClearSearch = () => {
        searchText('');
    }



  return (
    <Container fluid className="MyProduct-page">
        <Row>
        <Sidebar username={username}/>
<br/>
        <Col md={8}>
            <SearchField
                onSearchTextChange={handleSearchTextChange}
                onClear={handleClearSearch}
                value ={searchText}
                debounce={500}
                className='py-2'
            />
            <Container className='py-3'>
            <Row>
                {cards.map(card =>(
                    <Col sm={4} key={card.title} className='py-2' >
                        <MyCard title={card.title} imageSrc={card.imageSrc} text={card.text} />
                    </Col>
                ))}
            </Row>
            </Container>

           
            
        </Col>

        </Row>
    </Container>
    
  )
}

export default MyProducts