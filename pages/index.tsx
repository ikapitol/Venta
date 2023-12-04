import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useInView } from 'react-intersection-observer';
import Fade from 'react-bootstrap/Fade';
import {Button, Container,Modal, ModalProps,Navbar,Form,Row,Col} from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import axios from 'axios'
import Planes from '@/components/Planes'
import FAQComponent from '@/components/FAQComponent';

export default function Home() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(false);
  const [openmodal, setopenmodal] = useState(false)
  const Footer = () => {
    return (
      <footer className="bg-secondary text-light">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-4 m-4">
              <img src="logo.png" alt="Logo" width={'230px'} height={'230px'}className="img-fluid" />
            </div>
            
            
          </div>
        </Container>
      </footer>
    );
  };
  
 
  const Qn = () => {
    return (
      <Container fluid className={`bg-light p-5 ${styles.quienesSomosContainer}`}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h2 className={`font-weight-bold mb-4 ${styles.financialFont}`}>¡Descubre Ikapitol: Inversiones en Oro y Otros Activos!</h2>
            <p className="text-dark">
              En Ikapitol, nos especializamos en inversiones estratégicas en oro y otros commodities. Nuestro equipo está formado por profesionales altamente calificados, incluyendo matemáticos, físicos y expertos financieros. 
              Contamos con grupos de personas dedicadas a analizar y maximizar rendimientos, asegurando un crecimiento constante de tus inversiones.
            </p>
            <p className="text-dark">
              Descubre el potencial de multiplicar tu dinero con Ikapitol, donde la innovación y la experiencia se unen para ofrecerte rendimientos mensuales automáticos del 5-7%. 🚀 ¡Envía un mensaje y comienza hoy! 📲
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="/backimg1.jpg"
              alt="Imagen Ilustrativa"
              className="img-fluid"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>
    );
  };
  
  
  
  
  const Formulario = () => {
    const [isDownloading, setIsDownloading] = useState(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const data = {
        phone: form.phone.valueOf(),
        name: form.name.valueOf()
      };
  console.log(data)
      try {
        setIsDownloading(true);
  
        // Send the form data to your API
      const response = await axios.post('/api/data',data)
  
        // Download the PDF file from the public folder
        const downloadLink = document.createElement('a');
        downloadLink.href = '/presentacion.pdf';
        downloadLink.download = 'Recorrido-Unique-Living.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      } finally {
        setIsDownloading(false);
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label  className='text-dark'>Tu nombre</Form.Label>
          <Form.Control id="name" type="text" placeholder="Ingresa tu nombre" required />
        </Form.Group>
        <br/>
        <Form.Group controlId="phone">
          <Form.Label  className='text-dark'>Numero Whatsapp</Form.Label>
          <Form.Control  id="phone"  type="tel" placeholder="Ingresa tu numero de Whatsapp" required />
        </Form.Group>
  
        <div  className='text-center'>
          <hr/>
          <Button className='text-dark m-5' size="lg" variant="warning" type="submit" disabled={isDownloading}>
            {isDownloading ? 'Descargando...' : 'Ver'}
          </Button>
        </div>
      </Form>
    );
  }
  
  useEffect(() => {
    if (inView) {
      setOpen(true);
    }
  }, [inView]);
  const scrollToDiv = () => {
    const targetElement = document.getElementById('start');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      scroll.scrollTo(offsetTop, {
        duration: 500,
        delay: 100,
      });
    }
  };
  function MD(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       
        className='text-white'
      >
        <Modal.Header closeButton  className='bg-dark' closeVariant='white' >
        <Modal.Title id="contained-modal-title-vcenter " className='text-white'>
        <div className="mx-auto">

        <img src="logo.png" width={60} height={50}/>
   
    </div>
              </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {props.body}
          
        </Modal.Body>
       
      </Modal>
    );
  }
  return (
    <>
      <Head>
        <title>Unique Living</title>
        <meta name="description" content="Unique Living Queretaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className={styles.navColor }>
  <Container>
    <div className="mx-auto">
      <Navbar.Brand href="#home">
        <img src="logo.png" width={120} height={100}/>
      </Navbar.Brand>
    </div>
  </Container>
</Navbar>
    <section >
    <div ></div>
    <Container fluid className={styles.bgImageFirst}>
      <Row className='p-5'>
        <Col lg={6} className='p-5'>
          <div className='text-white'>
            <h1 className={`font-weight-bold ${styles.financialFont}`}>
              Estrategias Económicas para <br /> Impulsar tu Empresa
            </h1>
            <div className='text-right mt-4'>
              <Button size="lg" variant="success" onClick={() => setopenmodal(true)}>
                ENVIAR WHATSAPP
              </Button>
            </div>
          </div>
        </Col>
        
      </Row>
    </Container>
    
    <br/>
    <Qn/>
    <Container>
      <div  ref={ref}>
      <Fade in={open}>
<div className='text-center h2 m-5 p-5'>
Comienza tu inversión hoy mismo.<br/>  <br/> ¡Elige tu Plan de Inversión Ahora!
</div>

</Fade>
      </div>
   
    </Container>
    <Container fluid className='m-2'>
    <Planes/>
   </Container>

  </section>
  <Footer/>
  <MD
      show={openmodal}
      onHide={() => setopenmodal(false)}
      body={<Formulario />}
      title='Descargar'
    />
     </>
  )

}
