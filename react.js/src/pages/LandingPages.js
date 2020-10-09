import React, { Component } from "react";

import Header from "parts/Header";
import landingPages from "json/landingPage.json";
import Hero from "parts/Hero";
import MosPicked from "parts/MosPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPages.hero} />
        <MosPicked
          refMostPicked={this.refMostPicked}
          data={landingPages.mostPicked}
        />
        <Categories data={landingPages.categories} />
        <Testimony data={landingPages.testimonial} />
        <Footer />
      </>
    );
  }
}
