import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import axios from "axios";
import moment from 'moment';
import {Link} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [orderName, setorderName] = useState(false)
    const [orderCreated, setorderCreated] = useState(false)


    //get function
    const fetchUsers = () => {
        axios.get('https://gorest.co.in/public-api/users').then(res => {
                setUsers(res.data.data)
            }
        )
    }

    useEffect(() => {
        fetchUsers()

    }, [searchInput])

    //sort functions

    const onSortNameChange = () => {
        setorderName(!orderName);
    };
    const onSortCreateChange = () => {
        setorderCreated(!orderCreated);
    };


    return (
        <main className='py-3'>
            <Container>
                <div className='users'>
                    <Container className='py-3'>
                        <h1>Users</h1>
                    </Container>

                    <label className='py-3'>
                        <input type="text" placeholder='Search ..' value={searchInput}
                               onChange={e => setSearchInput(e.target.value)}/>
                    </label>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>
                                Name
                                <input
                                    className={'m-2'}
                                    name="name"
                                    type="checkbox"
                                    checked={orderName}
                                    onChange={onSortNameChange}/>
                            </th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Create
                                <input
                                    className={'m-2'}
                                    name="create"
                                    type="checkbox"
                                    checked={orderCreated}
                                    onChange={onSortCreateChange}/>
                            </th>
                            <th>Updated</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users
                            .filter((val) => {
                                if (searchInput === '') {
                                    return val
                                } else if ((val.name.toLowerCase().includes(searchInput.toLowerCase())) || (val.created_at.toLowerCase().includes(searchInput.toLowerCase()))) {
                                    return val
                                }
                            })
                            .sort((a, b) => {
                                if (orderName === true) {
                                    return a.name.localeCompare(b.name)
                                }
                                if (orderCreated === true) {
                                    return a.created_at - b.created_at
                                }
                            })
                            .map((user) => (

                                <tr key={user.id}>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td>{moment(user.created_at).fromNow()}</td>
                                    <td>{moment(user.updated_at).fromNow()}</td>
                                    <td><Link to={`/users/${user.id}`}>Details</Link></td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </main>
    );
};

export default Users;