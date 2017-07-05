import React from 'react';
import {render} from 'react-dom';
import {Checkbox, Radio, FormGroup, ControlLabel, FormControl, Button, Form, HelpBlock} from 'react-bootstrap';

class FormExample extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: ''
      };
}
  getValidationState() {
    const length = this.state.value.length;
      if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
  }

  handleChange(e) {
   this.setState({ value: e.target.value });
 }


render() {

  return (
      <form>
             <FormGroup controlId="caliber">
               <ControlLabel>Caliber:</ControlLabel>
                 <FormControl componentClass="select" placeholder="select" id="caliber">
                   <option value="select" id="select-caliber">Select</option>
                   <option value="30-06" id="30-06">30-06</option>
                   <option value="357" id="357">357 Magnum</option>
                   <option value="303" id="303">303 British</option>
                   <option value="76254R" id="76254R">7.62 X 54R</option>
              </FormControl>
             </FormGroup>

             <FormGroup
               controlId="dataSource"
               >
               <ControlLabel>Data Source</ControlLabel>
               <FormControl
               type="text"
               label="Text"
               placeholder="Where was the load information found"
             />
            </FormGroup>

            <FormGroup controlId="powderManufacturer">
              <ControlLabel>Powder Manufacturer:</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="alliant">Alliant</option>
                  <option value="hodgdon">Hodgdon</option>
                  <option value="imr">IMR</option>
                  <option value="nobel">Nobel Sport</option>
                  <option value="norma">Norma</option>
                  <option value="ramshot">Ramshot</option>
                  <option value="shooterworld">Shooters World</option>
                  <option value="vihtaVuori">VihtaVuori</option>
             </FormControl>
            </FormGroup>

            <FormGroup
              controlId="powder"
              >
              <ControlLabel>Powder</ControlLabel>
              <FormControl
              type="text"
              label="Text"
              placeholder="Name of powder"
            />
           </FormGroup>

          <FormGroup
            controlId="charge"
            >
            <ControlLabel>Charge</ControlLabel>
            <FormControl
            type="text"
            label="Text"
            placeholder="Weight of powder in grains"
          />
         </FormGroup>
         <FormGroup controlId="primer">
           <ControlLabel>Primer</ControlLabel>
             <FormControl componentClass="select" placeholder="select">
               <option value="select" id="primerSelect"> Select </option>
               <option value="cciPrimers" id="cciPrimers"> - CCI Primers -</option>
               <option value="cci400" id="cci400"> CCI 400 - Small Rifle</option>
               <option value="cci450"id="cci450"> CCI 450  - Small Rifle Magnum Primer</option>
               <option value="cci41" id="cci41"> CCI 41    - Small Rifle Military Primer</option>
               <option value="ccibr4" id="ccibr4"> CCI BR4 - Small Rifle Benchrest Primer</option>
               <option value="cci200" id="cci200"> CCI 200 - Large Rifle Primer</option>
               <option value="cci250" id="cci250"> CCI 250 - Large Magnum Rifle Primer</option>
               <option value="cci34" id="cci34"> CCI 34    - Large Rifle Military Primer</option>
               <option value="ccibr2" id="ccibr2"> CCI BR2 - Large Rifle Benchrest Primer</option>
               <option value="cci500" id="cci500"> CCI 500 - Small Pistol Primer</option>
               <option value="cci550" id="cci550"> CCI 550 - Small Pistol Magnum Primer</option>
               <option value="cci300" id="cci300"> CCI 300 - Large Pistol Magnum Primer</option>
               <option value="cci350" id="cci350"> CCI 350 - Large Pistol Magnum Primer</option>
               <option value="cci35" id="cci35"> CCI 35    - 50 BMG Primers </option>
          </FormControl>
         </FormGroup>
         <FormGroup
           controlId="primerLotNumber"
           >
           <ControlLabel>Primer Lot Number</ControlLabel>
           <FormControl
           type="text"
           label="Text"
           placeholder="Primer Lot number (optional)"
         />
        </FormGroup>

        <FormGroup
          controlId="bulletMakeAndModel"
          >
          <ControlLabel>Bullet Make and Model</ControlLabel>
          <FormControl
          type="text"
          label="Text"
          placeholder="i.e. Lapua D166"
        />
       </FormGroup>

       <FormGroup
         controlId="bulletWeight"
         >
         <ControlLabel>Bullet Weight</ControlLabel>
         <FormControl
         type="text"
         label="Text"
         placeholder="Weight of bullet in grains"
       />
      </FormGroup>

      <Checkbox readOnly id="cast">
  Cast (Optional)
</Checkbox>

<FormGroup
  controlId="alloyRatio"
  >
  <ControlLabel>Alloy Ratio</ControlLabel>
  <FormControl
  type="text"
  label="Text"
  placeholder="20:1, wheel weights, Hardball etc..."
/>
</FormGroup>

<FormGroup
  controlId="oal"
  >
  <ControlLabel>Overall Length</ControlLabel>
  <FormControl
  type="text"
  label="Text"
  placeholder="Overall Length of finished cartridge"
/>
</FormGroup>

<FormGroup
  controlId="cartridgeBaseToOgiveAtLands"
  >
  <ControlLabel>Cartridge Base To Ogive At Lands</ControlLabel>
  <FormControl
  type="text"
  label="Text"
  placeholder="Enter a numerical value"
/>
</FormGroup>


           </form>
  )
}

}



// ReactDOM.render(form, mountNode);
module.exports = FormExample;
