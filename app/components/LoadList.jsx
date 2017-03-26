var React = require('react');
var Load = require('Load');

var LoadList = React.createClass({
  render: function() {
    var {loads} = this.props;
    var renderLoads = () => {
      return loads.map((load) => {
        return (
          <Load key={loads.id} {...load}/>
        );
      });
    };
    return(
      <div>
        {renderLoads({})}
      </div>
    )
  }
});

module.exports = LoadList;
