import { ShoppingCart, Home, Heart, Scale, Calculator, Megaphone, Laptop, Briefcase, GraduationCap, Plane, Phone, Users, UserCheck, Rocket, Settings } from 'lucide-react';

export const NAV_ITEMS = [
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Calculator',
    link: '#calculator',
  },
  {
    title: 'How It Works',
    link: '#approach',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
];

export const CARDS = [
  {
    title: 'Engineering Support',
    description:
      'Scale your technical team faster with skilled remote engineers and developers. From frontend development to backend integrations and cloud support, Guia helps businesses build reliable tech teams without the traditional hiring overhead.',
    services: [
      ['Frontend Development', 'Backend Development'],
      ['API Integrations', 'Cloud & DevOps Support'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Tech Virtual Assistance',
    description:
      'Streamline operations with tech-savvy virtual assistants who understand modern tools and digital workflows. Guia\'s remote professionals help manage systems, customer operations, documentation, and day-to-day technical coordination.',
    services: [
      ['CRM & Admin Support', 'Project Coordination'],
      ['Technical Documentation', 'Customer Operations'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Specialized Technical Services',
    description:
      'Access specialized remote talent for growing digital businesses. From QA testing and automation support to UI/UX and data management, Guia provides professionals ready to support fast-moving teams.',
    services: [
      ['QA Testing', 'Automation Support'],
      ['UI/UX Assistance', 'Data & System Management'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: Phone,
    title: 'Free Strategy Call',
    description:
      "Book a free consultation with Guia's team. We'll discuss your business needs, challenges, and goals to understand how Guia can help you save up to 70% on staffing costs while scaling your operations.",
  },
  {
    icon: Users,
    title: 'Talent Matching',
    description:
      'Guia handpicks pre-vetted virtual assistants from our talented pool of Filipino professionals. Each candidate is carefully selected based on their skills, experience, and alignment with your business needs.',
  },
  {
    icon: UserCheck,
    title: 'Meet Your VA',
    description: 'Interview as many candidates as you need until you find the perfect match. Guia wants you to be completely confident in your choice, so there\'s no pressure or rush in the selection process.',
  },
  {
    icon: Rocket,
    title: 'Seamless Onboarding',
    description:
      'Once you\'ve selected your virtual assistant, Guia handles all the onboarding, compliance, and HR details. Your VA is trained and ready to integrate seamlessly into your workflow from day one.',
  },
  {
    icon: Settings,
    title: 'Ongoing Management',
    description:
      'Your success is Guia\'s priority. Guia provides continuous support and management to ensure your virtual assistant delivers exceptional results. Scale up or down as needed—no long-term contracts or hidden fees.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of virtual assistant do you need?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Administrative Support', value: 'admin' },
      { name: 'Customer Service', value: 'customer-service' },
      { name: 'Social Media Management', value: 'social-media' },
      { name: 'Bookkeeping', value: 'bookkeeping' },
      { name: 'Multiple Roles', value: 'multiple' },
    ],
    formKey: '_service',
  },
  {
    title: 'How many hours per week do you need?',
    classes: '',
    radioArray: [
      { name: 'Part-time (20 hours/week)', value: 'part-time' },
      { name: 'Full-time (40 hours/week)', value: 'full-time' },
      { name: 'Flexible hours', value: 'flexible' },
      { name: 'Multiple VAs', value: 'multiple-vas' },
    ],
    formKey: '_hours',
  },
  {
    title: 'What is your industry?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'E-commerce', value: 'ecommerce' },
      { name: 'Real Estate', value: 'real-estate' },
      { name: 'Healthcare', value: 'healthcare' },
      { name: 'Legal', value: 'legal' },
      { name: 'Other', value: 'other' },
    ],
    formKey: '_industry',
  },
  {
    title: 'When do you want to start?',
    classes: '',
    radioArray: [
      { name: 'Immediately', value: 'immediate' },
      { name: 'Within 2 weeks', value: 'two-weeks' },
      { name: 'Within a month', value: 'one-month' },
      { name: 'Just exploring options', value: 'exploring' },
    ],
    formKey: '_timeline',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company name', name: 'company', classes: '', required: true },
  { label: 'Company website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _hours: null,
  _industry: null,
  _timeline: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};

export const FAQ_ITEMS = [
  {
    question: 'How much can I really save by hiring a virtual assistant?',
    answer: 'You can save up to 70% on staffing costs compared to hiring locally. This includes savings on salaries, benefits, office space, equipment, and other overhead expenses. Our VAs are highly skilled professionals from the Philippines who deliver exceptional work at a fraction of the cost.',
  },
  {
    question: 'What is the hiring process like?',
    answer: 'Our process is simple and stress-free: (1) Book a free strategy call to discuss your needs, (2) We match you with pre-vetted candidates, (3) Interview as many VAs as you need, (4) We handle onboarding and setup, (5) Your VA starts working seamlessly with your team. The entire process typically takes 1-2 weeks.',
  },
  {
    question: 'Are there any long-term contracts or commitments?',
    answer: 'No! We believe in organic growth, not binding contracts. You can scale up or down as your business needs change. If you need to make adjustments, we only ask for two weeks\' notice. No hidden fees, no long-term commitments.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve clients across a wide variety of industries including e-commerce, real estate, healthcare, legal, accounting, technology, marketing agencies, and more. Our VAs are trained to understand the unique challenges each industry faces and provide tailored support.',
  },
  {
    question: 'How do you ensure quality and productivity?',
    answer: 'All our virtual assistants go through a rigorous vetting process. We provide ongoing training, performance monitoring, and management support. You\'ll have complete visibility and control over your VA\'s work through our management portal, and we conduct regular check-ins to ensure quality standards are met.',
  },
  {
    question: 'What if I\'m not satisfied with my virtual assistant?',
    answer: 'Your satisfaction is our priority. If you\'re not completely happy with your VA, we\'ll work with you to address any concerns. We can provide additional training, reassign tasks, or find you a replacement at no extra cost. We\'re committed to ensuring you get the right fit for your business.',
  },
];

export const CLIENT_INDUSTRIES = [
  { name: 'E-commerce & Retail', icon: ShoppingCart, desc: 'Customer support, order processing, and inventory management for online stores.' },
  { name: 'Real Estate', icon: Home, desc: 'Property management, lead generation, and administrative support for agencies.' },
  { name: 'Healthcare & Medical', icon: Heart, desc: 'Medical billing, patient scheduling, and healthcare administrative services.' },
  { name: 'Legal Services', icon: Scale, desc: 'Legal research, document preparation, and case management support.' },
  { name: 'Accounting & Finance', icon: Calculator, desc: 'Bookkeeping, financial reporting, and accounts management services.' },
  { name: 'Marketing Agencies', icon: Megaphone, desc: 'Content creation, social media management, and campaign coordination.' },
  { name: 'Technology & SaaS', icon: Laptop, desc: 'Technical support, QA testing, and development assistance.' },
  { name: 'Consulting Services', icon: Briefcase, desc: 'Research, data analysis, and project coordination for consultants.' },
  { name: 'Education & Training', icon: GraduationCap, desc: 'Course administration, student support, and content development.' },
  { name: 'Hospitality & Travel', icon: Plane, desc: 'Booking management, customer service, and travel coordination.' },
];

export const HIRING_PROCESS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Securing remote talent is straightforward, efficient, and worry-free with us! Our streamlined approach works for companies of all sizes, whether you\'re new to remote hiring or a seasoned pro.',
  },
  {
    step: '02',
    title: 'Review Qualified Candidates',
    description: 'Our talent network features only exceptional professionals. We provide comprehensive candidate packages including background summaries, work history, video presentations, and core competencies.',
  },
  {
    step: '03',
    title: 'Evaluate Further',
    description: 'Want deeper insights into our candidates? Schedule video meetings or assign skill assessments. The decision is entirely in your hands.',
  },
  {
    step: '04',
    title: 'Start Building Your Team',
    description: 'Once you\'ve made your selection, we handle all the administrative details so you can focus on growing your business with your new team member.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'The team boosted our email engagement rates to 20%, click-through rates jumped to 5-7%, and conversions improved to 10-15%. Their responsiveness was exceptional, and our stakeholders were thoroughly impressed with their technical capabilities.',
    author: 'Theodore M.',
    position: 'CEO, NOM Media',
  },
  {
    quote: 'They flawlessly managed our account integration and brought everything current. Deliverables arrived on schedule, and the team showed remarkable patience and understanding. Communication through email and WhatsApp was seamless, with prompt responses. Their professionalism truly stood out.',
    author: 'Matthew C.',
    position: 'CEO, Vi Capital Lending Group',
  },
  {
    quote: 'Response times now stay under 24 hours for our users, with consistently accurate reporting. The vendor maintains reliability and punctuality. We\'ve been particularly impressed by their adaptability to our evolving needs and unwavering dedication to meeting objectives.',
    author: 'Andrew K.',
    position: 'Support Manager, ENDVR',
  },
];

export const BENEFITS = [
  {
    title: 'Complete Recruitment Service',
    description: 'We manage every aspect of hiring, from candidate sourcing to team integration.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    gridClass: '',
  },
  {
    title: 'Carefully Selected Professionals',
    description: 'We provide thoroughly vetted, pre-qualified candidates matched to your requirements, giving you final selection authority.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop',
    gridClass: '',
  },
  {
    title: 'Rapid Deployment',
    description: 'Typically, clients finalize their selections and begin onboarding within 15-20 business days.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    gridClass: '',
  },
  {
    title: 'Compliance-Focused',
    description: 'We handle all regulatory and human resources matters, ensuring smooth operations regardless of location.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    gridClass: '',
  },
  {
    title: 'Flexible Arrangements',
    description: 'We value natural growth over restrictive agreements. No extended commitments required—simply provide two weeks\' notice if adjustments are needed.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    gridClass: '',
  },
];

export const REMOTE_STAFFING_ADVANTAGES = [
  {
    title: 'Worldwide Talent Access',
    description: 'Break free from geographical limitations and tap into a vast network of exceptional professionals across the globe. Discover the ideal team members for your organization, no matter where they\'re located.',
    icon: 'Globe',
  },
  {
    title: 'Accelerated Recruitment',
    description: 'With our specialized team overseeing the entire recruitment cycle, you\'ll dramatically reduce your hiring timeline. We manage candidate sourcing, evaluation, and integration, freeing you to concentrate on strategic priorities.',
    icon: 'Zap',
  },
  {
    title: 'Budget Optimization',
    description: 'Minimize operational expenses tied to conventional in-office staffing. Our remote solutions provide adaptable pricing structures designed to align with your financial goals.',
    icon: 'DollarSign',
  },
  {
    title: 'Dynamic Team Scaling',
    description: 'Adjust your workforce size seamlessly according to business demands, whether addressing fluctuating workloads or executing strategic expansion plans.',
    icon: 'TrendingUp',
  },
  {
    title: 'Professional Compliance Management',
    description: 'Concentrate on growing your business while we oversee payroll administration, human resources, and regulatory adherence for your distributed team. Eliminate concerns about employment regulations across multiple jurisdictions.',
    icon: 'Shield',
  },
  {
    title: 'Enhanced Performance',
    description: 'Remote professionals typically demonstrate strong self-direction and commitment. With appropriate systems and oversight, distributed teams frequently match or surpass traditional office-based productivity levels.',
    icon: 'BarChart',
  },
  {
    title: 'Diverse Perspectives',
    description: 'Remote hiring promotes inclusivity, enabling you to assemble a team with varied cultural backgrounds, viewpoints, and expertise, strengthening your organizational culture and creative capacity.',
    icon: 'Users',
  },
  {
    title: 'Strategic Focus',
    description: 'By delegating staffing logistics and administrative complexities, your core team can dedicate energy to high-impact initiatives, accelerating business development and competitive advantage.',
    icon: 'Target',
  },
];
