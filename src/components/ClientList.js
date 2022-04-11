import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ClientList extends React.Component {
  constructor(props2) {
    super(props2);
    this.state = { items: [], checkdelete: false };
    this.deleteItem = this.deleteItem.bind(this);

    // console.log(this.props2.match);
  }
  componentDidMount() {
    axios
      .get("https://62055a9c161670001741b9ba.mockapi.io/Client")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteItem(e) {
    console.log(e.target.id);
    // alert(e.target.innerHTML);

    const idClient = e.target.id;

    axios
      .delete("https://62055a9c161670001741b9ba.mockapi.io/Client/" + idClient)
      .then((response) => {
        console.log(response);
        let itemsUpadte = this.state.items.filter(function (item) {
          return item.id != idClient;
        });

        this.state.items = itemsUpadte;

        // console.log(itemsUpadte);

        if (response.status == 200) {
          this.state.checkdelete = true;
          this.setState(this.state);
        }

        console.log(this.state.checkdelete);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let divAlert = "";

    if (this.state.checkdelete) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    this.lists = this.state.items.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.nom}</td>
        <td>{item.prenom}</td>
        <td>{item.adresses}</td>
        <td>{item.ville}</td>
        <td>{item.pays}</td>
        <td>{item.codepostal}</td>
        <td>{item.email}</td>
        <td>{item.Telephone}</td>
        <td>
          <Link to={"/clientEdit/" + item.id} className="btn btn-primary">
            Editer
          </Link>
          <button
            className="btn btn-danger"
            id={item.id}
            onClick={this.deleteItem}
          >
            Supprimer
          </button>
        </td>
      </tr>
    ));
    return (
      <div align="center">
        <h3 align="center">Liste des clients </h3>
        {divAlert}
        <table
          border="1"
          style={{
            marginLeft: "20%",
            textAlign: "center"
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "5%"
                }}
              >
                ID
              </th>
              <td>nom</td>
              <td>prenom</td>
              <td>adresse</td>
              <td>ville</td>
              <td>pays</td>
              <td>codePostale</td>
              <td>mail</td>
              <td>Telephone</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody>{this.lists}</tbody>
        </table>
      </div>
    );
  }
}
export default ClientList;
