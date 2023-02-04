import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Kard.css';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
     
        <Col>
          <Card id='a'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>ACard title</Card.Title> */}
              <Card.Text>
              1.	To raise the level of literacy by spreading 
              basic & IT education at District/Block/Halqa Level with more emphasizes on border Districts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='b'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              2.	To provide IT solutions, Internet & E-Com services, 
              software & hardware development inputs to the state/UT of J& K.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='c'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              3.	To spread distance learning mode of education by setting up part time study 
              centers at various levels.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='d'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              4.	To rehabilitate people affected due to militancy, Act of terrorism, 
              natural disaster and to cooperate with center/ state for the said purpose.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='e'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              5.	To setup vocational training centers for SC/ST/OBC/ Women 
              and the people living below poverty line and to undertake opening/ administration of libraries, reading rooms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='f'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              6.	To Develop professional manpower of national and international levels by setting up high/end 
              technical/professional institutions, schools (both day boarding & residential)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='g'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              7.	To establish & manage institution for development of handicapped, disabled,
               orphanage & weaker section of the society besides award of scholarship, text books to deserving students.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='h'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              8.	To plan, promote, assist and guide the implementation of programs and activities of social and economic 
              nature designed for people living below the poverty line and to get more and youth attached to such programs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='i'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              9.	To promote ideal of, economic equality and social justice.
           	To launch integrated development programs for RBA, ST,OBC women and people 
             living close to actual line of control and to assist them in setting up income generation units.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id='j'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              {/* <Card.Title>BCard title</Card.Title> */}
              <Card.Text>
              10.	To work towards child and women development and wage war against all social levils,
              diseases and epidemics like sexual crimes, Dowry, Drug menace , AIDS ,COVID-19 etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
  );
}

export default GridExample;