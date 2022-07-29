import { useRef } from "react";
import PropTypes from 'prop-types';
import { useMouse } from 'react-use';
import './demoComponent.css';

function DemoComponent(props) {
  const { msg } = props;
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);
  
  return (
    <div className="demo-component" ref={ref}>
      <h1>{msg}</h1>
      <h2>This is a component use react-use</h2>
      <span>x: {elX}, y: {elY}</span>
    </div>
  );
}

DemoComponent.propTypes = {
  msg: PropTypes.string
};

export default DemoComponent
