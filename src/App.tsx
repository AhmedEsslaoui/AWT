import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { DashboardIntro } from './components/dashboard/DashboardIntro';
import { TeamSection } from './components/team/TeamSection';
import { TeamPhases } from './components/TeamPhases';
import { plans } from './data/plans';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <DashboardIntro />
        
        <TeamPhases />

        {plans.map((plan, index) => (
          <TeamSection key={plan.name} plan={plan} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;