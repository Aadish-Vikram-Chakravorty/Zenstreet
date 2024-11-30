import './PortfolioPage.css'; // Include a CSS file for styling

const PortfolioPage = () => {
  // Array of therapist data
  const therapists = [
    {
      name: 'Dr. John Smith',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
      description: 'Specialist in Cognitive Behavioral Therapy with 10+ years of experience.',
    },
    {
      name: 'Dr. Emily Johnson',
      image: 'https://via.placeholder.com/150',
      description: 'Expert in Child Psychology and Family Counseling.',
    },
    {
      name: 'Dr. Michael Brown',
      image: 'https://via.placeholder.com/150',
      description: 'Focuses on Anxiety and Stress Management therapy.',
    },
    {
      name: 'Dr. Sarah Davis',
      image: 'https://via.placeholder.com/150',
      description: 'Experienced in Relationship and Marriage Counseling.',
    },
  ];

  return (
    <div className="portfolio-page">
      <h1>Meet Our Therapists</h1>
      <div className="cards-container">
        {therapists.map((therapist, index) => (
          <div className="card" key={index}>
            <img src={therapist.image} alt={therapist.name} className="card-image" />
            <h2 className="card-title">{therapist.name}</h2>
            <p className="card-description">{therapist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
