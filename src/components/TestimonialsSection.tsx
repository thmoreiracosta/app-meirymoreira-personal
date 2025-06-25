const TestimonialsSection = () => {
  return (
    <div id="depoimentos" className="w-full mb-8">
      <h3 className="text-xl font-bold mb-6 text-center gradient-text">
        Depoimentos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
              style={{ backgroundColor: "rgba(251,210,196,0.7)" }}
            >
              <span className="text-primary font-medium">AM</span>
            </div>
            <div>
              <h4 className="font-medium">Ana Maria</h4>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            "O programa pós-parto da Meiry foi essencial para minha recuperação.
            Em 3 meses consegui recuperar minha força abdominal e voltar às
            atividades normais."
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
              style={{ backgroundColor: "rgba(37, 150, 190, 0.2)" }}
            >
              <span className="text-secondary font-medium">CP</span>
            </div>
            <div>
              <h4 className="font-medium">Carla Pereira</h4>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            "As aulas de LPF mudaram minha vida! Melhorei minha postura,
            fortaleci meu core e reduzi dores nas costas que tinha há anos."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
