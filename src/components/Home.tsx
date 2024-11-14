import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div 
      className="min-h-screen text-white bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Calendar className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Fr. Conceição Rodrigues College</h1>
          <p className="text-xl text-blue-200">The Academic Time Table Of Electronics And Computer Science</p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <GraduationCap className="w-12 h-12 text-blue-300" />
              <Clock className="w-12 h-12 text-blue-300" />
            </div>
            <p className="text-center text-xl mb-8">
              Access your academic timetable with ease. Stay organized and never miss a class.
            </p>
            <div className="flex justify-center">
              <Link
                to="/years"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-colors duration-200"
              >
                Time Table →
              </Link>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Created by Lance, Sahil and Slavik
        </footer>
      </div>
    </div>
  );
}