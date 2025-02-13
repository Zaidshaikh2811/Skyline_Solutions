import React from 'react';

const caseStudies = [
  {
    title: 'Healthcare Platform Transformation',
    client: 'MedTech Solutions',
    description: 'Modernized patient management system improving efficiency by 45%',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Financial Services Automation',
    client: 'Global Banking Corp',
    description: 'Automated workflow reducing processing time by 60%',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Supply Chain Optimization',
    client: 'LogiTech Industries',
    description: 'IoT-enabled tracking system improving delivery accuracy to 99.9%',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Real success stories from our valued clients
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                  {study.client}
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read full case study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;