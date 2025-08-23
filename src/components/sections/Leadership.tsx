"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiStar, FiTarget } from "react-icons/fi";
import useScrollVisibility from "@/hooks/useScrollVisibility";

const Leadership = () => {
  const isVisible = useScrollVisibility("leadership");

  const leadershipRoles = [
    {
      role: "Sponsorship Head",
      organization: "Technovanza (VJTI's Technical Festival)",
      period: "2021-2022",
      description: "Led sponsorship acquisition for one of India's largest student-run technical festivals",
      achievements: [
        {
          icon: <FiTarget className="text-sm" />,
          text: "Secured HP as Title Sponsor, bringing in significant funding for the event"
        },
        {
          icon: <FiUsers className="text-sm" />,
          text: "Onboarded 10+ brands including Dell, Intel, and Coding Blocks"
        },
        {
          icon: <FiStar className="text-sm" />,
          text: "Managed logistics for 70,000+ attendees across 3 days"
        }
      ],
      icon: <FiAward className="text-xl" />,
      color: "primary"
    },
    {
      role: "PR Executive",
      organization: "Pratibimb (VJTI's Cultural Festival)",
      period: "2020-2021",
      description: "Managed public relations and social media for the annual cultural festival",
      achievements: [
        {
          icon: <FiTrendingUp className="text-sm" />,
          text: "Achieved 30% growth in social media followers during the campaign period"
        },
        {
          icon: <FiStar className="text-sm" />,
          text: "Generated 20,000+ organic impressions through strategic content marketing"
        },
        {
          icon: <FiUsers className="text-sm" />,
          text: "Built strong relationships with media partners and influencers"
        }
      ],
      icon: <FiUsers className="text-xl" />,
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/20"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
    }
  };

  return (
    <section 
      id="leadership" 
      className="pt-25 pb-40 px-4 relative bg-background border-y border-border/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl floating"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 rounded-full bg-accent/5 blur-3xl floating-slow"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 text-music-note text-4xl opacity-5"
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ♩
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.9,
            ease: "easeOut"
          }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title justify-center">
              Leadership & Impact
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Beyond technical skills, I&apos;ve led teams and initiatives that created lasting impact in academic and cultural communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipRoles.map((role, index) => {
              const colorClasses = getColorClasses(role.color);
              
              return (
                <motion.div 
                  key={index} 
                  className="apple-card p-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`mr-5 p-4 rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{role.role}</h3>
                      <p className="text-primary text-lg font-semibold mb-1">{role.organization}</p>
                      <p className="text-foreground/70 text-sm">{role.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-5 text-sm">{role.description}</p>
                  
                  <ul className="space-y-3">
                    {role.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6,
                          delay: (index * 0.2) + (i * 0.1),
                          ease: "easeOut"
                        }}
                      >
                        <span className={`mr-3 mt-0.5 ${colorClasses.text}`}>
                          {achievement.icon}
                        </span>
                        <span className="text-foreground/90 text-sm">{achievement.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;