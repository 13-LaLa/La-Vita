import {
  Apple, Bike, BicepsFlexed, Building2, CircleHelp, Citrus, Dumbbell,
  Droplets, GraduationCap, HandHeart, HeartPulse, Leaf, PackageCheck,
  PersonStanding, Salad, ShieldPlus, Sparkles, Users, Waves,
} from 'lucide-react'

export const whatsappNumber = '2349014693453'

export const whatsappMessages = {
  general: 'Hello La’Vita, I’d like to know more about your wellness services.',
  fruit: 'Hello La’Vita, I’d like to order a fruit salad.',
  fitness: 'Hello La’Vita, I’m interested in joining La’Vita Fitness Club.',
  massage: 'Hello La’Vita, I’m interested in your professional massage service.',
  partnership: 'Hello La’Vita, I’d like to discuss a partnership opportunity.',
}

export const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Services', 'services'],
  ['Fruit Salads', 'fruit-salads'], ['Fitness', 'fitness'],
  ['Wellness', 'wellness'], ['Partnerships', 'partnerships'],
] as const

export const valueProps = [
  { number: '01', title: 'Nutrition', text: 'Practical nutrition guidance and healthier food choices for everyday life.', icon: Apple },
  { number: '02', title: 'Fitness', text: 'Affordable exercise programmes designed to help you stay active with or without equipment.', icon: BicepsFlexed },
  { number: '03', title: 'Wellness', text: 'Simple, practical wellness solutions designed around your lifestyle.', icon: Sparkles },
  { number: '04', title: 'Community', text: 'Building healthier students, athletes, staff and communities.', icon: Users },
]

export const services = [
  { title: 'Nutrition & wellness education', text: 'Simple, practical nutrition tips and wellness education to help you make better everyday choices.', icon: Leaf },
  { title: 'Fresh fruit salads', text: 'Fresh, colourful and refreshing fruit combinations prepared for students and health-conscious customers.', icon: Salad },
  { title: 'Fresh fruit juices', text: 'Refreshing fruit-based beverages made to complement an active and healthy lifestyle.', icon: Citrus },
  { title: 'Healthy foods & snacks', text: 'Packaged nuts, eggs, honey and other practical food options for healthier snacking.', icon: PackageCheck },
  { title: 'Healthy herbs', text: 'Selected herbs and natural wellness products for customers interested in healthier lifestyle choices.', icon: Leaf },
  { title: 'Professional massage', text: 'Professional massage and recovery support designed to help clients relax, recover and care for their bodies.', icon: Waves, message: 'massage' },
  { title: 'Fitness & exercise', text: 'Accessible exercise programmes through La’Vita Fitness Club — with or without equipment.', icon: Dumbbell, message: 'fitness' },
  { title: 'Sports wellness', text: 'Nutrition, fitness and wellness support designed with athletes and sporting activities in mind.', icon: Bike },
]

export const saladOptions = [
  { name: 'La’Vita Classic', ingredients: 'Base + Pawpaw + Pineapple + Coconut Flakes', accent: 'Bright & tropical' },
  { name: 'La’Vita Crunch', ingredients: 'Base + Banana + Roasted Groundnuts', accent: 'Fresh & satisfying' },
  { name: 'The La’Vita Signature', ingredients: 'Base + Pawpaw + Pineapple + Zobo-inspired drizzle', accent: 'Our house favourite' },
]

export const prices = [
  { size: 'Regular cup', price: '₦2,500', note: 'A fresh pick-me-up' },
  { size: 'Large cup', price: '₦3,500', note: 'A little more goodness', featured: true },
  { size: 'Family cup', price: '₦4,500', note: 'Made to share' },
]

export const fitnessFeatures = [
  'Floor exercises', 'Cardio', 'Bodyweight training', 'Functional fitness',
  'Mobility', 'Stretching', 'Weight-management support', 'Personal training',
  'Kegel/pelvic-floor exercise education', 'Group fitness', 'Beginner-friendly workouts',
]

