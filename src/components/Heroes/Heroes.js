import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeroes } from '../../store/heroes/selectors';
import { addHero } from '../../store/heroes/actionCreators';

export class Heroes extends Component {
  static propTypes = {
    heroes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    addNewHero: PropTypes.func.isRequired,
  };

  handleClick = () => this.props.addNewHero({ name: 'super' });

  render() {
    const { heroes } = this.props;
    return (
      <div>
        {heroes.map(hero => (
          <p key={hero.name}>{hero.name}</p>
        ))}
        <button type="button" onClick={this.handleClick}>
          Add Hero
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: getHeroes(state),
});

export default connect(
  mapStateToProps,
  {
    addNewHero: addHero,
  },
)(Heroes);
