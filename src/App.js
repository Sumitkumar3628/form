import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="first-half">
          <h2>Basic Details</h2><br></br>
          <form>
            <div className="first-first-half">
              <label for="mobNo">Mobile Number</label><br></br>
              <input className="mne" type="text" id="mobNo" placeholder="+91 9600621275"/><br></br><br></br>
              <label for="name">Enterprise Group Name</label><br></br>
              <input className="mne" type="text" id="name"/><br/>
            </div>
            <div className="first-second-half">
              <label for="Egn">Name</label><br></br>
              <input className="mne" type="text" id="Egn"/><br/><br></br>
              <label for="Ega">Enterprise Group Address</label><br></br>
              <input className="egabox" type="text" id="Egn"/><br/><br/>
            </div>
          </form>
        </div>

        <div class="vl"></div>

        <div className="second-half">
          <h2>Location</h2><br></br>
          <form>

            <div className="second-first-half">
              <label for="dist">District</label><br></br>
              <select className="distclass" name="district" id="dist">
                <option id="dist" value="Madurai">Madurai</option>
                <option id="dist" value="district 2">district 2</option>
                <option id="dist" value="district 3">district 3</option>
              </select><br></br><br></br>
              <label for="panch">Panchayat</label><br></br>
              <select name="panchayat" id="panch">
                <option id="panch" value="Alagapuram">Alagapuram</option>
                <option id="panch" value="Panchayat 2">Panchayat 2</option>
                <option id="panch" value="Panchayat 3">Panchayat 3</option>
              </select>
            </div>

            <div className="second-second-half">
            <label for="block">Block</label><br></br>
              <select name="blocks" id="block">
                <option id="block" value="Andimadam">Andimadam</option>
                <option id="block" value="Block 2">Block 2</option>
                <option id="block" value="Block 3">Block 3</option>
              </select>
            </div>

          </form>
        </div><br></br>
        
      </header>
      <hr></hr>
      <div className="btns">
        <button type="button">Previous</button>
       <button className="btnnext" type="button">Next</button>
      </div>
    </div>
  );
}

export default App;

