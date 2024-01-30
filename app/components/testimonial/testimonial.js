// Testimonial.js
import React, { useState } from 'react';
import styles from './testimonial.module.css'; // Import the CSS module


const Testimonial = ({ title="title is not defined", text="title is not defined", author, position, company, imageUrl }) => (
  <div className={styles.responsiveCard}>
  <div className={styles.imageContainer}>
    <img src={imageUrl} alt={title} className={styles.cardImage} />
  </div>
  <div className={styles.cardContent}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardText}>{text}</p>
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
