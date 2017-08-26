
import React from 'react';

import ReatingUI from 'react-rating';
import Parse from 'parse';

const SVGIcon_empty = (props) =>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fffde7" stroke="#ffb300" strokeWidth="1" width="22" height="20" viewBox="0 0 24 24"   ><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
  </div>;

const SVGIcon_full = (props) =>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffb300" stroke="#ffb300" strokeWidth="1" width="22" height="20" viewBox="0 0 24 24"   ><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
  </div>;



class GameCard extends React.Component {

    constructor(props) {
            super(props);
            //this.handleChange = this.handleChange.bind(this);

            this.state = {
              //displatStar: this.props.data.mystar
            };
            //this.handleRatingHover = this.handleRatingHover.bind(this);
        }
/*
    handleRatingHover(rate: ?number) {
      console.log("handleRatingHover setstate!!")
      console.log(this.state)
      this.setState({
        displatStar: rate,
      });
    }

    handleChange(score){
      this.props.onChange(this.props.data._id, score, this.props.data.index)
    }
*/

    render() {

      const good_unclick=(
        <div className="good-unclick-small col m6">
          <a className="waves-effect waves-light btn">재밌겠어</a>
        </div>
      );
      const good_click=(
        <div className="good-click-small col m6">
          <a className="waves-effect waves-light btn">재밌겠어</a>
        </div>
      );
      const bad_unclick=(
        <div className="bad-unclick-small col m6">
          <a className="waves-effect waves-light btn">별로일듯</a>
        </div>
      );
      const bad_click=(
        <div className="bad-click-small col m6">
          <a className="waves-effect waves-light btn">별로일듯</a>
        </div>
      );

      const star_fix=(
        <div className="star-fix col m12">
          <div className="rap">
            <ReatingUI
              empty={<SVGIcon_empty href="#icon-star-empty" className="icon" />}
              full={<SVGIcon_full href="#icon-star-empty" className="icon" />}
              //onChange={this.handleChange}
              //onClick={this.handleRatingHover}
              //initialRate={this.state.displatStar}
            />

          </div>
        </div>
      );

      const GameCardView = (
          <div className="card">
            <div className="card-image">
              <img src="http://localhost:3000/img/1starcraft.png"/>

            </div>
            <div className="card-content">
              <span className="card-title">스타크래프트</span>
            </div>
            <div className="small-action">
            <div className="card-action">
              <div className="row">
                {star_fix}
                {good_unclick}
                {bad_unclick}
              </div>
            </div>
            </div>
          </div>
      );

        return (
          <div className="SmallGameCard">
              {GameCardView}
          </div>

        );
    }
}

GameCard.propTypes = {
};

GameCard.defaultProps = {
}

export default GameCard;
