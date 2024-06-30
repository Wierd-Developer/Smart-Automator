import React from "react";
import Hero from "./Hero";
import Layout from "./Layout";
import Servicebar from "./Servicebar";
import ServiceCard from "./ServiceCard";
const Painting = () => {
  return (
    <Layout>
      <Hero />
      <Servicebar>
        <div className="assembly">
          <ServiceCard
            title="Paint walls, ceilings, molding, and doors; includes prep and cleanup. Now Trending: Color blocking, stripe details, and statement colors"
            btn1="Interior Painting         "
            btn2="Exterior Painting"
            btn3="Wall Painting"
            btn4="Fence Painting"
            btn5="Cabinet Painting"
            btn6="Texture Painting"
            url="https://s3-alpha-sig.figma.com/img/970b/830d/7c91f78f39a881cc19a20be9fd7692dd?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qLbbEbBJqmct-E5LDwuY5ctMQOVpqn0SAy3AEhvr7lEVdFNhhiKnHi98zrLr5tcDIm4nPgH49yl8xqyRCB7Ht~Cyzpo7PGg6XZAPSaqGwAVusXraSX4nIhj1xXwj2Yix2k81lkrHNFw-X03J8NoSobrRY5S6M~q2VqikX2aQE4OJNTcjIyXWthMFtFBdmVqcQcyh-66JgzUu95ziTljyK3ulMNR46lvxqlWP1pltcnkmsfwyWTdfDOAT5s5I8Shw0R8HU5ZUVG7FAFlMcyOj9TLvY0sk6xZQx33QQzPifOBjNbtZzyvv-dJ1mJJpbtnJQWY82z6Dh0Dk9hSgibBY9A__"
          />
        </div>
      </Servicebar>
    </Layout>
  );
};

export default Painting;
