import { Container } from "react-bootstrap";
import ResidentsTable from "./residents_components/ResidentsTable";

const Residents = () => {
    return (
        <Container>
            <h1 className="title">Residents</h1>

            <ResidentsTable/>
        </Container>
    )
}

export default Residents;