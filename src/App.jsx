import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

// Home stays eager — it's the first paint for most visitors.
import Home from './pages/Home'

// Everything else is route-split: visitors only download the page they asked for.
const About = lazy(() => import('./pages/About'))
const AboutStory = lazy(() => import('./pages/about/Story'))
const AboutVision = lazy(() => import('./pages/about/Vision'))
const AboutValues = lazy(() => import('./pages/about/Values'))
const AboutLeadership = lazy(() => import('./pages/about/Leadership'))
const AboutDepartments = lazy(() => import('./pages/about/Departments'))
const AboutTeam = lazy(() => import('./pages/about/Team'))
const AboutCareers = lazy(() => import('./pages/about/Careers'))

const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Solutions = lazy(() => import('./pages/Solutions'))
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'))
const Industries = lazy(() => import('./pages/Industries'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Hardware = lazy(() => import('./pages/Hardware'))

const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightsNews = lazy(() => import('./pages/insights/News'))
const InsightsApproach = lazy(() => import('./pages/insights/Approach'))
const InsightsResources = lazy(() => import('./pages/insights/Resources'))
const InsightsCaseStudies = lazy(() => import('./pages/insights/CaseStudies'))
const Global = lazy(() => import('./pages/Global'))
const Contact = lazy(() => import('./pages/Contact'))

const NotFound = lazy(() => import('./pages/NotFound'))

// Minimal, layout-stable fallback — avoids a blank flash between chunks.
function RouteFallback() {
  return <div style={{ minHeight: '60vh' }} aria-hidden="true" />
}

export default function App() {
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