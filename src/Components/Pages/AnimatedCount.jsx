import React from "react";
import CountUp from "react-countup";
import "../Styles/AnimatedCount.css";
import { useInView } from "react-intersection-observer";
const AnimatedCount = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="animated-count">
      <div className="animated-container">
        <div ref={ref} div className="animated-tags">
          <h2 style={{ color: "#fff" }}>
            {inView ? <CountUp end={642} duration={3} /> : "0"}
          </h2>
          <p>Lock Installed</p>
        </div>
        <div div className="animated-tags">
          <h2 style={{ color: "#fff" }}>
            {inView ? <CountUp end={746} duration={3} /> : "0"}
          </h2>
          <p>Happy Customer</p>
        </div>
        <div div className="animated-tags">
          <h2 style={{ color: "#fff" }}>
            {inView ? <CountUp end={3456} duration={2} /> : "0"}
          </h2>
          <p>Coffe Cups</p>
        </div>
        <div div className="animated-tags">
          <h2 style={{ color: "#fff" }}>
            {inView ? <CountUp end={431} duration={3} /> : "0"}
          </h2>
          <p>Premises Secured</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCount;
