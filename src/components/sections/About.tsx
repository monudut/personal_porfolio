import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/portfolio';

export const About: React.FC = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email },
    { icon: Phone, label: 'Phone', value: personalInfo.phone },
    { icon: MapPin, label: 'Location', value: personalInfo.location }
  ];

  return (
    <Section id="about" background="gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <User className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying the great outdoors. 
                I believe in continuous learning and staying up-to-date with the 
                latest industry trends.
              </p>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <item.icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.label}</h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};