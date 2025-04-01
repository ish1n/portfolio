import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

// LeetCode SVG Icon Component
const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    fill="currentColor"
  >
    <path d="M4.71 12L12 4.71l4.71 4.71L12 17.29 4.71 12zm13.65 1.78l1.42-1.42 1.42 1.42-1.42 1.42-1.42-1.42zM11.29 4.71L3 12l8.29 7.29 1.42-1.42L5.84 12l6.87-6.87-1.42-1.42zm8.29 0l-6.87 6.87 1.42 1.42 6.87-6.87-1.42-1.42z" />
  </svg>
);

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.leetcode && (
              <a
                href={social.leetcode}
                aria-label="leetcode"
                className="link link--icon"
              >
                <LeetCodeIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
