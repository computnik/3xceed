import React, { Component } from "react";

import Nav from "../components/nav";
import Retailer from '../components/retailer';
import SEO from "../components/seo";
import { Tabs, Tab } from "react-bootstrap";


export default class SCMComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "admin"
    }
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem(item) {
    this.setState({ selected: item });
  }

  render() {
    return (
      <>
        {/* <Nav /> */}
        <SEO title="404: Not found" />
        <div className="container">
        <Tabs id="controlled-tab-example" activeKey={this.state.selected} onSelect={k => this.selectItem(k)}>
          <Tab eventKey="admin" title="Admin View">
            Admin View
        </Tab>
          <Tab eventKey="packager" title="Packager">
            Packager
        </Tab>
          <Tab eventKey="manufacturer" title="Manufacturer">
            Manufacturer
        </Tab>
          <Tab eventKey="retailer" title="Retailer">
          <Retailer />
        </Tab>
        </Tabs>
        </div>
      </>
    );
  }
}
