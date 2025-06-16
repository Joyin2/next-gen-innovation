import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, User, Search, Tag, ChevronDown, ExternalLink } from "lucide-react";
import { useRoute, Link, useLocation } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  tags: string[];
}

// Static blog posts data
const staticBlogPosts: BlogPost[] = [
  {
    id: "6",
    title: "Tech Employment In New York State and In New York City",
    content: "Employment in the New York State tech sector totaled 321,280 jobs in 2021. New York had the third largest total after California and Texas.\n\nMuch of the growth in New York State was concentrated in New York City, where over half (54 percent) of the State's tech jobs were in 2021. Between 2016 and 2021, New York City added a total of 43,430 jobs while in the rest of the State, the sector lost 3,210 jobs. When compared to all other states, New York City's growth of 33.6 percent ranked second behind only Washington State's growth of 34.7 percent during the same period.\n\nThe City of New York also has experienced a large growth in tech jobs. The growth in tech jobs in New York City was not limited to the tech sector alone. Businesses outside the sector also employ workers in tech occupations, such as software developers or computer programmers, and those occupations also experienced growth in the past decade. As a result, there are many tech jobs in non-tech sectors.\n\nWhen combined with the jobs in the tech sector, the City had a total of 281,100 tech jobs in 2021, 58 percent higher than in 2011. More than three-fifths (61 percent) of these jobs were in the tech sector.\n\nAt a time when New York City still has 173,000 fewer jobs than it did before the start of the pandemic, the tech sector will be crucial to igniting a long-term post-pandemic jobs recovery. New York is already well positioned in many of the emerging tech sub-industries poised for growth. A detailed analysis of data from Crunchbase shows that the city has experienced start-up growth of at least 50 percent in ten different tech fields since 2016—from blockchain and real estate tech to women's and family tech, artificial intelligence, and augmented reality.",
    author: "Next Generation Innovation Marketing",
    date: "2024-02-19",
    imageUrl: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["Technology", "Employment", "New York", "Tech Jobs"]
  },
  {
    id: "4",
    title: "What is New in Minority and Women Owned Business Enterprise Landscape in New York?",
    content: "New York Governor Kathy Hochul signed into law a package of three bills recently that will increase oversight of the Minority-and Women-Owned Business Enterprise (MWBE) infrastructure in New York state (NYS). The first bill is aimed at preventing fraud and abuse in the MWBE program while also creating a framework for a fund to investigate and audit fraud. The second bill will allow businesses to use MWBE development and lending program funds to refinance existing debts. The third bill, which may be the most impactful, allows New York City to award contracts up to $1 million to MWBEs without a formal competitive process.\n\nNew York State is home to a vibrant community of minority- and women-owned businesses (MWBEs). These businesses play a crucial role in the state's economy and contribute to its diversity. Here are some key points about MWBEs in New York:\n\nHigh Utilization Rate: New York has the highest MWBE utilization rate in the country. This means that a significant portion of state contracts and business opportunities are awarded to MWBEs.\n\nCertification Process: A minority or women business owner become MWBE-certified through the Division of Minority and Women's Business Development (DMWBD). The certification process is decentralized, and one can take the preliminary steps using the MWBE Certification Assessment Tool.\n\nBusiness Development Assistance: The DMWBD provides information and resources to help MWBEs expand their businesses. Whether one needs guidance on growth strategies or wants to explore economic development projects, they can assist the company.\n\nNext Generation Innovation L.L.C. is a MBWE Company located in New York City.",
    author: "Next Generation Innovation Marketing",
    date: "2024-05-08",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["MWBE", "Business", "New York", "Policy Changes"]
  },
  {
    id: "5",
    title: "Innovation hotspots in New York",
    content: "New York is a hub of innovation, and several regions within the state foster entrepreneurial growth and technological advancements. Here are some notable innovation hotspots in New York:\n\nInnovate 518 (Capital Region): Innovate 518 serves as the designated Capital Region Innovation Hot Spot. It connects early-stage startups with financial resources, valuable information, and networking opportunities. The program aims to accelerate innovation and support businesses in various sectors, including biomedical.\n\nFive New York Cities Leading Innovation:\nAlbany: Home to the Biomedical Acceleration and Commercialization Center (BACC), Albany fosters innovation in the biomedical field. BACC provides incubation services and is part of the STARTUP-NY program.\nBuffalo: Buffalo's innovation ecosystem thrives in areas such as advanced manufacturing, life sciences, and clean energy. The city collaborates with academic institutions and industry partners to drive progress.\nRochester: Known for its expertise in optics, imaging, and photonics, Rochester hosts the Rochester Institute of Technology (RIT) and other research centers. It's a hotspot for technological advancements.\nSyracuse: Syracuse focuses on cybersecurity, unmanned systems, and data analytics. The Tech Garden, an incubator, supports startups and entrepreneurs in these fields.\nIthaca: Home to Cornell University, Ithaca thrives in agtech, biotech, and sustainable agriculture. The university's research facilities contribute significantly to the region's innovation.\n\nStatewide Network of Support:\nCertified Business Incubators: New York has 20 Certified Business Incubators, which receive funding to assist early-stage companies. These incubators provide services like physical space, administrative support, access to capital, coaching, mentoring, and networking connections.\nInnovation Hot Spots: NYSTAR designates 10 Innovation Hot Spots, one for each economic development region. These hotspots coordinate regional entrepreneurial ecosystems and offer tax benefits to client businesses.\n\nNext Generation Innovation is a company with an established track record of innovation. The principals have experience in fostering creativity, generating novel ideas, and transforming them into valuable products, services, and processes.",
    author: "Next Generation Innovation Marketing",
    date: "2024-02-29",
    imageUrl: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["Innovation", "New York", "Technology", "Startups"]
  },
];

