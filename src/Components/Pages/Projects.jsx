import React, { useEffect, useRef } from "react";
import "../Styles/Project.css";
import ScrollReveal from "scrollreveal";
const Projects = () => {
  const headingRef = useRef();
  useEffect(() => {
    ScrollReveal().reveal(headingRef.current, {
      distance: "60px",
      duration: 2500,
      delay: 200,
      easing: "ease-in",
    });
  });
  return (
    <div className="projects" ref={headingRef}>
      <div className="project-container">
        <h4>Popular Projects</h4>
        <div className="cards-wrapper">
          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/39e5/debc/052bca2250a00c7a8ac96837e42077ab?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTXvJ6PvBGTCacUEs~Rn4gKrvkbkQkwrfWMpB~AtexLNS8uCIZUTg3KW9RJFv6xW4NEomBsbxXHT6jhl0Uur8-D3z6VROh7LlkCjNeAQaDq~cGBGMFreF~DXrWY7K3M~4okUgDYLaN2-Ouf-T~WPgeO6kw8Smhd65EeApV~-Pgxu-aQ9D2eJxXWnDIuknrRCr7gCVJZ9HEwlP8ZvWB9q1HRekih4TFVvECJ8BtmjcGiDci1gHIsUOxh5XWWF1trTav6HVv53Ka1BWdVUu1FtgX3BD2oVX-Mlr3IQLgvSxOJYflA1Qel7Uieo2u2udL7WIbhqNyJARM2TxEUK63sMNA__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Smart Home Devices</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/8a20/8484/a7dc7c51710f399f64a39201614a61dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjGG7W-2JRNXYtrDET-TZirvTQ0VgCYzl0ZdGto8EW1uKnfmGhxzOhxtJ3iBKIr1Gxjvx4nG2CwAHkesP~KNq52HtEy6iV~rOMd6ucfuabGWgtC0ds651aHP3d0HJotFHK~rPfSF78qOluxIPwxZsjVZ2ioXdEck3K~BKWYXwMp4eUH65PnHLs3a4RGMWGrRzGVf0j~UNufMzJEQf~rBdx3ouXgbfNaMBXGu33L29~ncmGaElV0uTrT-sCUsAWFOaaaLNG6QsMV69L7Aov8Udnov2A9k839p3gGMGFrnmTSqiJ1H8MisQXQVKdjMK38SzF83GtDJ9aWCUwANpcQh~g__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Home Automation Services</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/550b/81e8/7b122f5e7dfd4858351172eebec7d8d3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWIfRHVi~IFL0820b6Y9nCdM~1Wbrwp0Ha3fCAkFM1r~Ym7t92nFJXf6ht8hYH~cTLaxd67tnUZ~R96AL36fXIvEp6vE~taV2Zfnn9bvhk4TEc-05yRSfnaVIyPSXGhcic9m24rykQmv72TLEO1oPh9ORnIga9TM5YVbxcMufvNxDpxFTcfP5M49tQKe8MEJh-ZICgZpHF4hgtvgPKhyGBgZjLSFqk~MQrElbLHarQeWbDRWbv1lBqEbW82hHIa3ZEV0iAXlgtszzLomtDheIDzZRLNQZyAtLprfqdVuOCllRT7ZPYtEH7gYOR00F9~emcSAK0ucLrKMk~iL~AbjBg__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Energy management</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/f176/26f2/101737059989d77c222502ccf213cc79?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JR4E6MogneLd5irv81lW2x1uUQpKyhd2dH5~J0i4cta4kZoEC-HMlqYoEDUMVjtcC6ulppd4iXQXe8HlrxpqiZmZF8S9u0OBAsqlfMVejp9L4V3O3yZQd6YM-2SYyAfkLdXoPa0qLoXpJXciGq11uAoOYpib~ct7DezhA5F2ytOX66g3ds7m9DnyWWDhpYmdugozcxD0LNwb27J0SyCm3DATDmkgKGTfHzEt9hyXp4g1A7S~f4qmzV5dZcFbtbT1L7Cu83np~Ll0ia5~Okg0cJ~IIlq66dV5aI4XswH2bbJ9kuyR-eS8zx22H3oSaLq71pFCAuhY~nzeoH9NxRTcrQ__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Smart Home Devices</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/9039/4673/f411277bc54b6ee29f0204858c0dd73b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P16gTxq2~lKtv2au9M7qYAwfWtsKVGd6Vp7zVff88skRFQ51gUYKjRiCBgAwys9Q0RtuUi1YZmAtxkXVqlZAXESDMGvpAA9~sAxmqfIkorl4avvC2EvFE58Vvjl6WfXCDARIlKLjqJ6pshSowFLMBAGxLQmdGnLX-gbO7spun4Uvw1AV4rouCQLiuT80cCq5Qkopp9rrNCUXDU6xZnYZ0Mf4mjyrlduiFBkPONN8Cw9kBUd8XFtbYB4wpeDeW~wKSp1OxjOHpdZRMlNm6HVR5fto0808~k18GT9VeExUMm1b6K6vN-N6CLoeR9asUHuGoGSFhXtbJVmbF8WbdjNwsA__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Smart Home Devices</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>

          <div className="cards">
            <div className="cards-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/4870/86f7/0df64b8f5cc738b59e155c78882bd363?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4EB2Yj29hkVn9TNVpSXdtp7i0tyBK6gCYxsIzYDAKhqhD6GInQfvrnacX4sdLzATJU1099hv7Ekz39PqM0kUq0TrXAHlzfUoAVBs14r1GQWW-0R2WQAg8AEkkh9vbIPPZpBi6XCp2O6oMEpLt5CcJ6eNLlE1UP~hr8Z5hj1F-y5809WCqWcxM5puzcyKWCNCwR2uhh5xmxb~4tY5bU7FaQeOImYM6C5w3ChXNux6WJ4QBTfWRGt~y42R3VYITM4rEMSkOHAOltCr4NCMAbqgUzUr1~2TG5uK03DjYsbCJ~TpsStCimwzLq1TU8h6WcVHT38juX2zupY3Y5Qqu4szA__"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Smart Home Devices</h4>
              <p>Projects starting at $49</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
