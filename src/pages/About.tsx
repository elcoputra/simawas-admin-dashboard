import Button from '@mui/material/Button';

const About = () => {
  return (
    <div>
      <div className="Hello">
        <img
          width="200"
          alt="icon"
          src="https://simawas.jabarprov.go.id/logo_simawas_pagi_detail_long.svg"
        />
      </div>
      <h1 style={{ textAlign: 'center' }}>Dashboard admin simawas</h1>
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default About;
