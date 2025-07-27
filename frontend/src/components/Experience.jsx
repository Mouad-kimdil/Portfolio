import { useEffect } from 'react';
import './Experience.scss';

export default function Experience() {
  const experiences = [
    {
      duration: "2023 - Present",
      role: "Software Developer & Systems Programming Student",
      company: "1337 Coding School (42 Network)",
      location: "Casablanca, Morocco",
      description: [
        "Completed 17+ intensive programming projects covering systems programming, algorithms, graphics, and object-oriented programming",
        "Mastered C/C++ development through hands-on implementation of complex data structures, memory management, and system-level programming",
        "Built production-ready applications including 3D graphics engines, shell interpreters, and concurrent programming solutions",
        "Collaborated in peer-to-peer learning environment with code reviews, pair programming, and knowledge sharing"
      ],
      technologies: ["C", "C++", "Systems Programming", "Graphics Programming", "Multithreading", "Unix/Linux", "Git"]
    },
    {
      duration: "2023 - Present",
      role: "Freelance Software Developer",
      company: "Self-Employed",
      location: "Remote",
      description: [
        "Delivered custom programming solutions for clients requiring system-level programming and automation tools",
        "Provided code debugging and optimization services using advanced C/C++ development skills",
        "Built command-line utilities and automation scripts tailored to client specifications",
        "Maintained professional client relationships with clear communication and timely project delivery"
      ],
      technologies: ["C/C++", "Automation", "Debugging", "Command-line Tools", "Client Communication"]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title gradient-text">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="duration">{exp.duration}</div>
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
                <div className="location">{exp.location}</div>
              </div>
              <div className="timeline-description">
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}