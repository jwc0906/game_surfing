import React from 'react';

import Parse from 'parse';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

class Filter extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }



    render() {
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);

        return (
          <div className="filter">
            <div className="card">
              <ul className="collapsible" data-collapsible="accordion">
                <li className="filter-header">
                  필터
                </li>
                <li>
                  <div className="collapsible-header active"><i className="material-icons">desktop_windows</i>플랫폼</div>
                  <div className="collapsible-body">
                    <div className="row">
                      <a className="filter-btn-black col l4">PC</a>
                      <a className="filter-btn-black col l4">XBOX</a>
                      <a className="filter-btn-black col l4">PS3</a>
                      <a className="filter-btn-black col l4">PS4</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">confirmation_number</i>장르</div>
                  <div className="collapsible-body">
                    <div className="row">
                      <a className="filter-btn-blue col l4">시뮬레이션</a>
                      <a className="filter-btn-black col l4">액션</a>
                      <a className="filter-btn-blue col l4">슈팅</a>
                      <a className="filter-btn-black col l4">RPG</a>
                      <a className="filter-btn-black col l4">AOS</a>
                      <a className="filter-btn-black col l4">RTS</a>
                      <a className="filter-btn-black col l4">FPS</a>
                      <a className="filter-btn-black col l4">TPS</a>
                      <a className="filter-btn-black col l4">탄막슈팅</a>
                      <a className="filter-btn-black col l4">샌드박스</a>
                      <a className="filter-btn-black col l4">스포츠</a>
                      <a className="filter-btn-black col l4">레이싱</a>
                      <a className="filter-btn-black col l4">아케이드</a>
                      <a className="filter-btn-black col l4">어드밴쳐</a>
                      <a className="filter-btn-black col l4">로그라이크</a>
                      <a className="filter-btn-black col l4">리듬</a>
                      <a className="filter-btn-black col l4">플랫포머</a>
                      <a className="filter-btn-black col l4">디펜스</a>
                      <a className="filter-btn-black col l4">퍼즐</a>
                      <a className="filter-btn-black col l4">보드</a>
                      <a className="filter-btn-black col l4">TCG</a>
                      <a className="filter-btn-black col l4">생존</a>
                      <a className="filter-btn-black col l4">호러</a>
                      <a className="filter-btn-black col l4">캐쥬얼</a>
                      <a className="filter-btn-black col l4">경영</a>
                      <a className="filter-btn-black col l4">대전</a>
                      <a className="filter-btn-black col l4">잠입</a>
                      <a className="filter-btn-black col l4">전략</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">access_time</i>출시년도</div>
                  <div className="collapsible-body">
                    <div className="row">
                      <div className="col l12">
                        <Range min={1990} max={2017} allowCross={false} defaultValue={[1990, 2017]} tipFormatter={value => `${value}년`} />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        );
    }
}

Filter.propTypes = {
};

Filter.defaultProps = {
}

export default Filter;
