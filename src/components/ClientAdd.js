import React from "react";
import axios from "axios";

class ClientAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        nom: "",
        Telephone: "",
        adresses: "",
        prenom: "",
        ville: "",
        codepostal: "",
        pays: "",
        email: ""
      },
      checkForm: false
    };
    this.handlenomChange = this.handlenomChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handleadressesChange = this.handleadressesChange.bind(this);
    this.handlePrenomChange = this.handlePrenomChange.bind(this);
    this.handleVilleChange = this.handleVilleChange.bind(this);
    this.handleCodepostalChange = this.handleCodepostalChange.bind(this);
    this.handlePaysChange = this.handlePaysChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlenomChange(e) {
    this.state.item.nom = e.target.value;
    this.setState(this.state.item);
  }
  handleTelephoneChange(e) {
    this.state.item.Telephone = e.target.value;
    this.setState(this.state.item);
  }
  handleadressesChange(e) {
    this.state.item.adresses = e.target.value;
    this.setState(this.state.item);
  }
  handlePrenomChange(e) {
    this.state.item.prenom = e.target.value;
    this.setState(this.state.item);
  }
  handleVilleChange(e) {
    this.state.item.ville = e.target.value;
    this.setState(this.state.item);
  }
  handleCodepostalChange(e) {
    this.state.item.codepostal = e.target.value;
    this.setState(this.state.item);
  }
  handlePaysChange(e) {
    this.state.item.pays = e.target.value;
    this.setState(this.state.item);
  }
  handleEmailChange(e) {
    this.state.item.email = e.target.value;
    this.setState(this.state.item);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    this.state.item.Telephone = e.target.value;

    axios
      .post(
        "https://62055a9c161670001741b9ba.mockapi.io/Client",
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
          <h3>Ajouter un Client</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label
              style={{
                marginRight: "2%"
              }}
            >
              Nom Hotel
            </label>
            <input
              type="string"
              id="nom"
              name="nom"
              placeholder="Nom de l'hotel"
              value={this.state.item.nom}
              onChange={this.handlenomChange}
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
            <label>Adresse</label>
            <input
              type="string"
              id="adresses"
              name="adresses"
              placeholder="Entrer une adresse"
              value={this.state.item.adresses}
              onChange={this.handleadressesChange}
            />
          </div>

          <div className="form-group">
            <label>Prenom</label>
            <input
              type="string"
              id="prenom"
              name="prenom"
              placeholder="Entrer un prenom"
              value={this.state.item.prenom}
              onChange={this.handlePrenomChange}
            />
          </div>

          <div className="form-group">
            <label>Ville</label>
            <input
              type="string"
              id="ville"
              name="ville"
              placeholder="Entrer un ville"
              value={this.state.item.ville}
              onChange={this.handleVilleChange}
            />
          </div>

          <div className="form-group">
            <label>Code Postal</label>
            <input
              type="number"
              id="codepostal"
              name="codepostal"
              placeholder="Entrer un code postal"
              value={this.state.item.codepostal}
              onChange={this.handleCodepostalChange}
            />
          </div>

          <div className="form-group">
            <label>Pays</label>
            <input
              type="string"
              id="pays"
              name="pays"
              placeholder="Entrer un pays"
              value={this.state.item.pays}
              onChange={this.handlePaysChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="string"
              id="email"
              name="email"
              placeholder="Entrer un email"
              value={this.state.item.email}
              onChange={this.handleEmailChange}
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
export default ClientAdd;
