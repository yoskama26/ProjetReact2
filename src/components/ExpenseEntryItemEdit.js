import React from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";
// <Redirect to="/index" />

class ExpenseEntryItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        nom: "",
        adresse: "",
        Telephone: ""
      },
      checkForm: false
    };

    this.handlenomChange = this.handlenomChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handleadresseChange = this.handleadresseChange.bind(this);
    console.log(this.props.match.params.id);
    console.log(this.props.match);
  }

  componentDidMount() {
    axios
      .get(
        "https://62055a9c161670001741b9ba.mockapi.io/Hotel/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ item: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handlenomChange(e) {
    this.state.item.nom = e.target.value;
    this.setState(this.state.item);
  }
  handleTelephoneChange(e) {
    this.state.item.Telephone = e.target.value;
    this.setState(this.state.item);
  }
  handleadresseChange(e) {
    this.state.item.adresse = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    axios
      .put(
        "https://62055a9c161670001741b9ba.mockapi.io/Hotel/" +
          this.state.item.id,
        this.state.item
      )
      .then((response) => {
        console.log(response);
        // this.setState({ items: response.data });
        if (response.status == 200) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
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
          La mise à jour a été éffectué avec succés
        </div>
      );
    }

    return (
      <div id="container">
        <div>
          <h3>Modifier un produit</h3>
        </div>

        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>Hotel</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Un hotel ? Trivago"
              value={this.state.item.nom}
              onChange={this.handlenomChange}
            />
          </div>

          <div className="form-group">
            <label>Adresse</label>
            <input
              type="string"
              id="adresse"
              name="adresse"
              placeholder="Entrer une adresse"
              value={this.state.item.adresse}
              onChange={this.handleadresseChange}
            />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              placeholder="Entrer un telephone"
              value={this.state.item.Telephone}
              onChange={this.handleTelephoneChange}
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
export default ExpenseEntryItemEdit;
