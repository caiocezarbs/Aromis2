import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Sparkles, Home, Heart } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Bem-estar, cuidado e aconchego para o <span className="text-aromis-cyan">seu lar</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Transforme sua casa em um refúgio de conforto, equilíbrio e boas sensações — todos os dias.
            </p>
            <p className="text-base text-slate-500">
              Aromatizadores, sabonetes e óleos essenciais criados para quem acredita que cuidar da casa é cuidar da família.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="shadow-lg shadow-aromis-cyan/20" onClick={() => window.location.href = "#produtos"}>
                Conheça os produtos
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = "#fragrancias"}>
                Ver fragrâncias
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="flex gap-6 mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Sparkles className="w-4 h-4 text-aromis-yellow" /> Sensação de limpeza
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Heart className="w-4 h-4 text-aromis-magenta" /> Aconchego
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Home className="w-4 h-4 text-aromis-green" /> Casa viva
              </div>
            </div>
          </motion.div>

          {/* Visual Panel / Abstract Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
          >
             {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-aromis-cyan/10 to-aromis-purple/10 rounded-full blur-3xl -z-10" />

            {/* Floating Cards Simulation */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative z-10 w-64 h-80 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-6"
            >
              <div className="w-20 h-20 rounded-full bg-aromis-cyan/10 flex items-center justify-center mb-6">
                 <Sparkles className="w-10 h-10 text-aromis-cyan" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aromatizadores</h3>
              <div className="h-1 w-12 bg-aromis-cyan rounded-full mb-4"></div>
              <p className="text-center text-sm text-slate-500">Toque final de frescor para ambientes</p>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
               className="absolute right-0 bottom-12 w-48 h-56 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 z-0 hidden md:flex"
            >
               <div className="w-16 h-16 rounded-full bg-aromis-green/10 flex items-center justify-center mb-4">
                 <Home className="w-8 h-8 text-aromis-green" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Sabonetes</h3>
            </motion.div>

             <motion.div 
               animate={{ y: [0, -12, 0] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
               className="absolute left-0 top-12 w-40 h-48 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 z-20 hidden md:flex"
            >
              <div className="w-14 h-14 rounded-full bg-aromis-purple/10 flex items-center justify-center mb-3">
                 <Heart className="w-6 h-6 text-aromis-purple" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Óleos</h3>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;