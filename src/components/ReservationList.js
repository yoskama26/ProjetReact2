import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ReservationList extends React.Component {
  constructor(props2) {
    super(props2);
    this.state = { items: [], checkdelete: false };
    this.deleteItem = this.deleteItem.bind(this);

    // console.log(this.props2.match);
  }
  componentDidMount() {
    axios
      .get("https://62055a9c161670001741b9ba.mockapi.io/Reservation")
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

    const idReservation = e.target.id;

    axios
      .delete(
        "https://62055a9c161670001741b9ba.mockapi.io/Reservation/" +
          idReservation
      )
      .then((response) => {
        console.log(response);
        let itemsUpadte = this.state.items.filter(function (item) {
          return item.id != idReservation;
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
        <td>{item.numero}</td>
        <td>{item.datedereservation}</td>
        <td>{item.datedebut}</td>
        <td>{item.datefin}</td>
        <td>{item.montant}</td>
        <td>
          <Link to={"/ReservationEdit/" + item.id} className="btn btn-primary">
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
        <h3 align="center">Liste des Reservations </h3>
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
              <td>numero</td>
              <td>date de reservation</td>
              <td>date de debut</td>
              <td>date de fin</td>
              <td>montant</td>
            </tr>
          </thead>
          <tbody>{this.lists}</tbody>
        </table>
      </div>
    );
  }
}
export default ReservationList;
