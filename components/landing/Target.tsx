import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Target: React.FC = () => {
  const checks = [
    "Ama chegar em casa e sentir cheiro de limpeza",
    "Valoriza produtos que duram mais tempo",
    "Quer criar memórias olfativas com a família",
    "Gosta de receber elogios das visitas",
  ];

  return (
    <section id="quem-e" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-aromis-greygreen/5 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              A Aromis é para você?
            </motion.h2>
            
            <ul className="space-y-4">
              {checks.map((text, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-lg text-slate-700"
                >
                  <CheckCircle2 className="w-6 h-6 text-aromis-green flex-shrink-0" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-aromis-greygreen/20"
            >
              <p className="text-xl md:text-2xl font-medium text-aromis-greygreen italic leading-relaxed">
                “Se você acredita que o cheiro da casa muda o humor, a Aromis é para você.”
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Target;