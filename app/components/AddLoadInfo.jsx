var React = require('react');

  var AddLoadInfo = React.createClass({

    render: function () {
      return(
          <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="powder-man" placeholder="Powder Manufacturer"/>
          <input type="text" ref="powder" placeholder="Powder name"/>
          <input type="text" ref="charge" placeholder="Amount in grains"/>
          <input type="text" ref="primer" placeholder="Enter primer"/>
          <input type="text" ref="bullet-des" placeholder="Bullet used"/>
          <input type="text" ref="bullet-wei" placeholder="Bullet weight"/>
          <input type="text" ref="oal" placeholder="Overall length"/>
          <textarea ref="notes" placeholder="Notes"></textarea>
          <input type="submit" ref="load-info"/>
          </form>
      );
    }

});

module.exports = AddLoadInfo;
