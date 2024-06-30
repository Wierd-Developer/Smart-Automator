import React, { useState } from "react";
import "../Styles/Assembly.css";
import Layout from "./Layout";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import Servicebar from "./Servicebar";
import Projects from "./Projects";
import AnimatedCount from "./AnimatedCount";
import Testimonials from "./Testimonials";
const Assembly = () => {
  return (
    <Layout>
      <Hero />
      <Servicebar>
        <div id="services" className="assembly">
          <ServiceCard
            title="Our handymen are extremely well-qualified
            and have years of professional experience under their
            belt. experience under their belt"
            btn1="IKEA Assembly"
            btn2="Furniture Assembly"
            btn3="Crib  Assembly"
            btn4="PAX  Assembly"
            btn5="Desk  Assembly"
            btn6="Desk  Assembly"
            url="https://s3-alpha-sig.figma.com/img/9895/4f70/58363bdfceee9079d2c99a667f4e8011?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjZFVCrszL-~bHoAm1acB93jpCEtb9iDNdxwr-dyW5dL9WigPGPJIAV2dk4T6WZtBVQR~Ty1ZGqelzTZ9mbwWwTL~5sqrzaxT8Yq5s~vMeVDXUTe-4whfvPotTHXJyVJ8FBQPmfRx0vTXebtDmau7fgvLaWajTseZwGK8fqPUvZO998RqGhvXQJWCyYt6BVxt6BbUHqWQIsOuUrfRKDRfmCA7pca9df1dl96S8YadcypmAinm6W6T5mTHh6B8Cp12EdpMc3JgPIhTaU53vEfkVfH8hUVykuqZ6ThRMRol0q7QrxmNRd07oh8ORTLFBqOMgD~YzFd5bjwbDr6aL47YQ__"
          />
        </div>
      </Servicebar>
      <Projects />
      <AnimatedCount />
      <Testimonials />
    </Layout>
  );
};

export default Assembly;
