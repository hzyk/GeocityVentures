import type { Service, NavLink } from './types';
import { FaWarehouse, FaTractor, FaTree, FaTools, FaBolt, FaDraftingCompass } from 'react-icons/fa';

export const WHATSAPP_NUMBER = '+254701375119';
export const WHATSAPP_LINK = `https://wa.me/254701375119`;
export const EMAIL_ADDRESS = 'info@geocityventures.co.ke';
export const COMPANY_ADDRESS = 'Nairobi, Kenya';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Ballast Supply',
    description: 'Premium ballast for strong, stable foundations.',
    longDescription: 'We provide high-quality, graded ballast crucial for creating robust concrete mixes and stable foundations for any construction project, ensuring longevity and structural integrity.',
    icon: FaTractor,
    imageUrl: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Sand Supply',
    description: 'Clean, well-sorted sand for all construction needs.',
    longDescription: 'Our sand is sourced and processed to be free of impurities, making it ideal for plastering, mortar, and concrete applications. We offer various grades to meet your specific project requirements.',
    icon: FaWarehouse,
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Round Poles & Concrete Posts',
    description: 'Durable structural supports and posts.',
    longDescription: 'Sustainably sourced wooden poles and reinforced concrete posts for fencing, utility lines, and structural support. Our products are treated for durability and resistance to environmental factors.',
    icon: FaTree,
    imageUrl: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Blocks & Machine-Cut Stones',
    description: 'Precision cut for solid, modern construction.',
    longDescription: 'We supply uniformly shaped concrete blocks and high-quality machine-cut stones. Their precision ensures easier construction, reduced mortar usage, and a clean, modern aesthetic for your buildings.',
    icon: FaDraftingCompass,
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Plumbing & Electrical Fittings',
    description: 'Pipes, fittings, and accessories for turnkey installations.',
    longDescription: 'A complete range of quality-assured plumbing and electrical supplies, including pipes, fittings, conduits, and accessories. We help you complete your project with reliable, safe, and certified components.',
    icon: FaBolt,
    imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'General Building Materials',
    description: 'Full inventory of construction essentials delivered reliably.',
    longDescription: 'From cement and steel reinforcements to roofing materials and finishing products, we are your one-stop-shop for all general building supplies. We ensure timely delivery to keep your project on schedule.',
    icon: FaTools,
    imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
