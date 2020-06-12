import React, { Component } from 'react';

const withCounter = (Comp) => {
  return class extends Component {
    state = {
      num: 0
    }

    add = ()=> {
      this.setState(state => ({
        num: state.num +1
      }))
    }

    render() {

      const { num } = this.state
      return (
        <Comp num={num} add={this.add}/>
      )
    }
  }
}

class HighOrderComponent extends Component {
  state = {  }
  render() {
    const { num, add } = this.props
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">High Order Component</h5>
          <h6 className="card-subtitle mb-2 text-muted">Componentes de alto orden (HOC)</h6>
          <div className='d-flex flex-column align-items-center'>
            <p>{num}</p>
            <button className='btn btn-secondary' onClick={add}>Clic</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withCounter(HighOrderComponent);