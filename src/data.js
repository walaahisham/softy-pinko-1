
import blog1 from './assets/images/blog-item-01.png'
import blog2 from './assets/images/blog-item-02.png'
import blog3 from './assets/images/blog-item-03.png'

// Navigation links
export const navLinks = [
  { id: 'welcome', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work Process' },
  { id: 'testi', label: 'Testimonials' },
  { id: 'price', label: 'Pricing Tables' },
  { id: 'blog', label: 'Blog Entries' },
  { id: 'contact', label: 'Contact Us' },
]

// Features section
export const features = [
  {
    title: 'Modern Strategy',
    text: 'Customize anything in this template to fit your website needs',
  },
  {
    title: 'Best Relationship',
    text: 'Contact us immediately if you have a question in mind',
  },
  {
    title: 'Ultimate Marketing',
    text: 'You just need to tell your friends about our free templates',
  },
]

// Work process steps
export const steps = [
  'Get Ideas',
  'Sketch Ideas',
  'Discuss',
  'Design',
  'Develop',
  'Launch',
].map((title) => ({
  title,
  text: 'Godard pasbst parism fam cliche.',
}))

// Testimonials
export const testimonials = [
  {
    name: 'Catherine Soft',
    role: 'Managing Director',
    text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
  },
  {
    name: 'Kelvin Wood',
    role: 'Digital Marketer',
    text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
  },
  {
    name: 'David Martin',
    role: 'Website Manager',
    text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
  },
]

// Pricing plans
export const plans = [
  {
    name: 'Starter',
    price: '14.50',
    featured: false,
    features: [
      ['60 GB space', true],
      ['600 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', false],
      ['Unlimited Emails', false],
      ['24/7 Security', false],
    ],
  },
  {
    name: 'Premium',
    price: '21.50',
    featured: true,
    features: [
      ['120 GB space', true],
      ['1200 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', true],
      ['Unlimited Emails', false],
      ['24/7 Security', false],
    ],
  },
  {
    name: 'Advanced',
    price: '42.00',
    featured: false,
    features: [
      ['250 GB space', true],
      ['5000 GB transfer', true],
      ['Pro Design Panel', true],
      ['15-minute support', true],
      ['Unlimited Emails', true],
      ['24/7 Security', true],
    ],
  },
]

// Statistics
export const stats = [
  { value: '126', label: 'Projects' },
  { value: '63', label: 'Happy Clients' },
  { value: '126', label: 'Awards Wins' },
  { value: '27', label: 'Countries' },
]

// Blog posts
export const posts = [
  {
    img: blog1,
    title: 'Vivamus ac vehicula dui',
    text: 'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.',
  },
  {
    img: blog2,
    title: 'Phasellus convallis augue',
    text: 'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.',
  },
  {
    img: blog3,
    title: 'Nam gravida purus non',
    text: 'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.',
  },
]
