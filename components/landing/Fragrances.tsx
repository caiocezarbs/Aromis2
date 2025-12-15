import React from "react";
import { Button } from "../ui/button";

const fragrances = [
  "Lavanda Francesa", "Bambu", "Alecrim", "Chá Branco",
  "Flor de Algodão", "Vanilla", "Capim Limão", "Cereja e Avelã"
];

const Fragrances: React.FC = () => {
  return (
    <section id="fragrancias" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Fragrâncias que abraçam</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {fragrances.map((name, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 font-medium hover:bg-aromis-cyan hover:text-white transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>

        <Button variant="default" size="lg" className="px-10">
          Ver fragrâncias disponíveis
        </Button>
      </div>
    </section>
  );
};

export default Fragrances;