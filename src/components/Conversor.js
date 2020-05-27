import React, { Component } from 'react';
import './Conversor.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Conversor extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: '',
      moedaB_valor: 0,
    }

    this.converter = this.converter.bind(this)
  }

  converter(){
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y&apiKey=253a48589c90a8a3bcf9`
    
    fetch(url)
    .then(res=>{
      return res.json()
    })
    .then(json=>{
      let cotacao = json[de_para].val;
      let moedaB_valor = (parseFloat(this.state.moedaA_valor)*cotacao).toFixed(2)
        this.setState({moedaB_valor})
    })
  }

  handleChange(event) {
    const value = event.target.value.replace(/\D/, '');
    this.setState({financialGoal: value})
  }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <div className="textButton">
          <input 
            type="text" 
            pattern="[0-9]*"
            onInput={this.handleChange.bind(this)}
            value={this.state.financialGoal}
            className="inputValor"
            placeholder="Digite o valor"
            onChange={(event) => {
              this.setState({moedaA_valor:event.target.value})
            }}
          >
          </input>
          <input 
            type="button" 
            value="Converter"
            className="btnConverter"
            onClick={this.converter}
          >
          </input>
        </div>
        <h2>${this.state.moedaB_valor}</h2>
      </div>
    )
  }
}