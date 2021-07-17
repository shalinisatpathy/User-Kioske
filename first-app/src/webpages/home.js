import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { CardGroup, Button, Card } from 'react-bootstrap';
import './home.css';

const Home = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                <h2 className='primary'>Information Kiosk of Users</h2>
                <div className="cards-container">
                    
                {users.map(user => (
                
                    <CardGroup>
                        <Card>
                        <Avatar color={Avatar.getRandomColor('sitebase', ['red']) }
                              name={user.name} />
                            <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>@{user.username}</Card.Text>
                            <Card.Text>{user.website}</Card.Text>
                            <Card.Text>
                            <li>
                              
                                <Link to={`user/${user.id}`}>
                                <Button variant="outline-light" size="xl">
                                    More Details
                                </Button>   
                                 </Link>
                            </li>
                            </Card.Text>
                            </Card.Body>
    
                        </Card>
                    </CardGroup>  
                             
                ))}
            </div>
            </ul>
        );
    }
}
export default Home;
