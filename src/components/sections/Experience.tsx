import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { experience } from '../../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" background="white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 flex mb-2">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};