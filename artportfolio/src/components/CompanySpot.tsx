import './CompanySpot.css';

export default function CompanySpot() {
  return (
    <section id="company" className="company-section">
      <div className="company-inner">
        <div className="section-header">
          <h2 className="section-title">Studio Collaboration</h2>
          <p className="section-subtitle">Selected client partnership and mascot development.</p>
        </div>

        <div className="company-card">
          <div className="company-media">
            <img src="/images/gallery/Grazz.png" alt="BladeOne logo" />
            <img src="/images/gallery/GreenBlade.png" alt="Blade mascot" />
          </div>
          <div className="company-text">
            <p className="company-label">Company</p>
            <h3 className="company-name">BladeOne</h3>
            <p className="company-role">Mascot & Logo Design</p>
            <p className="company-description">
              I developed 10+ mascot and logo concepts, collaborated with the team on
              refinements, and finalized the direction they loved most, featuring Blade the
              grasshopper.
            </p>
            <p className="company-description">Logo designs created by me.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
