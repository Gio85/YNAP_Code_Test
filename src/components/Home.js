import React from 'react';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            YNAP Code Test
          </h1>
          <h2 className="subtitle">
            Welcome to the coolest Roman Converter of the web.
          </h2>
          <p>Here you can convert Roman Numbers to Integers and vice-versa.</p>
          <p>Please bear in mind that this App can handle only numbers between 1 and 3999.</p>
          <p>To get started, click on - Convert a number - on the top right of the page.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
