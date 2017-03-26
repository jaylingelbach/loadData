var React = require('react');

var Load = React.createClass({
  render: function() {
    var {powderMan} = this.props;
    var {powder} = this.props;
    var {charge} = this.props;
    var {bulletDes} = this.props;
    var {bulletWei} = this.props;
    var {oal} = this.props;

    return(
      <div>
        <ul>
          <li>Powder Manufacturer:{powderMan}</li>
          <li>{powder}</li>
          <li>{charge}</li>
          <li>{bulletDes}</li>
          <li>{bulletWei}</li>
          <li>{oal}</li>
        </ul>
      </div>
    )
  }
});

module.exports = Load;

/*
// find way to return them all at once without writing them all out!




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
