import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Addbook from './Addbook';
import BookList from './BookList';

function LeftTabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Add Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Update Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Book Stock</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Settings</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='tabcontent'>
                        <Tab.Pane eventKey="first">
                            <BookList/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Addbook/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                        <Tab.Pane eventKey="fourth">Fourth tab content</Tab.Pane>
                        <Tab.Pane eventKey="fifth">Fifth tab content</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LeftTabs;