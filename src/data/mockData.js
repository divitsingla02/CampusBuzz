// Mock Data for CampusBuzz Platform
// Events, Clubs, Categories, Venues

export const CATEGORIES = [
  { id: 'all', label: 'All Categories', icon: 'Sparkles' },
  { id: 'Technical', label: 'Technical', icon: 'Code' },
  { id: 'Cultural', label: 'Cultural', icon: 'Palette' },
  { id: 'Sports', label: 'Sports', icon: 'Trophy' },
  { id: 'Workshops', label: 'Workshops', icon: 'BookOpen' },
  { id: 'Music', label: 'Music', icon: 'Music' },
  { id: 'Competitions', label: 'Competitions', icon: 'Flame' },
];

export const INITIAL_CLUBS = [
  {
    id: 'club-gdsc',
    name: 'Google Developer Student Club',
    shortName: 'GDSC',
    category: 'Technical',
    tagline: 'Bridging the gap between theory and practice for tech students',
    description: 'GDSC is a university-based community group for students interested in Google developer technologies. By joining GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
    avatar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    lead: 'Aarav Sharma (President)',
    email: 'gdsc@campusbuzz.edu',
    membersCount: 380,
    established: '2021',
    meetingSchedule: 'Every Friday, 5:00 PM @ Turing Lab',
    socials: {
      instagram: '@gdsc_campus',
      linkedin: 'gdsc-campus-buzz',
      discord: 'dsc.gg/campus-tech'
    },
    tags: ['Web Dev', 'Cloud', 'Machine Learning', 'Android', 'Flutter'],
    achievements: [
      'Winner of Regional Solution Challenge 2025',
      'Hosted 18+ hands-on technical workshops',
      'Over 250 certified cloud practitioners trained'
    ]
  },
  {
    id: 'club-dhwani',
    name: 'Dhwani - The Music Society',
    shortName: 'Dhwani',
    category: 'Music',
    tagline: 'Harmonizing passions and rhythms across the campus',
    description: 'The official college music society bringing together vocalists, instrumentalists, sound engineers, and indie music enthusiasts. Dhwani performs at major college festivals, jam nights, open mics, and inter-collegiate music battles.',
    avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    lead: 'Rhea Sen (Secretary)',
    email: 'dhwani@campusbuzz.edu',
    membersCount: 220,
    established: '2016',
    meetingSchedule: 'Wednesdays & Saturdays, 6:00 PM @ Music Room 3',
    socials: {
      instagram: '@dhwani_campusbeats',
      youtube: 'DhwaniCollegeSociety',
      spotify: 'Campus Buzz Jam Vol 1'
    },
    tags: ['Acoustic', 'Rock & Metal', 'Classical Fusion', 'Production', 'Vocal Band'],
    achievements: [
      '1st Place at National Inter-University Battle of the Bands',
      'Released original student album on Spotify with 50K+ streams',
      'Annual Unplugged Night host for 800+ attendees'
    ]
  },
  {
    id: 'club-robotics',
    name: 'RoboCrafters Society',
    shortName: 'RoboCrafters',
    category: 'Technical',
    tagline: 'Designing the autonomous future with silicon, motors, and code',
    description: 'RoboCrafters brings together mechanical, electrical, and computer science innovators to fabricate line followers, drone systems, battle bots, and autonomous rovers. We regularly compete at national robotics competitions.',
    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    lead: 'Vikramaditya Iyer (Captain)',
    email: 'robocrafters@campusbuzz.edu',
    membersCount: 165,
    established: '2018',
    meetingSchedule: 'Mon & Thu, 4:30 PM @ Makerspace Bay B',
    socials: {
      instagram: '@robocrafters_tech',
      github: 'robocrafters-org'
    },
    tags: ['IoT', 'ROS 2', 'Embedded C', '3D Printing', 'Drones'],
    achievements: [
      'Top 5 in International Rover Challenge',
      'Patented campus automated disinfection bot',
      'Conducted 12 bot-building bootcamps'
    ]
  },
  {
    id: 'club-rangmanch',
    name: 'Rangmanch Dramatics Society',
    shortName: 'Rangmanch',
    category: 'Cultural',
    tagline: 'Expressing human emotions through stage and street theatre',
    description: 'Rangmanch is dedicated to theatrical storytelling, street plays (Nukkad Natak), scriptwriting, stagecraft, and expressive monologue performances tackling impactful social themes.',
    avatar: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    lead: 'Tanvi Deshmukh (Convener)',
    email: 'rangmanch@campusbuzz.edu',
    membersCount: 140,
    established: '2014',
    meetingSchedule: 'Tuesday & Thursday, 5:30 PM @ Amphitheatre',
    socials: {
      instagram: '@rangmanch_theatre',
      youtube: 'RangmanchPlays'
    },
    tags: ['Street Play', 'Stage Drama', 'Scriptwriting', 'Improv', 'Mime'],
    achievements: [
      'Best Street Play Award at Delhi University Youth Fest',
      'Over 40 social awareness plays performed across the city',
      'Annual play production with standing ovation'
    ]
  },
  {
    id: 'club-ecell',
    name: 'Entrepreneurship & Innovation Cell',
    shortName: 'E-Cell',
    category: 'Workshops',
    tagline: 'Fostering the next generation of founders, disruptors and leaders',
    description: 'E-Cell sparks the entrepreneurial spirit by mentoring student startups, connecting student founders with VCs and angel investors, holding pitch days, and running startup incubators.',
    avatar: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    lead: 'Kunal Singhania (Head of Incubation)',
    email: 'ecell@campusbuzz.edu',
    membersCount: 310,
    established: '2017',
    meetingSchedule: 'Wednesdays, 5:00 PM @ Incubation Center Hall',
    socials: {
      linkedin: 'ecell-campusbuzz',
      twitter: '@ecell_buzz'
    },
    tags: ['Venture Capital', 'Pitching', 'Fintech', 'Product Design', 'Startup'],
    achievements: [
      'Facilitated $120,000 in seed grants for student startups',
      'Organized Global Entrepreneurship Summit with 50+ founders',
      'Mentored 14 incubated startups currently operational'
    ]
  },
  {
    id: 'club-sports',
    name: 'Campus Titans Athletic Council',
    shortName: 'Titans Sports',
    category: 'Sports',
    tagline: 'Pushing physical boundaries, teamwork and sporting glory',
    description: 'Titans manages inter-college tournaments, intramural leagues, fitness bootcamps, and coordinates track & field, basketball, badminton, football, and cricket teams.',
    avatar: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80',
    banner: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    lead: 'Aditya Verma (Sports Secretary)',
    email: 'sports@campusbuzz.edu',
    membersCount: 450,
    established: '2012',
    meetingSchedule: 'Daily training, 6:30 AM & 5:00 PM @ Sports Complex',
    socials: {
      instagram: '@titans_campus_sports'
    },
    tags: ['Football', 'Basketball', 'Badminton', 'Athletics', 'Chess', 'Cricket'],
    achievements: [
      'Inter-University Basketball Champions 2025',
      'Host of "Spardha" - Inter-Collegiate Mega Sports Fest',
      'Over 12 student athletes placed in national trials'
    ]
  }
];

