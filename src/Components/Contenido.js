import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import WikipediaSearch from './WikipediaSearch'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#eb3449',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb3449',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        /*{
                            id: "1",
                            message: "Hello world. I am a chatbot. What's your name?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Please enter a valid name.';
                                }
                            },
                            trigger: "3"
                        },*/
                        {
                            id: "3",
                            message: "Hola {previousValue}, encantado de conocerte!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Necesitas algo de mi?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Eres Nuevo por aqui...",
                            trigger: "cliente"
                        },
                        {
                            id: "cliente",
                            options: [
                                {value: "f", label: "Cliente Nuevo", trigger: "6B"},
                                {value: "b", label: "Cliente Antiguo", trigger: "7B"},
                            ]
                        },
                        {
                            id: "6B",
                            message: "Increible! Digame que tipo de proyecto esta buscando...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6C",
                            message: "Lo siento si no puedo serle de ayuda. Hasta Luego",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f", label: "Pequeño", trigger: "7A"},
                                {value: "b", label: "Mediano", trigger: "7A"},
                                {value: "b", label: "Grande", trigger: "7A"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "Ya veo! Cual es la area de su proyecto?",
                            trigger: "seleccionFront"
                        },
                        {
                            id: "7B",
                            message: "Tiene Fallas en su Producto, Cual es el Grado?",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "seleccionFront",
                            options: [
                                {value: "Angular_(framework)", label: "Salud", trigger: "9"},
                                {value: "React", label: "Politica", trigger: "10"},
                                {value: "Vue.js", label: "Financiera", trigger: "11"},
                            ]
                        },
                        {
                            id: "seleccionBack",
                            options: [
                                {value: "Spring_Framework", label: "Moderado", trigger: "12"},
                                {value: "Laravel", label: "Significativo", trigger: "12"},
                                {value: ".NET_Core", label: "Esencial", trigger: "12"},
                            ]
                        },
                        {
                            id: "9",
                            message: "Los proyectos del area de la salud tienen un rango de 500-2000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "10",
                            message: "Los proyectos del area Politica tienen un rango de 700 - 5000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "11",
                            message: "Los proyectos del area Financiera tienen un rango de 800-8000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "12",
                            message: "Nos pondremos en contacto con su empresa en unos minutos...",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Necesitas algo mas?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6C"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}
