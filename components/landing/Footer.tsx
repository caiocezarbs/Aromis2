import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">AROMIS</h2>
            <p className="max-w-xs text-slate-400">
              Produtos pensados para trazer bem-estar e aconchego para o seu lar. 
              Feito com carinho para a família brasileira.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#produtos" className="hover:text-aromis-cyan transition-colors">Produtos</a></li>
              <li><a href="#beneficios" className="hover:text-aromis-cyan transition-colors">Benefícios</a></li>
              <li><a href="#faq" className="hover:text-aromis-cyan transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-white mb-4">Contato</h4>
             <ul className="space-y-2">
               <li>contato@aromis.com.br</li>
               <li>(11) 99999-9999</li>
               <li className="flex gap-4 mt-4">
                 <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">IG</div>
                 <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">FB</div>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aromis. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;