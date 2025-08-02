// src/data/portfolioData.js
export const portfolioData = {
  personal: {
    name: "Raghavendra Ranganatha",
    title: "Civil Engineer & Sustainable Construction Researcher",
    email: "raghav1305@gmail.com",
    phone: "+1 (313) 767-6515",
    linkedin: "raghav-r-320949133",
    summary: "Civil Engineer with a strong research focus on sustainable and eco-friendly construction materials. With over 8 years of experience as a faculty member, I have guided numerous projects centered on incorporating environmentally impactful waste materials into concrete and analyzing their behavior at both macro and micro levels."
  },
  
  education: [
    {
      institution: "Wayne State University, Detroit, MI",
      degree: "Master of Science - Civil Engineering",
      period: "May 2025 - Current",
      coursework: ["River Assessment and Restoration - I"],
      status: "Current"
    },
    {
      institution: "SJC Institute of Technology",
      degree: "Master of Technology - Structural Engineering",
      period: "Sept 2013 - Oct 2015",
      gpa: "7.1/10",
      coursework: ["Special Concrete", "Advanced RCC", "Design Concepts of Substructure"],
      thesis: "Sustainable utilization of granite powder as a fine aggregate in High Performance Concrete"
    },
    {
      institution: "SJC Institute of Technology",
      degree: "Bachelor of Engineering - Civil Engineering",
      period: "Sept 2008 - June 2012",
      gpa: "6.7/10",
      coursework: ["Environmental Engineering", "Concrete Technology", "Solid Waste Management", "Environmental Impact Assessment"]
    }
  ],

  experience: [
    {
      company: "Don Bosco Institute of Technology",
      position: "Assistant Professor",
      period: "Sep 2021 - June 2024",
      achievements: [
        "Delivered 11 civil engineering courses with 100% exam success rate in 7",
        "Mentored 20 UG students on SDG-aligned projects",
        "Led NAAC Criterion-4 and NBA Criterion-7",
        "Headed cultural team and served on 25 committees"
      ]
    },
    {
      company: "M/S AVS Tech Building Solutions",
      position: "Structural Consultant and Site Engineer",
      period: "Jan 2021 - Sept 2021",
      achievements: [
        "Site supervisor for GRB Dairy Foods industrial facility (10 acres)",
        "Engineered floor systems to sustain 2 T/m² live load per floor",
        "Delivered precise floor finishing with ±5 mm horizontal level tolerance"
      ]
    },
    {
      company: "Sapthagiri College of Engineering",
      position: "Assistant Professor",
      period: "Aug 2017 - Aug 2020",
      achievements: [
        "Delivered 8 courses with 5 achieving 100% pass rates",
        "Mentored 60 UG students through graduation and career placement",
        "Led Institutional Building Management System"
      ]
    },
    {
      company: "Atria Institute of Technology",
      position: "Assistant Professor",
      period: "Aug 2015 - Aug 2017",
      achievements: [
        "Initiated academic career delivering 9 courses, with 3 achieving 100% pass rates",
        "Mentored 30 students, significantly enhancing their academic performance",
        "Contributed to institutional development through 10 committees"
      ]
    }
  ],

  skills: [
    { name: "STAAD Pro", level: 90, category: "Structural Analysis" },
    { name: "ETABS", level: 85, category: "Structural Analysis" },
    { name: "AutoCAD", level: 88, category: "Design Software" },
    { name: "Concrete Technology", level: 95, category: "Materials" },
    { name: "Sustainable Construction", level: 92, category: "Specialization" },
    { name: "Project Management", level: 87, category: "Management" },
    { name: "Environmental Engineering", level: 89, category: "Specialization" },
    { name: "MS Office", level: 85, category: "Documentation" }
  ],

  publications: [
    {
      title: "Experimental Behavior of Steel Fiber Reinforced Concrete with Partial Replacement of Gold Mine Waste",
      journal: "Nano World Journal",
      year: "2023",
      volume: "Volume 9, Issue 4",
      doi: "https://doi.org/10.17756/nwj.2023-s3-068"
    },
    {
      title: "Experimental Investigation on Strength and Behavior of PSC Fiber Reinforced Beams with GGBS",
      journal: "Journal of University of Shanghai for Science and Technology",
      year: "2021",
      volume: "Volume 23, Issue 12",
      award: "Best Paper Award - GCASSTE 2020"
    },
    {
      title: "Mechanical Property of HPC by Partial Replacement of Fine Aggregate Using Granite Scraps",
      journal: "IJASET",
      year: "2018",
      volume: "Vol-6, Iss-1, Spl. Issue-1"
    },
    {
      title: "Compressive Strength of High-Performance Concrete Using Granite Powder as Fine Aggregate",
      journal: "IJRET",
      year: "2015",
      volume: "Volume: 04 Special Issue: 04 ASHCE-2015"
    },
    {
      title: "Flexural Strength of High-Performance Concrete Using Granite Powder as Fine Aggregate",
      journal: "IJRET",
      year: "2015",
      volume: "Volume: 04 Special Issue: 04 ASHCE-2015"
    }
  ],

  projects: [
    {
      title: "Sustainable Granite Waste Utilization in HPC",
      description: "Research on incorporating granite powder as fine aggregate in High Performance Concrete to reduce environmental degradation and promote eco-friendly construction practices.",
      technologies: ["Materials Testing", "Concrete Technology", "Environmental Engineering", "Sustainability Analysis"],
      impact: "Reduced environmental degradation by minimizing granite waste disposal in landfills",
      category: "Research",
      duration: "2013-2015"
    },
    {
      title: "GRB Dairy Foods Industrial Facility",
      description: "10-acre industrial facility structural design and site supervision with specialized floor systems for heavy industrial loads.",
      technologies: ["STAAD Pro", "Structural Analysis", "Site Engineering", "Quality Control"],
      impact: "Delivered high-precision industrial structure meeting stringent standards with ±5mm tolerance",
      category: "Industrial",
      duration: "2021"
    },
    {
      title: "Multi-storey Building Analysis using STAAD Pro",
      description: "Comprehensive structural analysis and design of multi-storey buildings using advanced software for educational and practical applications.",
      technologies: ["STAAD Pro", "ETABS", "Structural Design", "AutoCAD"],
      impact: "Enhanced student understanding of modern structural analysis techniques",
      category: "Academic",
      duration: "2017-2024"
    },
    {
      title: "Steel Fiber Reinforced Concrete with Gold Mine Waste",
      description: "Experimental investigation on the behavior of steel fiber reinforced concrete using gold mine waste as partial replacement for fine aggregates.",
      technologies: ["Materials Testing", "Fiber Reinforcement", "Waste Utilization", "Experimental Analysis"],
      impact: "Innovative use of mining waste in sustainable concrete production",
      category: "Research",
      duration: "2022-2023"
    },
    {
      title: "PSC Fiber Reinforced Beams with GGBS",
      description: "Experimental study on strength and behavior of prestressed concrete fiber reinforced beams incorporating Ground Granulated Blast-furnace Slag.",
      technologies: ["Prestressed Concrete", "GGBS", "Structural Testing", "Performance Analysis"],
      impact: "Advanced understanding of sustainable concrete reinforcement techniques",
      category: "Research",
      duration: "2020-2021"
    }
  ],

  memberships: [
    {
      organization: "American Society of Civil Engineers",
      type: "Member",
      location: "USA"
    },
    {
      organization: "International Association of Engineers",
      type: "Member",
      location: "International"
    },
    {
      organization: "Indian Concrete Institute",
      type: "Life Member",
      location: "Karnataka – Bengaluru Centre"
    },
    {
      organization: "Association of Consulting Civil Engineers (India)",
      type: "Life Member",
      location: "Bangalore Centre"
    }
  ],

  technicalEvents: [
    {
      title: "FDP on Total Station",
      type: "Organized",
      date: "May 2018",
      description: "Faculty Development Program on surveying technology"
    },
    {
      title: "Smart Cities Technical Talk",
      type: "Organized",
      date: "October 2022",
      description: "Technical presentation on smart city development"
    },
    {
      title: "Fire and Life Safety in Buildings",
      type: "Organized",
      date: "October 2022",
      description: "Safety engineering technical talk"
    },
    {
      title: "Literature and Reference Management",
      type: "Organized",
      date: "October 2022",
      description: "Academic research methodology workshop"
    },
    {
      title: "REDECON International Seminar",
      type: "Attended",
      date: "2018",
      description: "5-day international seminar at Nimhans Conventional Center, Bangalore"
    }
  ]
};