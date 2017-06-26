import React from 'react';
import t from 'tcomb-form';

const Form = t.form.Form;

const FormSchema = t.struct({
  Caliber: t.String,
  DataSource: t.String,
  PowderManufacturer: t.String,
  Powder: t.String,
  Charge: t.Number,
  Primer: t.String,
  BulletDescription: t.String,
  BulletWeight: t.String,
  OverallLength: t.Number
});


  var AddLoadInfo = React.createClass({

    resetForm() {
      this.setState({value: null});
    },

    onSubmit(e) {
      e.preventDefault()
         const value = this.refs.form.getValue()
         if (value) {
           console.log(value)
         }
         this.resetForm();
     },

    // onChange(value) {
    //   this.setState({ value: value });
    // },

    render: function () {
      return(
        <form onSubmit={this.onSubmit}>
          <t.form.Form ref="form" type={FormSchema}/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
      );
    }
});


module.exports = AddLoadInfo;
