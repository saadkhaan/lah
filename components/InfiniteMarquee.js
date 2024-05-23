"use client";
// import React from "react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../app/marquee.css";

const marqueeVariants = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const InfiniteMarquee = () => {
  return (
    <div>
      <div className="marquee py-24">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h2 className="m-2 font-heading text-9xl font-black">
            Webdesign Local SEO E-commerce Webdesign Local SEO E-commerce
            Webdesign Local SEO E-commerce Webdesign Local SEO E-commerce
            Webdesign Local SEO E-commerce Webdesign Local SEO E-commerce
            Webdesign Local SEO E-commerce Webdesign Local SEO E-commerce
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
