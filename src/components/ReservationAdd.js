import React from "react";
import axios from "axios";

class ReservationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        numero: "",
        datedereservation: "",
        datedebut: "",
        datefin: "",
        montant: ""
      },
      checkForm: false
    };
    this.handlenumeroChange = this.handlenumeroChange.bind(this);
    this.handledatedereservationChange = this.handledatedereservationChange.bind(
      this
    );
    this.handledatedebutChange = this.handledatedebutChange.bind(this);
    this.handledatefinChange = this.handledatefinChange.bind(this);
    this.handlemontantChange = this.handlemontantChange.bind(this);
  }

  handlenumeroChange(e) {
    this.state.item.numero = e.target.value;
    this.setState(this.state.item);
  }
  handledatedereservationChange(e) {
    this.state.item.datedereservation = e.target.value;
    this.setState(this.state.item);
  }
  handledatedebutChange(e) {
    this.state.item.datedebut = e.target.value;
    this.setState(this.state.item);
  }
  handledatefinChange(e) {
    this.state.item.datefin = e.target.value;
    this.setState(this.state.item);
  }
  handlemontantChange(e) {
    this.state.item.montant = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.datedereservation = e.target.value;

    axios
      .post(
        "https://62055a9c161670001741b9ba.mockapi.io/Reservation",
        this.state.item
      )
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
        // this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    let divAlert = "";

    if (this.state.checkForm) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    return (
      <div id="container">
        <div>
          <h3>Ajouter une Reservation</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>datedereservation</label>
            <input
              type="number"
              id="datedereservation"
              name="datedereservation"
              placeholder="Entrer un datedereservation"
              value={this.state.item.datedereservation}
              onChange={this.handledatedereservationChange}
            />
          </div>

          <div className="form-group">
            <label>Adresse</label>
            <input
              type="string"
              id="datedebut"
              name="datedebut"
              placeholder="Entrer une adresse"
              value={this.state.item.datedebut}
              onChange={this.handledatedebutChange}
            />
          </div>

          <div className="form-group">
            <label>datefin</label>
            <input
              type="string"
              id="datefin"
              name="datefin"
              placeholder="Entrer un datefin"
              value={this.state.item.datefin}
              onChange={this.handledatefinChange}
            />
          </div>

          <div className="form-group">
            <label>montant</label>
            <input
              type="string"
              id="montant"
              name="montant"
              placeholder="Entrer un montant"
              value={this.state.item.montant}
              onChange={this.handlemontantChange}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}
export default ReservationAdd;
