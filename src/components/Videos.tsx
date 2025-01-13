import React from 'react';

const Videos = () => {
  const videos = [
    {
      id: 'Yin3r31uiBI',
      title: 'Simulation Clicker Gameplay Short'
    },
    {
      id: '8Bt3xQlbB9Y',
      title: 'Simulation Clicker Full Gameplay'
    }
  ];

  return (
    <section id="videos" className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Watch and Learn</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-[300px] rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos; 