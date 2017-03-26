var React = require('react');
var LoadList = require('LoadList');


var LoadDataApp = React.createClass({

  getInitialState: function() {
    return {
      loads: [
        {
          id: 1,
          powderMan: 'Vihtavouori ',
          powder: 'N140 ',
          charge: '42.8gr ',
          primer: 'CCI 200 ',
          bulletDes: 'Lapua D166 ',
          bulletWei: '200gr',
          oal: '2.99 '
        },
        {
          id: 2,
          powderMan: 'IMR ',
          powder: '4895 ',
          charge: '32gr ',
          primer: ' CCI 200 ',
          bulletDes: 'Lyman 311299 ',
          bulletWei: '200gr',
          oal: ' 3.24 '
        }

      ]
    };
  },

  render: function() {
    var {loads} = this.state;

    return(
        <div>
          <LoadList loads= {loads}/>
        </div>
    )
  }
});

module.exports = LoadDataApp;
