import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import axios from "axios";

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [orderName, setorderName] = useState(false)
    const [orderDescription, setorderDescription] = useState(false)

    //get function
    const fetchCategories = () => {
        axios.get('https://gorest.co.in/public-api/categories').then(res => {
                setCategories(res.data.data)
            }
        )
    }

    useEffect(() => {
        fetchCategories()

    }, [searchInput])

    //sort functions
    const onSortNameChange = () => {
        setorderName(!orderName);
    };
    const onSortDescriptionChange = () => {
        setorderDescription(!orderDescription);
    };


    return (
        <main className='py-3'>
            <Container>
                <div className='categories'>
                    <Container className='py-3'>
                        <h1>Categories</h1>
                    </Container>

                    <label className='py-3'>
                        <input type="text" placeholder='Search ..' value={searchInput}
                               onChange={e => setSearchInput(e.target.value)}/>
                    </label>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name
                                <input
                                    className={'m-2'}
                                    name="name"
                                    type="checkbox"
                                    checked={orderName}
                                    onChange={onSortNameChange}/>
                            </th>
                            <th>Description
                                <input
                                    className={'m-2'}
                                    name="description"
                                    type="checkbox"
                                    checked={orderDescription}
                                    onChange={onSortDescriptionChange}/>
                            </th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories
                            .filter((val) => {
                            if (searchInput === '') {
                                return val
                            } else if ((val.name.toLowerCase().includes(searchInput.toLowerCase())) || (val.description.toLowerCase().includes(searchInput.toLowerCase()))) {
                                return val
                            }
                        })
                            .sort((a, b) => {
                                if (orderName === true) {
                                    return a.name.localeCompare(b.name)
                                }
                                if (orderDescription === true) {
                                    return a.description.localeCompare(b.description)
                                }
                            })
                            .map((categorie) => (
                            <tr key={categorie.id}>

                                <td>{categorie.name}</td>
                                <td>{categorie.description}</td>
                                <td>{categorie.status ? 'Used' : 'Unused'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </main>
    );
};

export default Categories;