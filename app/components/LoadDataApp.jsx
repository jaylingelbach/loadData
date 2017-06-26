import React from 'react';
import LoadList from 'LoadList';
import AddLoadInfo from 'AddLoadInfo';
import Nav from 'Nav';

var LoadDataApp = React.createClass({

  getInitialState: function() {
    return {
      value: null,
      loads: [
        {
          id: 1,
          caliber: '7.62 X 54R',
          dataSource: 'Nosler',
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
          caliber: '30-06',
          powderMan: 'IMR ',
          powder: '4895 ',
          charge: '32gr ',
          primer: ' CCI 200 ',
          bulletDes: 'Lyman 311299 ',
          bulletWei: '200gr',
          oal: ' 3.56 '
        },

        {
          id: 3,
          caliber: '30 M1 Carbine',
          powderMan: 'Hodgdon ',
          powder: 'H110 ',
          charge: '13gr ',
          primer: ' CCI 400 ',
          bulletDes: 'Jacketed soft point ',
          bulletWei: '110gr',
          oal: ' 2.34 '
        },

        {
          id: 4,
          caliber: '45 ACP',
          powderMan: 'Alliant ',
          powder: 'Bullseye ',
          charge: '5gr ',
          primer: ' CCI 200 ',
          bulletDes: 'Round Nose ',
          bulletWei: '230gr',
          oal: ' 1.25 '
        }

      ]
    };
  },

  render: function() {
    var {loads} = this.state;

    return(
        <div>
          <AddLoadInfo form={this.props.form} />
          <LoadList loads= {loads}/>
        </div>
    )
  }
});

module.exports = LoadDataApp;
