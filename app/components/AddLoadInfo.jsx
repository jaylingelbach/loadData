var React = require('react');

  var AddLoadInfo = React.createClass({

    render: function () {
      return(
          <form onSubmit={this.onFormSubmit}>
          <input type="submit" ref="load-info"/>
          <input type="text" ref="powder-man" placeholder="Powder Manufacturer"/>
          <input type="text" ref="powder" placeholder="Powder name"/>
          <input type="text" ref="charge" placeholder="Amount in grains"/>
          <input type="text" ref="primer" placeholder="Enter primer"/>
          <input type="text" ref="bullet-des" placeholder="Bullet used"/>
          <input type="text" ref="bullet-wei" placeholder="Bullet weight"/>
          <textarea ref="notes" placeholder="Notes"></textarea>
          </form>
      );
    }

});

module.exports = AddLoadInfo;
