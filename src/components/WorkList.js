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
    console.log(index)
    const newIndex = index === this.state.activeWorkIndex ? NONE : index
    this.setState({ activeWorkIndex: newIndex })
  }

  render() {
    let awi = this.state.activeWorkIndex;
    return (
      <>
        <Work company="ebay"
              via="full time, 2016-2019"
              tech="Node.js, Marko (JS Framework), HTML / CSS"
              handleClick={this.handleClick.bind(this, 0)}
              isOpen={awi === 0}
              fadeOut={awi !== NONE && awi !== 0}>
          <p className="i">Member of Technical Staff I</p>
          <p>Built the new Node.js web frontend for the eBay desktop and mobile homepages, while supporting legacy homepages.  Coordinated with iOS, Android, and service engineers to build new features. Wrote the client-side code for many of the modules on the current eBay homepage.</p>
          <p>Unified desktop and mobile web experiences to one responsive application behind a single subdomain.   Coordinated production rollouts and monitoring. Mentored junior engineers in team.</p>
          <p>Promoted from Software Engineer III to Member of Technical Staff I in 2018.</p>
        </Work>

        <Work company="PHHHOTO"
              via="a HYPERHYPER company, 2014-2016"
              tech="Ruby on Rails, Node.js, Golang.  AWS: EC2, Elastic Beanstalk, CloudFront, S3, DynamoDB.  Redis, Memcached.  Heroku. Docker. Postgres"
              handleClick={this.handleClick.bind(this, 1)}
              isOpen={awi === 1}
              fadeOut={awi !== NONE && awi !== 1}>
          <p className="i">Senior Engineer / Architect, DevOps</p>
          <p>Coordinating with the client (iOS and Android) and product owners to spec and build new features in a test-driven environment.</p>
          <p>Creating specifications, time/cost estimates, building prototypes, and production-ready backend code for the API, website, image processing service, and other microservices. I worked directly with vendors to integrate their services into our stack.</p>
          <p>Scaling the backend product from its inception up to a product able to handle 2,500 API request/sec and 3,000 image requests/sec.</p>
          <p>Identifying production issues before they occur through proactive monitoring, and debugging production issues as they happen.  I continually identified performance bottlenecks and opportunities to reduce overhead.</p>
        </Work>

        <Work company="HYPERHYPER"
              via="2012-2014 (2012-2016 incl. PHHHOTO)"
              tech=" Django, Node.js, Ruby on Rails, Javascript, HTML/CSS"
              handleClick={this.handleClick.bind(this, 2)}
              isOpen={awi === 2}
              fadeOut={awi !== NONE && awi !== 2}>
          <p class="i">wore too many hats to count</p>
          <p>HYPERHYPER was a full service digital agency, through which I worked on several of the projects below. My role included vetting and estimating client work and building out front and backend components, often as the sole developer.  I worked with clients directly on-site as needed.</p>
          <p>PHHHOTO was a HYPERHYPER side project that became it's own company and today operates as HYPNO.  I transitioned around 2014 from working on HYPERHYPER client work to doing PHHHOTO work full-time.</p>
        </Work>

        <Work company="Playboy"
              via="via HYPERHYPER"
              tech="Ruby on Rails, Contentful, Heroku"
              handleClick={this.handleClick.bind(this, 3)}
              isOpen={awi === 3}
              fadeOut={awi !== NONE && awi !== 3}>
          <p>Built a custom Ruby on Rails stack using Contentful CMS as the primary datastore for articles, custom markup for editors, and Handlebars as the template engine.</p>
        </Work>

        <Work company="E! Online"
              via="frontend, via HYPERHYPER"
              tech="JS, HTML, CSS"
              handleClick={this.handleClick.bind(this, 4)}
              isOpen={awi === 4}
              fadeOut={awi !== NONE && awi !== 4}>
          <p>Created one of the web's most visited gallery experiences, enabling E! Online to immediately generate million+ dollars in revenue via ad slots integrated into the fully responsive interactive gallery.</p>
        </Work>

        <Work company="Red Bull"
              via="full stack, via HYPERHYPER"
              tech="Django, JS, HTML, CSS"
              handleClick={this.handleClick.bind(this, 5)}
              isOpen={awi === 5}
              fadeOut={awi !== NONE && awi !== 5}>
          <p><span className="b">Red Bull Sound Select</span></p>
          <p>Customized a Django CMS to interface with Red Bull’s existing content management system.  Built out designs for redbullsoundselect.com.</p>
          <p><span className="b">Red Bull Social Wall</span></p>
          <p>I created a projected backdrop which played behind live performances across the country.  Audience members could have their Instagram pictures shown on stage in real-time by tagging their photos with a specific hashtag.    I built a CMS that let the operator set custom messages and graphics to rotate in at set intervals or takeover the grid. Operators also had access to a moderation tool I authored.</p>
        </Work>

        <Work company="Michael Kors"
              via="times square billboard, via HYPERHYPER"
              handleClick={this.handleClick.bind(this, 6)}
              isOpen={awi === 6}
              tech="Backend"
              fadeOut={awi !== NONE && awi !== 6}>
          <p>A live event powered by PHHHOTO booths where we streamed video from iPads at Michael Kors stores around the world to a billboard in Times Square.</p>
        </Work>

        <Work company="Band of Outsiders"
              via="full stack + Shopify, via HYPERHYPER"
              handleClick={this.handleClick.bind(this, 7)}
              isOpen={awi === 7}
              tech="Ruby on Rails, JS, HTML, CSS"
              fadeOut={awi !== NONE && awi !== 7}>
          <p>I built a fully custom Shopify experience, and authored a system that synced Band of Outsiders' inventory management and order processing systems with Shopify's.</p>
        </Work>

        <Work company="VFILES"
              via="via HYPERHYPER"
              handleClick={this.handleClick.bind(this, 8)}
              isOpen={awi === 8}
              tech="Javascript, HTML, CSS"
              fadeOut={awi !== NONE && awi !== 8}>
          <p>Built frontend code for the web property of VFILES Magazine.</p>
        </Work>

        <Work company="razorfish"
              via="freelance, 2011-2012"
              handleClick={this.handleClick.bind(this, 9)}
              isOpen={awi === 9}
              tech="Javascript, HTML, CSS"
              fadeOut={awi !== NONE && awi !== 9}>
          <p>Built the fully responsive website for PNC Virtual Wallet, and updated other bank websites.</p>
        </Work>

        <Work company="Bundle"
              via="freelance, 2010-2011"
              handleClick={this.handleClick.bind(this, 10)}
              isOpen={awi === 10}
              tech="Python, Django, Javascript, HTML, CSS"
              fadeOut={awi !== NONE && awi !== 10}>
          <p>Bundle was a personal financial management startup, incubated by CitiBank. At the time it was a competitor of services like Mint.com.  I was the primary frontend developer tasked with creating new features.</p>
        </Work>

        <Work company="Major League Baseball"
              via="full-time, 2009-2010"
              handleClick={this.handleClick.bind(this, 11)}
              isOpen={awi === 11}
              tech=" Java/Groovy, HTML/CSS, Javascript"
              fadeOut={awi !== NONE && awi !== 11}>
          <p class="i">Mobile Web Application Developer</p>
          <p>One of two developers creating and maintaining features across MLB.com mobile web properties, both front and backend code.</p>
          <p>Built Minor League Baseball’s mobile site, Tiger Woods’ mobile site, and the webviews for the Ballpark mobile web app.</p>
          <p>Supported the MLB AtBat application WebViews.</p>
        </Work>
        

        <Work company="MocoSpace"
              via="full-time, 008-2009"
              handleClick={this.handleClick.bind(this, 12)}
              isOpen={awi === 12}
              tech="JSP, PHP, Javascript, HTML/CSS, SQL"
              fadeOut={awi !== NONE && awi !== 12}>
          <p class="i">Web Developer</p>
          <p>MocoSpace is a mobile social community. I was responsible for developing new website features, including a new web chat client and internal reporting system.</p>
        </Work>

        <Work company="Finetune"
              via="2007-2008"
              handleClick={this.handleClick.bind(this, 13)}
              isOpen={awi === 13}
              tech="PHP, Python, Javascript, HTML/CSS"
              fadeOut={awi !== NONE && awi !== 13}>
          <p class="i">Web Developer</p>
          <p>Finetune was a social music startup. I maintained the Facebook application and developed internal software</p>
        </Work>

        {/*


        <div class="tc f3 ttu avenir pa2">MocoSpace</div>

        <div class="tc f3 ttu avenir pa2">Finetune</div> */}
      </>
    );
  }
}

export default WorkList