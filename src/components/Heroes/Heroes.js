import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getHeroes } from '../../store/heroes/selectors';

export class Heroes extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
      const { heroes} = this.props;
      console.log(heroes);
    return (
      <div>
        {heroes.map(hero => <p>{hero.name}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  heroes: getHeroes(state),
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);