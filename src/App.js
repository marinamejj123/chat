import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Startup</Link>} scroll>
          <Navigation>
            <Link to="/Resume">Resumen</Link>
            <Link to="/Aboutme">Sobre nosotros</Link>
            <Link to="/Projects">Proyectos</Link>
            <Link to="/Contact">Contacto</Link>
            <Link to="/Contenido">Chatboot</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
          <Navigation>
            <Link to="/Resume">Resumen</Link>
            <Link to="/Aboutme">Sobre Nosotros</Link>
            <Link to="/Projects">Proyectos</Link>
            <Link to="/Contact">Contacto</Link>
            <Link to="/Contenido">Chatboot</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>

   
    </div>
    
  );
}

export default App;
