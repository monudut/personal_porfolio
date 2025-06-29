import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects } from '../../data/portfolio';
import { ImageCarousel } from '../ui/ImageCarousal';

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Section id="projects" background="gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Featured Projects */}
        {/* <div className="grid lg:grid-cols-2 gap-8 mb-16"> */}
        <div className='flex justify-center mb-16'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col lg:flex-row"> 
                 <div className="relative">
                    <ImageCarousel 
                      images={project?.images || []}
                      alt={project.title}
                      autoPlay={true}
                      autoPlayInterval={5000}
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div 
                        className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <Star size={12} className="mr-1" />
                        Featured
                      </motion.div>
                    </div>
                  </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <Button variant="outline" href={project.githubUrl} size="sm">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button href={project.liveUrl} size="sm">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 sm:p-6 h-full">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button variant="outline" href={project.githubUrl} size="sm">
                          <Github size={14} className="mr-1" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button href={project.liveUrl} size="sm">
                          <ExternalLink size={14} className="mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
};