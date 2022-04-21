import { useState } from 'react';
import { 
    Form,
    Row,
    Col,
    Container
 } from 'react-bootstrap'
 import axios from 'axios';
 import { Button } from 'react-bootstrap';

function User() {
    // Create hooks for input fields
    const [inputs, setInputs] = useState({
        userName: "",
        userEmail: "",
        userCompany: "",
        userFunction: "",
        userTelephone: "",
    })

    // Update hooks after each change with onChange in form code
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }))
    }




    // Create a State for the User Role option dropdown
    const [userRole, setUserRole] = useState("");

    const handleRoleChange = (e) => {
        setUserRole(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const new_user = {
            userName: inputs.userName,
            userEmail: inputs.userEmail,
            userCompany: inputs.userCompany,
            userFunction: inputs.userFunction,
            userTelephone: inputs.userTelephone,
            role: userRole,
        }

        console.log(new_user)

        axios.post(`/user/add_new`, new_user, {
            headers: {"Access-Control-Allow-Origin": "*"},
        })
            .then(res => console.log(res.data));

    }



    return (
        <Container fluid='sm' className='user-form'>
        <h1 xs={10} md={5}>Add new User</h1>
            <Form onSubmit={handleSubmit} autoComplete='off' >
            <Form.Group 
                as={Row} 
                className='user-col'
                controlId="formHorizonalName">
                <Col xs={10} md={5}>
                    <Form.Control 
                        name="userName"
                        type="text" 
                        placeholder="Name"
                        value={inputs.userName}
                        onChange={handleChange}
                        />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className='user-col'
                controlId="formHorizontalEmail">
                <Col xs={10} md={5}>
                    <Form.Control
                        name="userEmail" 
                        type="email" 
                        placeholder="Email"
                        value={inputs.userEmail}
                        onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className='user-col'
                controlId="formHorizontalCompany">
                <Col xs={10} md={5}>
                    <Form.Control 
                    name="userCompany"
                    type="text" 
                    placeholder="Company"
                    value={inputs.userCompany}
                    onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="user-col"
                controlId="formHorizontalEmail">
                <Col xs={10} md={5}>
                    <Form.Control 
                        name="userFunction"
                        type="text" 
                        placeholder="Function"
                        value={inputs.userFunction}
                        onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="user-col"
                controlId="formHorizontalEmail">
                <Col xs={10} md={5}>
                    <Form.Control 
                        name="userTelephone" 
                        type="text" 
                        placeholder="Telephone number"
                        value={inputs.userTelephone}
                        onChange={handleChange} />
                </Col>
            </Form.Group>
            {/* Create a dropdown menu*/}
            <Form.Group
                as={Row}
                className="user-col"
                controlId="formHorizontalEmail">
                <Col xs={10} md={5}>
                    <Form.Select 
                    aria-label="Select role" 
                    onChange={handleRoleChange} >
                    <option value="Select role new user">Select role new user</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                    <option value="Client">Client</option>
                    <option value="Viewer">Viewer</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Button 
                variant="secondary"
                type="submit">
                    Add new User
            </Button>
                    
        </Form>
        </Container>
    );
}

export default User;