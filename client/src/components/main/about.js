import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Tabs, Tab } from 'material-ui/Tabs';

const aboutContent = [
  {
    title: 'About The Factory',
    content: (
      <div>
        <h5>Some stuff about the factory</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          quam turpis, vitae faucibus felis hendrerit id. Nulla facilisi. Ut
          blandit viverra mi eget sagittis. Suspendisse rutrum eros ut massa
          iaculis, non placerat urna vulputate. Cras nisl sem, malesuada et justo
          sed, ultrices maximus lacus. Morbi sem lacus, lacinia quis metus ultricies,
          ultrices vulputate neque. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas quis mauris leo.
        </p>
        <p>
          Curabitur accumsan dolor quis velit venenatis eleifend. Nullam ultrices
          risus quis velit scelerisque bibendum id non lectus. Etiam fringilla porttitor
          lectus, ac mattis mi fringilla vitae. Etiam velit ante, iaculis ut lobortis
          quis, dictum ac quam. Sed eget dui risus. Quisque vel odio eu elit posuere
          posuere. Aliquam augue magna, consequat ac lacinia non, dictum vel nisi.
          Maecenas eu risus in odio tempor dignissim a sit amet nibh. Nam consequat
          aliquet mi, vel eleifend ex laoreet ut. Phasellus sed ipsum in ipsum tincidunt
          dapibus quis eget tellus. Sed pulvinar dolor ac risus interdum ullamcorper.
        </p>
        <p>
          Donec quis velit lacus. Proin malesuada nulla ex. Maecenas suscipit pulvinar
          mi, nec congue massa aliquam ut. Nunc at ante eu arcu rutrum lobortis. Cras
          eu auctor mi. In hac habitasse platea dictumst. Nam at lacinia nibh. In
          tristique lobortis luctus. Nullam laoreet lectus eget nisl euismod malesuada.
          Nulla vel tempus sem.
        </p>
      </div>
    ),
  },
  {
    title: 'What is an Exquisite Corpse?',
    content: (
      <div>
        <h5>From Wikipedia:</h5>
        <blockquote>
          <p>
            <strong>Exquisite corpse, </strong>
            also known as exquisite cadaver (from the original French term cadavre exquis),
            <strong> is a method by which a collection of words or
              images is collectively assembled.
            </strong>
          </p>
          <p>
            Each collaborator adds to a composition in sequence, either by following a
            rule (e.g. &ldquo;The adjective noun adverb verb the adjective noun.&rdquo; as
            in &ldquo;The green duck sweetly sang the dreadful dirge.&rdquo;) or by being
            allowed to see only the end of what the previous person contributed.
          </p>
          <p>
            <strong>The technique was invented by surrealists </strong>
            and is similar to an old parlour game called consequences in which players write
            in turn on a sheet of paper, fold it to conceal part of the writing, and then
            pass it to the next player for a further contribution. Surrealism principal founder
            André Breton reported that it started in fun, but became playful and eventually
            enriching. Breton said the diversion started about 1925, but Pierre Reverdy wrote
            that it started much earlier, at least before 1918.
          </p>
        </blockquote>
      </div>
    ),
  },
  {
    title: 'The Surrealists',
    content: (
      <div>
        <h5>Some stuff about Surrealists</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          quam turpis, vitae faucibus felis hendrerit id. Nulla facilisi. Ut
          blandit viverra mi eget sagittis. Suspendisse rutrum eros ut massa
          iaculis, non placerat urna vulputate. Cras nisl sem, malesuada et justo
          sed, ultrices maximus lacus. Morbi sem lacus, lacinia quis metus ultricies,
          ultrices vulputate neque. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas quis mauris leo.
        </p>
        <p>
          Curabitur accumsan dolor quis velit venenatis eleifend. Nullam ultrices
          risus quis velit scelerisque bibendum id non lectus. Etiam fringilla porttitor
          lectus, ac mattis mi fringilla vitae. Etiam velit ante, iaculis ut lobortis
          quis, dictum ac quam. Sed eget dui risus. Quisque vel odio eu elit posuere
          posuere. Aliquam augue magna, consequat ac lacinia non, dictum vel nisi.
          Maecenas eu risus in odio tempor dignissim a sit amet nibh. Nam consequat
          aliquet mi, vel eleifend ex laoreet ut. Phasellus sed ipsum in ipsum tincidunt
          dapibus quis eget tellus. Sed pulvinar dolor ac risus interdum ullamcorper.
        </p>
        <p>
          Donec quis velit lacus. Proin malesuada nulla ex. Maecenas suscipit pulvinar
          mi, nec congue massa aliquam ut. Nunc at ante eu arcu rutrum lobortis. Cras
          eu auctor mi. In hac habitasse platea dictumst. Nam at lacinia nibh. In
          tristique lobortis luctus. Nullam laoreet lectus eget nisl euismod malesuada.
          Nulla vel tempus sem.
        </p>
      </div>
    ),
  },
];

class About extends Component {
  constructor(props) {
    const { match: { params: { id } } } = props;
    super(props);
    this.state = {
      currentSlide: typeof id !== 'undefined' ? id : 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
    this.renderPreviousButton = this.renderPreviousButton.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  selectSlide(index) {
    this.setState({ currentSlide: index });
  }

  nextSlide() {
    this.selectSlide(Number(this.state.currentSlide) === aboutContent.length - 1 ?
      aboutContent.length - 1 : Number(this.state.currentSlide) + 1);
  }

  previousSlide() {
    this.selectSlide(this.state.currentSlide === 0 ? 0 : this.state.currentSlide - 1);
  }

  renderSlide() {
    const { title, content } = aboutContent[this.state.currentSlide];
    return (
      <div className="about-slide">
        <h2>{title}</h2>
        {content}
      </div>
    );
  }

  renderNextButton() {
    const disabled = this.state.currentSlide === aboutContent.length - 1;
    const next = aboutContent[this.state.currentSlide + 1];
    return (
      <IconButton
        disabled={disabled}
        onClick={this.nextSlide}
        tooltip={next ? next.title : ''}
      >
        <FontIcon className="material-icons">chevron_right</FontIcon>
      </IconButton>
    );
  }

  renderPreviousButton() {
    const disabled = this.state.currentSlide === 0;
    const previous = aboutContent[this.state.currentSlide - 1];
    return (
      <IconButton
        disabled={disabled}
        onClick={this.previousSlide}
        tooltip={previous ? previous.title : ''}
      >
        <FontIcon className="material-icons">chevron_left</FontIcon>
      </IconButton>
    );
  }

  renderTabs() {
    return (
      <Tabs value={Number(this.state.currentSlide)}>
        {aboutContent.map((item, i) => (<Tab
          onActive={() => this.selectSlide(i)}
          value={i}
          label={item.title}
          key={item.title}
        />))}
      </Tabs>
    );
  }

  render() {
    return (
      <div className="about">
        {this.renderTabs()}
        <div className="about-carousel">
          <div className="carousel-button">
            {this.renderPreviousButton()}
          </div>
          {this.renderSlide()}
          <div className="carousel-button">
            {this.renderNextButton()}
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default About;
