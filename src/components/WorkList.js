import React, { Component } from 'react'
import { ImageHelper } from 'react-preload'

import Work from './Work'

import michaelKorsImage from '../images/watch-hunger-stop.jpg'
import eOnline from '../images/e-online.jpg'
import ebay from '../images/ebay.png'
import playboy from '../images/playboy.png'

const NONE = undefined;

class WorkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeWorkIndex: NONE
    }
  }

  componentDidMount() {
    ImageHelper.stuffImages([
      michaelKorsImage,
      eOnline,
      ebay,
      playboy
    ])
  }

  scrollActiveWorkIntoView() {
    if (this.state.activeWorkIndex !== NONE) {
      // const work = document.getElementsByClassName('work-company')[this.state.activeWorkIndex]
      const work = document.getElementsByClassName('work-active')[0]
      const offset = work.offsetTop - 100;
      window.scrollTo(0, offset);
    }
  }

  handleClick(index) {
    const newIndex = index === this.state.activeWorkIndex ? NONE : index
    this.setState({ activeWorkIndex: newIndex }, this.scrollActiveWorkIntoView)
  }

  render() {
    let awi = this.state.activeWorkIndex;
    return (
      <>
        <Work company="ONUMA"
              via="coming soon"
              handleClick={this.handleClick.bind(this, 100)}
              isOpen={awi === 100}
              fadeOut={awi !== NONE && awi !== 100}>
          
        </Work>
        <Work company="ebay"
              via="full time, 2016-2019"
              tech="Node.js, Marko (JS Framework), HTML / CSS"
              handleClick={this.handleClick.bind(this, 0)}
              isOpen={awi === 0}
              fadeOut={awi !== NONE && awi !== 0}>
          <div className="tc">
            <img className="h3" src={ebay} alt="ebay" />
          </div>
          <p className="i">Member of Technical Staff I</p>
          <p>Built the new Node.js web frontend for the <a href="https://www.ebay.com">eBay desktop and mobile homepages</a>, while supporting legacy homepages.  Coordinated with iOS, Android, and service engineers to build new features. Wrote the client-side code for many of the modules on the current eBay homepage.</p>
          <p>Unified desktop and mobile web experiences to one responsive application behind a single subdomain.   Coordinated production rollouts and monitoring. Mentored junior engineers in team.</p>
          <p>Promoted from Software Engineer III to <a href="https://www.levels.fyi/?compare=eBay&track=Software%20Engineer">Member of Technical Staff I</a> in 2018.</p>
        </Work>

        <Work company="PHHHOTO"
              via="a HYPERHYPER company, 2014-2016"
              tech="Ruby on Rails, Node.js, Golang.  AWS: EC2, Elastic Beanstalk, CloudFront, S3, DynamoDB.  Redis, Memcached.  Heroku. Docker. Postgres"
              handleClick={this.handleClick.bind(this, 1)}
              isOpen={awi === 1}
              fadeOut={awi !== NONE && awi !== 1}>
          <p className="i">Senior Engineer / Architect, DevOps</p>
          <p>PHHHOTO was a GIF based social network and premium photobooth experience.  It lives on today as <a href="https://hypno.com">HYPNO</a>.</p>
          <p>I coordinated with the client (iOS and Android) and product owners to spec and build new features in a test-driven environment.</p>
          <p>Created specifications, time/cost estimates, building prototypes, and production-ready backend code for the API, website, image processing service, and other microservices. I worked directly with vendors to integrate their services into our stack.</p>
          <p>Scaled the backend product from its inception up to a product able to handle 2,500 API request/sec and 3,000 image requests/sec.</p>
          <p>Identify production issues before they occur through proactive monitoring, and debugging production issues as they happen.  I continually identified performance bottlenecks and opportunities to reduce overhead.</p>
        </Work>

        <Work company="HYPERHYPER"
              via="2012-2014 (2012-2016 incl. PHHHOTO)"
              tech=" Django, Node.js, Ruby on Rails, Javascript, HTML/CSS"
              handleClick={this.handleClick.bind(this, 2)}
              isOpen={awi === 2}
              fadeOut={awi !== NONE && awi !== 2}>
          <p className="i">wore too many hats to count</p>
          <p><a href="http://hyperhyper.com/">HYPERHYPER</a> was a full service digital agency, through which I worked on several of the projects below. My role included vetting and estimating client work and building out front and backend components, often as the sole developer.  I worked with clients directly on-site as needed.</p>
          <p>PHHHOTO was a HYPERHYPER side project that became it's own company and today operates as HYPNO.  I transitioned around 2014 from working on HYPERHYPER client work to doing PHHHOTO work full-time.</p>
        </Work>

        <Work company="Playboy"
              via="via HYPERHYPER"
              tech="Ruby on Rails, Contentful, Heroku"
              handleClick={this.handleClick.bind(this, 3)}
              isOpen={awi === 3}
              fadeOut={awi !== NONE && awi !== 3}>
          <div className="tc">
            <img className="h3" src={playboy} alt="Playboy" />
          </div>
          <p>Created the new <a href="https://playboy.com">Playboy.com</a> and <a href="https://playmates.com">Playmates.com</a> websites from the ground up.  Built a custom Ruby on Rails stack using Contentful CMS as the primary datastore for articles, custom markup for editors, and Handlebars as the template engine.</p>
        </Work>

        <Work company="E! Online"
              via="frontend, via HYPERHYPER"
              tech="JS, HTML, CSS"
              handleClick={this.handleClick.bind(this, 4)}
              isOpen={awi === 4}
              fadeOut={awi !== NONE && awi !== 4}>
          <img src={eOnline} alt="E! Online" />
          <p>Created one of the web's most visited gallery experiences, enabling E! Online to immediately generate million+ dollars in revenue via ad slots integrated into the fully responsive desktop interactive gallery.</p>
          <p>As of 2019 it is still being used, if you're not on mobile check out an example <a href="https://www.eonline.com/photos/18182/margot-robbie-s-best-looks/947597">here</a>.</p>
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
          <p><a href="https://vimeo.com/75530239">Watch a video of it here</a>.</p>
          <p>I created a projected backdrop which played behind live performances across the country.  Audience members could have their Instagram pictures shown on stage in real-time by tagging their photos with a specific hashtag.    I built a CMS that let the operator set custom messages and graphics to rotate in at set intervals or takeover the grid. Operators also had access to a moderation tool I authored.</p>
        </Work>

        <Work company="Michael Kors"
              via="times square billboard, via HYPERHYPER"
              handleClick={this.handleClick.bind(this, 6)}
              isOpen={awi === 6}
              tech="Backend"
              fadeOut={awi !== NONE && awi !== 6}>
          <img src={michaelKorsImage} alt="Michael Kors billboard" />
          <p>A live event powered by PHHHOTO booths where we streamed video from iPads at Michael Kors stores around the world to a billboard in Times Square.  Check out the video <a href="https://vimeo.com/90696625">on Vimeo</a>.</p>
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
          <p>Launched the new <a href="https://vfiles.com">VFILES website</a>.</p>
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
          <p className="i">Mobile Web Application Developer</p>
          <p>One of two developers creating and maintaining features across MLB.com mobile web properties, both front and backend code.</p>
          <p>Built Minor League Baseball’s mobile site, Tiger Woods’ mobile site, and the webviews for the Ballpark mobile web app.</p>
          <p>Supported the MLB AtBat application WebViews.</p>
        </Work>
        

        <Work company="MocoSpace"
              via="full-time, 2008-2009"
              handleClick={this.handleClick.bind(this, 12)}
              isOpen={awi === 12}
              tech="JSP, PHP, Javascript, HTML/CSS, SQL"
              fadeOut={awi !== NONE && awi !== 12}>
          <p className="i">Web Developer</p>
          <p>MocoSpace is a mobile social community. I was responsible for developing new website features, including a new web chat client and internal reporting system.</p>
        </Work>

        <Work company="Finetune"
              via="2007-2008"
              handleClick={this.handleClick.bind(this, 13)}
              isOpen={awi === 13}
              tech="PHP, Python, Javascript, HTML/CSS"
              fadeOut={awi !== NONE && awi !== 13}>
          <p className="i">Web Developer</p>
          <p>Finetune was a social music startup. I maintained the Facebook application and developed internal software</p>
        </Work>
      </>
    );
  }
}

export default WorkList