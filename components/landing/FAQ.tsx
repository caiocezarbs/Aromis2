import React from "react";
import { Accordion } from "../ui/accordion";

const faqItems = [
  {
    id: "fixacao",
    question: "Os aromatizadores têm boa fixação?",
    answer: "Sim! Desenvolvemos nossas fórmulas com alta concentração de essência para garantir que o cheiro permaneça no ambiente por mais tempo."
  },
  {
    id: "escolha",
    question: "Como escolher a fragrância ideal?",
    answer: "Para quartos, sugerimos aromas relaxantes como Lavanda. Para salas, aromas mais vibrantes como Bambu ou Capim Limão. Na dúvida, nosso kit de experimentação é ótimo!"
  },
  {
    id: "uso",
    question: "Como usar o difusor de varetas?",
    answer: "Abra o frasco, mergulhe as varetas e vire-as imediatamente. Para manter o cheiro forte, vire as varetas dia sim, dia não."
  },
  {
    id: "prazo",
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia conforme seu CEP. Você pode simular o tempo e custo no carrinho de compras. Enviamos código de rastreio para todos os pedidos."
  },
  {
    id: "trocas",
    question: "Como funciona a política de trocas?",
    answer: "Se o produto chegar avariado, trocamos sem custo. Para devolução por arrependimento, você tem até 7 dias após o recebimento."
  },
  {
    id: "kits",
    question: "Vocês vendem kits promocionais?",
    answer: "Sim, temos combos com desconto progressivo na seção 'Kits' do nosso catálogo."
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Perguntas Frequentes</h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

export default FAQ;