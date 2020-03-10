import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      product: 0
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const productObj =  {        
        product: this.props.products[this.state.product],
        quantity: this.state.quantity
      }

    this.props.onSubmit(productObj);
  }

  render() {
    const options = this.props.products.map((product, i) => {
      return (
        <option key={product.id} value={i}>
          {product.name}
        </option>
      );
    });

    return (
      <form>
        <div className="form-group">
          <label htmlFor="quantity">
            <h3>Quantity</h3>
          </label>
          <input
            onChange={this.handleChange}
            className="form-control"
            type="number"
            name="quantity"
            value={this.state.quantity}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="product">
            <h3>Product</h3>
          </label>
          <select
            onChange={this.handleChange}
            className="form-control"
            name="product"
          >
            {options}
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={this.handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
