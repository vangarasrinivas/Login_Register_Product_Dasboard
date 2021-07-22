import React from "react";
import axios from "axios";

export default class GetDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:3030/getproducts").then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <h3 className="text-primary">Product List</h3>

          <table className="table table-hover">
            <thead className="text-warning">
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((product) => (
                <tr>
                  <td className="text-primary">{product.pId}</td>
                  <td className="text-success">{product.pName}</td>
                  <td className="text-secondary">{product.pPrice}</td>
                  <td className="text-danger">
                    {product.InStock === true ? "Available" : "Out of Stock"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
