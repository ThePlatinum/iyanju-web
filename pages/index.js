import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row, Tooltip, UncontrolledTooltip } from 'reactstrap'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    country: '',
    image: '',
    iyanju: ''
  })

  const valueChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const submission = e => {
    const url = 'http://localhost:8000/api/submission';
    const requestMetadata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    };

    fetch(url, requestMetadata)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      })
      .catch(error => {
        console.error(error);
      });

    e.preventDefault();
  }
  return (
    <div>
      <Head>
        <title>Iyanju</title>
        <meta name="description" content="" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

      <div className='content'>

        <div >
          <Container className='banner'>
            <Row xs={12} md={2}>
              <Col className='d-flex flex-column h-full banner-left'>
                <img src="/images/iyanju.png" alt="Iyanju" width={210} height={{}} />
                <div>
                  <div className='h1'>The daily motivation you need</div>
                  <div className='p'>
                    Get all the motivations you need to get your day started on a good note just in your pocket, on the go!
                  </div>
                </div>
                <div className='d-flex gap-4 '>
                  <Button >Download</Button>
                  <Button outline id='playstore'>Playstore</Button>
                  <Button outline id='coming'>App Store</Button>
                  <UncontrolledTooltip target="coming">
                    Coming soon...
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className='d-flex justify-content-center'>
                <img src="/images/hero.png" alt="Iyanju" width={360} height={{}} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className='features' id='features'>
          <Container className='py-5'>
            <Row xs={2} md={4} className='my-3'>
              <Col>
                <div className='img-container mb-3'>
                  <img src="/images/calendar-days-regular.svg" alt="Iyanju" width={50} height={50} />
                </div>
                Daily Inspiration
              </Col>
              <Col>
                <div className='img-container mb-3'>
                  <img src="/images/calendar-days-regular.svg" alt="Iyanju" width={50} height={50} />
                </div>
                Anyone can Motivate
              </Col>
              <Col>
                <div className='img-container mb-3'>
                  <img src="/images/calendar-days-regular.svg" alt="Iyanju" width={50} height={50} />
                </div>
                Simple and Straightforward
              </Col>
              <Col>
                <div className='img-container mb-3'>
                  <img src="/images/calendar-days-regular.svg" alt="Iyanju" width={50} height={50} />
                </div>
                Share
              </Col>
            </Row>
          </Container>
        </div>

        <div className='submission' id='submission'>
          <Container className='pt-5'>
            <Row xs={1} md={2} className='pt-5' >
              <Col className='d-flex flex-column justify-content-end h-full'>
                <img src="/images/hero.png" alt="Iyanju" width={360} height={{}} />
              </Col>
              <Col className='d-flex flex-column justify-content-center h-full p-5'>
                <Form onSubmit={submission}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="name"> Display Name </Label>
                        <Input id="name" name="name" type="text" required onChange={valueChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="country"> Country <span className='info'>- For Analytics only </span></Label>
                        <Input id="country" name="country" type="text" required onChange={valueChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="email"> Email </Label>
                    <Input id="email" name="email" type="email" required onChange={valueChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="iyanjuText"> Iyanju </Label>
                    <Input id="iyanjuText" name="iyanju" type="textarea" required onChange={valueChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="image"> Image </Label>
                    <Input id="image" name="image" type="file" required onChange={valueChange} />
                    <FormText>
                      Please select the background image you'd like to include,
                      you can easily create one on Canva.
                    </FormText>
                  </FormGroup>
                  <Button block> Submit </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='download text-center' id='download'>
          <Container className='py-5'>
            <h3>What are you waiting for?</h3>
            <div className='d-flex gap-4 justify-content-center py-3'>
              <Button >Download</Button>
              <Button outline>Playstore</Button>
              <Button outline>App Store</Button>
            </div>
          </Container>
        </div>

        {/* <div className='support' id='support'>Support</div> */}
      </div>

      <div className='foot'>
        <Container>
          <footer className={styles.footer}>
            <span className={styles.logo}>
              <Image src="/images/iyanju.png" alt="Iyanju" width={100} height={50} />
            </span>
            <div className="socials">
              <a href='tel:+2347014293952'>
                <Image src="/images/socials/headset-solid.svg" alt="Phone" width={35} height={35} />
              </a>
              <a href='mailto:platinumemirate@gmail.com' target='_blank' rel="noopener noreferrer">
                <Image src="/images/socials/square-envelope-solid.svg" alt="Email" width={35} height={35} />
              </a>
              <a href='https://wa.me/message/FSG3YR7TOGKEI1' target='_blank' rel="noopener noreferrer">
                <Image src="/images/socials/whatsapp-brands.svg" alt="WhatsApp" width={35} height={35} />
              </a>

              <a href='' target='_blank' rel="noopener noreferrer">
                <Image src="/images/socials/instagram-brands.svg" alt="Instagram" width={35} height={35} />
              </a>
            </div>
          </footer>
          <div className='credit text-center'>
            <p>
              Platinum Innovations |
              <a href='https://www.linkedin.com/in/platinum-emmanuel/' target='_blank' rel="noopener noreferrer">
                <Image src="/images/socials/linkedin-in-brands.svg" alt="LinkedIn" width={25} height={25} className='m-1 p-1' />
                {' '} Emmanuel Adesina
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}