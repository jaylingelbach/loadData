import React from 'react';
import t from 'tcomb-form';

const Form = t.form.Form;

const Type = t.struct({
  Caliber: t.String,
  dataSource: t.String,
  PowderManufacturer: t.String,
  Powder: t.String,
  Charge: t.Number,
  Primer: t.String,
  BulletDescription: t.String,
  BulletWeight: t.String,
  OverallLength: t.Number
});


  var AddLoadInfo = React.createClass({

    onSubmit(e) {
      e.preventDefault()
         const value = this.refs.form.getValue()
         if (value) {
           console.log(value)
         }
     },

    // save() {
    //   const value = this.refs.form.getValue();
    //   if (value) {
    //     console.log(value);
    //   }
    // },

    onChange(value) {
      this.setState({ value: value });
    },

    render: function () {
      return(
        <div className="form-group">
          <Form
            ref="form"
            type={Type}
            onChange={this.onChange}
            />
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      );
    }
});


module.exports = AddLoadInfo;
