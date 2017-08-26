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


class BigGameCard extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }

    render() {

      const good_unclick=(
        <div className="good-unclick col">
          <a className="waves-effect waves-light btn">재밌겠어</a>
        </div>
      );
      const good_click=(
        <div className="good-click col">
          <a className="waves-effect waves-light btn">재밌겠어</a>
        </div>
      );
      const bad_unclick=(
        <div className="bad-unclick col">
          <a className="waves-effect waves-light btn">별로일듯</a>
        </div>
      );
      const bad_click=(
        <div className="bad-click col">
          <a className="waves-effect waves-light btn">별로일듯</a>
        </div>
      );

      const star_btn=(
        <div className="star-btn col">
          <div className="rap">
            <ReatingUI
              empty={<SVGIcon_empty href="#icon-star-empty" className="icon" />}
              full={<SVGIcon_full href="#icon-star-empty" className="icon" />}
              //onChange={this.handleChange}
              //onClick={this.handleRatingHover}
              //initialRate={this.state.displatStar}
            />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              이미 해봤어
            </span>
          </div>
        </div>
      );

        return (
          <div className="row">
            <div className="col m12 BigGameCard">
              <div className="card">

              <p className="card-title">스타크래프트</p>

              <div className="card-content">
              <div className="top">
              <hr/>
              </div>
                <div className="row">
                  <div className="col m9 vid">
                    <div className="video-container">
                      <iframe src="https://www.youtube.com/embed?listType=search&list=스타크래프트&modestbranding=1" frameBorder="0" allowFullScreen ></iframe>
                    </div>
                  </div>
                  <div>
                    <div className="col m3 right-side z-depth-1 ">
                      <img className="responsive-img" src="http://localhost:3000/img/1starcraft.png"/>
                      <div className="row">
                        <div className=" z-depth-1 col m6">PC</div>
                      </div>
                      <div className="row">
                        <div className="z-depth-1 col m6">전략</div>
                        <div className="z-depth-1 col m6">RTS</div>
                      </div>
                      <div className="row">
                        <div className="z-depth-1 col m6">1998년</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>

              <div className="row">
                {star_btn}
                {good_unclick}
                {bad_unclick}


              </div>

              </div>
            </div>
          </div>


        );
    }
}

BigGameCard.propTypes = {
};

BigGameCard.defaultProps = {
}

export default BigGameCard;
