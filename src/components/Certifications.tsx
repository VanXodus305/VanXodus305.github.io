import { FaExternalLinkAlt } from "react-icons/fa";
import { CERTIFICATIONS } from "../constants";
import openInNewTab from "../utilities/openLink";
import { motion } from "motion/react";

const Certifications = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <h1 className="mt-20 mb-14 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
          Certifications
        </h1>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.2)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group bg-neutral-800/50 hover:bg-neutral-800 border-2 border-neutral-700 hover:border-gold-200 rounded-2xl p-6 transition-all ease-in-out duration-300 cursor-default"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 mb-3 line-clamp-2 transition-all ease-in-out duration-300">
                {cert.title}
              </h3>

              <div className="flex-grow">
                <p className="text-sm text-neutral-300 mb-2">
                  <span className="font-medium text-gold-200">
                    {cert.issuer}
                  </span>
                </p>
                <p className="text-xs text-neutral-400 mb-4">
                  Issued {cert.issued}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
                <p className="text-xs text-neutral-500 truncate mr-2">
                  {cert.credentialId}
                </p>
                <button
                  onClick={() => openInNewTab(cert.link)}
                  className="flex-shrink-0 text-neutral-400 hover:text-gold-200 transition-colors ease-in-out duration-200 hover:scale-110"
                  title="View credential"
                >
                  <FaExternalLinkAlt size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
