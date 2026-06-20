// SINGLE SOURCE OF TRUTH for site-wide content (NAP, offer, nav, reviews).
// Change a phone number or the price here once → it updates everywhere.
// TODO(Tyler): confirm exact street addresses + office hours where marked.

export const site = {
  name: 'Benkovich Orthodontics',
  doctor: 'Dr. John A. Benkovich III, DDS, MS',
  domain: 'https://drbenkovich.com',
  tagline: 'Confident smiles for the whole family in Annapolis & Chester, MD.',
  established: 1993,
  patients: '9,000+',
  reviewCount: '175+',
  rating: '5.0',
  // Headline offer — the differentiator no local competitor advertises.
  offer: {
    price: '$184',
    priceUnit: '/month',
    freeExam: 'Free first exam',
    promo: 'Up to $750 off full treatment',
  },
  // Booking = the existing appointment-request form. Its confirmation/thank-you page
  // (kept on its current slug) is what fires the Google Ads conversion goal — do not change.
  booking: '/appointment-request/',
  thankYou: '/appointment-request-confirmation/',
  patientPortal: 'https://patient.sesamecommunications.com/jbenkovich/index.html',
  social: {
    facebook: 'https://www.facebook.com/BenkovichOrthodontics/',
    instagram: 'https://www.instagram.com/benkovichorthodontics_/',
    youtube: 'https://www.youtube.com/user/benkovichortho',
  },
  locations: [
    {
      name: 'Annapolis',
      slug: '/locations/orthodontist-annapolis-md/',
      phone: '(410) 268-1700',
      phoneHref: 'tel:+14102681700',
      address: ['Annapolis, MD 21401'], // TODO(Tyler): exact street address
      hours: 'Mon–Thu 8am–5pm · Fri by appointment', // TODO(Tyler): confirm
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Benkovich+Orthodontics+Annapolis+MD',
    },
    {
      name: 'Chester / Kent Island',
      slug: '/locations/orthodontist-chester-md/',
      phone: '(410) 643-4499',
      phoneHref: 'tel:+14106434499',
      address: ['Chester, MD 21619'], // TODO(Tyler): exact street address
      hours: 'Select days monthly · Call to schedule', // TODO(Tyler): confirm
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Benkovich+Orthodontics+Chester+MD',
    },
  ],
  treatments: [
    { title: 'Braces', slug: '/braces/', img: '/images/svc-braces.jpg',
      blurb: 'Comfortable metal & clear braces for kids, teens, and adults — with fun colors kids love.' },
    { title: 'Invisalign®', slug: '/invisalign/', img: '/images/svc-invisalign.jpg',
      blurb: 'A virtually invisible, removable way to straighten your smile. A favorite for adults and teens.' },
    { title: 'Early Orthodontics', slug: '/early-orthodontics/', img: '/images/svc-early.webp',
      blurb: 'Gentle first visits around age 7 — often there’s nothing to do yet but keep a friendly eye on things.' },
    { title: 'Adult Orthodontics', slug: '/adult-orthodontics/', img: '/images/svc-adult.jpg',
      blurb: 'It’s never too late. Discreet braces and Invisalign that fit a busy adult life.' },
    { title: 'Retainers', slug: '/retainers/', img: '/images/svc-retainers.jpg',
      blurb: 'Comfortable, clear, and Hawley retainers to protect your new smile — plus easy replacements.' },
  ],
  reviews: [
    { name: 'Brittany Cassilly', text: 'A wonderful experience from the moment I called to the moment I walked my children out. The office was nice and up to date. Dr. Benkovich is an expert with a wonderful bedside manner — he used x-rays, pictures, and models to explain their treatment options. My kids felt comfortable.' },
    { name: 'Shannon Miller', text: 'Excellent care from the moment we walked in. I appreciated how kind everyone was to my daughter who was a little nervous, and how thoroughly everything was explained. My daughter left actually looking forward to her next appointment. Thank you Dr. B and staff!' },
    { name: 'Karine Delroux', text: 'I highly recommend Dr. Benkovich’s practice. We travel from PA every 4–6 weeks for my kids to get the best care. The staff are professional, knowledgeable, accommodating and friendly.' },
    { name: 'Susan Weaver', text: 'Dr. Benkovich is very good with the kids — he’s friendly and my son loves him. The staff is also great. They worked out a payment plan that worked for our family.' },
    { name: 'Alexandra Cratin', text: 'Dr. Benkovich and his team are amazing! My sister, my children, and I have all been patients. We drive from Ellicott City because it’s worth the quality work and caring environment.' },
    { name: 'Liz Cawthorne', text: 'I imagine my son was nervous to see an orthodontist. However, the staff was warm, kind, and patient, and they made him feel comfortable. As a parent I appreciate that so much!' },
  ],
};

// Primary navigation (drives the header). Children render as dropdowns.
// Existing slugs preserved (no renames) to protect current SEO equity.
export const nav = [
  { label: 'Braces', href: '/braces/', children: [
    { label: 'Braces for Kids', href: '/braces-for-kids/' },
    { label: 'Braces for Teens', href: '/braces-for-teens/' },
    { label: 'Braces for Adults', href: '/braces-for-adults/' },
    { label: 'Clear Braces', href: '/clear-braces-vs-metal/' },
  ]},
  { label: 'Invisalign', href: '/invisalign/', children: [
    { label: 'Invisalign for Kids', href: '/invisalign-for-kids/' },
    { label: 'Invisalign for Teens', href: '/invisalign/invisalign-for-teens/' },
    { label: 'Invisalign for Adults', href: '/invisalign/invisalign-for-adults/' },
    { label: 'Invisalign Cost', href: '/invisalign/invisalign-costs/' },
  ]},
  { label: 'Treatments', href: '/braces/', children: [
    { label: 'Early Orthodontics', href: '/early-orthodontics/' },
    { label: 'Adult Orthodontics', href: '/adult-orthodontics/' },
    { label: 'Retainers', href: '/retainers/' },
  ]},
  { label: 'About', href: '/about/meet-dr-benkovich/', children: [
    { label: 'Meet Dr. Benkovich', href: '/about/meet-dr-benkovich/' },
    { label: 'Meet the Team', href: '/about/meet-the-team-dental/' },
    { label: 'What Sets Us Apart', href: '/about/what-sets-us-apart/' },
    { label: 'Reviews', href: '/patient-info/testimonials/' },
  ]},
  { label: 'Locations', href: '/locations/', children: [
    { label: 'Annapolis, MD', href: '/locations/orthodontist-annapolis-md/' },
    { label: 'Chester / Kent Island, MD', href: '/locations/orthodontist-chester-md/' },
  ]},
  { label: 'Financial', href: '/patient-info/financial-information/' },
];
