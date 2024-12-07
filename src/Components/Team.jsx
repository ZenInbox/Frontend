import React from "react";

export default function Team() {

  const handleRedirect = (link) => {
    window.location.href = link;
  };
  return (
<section
  id="team"
  className="overflow-hidden pt-28 md:pt-32 md:pb-20 xl:pt-36 bg-gradient-to-b from-hoverColor to-hoverColor px-6 sm:px-12 lg:px-16"
  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-offset="2"
>
  <div className="text-center mb-12">
    <h2 className="bg-gradient-to-r from-primary via-primary to-hoverButtonColor bg-clip-text text-transparent mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            Meet Our Team
    </h2>
    <p className="max-w-[714px] mx-auto mb-5 font-medium text-pink-600/90 mt-5">
      A passionate team dedicated to delivering excellence.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full">
    {/* Team Member 1 */}
    <div
      className="relative cursor-pointer group bg-cover bg-center rounded-lg shadow-lg p-0 transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{
        backgroundImage: "url('src/assets/p.jpeg')",
        height: '300px',
        width: '300px', 
      }}
      onClick={() => handleRedirect("/team-member/1")}
    >
    
      {/* White rounded container for text at the bottom */}
      <div className="absolute bg-opacity-50 bottom-0 left-0 w-full bg-white py-4 px-6 rounded-b-lg text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Pretisha Sahoo</h3>
          <p className="text-sm text-gray-600">Full Stack Developer</p>
        </div>
      </div>
    </div>

    {/* Team Member 2 */}
    <div
  className="relative cursor-pointer group bg-cover bg-center rounded-lg shadow-lg p-0 transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl"
  style={{
    backgroundImage: "url('src/assets/FB_DP.jpg')",
    height: '300px',
    width: '300px',
  }}
>
  {/* White rounded container for text at the bottom */}
  <div className="absolute bg-opacity-50 bottom-0 left-0 w-full bg-white py-4 px-6 rounded-b-lg text-center">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Rishi Bhattasali</h3>
      <p className="text-sm text-gray-600">AIML Engineer</p>
    </div>
  </div>

  {/* LinkedIn Button at the downside */}

</div>

    {/* Team Member 3 */}
    <div
      className="relative cursor-pointer group bg-cover bg-center rounded-lg shadow-lg p-0 transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{
        backgroundImage: "url('src/assets/prii.jpg')",
        height: '300px',
        width: '300px', 
      }}
      onClick={() => handleRedirect("/team-member/1")}
    >
    
      {/* White rounded container for text at the bottom */}
      <div className="absolute bg-opacity-50 bottom-0 left-0 w-full bg-white py-4 px-6 rounded-b-lg text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Priyanshu Dutta</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <link rel="stylesheet" href="" />
        </div>
      </div>
    </div>
  </div>
</section>



  );
}

