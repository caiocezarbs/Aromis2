import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Wind, Droplets, Leaf, Check } from "lucide-react";

const products = [
  {
    title: "Aromatizadores",
    description: "Para perfumar grandes ambientes com eficiência.",
    icon: Wind,
    accent: "bg-aromis-cyan",
    textAccent: "text-aromis-cyan",
    bullets: ["Spray de alta dispersão", "Fragrâncias duradouras", "Ideal para salas e quartos"],
  },
  {
    title: "Sabonetes Líquidos",
    description: "Limpeza suave com toque de sofisticação.",
    icon: Droplets,
    accent: "bg-aromis-green",
    textAccent: "text-aromis-green",
    bullets: ["Não resseca as mãos", "Espuma cremosa", "Design que decora"],
  },
  {
    title: "Óleos Essenciais",
    description: "Pureza concentrada para aromaterapia.",
    icon: Leaf,
    accent: "bg-aromis-purple",
    textAccent: "text-aromis-purple",
    bullets: ["100% puro", "Uso em difusores", "Bem-estar terapêutico"],
  },
];

const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-aromis-cyan font-semibold text-sm uppercase tracking-wider">Nossa Linha</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Escolha como transformar seu ambiente</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-t-4 transition-transform hover:-translate-y-1 hover:shadow-lg" style={{ borderTopColor: 'transparent' }}>
                 <div className={`h-2 w-full ${product.accent} rounded-t-sm`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${product.accent}/10 flex items-center justify-center mb-4`}>
                    <product.icon className={`w-6 h-6 ${product.textAccent}`} />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className={`w-4 h-4 ${product.textAccent}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${product.accent} border-none hover:opacity-90`}>
                    Ver opções
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;