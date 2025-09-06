import leetcode from "../assets/image/leetcode.png"
import gfg from "../assets/image/gfg.png"
import striver from "../assets/image/striver.png"
import naukri from "../assets/image/naukri.png"

const ProblemSolvingSection = () => {
  const platformStats = [
   {
  platform: "LeetCode",
  username: "Harshpatle18",
  profileUrl: "https://leetcode.com/u/Harshpatle18/",
  logo: leetcode,
  stats: {
    totalSolved: 261,
    easy: 207,
    medium: 51,
    hard: 3,
    ranking: 438895,
    contestRating: null,
    badges: 3,
    streak: 70,
  },
  recentActivity: [
    { problem: "Dynamic Programming Challenge", difficulty: "Hard", date: "2025-06-20", status: "Solved" },
    { problem: "Binary Search Practice", difficulty: "Medium", date: "2025-06-19", status: "Solved" },
    { problem: "String Manipulation", difficulty: "Easy", date: "2025-06-18", status: "Solved" },
  ],
},
   {
  platform: "GeeksforGeeks",
  username: "harshpatle18",
  profileUrl: "https://www.geeksforgeeks.org/user/harshpatle18/",
  logo: gfg,
  stats: {
    totalSolved: 31,
    codingScore: 63,
    streak: 1,
    badges: 2,
    institution: "Jai Narain College of Technology (JNCT) Bhopal",
  },
  recentActivity: [
    { problem: "Longest Common Subsequence", difficulty: "Medium", date: "2025-06-16", status: "Solved" },
    { problem: "Array Rotation", difficulty: "Easy", date: "2025-06-15", status: "Solved" },
  ],
},
{
  platform: "Striver A2Z DSA Sheet",
  username: "Harshpatle18",
  profileUrl: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  logo: striver,
  stats: {
    totalSolved: 113,
    easy: 73,
    medium: 37,
    hard: 3,
    streak: 4,
  },
  recentActivity: [
    { problem: "Merge Sort", difficulty: "Medium", date: "2025-06-10", status: "Solved" },
    { problem: "Reverse a Linked List", difficulty: "Easy", date: "2025-06-09", status: "Solved" },
  ],
},
{
  platform: "Code360",
  username: "harshpatle18",
  profileUrl: "https://www.naukri.com/code360/profile/b5a7b6d9-9e4e-4b7a-8be1-c60323407bbf",
  logo: naukri, // or use a placeholder if needed
  stats: {
    totalSolved: 25,
    codingProblems: 25,
    streak: 0,
    longestStreak: 4,
    streakFreeze: 3,
  },
  recentActivity: [
    { problem: "Stacks and Queues Masterclass", difficulty: "Medium", date: "2025-06-15", status: "Solved" },
    { problem: "Sorting Problems Level 2", difficulty: "Medium", date: "2025-06-10", status: "Solved" }
  ],
}

  ]

  const skillCategories = [
    {
      category: "Data Structures",
      problems: 245,
      mastery: 85,
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Hash Tables", "Heaps"],
    },
    {
      category: "Algorithms",
      problems: 198,
      mastery: 78,
      topics: ["Dynamic Programming", "Greedy", "Backtracking", "Divide & Conquer", "Sorting"],
    },
    {
      category: "System Design",
      problems: 34,
      mastery: 72,
      topics: ["Scalability", "Load Balancing", "Caching", "Database Design", "Microservices"],
    },
    {
      category: "Database",
      problems: 89,
      mastery: 88,
      topics: ["SQL Queries", "Optimization", "Indexing", "Joins", "Stored Procedures"],
    },
  ]

  const achievements = [
  {
    title: "50-Day Streak Badge",
    description: "Earned a 50-day continuous problem-solving badge on LeetCode",
    date: "2024-11-14",      // adjust if you have the exact day
    platform: "LeetCode",
    icon: "🏅",
    color: "text-orange-600",
  },
  {
    title: "100-Day Streak Badge",
    description: "Earned a 100-day continuous problem-solving badge on LeetCode",
    date: "2024-12-31",      // placeholder—set to the actual badge date if different
    platform: "LeetCode",
    icon: "🔥",
    color: "text-red-600",
  },
  {
    title: "50-Day Streak Badge (2025)",
    description: "Achieved another 50-day solving streak in 2025",
    date: "2025-06-15",      // estimate—update with the exact day you hit 50 days
    platform: "LeetCode",
    icon: "⚡",
    color: "text-yellow-600",
  },
  {
    title: "270 Questions Solved",
    description: "Solved 270 coding problems on LeetCode in total",
    date: "2025-04-12",      // the date you crossed the 270 mark
    platform: "LeetCode",
    icon: "📈",
    color: "text-green-600",
  },
  {
    title: "SQL 50-Questions Badge",
    description: "Earned a badge for solving 50 SQL problems on LeetCode",
    date: "2025-04-12",      // same date as above unless you know the exact SQL badge date
    platform: "LeetCode",
    icon: "💾",
    color: "text-blue-600",
  },
];


  const recentProblems = [
    {
      title: "Median of Two Sorted Arrays",
      platform: "LeetCode",
      difficulty: "Hard",
      topics: ["Binary Search", "Arrays"],
      timeComplexity: "O(log(min(m,n)))",
      spaceComplexity: "O(1)",
      date: "2024-01-15",
      status: "Solved",
      attempts: 3,
      solutionUrl: "https://github.com/yourusername/leetcode-solutions",
    },
    {
      title: "Design Twitter",
      platform: "LeetCode",
      difficulty: "Medium",
      topics: ["Hash Table", "Linked List", "Design", "Heap"],
      timeComplexity: "O(log N)",
      spaceComplexity: "O(N)",
      date: "2024-01-14",
      status: "Solved",
      attempts: 2,
      solutionUrl: "https://github.com/yourusername/leetcode-solutions",
    },
    {
      title: "Maximum Subarray",
      platform: "LeetCode",
      difficulty: "Easy",
      topics: ["Array", "Dynamic Programming"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      date: "2024-01-13",
      status: "Solved",
      attempts: 1,
      solutionUrl: "https://github.com/yourusername/leetcode-solutions",
    },
  ]

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes("Easy")) return "bg-green-100 text-green-800"
    if (difficulty.includes("Medium")) return "bg-yellow-100 text-yellow-800"
    if (difficulty.includes("Hard")) return "bg-red-100 text-red-800"
    return "bg-blue-100 text-blue-800"
  }

  const getStatusColor = (status) => {
    return status === "Solved" ? "text-green-600" : "text-orange-600"
  }

  return (
    <div className="space-y-6 bg-gray-900 text-gray-200 p-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Problem Solving Dashboard</h2>
        <div className="w-20 h-1 bg-blue-500 mb-6"></div>
      </div>

      {/* Overall Stats */}
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
    <div className="text-2xl font-bold text-blue-400">414</div>
    <div className="text-sm text-gray-400">Total Problems Solved</div>
  </div>
  <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
    <div className="text-2xl font-bold text-green-400">4</div>
    <div className="text-sm text-gray-400">Active Platforms</div>
  </div>
  <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
    <div className="text-2xl font-bold text-purple-400">0</div>
    <div className="text-sm text-gray-400">Current Streak</div>
  </div>
  <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
    <div className="text-2xl font-bold text-orange-400">52%</div>
    <div className="text-sm text-gray-400">Success Rate</div>
  </div>
</div>


      {/* Platform Statistics */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">📊 Platform Statistics</h3>
        <div className="grid gap-6">
          {platformStats.map((platform, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={platform.logo || "/placeholder.svg"}
                      alt={`${platform.platform} logo`}
                      className="w-12 h-12 rounded-lg bg-white p-2"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-white">{platform.platform}</h4>
                      <p className="text-sm text-gray-200">@{platform.username}</p>
                    </div>
                  </div>
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stats */}
                  <div>
                    <h5 className="font-semibold mb-4 flex items-center gap-2 text-white">📈 Statistics</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Total Solved:</span>
                        <span className="font-semibold text-white">{platform.stats.totalSolved}</span>
                      </div>
                      {platform.platform === "LeetCode" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-green-400">Easy: {platform.stats.easy}</span>
                            <span className="text-yellow-400">Medium: {platform.stats.medium}</span>
                            <span className="text-red-400">Hard: {platform.stats.hard}</span>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                        <span className="text-sm text-gray-400">Current Streak:</span>
                        <span className="font-semibold text-orange-400 flex items-center gap-1">
                          ⚡ {platform.stats.streak} days
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <h5 className="font-semibold mb-4 flex items-center gap-2 text-white">🕒 Recent Activity</h5>
                    <div className="space-y-3">
                      {platform.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-sm text-white">{activity.problem}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(activity.difficulty)}`}>
                                {activity.difficulty}
                              </span>
                              <span className="text-xs text-gray-300">{activity.date}</span>
                            </div>
                          </div>
                          <span className={`text-sm font-medium ${getStatusColor(activity.status)}`}>
                            ✅ {activity.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">🧠 Skills Breakdown</h3>
        <div className="grid gap-6">
          {skillCategories.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold flex items-center gap-2 text-white">🎯 {skill.category}</h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">{skill.mastery}%</div>
                  <div className="text-xs text-gray-400">Mastery</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{skill.problems} problems solved</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${skill.mastery}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  {skill.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="px-2 py-1 border border-gray-600 text-gray-200 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Achievements */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">🏆 Achievements</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gray-700 ${achievement.color} text-2xl`}>{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-white">{achievement.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 border border-gray-600 text-gray-200 rounded text-xs">
                      {achievement.platform}
                    </span>
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Towards Next Goals */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-500 border-2 border-blue-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">🎯 Next Goals</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>LeetCode Guardian (500 problems)</span>
                <span>261/500</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "54.7%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>100-Day Streak</span>
                <span>75/100</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolvingSection
