import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const years = [
  { id: 2, name: 'Second Year' },
  { id: 3, name: 'Third Year' },
  { id: 4, name: 'Fourth Year' },
];

export default function YearSelection() {
  return (
    <div 
      className="min-h-screen text-white bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Department Of Electronics And Computer Science</h1>
        </header>

        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-3">
          {years.map((year) => (
            <Link
              key={year.id}
              to={`/timetable/${year.id}`}
              className="group bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold mb-2">{year.name}</h2>
              <p className="text-blue-200">View timetable →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}