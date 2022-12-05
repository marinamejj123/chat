import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/marinamejj123/sig"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/marinamejj123/sig"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/marinamejj123/sig");
    };
    this.portfoliolive = () => {
      window.location.assign("https://github.com/marinamejj123/sig");
    };
    this.ecommerce = () => {
      window.location.assign("https://github.com/marinamejj123/sig");
    };
    this.leavemangement = () => {
      window.location.assign("https://github.com/marinamejj123/sig");
    };
    this.crudapplication = () => {
      window.location.assign(
        "https://github.com/marinamejj123/sig"
      );
    };
    this.facebook = () => {
      window.location.assign(
        "https://github.com/marinamejj123/sig"
      );
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/chat.jpg) center / cover",
                }}
              >
                Aplicacion chatboot
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
               Esta es una aplicacion desarrollada en ReactJs usando librerias Especificas
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Calculadora con Tkinter
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Esta es una aplicacion desarrollada en Python 3.6.0
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/crud-app.png) center / cover",
                }}
              >
                Nube Tecnologies
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Este es el portafolio de la empresa Nube Technologies
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/e-commerce.png) center / cover",
                }}
              >
                E-Commerce SW1
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Este es un Ecommerce Online de Fotografias tomadas en un evento social
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.ecommerce.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Leave-management */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/leave-management.png) center / cover",
                }}
              >
               Desarrollo Libre
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Esta es una Aplicacion Dinamica Usando PostgreSQ
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.leavemangement.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/crud-app.png) center / cover",
                }}
              >
                Aplicaion CRUD
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Este es un CRUD sencillo usando Laravel 9 y MySQL
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.crudapplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            {/* Store-Procedure */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/store-procedure.png) center / cover",
                }}
              >
                Microservicios
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Desarrollado usando Spring , Docker , Eclipse.
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            {/* facebook */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/facebook.jpg) center / cover",
                }}
              >
                Facebook
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Esta es una Replica de la Aplicacion de Facebook
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.facebook.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Asp .Net</Tab>
          <Tab>SQL SERVER</Tab>
          <Tab>PHP</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
