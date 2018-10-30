import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MastHead from './components/MastHead';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Modals from './components/Modals';
import * as Scroll from 'react-scroll';

let Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;
let Link = Scroll.Link;

class App extends Component {
  constructor() {
    super();

    this.state = {
      NavBarShrink: false,
      modalIsOpen: false,
      currentProject: '',
      projects: [
        {
          title: 'Project 3',
          subtitle: 'riseUP',
          imageLink: './images/portfolio/riseup.png',
          description: `riseUP is a political application that seeks to match users with differing political opinions for
              meaningful discussions about today's issues. Socket.io used for real-time chat. Redux used to manage user state.`,
          liveSite: 'https://rise-up-2018.herokuapp.com/',
          gitRepo: 'https://github.com/lcondon/riseup'
        },
        {
          title: 'Project 2',
          subtitle: 'WorthIt?',
          imageLink: './images/portfolio/worthIt.png',
          description: `This
              application
              compares critic ratings to general audience ratings to determine whether a movie meets its
              expectations.`,
          liveSite: 'https://radiant-anchorage-14785.herokuapp.com/',
          gitRepo: 'https://github.com/lcondon/worthit'
        },
        {
          title: 'React',
          subtitle: 'Stranger Things Memory Game',
          imageLink: './images/portfolio/demadrawing.png',
          description: `Web application that uses React on the Front End. Click on any image to earn points, but you can
              only click on each picture once.`,
          liveSite: 'https://lcondon.github.io/memorygame/',
          gitRepo: 'https://github.com/lcondon/memorygame'
        },
        {
          title: 'MongoDB / Mongoose',
          subtitle: 'NPR Mongo Scraper',
          imageLink: './images/portfolio/radioTower.jpg',
          description: `Web application that uses Mongo to store data scraped from the NPR website with
              Cheerio. Mongoose used for database manipulation. Users can save and comment on articles as well.
              Deployed on Heroku.`,
          liveSite: 'https://warm-dusk-20808.herokuapp.com/',
          gitRepo: 'https://github.com/lcondon/mongoScraper'
        },
        {
          title: 'Project 1',
          subtitle: 'Total Travel',
          imageLink: './images/portfolio/map5.png',
          description: `Web application that allows users to input a travel destination, and returns relevant events,
              landmarks,
              and restaurants. Built with Materialize CSS, Algolia Places, and several different opensource API's.`,
          liveSite: 'https://lcondon.github.io/project1/',
          gitRepo: 'https://github.com/lcondon/project1/'
        },
        {
          title: 'MySQL / Sequelize',
          subtitle: 'Friend Finder',
          imageLink: './images/portfolio/friendFinder.png',
          description: `Web application that matches users with their most compatible new friend usings results from a
              survey. Deployed on Heroku. Sequelize ORM used for database manipulation.`,
          liveSite: 'https://glacial-ridge-62062.herokuapp.com/',
          gitRepo: 'https://github.com/lcondon/friendFinder/'
        }
      ]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillUpdate() {
    this.containerLine.onscroll = () => {
      console.log('yes');
    };
  }

  getApplicationNode = () => {
    return document.getElementById('root');
  };

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      this.setState({ NavBarShrink: true });
    } else {
      this.setState({ NavBarShrink: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  openModal = modal => {
    this.setState({
      currentProject: this.state.projects[modal]
    });
    this.setState({ modalIsOpen: true });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  linkClick = (ev, element) => {
    ev.preventDefault();
    scroll.scrollTo(element);
  };

  scrollToBottom = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      smooth: true,
      containerId: 'portfolio',
      offset: 50 // Scrolls to element + 50 pixels down the page
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App" ref={el => (this.containerLine = el)}>
          <NavBar shrink={this.state.NavBarShrink} scrollTo={this.linkClick} />
          <MastHead scrollTo={this.scrollToElement} />
          <Portfolio
            projects={this.state.projects}
            openModal={this.openModal}
          />
          <About />
          <Contact />
          <Footer />
        </div>
        <Modals
          modal={this.state.modal}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          getApplicationNode={this.getApplicationNode}
          project={this.state.currentProject}
        />
      </React.Fragment>
    );
  }
}

export default App;
