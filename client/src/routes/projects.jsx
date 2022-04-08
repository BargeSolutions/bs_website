import { useState } from "react";
import { ReactDOM } from "react-dom";
import axios from "axios";


import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Projects() {
    const [inputs, setInputs] = useState({
        projectName: "",
        projectNumber: "",
        projectClient: "",
        projectNumberClient: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const new_project = {
            projectName: inputs.projectName,
            projectNumer: inputs.projectNumber,
            projectClient: inputs.projectClient,
            projectNumberClient: inputs.projectNumberClient,
        }

        console.log(new_project);

        axios.post('http://ptsv2.com/t/ibui8-1649414338/post', new_project, {
            headers: "Access-Control-Allow-Origin",
        })
            .then(res => console.log(res.data));
    }


    return (
        <main style={{ padding: "1rem" }}>
            <h2>Projects page</h2>
            <Container fluid>
            <Row>
            <Col xs={3} md={2} />
            <Col xs={6} md={4}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 test">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control 
                        name="projectName" 
                        type="text" 
                        placeholder="Insert Project Name" 
                        value={inputs.projectName}
                        onChange={handleChange}
                    />
                    <Form.Label>Project Number</Form.Label>
                    <Form.Control 
                        name="projectNumber" 
                        type="text" 
                        placeholder="Insert Project Number"
                        value={inputs.projectNumber}
                        onChange={handleChange} 
                    />
                    <Form.Label>Client</Form.Label>
                    <Form.Control 
                        name="projectClient" 
                        type="text" 
                        placeholder="Insert Project Client"
                        value={inputs.projectClient}
                        onChange={handleChange}  />
                    <Form.Label>Client Project Number</Form.Label>
                    <Form.Control 
                        name="projectNumberClient" 
                        type="text" 
                        placeholder="Insert Client Project Number"
                        value={inputs.projectNumberClient}
                        onChange={handleChange} 
                    />
                    <input type="submit" />
                </Form.Group>
            </Form>
            </Col>
            </Row>
            </Container>
        </main>
    )
}

export default Projects;