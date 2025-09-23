import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as motion from "motion/react-client";


const AboutKrishly = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  const problems = [
    {
      title: "Outdated Website Hurting Your Business",
      problem: "Your website looks outdated, loads slowly, and doesn't convert visitors.",
      solution: "We develop modern mobile-first designs optimized for speed and conversion-focused elements that turn visitors into customers."
    },
    {
      title: "Manual Processes Wasting Time & Money",
      problem: "Your team spends hours on repetitive tasks that could be automated.",
      solution: "We develop custom automation solutions that streamline your workflows, integrate your systems, and free up your team to focus on growth activities."
    },
    {
      title: "Poor Online Visibility",
      problem: "Your competitors are ranking higher and getting more online business.",
      solution: "We build optimized websites, implement proper analytics, and create digital marketing strategies that improve your online presence and drive qualified leads."
    },
    {
      title: "Technology Overwhelm",
      problem: "You know you need better tech solutions but don't know where to start.",
      solution: "We provide free technology audits, create clear roadmaps, and implement solutions in phases that fit your budget and timeline."
    }
  ];

  return (
    <section 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #E7F6FE 0%, #F0F9FF 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p variant="secondary" className="mb-4 text-sm font-semibold px-4 py-1">
            About Krishly
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            "Your Tech Solutions"
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through innovative technology solutions. We don't just build websites and apps - 
            we create digital experiences that drive real results for your business.
          </p>
        </motion.div>

        {/* Story, Vision, Mission Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
       

          {/* Our Vision */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-900 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  "Technology shouldn't be hindering. It should be your business's greatest advantage!"
                  We envision a world where every business owner can leverage technology to grow their business.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-900 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  "We turn your tech challenges into competitive advantages." Every day, we help business 
                  owners stop worrying about technology and start focusing on growing their business.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Common Problems Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Problems We Solve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We identify your challenges and provide tailored solutions that drive real business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p variant="destructive" className="mb-2">
                          Problem
                        </p>
                        <p className="text-gray-700">{problem.problem}</p>
                      </div>
                      <div>
                        <p variant="default" className="mb-2">
                          Our Solution
                        </p>
                        <p className="text-gray-700 font-medium">{problem.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can turn your technology challenges into competitive advantages.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKrishly;