import './Footer.css';

const SocialIcons = () => {
  const icons = [
    { name: "GitHub", url: "https://github.com", icon: "/src/assets/icons/github.svg" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "/src/assets/icons/linkedin.svg" },
    { name: "Google Drive", url: "https://drive.google.com", icon: "/src/assets/icons/drive.svg" }
  ];

  return (
    <div className="social-icons">
      {icons.map((social, index) => (
        <a 
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.name}
        >
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;