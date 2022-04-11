import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseEntryItemList from "./components/ExpenseEntryItemList";
import ExpenseEntryItemAdd from "./components/ExpenseEntryItemAdd";
import ExpenseEntryItemEdit from "./components/ExpenseEntryItemEdit";
import ClientAdd from "./components/ClientAdd";
import ClientEdit from "./components/ClientEdit";
import ClientList from "./components/ClientList";
import ReservationAdd from "./components/ReservationAdd";
import ReservationList from "./components/ReservationList";
import ReservationEdit from "./components/ReservationEdit";
import ChambreList from "./components/ChambreList";
import ChambreEdit from "./components/ChambreEdit";
import ChambreAdd from "./components/ChambreAdd";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Menu
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Créer un nouvelle hotel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Liste des hotels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ClientAdd"} className="nav-link">
                    Ajout Client
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ClientList"} className="nav-link">
                    Listes Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ReservationList"} className="nav-link">
                    Listes Reservations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ReservationAdd"} className="nav-link">
                    Ajouter une reservation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ChambreList"} className="nav-link">
                    Listes des chambres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ChambreAdd"} className="nav-link">
                    Ajouter une chambre
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/create" component={ExpenseEntryItemAdd} />
          <Route path="/edit/:id" component={ExpenseEntryItemEdit} />
          <Route path="/index" component={ExpenseEntryItemList} />
          <Route path="/ClientAdd" component={ClientAdd} />
          <Route path="/ClientList" component={ClientList} />
          <Route path="/ClientEdit/:id" component={ClientEdit} />
          <Route path="/ReservationAdd" component={ReservationAdd} />
          <Route path="/ReservationList" component={ReservationList} />
          <Route path="/ReservationEdit/:id" component={ReservationEdit} />
          <Route path="/ChambreAdd" component={ChambreAdd} />
          <Route path="/ChambreList" component={ChambreList} />
          <Route path="/ChambreEdit/:id" component={ChambreEdit} />

          <Route path="/" component={ExpenseEntryItemList} />
        </Switch>
      </Router>
    );
  }
}
export default App;
