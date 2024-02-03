import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Addbook from './Addbook';
import BookList from './BookList';
import Stock from './BooksStock';
import BookIssue from './BookIssue';
import MemForm from './MemForm';
import { Divider } from '@nextui-org/react';

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
                            <Nav.Link eventKey="third">Book Stock</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Book Issue</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Settings</Nav.Link>
                        </Nav.Item>
                        <Divider/>
                        <Nav.Item>
                            <MemForm/>
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
                        <Tab.Pane eventKey="third">
                            <Stock/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <BookIssue/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">Fifth tab content</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LeftTabs;