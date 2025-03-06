import React from 'react'
import {OPENSOURCE} from "../constants/index.js"
import { motion } from 'framer-motion'
const Internship = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Open Source Contribution
      </motion.h1>
      <div>
        {OPENSOURCE.map((entry, index) => (
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
                alt={entry.company}
                className="mb-6 rounded"
              ></img>
              <p className="mb-2 text-sm text-neutral-400">{entry.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {entry.role}-{" "}
                <span className=" text-sm text-purple-100">
                  {entry.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{entry.description}</p>
              {entry.technologies.map((e, ind) => (
                <span
                  key={ind}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1
                            text-sm font-medium text-purple-800"
                >
                  {e}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internship
