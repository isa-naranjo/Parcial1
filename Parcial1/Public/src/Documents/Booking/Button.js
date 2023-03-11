class  Booking extends  HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.onButtonClicked = this.onButtonClicked.bind(this); 
    }

    static get observedAttributes(){
    return["menssage"]
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]= newValue;
    }

    connectedCallback(){
        this.mount();
        
    }

    mount(){
        this.render();
        this.addlistenerst();
    }

    addlistenerst(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked)
    }

    render(){
        this.shadowRoot.innerHTML =`
        <seccion>
        <p>${this.menssage || "Sin reserva"}/p>
        <button>Reservar</button>
        </seccion>
        `
    }

    onButtonClicked(){
        const currentValeu =this.getAttribute("menssage"); 
        this.setAttribute("menssage","Gracias por reservar"); 
    }

}

customElements.define("MyButton",Booking);
export default Booking; 