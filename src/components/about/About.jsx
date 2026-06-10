import './About.css'
import girl from '../../assets/girl.svg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2 className="about__title">About me</h2>

        <p className="about__paragraph">
          I'm a Software Development student from Ecuador who enjoys learning new technologies and building practical solutions through programming. My interests include web development, software engineering, networking, and creating projects that help me improve both my technical and problem-solving skills.
        </p>

        <p className="about__paragraph">
          Currently, I'm expanding my knowledge in React, Java, C++, Python, and computer networks while also improving my English skills. I enjoy taking on new challenges, working on personal projects, and continuously growing as a developer through discipline, curiosity, and hands-on experience.
        </p>

        <a
          href="https://github.com/sebxs29"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn__light"
        >
          Check my GitHub
        </a>
      </div>

      <figure className="about__figure">
        <img
          src={girl}
          className="about__picture"
          alt="Developer illustration"
        />
      </figure>
    </section>
  )
}

export default About