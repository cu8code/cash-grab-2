// Testimonial.js
import React, { useState } from 'react';
import styles from './testimonial.module.css'; // Import the CSS module


const Testimonial = ({ text, author, position, company, imageUrl }) => (
  <div className={styles.testimonial}>
    <div className={styles.testimonialImageContainer}>
      <img src={imageUrl} alt={author} className={styles.testimonialImage} />
    </div>
    <p className={styles.testimonialText}>{text}</p>
    <div className={styles.testimonialAuthor}>
      <strong>{author}</strong> - {position}, {company}
    </div>
  </div>
);

const Testimonials = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <div className={styles.testimonialTitle}>
    <h1>Our Clients Love Working With Us</h1>
    <div>Book A Call</div>
    </div>
    <div className={styles.testimonialsSlider}>
      <button className={styles.button} onClick={prevTestimonial}>&lt;</button>
      <Testimonial {...testimonials[current]} />
      <button className={styles.button} onClick={nextTestimonial}>&gt;</button>
    </div>
    </>
  );
};

export default Testimonials;
