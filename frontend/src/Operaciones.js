import React, { Component } from "react";
import axios from "axios"

class Operaciones extends Component {
    constructor(){
        super();
        this.state = {
            primerNumero: "",
            segundoNumero: "",
            resultado: ""
        };
    }


    setPrimerNumero = e =>{
        const { value } = e.target
        this.setState({
            primerNumero : value
        })
    }

    setSegundoNumero = e =>{
        const { value } = e.target
        this.setState({
            segundoNumero : value
        })
    }

    handleSumbit = e =>{
        e.preventDefault();
        axios
            .post("http://localhost:8080/operaciones/suma", {primerNumero: this.state.primerNumero,segundoNumero: this.state.segundoNumero})
            .then((response) => {
                this.setState({resultado: response.data.resultado})
            })
            .catch(err => console.log(err));
    }

    render() {
        return(

            <div className="factorial">
                <div className="card" style={{ maxWidth: '22rem'}}>
                    <div className="card-body" onSubmit={this.handleSumbit} >
                        <h5 className="card-tittle text-center mb-4"> Suma </h5>
                        <form>
                            <div className="form-group">
                                <label> Primer Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.primerNumero} onChange={this.setPrimerNumero} />
                            </div>
                            <div className="form-group">
                                <label> Segundo Numero </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.segundoNumero} onChange={this.setSegundoNumero} />
                            </div>
                            <div className ="form-group">
                                <label> Resultado </label>  
                                <input className="form-control" placeholder="Resultado" defaultValue={this.state.resultado} disabled />
                            </div>

                            <button type="submit" className="btn btn-primary"> Calcular </button>
                        </form>          
                    </div>     
                </div>
            </div>
        );
    }
}

export default Operaciones;