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
  cartridgeBaseToOgiveAtLands: t.maybe(t.String),
  dateOfWorkUp: t.maybe(t.Date),
  dateShot: t.maybe(t.Date),


});

var AddLoadInfo = React.createClass({

  getInitialState() {
      return { options: options };
    },

    resetForm() {
      this.setState({ value: null });
    },

    onSubmit(e) {
      e.preventDefault()
      const value = this.refs.form.getValue()
      if (value) {
        console.log(value)
      }
      this.resetForm();
    },

    render: function() {
      return (
        <div className="container-fluid">
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
});


module.exports = AddLoadInfo;
