import React, { Component } from 'react'

class List extends Component {

  render() {
    const { list, render } = this.props

    return (
      <ol type="a">
        {
          list.map((item, index) => {
            if (render) {
              return render(item, index)
            }

            return <li key={ index }>{ item.name }</li>
        })
        }
      </ol>
    )
  }
}

class RenderProps extends Component {
  state = {
    fruits: [
      { name: 'Mango', price: 22 },
      { name: 'Sandia', price: 15 },
      { name: 'Melón', price: 18 },
      { name: 'Guanabana', price: 17 }
    ]
  }
  render() {
    const { fruits } = this.state
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Render props</h5>
          <h6 className="card-subtitle mb-2 text-muted">Usaremos el patrón render props</h6>
          <p className="card-text"></p>
          <List list={ fruits } render={
            (data, index) => {
              return <h3 key={ index }>{ data.name } - ${ data.price }</h3>
            }
          }/>
        </div>
      </div>
    )
  }
}

export default RenderProps;