export default function Blog() {
  // State for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [, params] = useRoute("/blog/:id");
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    document.title = "Blog | Next Generation Innovation";
    window.scrollTo(0, 0);
    
    // Handle mouse movement for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Use static blog posts instead of fetching from Firebase
    const sortedPosts = [...staticBlogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    setBlogPosts(sortedPosts);
    setFilteredPosts(sortedPosts);
    
    // Extract all unique tags
    const tags = new Set<string>();
    sortedPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    setAllTags(Array.from(tags));
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -10px rgba(0, 206, 209, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Scroll to next section function
  const scrollToNextSection = () => {
    const heroHeight = document.querySelector('section').offsetHeight;
    window.scrollTo({
      top: heroHeight - 50,
      behavior: 'smooth'
    });
  };

  // Handle search and filtering
  useEffect(() => {
    let result = blogPosts;
    
    // Apply search term filter
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply tag filter
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag));
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedTag, blogPosts]);

  // Handle single post view
  useEffect(() => {
    if (params && params.id) {
      const post = blogPosts.find(p => p.id === params.id);
      if (post) {
        setCurrentPost(post);
        document.title = `${post.title} | Next Generation Innovation`;
      }
    } else {
      setCurrentPost(null);
      document.title = "Blog | Next Generation Innovation";
    }
  }, [params, blogPosts]);

  // If viewing a single post
  if (currentPost) {
    return (
      <main className="bg-background text-foreground min-h-screen overflow-hidden">
        {/* Hero Section with enhanced parallax effect */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
          {/* Enhanced background elements with parallax */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95"></div>
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y: y1, opacity }}
          >
            <motion.div 
              className="absolute top-1/3 left-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-cyan-500 blur-3xl"
              animate={{
                x: mousePosition.x * -30,
                y: mousePosition.y * -30,
              }}
              transition={{ type: "spring", damping: 25, stiffness: 50 }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-blue-700 blur-3xl"
              animate={{
                x: mousePosition.x * 30,
                y: mousePosition.y * 30,
              }}
              transition={{ type: "spring", damping: 25, stiffness: 50 }}
            />
          </motion.div>
          
          {/* Enhanced floating particles with more variety - reduced for mobile */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? 'bg-cyan-500' : 
                  i % 3 === 1 ? 'bg-blue-600' : 'bg-purple-500'
                } opacity-30`}
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, Math.random() * 0.5 + 1, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 z-10">
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                variants={fadeIn}
              >
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  {currentPost.title}
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 sm:mb-8"
                variants={fadeIn}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "6rem", opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
              />
              
              <motion.div 
                className="flex items-center justify-center space-x-4 text-foreground/80 mb-6"
                variants={fadeIn}
              >
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                  {new Date(currentPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-cyan-500" />
                  {currentPost.author}
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-2 mb-6"
                variants={fadeIn}
              >
                {currentPost.tags.map((tag, index) => (
                  <motion.span 
                    key={index} 
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 206, 209, 0.2)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6">
            {currentPost.imageUrl && (
              <motion.div 
                className="mb-8 rounded-xl overflow-hidden max-w-3xl mx-auto shadow-xl shadow-cyan-500/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src={currentPost.imageUrl} 
                  alt={currentPost.title} 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}
            
            <motion.div 
              className="prose prose-lg dark:prose-invert max-w-3xl mx-auto bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: 0.5,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />
              
              <div className="relative z-10">
                {currentPost.content.split('\n').map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="text-foreground/80"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-12 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a 
                href="/blog" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-full shadow-lg shadow-cyan-500/30 font-medium text-base sm:text-lg relative overflow-hidden group inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 206, 209, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Back to Blog</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  // Blog listing page
  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">
      {/* Hero Section with enhanced parallax effect */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Enhanced background elements with parallax */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95"></div>
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y1, opacity }}
        >
          <motion.div 
            className="absolute top-1/3 left-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-cyan-500 blur-3xl"
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 50 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-blue-700 blur-3xl"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 50 }}
          />
        </motion.div>
        
        {/* Enhanced floating particles with more variety - reduced for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-cyan-500' : 
                i % 3 === 1 ? 'bg-blue-600' : 'bg-purple-500'
              } opacity-30`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, Math.random() * 0.5 + 1, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 z-10">
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
              variants={fadeIn}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Our Blog
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 sm:mb-8"
              variants={fadeIn}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
            />
            
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12"
              variants={fadeIn}
            >
              Insights, news, and updates from 
              <motion.span 
                className="text-cyan-400 font-semibold"
                animate={{ 
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                {" our team"}
              </motion.span>
            </motion.p>
            
            <motion.div
              className="mt-4 sm:mt-8"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={scrollToNextSection}
                className="flex flex-col items-center text-muted-foreground hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="mb-2">Explore Articles</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Search and Filter */}
          <motion.div 
            className="mb-8 flex flex-col md:flex-row gap-4 bg-card backdrop-blur-md border border-border rounded-xl p-6 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
              animate={{ 
                opacity: 0.5,
                backgroundPosition: ['0% center', '100% center'],
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
              }}
              style={{ backgroundSize: '200% auto' }}
            />
            
            <div className="relative z-10 flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-cyan-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tag className="h-5 w-5 text-cyan-500" />
                </div>
                <select
                  value={selectedTag || ""}
                  onChange={(e) => setSelectedTag(e.target.value || null)}
                  className="pl-10 w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500 appearance-none"
                >
                  <option value="">All Tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.a 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="bg-card backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-xl shadow-cyan-500/5 relative"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  onHoverStart={() => setActiveCard(post.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  onClick={() => window.location.href = `/blog/${post.id}`} // Add this onClick handler
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                    animate={{ 
                      opacity: activeCard === post.id ? 0.5 : 0,
                      backgroundPosition: ['0% center', '100% center'],
                    }}
                    transition={{ 
                      opacity: { duration: 0.3 },
                      backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                    }}
                    style={{ backgroundSize: '200% auto' }}
                  />
                  
                  {post.imageUrl ? (
                    <div className="h-48 overflow-hidden">
                      <motion.img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 flex items-center justify-center">
                      <motion.span 
                        className="text-4xl text-cyan-500 opacity-30"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      >
                        NG
                      </motion.span>
                    </div>
                  )}
                  
                  <div className="p-6 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <motion.span 
                          key={index} 
                          className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 206, 209, 0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    
                    <p className="text-foreground/80 mb-4 line-clamp-3">{post.content}</p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-cyan-500" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 text-cyan-500" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12 bg-card backdrop-blur-md border border-border rounded-xl p-6 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                  animate={{ 
                    opacity: 0.5,
                    backgroundPosition: ['0% center', '100% center'],
                  }}
                  transition={{ 
                    opacity: { duration: 0.3 },
                    backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                />
                
                <div className="relative z-10">
                  <p className="text-xl text-foreground/80 mb-4">No blog posts found matching your criteria.</p>
                  <motion.button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTag(null);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-full shadow-lg shadow-cyan-500/30 font-medium text-base sm:text-lg relative overflow-hidden group inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 206, 209, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Clear Filters</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}