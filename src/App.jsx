'use client'

import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import anime from 'animejs';
import Layout from './Layout';

import Home from './pages/Home'

import About from './pages/About'
import AboutStory from './pages/about/Story'
import AboutVision from './pages/about/Vision'
import AboutValues from './pages/about/Values'
import AboutLeadership from './pages/about/Leadership'
import AboutDepartments from './pages/about/Departments'
import AboutTeam from './pages/about/Team'
import AboutCareers from './pages/about/Careers'

import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Hardware from './pages/Hardware'

import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Insights from './pages/Insights'
import InsightsNews from './pages/insights/News'
import InsightsApproach from './pages/insights/Approach'
import InsightsResources from './pages/insights/Resources'
import InsightsCaseStudies from './pages/insights/CaseStudies'

import Global from './pages/Global'
import Contact from './pages/Contact'

import NotFound from './pages/NotFound'

// Minimal, layout-stable fallback — avoids a blank flash between chunks.
function RouteFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper)',
      color: 'var(--ink)',
      fontFamily: 'var(--f-body)'
    }}>
      Loading...
    </div>
  );
}

export default function App() {
  // Animate .eyebrow elements on mount
  useEffect(() => {
    anime({
      targets: '.eyebrow',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 600,
      delay: (i) => i * 50,
      ease: 'outQuad',
    });
  }, []);

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* About hub + sub-pages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/vision-mission" element={<AboutVision />} />
          <Route path="/about/values" element={<AboutValues />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path="/about/departments" element={<AboutDepartments />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/careers" element={<AboutCareers />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Solutions */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />

          {/* Industries */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          {/* Hardware */}
          <Route path="/hardware" element={<Hardware />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* Insights */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/news" element={<InsightsNews />} />
          <Route path="/insights/approach" element={<InsightsApproach />} />
          <Route path="/insights/resources" element={<InsightsResources />} />
          <Route path="/insights/case-studies" element={<InsightsCaseStudies />} />

          {/* Global + Contact */}
          <Route path="/global" element={<Global />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
