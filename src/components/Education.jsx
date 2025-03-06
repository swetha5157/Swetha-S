import React from 'react'
import { EDUCATION } from '../constants/index.js'
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((entry, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={entry.image}
                width={100}
                height={100}
                alt={entry.institution}
                className="mb-6 rounded"
              ></img>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{entry.year}</p>

              <h6 className="mb-2 font-semibold">
                {entry.degree}
                <h5 className=" text-sm text-purple-100">
                  {entry.institution}
                </h5>
              </h6>
              <p className="mb-4 text-neutral-400">{entry.percentage}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education