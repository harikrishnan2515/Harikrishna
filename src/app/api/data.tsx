import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "9+",
        description: "Technical skills across full stack development and databases",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "Cloud",
        description: "Strong focus on cloud computing and modern web technologies",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "Films",
        description: "Professional video editing experience for short films and creative content",
    },
];

export const skillGroups = [
    {
        title: 'Technical Skills',
        skills: ['C', 'Python', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'],
    },
    {
        title: 'Additional Expertise',
        skills: ['Cloud Computing', 'Video Editing', 'Content Creation', 'Digital Marketing'],
    },
    {
        title: 'Soft Skills',
        skills: ['Time Management', 'Leadership Quality'],
    },
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Full Stack Development',
        description: 'Interactive, high-performing web experiences built with modern frontend, backend, and database technologies.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Cloud Computing',
        description: 'Scalable digital solutions shaped with cloud-focused thinking, performance awareness, and practical engineering.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Creative Content',
        description: 'Video editing, content creation, and digital marketing combined with storytelling strategy.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Algorithm Literacy and Predictive Modeling project',
        title: 'Algorithm Literacy and Predictive Modeling',
        slug: 'algorithm-literacy-predictive-modeling',
        info: 'Human-centered forecasting for patient health outcomes',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Smart Waste Collection and Routing system project',
        title: 'Smart Waste Collection & Routing System',
        slug: 'smart-waste-collection-routing-system',
        info: 'Optimized waste pickup planning and route management',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Blockchain based voting system project',
        title: 'Blockchain Based Voting System',
        slug: 'blockchain-based-voting-system',
        info: 'Secure and transparent voting workflow using blockchain',
        Class: 'md:mt-0'
    },
]
