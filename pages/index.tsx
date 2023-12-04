import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useInView } from 'react-intersection-observer';
import Fade from 'react-bootstrap/Fade';
import {Button, Container,Modal, ModalProps,Navbar,Form,Row,Col, Card} from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import axios from 'axios'
import Link from 'next/link'
import Planes from '@/components/Planes'


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
 

  const RetornoInversionComponent = () => {
    // Variables para simular el rango de retorno mensual
    const retornoMinimo = 5; // Rendimiento mínimo del 5%
    const retornoMaximo = 7; // Rendimiento máximo del 7%
  
    // Estado para manejar el valor del input
    const [inversionInput, setInversionInput] = useState(1000);
  
    // Cálculos para el retorno de inversión
    const retornoMinimoDolar = inversionInput * (retornoMinimo / 100);
    const retornoMaximoDolar = inversionInput * (retornoMaximo / 100);
    const retornoAnualMinimo = retornoMinimoDolar * 18;
    const retornoAnualMaximo = retornoMaximoDolar * 18;
  
    return (
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h2 className="font-weight-bold mb-4">Calcula tu Retorno de Inversión</h2>
            <Form>
              <Form.Group controlId="inversionInput">
                <Form.Label>Ingresa el monto de inversión:</Form.Label>
                <Form.Control
                  type="number"
                  value={inversionInput}
                  onChange={(e) => setInversionInput(parseFloat(e.target.value))}
                />
              </Form.Group>
            </Form>
            <p className="text-dark">
              Si inviertes ${inversionInput} y obtienes un retorno mensual del 5 al 7%, tu retorno estimado sería:
            </p>
            <Card className="text-center">
              <Card.Body>
                <p className="font-weight-bold">Retorno Estimado:</p>
                <p>Entre ${retornoAnualMinimo.toFixed(2)} y ${retornoAnualMaximo.toFixed(2)} </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };


  const ComoComprarComponent = () => {
    return (
      <Container className="py-5 bg-primary">
        <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
            {/* Inserta aquí tu componente de video o el código para mostrar el video */}
            {/* Puedes usar un reproductor de video de YouTube, Vimeo, u otra plataforma */}
            <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/v3l72fu4Wn0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </Col>
          <Col md={6} className="text-center">
            <h2 className="font-weight-bold mb-4 text-white">Para Empezar a Invertir, Adquiere Oro Digital con Ikapitol</h2>
            <p className="text-white">
              Aprende a comprar criptomonedas y maximiza tus inversiones con Ikapitol. Sigue estos sencillos pasos para empezar hoy mismo:
            </p>
            <ol className="text-left ">
              <li>Abre una cuenta en una plataforma de intercambio de criptomonedas, como Bitso o Binance.</li>
              <li>Verifica tu identidad de acuerdo con las regulaciones de la plataforma.</li>
              <li>Deposita fondos en tu cuenta utilizando métodos de pago disponibles.</li>
              <li>Selecciona la criptomoneda que deseas comprar (por ejemplo, Bitcoin, DolarTether, etc.).</li>
              <li>Realiza la compra de la criptomoneda y Deposita tu primera inversión a Ikapitol.</li>
            </ol>
           
         
          </Col>
         
        </Row>
      </Container>
     
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
              src="/img2.jpg"
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
        <title>ikapitol Queretaro</title>
        <meta name="description" content="ikapitol Queretaro" />
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
              <Link href='https://api.whatsapp.com/send?phone=4427492083'>
              <Button size="lg" variant="success" >
                ENVIAR WHATSAPP
              </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col>
        <iframe
            width="100%"
            height="400px"
            src="/videoinf.mp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
    
    <br/>
    <Qn/>
    <Container>
      <div  ref={ref}>
      
      </div>
   
    </Container>
    <div className='bg-primary'>
<ComoComprarComponent/>
</div>
<Fade in={open}>
<div className='text-center h2 m-5 p-5'>
Comienza tu inversión hoy mismo.<br/>  <br/> ¡Elige tu Plan de Inversión Ahora!
</div>

</Fade>
    <Container fluid className='m-2'>
    <Planes/>

    
   </Container>
<Container>

  <RetornoInversionComponent/>
</Container>
  </section>
  <br/>
  <br/>
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
