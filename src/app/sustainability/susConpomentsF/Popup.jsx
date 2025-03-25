// import React, { useState } from "react";

// export default function Popup({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[500px] relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-xl font-bold"
//         >
//           ✕
//         </button>
//         <p>
//           We build our growth and development strategy around genuine
//           environmental care. The KSH INFRA Chakan Park II delivers real savings
//           on your operational costs while significantly reducing environmental
//           impact. Beyond meeting green building regulations, we have planted
//           over 1,000 trees throughout our campus. They create a refreshing,
//           natural atmosphere that makes coming to work more rejuvenating.
//         </p>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import SwiperCard from "../../Components/USP/SwiperCard";
// import { motion } from "framer-motion";

// export default function Popup({ isOpen, onClose }) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling
//     }
//     return () => (document.body.style.overflow = "auto");
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
//       <div className="bg-white p-6 rounded-lg max-w-[90vw] w-[500px] relative">
//         <button
//           className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
//           onClick={onClose}
//         >
//           ×
//         </button>
//         <p className="text-gray-700 text-center">
//           We build our growth and development strategy around genuine
//           environmental care. The KSH INFRA Chakan Park II delivers real savings
//           on your operational costs while significantly reducing environmental
//           impact. Beyond meeting green building regulations, we have planted
//           over 1,000 trees throughout our campus. They create a refreshing,
//           natural atmosphere that makes coming to work more rejuvenating.
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[500px] relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>
            <p>
              We build our growth and development strategy around genuine
              environmental care. The KSH INFRA Chakan Park II delivers real
              savings on your operational costs while significantly reducing
              environmental impact. Beyond meeting green building regulations,
              we have planted over 1,000 trees throughout our campus. They
              create a refreshing, natural atmosphere that makes coming to work
              more rejuvenating.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