export const INITIAL_EVENTS = [
  {
    id: 'evt-hackoverflow',
    title: 'HackOverflow 2026: 36-Hour National Hackathon',
    shortDescription: 'Build AI agents, decentralized dApps, and sustainable tech prototypes. Huge prizes & VC visibility!',
    fullDescription: 'HackOverflow is our flagship annual 36-hour hackathon bringing together over 600 coders, designers, and innovators. Challenge your limits across tracks like Generative AI & Agents, Smart Campus Systems, Healthcare Tech, and Open Innovation. Features dedicated mentoring sessions by industry engineering leads, free midnight pizzas, energy drinks, and direct interview pipelines for winners.',
    category: 'Technical',
    date: '2026-11-20',
    endDate: '2026-11-21',
    time: '09:00 AM - 09:00 PM',
    status: 'upcoming', // 'ongoing', 'upcoming', 'completed'
    venue: 'Main Auditorium & Innovation Center',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-gdsc',
    organizerName: 'Google Developer Student Club',
    organizerAvatar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80',
    totalSeats: 300,
    registeredCount: 246,
    isFeatured: true,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: 'Day 1 - 09:00 AM', title: 'Check-in, Kit Distribution & Breakfast' },
      { time: 'Day 1 - 10:30 AM', title: 'Keynote & Problem Statements Reveal' },
      { time: 'Day 1 - 12:00 PM', title: 'Hacking Begins & Mentor Matching' },
      { time: 'Day 1 - 09:00 PM', title: 'Midnight Snack & Gaming Jam' },
      { time: 'Day 2 - 02:00 PM', title: 'Code Freeze & Round 1 Pitching' },
      { time: 'Day 2 - 06:30 PM', title: 'Final Demos & Award Ceremony' }
    ],
    prerequisites: 'Laptop with charger, student ID card, GitHub account, and enthusiasm to build!',
    contactEmail: 'hackoverflow@campusbuzz.edu'
  },
  {
    id: 'evt-live-jam',
    title: 'Acoustic Sunset Jam & Open Mic',
    shortDescription: 'Live unplugged music session by Dhwani society under the stars with hot cocoa and indie covers.',
    fullDescription: 'Unwind after classes with raw acoustic melodies, original student songwriting, and collaborative jam circles. Whether you sing, strum a guitar, beatbox, or just love great live acoustics, this is the coziest gathering on campus. Open mic registration available on spot for first 10 students.',
    category: 'Music',
    date: '2026-11-09', // Today!
    endDate: '2026-11-09',
    time: '05:30 PM - 08:30 PM',
    status: 'ongoing', // Happening Now!
    venue: 'Central Lawns Amphitheatre',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-dhwani',
    organizerName: 'Dhwani - The Music Society',
    organizerAvatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
    totalSeats: 180,
    registeredCount: 165,
    isFeatured: true,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '05:30 PM', title: 'Dhwani Core Band Warmup Set' },
      { time: '06:15 PM', title: 'Student Open Mic Performances (10 Slots)' },
      { time: '07:30 PM', title: 'Acoustic Medley & Community Sing-Along' },
      { time: '08:15 PM', title: 'Hot Cocoa & Jam Wrap-up' }
    ],
    prerequisites: 'Bring yourself, your friends, and optionally an acoustic instrument!',
    contactEmail: 'dhwani@campusbuzz.edu'
  },
  {
    id: 'evt-robotics-sumo',
    title: 'RoboSumo Battleground & Drone Obstacle Race',
    shortDescription: 'Custom combat robots fight in the ring while FPV drones navigate tight indoor obstacle loops.',
    fullDescription: 'Get ready for high-octane mechanical warfare! Student engineering squads pit their custom 3kg Sumo bots against each other to knock rivals out of the circular dohyō. Simultaneously, the indoor arena will host the university FPV micro-drone sprint obstacle course with live telemetry on big screens.',
    category: 'Competitions',
    date: '2026-11-14',
    endDate: '2026-11-14',
    time: '11:00 AM - 05:00 PM',
    status: 'upcoming',
    venue: 'Mechanical Block Arena & Courtyard',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-robotics',
    organizerName: 'RoboCrafters Society',
    organizerAvatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80',
    totalSeats: 250,
    registeredCount: 198,
    isFeatured: true,
    isPopular: true,
    price: 'Free Spectator / $10 Bot Entry',
    schedule: [
      { time: '11:00 AM', title: 'Bot Weight & Dimension Technical Scrutiny' },
      { time: '12:00 PM', title: 'Sumo Preliminaries - Pool A & B' },
      { time: '02:00 PM', title: 'FPV Micro-Drone Speed Trials' },
      { time: '04:00 PM', title: 'Grand Finale - Sumo Clash of Titans' }
    ],
    prerequisites: 'Safety glasses provided at door. Spectators welcome without registration restrictions.',
    contactEmail: 'robocrafters@campusbuzz.edu'
  },
  {
    id: 'evt-pitch-day',
    title: 'Campus Angel Pitch: Student Startup Demo Day',
    shortDescription: 'Top 10 student founders pitch to real venture capital partners for $50K in proof-of-concept funding.',
    fullDescription: 'Witness future unicorns in the making! 10 pre-screened student startups present 5-minute pitches followed by rigorous investor Q&A. Panelists include partners from top early-stage seed funds and successful alumni founders. Networking high-tea follows the keynote.',
    category: 'Workshops',
    date: '2026-11-18',
    endDate: '2026-11-18',
    time: '02:00 PM - 06:00 PM',
    status: 'upcoming',
    venue: 'Management Block Auditorium Hall 1',
    locationType: 'Hybrid (Livestreamed)',
    banner: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-ecell',
    organizerName: 'Entrepreneurship & Innovation Cell',
    organizerAvatar: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80',
    totalSeats: 150,
    registeredCount: 112,
    isFeatured: false,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '02:00 PM', title: 'Investor Panel Welcome & Keynote' },
      { time: '02:30 PM', title: 'Startups 1-5 Pitch Presentations' },
      { time: '03:45 PM', title: 'Intermission & Product Showcase Booths' },
      { time: '04:15 PM', title: 'Startups 6-10 Pitch Presentations' },
      { time: '05:30 PM', title: 'Term Sheet Awards & Investor High Tea' }
    ],
    prerequisites: 'Curious business and engineering minds interested in startup creation.',
    contactEmail: 'ecell@campusbuzz.edu'
  },
  {
    id: 'evt-street-play',
    title: 'Awaaz: Annual Inter-College Street Play Festival',
    shortDescription: 'Vibrant, vocal, and impactful Nukkad Natak acts presenting social satire and contemporary stories.',
    fullDescription: 'The air fills with rhythmic dholak beats and powerful voices as 12 drama troupes from across state universities compete in our historic open-air circle. Each performance is a masterclass in synchrony, political awareness, and gripping theatrical drama.',
    category: 'Cultural',
    date: '2026-11-25',
    endDate: '2026-11-25',
    time: '10:00 AM - 04:30 PM',
    status: 'upcoming',
    venue: 'Student Activity Center Lawn Circle',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-rangmanch',
    organizerName: 'Rangmanch Dramatics Society',
    organizerAvatar: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=300&q=80',
    totalSeats: 400,
    registeredCount: 310,
    isFeatured: true,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '10:00 AM', title: 'Opening March & Dhol Performance' },
      { time: '10:30 AM', title: 'Morning Competition Block (6 Colleges)' },
      { time: '01:00 PM', title: 'Street Food Break' },
      { time: '02:00 PM', title: 'Afternoon Competition Block (6 Colleges)' },
      { time: '04:00 PM', title: 'Judges Critique & Trophy Distribution' }
    ],
    prerequisites: 'Open to all students, faculty and guests.',
    contactEmail: 'rangmanch@campusbuzz.edu'
  },
  {
    id: 'evt-inter-titans-league',
    title: 'Inter-Department 3v3 Basketball Showdown',
    shortDescription: 'Fast-paced half-court basketball under floodlights. Cheering crowd, DJ beats, and department pride.',
    fullDescription: '16 departmental squads battle it out in high-intensity 15-minute 3v3 matches following FIBA street rules. Fast transitions, step-back threes, and thunderous dunks. DJ sets running all evening with refreshing sports drinks for all participants.',
    category: 'Sports',
    date: '2026-11-22',
    endDate: '2026-11-22',
    time: '04:00 PM - 09:30 PM',
    status: 'upcoming',
    venue: 'Outdoor Floodlit Basketball Courts',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-sports',
    organizerName: 'Campus Titans Athletic Council',
    organizerAvatar: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80',
    totalSeats: 200,
    registeredCount: 178,
    isFeatured: false,
    isPopular: true,
    price: 'Free Spectator / $5 Team Entry',
    schedule: [
      { time: '04:00 PM', title: 'Team Warmups & 3-Point Shootout Contest' },
      { time: '04:45 PM', title: 'Round of 16 Knockouts' },
      { time: '06:30 PM', title: 'Quarter-Finals & Semi-Finals' },
      { time: '08:30 PM', title: 'Championship Match & MVP Trophy' }
    ],
    prerequisites: 'Appropriate court sneakers required for rostered players.',
    contactEmail: 'sports@campusbuzz.edu'
  },
  {
    id: 'evt-ai-workshop',
    title: 'Masterclass: Building Autonomous Agents with LLMs',
    shortDescription: 'Hands-on coding workshop constructing multi-step tool-using AI agents from scratch in Python.',
    fullDescription: 'Step beyond basic chat prompts! Learn how modern autonomous agents think, plan, call external APIs, parse structured outputs, and maintain short/long-term memory. We will build an autonomous research assistant live. Every attendee gets free cloud compute credits.',
    category: 'Workshops',
    date: '2026-11-16',
    endDate: '2026-11-16',
    time: '02:00 PM - 05:30 PM',
    status: 'upcoming',
    venue: 'Computing Block Lab 402',
    locationType: 'In-Person & Online Stream',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-gdsc',
    organizerName: 'Google Developer Student Club',
    organizerAvatar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80',
    totalSeats: 60,
    registeredCount: 58,
    isFeatured: false,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '02:00 PM', title: 'Agent Architecture: ReAct, Planning & Tools' },
      { time: '03:00 PM', title: 'Hands-on: Tool Calling & Function Integration' },
      { time: '04:15 PM', title: 'Implementing Long-term Memory & Vector Search' },
      { time: '05:00 PM', title: 'Q&A, Project Showcases & Cloud Credits' }
    ],
    prerequisites: 'Basic knowledge of Python. Bring your laptop with Python 3.10+ installed.',
    contactEmail: 'gdsc@campusbuzz.edu'
  },
  {
    id: 'evt-esports-clash',
    title: 'Campus Esports Championship: Valorant & FIFA 26',
    shortDescription: 'High-stake gaming showdown on 240Hz rigs with live commentary casting and spectator arena.',
    fullDescription: 'The ultimate esports tournament on campus! 32 teams battle in 5v5 Valorant tactical shooter brackets alongside 64 players in the 1v1 FIFA controller championship. Shoutcasting with big-screen displays and spectator gaming challenges.',
    category: 'Competitions',
    date: '2026-11-28',
    endDate: '2026-11-29',
    time: '10:00 AM - 08:00 PM',
    status: 'upcoming',
    venue: 'E-Sports Arena, SAC 2nd Floor',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-gdsc',
    organizerName: 'Google Developer Student Club',
    organizerAvatar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80',
    totalSeats: 120,
    registeredCount: 115,
    isFeatured: false,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '10:00 AM', title: 'FIFA Tournament Group Stage' },
      { time: '01:00 PM', title: 'Valorant Quarterfinals' },
      { time: '04:30 PM', title: 'FIFA Grand Final' },
      { time: '06:00 PM', title: 'Valorant Grand Final Bo3' }
    ],
    prerequisites: 'Peripheral brings allowed (mouse, keyboard, headset, controller).',
    contactEmail: 'esports@campusbuzz.edu'
  },
  {
    id: 'evt-past-fresher',
    title: 'Pulse 2026: Campus Freshers Welcome Bash',
    shortDescription: 'The orientation celebration featuring student DJ sets, icebreaker stalls, and welcome performances.',
    fullDescription: 'A memorable evening officially welcoming the batch of 2026 to campus life with live bands, fun club recruitment fairs, food trucks, and glow-stick dance floors.',
    category: 'Cultural',
    date: '2026-10-15',
    endDate: '2026-10-15',
    time: '05:00 PM - 10:00 PM',
    status: 'completed',
    venue: 'Main Sports Grounds',
    locationType: 'In-Person',
    banner: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    organizerId: 'club-rangmanch',
    organizerName: 'Rangmanch Dramatics Society',
    organizerAvatar: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=300&q=80',
    totalSeats: 800,
    registeredCount: 800,
    isFeatured: false,
    isPopular: true,
    price: 'Free Entry',
    schedule: [
      { time: '05:00 PM', title: 'Club Showcase & Stalls Open' },
      { time: '07:00 PM', title: 'Performances by Dance & Music Societies' },
      { time: '08:30 PM', title: 'DJ Night & Light Show' }
    ],
    prerequisites: 'Student ID card required.',
    contactEmail: 'welcome@campusbuzz.edu'
  }
];

