import 'rc-collapse/assets/index.css';
import 'string.prototype.repeat';
import Collapse, { Panel } from 'rc-collapse';
import React from 'react';
import ReactDOM from 'react-dom';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

const Test = React.createClass({
  getInitialState() {
    return {
      activeKey: [],
    };
  },

  onAccordionChange(activeKey) {
    this.setState({ activeKey });
  },

  render() {
    return (
      <Collapse
          onChange={this.onAccordionChange.bind(this)}
          activeKey={this.state.activeKey}
      >
          <Panel header="about" key={'about'} >about</Panel>
          <Panel header="gallery" key={'photos'} >this.renderPhotos(gallery)</Panel>
          <Panel header="video" key={'video'} >this.renderVideo(videos)</Panel>
          <Panel header="contact" key={'contact'} >contact us</Panel>
          <Panel header="share" key={'share'} >
              <a href={`whatsapp://send?text=Take a look at my business card: http://react-js-api.herokuapp.com/111`} className="wa_btn wa_btn_s">Share</a>
          </Panel>
      </Collapse>
    );
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
