import { Card, Col, Row, Table } from "react-bootstrap";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";


const ResidentsTable = (props) => {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Residents List</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>25</td>
                                <td>1234 Main St</td>
                                <td className="text-center">
                                    <Row>
                                        <Col><button className="btn btn-success sm"><FaEye/></button></Col>
                                        <Col><button className="btn btn-warning"><FaPen/></button></Col>
                                        <Col><button className="btn btn-danger"><FaTrash/></button></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>

        
    )
}

export default ResidentsTable;
