import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I’m a fresher software developer with a strong interest in building
              practical and efficient web applications. My journey started with
              problem-solving and competitive programming, which shaped my
              logical thinking and coding fundamentals.
            </p>

            <p className="text-muted-foreground">
              I work primarily with Python and frameworks like Fast-api and Flask,
              and I enjoy learning new technologies while turning ideas into
              functional, user-focused solutions.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="mailto:ishangupta409@gmail.com" className="cosmic-button">
                Get In Touch
              </a>

              
            </div>
             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
             <a href="public\Ishan_resume (1).pdf" download="Ishan_resume(1)" className="cosmic-button">
     Download
              </a>

              
            </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications using Flask, Fast-Api,
                    React, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in data structures, algorithms, and
                    competitive programming platforms like LeetCode and
                    CodeChef.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Learning</h4>
                  <p className="text-muted-foreground">
                    Experience working on academic and personal projects, with a
                    focus on clean code, collaboration, and continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
