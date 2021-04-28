import React, { Component } from "react";
import axios from "axios"

class Factorial extends Component {
    constructor(){
        super();
        this.state = {
            numero: "",
            resultado: ""
        };
    }


    setNumero = e =>{
        const { value } = e.target
        this.setState({
            numero : value
        })
    }

    handleSumbit = e =>{
        e.preventDefault();
        axios
            .post("http://localhost:1818/factorial", {operando: this.state.numero})
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
                        <h5 className="card-tittle text-center mb-4"> Factorial </h5>
                        <form>
                            <div className="form-group">
                                <label> Operando </label>
                                <input className="form-control" placeholder="Numero" defaultValue={this.state.numero} onChange={this.setNumero} />
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

export default Factorial;