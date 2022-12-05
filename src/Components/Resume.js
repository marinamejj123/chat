import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/grupo.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Nube Technologies</h2>
            <h4 style={{ color: "grey" }}>Startup</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              Es una empresa de desarrollo de productos digitales de vanguardia que se asocia con las empresas
              más innovadoras del mundo para crear soluciones de software personalizadas que impulsan el crecimiento empresarial.
              Contamos con un equipo de desarrolladores experimentados apasionados por crear productos
              de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Direccion</h5>
            <p>Santa Cruz-4602, Boliva, San Martin</p>
            <h5>Telefono</h5>
            <p>(+591) 69080574</p>
            <h5>Email</h5>
            <p>NubeTechnologies@gmail.com</p>
            <h5>Web</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://talent-programmer.blogspot.com"
            >
              Programacion
            </a>
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Nuestra Experiencia</h2>
            <Experience
              startYear={"Diciembre 2022"}
              endYear={"Presente"}              
              jobName={"Ingenieros en Software"}
              companyName={"Banco Ganadero"}
              jobDesc={
                [
                  "Mejorar las funcionalidades y incorporar nuevas caracteristicas a los requerimeintos, estableciendo las mejores herramientas, usando .Net Framework and MSSQL",
                  "Trabajar y Contruir diferentes secciones para la plataforma de e-commerce de transformacion digital, construido usando NextJs, .Net Core 3.1 & MongoDB",
                  "Mejorar las características y la funcionalidad existente de una plataforma de medios sociales para los estudiantes de voluntariado con sede en Hawai para organizar, planificar y colaborar como la iniciativa Global Aloha construido usando Angular, .Net Core 3.1 y PostgreSQ",
                  "Suporte para el frontend con Rest API.",
                  "Revisado, modularizado y actualizar codigo, reduciendo costo de operacion."
                ]
              }
            />
            <Experience
              startYear={"Noviembre 2022"}
              endYear={"Mayo 2022"}
              duration= {2}
              jobName={"Desarrollo (Remoto)"}
              companyName={"UAGRM"}
              jobDesc={[
                "Gestion de Proyecto en el departamento de titulos usando Asp .Net-5 & MSSQL",
                "Automatizacion y Testeo de proyectos.",
                "Diseñar y desarrollar nuevos proyectos."
              ]
              }
            />
            <Experience
              startYear={"Diciembre 2020"}
              endYear={"Junio 2021"}
              duration= {2}
              jobName={"Desarrolladores en Asp.Net"}
              companyName={"Nube Technologies"}
              jobDesc={
                [
                  "Desarrollo de myBot un chatboot usando IA" ,
                   "Desarrollo usando normas IEEE y ISO 9001",
                "Participacion de diversos proyecto del area Financiera en la empresa, con su respectivo manual de usuario"]
              }
            />
            <Experience
              startYear={"Verano 2019"}
              endYear={"Septiembre 2019"}
              duration= {12}
              jobName={"Entrenador de Datos"}
              companyName={"Jalasoft"}
              jobDesc={["Profesores de algoritmos usando Ciencia de datos", "Creacion de Algoritmos", "Big Data y Machine Learning"]}
            />
            <Experience
              startYear={"Verano 2020"}
              endYear={"Diciembre 2020"}
              duration= {4}
              jobName={"Analista de Datos"}
              companyName={"Empresa Atila y Asociados"}
              jobDesc={
                ["Desarrollo de tecnologias aplicando Blockchain y Smart Contract para el proyecto de las Loritas"]
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Educacion</h2>
            <Education
              startYear={2020}
              endYear={2022}
              schoolName={"Universidad Autonoma Gabriel Rene Moreno"}
              degreeName={"Ingenieria en Sistemas"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Habilidades</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"Angular"} progress={70} />
            <Skills skill={"C#"} progress={90} />
            <Skills skill={"Asp .Net Core"} progress={90} />
            <Skills skill={"SQL Server"} progress={80} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Estudiantes</h2>
            <h6>Jisan Lopez Almendras (215058621)</h6>
            <h6>Marina Mejia Orihuela (215059518)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
