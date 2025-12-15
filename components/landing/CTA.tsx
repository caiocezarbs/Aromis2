import React from "react";
import { Button } from "../ui/button";

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-aromis-cyan to-aromis-teal p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Abstract circles for texture */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Sua casa merece esse cuidado
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Junte-se a milhares de clientes que transformaram seus lares com a Aromis.
            </p>
            <div className="pt-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6 font-bold text-aromis-teal"
              >
                Quero sentir Aromis na minha casa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;