export const athleteSupport = [
  ['Nutrition education', GraduationCap], ['Fruit and healthy snack access', Apple],
  ['Fresh juices', Droplets], ['Hydration awareness', Waves],
  ['Recovery support', HeartPulse], ['Fitness guidance', BicepsFlexed],
  ['Sports-event wellness support', ShieldPlus],
] as const

export const reasons = [
  ['Accessible', 'Practical wellness options designed around real people and real budgets.', HandHeart],
  ['Practical', 'Simple habits and services that fit into everyday life.', CircleHelp],
  ['Fresh', 'Fresh fruits, salads and juices prepared for convenience and enjoyment.', Citrus],
  ['Holistic', 'Nutrition, movement, recovery and wellness education in one ecosystem.', PersonStanding],
  ['Community-focused', 'We believe healthier communities are built together.', Users],
  ['Sustainable', 'We are building toward locally sourced produce and long-term wellness initiatives.', Leaf],
] as const

export const campusInitiatives = [
  'Affordable student fitness', 'Sports nutrition', 'Staff and lecturer wellness',
  'Healthy food points', 'Fruit salads and fresh juices', 'Health education',
  'Wellness talks', 'Student wellness ambassadors', 'Sports-event support',
  'First-aid support with qualified medical personnel and institutional protocols',
  'Fruit-tree planting', 'Sustainable food production', 'Wellness signage',
  'Social media wellness education',
]

export const impactStats = [
  ['0+', 'Students Reached'], ['0+', 'Athletes Supported'],
  ['0+', 'Wellness Sessions'], ['0+', 'Trees Planted'],
] as const

export const faqs = [
  { q: 'What does La’Vita Health & Wellness Store offer?', a: 'We bring nutrition, movement and wellness together through fresh fruit salads and juices, healthy foods, nutrition education, accessible fitness, professional massage and community wellness initiatives.' },
  { q: 'Where does La’Vita deliver?', a: 'We currently serve customers in Ado-Ekiti and Oye-Ekiti, Ekiti State. Chat with us on WhatsApp to confirm delivery availability for your exact location.' },
  { q: 'Do I need gym equipment to join La’Vita Fitness Club?', a: 'No. Our programmes are built around practical workouts that can be performed with or without equipment.' },
  { q: 'What is La’Vita Fitness Club?', a: 'It is our accessible fitness community, offering bodyweight exercise, cardio, mobility, stretching, functional training and general fitness support.' },
  { q: 'What fruit salad sizes are available?', a: 'Choose a Regular Cup for ₦2,500, a Large Cup for ₦3,500 or a Family Cup for ₦4,500.' },
  { q: 'Can I order through WhatsApp?', a: 'Yes. WhatsApp is our primary ordering and enquiry channel. Use any green WhatsApp button on this page to start a conversation.' },
  { q: 'Does La’Vita work with universities and organisations?', a: 'Yes. We welcome conversations with universities, schools, gyms, hotels, companies and organisations about tailored wellness initiatives and services.' },
  { q: 'Does La’Vita provide medical treatment?', a: 'La’Vita focuses on wellness, fitness, nutrition education and healthy lifestyle products. We do not replace qualified medical professionals or provide medical diagnosis/treatment. Where medical attention is needed, customers should seek appropriate professional care.' },
]

export const footerColumns = [
  { title: 'Explore', links: [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Fruit Salads', 'fruit-salads']] },
  { title: 'Wellness', links: [['Fitness Club', 'fitness'], ['Wellness', 'wellness'], ['Partnerships', 'partnerships'], ['Contact', 'contact']] },
]

export const audienceNeeds = [
  'Nutrition tips', 'Fresh fruit options', 'Fresh juices', 'Healthy snacks',
  'Exercise programmes', 'Mobility and stretching', 'Professional massage', 'Wellness education',
]

export const lifestyleConcerns = [
  'Sedentary work', 'Reduced physical activity', 'Poor eating habits', 'Stress',
  'Inconsistent sleep', 'Reduced mobility', 'Difficulty maintaining exercise routines',
]

export { Building2 }
