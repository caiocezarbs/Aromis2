import React from "react";
import { Plus, XCircle } from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Gains */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-aromis-green/10 rounded-full text-aromis-green"><Plus size={20}/></span>
              O que você ganha
            </h3>
            <ul className="space-y-4">
              {["Casa perfumada o dia todo", "Sensação imediata de relaxamento", "Embalagens que decoram o ambiente"].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-aromis-green mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <span className="p-2 bg-aromis-red/10 rounded-full text-aromis-red"><XCircle size={20}/></span>
              O que resolvemos
            </h3>
            <ul className="space-y-4">
               {["Produtos que perdem o cheiro em 1 hora (Alta Fixação)", "Preços abusivos de marcas de luxo (Custo Justo)", "Medo de comprar online (Site Seguro + Rastreio)"].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                   <div className="w-1.5 h-1.5 rounded-full bg-aromis-red mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
           <h4 className="text-2xl md:text-3xl font-bold text-aromis-cyan">
            “Se não for para deixar a casa perfumada… eu nem levanto.”
           </h4>
        </div>

      </div>
    </section>
  );
};

export default Benefits;