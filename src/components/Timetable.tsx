import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, Clock } from 'lucide-react';
import { getTimetableData } from '../data/timetableData';

export default function Timetable() {
  const { year } = useParams();
  const [searchText, setSearchText] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const timetableData = getTimetableData(year || '');

  const filteredData = timetableData.filter((entry) => {
    const matchesSearch = !searchText
      ? true
      : Object.values(entry).some((value) =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        );

    const matchesTeacher = !selectedTeacher || entry.teacher === selectedTeacher;
    const matchesSubject = !selectedSubject || entry.subject === selectedSubject;
    const matchesDay = !selectedDay || entry.day === selectedDay;

    return matchesSearch && matchesTeacher && matchesSubject && matchesDay;
  });

  const teachers = [...new Set(timetableData.map((entry) => entry.teacher).filter(Boolean))];
  const subjects = [...new Set(timetableData.map((entry) => entry.subject).filter(Boolean))];
  const days = [...new Set(timetableData.map((entry) => entry.day).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link
            to="/years"
            className="mr-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-400" />
            {year === '2' ? 'Second' : year === '3' ? 'Third' : 'Fourth'} Year Timetable
          </h1>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-8 border border-gray-700">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-2 text-white"
            >
              <option value="" className="bg-gray-900">All Teachers</option>
              {teachers.map((teacher) => (
                <option key={teacher} value={teacher} className="bg-gray-900">
                  {teacher}
                </option>
              ))}
            </select>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-2 text-white"
            >
              <option value="" className="bg-gray-900">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject} className="bg-gray-900">
                  {subject}
                </option>
              ))}
            </select>

            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-2 text-white"
            >
              <option value="" className="bg-gray-900">All Days</option>
              {days.map((day) => (
                <option key={day} value={day} className="bg-gray-900">
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                    Timings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                    Subjects
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                    Teacher
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredData.map((entry, index) => (
                  <tr
                    key={index}
                    className="text-gray-300 hover:bg-gray-800/50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.day}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.timing}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                      {entry.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.teacher}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                      No timetable entries found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}