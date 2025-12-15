import React from "react";
import { Search, ShoppingBag, Truck, MessageCircle } from "lucide-react";

const HowToBuy: React.FC = () => {
  const steps = [
    { icon: Search, title: "1. Escolha", desc: "Navegue pelas categorias" },
    { icon: ShoppingBag, title: "2. Adicione", desc: "Monte seu carrinho" },
    { icon: Truck, title: "3. Receba", desc: "Entrega em todo Brasil" },
  ];

  return (
    <section id="como-comprar" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Como comprar na Aromis</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 relative mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-slate-200 -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-slate-50 px-4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-aromis-cyan flex items-center justify-center mb-4 text-aromis-cyan shadow-sm">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-1">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
           <div className="bg-aromis-green/10 p-3 rounded-full text-aromis-green">
             <MessageCircle size={24} />
           </div>
           <div>
             <h4 className="font-bold text-gray-900">Atendimento Humano</h4>
             <p className="text-sm text-slate-500">Dúvidas? Fale com a gente no WhatsApp.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;