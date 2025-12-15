import React from "react";
import { Star, Leaf, Wallet, ShieldCheck } from "lucide-react";

const Trust: React.FC = () => {
  const chips = [
    { icon: Star, text: "Alta fixação", color: "text-aromis-yellow" },
    { icon: Leaf, text: "Óleos essenciais selecionados", color: "text-aromis-green" },
    { icon: Wallet, text: "Custo x benefício", color: "text-aromis-cyan" },
    { icon: ShieldCheck, text: "Compra fácil e segura", color: "text-aromis-purple" },
  ];

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {chips.map((chip, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
              <chip.icon className={`w-5 h-5 ${chip.color}`} />
              <span className="text-sm font-semibold text-slate-700">{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;