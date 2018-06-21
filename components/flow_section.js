import React from 'react';
const formConnectorH = (
  <div className="flex items-center justify-center">
    <div className="bt bw1 dib w0 b--black-10" />
    <div className="h4 w0 br2 tc br--left bt bl bb bw1 b--black-10" />
  </div>
);
export default () => (
  <div style={{ lineHeight: 1.3 }} className="flex-l pb3 pt5 cf f6 flex-row dn">
    <div className="w5">
      <div className="br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2">
        <img
          style={{ width: 18, height: 18 }}
          src="../static/icons/icon_function.svg"
        />
      </div>
      <div>Function</div>
      <div className="o-60 mt1">What is the funciton type?</div>
    </div>
    <div className="flex mr2">
      <div className="w4 pt5 tc">{formConnectorH}</div>
    </div>
    <div className="flex w5">
      <div className="">
        <div className="mb4">
          <div className="br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2">
            <img
              style={{ width: 18, height: 12 }}
              src="../static/icons/icon_zoom.svg"
            />
          </div>
          <div>Zoom function</div>
          <div className="o-60 mt1">Adjust based on zoom level</div>
        </div>
        <div>
          <div className="br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2">
            <img
              style={{ width: 16, height: 12 }}
              src="../static/icons/icon_property.svg"
            />
          </div>
          <div>Property function</div>
          <div className="o-60 mt1">
            What is the value type of the property?{' '}
          </div>
        </div>
      </div>
    </div>
    <div className="flex mr2">
      <div className="w4 pt5 tc">{formConnectorH}</div>
    </div>
    <div className="flex w-80 flex-column mt6 ">
      <div className="mr4 flex flex-row w-100">
        <div className=" w-40 mr4">
          <div className="br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2">
            <img
              style={{ width: 12, height: 12 }}
              src="../static/icons/icon_string.svg"
            />
          </div>
          <div>String </div>
          <div className="o-60 mt1">
            String value allows for categorical functions
          </div>
        </div>
        <div className="flex items-center nl4 mr4 justify-center">
          <div className="bt bw1 dib w1 b--black-10" />
        </div>
        <div className="mb4 w-40 ">
          <div className="cf">
            <div className="br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 12, height: 12 }}
                src="../static/icons/icon_categorical.svg"
              />
            </div>
            <div className="fl ml3 mr3 f7 mt2 o-50"> + </div>
            <div className="br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 18, height: 12 }}
                src="../static/icons/icon_zoom.svg"
              />
            </div>
          </div>
          <div>Categorical only</div>
          <div className="o-60 mt1">Simple value or add zoom function</div>
        </div>
      </div>
      <div className="flex flex-row w-100">
        <div className="w-40 mr4">
          <div className="br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2">
            <img
              style={{ width: 12, height: 12 }}
              src="../static/icons/icon_number.svg"
            />
          </div>
          <div>Number</div>
          <div className="o-60 mt1">What type of property function?</div>
        </div>
        <div className="flex items-center nl4 mr4 justify-center">
          <div className="bt bw1 dib w1 b--black-10" />
        </div>
        <div className="w-50">
          <div className="cf ">
            <div className="br-100 fl mr2 flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 12, height: 12 }}
                src="../static/icons/icon_categorical.svg"
              />
            </div>
            <div className="br-100 fl mr2 flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 12, height: 12 }}
                src="../static/icons/icon_exponential.svg"
              />
            </div>
            <div className="br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 12, height: 12 }}
                src="../static/icons/icon_interval.svg"
              />
            </div>
            <div className="fl ml3 mr3 f7 mt2 o-50"> + </div>
            <div className="br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2">
              <img
                style={{ width: 18, height: 12 }}
                src="../static/icons/icon_zoom.svg"
              />
            </div>
          </div>
          <div>Exponential, categorical, or interval</div>
          <div className="o-60 mt1">Simple value or add zoom function</div>
        </div>
      </div>
    </div>
  </div>
);
