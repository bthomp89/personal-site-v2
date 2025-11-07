export type CareerMilestone = {
  id: string
  title: string
  timeframe: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
}

export type Project = {
  id: string
  title: string
  blurb: string
  outcome: string
  tech: string[]
  link?: string
}

export type Passion = {
  id: string
  label: string
  description: string
  stat?: string
  icon: string
}

export type Leadership = {
  id: string
  organization: string
  role: string
  timeframe: string
  highlights: string[]
}

export const bioCopy = {
  headline: 'I love solving complex problems, staying curious, and pushing limits — whether that\'s in full-stack engineering, product strategy, or the mountains.',
  narrative:
    'I blend software engineering, product thinking, and a high-performance mindset to build systems that scale. My approach: architect for reliability, collaborate deeply, measure impact, and keep the human experience at the center.',
}

export const education = {
  school: 'Western University',
  location: 'London, Ontario, Canada',
  degree: 'Software Engineering, Bachelor of Engineering Science',
  gpa: '3.9/4.0',
  timeframe: 'September 2020 - May 2024',
  achievements: [
    'Nortel Networks Scholarships of Distinction in Engineering Science',
    'Western Scholarship of Distinction & Dean\'s Honour List',
  ],
}

export const timeline = [
  {
    year: '2024',
    event: 'Graduated Software Engineering from Western University (GPA 3.9/4.0)',
  },
  {
    year: '2024',
    event: 'Joined Manulife as Full Stack Software Engineer',
  },
  {
    year: '2023',
    event: 'IBM Consulting Pro-Bono Initiative — Selected as 1 of 50 students',
  },
  {
    year: '2022',
    event: 'VP of Product & Strategy at Western Developers Society',
  },
] as const

export const careerMilestones: CareerMilestone[] = [
  {
    id: 'manulife',
    title: 'Full Stack Software Engineer · Manulife',
    timeframe: 'June 2024 — Present',
    location: 'Toronto, Ontario',
    summary:
      'Building full-stack solutions serving 1.9M clients, architecting high-availability systems with 99.99% uptime.',
    highlights: [
      'Architected full-stack solution using React.js and Node.js, integrating multiple vendor SDKs to deliver personalized web services to 1.9M Manulife clients',
      'Developed high-availability, eventually consistent RESTful API using Java, Spring, and MongoDB, enabling 99.99% system uptime',
      'Built centralized on-call schedule web app leveraging xMatters API, improving accessibility and communication across tech teams',
      'Directed collaborative efforts with internal and external stakeholders, streamlining vendor SDK integration and expediting time-to-market',
    ],
    tags: ['React', 'Node.js', 'Java', 'Spring', 'MongoDB', 'Full-Stack'],
  },
  {
    id: 'ctfs',
    title: 'Back End Engineer · Canadian Tire Financial Services',
    timeframe: 'Summer 2022, 2023',
    location: 'Oakville, Ontario (Remote)',
    summary:
      'Developed REST APIs integrating 280 Canadian Tire Gas+ stations with 1500+ Petro-Canada stations, serving 15M+ customers.',
    highlights: [
      'Developed REST API endpoints with Java, seamlessly integrating 280 Canadian Tire Gas+ stations with 1500+ Petro-Canada stations used by 15M+ customers nationwide',
      'Designed and deployed customized testing simulators using JavaScript and JSP, resulting in a 60% reduction in bug reports',
      'Collaborated with product teams to implement card verification logic for Triangle Select subscription renewals, resulting in a 70% decrease in failed payment transactions',
    ],
    tags: ['Java', 'REST API', 'JavaScript', 'Integration'],
  },
  {
    id: 'ibm',
    title: 'Consultant · IBM',
    timeframe: 'Fall 2023',
    location: 'Toronto, Ontario (Remote)',
    summary:
      'Selected as 1 of 50 students across Ontario for IBM Consulting\'s Pro-Bono Initiative, delivering strategic solutions for nonprofit partners.',
    highlights: [
      'Collaborated in a team of five, mentored by two IBM consultants, to assess client challenges and develop strategic insights',
      'Crafted comprehensive sales and marketing strategy to enhance product visibility and drive revenue growth',
      'Delivered data-driven solution proposal for nonprofit partner',
    ],
    tags: ['Consulting', 'Strategy', 'Nonprofit'],
  },
]

export const projects: Project[] = [
  {
    id: 'nfl-betting',
    title: 'NFL Betting Aid Application',
    blurb: 'Developed an NFL betting algorithm with 56.6% accuracy in predicting game spreads, delivering real-time analytics and predictive insights.',
    outcome: 'Built full-stack web application providing player/team comparisons and predictive insights to users.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    id: 'oncall-app',
    title: 'On-Call Schedule Manager',
    blurb: 'Full-stack web application leveraging xMatters API to provide centralized view of on-call schedules for all company tech teams.',
    outcome: 'Improved accessibility and communication across tech teams at Manulife.',
    tech: ['React', 'Node.js', 'xMatters API'],
  },
  {
    id: 'testing-simulators',
    title: 'Custom Testing Simulators',
    blurb: 'Designed and deployed customized testing simulators for various banners (Sport Chek, Canadian Tire, Marks, etc.) to streamline dev/pre-prod testing.',
    outcome: '60% reduction in bug reports during testing cycles.',
    tech: ['JavaScript', 'JSP'],
  },
]

export const leadership: Leadership[] = [
  {
    id: 'western-dev',
    organization: 'Western Developers Society',
    role: 'Vice President of Product & Strategy',
    timeframe: '2022 - 2024',
    highlights: [
      'Introduced Agile methodologies across six teams, leading development cycles for multiple projects',
      'Spearheaded recruitment and onboarding initiatives, scaling project teams efficiently with 30+ developers onboarded within two weeks',
      'Collaborated with club executives to define long-term strategic roadmap, structuring project cycles and refining team roles',
    ],
  },
  {
    id: 'kids-being-kids',
    organization: 'Kids Being Kids',
    role: 'Vice President of Partnerships',
    timeframe: '2022 - 2024',
    highlights: [
      'Developed and executed strategic partnership roadmap, securing collaborations contributing to over $100,000 worth of donated sports equipment in the first year',
      'Led cross-functional initiatives to expand outreach efforts, optimizing marketing and donation strategies',
      'Negotiated and managed stakeholder relationships, facilitating successful hockey equipment drives resulting in 50+ pieces of gear collected',
    ],
  },
]

export const passions: Passion[] = [
  {
    id: 'ironman',
    label: 'Ironman 70.3',
    description: 'Structured training blocks with data-driven pacing and nutrition.',
    stat: '5h 07m PB',
    icon: 'medal',
  },
  {
    id: 'hyrox',
    label: 'HYROX',
    description: 'Engineered race-day plans balancing strength and aerobic power.',
    stat: 'Top 8%',
    icon: 'activity',
  },
  {
    id: 'skiing',
    label: 'Backcountry Skiing',
    description: 'Route finding and shared risk management in the mountains.',
    icon: 'mountain',
  },
  {
    id: 'cycling',
    label: 'Cycling',
    description: 'Long rides, tempo efforts, and joyful exploration.',
    stat: '6,200 km/yr',
    icon: 'bike',
  },
  {
    id: 'hockey',
    label: 'Ex-Junior Hockey',
    description: 'Leadership, grit, and reading the ice — still coaching youth teams.',
    icon: 'sparkles',
  },
  {
    id: 'racket',
    label: 'Racket Sports',
    description: 'Pickleball, tennis, and padel to balance multi-directional movement.',
    icon: 'racket',
  },
]

