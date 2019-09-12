import React, { Component } from 'react'
import Work from './Work'

const NONE = undefined;

class WorkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeWorkIndex: NONE
    }
  }

  handleClick(index) {
    const newIndex = index === this.state.activeWorkIndex ? NONE : index
    this.setState({ activeWorkIndex: newIndex })
  }

  render() {
    let awi = this.state.activeWorkIndex;
    let i = 0;
    return (
      <>
        <Work company="ebay"
              via="full time, 2016-2019"
              handleClick={this.handleClick.bind(this, i)}
              isOpen={awi === i}
              fadeOut={awi !== NONE && awi !== i++}>
          <p>Built the new Node.js web frontend for the eBay desktop and mobile homepages, while supporting legacy homepages.  Coordinated with iOS, Android, and service engineers to build new features. Wrote the client-side code for many of the modules on the current eBay homepage.</p>
          <p>Unified desktop and mobile web experiences to one responsive application behind a single subdomain.   Coordinated production rollouts and monitoring. Mentored junior engineers in team.</p>
        </Work>

        <Work company="PHHHOTO"
              via="a HYPERHYPER company"
              handleClick={this.handleClick.bind(this, i)}
              isOpen={awi === i}
              fadeOut={awi !== NONE && awi !== i++}>
          <p>Coordinating with the client (iOS and Android) and product owners to spec and build new features in a test-driven environment.</p>
          <p>Creating specifications, time/cost estimates, building prototypes, and production-ready backend code for the API, website, image processing service, and other microservices. I worked directly with vendors to integrate their services into our stack.</p>
          <p>Scaling the backend product from its inception up to a product able to handle 2,500 API request/sec and 3,000 image requests/sec.</p>
          <p>Identifying production issues before they occur through proactive monitoring, and debugging production issues as they happen.  I continually identified performance bottlenecks and opportunities to reduce overhead.</p>
        </Work>

        <Work company="Playboy"
              via="via HYPERHYPER"
              handleClick={this.handleClick.bind(this, i)}
              isOpen={awi === i}
              fadeOut={awi !== undefined && awi !== i++}>
          <p>Built a custom Ruby on Rails stack using Contentful CMS as the primary datastore for articles, custom markup for editors, and Handlebars as the template engine.</p>
        </Work>

        {/* <div class="tc f3 ttu avenir pa2">E! Online</div>

        <div class="tc f3 ttu avenir pa2">Red Bull</div>

        <div class="tc f3 ttu avenir pa2">VFILES</div>

        <div class="tc f3 ttu avenir pa2">Michael Kors</div>

        <div class="tc f3 ttu avenir pa2">Razorfish</div>

        <div class="tc f3 ttu avenir pa2">Bundle</div>

        <div class="tc f3 ttu avenir pa2">MLB</div>

        <div class="tc f3 ttu avenir pa2">MocoSpace</div>

        <div class="tc f3 ttu avenir pa2">Finetune</div> */}
      </>
    );
  }
}

export default WorkList