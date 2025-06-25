const MainLinks = () => {
  return (
    <div className="w-full space-y-4 mb-8">
      <a href="#programa-pos-parto" className="link-card block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg text-center font-medium gradient-bg text-white">
        Programa de Reestruturação Pós-Parto
      </a>
      <a href="#lpf" className="link-card block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg text-center font-medium gradient-bg-secondary text-white">
        Treinamento LPF (Low Pressure Fitness)
      </a>
      <a href="#consulta" className="link-card block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg text-center font-medium border border-accent" style={{backgroundColor: "rgba(251,210,196,0.7)", color: "#333"}}>
        Agende uma Consulta
      </a>
      <a href="#depoimentos" className="link-card block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg text-center font-medium border border-purple text-purple">
        Depoimentos de Alunas
      </a>
    </div>
  );
};

export default MainLinks;