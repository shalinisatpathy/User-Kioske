import React, { useState, useEffect} from 'react';
import { CardGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from './home';
import './user.css';

const User = props => {
    var id = props.match.params.id

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [username, setUserusername] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setUser(data);
                    setUserusername(data.username);
                    setIsLoaded(true);
                    setUserAddress(data.address);
                    setUserCompany(data.company);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (user) {
        return (
            <div>
                <div className="cards-container">
                
                <CardGroup className='cen'>
                    <Card>                    
                        <Card.Body>
                            <Card.Title className='second'>User Details</Card.Title>
                            <Card.Text>-name: {user.name}</Card.Text>
                            <Card.Text>-username: {user.username}</Card.Text>
                            <Card.Text>-email: {user.email}</Card.Text>
                            <Card.Text>-phone: {user.phone}</Card.Text>
                            <Card.Text>-company: {userCompany.name}</Card.Text>
                            <Card.Text>-website: {user.website}</Card.Text>
                            <Card.Text>-address:</Card.Text>
                            <Card.Text>street: {userAddress.street}</Card.Text>
                            <Card.Text>suit: {userAddress.suite}</Card.Text>
                            <Card.Text>city: {userAddress.city}</Card.Text>
                            <Card.Text>zipcode: {userAddress.zipcode}</Card.Text>
                            <Card.Text>suit: {userAddress.suite}</Card.Text>
                        </Card.Body>
    
                    </Card>
                </CardGroup>  
                </div>
            </div>
                
            
        
        );
    }
}
export default User;