import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nube Technologies</h2>
            <img
                src="images/grupo.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
          
              Los servicios de de desarrollo de software
              personalizado en el mar de Startechup estan al alcance de su mano
              !Envienos un Correo Electronico!
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contactenos</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+591 69080574</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>NubeTechnologies@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
