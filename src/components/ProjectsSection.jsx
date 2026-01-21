import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CalScan: AI Nutrition Analysis",
    description: "Computer vision app using Transfer Learning (MobileNet, ResNet50) to provide real-time nutritional profiles via USDA API integration.",
    image: "/projects/calscan.png",
    tags: ["Python", "TensorFlow", "Streamlit", "REST API"],
    demoUrl: "#", // Add your link if available
    githubUrl: "https://github.com/ish1n/CalScan", // Using GitHub handle from your records [cite: 50]
  },
  {
    id: 2,
    title: "NFS-Most-Wanted: OSINT Platform",
    description: "Full-stack AI platform using TF-IDF and Scikit-Learn to analyze digital footprints and categorize interests from unstructured text.",
    image: "/projects/osint.png",
    tags: ["FastAPI", "React", "Scikit-Learn", "BeautifulSoup"],
    demoUrl: "#",
    githubUrl: "https://github.com/ish1n/NFS_Most_Wanted",
  },
  {
    id: 3,
    title: "Stock Market Price Prediction",
    description: "Time-series forecasting system using LSTM and ARIMA models, featuring an interactive dashboard for data-driven trade simulations.",
    image: "/projects/stock.png",
    tags: ["Pandas", "LSTM", "ARIMA", "Plotly"],
    demoUrl: "#",
    githubUrl: "https://github.com/ish1n",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my work at the intersection of Data Science and Full-Stack Development. 
          Each project leverages machine learning to solve real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <div className="h-48 overflow-hidden bg-muted">
                {/* Ensure these images exist in your public/projects folder */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ish1n"
          >
            Explore More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};