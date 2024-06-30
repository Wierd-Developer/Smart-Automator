import React from "react";
import Hero from "./Hero";
import Layout from "./Layout";
import Servicebar from "./Servicebar";
import ServiceCard from "./ServiceCard";
const Moving = () => {
  return (
    <Layout>
      <Hero />
      <Servicebar>
        <div className="assembly">
          <ServiceCard
            title="Moving help such as packing/unpacking, loading, and lifting heavy items. Now Trending: Single-item moves, apartment moves, and junk removal."
            btn1="Local Moving"
            btn2="Long Distance Moving"
            btn3="Furniture Moving"
            btn4="Packing and unpacking"
            btn5="Loading & Unloading"
            btn6="Piano moving"
            url="https://s3-alpha-sig.figma.com/img/e7ef/c138/91496617a5388a7e0e3dd6cfe5c2ce98?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NoFljvITSJfePJoI-9MX-0~qpM0haveL9Zk~HNgWf-2p~Lmxpp66qLFfAS9Ep-xJFr8hG6GY~1RtTSI1GNamsBxpUcA9~ANRpONRoN48hExm9vEpRmvgVuBmr2t5q7RAnLRozzmlLU9FA0uGtF16ptH-N3u3KU-Ip-BoByaf~JWFRETX9MVE7QUDrk6Hgj1ZcL8EhU1wqMSJbYWS986X3J70Du41XrQxfZ-OVc0nbtVqZ3P74~HK7Cgph2KAhlTlKxLAC2bAF0JkzMYWEONvU3nbvUzur6kAcAVHgMbi9mc~xWTypz5kLae4CBKMwxnZFW5pll9XAUxGC503oMMuDQ__"
          />
        </div>
      </Servicebar>
    </Layout>
  );
};

export default Moving;
