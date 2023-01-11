import react from 'react';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <img src="images/me.jpg" alt="Me" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-6 mb-2"><b>About Me</b></h1>
                            <hr className="w-50" />
                            <p className="lead mb-4">Hello, and welcome to my personal page! Here you can find information about my skillset, my personal and academic projects, my interests, and career goals.
                                I am a second year computer science student studying at the <em>University of Windsor</em>.</p>
                            <p className="fs-5 mb-0"> <b>Research Interests: </b>Artifical intelligence, machine learning, and deep learning</p>
                            <p className="fs-5 mb-0"> <b>Career Interests: </b>Machine learning engineer, full-stack developer, backend developer, frontend developer </p>
                            <p className="fs-5 mb-0"> <b>Project Tabs are a work in progress </b></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
