import React, { Component } from "react";
import axios from "axios"

class Operaciones extends Component {
    constructor(){
        super();
        this.state = {
            primerNumeroSuma: "",
            segundoNumeroSuma: "",
            resultadoSuma: "",
            primerNumeroResta: "",
            segundoNumeroResta: "",
            resultadoResta: ""
        };
    }


    setPrimerNumeroSuma = e =>{
        const { value } = e.target
        this.setState({
            primerNumeroSuma : value
        })
    }

    setSegundoNumeroSuma = e =>{
        const { value } = e.target
        this.setState({
            segundoNumeroSuma : value
        })
    }

    setPrimerNumeroResta = e =>{
        const { value } = e.target
        this.setState({
            primerNumeroResta : value
        })
    }

    setSegundoNumeroResta = e =>{
        const { value } = e.target
        this.setState({
            segundoNumeroResta : value
        })
    }

    handleSumbitSuma = e =>{
        e.preventDefault();
        axios
            .post("http://localhost:8080/operaciones/suma", {primerNumero: this.state.primerNumeroSuma,segundoNumero: this.state.segundoNumeroSuma})
            .then((response) => {
                this.setState({resultadoSuma: response.data.resultado})
            })
            .catch(err => console.log(err));
    }

    handleSumbitResta = e =>{
        e.preventDefault();
        axios
            .post("http://localhost:8080/operaciones/resta", {primerNumero: this.state.primerNumeroResta,segundoNumero: this.state.segundoNumeroResta})
            .then((response) => {
                this.setState({resultadoResta: response.data.resultado})
            })
            .catch(err => console.log(err));
    }

    render() {
        return(

            <div>

            <div className="suma">
                <div className="card" style={{ maxWidth: '22rem'}}>
                    <div className="card-body" onSubmit={this.handleSumbitSuma} >
                        <h5 className="card-tittle text-center mb-4"> Suma </h5>
                        <form>
                            <div className="form-group">
                                <label> Primer Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.primerNumeroSuma} onChange={this.setPrimerNumeroSuma} />
                            </div>
                            <div className="form-group">
                                <label> Segundo Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.segundoNumeroSuma} onChange={this.setSegundoNumeroSuma} />
                            </div>
                            <div className ="form-group">
                                <label> Resultado </label>  
                                <input className="form-control" placeholder="Resultado" defaultValue={this.state.resultadoSuma} disabled />
                            </div>

                            <button type="submit" className="btn btn-primary"> Calcular Suma </button>
                        </form>          
                    </div>     
                </div>
            </div>

            <div className="resta">
                <div className="card" style={{ maxWidth: '22rem'}}>
                    <div className="card-body" onSubmit={this.handleSumbitResta} >
                        <h5 className="card-tittle text-center mb-4"> Resta </h5>
                        <form>
                            <div className="form-group">
                                <label> Primer Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.primerNumeroResta} onChange={this.setPrimerNumeroResta} />
                            </div>
                            <div className="form-group">
                                <label> Segundo Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.segundoNumeroResta} onChange={this.setSegundoNumeroResta} />
                            </div>
                            <div className ="form-group">
                                <label> Resultado </label>  
                                <input className="form-control" placeholder="Resultado" defaultValue={this.state.resultadoResta} disabled />
                            </div>

                            <button type="submit" className="btn btn-primary"> Calcular Resta </button>
                        </form>          
                    </div>     
                </div>
            </div>

            </div>
        );
    }
}

export default Operaciones;