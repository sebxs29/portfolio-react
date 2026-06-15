import './Project.css';

import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.png';


const Project = () => {
    return (
        <section className="project" id="project">
                <h3 className="project__title">Projects</h3>
                    <div className="cards">
                        <img src={project1} className="card__img" alt="QuitoCare Project" />
                        <div className="card">
                            <h4 className="card__title">QuitoCare</h4>
                            <p className="card__description">
                                Telemedicine platform designed to connect patients and healthcare professionals through online consultations, appointment management, and digital medical services.
                            </p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <img src={project2} className="card__img" alt="Portfolio Project" />
                        <div className="card">
                            <h4 className="card__title">Portfolio</h4>
                            <p className="card__description">
                                Personal portfolio built with React to showcase my projects, technical skills, and learning journey as a Software Development student.
                            </p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <img src={project3} className="card__img" alt="Hotel Management System" />
                        <div className="card">
                            <h4 className="card__title">Hotel Management System</h4>
                            <p className="card__description">
                                Desktop application developed with C++ and Qt for managing hotel information, including registration, updates, searches, and record administration.
                            </p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>
        </section>
    )
}

export default Project