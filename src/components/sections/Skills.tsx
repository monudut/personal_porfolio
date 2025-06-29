import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, PenTool as Tool, Palette } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skills } from '../../data/portfolio';

export const Skills: React.FC = () => {
  const skillCategories = {
    frontend: { icon: Code, title: 'Frontend Technologies', color: 'blue' },
    backend: { icon: Database, title: 'Backend', color: 'green' },
    tools: { icon: Tool, title: 'Tools & DevOps', color: 'purple' },
    libraries: { icon: Palette, title: 'Libraries', color: 'pink' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <Section id="skills" background="white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
            const categorySkills = groupedSkills[category] || [];
            const Icon = config.icon;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="text-center mb-6">
                    <div className={`bg-${config.color}-100 p-3 rounded-lg inline-block mb-3`}>
                      <Icon className={`text-${config.color}-600`} size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{config.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            style={{background: `${config.color}`}}
                            className={`bg-${config.color}-600 h-2 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};