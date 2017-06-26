import React from 'react';

var Load = React.createClass({
  render: function() {
    var {id, caliber,dataSource, powderMan, powder, charge, bulletDes, bulletWei, oal} = this.props;

    return(
      <div>
        <ul>
          {id} .
          <li>Caliber: {caliber}</li>
          <li>Data Source: {dataSource} </li>
          <li>Powder Manufacturer:{powderMan}</li>
          <li>Powder: {powder}</li>
          <li>Charge: {charge}</li>
          <li>Bullet make/model: {bulletDes}</li>
          <li>Bullet Weight: {bulletWei}</li>
          <li>Overall Length: {oal}"</li>
        </ul>
      </div>
    )
  }
});

module.exports = Load;

/*
// find way to return them all at once without writing them all out! -array but really not a huge deal




var props = [
  {
  powderMan:{powderMan},
   powder: {powder},
   charge: {charge},
   primer: {primer},
   bulletDes: {bulletDes},
   bulletWei: {bulletWei},
   oal: {oal}
 }

];
 */
