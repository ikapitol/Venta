import React from 'react';
import { Container, Row, Col,Card  } from 'react-bootstrap';
// Update the import path


import styled from 'styled-components';
import Link from 'next/link';

const StyledCard = styled(Card)`
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

interface Project {
  id: number;
  title: string;
  image: string;

}

interface ProjectCardProps {
  project?: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) {
    // Handle the case when project prop is undefined or null
    return null;
  }

  const { id, title, image,  } = project;

  return (
  <Link href={'/proyectos'}>
      <StyledCard>
        <Card.Img variant="top" src={image} alt={title}  style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{fontFamily:'Raleway'}}>{title}</Card.Title>
        
        </Card.Body>
      </StyledCard>
      </Link>
  );
};
const projects = [
  {
    id: 1,
    title: 'Casa Querétaro, QRO',
    image: '/plan100usd.png',
   
  },
  {
    id: 2,
    title: 'Proyecto OMEKUA',
    image: '/plan250usd.png',
  
  },
  {
    id: 3,
    title: 'Ampliación Juriquilla, Qro',
    image: '/plan500usd.png',
  
  },
  {
    id: 4,
    title: 'Casa Querétaro, QRO',
    image: '/plan1000usd.png',
   
  },
  {
    id: 5,
    title: 'Proyecto OMEKUA',
    image: '/plan2500usd.png',
  
  },
  {
    id: 6,
    title: 'Ampliación Juriquilla, Qro',
    image: '/plan5000usd.png',
  
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container className='my-4'>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={4}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
