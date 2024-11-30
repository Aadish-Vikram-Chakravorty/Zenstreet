import './TherapistDetailPage.css';

const TherapistDetailPage = () => {
  // Example data (You can fetch dynamic data from a server)
  const therapist = {
    name: 'Dr. Emily Johnson',
    image: 'https://via.placeholder.com/150',
    speciality: 'Child Psychology and Family Counseling',
    experience: 8,
    price: 1500,
    address: '123 Main Street, Cityville',
    description: `Dr. Emily Johnson specializes in child psychology and family counseling. With over 8 years of experience, she has worked with families to resolve conflicts and support children through challenges like academic stress and anxiety. Her compassionate approach makes her highly sought after.`,
  };

  return (
    <div className="therapist-detail-page">
      <div className="left-side">
        <div className="therapist-card">
          <img src={therapist.image} alt={therapist.name} className="therapist-image" />
          <h2>{therapist.name}</h2>
          <p><strong>Speciality:</strong> {therapist.speciality}</p>
          <p><strong>Experience:</strong> {therapist.experience} years</p>
          <p><strong>Price:</strong> ₹{therapist.price} per session</p>
          <p><strong>Address:</strong> {therapist.address}</p>
          <button className="book-button">Book a Session</button>
          <p>
            <strong>Share:</strong>
            <a href={`https://wa.me/?text=Check out ${therapist.name}'s profile at ${window.location.href}`} target="_blank" rel="noreferrer"> WhatsApp</a> |
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer"> Facebook</a>
          </p>
        </div>
      </div>
      <div className="right-side">
        <h1>About {therapist.name}</h1>
        <p>{therapist.description}</p>
      </div>
    </div>
  );
};

export default TherapistDetailPage;
