const ProfileSection = () => {
  return (
    <>
      <div
        className="w-32 h-32 rounded-full overflow-hidden profile-img mb-4"
        //style={{background: "linear-gradient(135deg, #c605f5 0%, rgba(149,20,251,255) 100%)"}}
      >
        <a href="https://thmoreiracosta.github.io/app-meirymoreira-personal/">
          <img
            className="w-full h-full text-white opacity-80"
            src="/my-photo.jpg"
            alt="meiry-moreira-personal-trainer"
          />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center mb-1 gradient-text">
        Meiry Moreira
      </h1>
      <h2 className="text-lg font-medium text-primary text-center mb-3">
        Personal Trainer
      </h2>
      <p className="text-center text-gray-600 max-w-md mb-6">
        Especialista em reestruturação pós-parto, LPF e treinamento
        personalizado para mulheres.
      </p>
    </>
  );
};

export default ProfileSection;
