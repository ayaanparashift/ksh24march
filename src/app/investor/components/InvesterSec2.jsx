"use client";
import React from "react";
import { motion } from "framer-motion";

const InvesterSec2 = () => {
  return (
    <>
      <div className="fix12 py-[98px]">
        <motion.h1
          initial={{ opacity: 0, translateX: "-50px" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="fpt-500 text-[#141414] text-[44px] leading-[48.84px]"
        >
          Value. Vision. Wealth.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, translateX: "-50px" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="fpt-500 text-[#141414] text-[30px] leading-[48.84px]"
        >
          Large global investors have placed confidence in KSH INFRA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, translateX: "-100px" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="bg-[#F7E327] h-[5px] w-full"
        ></motion.div>
        <div className=" flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[5%] pt-[30px]">
          <div className="flex-1 xl:w-[538px] xl:min-h-[540px] ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="text-[#434343] text-base leading-[26px] fsans-400 flex flex-col justify-between  gap-3"
            >
              <p>
                We have built over 4 million square feet of warehousing and
                industrial infrastructure for major global companies like
                Kawasaki Motors, Jabil, Faurecia, Gedia, Rieter, Linamar,
                Saleri, and Kimberly Clark.
              </p>
              <p>
                {" "}
                Our successes come from strong backing by prestigious global
                investors such as the Pacific Century Group of Hong Kong, Morgan
                Stanley Real Estate Investing (MSREI) of the USA, and Mapletree
                Investments of Singapore.
              </p>
              <p>
                {" "}
                Our recent Joint Venture Agreement with IndoSpace Capital to
                develop 10 million square feet of industrial infrastructure
                across key markets in India positions us as the preferred
                partners for companies expanding in manufacturing, e-commerce,
                logistics, and other sectors.
              </p>
              <p>
                {" "}
                Every project—including Chakan Park III—undergoes rigorous
                improvement to achieve IGBC Platinum certification, setting the
                benchmark for eco-conscious industrial infrastructure.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 xl:flex-none overflow-hidden relative xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
            <img
              src="./investorRel/InvesSpotSec2.png"
              className="w-full h-full object-cover"
              alt=""
            />

            {/* Mask Animation */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvesterSec2;
