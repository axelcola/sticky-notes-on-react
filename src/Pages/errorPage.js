import "./errorPage.css";
import { Link } from "wouter";
import computer from "../images/computer.png";

export default function errorPage() {
  return (
    <div className="container">
      <Link to="/sticky-notes-on-react">
        <img src={computer} alt="404error" className="img" />
      </Link>
      <h1>Hmm, I'm sorry 🙏</h1>
      <h2>Page not found :(</h2>
      <p>Please go or click in the not found logo</p>
    </div>
  );
}
