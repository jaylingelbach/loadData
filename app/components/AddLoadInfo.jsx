import React from 'react';
import {render} from 'react-dom';
import t from 'tcomb-form';

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

class AddLoadInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: options,
      showForm: false,
    };
  }

    resetForm() {
      this.setState({ value: null });
    }

    onSubmit(e) {
      e.preventDefault()
      if(showForm === false) {
        this.setState({
          showForm: true
        });
      }
      const value = this.refs.form.getValue()
      if (value) {
        console.log(value)
      }
      this.resetForm();
    };

    onClick(e) {
      e.preventDefault()
      this.setState({
        showForm: true
      });
    }
    render() {
      return (
        <div className="container-fluid">
          <button className="btn btn-primary" showForm={this.showForm} onClick={this.onClick}>Add a new load</button>

      <form onSubmit={this.onSubmit}>
       <Form
         ref="form"
         type={Type}
         options={this.state.options}
       />

     <button className="btn btn-primary">Save</button>
     </form>
   </div>
      );
    }
};


module.exports = AddLoadInfo;
