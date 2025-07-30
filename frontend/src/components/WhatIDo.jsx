import './WhatIDo.scss';

export default function WhatIDo() {
  const developmentAreas = [
    {
      icon: '⚙️',
      title: 'Systems Programming',
      description: 'Low-level C/C++ Development - Building efficient, memory-safe applications\nUnix/Linux System Administration - Server management and shell scripting\nProcess & Memory Management - Optimizing system resources and performance',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
    {
      icon: '🧠',
      title: 'Algorithm & Data Structure Design',
      description: 'Custom Algorithm Implementation - Sorting, searching, and graph algorithms\nData Structure Optimization - Building efficient data containers and structures\nProblem Solving - Breaking down complex computational challenges',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
    {
      icon: '🎮',
      title: 'Graphics & Game Programming',
      description: '3D Raycasting Engines - Building game engines from scratch (like cub3d)\nComputer Graphics - Implementing rendering algorithms and visual effects\nMathematical Programming - Linear algebra and geometric calculations',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
    {
      icon: '🔄',
      title: 'Concurrent Programming',
      description: 'Multithreading Solutions - Thread-safe applications and synchronization\nParallel Processing - Optimizing performance through concurrent execution\nDeadlock Prevention - Implementing safe concurrent systems',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
    {
      icon: '🌐',
      title: 'Network & Inter-Process Communication',
      description: 'Shell & Command Line Tools - Building Unix utilities and pipeline systems\nProcess Communication - Implementing pipes, signals, and IPC mechanisms\nSystem Integration - Connecting different software components',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
     {
      icon: '💻',
      title: 'Web Technologies',
      description: 'Frontend Development - HTML, CSS, JavaScript\nBackend Systems - Server-side programming\nDatabase Management - SQL and data persistence',
      link: 'https://github.com/Mouad-kimdil?tab=repositories'
    },
    {
      icon: '📋',
      title: 'Code Architecture & Best Practices',
      description: 'Clean Code Implementation - Writing maintainable and scalable code\nDebugging & Testing - Systematic problem identification and resolution\nVersion Control & Collaboration - Git workflows and team development',
      link: null
    }
   
  ];

  return (
    <section id="work" className="what-i-do-section">
      <h2 className="gradient-text">What I Do</h2>
      <div className="development-cards">
        {developmentAreas.map((area, index) => (
          <div key={index} className="dev-card">
            <div className="card-icon">{area.icon}</div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            {area.link && (
              <a href={area.link} target="_blank" rel="noopener noreferrer" className="card-link">
                View Projects →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
