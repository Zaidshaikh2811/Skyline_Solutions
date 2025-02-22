import React from 'react';
import { Code, Globe, Brain, Cloud, Shield, Zap, Cpu, Notebook as Robot, ShipIcon as ChipIcon } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business requirements and drive growth.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.'
  },
  {
    icon: Brain,
    title: 'IT Consulting',
    description: 'Strategic guidance to help you navigate digital transformation and technology adoption.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for improved efficiency.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from evolving threats.'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions and workflows.'
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions for predictive analytics, automation, and intelligent decision-making.'
  },
  {
    icon: Robot,
    title: 'Intelligent Automation',
    description: 'AI-powered RPA and workflow automation to transform business processes.'
  },
  {
    icon: ChipIcon,
    title: 'Computer Vision',
    description: 'Advanced image recognition and processing solutions for automated visual analysis.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Comprehensive IT solutions powered by cutting-edge AI technology
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <span className="hover:underline cursor-pointer">Learn more</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;