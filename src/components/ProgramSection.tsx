const ProgramSection = () => {
  return (
    <div
      id="programa-pos-parto"
      className="w-full bg-white rounded-2xl shadow-lg p-6 mb-8"
    >
      <h3 className="text-xl font-bold mb-4 text-primary items-center justify-center text-center">
        Programa de Reestruturação Pós-Parto
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <div
            className="aspect-video rounded-lg mb-4 flex items-center justify-center"
            style={{ backgroundColor: "rgba(251,210,196,0.3)" }}
          >
            <video
              src={`${import.meta.env.BASE_URL}lpf.mp4`}
              autoPlay
              muted
              loop
              controls
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">
            Programa especializado para mulheres no pós-parto, focado na
            recuperação da musculatura abdominal, fortalecimento do assoalho
            pélvico e readaptação corporal.
          </p>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Avaliação física personalizada</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Exercícios específicos para diástase</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Acompanhamento nutricional</span>
            </li>
          </ul>
          <a href="https://www.instagram.com/p/CUKW7yhryFK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
            <button className="w-full py-3 px-4 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-colors mt-8">
              Saiba mais
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
