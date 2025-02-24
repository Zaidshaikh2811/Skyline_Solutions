import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { ServiceFormData } from '../../utils/types';
import axios from 'axios';

const serviceDetails = {
    'CustomSoftwareDevelopment': {
        id: "CustomSoftwareDevelopment",
        title: 'Custom Software Development',
        description: 'Tailored solutions designed to meet your specific business requirements and drive growth.',
        fullDescription: 'Our custom software development service delivers tailored solutions that perfectly align with your business objectives. We employ cutting-edge technologies and agile methodologies to create robust, scalable, and efficient software solutions that drive your business forward.',
        benefits: [
            'Customized solutions for your specific needs',
            'Scalable and future-proof architecture',
            'Modern technology stack',
            'Dedicated development team',
            'Regular updates and maintenance'
        ],
        features: [
            'Full-cycle development',
            'Quality assurance and testing',
            'API development and integration',
            'Database design and optimization',
            'Technical documentation'
        ]
    },
    'WebDevelopment': {
        id: "WebDevelopment",
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
        fullDescription: 'We create stunning, responsive websites and web applications that deliver exceptional user experiences. Our web development solutions combine modern design principles with robust functionality to help your business stand out in the digital landscape.',
        benefits: [
            'Responsive design for all devices',
            'SEO-friendly architecture',
            'Fast loading speeds',
            'Secure and reliable hosting',
            'Easy content management'
        ],
        features: [
            'Custom website development',
            'E-commerce solutions',
            'Progressive Web Apps (PWA)',
            'Content Management Systems',
            'Web application development'
        ]
    },
    'ITConsulting': {
        id: "ITConsulting",
        title: 'IT Consulting',
        description: 'Strategic guidance to help you navigate digital transformation and technology adoption.',
        fullDescription: 'Our IT consulting services provide expert guidance to help organizations optimize their technology infrastructure and drive digital transformation. We work closely with you to develop strategies that align with your business goals.',
        benefits: [
            'Expert technology guidance',
            'Cost optimization strategies',
            'Risk management',
            'Digital transformation roadmap',
            'Technology stack optimization'
        ],
        features: [
            'IT strategy development',
            'Technology assessment',
            'Digital transformation planning',
            'Vendor selection assistance',
            'IT governance framework'
        ]
    },
    'CloudSolutions': {
        id: "CloudSolutions",
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services for improved efficiency.',
        fullDescription: 'We provide comprehensive cloud solutions that help businesses leverage the power of cloud computing. From migration to management, we ensure your cloud infrastructure is optimized for performance, security, and cost-efficiency.',
        benefits: [
            'Improved scalability',
            'Cost optimization',
            'Enhanced security',
            'Disaster recovery',
            'Global accessibility'
        ],
        features: [
            'Cloud migration services',
            'Multi-cloud management',
            'Cloud security implementation',
            'Performance optimization',
            'Cloud cost management'
        ]
    },
    'Cybersecurity': {
        id: "Cybersecurity",
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your business from evolving threats.',
        fullDescription: 'Our cybersecurity services provide robust protection against evolving digital threats. We implement comprehensive security measures to safeguard your data, systems, and digital assets.',
        benefits: [
            'Enhanced data protection',
            'Regulatory compliance',
            'Threat prevention',
            'Reduced security risks',
            '24/7 monitoring'
        ],
        features: [
            'Security assessment',
            'Penetration testing',
            'Security awareness training',
            'Incident response planning',
            'Compliance management'
        ]
    },
    'ProcessAutomation': {
        id: "ProcessAutomation",
        title: 'Process Automation',
        description: 'Streamline operations with intelligent automation solutions and workflows.',
        fullDescription: 'We help organizations automate repetitive tasks and streamline workflows to improve efficiency and reduce costs. Our process automation solutions leverage cutting-edge technologies to transform business operations.',
        benefits: [
            'Increased efficiency',
            'Reduced operational costs',
            'Improved accuracy',
            'Better resource allocation',
            'Enhanced productivity'
        ],
        features: [
            'Workflow automation',
            'Business process mapping',
            'RPA implementation',
            'Integration services',
            'Process optimization'
        ]
    },
    'AIMachineLearning': {
        id: "AIMachineLearning",
        title: 'AI & Machine Learning',
        description: 'Advanced AI solutions for predictive analytics, automation, and intelligent decision-making.',
        fullDescription: 'We develop sophisticated AI and machine learning solutions that help businesses leverage data for intelligent decision-making and automation. Our solutions drive innovation and competitive advantage.',
        benefits: [
            'Data-driven insights',
            'Predictive capabilities',
            'Automated decision-making',
            'Improved efficiency',
            'Competitive advantage'
        ],
        features: [
            'Machine learning models',
            'Natural language processing',
            'Predictive analytics',
            'AI integration',
            'Custom AI solutions'
        ]
    },
    'IntelligentAutomation': {
        id: "IntelligentAutomation",
        title: 'Intelligent Automation',
        description: 'AI-powered RPA and workflow automation to transform business processes.',
        fullDescription: 'Our intelligent automation solutions combine AI and RPA to create smart, adaptive automation systems that transform business processes and drive operational excellence.',
        benefits: [
            'Enhanced efficiency',
            'Reduced errors',
            'Cost savings',
            'Scalable operations',
            'Improved customer service'
        ],
        features: [
            'AI-powered RPA',
            'Smart workflow automation',
            'Process intelligence',
            'Cognitive automation',
            'Automated decision-making'
        ]
    },
    'ComputerVision': {
        id: "ComputerVision",
        title: 'Computer Vision',
        description: 'Advanced image recognition and processing solutions for automated visual analysis.',
        fullDescription: 'We develop sophisticated computer vision solutions that enable machines to understand and process visual information. Our solutions power automated inspection, recognition, and analysis systems.',
        benefits: [
            'Automated visual inspection',
            'Real-time analysis',
            'Quality control',
            'Enhanced safety',
            'Increased accuracy'
        ],
        features: [
            'Image recognition',
            'Object detection',
            'Visual inspection',
            'Video analytics',
            'Pattern recognition'
        ]
    }
};


const ServicePage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [formData, setFormData] = useState<ServiceFormData>({
        name: '',
        email: '',
        company: '',
        service: serviceId || '',
        message: ''
    });
    console.log(serviceId);


    const service = serviceDetails[serviceId as keyof typeof serviceDetails];
    console.log(service);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const resp = await axios.post("https://skyline-solutions-1.onrender.com/task-email", formData);
            console.log(resp.data);
            alert('Request submitted successfully!');
            setFormData({
                name: '',
                email: '',
                company: '',
                service: serviceId || '',
                message: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (!service) {
        return <div>Service not found</div>;
    }
    console.log(service);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {/* Service Details Section */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{service.fullDescription}</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Benefits</h2>
                                <ul className="mt-4 space-y-2">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Features</h2>
                                <ul className="mt-4 space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Get Started</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Fill out the form below and we'll get back to you shortly.</p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Project Details
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;