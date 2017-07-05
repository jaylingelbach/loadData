import {Checkbox, Radio, FormGroup, ControlLabel, FormControl, Button, Form} from 'react-bootstrap';
import React from 'react';
import {render} from 'react-dom';
import Form from 'Form';
import Tcomb fro



import {Checkbox, Radio, FormGroup, ControlLabel, FormControl, Button, Form} from 'react-bootstrap';
// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }
//
// const form = (
//   <form>
//     <FieldGroup
//       id="caliber"
//       type="text"
//       label="Text"
//       placeholder="Enter text"
//     />
//   </form>
// );



const Form = t.form.Form;

const options = {
  fields: {
    caliber: {
      options: [
        {value: 'M', text: 'Maschio'},
        {value: 'F', text: 'Femmina'}
      ]
    }
  }
};

const Type = t.struct({
  caliber: t.String,
  dataSource: t.String,
  powderManufacturer: t.String,
  powder: t.String,
  charge: t.Number,
  primer: t.String,
  primerLotNumber: t.maybe(t.String),
  brassManufacturer: t.maybe(t.String),
  timesFired: t.maybe(t.String),
  bulletMakeAndModel: t.String,
  bulletWeight: t.String,
  overallLength: t.Number,
  cast: t.maybe(t.Boolean),
  alloyRatio: t.maybe(t.String),
  wheelWeights: t.maybe(t.Boolean),
  cartridgeBaseToOgiveAtLands: t.maybe(t.String),
  dateOfWorkUp: t.maybe(t.Date),
  dateShot: t.maybe(t.Date),
});

class DivForm extends React.Component {
  render() {
    return (
        <form>
        <label>
          Caliber:
        </label>
        <select class="selectpicker" name="caliber">
          <option name="Default"> - </option>
          <option name="30-06">30-06</option>
          <option name="357">357 Magnum</option>
      </select>
        <label>
          Data Source:
          <input type="text" name="dataSource" />
        </label>
        <label>
          Powder Manufacturer:
        </label>
          <select class="selectpicker" name="powderManufacturer">
            <option name="Default"> - </option>
            <option name="30-06">Hodgdon</option>
            <option name="357">Alliant</option>
            </select>
        <label>
          Powder:
          <input type="text" name="powder" />
        </label>
        <label>
          Charge:
          <input type="text" name="charge" />
        </label>
        <label>
          Primer:
          <input type="text" name="primer" />
        </label>
        <label>
          Primer Lot Number:
          <input type="text" name="primerLotNumber" />
        </label>
        <label>
          Bullet Make/Model:
          <input type="text" name="bulletDescription" />
        </label>
        <label>
          Bullet Weight:
          <input type="text" name="bulletWeight" />
        </label>
        <label>
          Cast:
        </label>
        <select class="selectpicker" name="cast">
          <option name="Default"> - </option>
          <option name="Yes">Yes</option>
          <option name="No">No</option>
          </select>
        <label>
          Alloy Ratio:
          <input type="text" name="alloyRatio" />
        </label>
        <label>
          Wheel Weights:
        </label>
        <select class="selectpicker" name="charge">
            <option name="Default"> - </option>
            <option name="Yes">Yes</option>
            <option name="No">No</option>
            </select>
        <label>
          Overall Length:
          <input type="text" name="oal" />
        </label>
        <label>
          Charge:
          <input type="text" name="charge" />
        </label>
        <button
          className="btn btn-primary"
          type="submit"
          > Add to your loads
        </button>
      </form>

    );
  }
}

class AddLoadInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: options,
      showForm: true,
    };
  }

    onClick() {
        this.setState({ showForm: !this.state.showForm });
    }
    render() {
      return (
      <div>
        <Form />
      </div>

      )
    }
};


module.exports = AddLoadInfo;


  <button
    className="btn btn-primary"
    type="submit"
    showForm={this.state.showForm}
    onClick={this.onClick}
    >Add a new load
  </button>
{ this.state.showForm ? <DivForm /> : null }
