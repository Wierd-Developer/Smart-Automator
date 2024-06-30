import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import Servicebar from "./Servicebar";
import ServiceCard from "./ServiceCard";

const Cleaning = () => {
  return (
    <Layout>
      <Hero />
      <Servicebar>
        <div className="assembly">
          <ServiceCard
            title="Clean your home or office; deep clean appliances and other spaces.
Now Trending: Eco-friendly products, home cleaning checklists, and cleaning hacks"
            btn1="Home Cleaning"
            btn2="Office Cleaning"
            btn3="Carpet Cleaning"
            btn4="Window Cleaning"
            btn5="Upholstery Cleaning"
            btn6="Tile & Grout Cleaning"
            url="https://s3-alpha-sig.figma.com/img/8a34/e81c/9a2b71aa64ea00f116fa10304db51a8e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IGFQEzygIL9FZHgd9B4FbM7B1QLYSlP9mTNhg7aXsYLNEw9Z2I4xk10YXmfnGBzMgDp9GQN8W7KTIkiH-D9IFy5rR1D0hdTH0FdnAqzKqBGD9wdPFCXI4NIkHVBWCrwjGXeWm0g~JiJtyjYejQuMyRePujD5OD72bk6it9jXsOmuZlY8yCDtsk1g0n1qnBTy6fJaOkSyQ~he2CL7PpDdw48rj75YO4~JrLslQPmGqilXh1ayzi6e-yYf0z59uFMfb0mCFpH9G~-1WPZ6Wb0eVm1VpJ03q5RVydpj8Kf-OuzGwSgJC680f54ufGLAUvYbXSOqBhQIQ93WCKnPeWNlHw__"
          />
        </div>
      </Servicebar>
    </Layout>
  );
};

export default Cleaning;
