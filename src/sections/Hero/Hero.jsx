import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImage.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import Cv from '../../assets/CV.pdf'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img style={{marginLeft:'25px'}}
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Manali Bhosale"
        />
        <img style={{paddingLeft:'5px'}}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className='text-2xl font-semibold font-[poppins]'>
          Manali
         
          Bhosale
        </h1>
        <h2 className='text-lg font-semibold font-[poppins]'>Frontend Developer</h2>
        <span>
        
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/manali-bhosale-786122218/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p style={{marginLeft:'9px'}} className={styles.description}>
          With a passion for developing modern and creative React web apps for commercial
          businesses.
        </p>
        <a href={Cv} download>
          <button className="hover ">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
