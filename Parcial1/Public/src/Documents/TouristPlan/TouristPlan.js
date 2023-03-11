class  TouristPlan extends  HTMLElement{
     
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return["Destination","Duration","Cost","Description","Activities"]
    }

    connectdCallback(){
        this.render();
    }

    attributesChangedCallback(propName, oldValue, newValue){
        this[propName]= newValue; 
        this.render(); 
    }

    render(){
        this.shadowRoot.innerHTML= `
        <link rel="stylesheet" href="src/Documents/TouristPlan/TouristPlan.css">
        <section>
        <h1><strong>${this.Destination}</strong></h1>
        <h2>${this.Duration}</h2>
        <h2>${this.Cost}</h2>
        <p>${this.Description}</p>
        <p>${this.Activities}</p>
        </section>
        `
    }

    weeks(){
        if(duracionEnDias= 5||7){
            duracionEnDias="Una semana";
        } else if(duracionEnDias <= 5){
            duracionEnDias="Menos de una semana"
        }
    }
}

customElements.define("Tourist-Plan",TouristPlan );
export default TouristPlan;