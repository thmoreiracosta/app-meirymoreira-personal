const LpfSection = () => {
  return (
    <div id="lpf" className="w-full bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-secondary text-center mb-8">
        Low Pressure Fitness (LPF)
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">
            O LPF é uma técnica inovadora de treinamento postural hipopressivo
            que trabalha a musculatura profunda, melhorando a postura e
            fortalecendo o core.
          </p>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
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
              <span>Melhora da postura corporal</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
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
              <span>Fortalecimento do assoalho pélvico</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
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
              <span>Redução da cintura e definição abdominal</span>
            </li>
          </ul>
          <a
            href="https://www.instagram.com/reel/C-2vmkkOwDp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <button className="w-full py-3 px-4 mt-8 gradient-bg-secondary text-white rounded-lg font-medium hover:opacity-90 transition-colors">
              Conhecer o método
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <div
            className="aspect-video rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(37, 150, 190, 0.1)" }}
          >
            <video
              src={`${import.meta.env.BASE_URL}lpf_2.mp4`}
              autoPlay
              muted
              loop
              controls
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpfSection;
