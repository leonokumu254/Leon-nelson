const Projects_Data = [
  {
    id: "lulu-aurelian",
    title: "Lulu Aurelian — Luxury E-Commerce & Fine Jewelry",
    subtitle: "High-conversion digital flagship with sub-second page loads, custom checkout architecture, and organic search optimization.",
    category: "Real Project",
    badge: "REAL PROJECT",
    isCaseStudy: true,
    image: "/projects/luluaurelian.jpg",
    tags: ["E-Commerce", "Next.js", "SEO Dominance", "Stripe API"],
    metrics: [
      { label: "Organic Growth", value: "+240%" },
      { label: "Avg LCP Speed", value: "0.6s" },
      { label: "Mobile Checkout", value: "+68%" }
    ],
    overview: "Lulu Aurelian is an exclusive luxury brand specializing in bespoke fine jewelry. The objective was to create an editorial digital flagship that mirrors the atelier's craftsmanship while capturing high-value international transactions.",
    challenge: "The legacy boutique platform suffered from sluggish load times (>4.2s), high cart abandonment due to cumbersome multi-step checkouts, and virtually zero organic search presence on competitive luxury queries.",
    solution: [
      "Engineered a bespoke Next.js front-end with optimized modern image pipelines and fluid editorial micro-interactions.",
      "Integrated a frictionless headless checkout workflow with Apple Pay, Google Pay, and localized multi-currency support.",
      "Conducted a comprehensive technical SEO overhaul with rich product schema, lightning-fast Core Web Vitals, and keyword authority architecture.",
      "Configured high-security cloud VPS infrastructure with DDoS protection and automated backup routines."
    ],
    results: [
      "+240% organic search traffic growth within the first 90 days post-launch.",
      "0.6s Largest Contentful Paint (LCP), delivering a top-tier Google speed score.",
      "68% increase in mobile checkout completion rate with frictionless 1-click payments."
    ],
    techStack: ["Next.js", "React", "Node.js", "Stripe API", "PostgreSQL", "Cloud VPS", "Technical SEO"]
  },
  {
    id: "supreme-adventures",
    title: "Supreme Adventures — Safari & Wilderness Booking Engine",
    subtitle: "End-to-end expedition booking platform featuring dynamic itinerary builders, multi-currency deposits, and automated booking notifications.",
    category: "Real Project",
    badge: "REAL PROJECT",
    isCaseStudy: true,
    image: "/projects/supremeadventures.jpg",
    tags: ["Safari Platform", "Custom Booking", "Full-Stack", "Conversion Rate"],
    metrics: [
      { label: "Inbound Leads", value: "+320%" },
      { label: "Admin Time", value: "-85%" },
      { label: "Uptime", value: "99.9%" }
    ],
    overview: "Supreme Adventures curates premier wildlife safaris, mountaineering expeditions, and luxury bush retreats across East Africa for international safari travelers.",
    challenge: "Inquiries were scattered across unmanaged WhatsApp threads and slow email exchanges. The absence of real-time expedition availability and instant deposit processing led to lost high-ticket bookings.",
    solution: [
      "Architected a custom real-time reservation system with dynamic pricing, lodge inventory allocation, and automatic deposit receipts.",
      "Built an interactive day-by-day expedition route visualizer that allows prospective travelers to explore daily itineraries and wildlife sightings.",
      "Implemented automated booking workflows that issue vouchers, packing lists, and safari preparation guides directly to the traveler's inbox.",
      "Optimized the technical structure for competitive travel queries (e.g., 'Serengeti Migration Luxury Safari') to capture high-intent organic visitors."
    ],
    results: [
      "+320% surge in qualified inbound booking inquiries during peak season.",
      "85% reduction in manual administrative communication for reservation staff.",
      "99.9% platform availability maintained under surge traffic spikes."
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Custom Booking API", "SEO & CRO"]
  },
  {
    id: "royal-sports-club",
    title: "Royal Sports Club — Athletic Club & Court Reservation Portal",
    subtitle: "Comprehensive digital membership and court reservation ecosystem serving members, coaches, and facility management.",
    category: "Real Project",
    badge: "REAL PROJECT",
    isCaseStudy: true,
    image: "/projects/royalsportsclub.jpg",
    tags: ["Membership Portal", "Court Reservation API", "Real-Time Sync", "Node.js & Postgres"],
    metrics: [
      { label: "Monthly Bookings", value: "1,200+" },
      { label: "Double Bookings", value: "0" },
      { label: "Member Renewal", value: "+45%" }
    ],
    overview: "Royal Sports Club is a premier athletic sanctuary offering private tennis courts, squash arenas, Olympic training pools, and exclusive member wellness programs.",
    challenge: "The facility relied on manual telephone bookings and paper rosters, leading to frequent court double-booking disputes, long front-desk queues, and low digital engagement among members.",
    solution: [
      "Developed a real-time court reservation grid with optimistic concurrency locks to guarantee zero double-bookings.",
      "Engineered a dedicated member portal for dues renewals, guest pass issuance, and personal coach scheduling.",
      "Designed an automated SMS & email notification system for court reminders, weather delay alerts, and club announcements.",
      "Created a staff administration dashboard to monitor court usage analytics, peak facility hours, and membership trends."
    ],
    results: [
      "Over 1,200 monthly court reservations handled seamlessly through self-service.",
      "Zero double-booking incidents recorded since platform deployment.",
      "45% faster membership renewal cycle via integrated automated payment reminders."
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets", "Payment Gateway", "Tailored UI"]
  },
  {
    id: "spenso-ai",
    title: "Spenso — Redefining Personal Finance & Cashflow with AI",
    subtitle: "Predictive budgeting intelligence and automated wealth telemetry engine designed for modern capital allocators.",
    category: "Exploration",
    badge: "EXPLORATION",
    isCaseStudy: true,
    image: "/projects/spenso_analytics.jpg",
    tags: ["FinTech", "Data Visualization", "AI Insights", "Mobile First"],
    metrics: [
      { label: "Animation Rate", value: "120 FPS" },
      { label: "Interaction Latency", value: "<50ms" },
      { label: "Community", value: "Featured" }
    ],
    overview: "A forward-thinking FinTech exploration exploring the intersection of real-time financial telemetry, algorithmic cashflow forecasting, and tactile dark-mode UI design.",
    challenge: "Traditional personal finance tools are cluttered with confusing tables, static monthly budgets, and lack proactive insights on upcoming spending velocity.",
    solution: [
      "Designed a sleek dark glassmorphic interface utilizing high-contrast data visualization and smooth SVG charts.",
      "Prototyped proactive financial health metrics with predictive cash burn forecasts and customizable category widgets.",
      "Optimized interaction responsiveness to achieve ultra-fluid 120 FPS chart scrubbing on modern touch devices."
    ],
    results: [
      "Showcased across leading design communities for innovative FinTech UX.",
      "Sub-50ms interaction latency with zero UI thread freezing.",
      "Demonstrated cutting-edge mobile-first financial interaction paradigms."
    ],
    techStack: ["React", "HTML5 Canvas / SVG", "Modern CSS", "Data Vis Engine"]
  }
];

export default Projects_Data;
