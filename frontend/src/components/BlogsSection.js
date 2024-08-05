import React from 'react';

const BlogsSection = () => {
  return (
    <section className="blogs-section">
      <h2>Recent Blogs</h2>
      <div className="blogs-list">
        <div className="blog-item">
          <img src="../images/joint-replacement.jpg" alt="Blog 1" />
          <h3>How to maintain bone and joint health during winters?</h3>
          <p>Motion is life and you need stronger bones and flexible joints to do that. With the onset of winter, the problems of bones and joints ought to increase.</p>
        </div>
        <div className="blog-item">
          <img src="../images/kidney.jpg" alt="Blog 2" />
          <h3>Robot Assisted Kidney Transplant in France</h3>
          <p>Open kidney transplant is an established procedure, considered the best treatment for end stage renal failure. However, it carries all the disadvantages of open surgeries.</p>
        </div>
        <div className="blog-item">
          <img src="../images/body.jpg" alt="Blog 3" />
          <h3>Body Weight - What you must know about it!</h3>
          <p>Our weight is one of the physical characteristics which describes us. However apart from being a physical attribute, it holds the secret to our very existence..</p>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
