import * as components from "./components/index.js"
import data from "./data.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach(user => {
            this.shadowRoot.innerHTML += `
                <Tourist-Plan destino="${user.Destination}" duracionEnDias="${user.Duration}"  costo="${user.Cost}" descripcion="${user.Description}" actividades="${user.Activities}"></Tourist-Plan>
                <MyButton menssage= "Reserva tu destino"></MyButton>
            `
        });
    }
}

customElements.define ("app-container",AppContainer);
export default AppContainer;
