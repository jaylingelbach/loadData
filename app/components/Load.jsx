import React from 'react';

var Load = React.createClass({
  render: function() {
    var {id, caliber,dataSource, powderMan, powder, primer, primerLotNumber, charge, bulletDes, bulletWei, cast, alloyRatio, wheelWeights, oal} = this.props;

    return(
      <div className="container-fluid">
        <ul>
          <li>Caliber: {caliber}</li>
          <li>Data Source: {dataSource} </li>
          <li>Powder Manufacturer:{powderMan}</li>
          <li>Powder: {powder}</li>
          <li>Charge: {charge}</li>
          <li>Primer: {primer} </li>
          <li>Primer Lot Number: {primerLotNumber} </li>
          <li>Bullet make/model: {bulletDes}</li>
          <li>Bullet Weight: {bulletWei}</li>
          <li>Cast: {cast} </li>
          <li>Alloy Ratio: {alloyRatio} </li>
          <li>Wheel Weights: {wheelWeights} </li>
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
