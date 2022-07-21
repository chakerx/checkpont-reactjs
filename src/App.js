import './App.css';

function App() {
  return (
    <div className="App">
      <form className="A1">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputPrénom4">Prénom</label>
      <input type="Prénom" className="form-control" id="inputPrénom4" placeholder="Prénom"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputNom4">Nom</label>
      <input type="Nom" className="form-control" id="inputNom4" placeholder="Nom"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputDate">Date De Naissance</label>
    <input type="text" className="form-control" id="inputDate" placeholder="Date"/>
  </div>
  <div className="form-group">
    <label for="inputEmail">Adresse Email</label>
    <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputNuméro">Numéro de Téléphone</label>
      <input type="text" className="form-control" id="inputNuméro"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Situation</label>
      <select id="inputState" className="form-control">
        <option selected>Etudiant</option>
        <option>professionel</option>
      </select>
    </div>
    
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
</form>
    </div>
  );
}

export default App;
