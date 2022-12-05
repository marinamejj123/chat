import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>NUBE TECHNOLOGIES</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          Nuestros valores están orientados hacia las personas y la ayuda mutua porque creemos profundamente que en la unión,
              junto a la bondad, podemos llegar aún más lejos.
          Nuestros equipos trabajan arduamente para la satisfacción de nuestros clientes
           mediante la sinergia de su experiencia en ingeniería , gestión de proyectos y diseño . 
          ¡Y lo hacemos todo con una sonrisa y, por supuesto, con un toque de friki!
           La honestidad y la transparencia son la base de nuestra comunicación con usted.
        </p>
      </div>
    );
  }
}

export default Aboutme;
